// Import Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Initialize Feather Icons
if (typeof feather !== 'undefined') {
    feather.replace();
}

// Server/API configuration
const PROXY_SERVER_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3002'  // Local development
    : '';  // Production - use relative URL (same origin)
const OPENAI_API_BASE = `${PROXY_SERVER_URL}/openai`;
const REPLICATE_API_BASE = `${PROXY_SERVER_URL}/replicate`;

/** OpenAI image URLs block canvas without CORS; load via our proxy (same-origin in prod, CORS-enabled in dev). */
function proxiedImageUrlForCanvas(remoteUrl) {
    if (!remoteUrl || typeof remoteUrl !== 'string') return remoteUrl;
    if (remoteUrl.startsWith('https://oaidalleapiprodscus.blob.core.windows.net/')) {
        const base = PROXY_SERVER_URL || '';
        return `${base}/proxy-image?url=${encodeURIComponent(remoteUrl)}`;
    }
    return remoteUrl;
}

// Supabase client (initialized after fetching config)
let supabase = null;
let appConfig = null;

// Auth state
let currentUser = null;
let currentSession = null;
let userCredits = 0;

// DOM Elements
const brandForm = document.getElementById('brand-form');
const brandNameInput = document.getElementById('brand-name');
const brandDescriptionInput = document.getElementById('brand-description');
const brandUseInput = document.getElementById('brand-use');
const logoIncludeTextInput = document.getElementById('logo-include-text');
const logoIncludeTextResultsInput = document.getElementById('logo-include-text-results');
const logoRegenerateFeedbackInput = document.getElementById('logo-regenerate-feedback');
const generateBtn = document.getElementById('generate-btn');
const inputSection = document.getElementById('input-section');
const resultsSection = document.getElementById('results-section');
const loadingState = document.getElementById('loading-state');
const resultsDisplay = document.getElementById('results-display');
const backBtn = document.getElementById('back-btn');
const resultsBrandName = document.getElementById('results-brand-name');
const brandNameSubtitle = document.getElementById('brand-name-subtitle');


// Results elements
let generatedLogo = document.getElementById('generated-logo');
const downloadLogoBtn = document.getElementById('download-logo-btn');
const regenerateLogoBtn = document.getElementById('regenerate-logo-btn');
const colorPaletteContainer = document.getElementById('color-palette-container');
const regenerateColorsBtn = document.getElementById('regenerate-colors-btn');
const moodBoardContainer = document.getElementById('mood-board-container');
const regenerateMoodBoardBtn = document.getElementById('regenerate-mood-board-btn');

// Color Picker Modal elements
const colorPickerModal = document.getElementById('color-picker-modal');
const closeColorPickerBtn = document.getElementById('close-color-picker-btn');
const colorPicker = document.getElementById('color-picker');
const colorHexInput = document.getElementById('color-hex-input');
const colorRInput = document.getElementById('color-r-input');
const colorGInput = document.getElementById('color-g-input');
const colorBInput = document.getElementById('color-b-input');
const colorPreviewSwatch = document.getElementById('color-preview-swatch');
const cancelColorBtn = document.getElementById('cancel-color-btn');
const saveColorBtn = document.getElementById('save-color-btn');

// Image Lightbox Modal elements
const imageLightboxModal = document.getElementById('image-lightbox-modal');
const closeLightboxBtn = document.getElementById('close-lightbox-btn');
const lightboxImage = document.getElementById('lightbox-image');

// Download Modal elements
const downloadModal = document.getElementById('download-modal');
const closeDownloadModalBtn = document.getElementById('close-download-modal-btn');

// Auth Modal elements
const authModal = document.getElementById('auth-modal');
const closeAuthModalBtn = document.getElementById('close-auth-modal-btn');
const authModalTitle = document.getElementById('auth-modal-title');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginError = document.getElementById('login-error');
const signupError = document.getElementById('signup-error');
const authSwitchBtn = document.getElementById('auth-switch-btn');
const authSwitchText = document.getElementById('auth-switch-text');
const authFormsSection = document.getElementById('auth-forms-section');
const signupSuccess = document.getElementById('signup-success');
const signupSuccessEmail = document.getElementById('signup-success-email');
const successCloseBtn = document.getElementById('success-close-btn');

// Auth buttons
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');

// User menu elements
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');
const userEmailDisplay = document.getElementById('user-email-display');

// Credits elements
const creditsDisplay = document.getElementById('credits-display');
const creditsCount = document.getElementById('credits-count');
const buyCreditsBtn = document.getElementById('buy-credits-btn');

// Buy Credits Modal elements
const buyCreditsModal = document.getElementById('buy-credits-modal');
const closeBuyCreditsModalBtn = document.getElementById('close-buy-credits-modal-btn');
const modalCreditsCount = document.getElementById('modal-credits-count');
const checkoutBtn = document.getElementById('checkout-btn');

// State
let currentBrandName = '';
let currentBrandDescription = '';
let currentBrandUse = '';
/** When false, logo prompt forbids lettering (symbol / abstract mark only). */
let currentLogoIncludeText = false;
let currentLogoUrl = '';
let currentLogoBlob = null; // Store the logo as a blob for downloads
/** 'svg' from Recraft V4 SVG (original download); resized exports are still PNG from canvas */
let currentLogoFormat = 'png';
let currentColors = [];
let currentMoodBoardUrls = [];
let editingColorIndex = -1; // Track which color is being edited

// Initialize app configuration and Supabase
async function initializeApp() {
    try {
        // Fetch config from server
        const response = await fetch(`${PROXY_SERVER_URL}/api/config`);
        appConfig = await response.json();
        
        // Initialize Supabase
        supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);
        
        // Check for existing session
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            currentUser = session.user;
            currentSession = session;
            await fetchUserCredits();
            updateAuthUI();
        }
        
        // Listen for auth state changes
        supabase.auth.onAuthStateChange(async (event, session) => {
            console.log('Auth state changed:', event, !!session);
            if (session) {
                currentUser = session.user;
                currentSession = session;
                await fetchUserCredits();
            } else {
                currentUser = null;
                currentSession = null;
                userCredits = 0;
            }
            updateAuthUI();
        });
        
        // Check for payment success/cancel in URL
        const urlParams = new URLSearchParams(window.location.search);
        const paymentStatus = urlParams.get('payment');
        if (paymentStatus === 'success') {
            // Show processing state immediately
            showToast('Processing payment...', 'loading');
            
            // Refresh credits after successful payment - try multiple times as webhook may take a moment
            console.log('Payment success detected, waiting for webhook to process...');
            let attempts = 0;
            const maxAttempts = 5;
            const previousCredits = userCredits;
            
            const checkCredits = async () => {
                attempts++;
                await fetchUserCredits();
                console.log(`Credit check attempt ${attempts}: previous=${previousCredits}, current=${userCredits}`);
                
                if (userCredits > previousCredits) {
                    showToast(`Payment successful! ${userCredits} credits now available.`, 'success');
                } else if (attempts < maxAttempts) {
                    // Webhook might not have processed yet, try again
                    setTimeout(checkCredits, 1500);
                } else {
                    showToast('Payment received! Credits may take a moment to appear.', 'info');
                }
            };
            setTimeout(checkCredits, 500);
            // Clean up URL
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (paymentStatus === 'cancelled') {
            showToast('Payment cancelled.', 'error');
            window.history.replaceState({}, document.title, window.location.pathname);
        }
        
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Fetch user credits from server
async function fetchUserCredits() {
    if (!currentUser || !currentSession) {
        console.log('fetchUserCredits: No current user or session');
        return;
    }
    
    try {
        console.log('fetchUserCredits: Fetching credits from server...');
        const response = await fetch(`${PROXY_SERVER_URL}/api/credits`, {
            headers: {
                'Authorization': `Bearer ${currentSession.access_token}`
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            userCredits = data.credits;
            console.log('fetchUserCredits: Got credits:', userCredits);
            updateCreditsDisplay();
        } else {
            const errorData = await response.json().catch(() => ({}));
            console.error('fetchUserCredits: Server error', response.status, errorData);
        }
    } catch (error) {
        console.error('fetchUserCredits: Error:', error);
    }
}

// Refresh balance and ensure the user can start a paid generation (does not deduct).
async function ensureCreditsBeforeGeneration() {
    if (!currentUser || !currentSession) {
        showAuthModal('login');
        return false;
    }
    await fetchUserCredits();
    if (userCredits <= 0) {
        showBuyCreditsModal();
        return false;
    }
    return true;
}

// Deduct one credit on the server (call only after a generation completes successfully).
async function useCredit() {
    try {
        console.log('useCredit: Starting, currentUser:', !!currentUser, 'currentSession:', !!currentSession, 'userCredits:', userCredits);
        
        if (!currentUser || !currentSession) {
            console.log('useCredit: No current user or session, showing auth modal');
            showAuthModal('login');
            return false;
        }
        console.log('useCredit: Passed auth check');
        
        if (userCredits <= 0) {
            console.log('useCredit: No credits, showing buy credits modal');
            showBuyCreditsModal();
            return false;
        }
        console.log('useCredit: Passed credits check');
        
        console.log('useCredit: Making API call to use credit...');
        const response = await fetch(`${PROXY_SERVER_URL}/api/credits/use`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        
        console.log('useCredit: API response status:', response.status);
        
        if (response.ok) {
            const data = await response.json();
            userCredits = data.credits;
            console.log('useCredit: Success, remaining credits:', userCredits);
            updateCreditsDisplay();
            return true;
        } else {
            const error = await response.json();
            console.log('useCredit: Server error:', error);
            if (error.error === 'No credits remaining') {
                showBuyCreditsModal();
            }
            return false;
        }
    } catch (error) {
        console.error('useCredit: Caught error:', error);
        return false;
    }
}

const REGENERATE_BTN_IDLE_HTML = {
    logo: '<i data-feather="refresh-cw"></i><span>Regenerate</span>',
    colors: '<i data-feather="refresh-cw"></i><span>Regenerate Colors</span>',
    moodboard: '<i data-feather="refresh-cw"></i><span>Regenerate Mood Board</span>',
};

function setRegenerateButtonLoading(btn, isLoading, idleInnerHtml) {
    if (!btn) return;
    if (isLoading) {
        btn.disabled = true;
        btn.innerHTML = '<i data-feather="loader" class="spin"></i><span>Regenerating...</span>';
    } else {
        btn.disabled = false;
        btn.innerHTML = idleInnerHtml;
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function setLogoIncludeTextPreference(checked) {
    currentLogoIncludeText = !!checked;
    if (logoIncludeTextInput) logoIncludeTextInput.checked = currentLogoIncludeText;
    if (logoIncludeTextResultsInput) logoIncludeTextResultsInput.checked = currentLogoIncludeText;
}

// Update credits display
function updateCreditsDisplay() {
    if (creditsCount) {
        creditsCount.textContent = userCredits;
    }
    if (modalCreditsCount) {
        modalCreditsCount.textContent = userCredits;
    }
}

// Toast notification system
let currentToast = null;

function showToast(message, type = 'info') {
    // Remove existing toast if any
    if (currentToast) {
        currentToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icons = {
        success: 'check-circle',
        error: 'x-circle',
        info: 'info',
        loading: 'loader'
    };
    
    toast.innerHTML = `
        <i data-feather="${icons[type] || 'info'}" class="${type === 'loading' ? 'spin' : ''}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    currentToast = toast;
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    // Auto-dismiss (except for loading)
    if (type !== 'loading') {
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
                if (currentToast === toast) {
                    currentToast = null;
                }
            }, 300);
        }, 4000);
    }
}

// Update UI based on auth state
function updateAuthUI() {
    if (currentUser) {
        // User is logged in
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        creditsDisplay.classList.remove('hidden');
        userEmailDisplay.textContent = currentUser.email.split('@')[0];
        updateCreditsDisplay();
    } else {
        // User is logged out
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        creditsDisplay.classList.add('hidden');
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Auth Modal functions
function showAuthModal(mode = 'login') {
    authModal.classList.remove('hidden');
    loginError.classList.add('hidden');
    signupError.classList.add('hidden');
    
    if (mode === 'login') {
        authModalTitle.textContent = 'Sign In';
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        authSwitchText.textContent = "Don't have an account?";
        authSwitchBtn.textContent = 'Sign Up';
    } else {
        authModalTitle.textContent = 'Create Account';
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        authSwitchText.textContent = 'Already have an account?';
        authSwitchBtn.textContent = 'Sign In';
    }
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function hideAuthModal() {
    authModal.classList.add('hidden');
    loginForm.reset();
    signupForm.reset();
    loginError.classList.add('hidden');
    signupError.classList.add('hidden');
    
    // Reset success message state
    signupSuccess.classList.add('hidden');
    authFormsSection.classList.remove('hidden');
}

// Login function
async function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    loginError.classList.add('hidden');
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        
        if (error) throw error;
        
        hideAuthModal();
    } catch (error) {
        loginError.textContent = error.message;
        loginError.classList.remove('hidden');
    }
}

// Signup function
async function handleSignup(e) {
    e.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    signupError.classList.add('hidden');
    
    if (password !== confirmPassword) {
        signupError.textContent = 'Passwords do not match';
        signupError.classList.remove('hidden');
        return;
    }
    
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });
        
        if (error) throw error;
        
        if (data.user && !data.session) {
            // Email confirmation required - show success message
            showSignupSuccess(email);
        } else {
            // User signed up and logged in immediately (email confirmation disabled)
            hideAuthModal();
        }
    } catch (error) {
        signupError.textContent = error.message;
        signupError.classList.remove('hidden');
    }
}

// Show signup success message
function showSignupSuccess(email) {
    // Hide forms and show success
    loginForm.classList.add('hidden');
    signupForm.classList.add('hidden');
    authFormsSection.classList.add('hidden');
    authModalTitle.textContent = 'Account Created';
    
    signupSuccessEmail.textContent = email;
    signupSuccess.classList.remove('hidden');
    
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Logout function
async function handleLogout() {
    try {
        await supabase.auth.signOut();
        userDropdown.classList.add('hidden');
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

// Buy Credits Modal functions
function showBuyCreditsModal() {
    console.log('showBuyCreditsModal: Called, currentUser:', !!currentUser);
    if (!currentUser) {
        showAuthModal('login');
        return;
    }
    updateCreditsDisplay();
    
    // Reset checkout button state in case it was left disabled
    checkoutBtn.disabled = false;
    checkoutBtn.innerHTML = '<i data-feather="credit-card"></i><span>Purchase Credits</span>';
    
    buyCreditsModal.classList.remove('hidden');
    console.log('showBuyCreditsModal: Modal shown');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function hideBuyCreditsModal() {
    buyCreditsModal.classList.add('hidden');
}

// Checkout function
async function handleCheckout() {
    console.log('handleCheckout: Starting...');
    
    if (!currentUser || !currentSession) {
        console.log('handleCheckout: No current user or session');
        showAuthModal('login');
        return;
    }
    
    try {
        checkoutBtn.disabled = true;
        checkoutBtn.innerHTML = '<span>Processing...</span>';
        
        console.log('handleCheckout: Creating checkout session...');
        const response = await fetch(`${PROXY_SERVER_URL}/api/checkout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        
        console.log('handleCheckout: Response status:', response.status);
        
        if (response.ok) {
            const { url } = await response.json();
            console.log('handleCheckout: Redirecting to Stripe...');
            window.location.href = url;
        } else {
            const errorData = await response.json().catch(() => ({}));
            console.error('handleCheckout: Server error:', errorData);
            throw new Error('Failed to create checkout session');
        }
    } catch (error) {
        console.error('handleCheckout: Error:', error);
        showToast('Error starting checkout. Please try again.', 'error');
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<i data-feather="credit-card"></i><span>Purchase Credits</span>';
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize app (Supabase, auth state)
    await initializeApp();
    

    // Event listeners
    brandForm.addEventListener('submit', handleFormSubmit);
    backBtn.addEventListener('click', goBackToInput);
    if (logoIncludeTextInput) {
        logoIncludeTextInput.addEventListener('change', () => {
            setLogoIncludeTextPreference(logoIncludeTextInput.checked);
        });
    }
    if (logoIncludeTextResultsInput) {
        logoIncludeTextResultsInput.addEventListener('change', () => {
            setLogoIncludeTextPreference(logoIncludeTextResultsInput.checked);
        });
    }
    downloadLogoBtn.addEventListener('click', showDownloadModal);
    regenerateLogoBtn.addEventListener('click', () => handleRegenerate('logo'));
    regenerateColorsBtn.addEventListener('click', () => handleRegenerate('colors'));
    regenerateMoodBoardBtn.addEventListener('click', () => handleRegenerate('moodboard'));

    // Auth event listeners
    loginBtn.addEventListener('click', () => showAuthModal('login'));
    signupBtn.addEventListener('click', () => showAuthModal('signup'));
    closeAuthModalBtn.addEventListener('click', hideAuthModal);
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) hideAuthModal();
    });
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);
    authSwitchBtn.addEventListener('click', () => {
        const isLogin = !loginForm.classList.contains('hidden');
        showAuthModal(isLogin ? 'signup' : 'login');
    });
    successCloseBtn.addEventListener('click', hideAuthModal);
    logoutBtn.addEventListener('click', handleLogout);
    
    // User menu dropdown
    userMenuBtn.addEventListener('click', () => {
        userDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        if (!userMenu.contains(e.target)) {
            userDropdown.classList.add('hidden');
        }
    });
    
    // Credits event listeners
    buyCreditsBtn.addEventListener('click', showBuyCreditsModal);
    creditsCount.addEventListener('click', async () => {
        console.log('Manually refreshing credits...');
        creditsCount.style.opacity = '0.5';
        await fetchUserCredits();
        creditsCount.style.opacity = '1';
    });
    creditsCount.style.cursor = 'pointer';
    creditsCount.title = 'Click to refresh';
    closeBuyCreditsModalBtn.addEventListener('click', hideBuyCreditsModal);
    buyCreditsModal.addEventListener('click', (e) => {
        if (e.target === buyCreditsModal) hideBuyCreditsModal();
    });
    checkoutBtn.addEventListener('click', handleCheckout);

    // Color picker modal event listeners
    closeColorPickerBtn.addEventListener('click', hideColorPickerModal);
    cancelColorBtn.addEventListener('click', hideColorPickerModal);
    saveColorBtn.addEventListener('click', saveColorChange);
    colorPicker.addEventListener('input', updateColorFromPicker);
    colorHexInput.addEventListener('input', updateColorFromHex);
    colorRInput.addEventListener('input', updateColorFromRGB);
    colorGInput.addEventListener('input', updateColorFromRGB);
    colorBInput.addEventListener('input', updateColorFromRGB);

    // Close modal on overlay click
    colorPickerModal.addEventListener('click', (e) => {
        if (e.target === colorPickerModal) {
            hideColorPickerModal();
        }
    });

    // Image lightbox event listeners
    closeLightboxBtn.addEventListener('click', hideImageLightbox);
    imageLightboxModal.addEventListener('click', (e) => {
        if (e.target === imageLightboxModal) {
            hideImageLightbox();
        }
    });

    // Download modal event listeners
    closeDownloadModalBtn.addEventListener('click', hideDownloadModal);
    downloadModal.addEventListener('click', (e) => {
        if (e.target === downloadModal) {
            hideDownloadModal();
        }
    });

    // Download option buttons
    document.querySelectorAll('.download-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const size = btn.dataset.size;
            const category = btn.dataset.category || 'original';
            downloadLogoAtSize(size, category);
        });
    });

    // Download all buttons
    document.querySelectorAll('.download-all-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            downloadAllInCategory(category);
        });
    });

});

// Form submission
// Handle regeneration with credit check
async function handleRegenerate(type) {
    if (type === 'logo') {
        setRegenerateButtonLoading(regenerateLogoBtn, true, REGENERATE_BTN_IDLE_HTML.logo);
        try {
            const canStart = await ensureCreditsBeforeGeneration();
            if (!canStart) return;
            await generateLogo(true, true);
            const deducted = await useCredit();
            if (!deducted) {
                showToast('Logo was generated but your credits could not be updated. Please refresh the page.', 'error');
            }
        } catch {
            /* generateLogo already alerted */
        } finally {
            setRegenerateButtonLoading(regenerateLogoBtn, false, REGENERATE_BTN_IDLE_HTML.logo);
        }
    } else if (type === 'colors') {
        setRegenerateButtonLoading(regenerateColorsBtn, true, REGENERATE_BTN_IDLE_HTML.colors);
        setRegenerateButtonLoading(regenerateLogoBtn, true, REGENERATE_BTN_IDLE_HTML.logo);
        setRegenerateButtonLoading(regenerateMoodBoardBtn, true, REGENERATE_BTN_IDLE_HTML.moodboard);
        try {
            const canStart = await ensureCreditsBeforeGeneration();
            if (!canStart) return;

            resultsDisplay.classList.add('hidden');
            loadingState.classList.remove('hidden');

            await generateColorPalette(true, false, true);
            await generateLogo(true, true);
            await generateMoodBoard(true, true);
            const deducted = await useCredit();
            if (!deducted) {
                showToast('Brand identity was regenerated but your credits could not be updated. Please refresh the page.', 'error');
            }
        } catch (error) {
            console.error('Error regenerating brand identity:', error);
        } finally {
            loadingState.classList.add('hidden');
            resultsDisplay.classList.remove('hidden');
            setRegenerateButtonLoading(regenerateColorsBtn, false, REGENERATE_BTN_IDLE_HTML.colors);
            setRegenerateButtonLoading(regenerateLogoBtn, false, REGENERATE_BTN_IDLE_HTML.logo);
            setRegenerateButtonLoading(regenerateMoodBoardBtn, false, REGENERATE_BTN_IDLE_HTML.moodboard);
        }
    } else if (type === 'moodboard') {
        setRegenerateButtonLoading(regenerateMoodBoardBtn, true, REGENERATE_BTN_IDLE_HTML.moodboard);
        try {
            const canStart = await ensureCreditsBeforeGeneration();
            if (!canStart) return;
            await generateMoodBoard(true, true);
            const deducted = await useCredit();
            if (!deducted) {
                showToast('Mood board was generated but your credits could not be updated. Please refresh the page.', 'error');
            }
        } catch {
            /* generateMoodBoard already alerted */
        } finally {
            setRegenerateButtonLoading(regenerateMoodBoardBtn, false, REGENERATE_BTN_IDLE_HTML.moodboard);
        }
    }
}

// Form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    console.log('handleFormSubmit: Starting...');
    
    const brandName = brandNameInput.value.trim();
    const description = brandDescriptionInput.value.trim();
    const useCase = brandUseInput.value.trim();

    if (!brandName || !description || !useCase) {
        alert('Please fill in all fields');
        return;
    }

    // Check for authentication and credits
    if (!currentUser) {
        console.log('handleFormSubmit: No current user, showing auth modal');
        showAuthModal('login');
        return;
    }
    
    console.log('handleFormSubmit: User authenticated, credits:', userCredits);

    const canStart = await ensureCreditsBeforeGeneration();
    console.log('handleFormSubmit: ensureCreditsBeforeGeneration result:', canStart);
    if (!canStart) return;

    setLogoIncludeTextPreference(logoIncludeTextInput ? logoIncludeTextInput.checked : false);

    currentBrandName = brandName;
    currentBrandDescription = description;
    currentBrandUse = useCase;

    // Update results header with brand name
    resultsBrandName.textContent = `${brandName} - Brand Identity`;
    brandNameSubtitle.textContent = brandName;

    // Show results section and loading state
    inputSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    loadingState.classList.remove('hidden');
    resultsDisplay.classList.add('hidden');

    try {
        // Generate color palette first, then use those colors for logo and mood board
        await generateColorPalette(false, false);

        // Generate logo using the color palette (must happen after colors are generated)
        await generateLogo();

        // Generate mood board using the color palette
        await generateMoodBoard();

        // Show results
        loadingState.classList.add('hidden');
        resultsDisplay.classList.remove('hidden');

        const deducted = await useCredit();
        if (!deducted) {
            showToast('Brand identity was generated but your credits could not be updated. Please refresh the page.', 'error');
        }
    } catch (error) {
        console.error('Error generating brand identity:', error);
        loadingState.classList.add('hidden');
    }
}

// Generate Logo
/** @param {boolean} holdRegenerateButtonState If true, do not re-enable the button in `finally` (caller handles it, e.g. after useCredit). */
async function generateLogo(regenerate = false, holdRegenerateButtonState = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Ensure we have colors before generating logo
    if (!currentColors || currentColors.length === 0) {
        alert('Color palette must be generated first. Please wait for color palette generation to complete.');
        return;
    }

    // Show loading state
    if (regenerate) {
        regenerateLogoBtn.disabled = true;
        regenerateLogoBtn.innerHTML = '<i data-feather="loader" class="spin"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        const regenerationNotes =
            regenerate && logoRegenerateFeedbackInput
                ? logoRegenerateFeedbackInput.value.trim().slice(0, 2000)
                : '';
        const revisionBlock = regenerationNotes
            ? `

USER REVISION NOTES — Apply these changes in the new logo (this generation replaces the previous one). Honor the notes below while keeping the brand identity, palette rules, and “NEVER” constraints unless the user explicitly asks for something compatible (e.g., “bolder” or “more rounded”):
${regenerationNotes}`
            : '';

        const paletteHexes = currentColors
            .map((c) => (c.hex || '').trim().toUpperCase())
            .filter((h) => /^#[0-9A-F]{6}$/i.test(h));
        const uniqueHexes = [...new Set(paletteHexes)];
        const paletteHexList = uniqueHexes.join(', ');
        const colorNames = currentColors.map(c => c.name).filter(n => n && n !== 'Unknown' && n !== 'Color').join(', ');
        const primaryHex = uniqueHexes[0] || '';
        const secondaryHex = uniqueHexes[1] || '';

        const paletteRules = uniqueHexes.length
            ? `BRAND PALETTE — USE ONLY THESE EXACT HEX COLORS FOR FILLS (no other hues):
Approved hex codes: ${paletteHexList}.
${colorNames ? `Named reference: ${colorNames}. ` : ''}Use 1–2 colors from the list above for the entire mark. Prefer primary ${primaryHex}${secondaryHex ? ` with optional accent ${secondaryHex}` : ''} for contrast.
Every colored shape must use one of the approved hex codes exactly (solid flat fills, no gradients).`
            : 'Use 1–2 flat solid colors appropriate to the brand.';

        const textRules = currentLogoIncludeText
            ? `VECTOR LOGO — MARK WITH TYPOGRAPHY (OPTIONAL COMPOSITION):
- Either a clean wordmark spelling "${currentBrandName}" exactly, OR an icon with the brand name "${currentBrandName}" beside or below it
- Typography: simple, legible, minimal letterforms—no slogans, no extra words, no filler text
- One cohesive mark; bold shapes, few paths, easy to scale`
            : `VECTOR LOGO — SYMBOL ONLY (NO TEXT):
- A single abstract icon, pictorial symbol, or geometric mark only—no letters or words
- Do NOT include any typography, logotype, wordmark, initials, or the brand name "${currentBrandName}" as readable text
- No alphabet characters from any language in the artwork (decorative non-letter shapes only)`;

        const prompt = `Minimal vector logo for "${currentBrandName}". Brand: ${currentBrandDescription}.

${textRules}

${paletteRules}

- No 3D, textures, photorealism, or fine illustrative clutter (flat vector shapes only)

NEVER:
- Color palette, swatches, strips of squares, hex labels printed as text, or any “brand kit” layout
- Decorative frames, mockups, or extra graphics around the mark

BACKGROUND: plain white or transparent.${revisionBlock}`;

        const { url: logoUrl, format: logoFormat } = await generateLogoImage(prompt);
        currentLogoUrl = logoUrl;
        currentLogoFormat = logoFormat === 'svg' ? 'svg' : 'png';
        
        // Store the logo as a blob for downloads (avoids CORS issues)
        currentLogoBlob = await fetchImageAsBlob(logoUrl);
        
        if (regenerate && regenerationNotes && logoRegenerateFeedbackInput) {
            logoRegenerateFeedbackInput.value = '';
        }

        generatedLogo.src = logoUrl;
        generatedLogo.style.cursor = 'pointer';
        generatedLogo.title = 'Click to view larger';
        generatedLogo.onerror = () => {
            generatedLogo.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23161616" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="20"%3ELogo Generation Error%3C/text%3E%3C/svg%3E';
        };
        // Add click listener to show in lightbox
        generatedLogo.addEventListener('click', () => showImageLightbox(logoUrl));
    } catch (error) {
        console.error('Error generating logo:', error);
        alert('Error generating logo. Please try again.');
        throw error;
    } finally {
        if (regenerate && !holdRegenerateButtonState) {
            regenerateLogoBtn.disabled = false;
            regenerateLogoBtn.innerHTML = REGENERATE_BTN_IDLE_HTML.logo;
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Generate Color Palette
async function generateColorPalette(regenerate = false, allowFallback = true, holdRegenerateButtonState = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Show loading state only if regenerating (initial generation shows main loading state)
    // Note: The main loading state is now handled by the caller for regenerate
    if (regenerate) {
        regenerateColorsBtn.disabled = true;
        regenerateColorsBtn.innerHTML = '<i data-feather="loader" class="spin"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        // Generate a color palette image based on brand description
        // Make the prompt more specific to ensure colors match the brand
        const prompt = `Color palette for brand "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 
        Based on this brand description, create a visual color palette showing exactly 5-6 complementary colors that perfectly represent this brand's identity and personality. 
        The colors should reflect the brand's values, industry, and target audience. 
        Display the colors as large, distinct swatches in a horizontal row. Each color should be clearly separated. 
        Include hex codes below each color. Colors should be modern, professional, and suitable for the brand identity of "${currentBrandName}". 
        Avoid white, off-white, or very light gray colors. Focus on vibrant, meaningful colors that represent the brand.`;

        const paletteImageUrl = await generateImage(prompt, 'palette');
        
        // Extract colors from the palette image using canvas
        const colors = await extractColorsFromImage(paletteImageUrl);
        currentColors = colors;
        
        // Display colors
        displayColorPalette(colors);
    } catch (error) {
        console.error('Error generating color palette:', error);
        if (allowFallback) {
            const fallbackColors = generateFallbackColors();
            currentColors = fallbackColors;
            displayColorPalette(fallbackColors);
            alert('Error generating color palette. Using fallback colors.');
        } else {
            alert('Error generating color palette. Please try again.');
            throw error;
        }
    } finally {
        if (regenerate && !holdRegenerateButtonState) {
            regenerateColorsBtn.disabled = false;
            regenerateColorsBtn.innerHTML = REGENERATE_BTN_IDLE_HTML.colors;
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Generate Mood Board
/** @param {boolean} holdRegenerateButtonState If true, skip re-enabling the regenerate button in `finally` (caller resets). */
async function generateMoodBoard(regenerate = false, holdRegenerateButtonState = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Show loading state only if regenerating
    if (regenerate) {
        regenerateMoodBoardBtn.disabled = true;
        regenerateMoodBoardBtn.innerHTML = '<i data-feather="loader" class="spin"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        // Build explicit color instructions
        let colorInstructions = '';
        let negativePrompt = '';
        if (currentColors && currentColors.length > 0) {
            const colorList = currentColors.map(c => `${c.hex} (${c.name})`).join(', ');
            const colorHexes = currentColors.map(c => c.hex).join(', ');
            
            // Make color instructions extremely explicit and repeated
            colorInstructions = `MANDATORY COLOR REQUIREMENT - USE ONLY THESE COLORS: ${colorList}. 
            This image MUST be created using ONLY these exact brand colors: ${colorHexes}. 
            The entire image should be 100% dominated by these colors. 
            Every single element, object, texture, and surface must use colors from this list: ${colorHexes}. 
            Use these colors as the exclusive color palette. No other colors allowed.`;
            
            negativePrompt = ` STRICTLY AVOID: white, black, gray, off-white, cream, beige, or any colors not in this exact list: ${colorHexes}. 
            Do not use any colors outside this specific palette. The image must only contain these colors.`;
        }

        const moodBoardPrompts = [
            `${colorInstructions}
            Visual mood board image representing "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 
            Style: professional, modern, inspiring. Show elements that capture the brand's essence.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand aesthetic visualization for "${currentBrandName}": ${currentBrandDescription}. 
            Create an inspiring image that represents the brand's visual identity and mood.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand inspiration image for "${currentBrandName}": ${currentBrandDescription}. 
            Show visual elements, textures, and styles that align with this brand identity.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand style guide visualization for "${currentBrandName}": ${currentBrandDescription}. 
            Create a cohesive visual representation of the brand's style and personality.
            ${negativePrompt}`
        ];

        const moodBoardUrls = await Promise.all(
            moodBoardPrompts.map((prompt, index) => 
                generateImage(prompt, `moodboard-${index}`)
            )
        );

        currentMoodBoardUrls = moodBoardUrls;
        displayMoodBoard(moodBoardUrls);
    } catch (error) {
        console.error('Error generating mood board:', error);
        alert('Error generating mood board. Please try again.');
        throw error;
    } finally {
        if (regenerate && !holdRegenerateButtonState) {
            regenerateMoodBoardBtn.disabled = false;
            regenerateMoodBoardBtn.innerHTML = REGENERATE_BTN_IDLE_HTML.moodboard;
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

/** Logo only: Replicate Recraft V4 SVG (native vector; palette & mood board still use DALL-E). */
async function generateLogoImage(prompt) {
    const response = await fetch(`${REPLICATE_API_BASE}/logo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, aspect_ratio: '1:1' }),
    });
    if (!response.ok) {
        let msg = 'Logo generation failed';
        try {
            const err = await response.json();
            msg = typeof err.error === 'string' ? err.error : msg;
        } catch {
            /* ignore */
        }
        throw new Error(msg);
    }
    const data = await response.json();
    if (!data.url) {
        throw new Error('No file URL returned from logo model');
    }
    return { url: data.url, format: data.format === 'svg' ? 'svg' : 'png' };
}

// Generate image using OpenAI DALL-E 3 API
async function generateImage(prompt, type = 'image') {
    try {
        // Clean up prompt - DALL-E 3 doesn't support negative prompts
        let mainPrompt = prompt.trim();

        // DALL-E 3 has a 4000 character limit for prompts, so ensure we're within that
        if (mainPrompt.length > 4000) {
            console.warn(`Prompt is ${mainPrompt.length} characters, truncating to 4000`);
            mainPrompt = mainPrompt.substring(0, 4000);
        }
        
        console.log(`Generating ${type} with prompt (${mainPrompt.length} chars):`, mainPrompt.substring(0, 200) + '...');

        // Note: Server adds the model parameter, we just send prompt and options
        const requestBody = {
            prompt: mainPrompt,
            size: '1024x1024',
            quality: 'standard',
            n: 1
        };
        
        const response = await fetch(`${OPENAI_API_BASE}/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            let errorMessage = 'Unknown error';
            let errorData = null;
            try {
                errorData = await response.json();
                errorMessage = errorData.error?.message || errorData.error || errorData.detail || 'Unknown error';
                console.error('OpenAI API error response:', errorData);
            } catch {
                try {
                    const errorText = await response.text();
                    errorMessage = errorText || 'Unknown error';
                    console.error('OpenAI API error text:', errorText);
                } catch {
                    errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                }
            }
            throw new Error(`API error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        
        if (!data.data || !data.data[0] || !data.data[0].url) {
            throw new Error('No image URL returned from OpenAI');
        }

        return data.data[0].url;
    } catch (error) {
        console.error(`Error generating ${type}:`, error);
        throw error;
    }
}

// Helper function to calculate color brightness
function getBrightness(r, g, b) {
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Helper function to calculate color saturation
function getSaturation(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max === 0) return 0;
    return (max - min) / max;
}

// Helper function to check if colors are similar (within threshold)
function areColorsSimilar(hex1, hex2, threshold = 30) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    if (!rgb1 || !rgb2) return false;
    
    const diff = Math.abs(rgb1.r - rgb2.r) + 
                 Math.abs(rgb1.g - rgb2.g) + 
                 Math.abs(rgb1.b - rgb2.b);
    return diff < threshold;
}

// Extract colors from image using canvas
async function extractColorsFromImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;
                
                // Sample colors from the image, prioritizing center region
                const colorMap = new Map();
                const sampleRate = 50; // Sample more frequently
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const centerRadius = Math.min(canvas.width, canvas.height) * 0.4; // Focus on center 40%

                for (let y = 0; y < canvas.height; y += 10) {
                    for (let x = 0; x < canvas.width; x += 10) {
                        const i = (y * canvas.width + x) * 4;
                        const r = pixels[i];
                        const g = pixels[i + 1];
                        const b = pixels[i + 2];
                        const a = pixels[i + 3];

                        if (a < 200) continue; // Skip semi-transparent pixels

                        const brightness = getBrightness(r, g, b);
                        const saturation = getSaturation(r, g, b);

                        // Filter out very light colors (near white) - brightness > 240
                        if (brightness > 240) continue;
                        
                        // Filter out very dark colors (near black) - brightness < 20
                        if (brightness < 20) continue;
                        
                        // Filter out very low saturation colors (grays) - saturation < 0.1
                        if (saturation < 0.1) continue;

                        // Weight center region more heavily
                        const distanceFromCenter = Math.sqrt(
                            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
                        );
                        const weight = distanceFromCenter < centerRadius ? 3 : 1;

                        const hex = rgbToHex(r, g, b);
                        const currentCount = colorMap.get(hex) || 0;
                        colorMap.set(hex, currentCount + weight);
                    }
                }

                // Group similar colors together
                const colorGroups = [];
                const processed = new Set();
                
                for (const [hex, count] of colorMap.entries()) {
                    if (processed.has(hex)) continue;
                    
                    const group = { hex, count, colors: [hex] };
                    processed.add(hex);
                    
                    // Find similar colors
                    for (const [otherHex, otherCount] of colorMap.entries()) {
                        if (processed.has(otherHex)) continue;
                        if (areColorsSimilar(hex, otherHex, 40)) {
                            group.colors.push(otherHex);
                            group.count += otherCount;
                            processed.add(otherHex);
                        }
                    }
                    
                    colorGroups.push(group);
                }

                // Sort by count and get top 6, then pick the most representative color from each group
                const sortedGroups = colorGroups
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6);

                // For each group, pick the color with highest saturation (most vibrant)
                const selectedColors = sortedGroups.map(group => {
                    let bestColor = group.hex;
                    let bestSaturation = 0;
                    
                    for (const hex of group.colors) {
                        const rgb = hexToRgb(hex);
                        if (rgb) {
                            const sat = getSaturation(rgb.r, rgb.g, rgb.b);
                            if (sat > bestSaturation) {
                                bestSaturation = sat;
                                bestColor = hex;
                            }
                        }
                    }
                    return bestColor;
                });

                // Generate color names
                const colors = selectedColors.map(hex => ({
                    hex: hex,
                    name: getColorName(hex)
                }));

                resolve(colors.length > 0 ? colors : generateFallbackColors());
            } catch (error) {
                reject(error);
            }
        };

        img.onerror = () => {
            resolve(generateFallbackColors());
        };

        img.src = proxiedImageUrlForCanvas(imageUrl);
    });
}

// Generate fallback colors
function generateFallbackColors() {
    const colorSchemes = [
        ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'],
        ['#1e293b', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#f1f5f9'],
        ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#059669'],
        ['#7c3aed', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#fb7185']
    ];

    const scheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    return scheme.map(hex => ({
        hex: hex,
        name: getColorName(hex)
    }));
}

// Convert RGB to hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Get color name (simplified)
function getColorName(hex) {
    const color = hexToRgb(hex);
    if (!color) return 'Unknown';

    const { r, g, b } = color;
    const brightness = (r + g + b) / 3;

    if (brightness < 50) return 'Dark';
    if (brightness > 200) return 'Light';
    
    // Simple color name detection
    if (r > g && r > b) return 'Red';
    if (g > r && g > b) return 'Green';
    if (b > r && b > g) return 'Blue';
    if (r === g && g === b) return 'Gray';
    
    return 'Color';
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Display color palette
function displayColorPalette(colors) {
    colorPaletteContainer.innerHTML = '';

    colors.forEach((color, index) => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        swatch.title = `Click to edit ${color.hex}`;
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', () => {
            openColorPicker(index, color.hex);
        });

        const info = document.createElement('div');
        info.className = 'color-info';
        
        const hex = document.createElement('div');
        hex.className = 'color-hex';
        hex.textContent = color.hex.toUpperCase();
        hex.style.cursor = 'pointer';
        hex.title = 'Click to edit';
        hex.addEventListener('click', () => {
            openColorPicker(index, color.hex);
        });
        
        const name = document.createElement('div');
        name.className = 'color-name';
        name.textContent = color.name;

        info.appendChild(hex);
        info.appendChild(name);
        colorItem.appendChild(swatch);
        colorItem.appendChild(info);
        colorPaletteContainer.appendChild(colorItem);
    });
}

// Open color picker modal
function openColorPicker(index, currentHex) {
    editingColorIndex = index;
    const rgb = hexToRgb(currentHex);
    
    // Set initial values
    colorPicker.value = currentHex;
    colorHexInput.value = currentHex.toUpperCase();
    if (rgb) {
        colorRInput.value = rgb.r;
        colorGInput.value = rgb.g;
        colorBInput.value = rgb.b;
    }
    updateColorPreview(currentHex);
    
    colorPickerModal.classList.remove('hidden');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Hide color picker modal
function hideColorPickerModal() {
    colorPickerModal.classList.add('hidden');
    editingColorIndex = -1;
}

// Update color preview
function updateColorPreview(hex) {
    colorPreviewSwatch.style.backgroundColor = hex;
}

// Update color from picker
function updateColorFromPicker() {
    const hex = colorPicker.value;
    colorHexInput.value = hex.toUpperCase();
    const rgb = hexToRgb(hex);
    if (rgb) {
        colorRInput.value = rgb.r;
        colorGInput.value = rgb.g;
        colorBInput.value = rgb.b;
    }
    updateColorPreview(hex);
}

// Update color from hex input
function updateColorFromHex() {
    let hex = colorHexInput.value.trim();
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        colorPicker.value = hex;
        const rgb = hexToRgb(hex);
        if (rgb) {
            colorRInput.value = rgb.r;
            colorGInput.value = rgb.g;
            colorBInput.value = rgb.b;
        }
        updateColorPreview(hex);
    }
}

// Update color from RGB inputs
function updateColorFromRGB() {
    const r = parseInt(colorRInput.value) || 0;
    const g = parseInt(colorGInput.value) || 0;
    const b = parseInt(colorBInput.value) || 0;
    
    // Clamp values
    const clampedR = Math.max(0, Math.min(255, r));
    const clampedG = Math.max(0, Math.min(255, g));
    const clampedB = Math.max(0, Math.min(255, b));
    
    if (r !== clampedR) colorRInput.value = clampedR;
    if (g !== clampedG) colorGInput.value = clampedG;
    if (b !== clampedB) colorBInput.value = clampedB;
    
    const hex = rgbToHex(clampedR, clampedG, clampedB);
    colorPicker.value = hex;
    colorHexInput.value = hex.toUpperCase();
    updateColorPreview(hex);
}

// Save color change
function saveColorChange() {
    if (editingColorIndex === -1) return;
    
    const newHex = colorHexInput.value.trim();
    if (!/^#[0-9A-Fa-f]{6}$/i.test(newHex)) {
        alert('Please enter a valid hex color (e.g., #FF0000)');
        return;
    }
    
    // Update the color in currentColors array
    currentColors[editingColorIndex].hex = newHex.toLowerCase();
    currentColors[editingColorIndex].name = getColorName(newHex);
    
    // Redisplay the palette
    displayColorPalette(currentColors);
    
    // Hide modal
    hideColorPickerModal();
    
    // Note: Logo and mood board will use updated colors when regenerated
    // The user can manually regenerate them using the regenerate buttons
}

// Display mood board
function displayMoodBoard(urls) {
    moodBoardContainer.innerHTML = '';

    urls.forEach((url, index) => {
        const item = document.createElement('div');
        item.className = 'mood-board-item';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Mood board image ${index + 1}`;
        img.style.cursor = 'pointer';
        img.onerror = () => {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23161616" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="12"%3EImage Error%3C/text%3E%3C/svg%3E';
        };
        // Make mood board images clickable to show in lightbox
        img.addEventListener('click', () => showImageLightbox(url));
        
        item.appendChild(img);
        moodBoardContainer.appendChild(item);
    });
}

// Download Modal Functions
function showDownloadModal() {
    if (!currentLogoBlob) {
        alert('No logo available to download. Please generate a logo first.');
        return;
    }
    downloadModal.classList.remove('hidden');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function hideDownloadModal() {
    downloadModal.classList.add('hidden');
}

// Fetch image as blob using proxy to bypass CORS
async function fetchImageAsBlob(url) {
    try {
        // Use the proxy endpoint to fetch the image (same pattern as OPENAI_API_BASE)
        const proxyUrl = `${PROXY_SERVER_URL}/proxy-image?url=${encodeURIComponent(url)}`;
        console.log('Fetching image via proxy:', proxyUrl);
        const response = await fetch(proxyUrl);
        
        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown error');
            console.error('Proxy response error:', response.status, errorText);
            throw new Error(`Failed to fetch image: ${response.status}`);
        }
        
        const blob = await response.blob();
        console.log('Image fetched successfully, blob size:', blob.size);
        return blob;
    } catch (error) {
        console.error('Error fetching image via proxy:', error);
        throw error;
    }
}

// Resize logo to specific size and return as blob
async function resizeLogoToSize(size) {
    return new Promise((resolve, reject) => {
        // Use the stored blob if available
        if (!currentLogoBlob) {
            reject(new Error('No logo blob available'));
            return;
        }
        
        // Create image element from the stored blob
        const img = new Image();
        
        img.onload = () => {
            // Create canvas at target size
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = size;
            canvas.height = size;
            
            // Enable high quality image rendering
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            // Draw image scaled to target size
            ctx.drawImage(img, 0, 0, size, size);
            
            // Convert to blob
            canvas.toBlob((resizedBlob) => {
                URL.revokeObjectURL(img.src); // Clean up
                resolve(resizedBlob);
            }, 'image/png');
        };
        
        img.onerror = () => {
            URL.revokeObjectURL(img.src); // Clean up
            reject(new Error('Failed to load image'));
        };
        
        img.src = URL.createObjectURL(currentLogoBlob);
    });
}

// Generate filename for download
function generateFilename(size, category) {
    const brandSlug = currentBrandName 
        ? currentBrandName.replace(/[^a-z0-9]/gi, '-').toLowerCase()
        : 'brandwise';
    
    if (size === 'original') {
        const ext = currentLogoFormat === 'svg' ? 'svg' : 'png';
        return `${brandSlug}-logo-original.${ext}`;
    }
    
    const categoryPrefix = {
        'favicon': 'favicon',
        'ios': 'ios-icon',
        'android': 'android-icon'
    };
    
    const prefix = categoryPrefix[category] || 'icon';
    return `${brandSlug}-${prefix}-${size}x${size}.png`;
}

// Download logo at specific size
async function downloadLogoAtSize(size, category) {
    if (!currentLogoBlob) {
        alert('No logo available to download.');
        return;
    }

    const btn = document.querySelector(`.download-option-btn[data-size="${size}"]${category !== 'original' ? `[data-category="${category}"]` : ''}`);
    if (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.6';
    }

    try {
        let blob;
        if (size === 'original') {
            // Use the stored original blob
            blob = currentLogoBlob;
        } else {
            // Resize to specific size
            blob = await resizeLogoToSize(parseInt(size));
        }
        
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = generateFilename(size, category);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 100);
    } catch (error) {
        console.error('Error downloading logo:', error);
        alert('Error downloading logo. Please try again.');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.style.opacity = '1';
        }
    }
}

// Icon size configurations
const iconSizes = {
    favicon: [16, 32, 48, 64],
    ios: [1024, 180, 167, 152, 120, 87, 80, 76, 60, 40, 29, 20],
    android: [512, 192, 144, 96, 72, 48, 36]
};

// Download all icons in a category
async function downloadAllInCategory(category) {
    if (!currentLogoBlob) {
        alert('No logo available to download.');
        return;
    }

    const sizes = iconSizes[category];
    if (!sizes) {
        alert('Invalid category');
        return;
    }

    const downloadAllBtn = document.querySelector(`.download-all-btn[data-category="${category}"]`);
    if (downloadAllBtn) {
        downloadAllBtn.disabled = true;
        downloadAllBtn.innerHTML = '<span class="spinner" style="width:14px;height:14px;border:2px solid var(--border-color);border-top-color:var(--primary-color);border-radius:50%;animation:spin 1s linear infinite;"></span> Downloading...';
    }

    try {
        // Download each size with a small delay to prevent browser blocking
        for (let i = 0; i < sizes.length; i++) {
            const size = sizes[i];
            await downloadLogoAtSize(size.toString(), category);
            // Small delay between downloads
            if (i < sizes.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 300));
            }
        }
    } catch (error) {
        console.error('Error downloading icons:', error);
        alert('Error downloading some icons. Please try again.');
    } finally {
        if (downloadAllBtn) {
            downloadAllBtn.disabled = false;
            downloadAllBtn.innerHTML = '<i data-feather="download"></i> Download All';
            if (typeof feather !== 'undefined') {
                feather.replace();
            }
        }
    }
}

// Go back to input
function goBackToInput() {
    resultsSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
    loadingState.classList.add('hidden');
    resultsDisplay.classList.add('hidden');
    setLogoIncludeTextPreference(currentLogoIncludeText);
}

// Image Lightbox functions
function showImageLightbox(imageUrl) {
    lightboxImage.src = imageUrl;
    imageLightboxModal.classList.remove('hidden');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function hideImageLightbox() {
    imageLightboxModal.classList.add('hidden');
    // Restore body scroll
    document.body.style.overflow = '';
}

// Re-initialize Feather Icons when needed
if (typeof feather !== 'undefined') {
    setInterval(() => {
        feather.replace();
    }, 1000);
}
