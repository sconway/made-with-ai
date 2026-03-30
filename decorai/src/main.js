import feather from 'feather-icons';
import FloorPlanEditor from './floorPlanEditor.js';

// Supabase loaded at runtime from CDN so the build does not depend on node_modules resolution (avoids Render CI issues)
async function loadSupabase() {
    const mod = await import('https://esm.sh/@supabase/supabase-js@2');
    return mod.createClient;
}

// Server/API configuration (same pattern as Brandwise)
const PROXY_SERVER_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : '';

// Supabase client and auth state (initialized in initializeApp)
let supabase = null;
let appConfig = null;
let currentUser = null;
let currentSession = null;

// Token state
let userTokens = 0;
// Subscription state
let userHasSubscription = false;
// Fetched layout state: restored once when user opens the layout editor after sign-in/load
let savedLayoutState = null;
let savedLayoutId = null;
let savedLayoutName = null;
// Currently loaded layout in the editor (so Save updates this one)
let currentLayoutId = null;

// DOM Elements
const uploadContainer = document.getElementById('upload-container');
const previewContainer = document.getElementById('preview-container');
const roomPreview = document.getElementById('room-preview');
const roomUpload = document.getElementById('room-upload');
const cameraBtn = document.getElementById('camera-btn');
const changeImageBtn = document.getElementById('change-image-btn');
const generateBtn = document.getElementById('generate-btn');
const resultsSection = document.getElementById('results-section');
const loadingIndicator = document.getElementById('loading-indicator');
const designCarousel = document.getElementById('design-carousel');
const backToOptionsBtn = document.getElementById('back-to-options-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const saveDesignBtn = document.getElementById('save-design-btn');
const itemsSelectionError = document.getElementById('items-selection-error');

// Mobile-specific DOM elements
const mobileOptionsScreen = document.getElementById('mobile-options-screen');
const mobileOptionsBackBtn = document.getElementById('mobile-options-back-btn');
const mobileOptionsTitle = document.getElementById('mobile-options-title');
const mobileRoomItemsSelection = document.getElementById('mobile-room-items-selection');
const mobileFurnishedOptions = document.getElementById('mobile-furnished-options');
const mobileItemsGrid = document.getElementById('mobile-items-grid');
const mobileItemsSelectionTitle = document.getElementById('mobile-items-selection-title');
const mobileItemsSelectionHint = document.getElementById('mobile-items-selection-hint');
const mobileItemsSelectionError = document.getElementById('mobile-items-selection-error');
const mobileGenerateBtn = document.getElementById('mobile-generate-btn');

// Back to upload button
const backToUploadBtn = document.getElementById('back-to-upload-btn');

// Auth elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginError = document.getElementById('login-error');
const loginResendBlock = document.getElementById('login-resend-block');
const loginResendBtn = document.getElementById('login-resend-btn');
const loginResendMessage = document.getElementById('login-resend-message');
const signupError = document.getElementById('signup-error');
const authModalTitle = document.getElementById('auth-modal-title');
const authSwitchBtn = document.getElementById('auth-switch-btn');
const authSwitchText = document.getElementById('auth-switch-text');
const signupSuccess = document.getElementById('signup-success');
const signupSuccessEmail = document.getElementById('signup-success-email');
const successCloseBtn = document.getElementById('success-close-btn');
const signupEmailExists = document.getElementById('signup-email-exists');
const signupEmailExistsMessage = document.getElementById('signup-email-exists-message');
const emailExistsSigninBtn = document.getElementById('email-exists-signin-btn');
const emailExistsResendBtn = document.getElementById('email-exists-resend-btn');
const emailExistsMagicLinkBtn = document.getElementById('email-exists-magic-link-btn');
const authFormsSection = document.getElementById('auth-forms-section');
const confirmEmailRequired = document.getElementById('confirm-email-required');
const confirmEmailFeatureName = document.getElementById('confirm-email-feature-name');
const confirmEmailAddress = document.getElementById('confirm-email-address');
const confirmEmailMessage = document.getElementById('confirm-email-message');
const confirmEmailResendBtn = document.getElementById('confirm-email-resend-btn');
const confirmEmailCloseBtn = document.getElementById('confirm-email-close-btn');
const authButtons = document.getElementById('auth-buttons');
const userMenu = document.getElementById('user-menu');
const userMenuBtn = document.getElementById('user-menu-btn');
const userDropdown = document.getElementById('user-dropdown');
const userEmailDisplay = document.getElementById('user-email-display');
const logoutBtn = document.getElementById('logout-btn');

// Token / payment elements
const tokensDisplay = document.getElementById('tokens-display');
const tokensCount = document.getElementById('tokens-count');
const buyTokensBtn = document.getElementById('buy-tokens-btn');
const buyTokensModal = document.getElementById('buy-tokens-modal');
const closeBuyTokensModalBtn = document.getElementById('close-buy-tokens-modal-btn');
const modalTokensCount = document.getElementById('modal-tokens-count');
const checkoutBtn = document.getElementById('checkout-btn');
const tokensPerPurchaseEl = document.getElementById('tokens-per-purchase');
const tokensPriceEl = document.getElementById('tokens-price');

// Generic alert modal elements
const alertModal = document.getElementById('alert-modal');
const alertModalTitle = document.getElementById('alert-modal-title');
const alertModalMessage = document.getElementById('alert-modal-message');
const alertModalCloseBtn = document.getElementById('alert-modal-close');
const alertModalOkBtn = document.getElementById('alert-modal-ok');

// Generic confirm modal elements
const confirmModal = document.getElementById('confirm-modal');
const confirmModalTitle = document.getElementById('confirm-modal-title');
const confirmModalMessage = document.getElementById('confirm-modal-message');
const confirmModalCloseBtn = document.getElementById('confirm-modal-close');
const confirmModalCancelBtn = document.getElementById('confirm-modal-cancel');
const confirmModalConfirmBtn = document.getElementById('confirm-modal-confirm');

// Error message management
function showItemsSelectionError() {
    if (itemsSelectionError) {
        itemsSelectionError.classList.remove('hidden');
    }
}

function hideItemsSelectionError() {
    if (itemsSelectionError) {
        itemsSelectionError.classList.add('hidden');
    }
}
const apiKeyInput = document.getElementById('api-key');
const toggleKeyVisibilityBtn = document.getElementById('toggle-key-visibility-btn');
const replicateApiKeyInput = document.getElementById('replicate-api-key');
const toggleReplicateKeyVisibilityBtn = document.getElementById('toggle-replicate-key-visibility-btn');
const authActionBtn = document.getElementById('auth-action-btn');

// State variables
let currentUploadedImage = null;
let currentRoomType = null;
let generatedDesigns = [];
let selectedRoomItems = new Set(); // Track selected room items
let furnishedOption = null; // Track furnished room option - no default selection
let isRoomActuallyEmpty = true; // Track if the uploaded room is actually empty

// Confirm dialog state
let confirmResolve = null;
let isMobile = window.innerWidth <= 768; // Track if we're on mobile

// API is now handled server-side - no client keys needed

// Example design - in a real implementation, this would be an AI-generated version of the user's uploaded room
// NOTE: In an actual implementation, this would be the same room with a new furniture layout
// For this demo, we're using a sample image to simulate the concept
const sampleAIGeneratedImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Design style names based on room type
const designStyles = {
    empty: [
        "Modern Minimalist",
        "Cozy Scandinavian",
        "Contemporary Industrial"
    ],
    furnished: [
        "Optimized Layout",
        "Added Accent Pieces",
        "Complete Makeover"
    ]
};

// Design descriptions based on room type
const designDescriptions = {
    empty: [
        "Clean lines with essential furniture pieces. Neutral color palette with subtle accent colors.",
        "Warm and inviting space with natural wood elements and soft textures.",
        "Bold contrast with metal accents, exposed elements, and functional furniture."
    ],
    furnished: [
        "Rearranged existing furniture for better flow and functionality. Optimized for your space.",
        "Kept your core furniture pieces and added strategic accent items to enhance the look.",
        "Comprehensive redesign with new furniture arrangement and style elements."
    ]
};

// Room items that can be added to empty rooms
const roomItems = [
    { id: 'sofa', name: 'Sofa', icon: 'square', category: 'furniture' },
    { id: 'coffee-table', name: 'Coffee Table', icon: 'table', category: 'furniture' },
    { id: 'dining-table', name: 'Dining Table', icon: 'table', category: 'furniture' },
    { id: 'chairs', name: 'Chairs', icon: 'square', category: 'furniture' },
    { id: 'bed', name: 'Bed', icon: 'square', category: 'furniture' },
    { id: 'desk', name: 'Desk', icon: 'monitor', category: 'furniture' },
    { id: 'bookshelf', name: 'Bookshelf', icon: 'book-open', category: 'furniture' },
    { id: 'tv', name: 'TV', icon: 'tv', category: 'electronics' },
    { id: 'lamp', name: 'Lamp', icon: 'zap', category: 'lighting' },
    { id: 'floor-lamp', name: 'Floor Lamp', icon: 'zap', category: 'lighting' },
    { id: 'rug', name: 'Rug', icon: 'square', category: 'decor' },
    { id: 'curtains', name: 'Curtains', icon: 'maximize-2', category: 'decor' },
    { id: 'art', name: 'Art', icon: 'image', category: 'decor' },
    { id: 'mirror', name: 'Mirror', icon: 'eye', category: 'decor' },
    { id: 'plants', name: 'Plants', icon: 'circle', category: 'decor' },
    { id: 'pillows', name: 'Pillows', icon: 'square', category: 'decor' },
    { id: 'throw-blanket', name: 'Throw Blanket', icon: 'square', category: 'decor' },
    { id: 'vase', name: 'Vase', icon: 'droplet', category: 'decor' },
    { id: 'candles', name: 'Candles', icon: 'zap', category: 'decor' },
    { id: 'clock', name: 'Clock', icon: 'clock', category: 'decor' }
];

// AI prompt templates for different room types - simplified for clarity
const aiPrompts = {
    empty: "Add furniture to this room. Match the style: ",
    furnished: "Rearrange furniture in this room. Match the style: "
};

// Fallback images for when API calls fail
const fallbackImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Replicate API constants (PROXY_SERVER_URL defined at top)
const REPLICATE_API_URL = `${PROXY_SERVER_URL}/replicate/predictions`;
const REPLICATE_POLL_URL = `${PROXY_SERVER_URL}/replicate/poll`;
const REPLICATE_MODEL_VERSION = 'stability-ai/stable-diffusion-3.5-large'; // Example version, check replicate for latest/best

// Initialize app: fetch config, Supabase client, and auth state (same pattern as Brandwise)
async function initializeApp() {
    try {
        const response = await fetch(`${PROXY_SERVER_URL}/api/config`);
        appConfig = await response.json();

        // Populate purchase UI from config
        if (appConfig.tokensPerPurchase && tokensPerPurchaseEl) {
            tokensPerPurchaseEl.textContent = appConfig.tokensPerPurchase;
        }
        if (appConfig.priceAmount && tokensPriceEl) {
            tokensPriceEl.textContent = `$${(appConfig.priceAmount / 100).toFixed(2)}`;
        }

        if (appConfig.supabaseUrl && appConfig.supabaseAnonKey) {
            const createClient = await loadSupabase();
            supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                currentUser = session.user;
                currentSession = session;
                await fetchSavedLayout();
                await fetchUserTokens();
                await fetchUserSubscription();
            }
            supabase.auth.onAuthStateChange(async (_event, session) => {
                currentUser = session?.user ?? null;
                currentSession = session ?? null;
                if (session) {
                    await fetchSavedLayout();
                    await fetchUserTokens();
                    await fetchUserSubscription();
                } else {
                    savedLayoutState = null;
                    savedLayoutId = null;
                    savedLayoutName = null;
                    userTokens = 0;
                    userHasSubscription = false;
                    window.__decoraiHasSubscription = false;
                }
                updateAuthUI();
            });
            window.__decoraiGetLayoutStateToRestore = function () {
                const s = savedLayoutState;
                const id = savedLayoutId;
                const name = savedLayoutName;
                savedLayoutState = null;
                savedLayoutId = null;
                savedLayoutName = null;
                if (s == null) return null;
                return { state: s, layoutId: id || undefined, name: name || 'Untitled layout' };
            };

            // Handle Stripe payment redirect
            const urlParams = new URLSearchParams(window.location.search);
            const paymentStatus = urlParams.get('payment');
            if (paymentStatus === 'success') {
                // Poll until the Stripe webhook has credited the tokens
                let attempts = 0;
                const previousTokens = userTokens;
                const checkTokens = async () => {
                    attempts++;
                    await fetchUserTokens();
                    if (userTokens > previousTokens) {
                        showToastMessage(`Payment successful! You now have ${userTokens} token(s).`, 'success');
                    } else if (attempts < 5) {
                        setTimeout(checkTokens, 1500);
                    } else {
                        showToastMessage('Payment received! Tokens may take a moment to appear.', 'info');
                    }
                };
                setTimeout(checkTokens, 500);
                window.history.replaceState({}, document.title, window.location.pathname);
            } else if (paymentStatus === 'cancelled') {
                showToastMessage('Payment cancelled.', 'error');
                window.history.replaceState({}, document.title, window.location.pathname);
            }

            // Handle subscription redirect
            const subscriptionStatus = urlParams.get('subscription');
            if (subscriptionStatus === 'success') {
                // Poll until the webhook has activated the subscription
                let attempts = 0;
                const checkSub = async () => {
                    attempts++;
                    await fetchUserSubscription();
                    if (userHasSubscription) {
                        showToastMessage('Subscription activated! You now have full layout access.', 'success');
                    } else if (attempts < 6) {
                        setTimeout(checkSub, 2000);
                    } else {
                        showToastMessage('Subscription received! Access may take a moment to activate.', 'info');
                    }
                };
                setTimeout(checkSub, 1000);
                window.history.replaceState({}, document.title, window.location.pathname);
            } else if (subscriptionStatus === 'cancelled') {
                showToastMessage('Subscription cancelled.', 'error');
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }
        updateAuthUI();
    } catch (err) {
        console.error('Error initializing app:', err);
        updateAuthUI();
    }
}

// ── Token helpers ──────────────────────────────────────────────────────────────

async function fetchUserTokens() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/credits`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            userTokens = data.credits;
            updateTokensDisplay();
        }
    } catch (err) {
        console.error('fetchUserTokens error:', err);
    }
}

async function fetchUserSubscription() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscription`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            userHasSubscription = data.isActive === true;
        }
    } catch (err) {
        console.error('fetchUserSubscription error:', err);
    }
    // Expose to the floor plan editor via the window bridge
    window.__decoraiHasSubscription = userHasSubscription;
}

function updateTokensDisplay() {
    if (tokensCount) tokensCount.textContent = userTokens;
    if (modalTokensCount) modalTokensCount.textContent = userTokens;
    // Turn badge red when running low
    if (tokensDisplay) {
        tokensDisplay.classList.toggle('tokens-low', userTokens === 0);
    }
}

/**
 * Check whether the user has tokens available before starting generation.
 * Returns true if generation may proceed, false otherwise (shows buy modal).
 */
function hasTokensAvailable() {
    if (!currentUser || !currentSession) {
        showAuthModal('login');
        return false;
    }
    if (userTokens <= 0) {
        showBuyTokensModal();
        return false;
    }
    return true;
}

/**
 * Deduct one token after a SUCCESSFUL image generation.
 * Only called on success — failed generations do not consume a token.
 */
async function useTokenAfterSuccess() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/credits/use`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const data = await res.json();
            userTokens = data.credits;
            updateTokensDisplay();
        } else {
            // Token count may be stale — refresh from server
            await fetchUserTokens();
        }
    } catch (err) {
        console.error('useTokenAfterSuccess error:', err);
        await fetchUserTokens();
    }
}

function showBuyTokensModal() {
    if (!currentUser) { showAuthModal('login'); return; }
    updateTokensDisplay();
    if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<i data-feather="credit-card"></i><span>Purchase Tokens</span>';
    }
    if (buyTokensModal) {
        buyTokensModal.classList.remove('hidden');
        buyTokensModal.classList.add('show');
        buyTokensModal.style.opacity = '1';
        buyTokensModal.style.visibility = 'visible';
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function hideBuyTokensModal() {
    if (buyTokensModal) {
        buyTokensModal.classList.remove('show');
        buyTokensModal.style.opacity = '';
        buyTokensModal.style.visibility = '';
        buyTokensModal.classList.add('hidden');
    }
}

async function handleCheckout() {
    if (!currentUser || !currentSession) { showAuthModal('login'); return; }
    try {
        if (checkoutBtn) {
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = '<span>Processing...</span>';
        }
        const res = await fetch(`${PROXY_SERVER_URL}/api/checkout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const { url } = await res.json();
            window.location.href = url;
        } else {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.detail || 'Failed to create checkout session');
        }
    } catch (err) {
        console.error('handleCheckout error:', err);
        showToastMessage('Error starting checkout. Please try again.', 'error');
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.innerHTML = '<i data-feather="credit-card"></i><span>Purchase Tokens</span>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// ── Subscription modal helpers ─────────────────────────────────────────────────

function showSubscribeModal() {
    if (!currentUser) { showAuthModal('login'); return; }
    const modal = document.getElementById('subscribe-modal');
    const subscribeBtn = document.getElementById('subscribe-checkout-btn');
    if (subscribeBtn) {
        subscribeBtn.disabled = false;
        subscribeBtn.innerHTML = '<i data-feather="zap"></i><span>Subscribe — $19.99/mo</span>';
    }
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('show');
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function hideSubscribeModal() {
    const modal = document.getElementById('subscribe-modal');
    if (modal) {
        modal.classList.remove('show');
        modal.style.opacity = '';
        modal.style.visibility = '';
        modal.classList.add('hidden');
    }
}

async function handleSubscribeCheckout() {
    if (!currentUser || !currentSession) { showAuthModal('login'); return; }
    const subscribeBtn = document.getElementById('subscribe-checkout-btn');
    try {
        if (subscribeBtn) {
            subscribeBtn.disabled = true;
            subscribeBtn.innerHTML = '<span>Processing...</span>';
        }
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscribe`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            const { url } = await res.json();
            window.location.href = url;
        } else {
            const body = await res.json().catch(() => ({}));
            throw new Error(body.detail || 'Failed to create subscription session');
        }
    } catch (err) {
        console.error('handleSubscribeCheckout error:', err);
        showToastMessage(err.message || 'Error starting subscription. Please try again.', 'error');
        if (subscribeBtn) {
            subscribeBtn.disabled = false;
            subscribeBtn.innerHTML = '<i data-feather="zap"></i><span>Subscribe — $19.99/mo</span>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Exposed so floorPlanEditor can open the modal
window.__decoraiShowSubscribeModal = showSubscribeModal;

/** Lightweight toast notification (no external dependency) */
let _activeToast = null;
function showToastMessage(message, type = 'info') {
    if (_activeToast) _activeToast.remove();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    _activeToast = toast;
    requestAnimationFrame(() => toast.classList.add('show'));
    if (type !== 'loading') {
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => { if (toast.parentNode) toast.remove(); if (_activeToast === toast) _activeToast = null; }, 300);
        }, 4000);
    }
}

// ── End token helpers ──────────────────────────────────────────────────────────

async function fetchSavedLayout() {
    if (!currentSession?.access_token) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layout`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            if (data.state != null) {
                savedLayoutState = data.state;
                savedLayoutId = data.id || null;
                savedLayoutName = data.name || null;
            }
        }
    } catch (e) {
        console.error('Failed to fetch saved layout:', e);
    }
}

async function handleSaveLayout() {
    if (!currentUser?.email_confirmed_at || !currentSession?.access_token) return;
    const name = getLayoutNameDisplay();
    const state = FloorPlanEditor.getState();
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentSession.access_token}`
    };

    try {
        const byNameRes = await fetch(
            `${PROXY_SERVER_URL}/api/layouts/by-name?name=${encodeURIComponent(name)}`,
            { headers }
        );
        let existingId = null;
        if (byNameRes.ok) {
            const existing = await byNameRes.json().catch(() => null);
            existingId = existing?.id || null;
            if (existingId) {
                const proceed = await showConfirmDialog(
                    `A layout named "${name}" already exists. Overwrite it? The current saved version will be replaced.`,
                    'Overwrite layout',
                    'Overwrite',
                    'Cancel'
                );
                if (!proceed) return;
            }
        }

        let previewDataUrl = null;
        if (typeof FloorPlanEditor.getPreviewDataURL === 'function') {
            try {
                previewDataUrl = await FloorPlanEditor.getPreviewDataURL(120);
            } catch (_) {}
        }

        let targetId = null;
        if (existingId) {
            const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${existingId}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify({ name, state, preview_data_url: previewDataUrl })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || 'Failed to save');
            }
            const data = await res.json().catch(() => ({}));
            targetId = data?.id || existingId;
        } else {
            const res = await fetch(`${PROXY_SERVER_URL}/api/layouts`, {
                method: 'POST',
                headers,
                body: JSON.stringify({ name, state, preview_data_url: previewDataUrl })
            });
            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.error || 'Failed to save');
            }
            const data = await res.json().catch(() => ({}));
            targetId = data?.id || null;
        }

        if (targetId) {
            currentLayoutId = targetId;
            if (typeof window.__decoraiCurrentLayoutId !== 'undefined') window.__decoraiCurrentLayoutId = targetId;
        }
        showLayoutSaveToast('Layout saved.');
        refreshLayoutsList(true);
    } catch (e) {
        showLayoutSaveToast(e?.message || 'Failed to save layout', true);
    }
}

const DEFAULT_LAYOUT_NAME = 'Untitled layout';
const MAX_LAYOUT_NAME_LENGTH = 80;

function getLayoutNameDisplay() {
    const el = document.getElementById('layout-name-display');
    if (!el) return DEFAULT_LAYOUT_NAME;
    let t = (el.textContent || '').trim();
    if (!t) return DEFAULT_LAYOUT_NAME;
    if (t.length > MAX_LAYOUT_NAME_LENGTH) {
        t = t.slice(0, MAX_LAYOUT_NAME_LENGTH);
        el.textContent = t;
    }
    return t;
}

function setLayoutNameDisplay(name) {
    const el = document.getElementById('layout-name-display');
    if (!el) return;
    let value = (name && String(name).trim()) || '';
    if (value === DEFAULT_LAYOUT_NAME) value = '';
    if (value.length > MAX_LAYOUT_NAME_LENGTH) {
        value = value.slice(0, MAX_LAYOUT_NAME_LENGTH);
    }
    el.textContent = value;
}

window.__decoraiOnLayoutEditorShown = function (opts) {
    setLayoutNameDisplay(opts?.name || DEFAULT_LAYOUT_NAME);
};

function showLayoutSaveToast(message, isError = false) {
    const existing = document.getElementById('layout-save-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'layout-save-toast';
    toast.className = 'layout-save-toast' + (isError ? ' error' : '');
    toast.textContent = message;
    const screen = document.getElementById('layout-editor-screen');
    if (screen) screen.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

async function fetchLayouts(bustCache = false) {
    if (!currentSession?.access_token) return [];
    try {
        const url = `${PROXY_SERVER_URL}/api/layouts` + (bustCache ? `?_=${Date.now()}` : '');
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
            ...(bustCache && { cache: 'no-store' })
        });
        if (!res.ok) return [];
        const data = await res.json();
        const layouts = data.layouts;
        return Array.isArray(layouts) ? layouts : (layouts ? [layouts] : []);
    } catch (e) {
        console.error('Failed to fetch layouts:', e);
        return [];
    }
}

/** Small gray placeholder image as data URL when layout has no preview. */
function getLayoutPreviewPlaceholder() {
    const w = 56;
    const h = 42;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Preview', w / 2, h / 2);
    return canvas.toDataURL('image/jpeg', 0.8);
}

function formatLayoutDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleDateString([], { month: 'short', day: 'numeric', year: d.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
}

function refreshLayoutsList(bustCache = false) {
    const listEl = document.getElementById('my-layouts-list');
    if (!listEl) return;
    listEl.innerHTML = '';
    fetchLayouts(bustCache).then(layouts => {
        if (layouts.length === 0) {
            listEl.innerHTML = '<p class="my-layouts-empty">No saved layouts yet. Use Save to create one.</p>';
            return;
        }
        layouts.forEach(layout => {
            const row = document.createElement('div');
            row.className = 'my-layouts-item';
            row.dataset.layoutId = layout.id;
            const topRow = document.createElement('div');
            topRow.className = 'my-layouts-item-top';
            const nameCell = document.createElement('div');
            nameCell.className = 'my-layouts-item-name-cell';
            const name = document.createElement('span');
            name.className = 'my-layouts-item-name';
            name.textContent = layout.name || 'Unnamed';
            const meta = document.createElement('span');
            meta.className = 'my-layouts-item-meta';
            meta.textContent = formatLayoutDate(layout.updated_at);
            nameCell.append(name, meta);
            const previewCell = document.createElement('div');
            previewCell.className = 'my-layouts-item-preview-cell';
            const img = document.createElement('img');
            img.className = 'my-layouts-item-preview';
            img.alt = '';
            img.loading = 'lazy';
            if (layout.preview_data_url && layout.preview_data_url.startsWith('data:')) {
                img.src = layout.preview_data_url;
            } else {
                img.src = getLayoutPreviewPlaceholder();
            }
            img.onerror = function () {
                this.src = getLayoutPreviewPlaceholder();
            };
            previewCell.appendChild(img);
            topRow.append(nameCell, previewCell);
            const actions = document.createElement('div');
            actions.className = 'my-layouts-item-actions';
            const loadBtn = document.createElement('button');
            loadBtn.type = 'button';
            loadBtn.className = 'my-layouts-load-btn';
            loadBtn.textContent = 'Load';
            loadBtn.setAttribute('aria-label', 'Load this floor plan into the editor');
            loadBtn.addEventListener('click', () => loadLayoutById(layout.id));
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'my-layouts-delete-btn';
            delBtn.textContent = 'Delete';
            delBtn.setAttribute('aria-label', 'Remove this layout from your saved layouts');
            delBtn.addEventListener('click', () => deleteLayoutById(layout.id));
            actions.append(loadBtn, delBtn);
            row.append(topRow, actions);
            listEl.appendChild(row);
        });
        if (typeof feather !== 'undefined') feather.replace();
    });
}

async function loadLayoutById(id) {
    if (!currentSession?.access_token) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${id}`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (!res.ok) throw new Error('Failed to load layout');
        const data = await res.json();
        FloorPlanEditor.loadState(data.state);
        currentLayoutId = id;
        if (typeof window.__decoraiCurrentLayoutId !== 'undefined') window.__decoraiCurrentLayoutId = id;
        setLayoutNameDisplay(data.name || DEFAULT_LAYOUT_NAME);
        showLayoutSaveToast('Layout loaded.');
    } catch (e) {
        showLayoutSaveToast(e?.message || 'Failed to load layout', true);
    }
}

async function deleteLayoutById(id) {
    if (!currentSession?.access_token) return;
    const proceed = await showConfirmDialog(
        'Delete this saved layout? This cannot be undone.',
        'Delete layout',
        'Delete',
        'Cancel'
    );
    if (!proceed) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/layouts/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (!res.ok) throw new Error('Failed to delete');
        if (currentLayoutId === id) currentLayoutId = null;
        if (typeof window.__decoraiCurrentLayoutId !== 'undefined' && window.__decoraiCurrentLayoutId === id) window.__decoraiCurrentLayoutId = null;
        refreshLayoutsList();
        showLayoutSaveToast('Layout deleted.');
    } catch (e) {
        showLayoutSaveToast(e?.message || 'Failed to delete layout', true);
    }
}

function updateAuthUI() {
    if (!authButtons || !userMenu) return;
    if (currentUser) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        if (tokensDisplay) tokensDisplay.classList.toggle('hidden', userHasSubscription);
        if (userEmailDisplay) userEmailDisplay.textContent = currentUser.email?.split('@')[0] || 'Account';
        updateTokensDisplay();
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        if (tokensDisplay) tokensDisplay.classList.add('hidden');
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function showAuthModal(mode = 'login') {
    if (!authModal) return;
    authModal.classList.add('show');
    // Ensure visibility/opacity are explicitly set so CSS transitions always apply
    authModal.style.opacity = '1';
    authModal.style.visibility = 'visible';
    if (loginError) loginError.classList.add('hidden');
    if (signupError) signupError.classList.add('hidden');
    hideLoginResendBlock();
    if (mode === 'login') {
        if (authModalTitle) authModalTitle.textContent = 'Sign In';
        if (loginForm) loginForm.classList.remove('hidden');
        if (signupForm) signupForm.classList.add('hidden');
        if (authSwitchText) authSwitchText.textContent = "Don't have an account?";
        if (authSwitchBtn) authSwitchBtn.textContent = 'Sign Up';
    } else {
        if (authModalTitle) authModalTitle.textContent = 'Create Account';
        if (loginForm) loginForm.classList.add('hidden');
        if (signupForm) signupForm.classList.remove('hidden');
        if (authSwitchText) authSwitchText.textContent = 'Already have an account?';
        if (authSwitchBtn) authSwitchBtn.textContent = 'Sign In';
    }
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    if (confirmEmailRequired) confirmEmailRequired.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

function hideAuthModal() {
    if (authModal) {
        authModal.classList.remove('show');
        authModal.style.opacity = '';
        authModal.style.visibility = '';
    }
    if (loginForm) loginForm.reset();
    if (signupForm) signupForm.reset();
    if (loginError) { loginError.classList.add('hidden'); loginError.textContent = ''; }
    if (signupError) { signupError.classList.add('hidden'); signupError.textContent = ''; }
    hideLoginResendBlock();
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) { signupEmailExists.classList.add('hidden'); clearEmailExistsMessage(); }
    if (confirmEmailRequired) { confirmEmailRequired.classList.add('hidden'); clearConfirmEmailMessage(); }
    if (authFormsSection) authFormsSection.classList.remove('hidden');
}

function isEmailNotConfirmedError(err) {
    const msg = (err?.message || '').toLowerCase();
    return msg.includes('email not confirmed') || msg.includes('email_not_confirmed');
}

function showLoginResendBlock() {
    if (loginResendBlock) loginResendBlock.classList.remove('hidden');
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; loginResendMessage.classList.remove('success', 'error'); }
}

function hideLoginResendBlock() {
    if (loginResendBlock) loginResendBlock.classList.add('hidden');
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; }
}

async function handleLogin(e) {
    e.preventDefault();
    if (!supabase) return;
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
    if (!email || !password) return;
    if (loginError) loginError.classList.add('hidden');
    hideLoginResendBlock();
    try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        hideAuthModal();
    } catch (err) {
        if (loginError) { loginError.textContent = err.message; loginError.classList.remove('hidden'); }
        if (isEmailNotConfirmedError(err)) showLoginResendBlock();
    }
}

async function handleLoginResendClick() {
    if (!supabase) return;
    const email = document.getElementById('login-email')?.value;
    if (!email) return;
    if (loginResendBtn) { loginResendBtn.disabled = true; loginResendBtn.textContent = 'Sending…'; }
    if (loginResendMessage) { loginResendMessage.classList.add('hidden'); loginResendMessage.textContent = ''; loginResendMessage.classList.remove('success', 'error'); }
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email,
            options: { emailRedirectTo: window.location.origin }
        });
        if (error) throw error;
        if (loginResendMessage) {
            loginResendMessage.textContent = 'Verification email sent. Check your inbox and spam folder.';
            loginResendMessage.classList.add('success');
            loginResendMessage.classList.remove('hidden');
        }
    } catch (err) {
        if (loginResendMessage) {
            loginResendMessage.textContent = err?.message || 'Failed to resend email.';
            loginResendMessage.classList.add('error');
            loginResendMessage.classList.remove('hidden');
        }
    }
    if (loginResendBtn) { loginResendBtn.disabled = false; loginResendBtn.textContent = 'Resend verification email'; }
}

let lastSignupEmailForResend = null;

function showEmailExistsState(email) {
    lastSignupEmailForResend = email;
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupError) signupError.classList.add('hidden');
    clearEmailExistsMessage();
    if (signupEmailExists) signupEmailExists.classList.remove('hidden');
    if (authModalTitle) authModalTitle.textContent = 'Account already exists';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideEmailExistsState() {
    lastSignupEmailForResend = null;
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    clearEmailExistsMessage();
}

function clearEmailExistsMessage() {
    if (!signupEmailExistsMessage) return;
    signupEmailExistsMessage.classList.add('hidden');
    signupEmailExistsMessage.textContent = '';
    signupEmailExistsMessage.classList.remove('success', 'error');
}

function setEmailExistsMessage(text, type) {
    if (!signupEmailExistsMessage) return;
    signupEmailExistsMessage.textContent = text;
    signupEmailExistsMessage.classList.remove('success', 'error');
    if (type) signupEmailExistsMessage.classList.add(type);
    signupEmailExistsMessage.classList.remove('hidden');
}

function isEmailAlreadyRegisteredError(error, data) {
    if (error) {
        const msg = (error.message || '').toLowerCase();
        return msg.includes('already registered') || msg.includes('already exists') || msg.includes('user already');
    }
    if (data?.user && Array.isArray(data.user.identities)) {
        return data.user.identities.length === 0;
    }
    return false;
}

async function handleSignup(e) {
    e.preventDefault();
    if (!supabase) return;
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    const confirmPassword = document.getElementById('signup-confirm-password')?.value;
    if (signupError) signupError.classList.add('hidden');
    if (password !== confirmPassword) {
        if (signupError) { signupError.textContent = 'Passwords do not match'; signupError.classList.remove('hidden'); }
        return;
    }
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (isEmailAlreadyRegisteredError(error, data)) {
            showEmailExistsState(email);
            return;
        }
        if (error) throw error;
        if (data?.user && !data?.session) {
            showSignupSuccess(email);
        } else {
            hideAuthModal();
        }
    } catch (err) {
        if (signupError) { signupError.textContent = err.message; signupError.classList.remove('hidden'); }
    }
}

async function handleResendVerificationEmail() {
    if (!supabase || !lastSignupEmailForResend) return;
    if (emailExistsResendBtn) {
        emailExistsResendBtn.disabled = true;
        emailExistsResendBtn.textContent = 'Sending…';
    }
    clearEmailExistsMessage();
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: lastSignupEmailForResend,
            options: {
                emailRedirectTo: window.location.origin
            }
        });
        if (error) throw error;
        setEmailExistsMessage(
            'If a verification email was sent, it may take a minute to arrive. Check your spam folder. Resend is rate-limited (about 4 per hour on free tiers).',
            'success'
        );
    } catch (err) {
        setEmailExistsMessage(err.message || 'Failed to resend email.', 'error');
    }
    if (emailExistsResendBtn) {
        emailExistsResendBtn.disabled = false;
        emailExistsResendBtn.textContent = 'Resend verification email';
    }
}

async function handleEmailMagicLink() {
    if (!supabase || !lastSignupEmailForResend) return;
    if (emailExistsMagicLinkBtn) {
        emailExistsMagicLinkBtn.disabled = true;
        emailExistsMagicLinkBtn.textContent = 'Sending…';
    }
    clearEmailExistsMessage();
    try {
        const { error } = await supabase.auth.signInWithOtp({
            email: lastSignupEmailForResend,
            options: {
                shouldCreateUser: false,
                emailRedirectTo: window.location.origin
            }
        });
        if (error) throw error;
        setEmailExistsMessage('Check your email for a sign-in link. It may take a minute; check spam if you don’t see it.', 'success');
    } catch (err) {
        setEmailExistsMessage(err.message || 'Failed to send sign-in link.', 'error');
    }
    if (emailExistsMagicLinkBtn) {
        emailExistsMagicLinkBtn.disabled = false;
        emailExistsMagicLinkBtn.textContent = 'Email me a sign-in link';
    }
}

function requireEmailConfirmedForFeature(featureName) {
    if (!supabase) return true;
    if (!currentUser) {
        showAuthModal('login');
        return false;
    }
    if (!currentUser.email_confirmed_at) {
        showConfirmEmailRequired(featureName);
        return false;
    }
    return true;
}

function showConfirmEmailRequired(featureName) {
    if (!authModal) return;
    authModal.classList.add('show');
    if (authModalTitle) authModalTitle.textContent = 'Confirm your email';
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (signupSuccess) signupSuccess.classList.add('hidden');
    if (signupEmailExists) signupEmailExists.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (confirmEmailFeatureName) confirmEmailFeatureName.textContent = featureName;
    if (confirmEmailAddress && currentUser?.email) confirmEmailAddress.textContent = currentUser.email;
    clearConfirmEmailMessage();
    if (confirmEmailRequired) confirmEmailRequired.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

function hideConfirmEmailRequired() {
    if (confirmEmailRequired) confirmEmailRequired.classList.add('hidden');
    clearConfirmEmailMessage();
}

function clearConfirmEmailMessage() {
    if (!confirmEmailMessage) return;
    confirmEmailMessage.classList.add('hidden');
    confirmEmailMessage.textContent = '';
    confirmEmailMessage.classList.remove('success', 'error');
}

function setConfirmEmailMessage(text, type) {
    if (!confirmEmailMessage) return;
    confirmEmailMessage.textContent = text;
    confirmEmailMessage.classList.remove('success', 'error');
    if (type) confirmEmailMessage.classList.add(type);
    confirmEmailMessage.classList.remove('hidden');
}

async function handleConfirmEmailResend() {
    if (!supabase || !currentUser?.email) return;
    if (confirmEmailResendBtn) {
        confirmEmailResendBtn.disabled = true;
        confirmEmailResendBtn.textContent = 'Sending…';
    }
    clearConfirmEmailMessage();
    try {
        const { error } = await supabase.auth.resend({
            type: 'signup',
            email: currentUser.email,
            options: { emailRedirectTo: window.location.origin }
        });
        if (error) throw error;
        setConfirmEmailMessage('Verification email sent. Check your inbox and spam folder.', 'success');
    } catch (err) {
        setConfirmEmailMessage(err.message || 'Failed to resend email.', 'error');
    }
    if (confirmEmailResendBtn) {
        confirmEmailResendBtn.disabled = false;
        confirmEmailResendBtn.textContent = 'Resend verification email';
    }
}

function handleEmailExistsSignIn() {
    const email = lastSignupEmailForResend;
    hideEmailExistsState();
    showAuthModal('login');
    const loginEmailInput = document.getElementById('login-email');
    if (loginEmailInput && email) loginEmailInput.value = email;
    if (typeof feather !== 'undefined') feather.replace();
}

function showSignupSuccess(email) {
    if (loginForm) loginForm.classList.add('hidden');
    if (signupForm) signupForm.classList.add('hidden');
    if (authFormsSection) authFormsSection.classList.add('hidden');
    if (authModalTitle) authModalTitle.textContent = 'Account Created';
    if (signupSuccessEmail) signupSuccessEmail.textContent = email;
    if (signupSuccess) signupSuccess.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

async function handleLogout() {
    if (supabase) await supabase.auth.signOut();
    if (userDropdown) userDropdown.classList.add('hidden');
}

// Event Listeners
function showAlertDialog(message, title = 'Notice') {
    if (!alertModal || !alertModalMessage) {
        console.error('Alert modal not initialized:', message);
        return;
    }
    if (alertModalTitle) alertModalTitle.textContent = title;
    alertModalMessage.textContent = message;
    alertModal.classList.add('show');
    alertModal.style.opacity = '1';
    alertModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideAlertDialog() {
    if (alertModal) {
        alertModal.classList.remove('show');
        alertModal.style.opacity = '';
        alertModal.style.visibility = '';
    }
}

// Expose to other scripts (e.g. floorPlanEditor)
window.showAlertDialog = showAlertDialog;

function showConfirmDialog(message, title = 'Confirm', confirmLabel = 'OK', cancelLabel = 'Cancel') {
    if (!confirmModal || !confirmModalMessage) {
        console.error('Confirm modal not initialized:', message);
        return Promise.resolve(false);
    }
    if (confirmModalTitle) confirmModalTitle.textContent = title;
    confirmModalMessage.textContent = message;
    if (confirmModalConfirmBtn) confirmModalConfirmBtn.textContent = confirmLabel;
    if (confirmModalCancelBtn) confirmModalCancelBtn.textContent = cancelLabel;
    confirmModal.classList.add('show');
    confirmModal.style.opacity = '1';
    confirmModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
    if (confirmResolve) {
        confirmResolve(false);
        confirmResolve = null;
    }
    return new Promise(resolve => {
        confirmResolve = resolve;
    });
}

function resolveConfirmDialog(result) {
    if (confirmModal) {
        confirmModal.classList.remove('show');
        confirmModal.style.opacity = '';
        confirmModal.style.visibility = '';
    }
    if (confirmResolve) {
        confirmResolve(result);
        confirmResolve = null;
    }
}

// Expose confirm globally
window.showConfirmDialog = showConfirmDialog;

document.addEventListener('DOMContentLoaded', async () => {
    await initializeApp();

    // Event Listeners (Add null checks for safety)
    if (roomUpload) roomUpload.addEventListener('change', handleImageUpload);
    if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
    if (changeImageBtn) changeImageBtn.addEventListener('click', openFileSelector);
    if (generateBtn) generateBtn.addEventListener('click', generateDesigns);
    if (backToOptionsBtn) backToOptionsBtn.addEventListener('click', goBackToPreview);
    if (regenerateBtn) regenerateBtn.addEventListener('click', regenerateDesigns);
    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveCurrentDesign);

    // Token / payment listeners
    if (buyTokensBtn) buyTokensBtn.addEventListener('click', showBuyTokensModal);
    if (closeBuyTokensModalBtn) closeBuyTokensModalBtn.addEventListener('click', hideBuyTokensModal);
    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);
    // Close modal when clicking outside
    if (buyTokensModal) {
        buyTokensModal.addEventListener('click', (e) => {
            if (e.target === buyTokensModal) hideBuyTokensModal();
        });
    }

    // Subscription modal listeners
    const subscribeCheckoutBtn = document.getElementById('subscribe-checkout-btn');
    const closeSubscribeModalBtn = document.getElementById('close-subscribe-modal-btn');
    const subscribeModal = document.getElementById('subscribe-modal');
    if (subscribeCheckoutBtn) subscribeCheckoutBtn.addEventListener('click', handleSubscribeCheckout);
    if (closeSubscribeModalBtn) closeSubscribeModalBtn.addEventListener('click', hideSubscribeModal);
    if (subscribeModal) {
        subscribeModal.addEventListener('click', (e) => {
            if (e.target === subscribeModal) hideSubscribeModal();
        });
    }

    // Auth event listeners
    if (loginBtn) loginBtn.addEventListener('click', () => showAuthModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => showAuthModal('signup'));
    if (closeModalBtn) closeModalBtn.addEventListener('click', hideAuthModal);
    if (authModal) {
        authModal.addEventListener('click', (event) => {
            if (event.target === authModal) hideAuthModal();
        });
    }

    // Alert modal listeners
    if (alertModalCloseBtn) alertModalCloseBtn.addEventListener('click', hideAlertDialog);
    if (alertModalOkBtn) alertModalOkBtn.addEventListener('click', hideAlertDialog);
    if (alertModal) {
        alertModal.addEventListener('click', (event) => {
            if (event.target === alertModal) hideAlertDialog();
        });
    }

    // Confirm modal listeners
    if (confirmModalCloseBtn) confirmModalCloseBtn.addEventListener('click', () => resolveConfirmDialog(false));
    if (confirmModalCancelBtn) confirmModalCancelBtn.addEventListener('click', () => resolveConfirmDialog(false));
    if (confirmModalConfirmBtn) confirmModalConfirmBtn.addEventListener('click', () => resolveConfirmDialog(true));
    if (confirmModal) {
        confirmModal.addEventListener('click', (event) => {
            if (event.target === confirmModal) resolveConfirmDialog(false);
        });
    }
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (loginResendBtn) loginResendBtn.addEventListener('click', handleLoginResendClick);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    if (authSwitchBtn) {
        authSwitchBtn.addEventListener('click', () => {
            const isLogin = loginForm && !loginForm.classList.contains('hidden');
            showAuthModal(isLogin ? 'signup' : 'login');
        });
    }
    if (successCloseBtn) successCloseBtn.addEventListener('click', hideAuthModal);
    if (emailExistsSigninBtn) emailExistsSigninBtn.addEventListener('click', handleEmailExistsSignIn);
    if (emailExistsMagicLinkBtn) emailExistsMagicLinkBtn.addEventListener('click', handleEmailMagicLink);
    if (emailExistsResendBtn) emailExistsResendBtn.addEventListener('click', handleResendVerificationEmail);
    if (confirmEmailResendBtn) confirmEmailResendBtn.addEventListener('click', handleConfirmEmailResend);
    if (confirmEmailCloseBtn) confirmEmailCloseBtn.addEventListener('click', hideAuthModal);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    const layoutEditorBtn = document.getElementById('layout-editor-btn');
    if (layoutEditorBtn) {
        layoutEditorBtn.addEventListener('click', (e) => {
            if (!requireEmailConfirmedForFeature('the layout editor')) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
    }
    // Enforce max length for layout name editable field
    const layoutNameDisplayEl = document.getElementById('layout-name-display');
    if (layoutNameDisplayEl) {
        layoutNameDisplayEl.addEventListener('input', () => {
            let text = (layoutNameDisplayEl.textContent || '').replace(/\n/g, ' ').trimStart();
            if (text.length > MAX_LAYOUT_NAME_LENGTH) {
                text = text.slice(0, MAX_LAYOUT_NAME_LENGTH);
                layoutNameDisplayEl.textContent = text;
                const range = document.createRange();
                const sel = window.getSelection();
                range.selectNodeContents(layoutNameDisplayEl);
                range.collapse(false);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        });
        layoutNameDisplayEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                layoutNameDisplayEl.blur();
                handleSaveLayout();
            }
        });
    }
    const layoutSaveBtn = document.getElementById('layout-save-btn');
    if (layoutSaveBtn) layoutSaveBtn.addEventListener('click', () => {
        if (layoutSaveBtn.getAttribute('data-subscription-locked') === '1') {
            showSubscribeModal();
            return;
        }
        handleSaveLayout();
    });
    const myLayoutsToggle = document.getElementById('my-layouts-toggle');
    const myLayoutsPanel = document.getElementById('my-layouts-panel');
    if (myLayoutsToggle && myLayoutsPanel) {
        myLayoutsToggle.addEventListener('click', () => {
            myLayoutsPanel.classList.toggle('hidden');
            myLayoutsToggle.querySelector('.my-layouts-chevron')?.classList.toggle('rotated', !myLayoutsPanel.classList.contains('hidden'));
            if (!myLayoutsPanel.classList.contains('hidden')) refreshLayoutsList();
        });
    }
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', () => userDropdown.classList.toggle('hidden'));
    }
    document.addEventListener('click', (e) => {
        if (userMenu && !userMenu.contains(e.target)) {
            if (userDropdown) userDropdown.classList.add('hidden');
        }
    });

    // Room type selection
    const roomTypeRadios = document.querySelectorAll('input[name="room-type"]');
    if (roomTypeRadios) {
        roomTypeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                currentRoomType = e.target.value;
                console.log(`Room type selected: ${currentRoomType}`);
                handleRoomTypeChange();

                // On mobile, show options screen after room type selection
                if (isMobile) {
                    showMobileOptionsScreen();
                }
            });
        });
    }

    // Mobile-specific event listeners
    if (mobileOptionsBackBtn) {
        mobileOptionsBackBtn.addEventListener('click', hideMobileOptionsScreen);
    }

    if (mobileGenerateBtn) {
        mobileGenerateBtn.addEventListener('click', generateDesigns);
    }

    // Back to upload button
    if (backToUploadBtn) {
        backToUploadBtn.addEventListener('click', goBackToUpload);
    }

    // Mobile furnished option selection
    const mobileFurnishedOptionRadios = document.querySelectorAll('input[name="mobile-furnished-option"]');
    if (mobileFurnishedOptionRadios) {
        mobileFurnishedOptionRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                furnishedOption = e.target.value;
                console.log(`Mobile furnished option selected: ${furnishedOption}`);
                handleMobileFurnishedOptionChange();
            });
        });
    }

    // Furnished room options selection
    const furnishedOptionRadios = document.querySelectorAll('input[name="furnished-option"]');
    if (furnishedOptionRadios) {
        furnishedOptionRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                furnishedOption = e.target.value;
                console.log(`Furnished option selected: ${furnishedOption}`);
                handleFurnishedOptionChange();
            });
        });
    }

    // Add support for drag-and-drop file upload
    if (uploadContainer) {
        uploadContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadContainer.classList.add('drag-over');
        });

        uploadContainer.addEventListener('dragleave', () => {
            uploadContainer.classList.remove('drag-over');
        });

        uploadContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadContainer.classList.remove('drag-over');

            if (e.dataTransfer.files.length) {
                const file = e.dataTransfer.files[0];
                if (isValidImage(file)) {
                    const reader = new FileReader();

                    reader.onload = async function (event) {
                        currentUploadedImage = event.target.result;
                        if (roomPreview) roomPreview.src = currentUploadedImage;

                        // Detect if the room is empty
                        isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                        console.log(`Uploaded room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);

                        if (uploadContainer) uploadContainer.classList.add('hidden');
                        if (previewContainer) previewContainer.classList.remove('hidden');
                    };

                    reader.readAsDataURL(file);
                } else {
                    showAlertDialog('Please upload a valid image file (JPEG, PNG, etc.)');
                }
            }
        });
    }



    // Initialize the app UI (feather icons, resize, room type state)
    initializeAppUI();
});

// Functions
function initializeAppUI() {
    feather.replace();

    // Update mobile detection on resize
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 768;
    });

    // Initialize the generate button state
    handleRoomTypeChange();

    // No room type is selected initially - user must make a choice
}

// Mobile-specific functions
function showMobileOptionsScreen() {
    if (!mobileOptionsScreen) return;

    // Don't show options screen if no room type is selected
    if (!currentRoomType) {
        return;
    }

    // Update the title based on room type
    if (mobileOptionsTitle) {
        mobileOptionsTitle.textContent = currentRoomType === 'empty' ? 'Select Items' : 'Redesign Options';
    }

    // Show/hide appropriate sections
    if (currentRoomType === 'empty') {
        if (mobileRoomItemsSelection) {
            mobileRoomItemsSelection.classList.remove('hidden');
            updateMobileItemsSelectionUI('empty');
            populateMobileRoomItems();
        }
        if (mobileFurnishedOptions) {
            mobileFurnishedOptions.classList.add('hidden');
        }
    } else {
        if (mobileFurnishedOptions) {
            mobileFurnishedOptions.classList.remove('hidden');
        }
        if (mobileRoomItemsSelection) {
            mobileRoomItemsSelection.classList.add('hidden');
        }
        handleMobileFurnishedOptionChange();
    }

    // Show the mobile options screen
    mobileOptionsScreen.classList.add('show');

    // Hide the generate button initially - it will be shown by handleMobileFurnishedOptionChange if needed
    if (mobileGenerateBtn) {
        mobileGenerateBtn.style.display = 'none';
    }
}

function hideMobileOptionsScreen(shouldResetSelection = true) {
    if (mobileOptionsScreen) {
        mobileOptionsScreen.classList.remove('show');
    }
    // Reset generate button visibility when hiding the screen
    if (mobileGenerateBtn) {
        mobileGenerateBtn.style.display = 'none';
    }

    // Only reset room type selection if explicitly requested and we're on the preview screen
    // Don't reset if we're transitioning to results or regenerating
    const isOnPreview = resultsSection && resultsSection.classList.contains('hidden');
    const isOnResults = resultsSection && !resultsSection.classList.contains('hidden');

    if (shouldResetSelection && isOnPreview && !isOnResults) {
        // Reset room type selection and hide main generate button
        resetRoomTypeSelection();
    }
}

function resetRoomTypeSelection() {
    // Reset the current room type
    currentRoomType = null;

    // Uncheck all room type radio buttons
    const roomTypeRadios = document.querySelectorAll('input[name="room-type"]');
    roomTypeRadios.forEach(radio => {
        radio.checked = false;
    });

    // Uncheck all furnished option radio buttons
    const furnishedOptionRadios = document.querySelectorAll('input[name="furnished-option"]');
    furnishedOptionRadios.forEach(radio => {
        radio.checked = false;
    });

    // Uncheck all mobile furnished option radio buttons
    const mobileFurnishedOptionRadios = document.querySelectorAll('input[name="mobile-furnished-option"]');
    mobileFurnishedOptionRadios.forEach(radio => {
        radio.checked = false;
    });

    // Reset furnished option to default
    furnishedOption = null;

    // Clear selected room items
    selectedRoomItems.clear();

    // Hide all option sections
    const roomItemsSelection = document.getElementById('room-items-selection');
    const furnishedOptions = document.getElementById('furnished-options');

    if (roomItemsSelection) {
        roomItemsSelection.classList.add('hidden');
    }
    if (furnishedOptions) {
        furnishedOptions.classList.add('hidden');
    }

    // Hide the main generate button
    if (generateBtn) {
        generateBtn.style.display = 'none';
    }

    // Hide error messages
    hideItemsSelectionError();
    hideMobileItemsSelectionError();
}

function goBackToUpload() {
    // Reset room type selection
    resetRoomTypeSelection();

    // Hide preview container and show upload container
    if (previewContainer) {
        previewContainer.classList.add('hidden');
    }
    if (uploadContainer) {
        uploadContainer.classList.remove('hidden');
    }

    // Reset image upload state
    resetImageUpload();
}

function handleMobileFurnishedOptionChange() {
    if (!mobileRoomItemsSelection) return;

    // Hide error message when furnished option changes
    hideMobileItemsSelectionError();

    // Hide generate button if no option is selected
    if (!furnishedOption) {
        if (mobileGenerateBtn) {
            mobileGenerateBtn.style.display = 'none';
        }
        return;
    }

    if (furnishedOption === 'keep-existing') {
        // Hide room items selection - keep existing items only
        mobileRoomItemsSelection.classList.add('hidden');
        selectedRoomItems.clear();
        // Show generate button for keep existing option
        if (mobileGenerateBtn) {
            mobileGenerateBtn.style.display = 'flex';
        }
    } else if (furnishedOption === 'add-new') {
        // Show room items selection for adding new items
        mobileRoomItemsSelection.classList.remove('hidden');
        updateMobileItemsSelectionUI('add-new');
        populateMobileRoomItems();
        // Show generate button for add new option
        if (mobileGenerateBtn) {
            mobileGenerateBtn.style.display = 'flex';
        }
    } else if (furnishedOption === 'start-fresh') {
        // Show room items selection for starting fresh
        mobileRoomItemsSelection.classList.remove('hidden');
        updateMobileItemsSelectionUI('start-fresh');
        populateMobileRoomItems();
        // Show generate button for start fresh option
        if (mobileGenerateBtn) {
            mobileGenerateBtn.style.display = 'flex';
        }
    }
}

function updateMobileItemsSelectionUI(context) {
    if (!mobileItemsSelectionTitle || !mobileItemsSelectionHint) return;

    if (context === 'empty') {
        mobileItemsSelectionTitle.textContent = 'What would you like to add?';
        mobileItemsSelectionHint.textContent = 'Select items you\'d like to include in your room design';
    } else if (context === 'add-new') {
        mobileItemsSelectionTitle.textContent = 'What additional items would you like?';
        mobileItemsSelectionHint.textContent = 'Select new items to add to your existing furniture';
    } else if (context === 'start-fresh') {
        mobileItemsSelectionTitle.textContent = 'What would you like in your new room?';
        mobileItemsSelectionHint.textContent = 'Select items to replace your existing furniture';
    }
}

function populateMobileRoomItems() {
    if (!mobileItemsGrid) return;

    mobileItemsGrid.innerHTML = '';

    roomItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-option';
        itemElement.setAttribute('data-item-id', item.id);

        itemElement.innerHTML = `
            <input type="checkbox" id="mobile-item-${item.id}" class="item-checkbox">
            <label for="mobile-item-${item.id}" class="item-label">
                <div class="item-icon">
                    <i data-feather="${item.icon}"></i>
                </div>
                <span class="item-name">${item.name}</span>
            </label>
        `;

        // Add event listener for item selection
        const checkbox = itemElement.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedRoomItems.add(item.id);
            } else {
                selectedRoomItems.delete(item.id);
            }
            console.log('Selected items:', Array.from(selectedRoomItems));

            // Hide error message when items are selected
            if (selectedRoomItems.size > 0) {
                hideMobileItemsSelectionError();
                // Show generate button when items are selected
                if (mobileGenerateBtn) {
                    mobileGenerateBtn.style.display = 'flex';
                }
            } else {
                // Hide generate button when no items are selected
                if (mobileGenerateBtn) {
                    mobileGenerateBtn.style.display = 'none';
                }
            }
        });

        mobileItemsGrid.appendChild(itemElement);
    });

    // Replace feather icons
    feather.replace();
}

function showMobileItemsSelectionError() {
    if (mobileItemsSelectionError) {
        mobileItemsSelectionError.classList.remove('hidden');
    }
}

function hideMobileItemsSelectionError() {
    if (mobileItemsSelectionError) {
        mobileItemsSelectionError.classList.add('hidden');
    }
}


function toggleKeyVisibility() {
    // No longer needed - API handled server-side
}

function toggleReplicateKeyVisibility() {
    // No longer needed - API handled server-side
}

function saveApiKeys() {
    // No longer needed - API handled server-side
}

async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
        const reader = new FileReader();

        reader.onload = async function (event) {
            currentUploadedImage = event.target.result;
            roomPreview.src = currentUploadedImage;

            // Detect if the room is empty
            isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
            console.log(`Uploaded room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);

            uploadContainer.classList.add('hidden');
            previewContainer.classList.remove('hidden');
        };

        reader.readAsDataURL(file);
    } else if (file) {
        showAlertDialog('Please upload a valid image file (JPEG, PNG, etc.)');
    }
}

function isValidImage(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    return validTypes.includes(file.type);
}

function openCamera() {
    // Check if the device has a camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Create a new element for the camera view
        const cameraView = document.createElement('div');
        cameraView.classList.add('camera-view');

        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');

        const captureBtn = document.createElement('button');
        captureBtn.classList.add('capture-btn');
        captureBtn.innerHTML = '<i data-feather="camera"></i>';

        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.innerHTML = '<i data-feather="x"></i>';

        cameraView.appendChild(video);
        cameraView.appendChild(captureBtn);
        cameraView.appendChild(cancelBtn);

        document.body.appendChild(cameraView);
        feather.replace();

        // Get camera access
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                video.srcObject = stream;
                video.play();

                captureBtn.addEventListener('click', async () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                    currentUploadedImage = canvas.toDataURL('image/jpeg');
                    roomPreview.src = currentUploadedImage;

                    // Detect if the room is empty
                    isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                    console.log(`Captured room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);

                    uploadContainer.classList.add('hidden');
                    previewContainer.classList.remove('hidden');

                    // Stop the camera stream
                    stream.getTracks().forEach(track => track.stop());
                    cameraView.remove();
                });

                cancelBtn.addEventListener('click', () => {
                    // Stop the camera stream
                    stream.getTracks().forEach(track => track.stop());
                    cameraView.remove();
                });
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
                showAlertDialog('Unable to access camera. Please check your device permissions.');
                cameraView.remove();
            });
    } else {
        showAlertDialog('Your device does not support camera access');
    }
}

function openFileSelector() {
    // Directly trigger the file input dialog
    if (roomUpload) {
        roomUpload.click();
    }
}

function resetImageUpload() {
    currentUploadedImage = null;
    isRoomActuallyEmpty = true;
    if (roomPreview) roomPreview.src = '';
    if (roomUpload) roomUpload.value = '';
    if (previewContainer) previewContainer.classList.add('hidden');
    if (uploadContainer) uploadContainer.classList.remove('hidden');
}

// Detect if a room is empty by analyzing the image
async function detectEmptyRoom(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            // Simple heuristic: check for large areas of uniform color (walls, floors)
            // and lack of distinct objects (furniture)
            let uniformColorPixels = 0;
            let totalPixels = data.length / 4;

            // Sample pixels to check for uniformity
            const sampleSize = Math.min(1000, totalPixels);
            const step = Math.floor(totalPixels / sampleSize);

            for (let i = 0; i < sampleSize; i++) {
                const pixelIndex = i * step * 4;
                const r = data[pixelIndex];
                const g = data[pixelIndex + 1];
                const b = data[pixelIndex + 2];

                // Check if this pixel is part of a wall/floor (neutral colors)
                const isNeutral = Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30;
                const isLight = (r + g + b) / 3 > 100;

                if (isNeutral && isLight) {
                    uniformColorPixels++;
                }
            }

            const uniformRatio = uniformColorPixels / sampleSize;

            // If more than 70% of sampled pixels are uniform neutral colors, likely empty
            const isEmpty = uniformRatio > 0.7;

            console.log(`Room analysis: ${Math.round(uniformRatio * 100)}% uniform neutral colors, likely empty: ${isEmpty}`);
            resolve(isEmpty);
        };

        img.onerror = function () {
            console.log('Could not analyze image, assuming room is furnished');
            resolve(false);
        };

        img.src = imageSrc;
    });
}

// Handle room type change and show/hide appropriate options
function handleRoomTypeChange() {
    const roomItemsSelection = document.getElementById('room-items-selection');
    const furnishedOptions = document.getElementById('furnished-options');

    // If no room type is selected, hide everything and return
    if (!currentRoomType) {
        if (roomItemsSelection) {
            roomItemsSelection.classList.add('hidden');
        }
        if (furnishedOptions) {
            furnishedOptions.classList.add('hidden');
        }
        if (generateBtn) {
            generateBtn.style.display = 'none';
        }
        return;
    }

    // On mobile, hide additional options in the main preview container
    if (isMobile) {
        if (roomItemsSelection) {
            roomItemsSelection.classList.add('hidden');
        }
        if (furnishedOptions) {
            furnishedOptions.classList.add('hidden');
        }
        // Hide the main generate button on mobile - it will be shown in the mobile options screen
        if (generateBtn) {
            generateBtn.style.display = 'none';
        }
        return; // Mobile flow will be handled by showMobileOptionsScreen
    }

    // Desktop flow
    if (currentRoomType === 'empty') {
        // Show room items selection for empty rooms
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('empty');
            populateRoomItems();
        }
        // Hide furnished options
        if (furnishedOptions) {
            furnishedOptions.classList.add('hidden');
        }
        // Hide generate button initially for empty rooms - will show when items are selected
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'none';
        }
    } else {
        // Show furnished options for furnished rooms
        if (furnishedOptions) {
            furnishedOptions.classList.remove('hidden');
        }
        // Hide generate button initially since no furnished option is selected yet
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'none';
        }
        // Handle furnished option change - this will show/hide button based on selection
        handleFurnishedOptionChange();
    }
}

// Populate the room items grid
function populateRoomItems() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = '';

    roomItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-option';
        itemElement.setAttribute('data-item-id', item.id);

        itemElement.innerHTML = `
            <input type="checkbox" id="item-${item.id}" class="item-checkbox">
            <label for="item-${item.id}" class="item-label">
                <div class="item-icon">
                    <i data-feather="${item.icon}"></i>
                </div>
                <span class="item-name">${item.name}</span>
            </label>
        `;

        // Add event listener for item selection
        const checkbox = itemElement.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedRoomItems.add(item.id);
            } else {
                selectedRoomItems.delete(item.id);
            }
            console.log('Selected items:', Array.from(selectedRoomItems));

            // Hide error message when items are selected
            if (selectedRoomItems.size > 0) {
                hideItemsSelectionError();
                // Show generate button when items are selected (desktop)
                if (!isMobile && generateBtn) {
                    generateBtn.style.display = 'flex';
                }
            } else {
                // Hide generate button when no items are selected (desktop)
                if (!isMobile && generateBtn && currentRoomType === 'empty') {
                    generateBtn.style.display = 'none';
                }
            }
        });

        itemsGrid.appendChild(itemElement);
    });

    // Replace feather icons
    feather.replace();
}

// Handle furnished room option changes
function handleFurnishedOptionChange() {
    const roomItemsSelection = document.getElementById('room-items-selection');

    // Hide error message when furnished option changes
    hideItemsSelectionError();

    // Hide generate button if no option is selected
    if (!furnishedOption) {
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'none';
        }
        return;
    }

    if (furnishedOption === 'keep-existing') {
        // Hide room items selection - keep existing items only
        if (roomItemsSelection) {
            roomItemsSelection.classList.add('hidden');
        }
        selectedRoomItems.clear();
        // Show generate button for keep-existing option (desktop)
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'flex';
        }
    } else if (furnishedOption === 'add-new') {
        // Show room items selection for adding new items
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('add-new');
            populateRoomItems();
        }
        // Show generate button for add-new option (desktop) - will be hidden if no items selected
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'flex';
        }
    } else if (furnishedOption === 'start-fresh') {
        // Show room items selection for starting fresh
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('start-fresh');
            populateRoomItems();
        }
        // Show generate button for start-fresh option (desktop) - will be hidden if no items selected
        if (!isMobile && generateBtn) {
            generateBtn.style.display = 'flex';
        }
    }
}

// Update the UI text based on the context
function updateItemsSelectionUI(context) {
    const title = document.getElementById('items-selection-title');
    const hint = document.getElementById('items-selection-hint');

    if (context === 'empty') {
        title.textContent = 'What would you like to add?';
        hint.textContent = 'Select items you\'d like to include in your room design';
    } else if (context === 'add-new') {
        title.textContent = 'What additional items would you like?';
        hint.textContent = 'Select new items to add to your existing furniture';
    } else if (context === 'start-fresh') {
        title.textContent = 'What would you like in your new room?';
        hint.textContent = 'Select items to replace your existing furniture';
    }
}

// Generate positive and negative prompts based on selected room items and room type
function generatePromptsWithItems(basePrompt, style) {
    const result = {
        positivePrompt: '',
        negativePrompt: '',
        shouldGenerate: true // Flag to indicate if generation should proceed
    };

    // Simplified architectural preservation constants
    const ARCHITECTURAL_PRESERVATION_PREFIX = "DO NOT change walls, floor, ceiling, windows, or doors. Only add furniture.";
    const ARCHITECTURAL_PRESERVATION_SUFFIX = "Same style as the original room.";

    // Simplified base negative prompt - focused on architectural preservation
    const baseNegativePrompt = "blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, architectural changes, structural modifications";

    // If the image looks empty but the user picked "furnished", we usually treat it like an empty room
    // (pick items, etc.) — except for "keep existing items", which has its own prompt and no item grid.
    const shouldTreatAsEmpty =
        isRoomActuallyEmpty && currentRoomType === 'furnished' && furnishedOption !== 'keep-existing';

    // Special case: "start fresh" should always generate, even with no items
    if (currentRoomType === 'furnished' && furnishedOption === 'start-fresh') {
        if (selectedRoomItems.size === 0) {
            result.positivePrompt = `Given this image of a furnished room, remove all furniture, leaving an empty room. DO NOT change walls, floor, ceiling, windows, or doors.`;
            result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
        } else {
            // Get selected and unselected items
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            const unselectedItems = roomItems.filter(item => !selectedRoomItems.has(item.id));

            // Build positive prompt with selected items
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.positivePrompt = `DO NOT change walls, floor, ceiling, windows, or doors. Remove all existing furniture, then add ONLY: ${selectedItemNames}. ${ARCHITECTURAL_PRESERVATION_SUFFIX} Style: ${style}.`;

            // Build negative prompt with unselected items
            const unselectedItemNames = unselectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.negativePrompt = `${baseNegativePrompt}, ${unselectedItemNames}, existing furniture, other furniture`;
        }
    } else if (currentRoomType === 'empty' || shouldTreatAsEmpty) {
        // Empty room: add ONLY selected items, room stays identical (no other changes)
        if (selectedRoomItems.size === 0) {
            result.shouldGenerate = false;
            result.positivePrompt = '';
            result.negativePrompt = '';
        } else {
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            // Use prompt-friendly names so the model clearly generates the object (e.g. "television" not just "tv")
            const promptItemNames = selectedItems.map(item => {
                const name = item.name.toLowerCase();
                if (name === 'tv') return 'television';
                if (name === 'art') return 'wall art';
                if (name === 'chairs') return 'chair';
                return name;
            }).join(', ');
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            const allOtherItems = roomItems.filter(item => !selectedRoomItems.has(item.id));
            const allOtherItemNames = allOtherItems.map(item => item.name.toLowerCase()).join(', ');

            // Lead with the object(s) so the model prioritizes adding them; then stress room unchanged
            result.positivePrompt = `A room with ${promptItemNames} visible. Add ${promptItemNames} to this room. Keep the room exactly as it is: same walls, floor, ceiling, windows, doors, same lighting, same colors, same perspective. No other changes.`;

            // Strong negative: no room/lighting changes, no other furniture or decor
            result.negativePrompt = `${baseNegativePrompt}, modified walls, modified floor, modified ceiling, modified windows, modified doors, changed lighting, different lighting, altered lighting, brighter, darker, shadow change, different shadows, changed perspective, changed colors, different materials, architectural change, structural change, ${allOtherItemNames}, other furniture, decor, plants, art, rugs, curtains, accessories, extra objects, style change, different room, empty room without furniture`;
        }
    } else {
        // Furnished room logic (and room is actually furnished)
        if (furnishedOption === 'keep-existing') {
            result.positivePrompt = `Given this image of a furnished room, rearrange the furniture to a different layout. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX} Style: ${style}.`;
            result.negativePrompt = baseNegativePrompt;
        } else if (furnishedOption === 'add-new') {
            if (selectedRoomItems.size === 0) {
                // No items selected for "add new" - don't generate
                result.shouldGenerate = false;
                result.positivePrompt = '';
                result.negativePrompt = '';
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');

                result.positivePrompt = `Given this image of a furnished room, add ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX} Style: ${style}.`;
                result.negativePrompt = baseNegativePrompt;
            }
        } else if (furnishedOption === 'start-fresh') {
            if (selectedRoomItems.size === 0) {
                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: (empty room). Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX} Style: ${style}.`;
                result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');

                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX} Style: ${style}.`;
                result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
            }
        }
    }

    return result;
}



// Helper: Generate a depth map using Replicate
async function getDepthMapWithReplicate(imageBase64) {
    const DEPTH_MODEL_VERSION = "lllyasviel/sd-controlnet-depth";
    if (!imageBase64 || !imageBase64.startsWith('data:image')) {
        console.error('Invalid image format for depth map:', imageBase64);
        throw new Error('Invalid image format for depth map.');
    }
    console.log('Sending to depth model:', imageBase64.slice(0, 100)); // Log first 100 chars
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            version: DEPTH_MODEL_VERSION,
            input: {
                image: imageBase64
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Depth map generation failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for depth map.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get);
    return result.imageUrl; // URL to depth map
}

// Helper: Check if we have a stable internet connection
async function checkConnectionHealth() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const response = await fetch('https://api.replicate.com/v1/models', {
            method: 'GET',
            signal: controller.signal
        });
        clearTimeout(timeout);
        return response.ok;
    } catch (error) {
        console.warn('Connection health check failed:', error.message);
        return false;
    }
}

// Helper: Fetch with retry for network errors and timeouts
async function fetchWithRetry(url, options = {}, maxRetries = 3, retryDelay = 2000) {
    let attempt = 0;
    while (attempt <= maxRetries) {
        try {
            // Check connection health before making request
            if (attempt > 0) {
                const isHealthy = await checkConnectionHealth();
                if (!isHealthy) {
                    console.warn('Connection health check failed, waiting longer before retry...');
                    await new Promise(resolve => setTimeout(resolve, retryDelay * 2));
                }
            }

            // Set a timeout for fetch (e.g., 30s)
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeout);
            return response;
        } catch (error) {
            attempt++;
            if (attempt > maxRetries) {
                throw new Error(`Request failed after ${maxRetries} retries: ${error.message}`);
            }
            // Only retry on network errors or aborts (timeout)
            if (error.name === 'AbortError' || error.message === 'Failed to fetch' || error.message === 'NetworkError when attempting to fetch resource.') {
                console.warn(`Fetch attempt ${attempt} failed (timeout/network). Retrying in ${retryDelay / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            } else {
                throw error;
            }
        }
    }
}

// Helper function for polling Replicate API with improved error handling and adaptive timing
async function pollReplicatePrediction(predictionUrl) {
    let prediction;
    let attempts = 0;
    const maxAttempts = 90; // Increased to 3 minutes (90 attempts * 2 seconds)
    let delay = 2000; // Start with 2 seconds, will adapt based on status
    let consecutiveErrors = 0;
    const maxConsecutiveErrors = 5;

    while (attempts < maxAttempts) {
        attempts++;
        try {
            const response = await fetchWithRetry(REPLICATE_POLL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ predictionUrl })
            }, 2, 1000); // Reduced retries and delay for polling

            if (!response.ok) {
                consecutiveErrors++;
                const errorData = await response.json().catch(() => ({}));
                console.error(`Polling error: Status ${response.status}`, errorData);

                // Don't retry on 4xx errors immediately, could be auth issue
                if (response.status >= 400 && response.status < 500) {
                    throw new Error(`Polling failed with status ${response.status}: ${errorData.detail || 'Client error'}`);
                }

                // If too many consecutive errors, increase delay
                if (consecutiveErrors >= maxConsecutiveErrors) {
                    delay = Math.min(delay * 1.5, 10000); // Cap at 10 seconds
                    console.log(`Too many consecutive errors, increasing delay to ${delay}ms`);
                }

                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }

            // Reset consecutive errors on successful response
            consecutiveErrors = 0;
            prediction = await response.json();

            console.log(`Polling attempt ${attempts}: Status - ${prediction.status}`);

            if (prediction.status === 'succeeded') {
                if (!prediction.output || prediction.output.length === 0) {
                    throw new Error('Replicate prediction succeeded but returned no output.');
                }
                return { imageUrls: prediction.output };
            } else if (prediction.status === 'failed') {
                console.error('Replicate prediction failed:', prediction.error);
                throw new Error(`Replicate prediction failed: ${prediction.error}`);
            } else if (prediction.status === 'canceled') {
                console.warn('Replicate prediction canceled:', prediction);
                throw new Error('Replicate prediction was canceled.');
            }

            // Adaptive delay based on status
            if (prediction.status === 'starting') {
                delay = 3000; // Longer delay for starting phase
            } else if (prediction.status === 'processing') {
                delay = 2000; // Standard delay for processing
            }

            await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
            consecutiveErrors++;
            console.error(`Polling attempt ${attempts} failed: ${error.message}`);

            if (attempts >= maxAttempts) {
                throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts: ${error.message}`);
            }

            // Exponential backoff for consecutive errors
            if (consecutiveErrors >= maxConsecutiveErrors) {
                delay = Math.min(delay * 1.5, 10000);
                console.log(`Consecutive errors, increasing delay to ${delay}ms`);
            }

            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts.`);
}

// Helper: Generate empty room using text-to-image (for start fresh scenarios)
async function generateEmptyRoomWithTextToImage(prompt, negativePrompt) {
    const modelOptions = [
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "txt2img"
        },
        {
            version: "stability-ai/stable-diffusion-xl-base-1.0",
            name: "SDXL Base",
            type: "txt2img"
        }
    ];

    let lastError = null;

    for (let i = 0; i < modelOptions.length; i++) {
        const model = modelOptions[i];
        console.log(`Attempting empty room generation with model: ${model.name}`);

        try {
            const inputData = {
                prompt: prompt,
                negative_prompt: negativePrompt,
                width: 1024,
                height: 1024,
                guidance_scale: 15.0,
                num_inference_steps: 40,
                scheduler: "K_EULER",
                seed: Math.floor(Math.random() * 1000000)
            };

            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }

            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }

            console.log(`Polling for results from ${model.name}...`);
            const result = await pollReplicatePrediction(prediction.urls.get);
            console.log(`Successfully generated empty room with ${model.name}`);
            return result.imageUrls;

        } catch (error) {
            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;

            if (i === modelOptions.length - 1) {
                throw new Error(`All models failed. Last error: ${error.message}`);
            }
            continue;
        }
    }

    throw lastError || new Error('All model attempts failed');
}

// Helper: Generate image with SDXL+ControlNet using Replicate with fallback models
async function generateImageWithControlNet(imageBase64, prompt, negativePrompt) {
    // Check if this is a "start fresh" scenario (empty room generation)
    const isStartFresh = prompt.includes("completely empty space") || prompt.includes("Remove all furniture") || prompt.includes("empty room") || prompt.includes("COMPLETELY EMPTY ROOM") || prompt.includes("REMOVE ALL EXISTING FURNITURE") || prompt.includes("EMPTY ROOM ONLY");
    // Empty room + add furniture only: add specified items while preserving room structure
    const isEmptyRoomAddFurniture = (/keep the room exactly|add .+ to this room|a room with .+ visible|empty room/i.test(prompt)) && (/add .+(to this room|these items|the following)/i.test(prompt));

    // Multiple model options with fallbacks
    const modelOptions = [
        {
            version: "adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38",
            name: "Interior Design",
            type: "interior-design"
        },
        {
            version: "adirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",
            name: "SDXL Depth Midas",
            type: "controlnet"
        },
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "img2img"
        }
    ];

    let lastError = null;

    for (let i = 0; i < modelOptions.length; i++) {
        const model = modelOptions[i];
        console.log(`Attempting generation with model: ${model.name}`);

        try {
            const inputData = {
                image: imageBase64,
                prompt: prompt,
            };

            if (negativePrompt && negativePrompt.trim()) {
                inputData.negative_prompt = negativePrompt;
            }

            if (model.type === 'interior-design') {
                if (isEmptyRoomAddFurniture) {
                    // Add furniture to empty room: higher strength so model actually adds the object(s)
                    inputData.guidance_scale = 16;
                    inputData.num_inference_steps = 55;
                    inputData.prompt_strength = 0.82;
                } else {
                    inputData.guidance_scale = 15;
                    inputData.num_inference_steps = 50;
                    inputData.prompt_strength = 0.5;
                }
                inputData.seed = Math.floor(Math.random() * 1000000);
            } else if (model.type === 'controlnet') {
                inputData.guidance_scale = 12.0;
                inputData.num_inference_steps = 30;
                if (isStartFresh) {
                    inputData.controlnet_conditioning_scale = 0.01;
                } else {
                    inputData.controlnet_conditioning_scale = 0.8;
                }
            } else if (model.type === 'img2img') {
                if (isStartFresh) {
                    inputData.denoising_strength = 0.95;
                    inputData.guidance_scale = 20.0;
                    inputData.num_inference_steps = 50;
                } else {
                    inputData.denoising_strength = 0.7;
                    inputData.guidance_scale = 12.0;
                    inputData.num_inference_steps = 30;
                }
                inputData.scheduler = "K_EULER";
                inputData.seed = Math.floor(Math.random() * 1000000);
            }

            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000); // Increased retries and timeout for initial request

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }

            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }

            // Poll for completion
            console.log(`Polling for results from ${model.name}...`);
            const result = await pollReplicatePrediction(prediction.urls.get);
            console.log(`Successfully generated with ${model.name}`);
            return result.imageUrls; // Return the array of image URLs

        } catch (error) {
            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;

            // If this is the last model, throw the error
            if (i === modelOptions.length - 1) {
                throw new Error(`All models failed. Last error: ${error.message}`);
            }

            // Continue to next model
            continue;
        }
    }

    // This should never be reached, but just in case
    throw lastError || new Error('All model attempts failed');
}

// Helper: Upscale image using Replicate (optional)
async function upscaleImageWithReplicate(imageUrl) {
    const UPSCALE_MODEL_VERSION = "nightmareai/real-esrgan";
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            version: UPSCALE_MODEL_VERSION,
            input: {
                image: imageUrl
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Upscale failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for upscaling.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get);
    return result.imageUrl; // URL to upscaled image
}

// New function using Replicate API
async function generateImageWithReplicate(imageBase64, prompt) {
    console.log(`Sending request to Replicate img2img via proxy`);
    console.log(`Prompt: ${prompt}`);
    // Ensure base64 string has the data URI prefix
    const imageInput = imageBase64.startsWith('data:image') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;

    try {
        // 1. Start the prediction by calling our proxy
        const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                version: REPLICATE_MODEL_VERSION,
                input: {
                    prompt: prompt,
                    image: imageInput,
                }
            })
        });

        if (!startResponse.ok) {
            const errorData = await startResponse.json().catch(() => ({ detail: 'Unknown error starting prediction.' }));
            console.error("Replicate API error response (start):", errorData);
            throw new Error(`Replicate API error (${startResponse.status}): ${errorData.detail || 'Failed to start prediction'}`);
        }

        const prediction = await startResponse.json();
        console.log('Replicate prediction started:', prediction);

        if (!prediction.urls || !prediction.urls.get) {
            throw new Error('Replicate API did not return a URL to poll.');
        }

        // 2. Poll for the result using our proxy
        const result = await pollReplicatePrediction(prediction.urls.get);
        console.log('Replicate prediction finished via proxy:', result);
        return result; // Should be { imageUrl: '...' }

    } catch (error) {
        console.error('Error during Replicate generation:', error);
        // Re-throw the error to be caught by the calling function (generateDesigns)
        throw error;
    }
}

// Generate a single design image
async function generateDesigns() {
    if (!requireEmailConfirmedForFeature('design generation')) return;
    if (!currentUploadedImage) {
        showAlertDialog('Please upload an image first');
        return;
    }

    // Check token availability BEFORE starting generation.
    // Tokens are only deducted after a SUCCESSFUL generation.
    if (!hasTokensAvailable()) return;


    // Check if we're regenerating (already on results screen)
    const isCurrentlyOnResults = resultsSection && !resultsSection.classList.contains('hidden');

    // Try to determine the room type if not already set
    if (!currentRoomType) {
        // First time generation - read from radio buttons
        const emptyRadio = document.getElementById('empty-room');
        const furnishedRadio = document.getElementById('furnished-room');

        if (emptyRadio && emptyRadio.checked) {
            currentRoomType = 'empty';
        } else if (furnishedRadio && furnishedRadio.checked) {
            currentRoomType = 'furnished';
        }
    }

    // Validate that we have a valid room type
    if (!currentRoomType || !designStyles[currentRoomType]) {
        console.error('Invalid room type:', currentRoomType, 'isCurrentlyOnResults:', isCurrentlyOnResults);
        showAlertDialog('Please select a room type first');
        return;
    }

    const basePrompt = aiPrompts[currentRoomType];
    const style = designStyles[currentRoomType][0]; // Use first style
    const description = designDescriptions[currentRoomType][0]; // Use first description
    const prompts = generatePromptsWithItems(basePrompt, style);

    // Check if we should generate an image
    if (!prompts.shouldGenerate) {
        // Show error for empty room scenarios or furnished room with "add new" but no items selected
        if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
            if (isMobile) {
                showMobileItemsSelectionError();
            } else {
                showItemsSelectionError();
            }
        }
        return;
    }

    // Hide mobile options screen if it's open (but not when we're already on results screen)
    // Only hide if we're transitioning from preview to results, not when regenerating
    // Pass false to prevent resetting the room type selection during generation
    if (isMobile && mobileOptionsScreen && mobileOptionsScreen.classList.contains('show') && !isCurrentlyOnResults) {
        hideMobileOptionsScreen(false);
    }

    // Only proceed to next screen if validation passes
    previewContainer.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    designCarousel.innerHTML = '';

    // Ensure back button is visible
    if (backToOptionsBtn) {
        backToOptionsBtn.classList.remove('hidden');
    }

    const fullPrompt = prompts.positivePrompt;
    const negativePrompt = prompts.negativePrompt;

    // Create initial design with loading state
    const initialDesign = {
        id: 'design-0',
        title: style,
        description: description,
        imageUrl: '',
        originalImageUrl: currentUploadedImage,
        prompt: fullPrompt,
        isFallback: false,
        loading: true,
        needsRetry: false,
        errorMessage: ''
    };

    generatedDesigns = [initialDesign];
    displayDesigns(generatedDesigns);

    // Generate the image
    try {
        console.log('Starting image generation with prompt:', fullPrompt);
        console.log('Negative prompt:', negativePrompt);

        let imageUrls = await generateImageWithControlNet(currentUploadedImage, fullPrompt, negativePrompt);
        let imageUrl;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        } else {
            imageUrl = '';
        }

        initialDesign.imageUrl = imageUrl;
        initialDesign.loading = false;
        initialDesign.isFallback = false;

        // Deduct one token now that generation succeeded
        await useTokenAfterSuccess();

    } catch (error) {
        console.error(`Error in image generation for design (${style}):`, error);
        // Token is NOT deducted on failure

        // Provide user-friendly error messages
        let userFriendlyMessage = 'Image generation failed. Please try again.';

        if (error.message.includes('timed out')) {
            userFriendlyMessage = 'Generation took too long and timed out. This can happen during peak usage. Please try again.';
        } else if (error.message.includes('All models failed')) {
            userFriendlyMessage = 'All available models are currently busy. Please try again in a few minutes.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            userFriendlyMessage = 'Network connection issue. Please check your internet connection and try again.';
        } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
            userFriendlyMessage = 'API key issue. Please check your Replicate API key.';
        }

        initialDesign.imageUrl = '';
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        initialDesign.needsRetry = true;
        initialDesign.errorMessage = userFriendlyMessage;
    }

    // Update the card in the DOM
    updateDesignCard(initialDesign, 0);
}

function showRetryButton(card, cardData, index) {
    const revealContainer = card.querySelector('.image-reveal-container');
    if (revealContainer) {
        revealContainer.classList.remove('reveal-loading');

        // Create retry button container
        const retryContainer = document.createElement('div');
        retryContainer.className = 'retry-container';
        retryContainer.innerHTML = `
            <div class="retry-content">
                <div class="retry-icon">
                    <i data-feather="alert-triangle"></i>
                </div>
                <div class="retry-message">
                    <h4>Generation Failed</h4>
                    <p>${cardData.errorMessage || 'Image generation timed out or failed'}</p>
                </div>
                <button class="retry-btn">
                    <i data-feather="refresh-cw"></i>
                    <span>Retry Generation</span>
                </button>
            </div>
        `;

        // Clear the container and add retry UI
        revealContainer.innerHTML = '';
        revealContainer.appendChild(retryContainer);

        // Add click handler for retry button
        const retryBtn = retryContainer.querySelector('.retry-btn');
        retryBtn.addEventListener('click', () => {
            retryImageGeneration();
        });
    }

    // Update disclaimer
    const disclaimer = card.querySelector('.design-disclaimer');
    if (disclaimer) {
        disclaimer.innerHTML = `<p><strong>Generation Failed:</strong> ${cardData.errorMessage || 'Timed out or API error'}</p>`;
        disclaimer.classList.add('error');
        disclaimer.style.display = 'block';
    }

    // Update description
    const desc = card.querySelector('.design-description');
    if (desc) desc.textContent = cardData.description;

    // Replace feather icons
    feather.replace();
}

async function retryImageGeneration() {
    console.log('Retrying image generation');

    // Check token availability before retrying — retries also cost a token on success
    if (!hasTokensAvailable()) return;

    // Get the current design data
    const design = generatedDesigns[0];
    if (!design) {
        console.error('No design found');
        return;
    }

    // Reset the design to loading state
    design.loading = true;
    design.needsRetry = false;
    design.errorMessage = '';
    design.imageUrl = '';

    // Find the card and show loading state
    const card = designCarousel.querySelector('[data-design-id="design-0"]');
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            revealContainer.classList.add('reveal-loading');

            // Add whiteboard back for this card
            const whiteboardContainer = document.createElement('div');
            whiteboardContainer.className = 'whiteboard-container';
            whiteboardContainer.innerHTML = `
                <canvas class="whiteboard-canvas"></canvas>
                <div class="whiteboard-controls">
                    <button class="whiteboard-clear" title="Clear drawing">
                        <i data-feather="trash-2"></i>
                    </button>
                    <div class="whiteboard-colors">
                        <div class="color-option active" data-color="#6366f1"></div>
                        <div class="color-option" data-color="#ef4444"></div>
                        <div class="color-option" data-color="#10b981"></div>
                        <div class="color-option" data-color="#f59e0b"></div>
                        <div class="color-option" data-color="#8b5cf6"></div>
                        <div class="color-option" data-color="#000000"></div>
                    </div>
                    <div class="whiteboard-hint">Retrying... Draw while waiting!</div>
                </div>
            `;

            // Replace retry container with whiteboard
            revealContainer.innerHTML = `
                <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                <img class="design-image generated-image" src="" alt="${design.title}" style="opacity: 0; z-index: 3;">
            `;

            // Add checkbox after the image container (outside design-image-container)
            const designCard = revealContainer.closest('.design-card');
            if (designCard && !designCard.querySelector('.reveal-checkbox-container')) {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'reveal-checkbox-container';
                checkboxContainer.innerHTML = `
                    <label class="reveal-checkbox-label">
                        <input type="checkbox" class="reveal-checkbox" aria-label="Show original image">
                        <span class="reveal-checkbox-text">Show Original Image</span>
                    </label>
                `;
                // Insert after the design-image-container
                const imageContainer = designCard.querySelector('.design-image-container');
                if (imageContainer && imageContainer.nextSibling) {
                    designCard.insertBefore(checkboxContainer, imageContainer.nextSibling);
                } else {
                    designCard.appendChild(checkboxContainer);
                }
            }
            revealContainer.insertBefore(whiteboardContainer, revealContainer.firstChild);

            // Initialize whiteboard
            const whiteboardCanvas = whiteboardContainer.querySelector('.whiteboard-canvas');
            if (whiteboardCanvas) {
                initializeWhiteboard(whiteboardCanvas, card);
            }

            feather.replace();
        }

        // Hide disclaimer
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.style.display = 'none';
        }
    }

    // Retry the generation
    try {
        // Generate new prompts for retry
        const basePrompt = aiPrompts[currentRoomType];
        const style = designStyles[currentRoomType][0];
        const prompts = generatePromptsWithItems(basePrompt, style);

        // Check if we should generate an image
        if (!prompts.shouldGenerate) {
            // Show error for empty room scenarios or furnished room with "add new" but no items selected
            if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
                showItemsSelectionError();
            }
            return;
        }

        let imageUrls = await generateImageWithControlNet(currentUploadedImage, prompts.positivePrompt, prompts.negativePrompt);
        let imageUrl;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        } else {
            imageUrl = '';
        }

        design.imageUrl = imageUrl;
        design.loading = false;
        design.needsRetry = false;
        design.isFallback = false;

        console.log('Retry successful');

        // Deduct one token on successful retry
        await useTokenAfterSuccess();

    } catch (error) {
        console.error('Retry failed:', error);
        // Token is NOT deducted on failed retry
        design.imageUrl = '';
        design.loading = false;
        design.needsRetry = true;
        design.isFallback = false;
        design.errorMessage = error.message;
    }

    // Update the card
    updateDesignCard(design, 0);
}

function updateDesignCard(cardData, index) {
    // Find the card by data-design-id
    const card = designCarousel.querySelector(`[data-design-id="design-${index}"]`);
    console.log(`Updating card ${index}, found card: ${!!card}`);
    if (!card) return;
    // Fade out whiteboard, fade in image
    const whiteboard = card.querySelector('.whiteboard-container');
    const img = card.querySelector('.generated-image'); // Select the generated image specifically
    if (whiteboard) {
        whiteboard.classList.add('fade-out');
        setTimeout(() => {
            whiteboard.remove();

            // Check if we need to show retry button instead of image
            if (cardData.needsRetry) {
                showRetryButton(card, cardData, index);
                return;
            }

            if (img) {
                img.onload = () => {
                    console.log(`Image ${index} loaded successfully`);
                    img.style.opacity = 1;
                    img.style.display = 'block';
                    img.style.zIndex = 3;

                    // Remove the reveal-loading class to show the image container
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }

                    // Ensure back button is visible when image is shown
                    if (backToOptionsBtn) {
                        backToOptionsBtn.classList.remove('hidden');
                    }

                    // Re-setup the reveal slider after image loads
                    setupRevealCheckbox(card, index);
                };
                img.onerror = () => {
                    console.error(`Image ${index} failed to load: ${cardData.imageUrl}`);
                    // Still remove the loading class even if image fails to load
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }
                };
                img.src = cardData.imageUrl;
                img.classList.add('fade-in');
                img.style.opacity = 1;
                img.style.zIndex = 3; // Ensure it's on top

                // Add reveal checkbox if it doesn't exist (outside design-image-container)
                if (card && !card.querySelector('.reveal-checkbox')) {
                    console.log(`Adding reveal checkbox to card ${index}`);
                    const checkboxContainer = document.createElement('div');
                    checkboxContainer.className = 'reveal-checkbox-container';
                    checkboxContainer.innerHTML = `
                            <label class="reveal-checkbox-label">
                                <input type="checkbox" class="reveal-checkbox" aria-label="Show original image">
                                <span class="reveal-checkbox-text">Show Original Image</span>
                            </label>
                        `;
                    // Insert after the design-image-container
                    const imageContainer = card.querySelector('.design-image-container');
                    if (imageContainer && imageContainer.nextSibling) {
                        card.insertBefore(checkboxContainer, imageContainer.nextSibling);
                    } else {
                        card.appendChild(checkboxContainer);
                    }

                    // Set up reveal checkbox functionality for this card
                    setupRevealCheckbox(card, index);
                }

                // Ensure the generated image is fully visible after loading
                setTimeout(() => {
                    img.style.opacity = 1;
                    img.style.display = 'block';
                    img.style.zIndex = 3;

                    // Remove the reveal-loading class to show the image container
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }

                    console.log(`Image ${index} should be visible now. Opacity: ${img.style.opacity}, Display: ${img.style.display}`);
                    // Re-setup the reveal slider to ensure it's working
                    setupRevealCheckbox(card, index);
                }, 100);
            }
            // Update disclaimer and description if fallback
            const disclaimer = card.querySelector('.design-disclaimer');
            if (cardData.isFallback && disclaimer) {
                disclaimer.innerHTML = `<p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>`;
                disclaimer.classList.add('error');
            }
            const desc = card.querySelector('.design-description');
            if (desc) desc.textContent = cardData.description;
            // Update compare button state
            const btn = card.querySelector('.compare-btn');
            if (btn) {
                if (cardData.isFallback) {
                    btn.disabled = true;
                    btn.style.opacity = '0.5';
                    btn.style.cursor = 'not-allowed';
                    btn.querySelector('span').textContent = "Compare N/A";
                } else {
                    btn.disabled = false;
                    btn.style.opacity = '';
                    btn.style.cursor = '';
                    btn.querySelector('span').textContent = "Compare with Original";
                }
            }
        }, 400); // match fade-out duration
    }
}

function createFallbackDesigns() {
    // Create fallback design when API calls fail
    const imagesArray = fallbackImages[currentRoomType];
    const stylesArray = designStyles[currentRoomType];
    const descriptionsArray = designDescriptions[currentRoomType];

    return [{
        id: 'design-0',
        title: stylesArray[0],
        description: `${descriptionsArray[0]} (Fallback image - API unavailable/failed)`,
        imageUrl: imagesArray[0],
        originalImageUrl: currentUploadedImage,
        prompt: aiPrompts[currentRoomType],
        isFallback: true
    }];
}

function displayDesigns(designs) {
    designCarousel.innerHTML = '';

    designs.forEach((design, index) => {
        const designCard = document.createElement('div');
        designCard.classList.add('design-card');
        designCard.setAttribute('data-design-id', design.id);

        let disclaimer = '';
        if (design.isFallback) {
            disclaimer = `
                <div class="design-disclaimer error">
                    <p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>
                </div>
            `;
        } else {
            disclaimer = `<div class="design-disclaimer" style="display:none"></div>`;
        }

        // Only show reveal slider if not loading
        const showRevealSlider = !design.loading;

        designCard.innerHTML = `
            <div class="design-image-container">
                <div class="whiteboard-container${design.loading ? '' : ' fade-out'}">
                    <canvas class="whiteboard-canvas"></canvas>
                    <div class="whiteboard-controls">
                        <button class="whiteboard-clear" title="Clear drawing">
                            <i data-feather="trash-2"></i>
                        </button>
                        <div class="whiteboard-colors">
                            <div class="color-option active" data-color="#6366f1"></div>
                            <div class="color-option" data-color="#ef4444"></div>
                            <div class="color-option" data-color="#10b981"></div>
                            <div class="color-option" data-color="#f59e0b"></div>
                            <div class="color-option" data-color="#8b5cf6"></div>
                            <div class="color-option" data-color="#000000"></div>
                        </div>
                        <div class="whiteboard-hint">Draw while waiting...</div>
                    </div>
                </div>
                <div class="image-reveal-container${design.loading ? ' reveal-loading' : ''}">
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image${design.loading ? '' : ' fade-in'}" src="${design.loading ? '' : design.imageUrl}" alt="${design.title}" style="opacity:${design.loading ? 0 : 1}; z-index: 3;">
                </div>
                ${disclaimer}
            </div>
            ${showRevealSlider ? `
                <div class="reveal-checkbox-container">
                    <label class="reveal-checkbox-label">
                        <input type="checkbox" class="reveal-checkbox" aria-label="Show original image">
                        <span class="reveal-checkbox-text">Show Original Image</span>
                    </label>
                </div>
            ` : ''}
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
            </div>
        `;

        designCarousel.appendChild(designCard);
    });

    feather.replace();

    // Initialize whiteboard for loading card
    const loadingCard = designCarousel.querySelector('.design-card[data-design-id]');
    if (loadingCard) {
        const whiteboardCanvas = loadingCard.querySelector('.whiteboard-canvas');
        if (whiteboardCanvas) {
            initializeWhiteboard(whiteboardCanvas, loadingCard);
        }
    }

    // Add reveal checkbox functionality to the card
    const card = designCarousel.querySelector('.design-card');
    if (card) {
        console.log('Setting up reveal checkbox for design card');
        setupRevealCheckbox(card, 0);
    }
}

// ===== WHITEBOARD MODULE =====
// This module can be easily extracted to a separate file (e.g., whiteboard.js)
// and imported as needed to keep the main file clean and modular.
function initializeWhiteboard(canvas, card) {
    const ctx = canvas.getContext('2d');
    const controls = card.querySelector('.whiteboard-controls');
    const clearBtn = card.querySelector('.whiteboard-clear');
    const colorOptions = card.querySelectorAll('.color-option');

    // Whiteboard state
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentColor = '#6366f1';
    let lineWidth = 3;

    // Set up canvas with proper sizing
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);

    // Configure drawing style
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = currentColor;

    // Clear canvas with white background
    function clearCanvas() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // Initialize with white background
    clearCanvas();

    // Get drawing coordinates
    function getDrawingCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    // Drawing functions
    function startDrawing(e) {
        isDrawing = true;
        const coords = getDrawingCoords(e);
        lastX = coords.x;
        lastY = coords.y;

        // Prevent scrolling on mobile
        e.preventDefault();
    }

    function draw(e) {
        if (!isDrawing) return;

        const coords = getDrawingCoords(e);

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;

        // Prevent scrolling on mobile
        e.preventDefault();
    }

    function stopDrawing() {
        isDrawing = false;
    }

    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    // Clear button
    clearBtn.addEventListener('click', clearCanvas);

    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            option.classList.add('active');
            // Update drawing color
            currentColor = option.dataset.color;
            ctx.strokeStyle = currentColor;
        });
    });

    // Add color styles
    colorOptions.forEach(option => {
        option.style.backgroundColor = option.dataset.color;
    });
}

function hideHintArrows(card) {
    const hintArrows = card.querySelector('.slider-hint-arrows');
    if (hintArrows) {
        hintArrows.classList.add('hidden');
        // Remove the arrows from DOM after animation
        setTimeout(() => {
            if (hintArrows.parentNode) {
                hintArrows.parentNode.removeChild(hintArrows);
            }
        }, 300);
    }
}

function setupRevealCheckbox(card, index) {
    const revealContainer = card.querySelector('.image-reveal-container');
    const revealCheckbox = card.querySelector('.reveal-checkbox');
    const generatedImage = card.querySelector('.generated-image');

    console.log(`Card ${index}: revealContainer=${!!revealContainer}, revealCheckbox=${!!revealCheckbox}, generatedImage=${!!generatedImage}`);

    if (!revealContainer || !revealCheckbox || !generatedImage) {
        console.log(`Missing elements for card ${index}`);
        return;
    }

    // Set up checkbox functionality
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        // When checked, show original (hide generated), when unchecked, show generated
        generatedImage.style.opacity = isChecked ? 0 : 1;
        console.log(`Checkbox ${index} changed: ${isChecked}, generated image opacity: ${generatedImage.style.opacity}`);
    };

    revealCheckbox.addEventListener('change', handleCheckboxChange);

    // Also ensure original image is properly positioned
    const originalImage = card.querySelector('.original-image');
    if (originalImage) {
        originalImage.style.position = 'absolute';
        originalImage.style.top = '0';
        originalImage.style.left = '0';
        originalImage.style.width = '100%';
        originalImage.style.height = '100%';
        originalImage.style.zIndex = 2;
        originalImage.style.opacity = 1;
        originalImage.style.display = 'block';
        console.log(`Original image positioned for card ${index}`);
    }

    // Initialize with full opacity (generated image fully visible)
    generatedImage.classList.remove('fade-in'); // Remove fade-in class to prevent CSS conflicts
    generatedImage.style.opacity = 1;
    generatedImage.style.display = 'block';
    generatedImage.style.zIndex = 3;
    generatedImage.style.position = 'absolute';
    generatedImage.style.top = '0';
    generatedImage.style.left = '0';
    generatedImage.style.width = '100%';
    generatedImage.style.height = '100%';

    // Initialize checkbox to unchecked (show generated image)
    revealCheckbox.checked = false;

    // Force a reflow to ensure styles are applied
    generatedImage.offsetHeight;

    console.log(`Initialized card ${index} with opacity: ${generatedImage.style.opacity}, display: ${generatedImage.style.display}`);
    console.log(`Generated image computed style:`, window.getComputedStyle(generatedImage).opacity);
    console.log(`Generated image src:`, generatedImage.src);
}

function goBackToPreview() {
    resultsSection.classList.add('hidden');
    previewContainer.classList.remove('hidden');

    // Don't reset room type selection - preserve user's choices
    // This allows them to go back and forth without losing their selections
}

function regenerateDesigns() {
    // Simply call the generate designs function again
    generateDesigns();
}

function saveCurrentDesign() {
    // Find the currently visible design card (first one in mobile view)
    const selectedDesign = document.querySelector('.design-card');
    if (selectedDesign) {
        const designImage = selectedDesign.querySelector('.design-image');
        if (designImage) {
            const link = document.createElement('a');
            link.download = 'decorai-design.jpg';

            // Create a temporary canvas to convert the image to downloadable format
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();

            img.crossOrigin = 'anonymous'; // Enable cross-origin image downloading

            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                try {
                    link.href = canvas.toDataURL('image/jpeg');
                    link.click();
                } catch (error) {
                    console.error('Error saving image:', error);

                    // Fallback: open image in new tab
                    window.open(designImage.src, '_blank');
                }
            };

            img.onerror = function () {
                console.error('Error loading image for download');
                // Fallback: open in new tab
                window.open(designImage.src, '_blank');
            };

            img.src = designImage.src;
        }
    }
}

// CSS styles have been moved to styles.css file

// Floor Plan Editor is in a separate file: floorPlanEditor.js