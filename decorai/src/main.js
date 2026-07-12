import feather from 'feather-icons';
import { createClient } from '@supabase/supabase-js';
import FloorPlanEditor from './floorPlanEditor.js';
import WoodworkingEditor from './woodworking/editor.js';
import './woodworking/styles.css';

// Same-origin API routes (Vite dev proxies /api to the backend; production serves both).
const PROXY_SERVER_URL = '';

// Supabase client and auth state (initialized in initializeApp)
let supabase = null;
let authInitError = null;
/** False until the first auth/config check in initializeApp() finishes. */
let authReady = false;
let appConfig = null;
let currentUser = null;
let currentSession = null;

// Token state
let userTokens = 0;
// Subscription state
let userHasSubscription = false;
// Subscriber monthly image-generation usage: { used, limit, remaining }
let subscriptionUsage = { used: 0, limit: 50, remaining: 50 };
// Fetched layout state: restored once when user opens the layout editor after sign-in/load
let savedLayoutState = null;
let savedLayoutId = null;
let savedLayoutName = null;
// Currently loaded layout in the editor (so Save updates this one)
let currentLayoutId = null;

// DOM Elements
const uploadContainer = document.getElementById('upload-container');
const wizardContainer = document.getElementById('wizard-container');
const roomPreview = document.getElementById('room-preview');
const roomUpload = document.getElementById('room-upload');
const cameraBtn = document.getElementById('camera-btn');
const changeImageBtn = document.getElementById('change-image-btn');
const generateBtn = document.getElementById('generate-btn');
const defaultModelToggle = document.getElementById('default-model-toggle');
const defaultModelToggleResults = document.getElementById('default-model-toggle-results');
const resultsSection = document.getElementById('results-section');
const loadingIndicator = document.getElementById('loading-indicator');
const designCarousel = document.getElementById('design-carousel');
const backToOptionsBtn = document.getElementById('back-to-options-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const saveDesignBtn = document.getElementById('save-design-btn');
const refinementInput = document.getElementById('refinement-input');
const itemsSelectionError = document.getElementById('items-selection-error');
const wizardFengShuiBtn = document.getElementById('wizard-feng-shui-btn');
const resultsFengShuiBtn = document.getElementById('results-feng-shui-btn');
const roomFengShuiModal = document.getElementById('room-feng-shui-modal');
const roomFengShuiBody = document.getElementById('room-feng-shui-body');
const roomFengShuiTitle = document.getElementById('room-feng-shui-title');
const roomFengShuiCloseBtn = document.getElementById('room-feng-shui-close');
const roomFengShuiFooter = document.getElementById('room-feng-shui-footer');
const fengShuiApplyBtn = document.getElementById('feng-shui-apply-btn');
const fengShuiContinueWizardBtn = document.getElementById('feng-shui-continue-wizard-btn');
const fengShuiApplyPremiumToggle = document.getElementById('feng-shui-apply-premium-toggle');
const wizardQuickEditBtn = document.getElementById('wizard-quick-edit-btn');
const quickEditModal = document.getElementById('quick-edit-modal');
const quickEditInput = document.getElementById('quick-edit-input');
const quickEditApplyBtn = document.getElementById('quick-edit-apply');
const quickEditClearBtn = document.getElementById('quick-edit-clear');
const quickEditCloseBtn = document.getElementById('quick-edit-close');
const quickEditPremiumToggle = document.getElementById('quick-edit-premium-toggle');

// Refinement suggestion chips: append (or set) the chip text into the textarea.
document.querySelectorAll('.refinement-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
        if (!refinementInput) return;
        const phrase = chip.getAttribute('data-chip') || chip.textContent.trim();
        const current = refinementInput.value.trim();
        refinementInput.value = current
            ? `${current.replace(/[.\s]+$/, '')}. ${phrase}.`
            : `${phrase}.`;
        refinementInput.focus();
        refinementInput.setSelectionRange(refinementInput.value.length, refinementInput.value.length);
    });
});

// Wizard navigation buttons
const step1NextBtn = document.getElementById('step1-next-btn');
const step2BackBtn = document.getElementById('step2-back-btn');
const step2NextBtn = document.getElementById('step2-next-btn');
const step3BackBtn = document.getElementById('step3-back-btn');
const step3NextBtn = document.getElementById('step3-next-btn');
const step4BackBtn = document.getElementById('step4-back-btn');

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
const subscriptionUsageDisplay = document.getElementById('subscription-usage-display');
const subscriptionUsageRemaining = document.getElementById('subscription-usage-remaining');
const subscriptionUsageLimit = document.getElementById('subscription-usage-limit');
const buyTokensBtn = document.getElementById('buy-tokens-btn');
const buyTokensModal = document.getElementById('buy-tokens-modal');
const closeBuyTokensModalBtn = document.getElementById('close-buy-tokens-modal-btn');
const modalTokensCount = document.getElementById('modal-tokens-count');
const tokenPacksContainer = document.getElementById('token-packs');

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
let lastGeneratedImageUrl = null; // Most recently successfully generated image
let currentRoomType = null;
let generatedDesigns = [];

// Design history: ordered list of every image the user has seen as a "design"
// in the current session — starting with the original upload, then each
// successful generation. Users click a thumbnail to revisit one and use it
// as the source for the next regenerate.
//   { id, imageUrl, label, isOriginal }
let designHistory = [];
let selectedHistoryId = null; // explicit user pick; null = use the latest entry
let selectedRoomItems = new Set(); // Track selected room items
let furnishedOption = null; // Track furnished room option - no default selection
let selectedDesignStyle = null; // Track selected interior design style (null = no style change requested)
let isRoomActuallyEmpty = true; // Track if the uploaded room is actually empty

// Cached feng shui analyses keyed by image source (data URI or URL).
const fengShuiAnalysisCache = new Map();
// Active analysis shown in the modal (for apply action).
let currentFengShuiContext = null;

// Confirm dialog state
let confirmResolve = null;
// Wizard step (1–4). Step 0 = upload screen (no image yet).
let currentWizardStep = 0;

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

// Custom inline SVG icons for items that don't have a good Feather equivalent.
// Each is a 24x24 stroke-based icon (matches Feather's visual weight).
const customItemSvgs = {
    sofa: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3"/><path d="M17 14v-3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3"/><path d="M3 14h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M7 14v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3"/><path d="M5 19v2"/><path d="M19 19v2"/></svg>`,
    chairs: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v10"/><path d="M17 4v10"/><path d="M5 14h14"/><path d="M7 18l-1 3"/><path d="M17 18l1 3"/><path d="M7 14v4h10v-4"/></svg>`,
    bed: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18V8"/><path d="M21 18v-5a3 3 0 0 0-3-3H9v6"/><path d="M3 14h18"/><path d="M3 18h18"/><rect x="5" y="10" width="3" height="3" rx="1"/></svg>`,
    rug: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M6 6v-2"/><path d="M18 6v-2"/><path d="M6 20v-2"/><path d="M18 20v-2"/></svg>`,
    plants: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-9"/><path d="M12 13c0-3 2-6 5-6-1 3-2 6-5 6z"/><path d="M12 13c0-3-2-6-5-6 1 3 2 6 5 6z"/><path d="M12 9c0-2 1-4 3-4-0 2-1 4-3 4z"/><path d="M7 22h10l-1-5H8z"/></svg>`,
    pillows: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 7c0-1 1-2 2-2h10c1 0 2 1 2 2v10c0 1-1 2-2 2H7c-1 0-2-1-2-2z"/><path d="M7 5l-1-1"/><path d="M17 5l1-1"/><path d="M7 19l-1 1"/><path d="M17 19l1 1"/></svg>`
};

// Room items that can be added to empty rooms
const roomItems = [
    { id: 'sofa', name: 'Sofa', icon: 'sofa', category: 'furniture' },
    { id: 'coffee-table', name: 'Coffee Table', icon: 'table', category: 'furniture' },
    { id: 'dining-table', name: 'Dining Table', icon: 'table', category: 'furniture' },
    { id: 'chairs', name: 'Chairs', icon: 'chairs', category: 'furniture' },
    { id: 'bed', name: 'Bed', icon: 'bed', category: 'furniture' },
    { id: 'desk', name: 'Desk', icon: 'monitor', category: 'furniture' },
    { id: 'bookshelf', name: 'Bookshelf', icon: 'book-open', category: 'furniture' },
    { id: 'tv', name: 'TV', icon: 'tv', category: 'electronics' },
    { id: 'lamp', name: 'Lamp', icon: 'zap', category: 'lighting' },
    { id: 'floor-lamp', name: 'Floor Lamp', icon: 'zap', category: 'lighting' },
    { id: 'rug', name: 'Rug', icon: 'rug', category: 'decor' },
    { id: 'curtains', name: 'Curtains', icon: 'maximize-2', category: 'decor' },
    { id: 'art', name: 'Art', icon: 'image', category: 'decor' },
    { id: 'mirror', name: 'Mirror', icon: 'eye', category: 'decor' },
    { id: 'plants', name: 'Plants', icon: 'plants', category: 'decor' },
    { id: 'pillows', name: 'Pillows', icon: 'pillows', category: 'decor' },
    { id: 'throw-blanket', name: 'Throw Blanket', icon: 'square', category: 'decor' },
    { id: 'vase', name: 'Vase', icon: 'droplet', category: 'decor' },
    { id: 'candles', name: 'Candles', icon: 'zap', category: 'decor' },
    { id: 'clock', name: 'Clock', icon: 'clock', category: 'decor' }
];

// Interior design style options (shown as a selectable grid)
const interiorDesignStyles = [
    {
        id: 'modern-minimalist',
        name: 'Minimalist',
        icon: 'minus-square',
        promptText: 'modern minimalist style with clean lines, neutral colors, uncluttered surfaces, and simple functional furniture'
    },
    {
        id: 'scandinavian',
        name: 'Scandinavian',
        icon: 'feather',
        promptText: 'Scandinavian hygge style with light wood, cozy textures, soft neutrals, and warm natural elements'
    },
    {
        id: 'industrial',
        name: 'Industrial',
        icon: 'tool',
        promptText: 'industrial style with exposed metal accents, raw concrete surfaces, dark tones, and urban loft aesthetics'
    },
    {
        id: 'bohemian',
        name: 'Bohemian',
        icon: 'sun',
        promptText: 'bohemian boho style with rich jewel tones, layered patterned textiles, eclectic global-inspired decor, and abundant plants'
    },
    {
        id: 'mid-century',
        name: 'Mid-Century',
        icon: 'watch',
        promptText: 'mid-century modern style with organic curved furniture, warm walnut wood, tapered legs, and retro 1950s–60s design elements'
    },
    {
        id: 'traditional',
        name: 'Traditional',
        icon: 'columns',
        promptText: 'traditional classic style with rich dark wood furniture, ornate details, warm jewel-tone fabrics, and timeless elegant decor'
    },
    {
        id: 'coastal',
        name: 'Coastal',
        icon: 'anchor',
        promptText: 'coastal beach house style with light blues, sandy neutrals, natural rattan and driftwood textures, and airy breezy atmosphere'
    },
    {
        id: 'farmhouse',
        name: 'Farmhouse',
        icon: 'home',
        promptText: 'modern farmhouse style with shiplap walls, distressed wood, vintage-inspired furniture, cozy textiles, and rustic charm'
    },
    {
        id: 'art-deco',
        name: 'Art Deco',
        icon: 'star',
        promptText: 'Art Deco style with bold geometric patterns, gold and brass accents, jewel tones, luxurious velvet fabrics, and glamorous drama'
    },
    {
        id: 'japandi',
        name: 'Japandi',
        icon: 'circle',
        promptText: 'Japandi style blending Japanese wabi-sabi minimalism with Scandinavian coziness using natural materials, muted earthy tones, and serene simplicity'
    }
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
const OPENAI_IMAGE_EDIT_URL = `${PROXY_SERVER_URL}/openai/image-edit`;
const FENG_SHUI_API_URL = `${PROXY_SERVER_URL}/api/feng-shui`;
const REPLICATE_MODEL_VERSION = 'stability-ai/stable-diffusion-3.5-large'; // Example version, check replicate for latest/best

function setHeaderActionsEnabled(enabled) {
    for (const id of ['layout-editor-btn', 'woodworking-editor-btn', 'login-btn', 'signup-btn']) {
        const el = document.getElementById(id);
        if (!el) continue;
        el.disabled = !enabled;
        if (enabled) el.removeAttribute('aria-busy');
        else el.setAttribute('aria-busy', 'true');
    }
}

function setupProtectedHeaderActions() {
    const layoutEditorBtn = document.getElementById('layout-editor-btn');
    if (layoutEditorBtn) {
        layoutEditorBtn.addEventListener('click', (e) => {
            if (!requireEmailConfirmedForFeature('the layout editor')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }
    const woodworkingBtn = document.getElementById('woodworking-editor-btn');
    if (woodworkingBtn) {
        woodworkingBtn.addEventListener('click', (e) => {
            if (!requireEmailConfirmedForFeature('the woodworking editor')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }
}

// Initialize app: fetch config, Supabase client, and auth state (same pattern as Brandwise)
async function initializeApp() {
    authInitError = null;
    authReady = false;
    setHeaderActionsEnabled(false);
    try {
        const response = await fetch(`${PROXY_SERVER_URL}/api/config`);
        if (!response.ok) {
            authInitError = 'Could not load app configuration. Make sure the server is running, then refresh.';
            throw new Error(`Config fetch failed (${response.status})`);
        }
        appConfig = await response.json();

        // Populate purchase UI from config
        renderTokenPacks(appConfig.tokenPacks);

        if (!appConfig.supabaseUrl || !appConfig.supabaseAnonKey) {
            authInitError = 'Sign-in is not configured on the server (missing Supabase keys).';
            console.error('[auth] /api/config did not return supabaseUrl and supabaseAnonKey');
            return;
        }

        supabase = createClient(appConfig.supabaseUrl, appConfig.supabaseAnonKey);
        if (supabase) {
            // Expose for isolated modules (e.g. woodworking editor) that need auth without coupling to main.js internals.
            window.__decoraitSupabase = supabase;
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
                    window.__decoraitHasSubscription = false;
                }
                updateAuthUI();
            });
            window.__decoraitGetLayoutStateToRestore = function () {
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
                const sessionId = urlParams.get('session_id');
                // Strip the params before any async work so a refresh can't re-trigger.
                window.history.replaceState({}, document.title, window.location.pathname);
                verifyCheckoutAndCredit(sessionId);
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
    } catch (err) {
        console.error('Error initializing app:', err);
        if (!authInitError) {
            authInitError = 'Could not start sign-in. Please refresh and try again.';
        }
    } finally {
        authReady = true;
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
    window.__decoraitHasSubscription = userHasSubscription;

    // Pull monthly usage so the badge can render up-to-date counts.
    if (userHasSubscription) {
        await fetchSubscriptionUsage();
    } else {
        updateSubscriptionUsageDisplay();
    }
}

/** Fetch the current month's image-generation usage for subscribers. */
async function fetchSubscriptionUsage() {
    if (!currentUser || !currentSession) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/subscription/usage`, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` }
        });
        if (res.ok) {
            const data = await res.json();
            subscriptionUsage = {
                used: data.used ?? 0,
                limit: data.limit ?? 50,
                remaining: data.remaining ?? 0,
            };
            updateSubscriptionUsageDisplay();
        }
    } catch (err) {
        console.error('fetchSubscriptionUsage error:', err);
    }
}

function updateTokensDisplay() {
    if (tokensCount) tokensCount.textContent = userTokens;
    if (modalTokensCount) modalTokensCount.textContent = userTokens;
    // Turn badge red when running low
    if (tokensDisplay) {
        tokensDisplay.classList.toggle('tokens-low', userTokens === 0);
    }
    syncDefaultModelToggles();
}

/** Render the subscriber monthly usage badge. Hidden for non-subscribers. */
function updateSubscriptionUsageDisplay() {
    if (!subscriptionUsageDisplay) return;
    if (!userHasSubscription) {
        subscriptionUsageDisplay.classList.add('hidden');
        return;
    }
    subscriptionUsageDisplay.classList.remove('hidden');
    const { used, limit, remaining } = subscriptionUsage;
    if (subscriptionUsageRemaining) subscriptionUsageRemaining.textContent = remaining;
    if (subscriptionUsageLimit) subscriptionUsageLimit.textContent = limit;
    // Purchased token packs act as overflow once the monthly quota is spent.
    let extraEl = document.getElementById('subscription-usage-extra');
    if (userTokens > 0) {
        if (!extraEl) {
            extraEl = document.createElement('span');
            extraEl.id = 'subscription-usage-extra';
            extraEl.className = 'subscription-usage-extra';
            subscriptionUsageDisplay.appendChild(extraEl);
        }
        extraEl.textContent = `+${userTokens}`;
    } else if (extraEl) {
        extraEl.remove();
    }
    // Only "empty" when the monthly quota AND any purchased overflow are gone.
    const fullyEmpty = remaining <= 0 && userTokens <= 0;
    subscriptionUsageDisplay.classList.toggle('subscription-usage-empty', fullyEmpty);
    subscriptionUsageDisplay.classList.toggle('subscription-usage-low', !fullyEmpty && remaining > 0 && remaining < 10);
    const extraNote = userTokens > 0 ? ` (+${userTokens} purchased)` : '';
    subscriptionUsageDisplay.title = `${used} of ${limit} image generations used this month${extraNote} — click to buy more`;
    syncDefaultModelToggles();
}

/**
 * Check whether the user has tokens available before starting generation.
 * Returns true if generation may proceed, false otherwise (shows buy modal).
 */
// Lightweight gate for free-model runs: just verify the user is signed in.
// Free generations don't touch the monthly limit so we don't check tokens.
function ensureLoggedIn() {
    if (!currentUser || !currentSession) {
        showAuthModal('login');
        return false;
    }
    return true;
}

function hasTokensAvailable() {
    if (!currentUser || !currentSession) {
        showAuthModal('login');
        return false;
    }
    if (userHasSubscription) {
        // Subscribers are capped at SUBSCRIPTION_MONTHLY_LIMIT (default 50)
        // generations per calendar month. Once that's spent, purchased token
        // packs act as overflow. Block early when both are gone so we don't
        // make the user wait for a server 429.
        if (subscriptionUsage.remaining > 0) return true;
        if (userTokens > 0) return true;
        showBuyTokensModal();
        return false;
    }
    if (userTokens <= 0) {
        showBuyTokensModal();
        return false;
    }
    return true;
}

/** Whether the user can still run a premium (OpenAI) image generation. */
function hasPremiumGenerationsAvailable() {
    if (!currentUser || !currentSession) return false;
    if (userHasSubscription && subscriptionUsage.remaining > 0) return true;
    return userTokens > 0;
}

function showSubscriptionLimitMessage() {
    const limit = subscriptionUsage.limit || 50;
    alert(
        `You've reached your monthly limit of ${limit} image generations.\n\n` +
        `Your quota will reset at the start of next month.`
    );
}

/**
 * Deduct one token after a SUCCESSFUL image generation.
 * Only called on success — failed generations do not consume a token.
 */
async function useTokenAfterSuccess() {
    // Quota is now reserved server-side at the start of each generation
    // request (with refund on failure), so this is a refresh-only call: the
    // server returns the latest counts and the UI updates the badges.
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
            if (data.subscription) {
                subscriptionUsage = {
                    used: data.monthlyUsage ?? 0,
                    limit: data.monthlyLimit ?? 50,
                    remaining: data.remaining ?? 0,
                };
                // When the monthly quota is spent, the generation may have been
                // billed to a purchased token pack — refresh that balance too.
                if (subscriptionUsage.remaining <= 0) await fetchUserTokens();
                updateSubscriptionUsageDisplay();
            } else {
                userTokens = data.credits;
                updateTokensDisplay();
            }
        } else {
            // Stale local state — refresh both from server.
            await fetchUserTokens();
            if (userHasSubscription) await fetchSubscriptionUsage();
        }
    } catch (err) {
        console.error('useTokenAfterSuccess error:', err);
        await fetchUserTokens();
        if (userHasSubscription) await fetchSubscriptionUsage();
    }
}

// Fallback packs if /api/config hasn't loaded yet.
const DEFAULT_TOKEN_PACKS = [
    { id: '10', tokens: 10, amount: 499 },
    { id: '20', tokens: 20, amount: 999 },
    { id: '50', tokens: 50, amount: 1999 },
];

/** Render the selectable token-pack cards into the buy-tokens modal. */
function renderTokenPacks(packs) {
    if (!tokenPacksContainer) return;
    const list = (packs && packs.length) ? packs : DEFAULT_TOKEN_PACKS;
    tokenPacksContainer.innerHTML = '';
    list.forEach((pack) => {
        const price = `$${(pack.amount / 100).toFixed(2)}`;
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'token-pack';
        card.dataset.pack = pack.id;
        card.innerHTML =
            `<span class="token-pack-amount">${pack.tokens}</span>` +
            `<span class="token-pack-label">tokens</span>` +
            `<span class="token-pack-price">${price}</span>`;
        card.addEventListener('click', () => handleCheckout(pack.id, card));
        tokenPacksContainer.appendChild(card);
    });
}

async function refreshBuyTokensModalCounts() {
    // Pull the latest counts so the breakdown reflects post-generation state,
    // not the snapshot from when the app loaded. Run both fetches in parallel
    // since they hit unrelated endpoints.
    const tasks = [fetchUserTokens()];
    if (userHasSubscription) tasks.push(fetchSubscriptionUsage());
    try { await Promise.all(tasks); }
    catch (err) { console.error('refreshBuyTokensModalCounts error:', err); }
    renderBuyTokensModalCounts();
}

function renderBuyTokensModalCounts() {
    const monthlyRemaining = userHasSubscription ? (subscriptionUsage?.remaining ?? 0) : 0;
    const purchasedRemaining = userTokens || 0;
    const totalRemaining = monthlyRemaining + purchasedRemaining;
    const countEl = document.getElementById('modal-tokens-count');
    if (countEl) countEl.textContent = totalRemaining;
    const tokensCurrentEl = buyTokensModal?.querySelector('.tokens-current');
    if (!tokensCurrentEl) return;
    if (userHasSubscription) {
        tokensCurrentEl.innerHTML =
            `You have <strong id="modal-tokens-count">${totalRemaining}</strong> generation${totalRemaining === 1 ? '' : 's'} remaining ` +
            `<span class="tokens-current-breakdown">(${monthlyRemaining} from this month's plan` +
            (purchasedRemaining > 0 ? ` + ${purchasedRemaining} purchased` : '') +
            `).</span>`;
    } else {
        tokensCurrentEl.innerHTML =
            `You have <strong id="modal-tokens-count">${purchasedRemaining}</strong> token${purchasedRemaining === 1 ? '' : 's'} remaining.`;
    }
}

function showBuyTokensModal() {
    if (!currentUser) { showAuthModal('login'); return; }
    updateTokensDisplay();
    // Subscribers have two pools that both count toward generation: the
    // monthly subscription allowance and any purchased token packs on top of
    // it. The modal should show the COMBINED remaining count plus a
    // breakdown — showing only purchased tokens (userTokens) misled
    // subscribers into thinking they had fewer generations available than
    // they actually did.
    renderBuyTokensModalCounts();
    // Kick off a background refresh so the numbers reflect post-generation
    // server state. The modal stays interactive while it's in flight.
    refreshBuyTokensModalCounts();
    if (!tokenPacksContainer || !tokenPacksContainer.children.length) {
        renderTokenPacks(appConfig?.tokenPacks);
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

async function handleCheckout(pack, cardEl) {
    if (!currentUser || !currentSession) { showAuthModal('login'); return; }
    if (!pack) return;
    const cards = tokenPacksContainer ? Array.from(tokenPacksContainer.children) : [];
    try {
        cards.forEach((c) => { c.disabled = true; });
        if (cardEl) cardEl.classList.add('token-pack--loading');
        const res = await fetch(`${PROXY_SERVER_URL}/api/checkout`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pack })
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
        showToastMessage(err.message || 'Error starting checkout. Please try again.', 'error');
        cards.forEach((c) => { c.disabled = false; });
        if (cardEl) cardEl.classList.remove('token-pack--loading');
    }
}

/**
 * Deterministically confirm a completed purchase and credit tokens via the
 * server, independent of Stripe webhook timing. Idempotent on the server, so
 * this is safe even if the webhook also fires. Retries while the payment is
 * still settling or the server is cold-starting.
 */
async function verifyCheckoutAndCredit(sessionId) {
    if (!currentUser || !currentSession) return;
    if (!sessionId) {
        // No session id (older checkout link). Fall back to a balance refresh.
        await fetchUserTokens();
        if (userHasSubscription) { await fetchSubscriptionUsage(); }
        showToastMessage('Payment received! Tokens may take a moment to appear.', 'info');
        return;
    }

    showToastMessage('Confirming your purchase…', 'info');

    const maxAttempts = 6;
    let attempt = 0;
    const attemptVerify = async () => {
        attempt++;
        try {
            const res = await fetch(`${PROXY_SERVER_URL}/api/verify-checkout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${currentSession.access_token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ session_id: sessionId })
            });

            if (res.ok) {
                const data = await res.json();
                userTokens = data.credits;
                updateTokensDisplay();
                if (userHasSubscription) updateSubscriptionUsageDisplay();
                showToastMessage(`Payment successful! ${data.tokensAdded} token(s) added.`, 'success');
                return;
            }

            // 409 = payment still settling; retry with backoff.
            if (res.status === 409 && attempt < maxAttempts) {
                setTimeout(attemptVerify, 2000);
                return;
            }

            const body = await res.json().catch(() => ({}));
            throw new Error(body.error || `verify failed (${res.status})`);
        } catch (err) {
            if (attempt < maxAttempts) {
                setTimeout(attemptVerify, 2000);
                return;
            }
            console.error('verifyCheckoutAndCredit error:', err);
            // Last resort: the webhook backup may still credit shortly. Refresh
            // what we can and tell the user how to recover.
            await fetchUserTokens();
            if (userHasSubscription) updateSubscriptionUsageDisplay();
            showToastMessage('Payment received. Your tokens will appear shortly — refresh if they don’t.', 'info');
        }
    };
    attemptVerify();
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
window.__decoraitShowSubscribeModal = showSubscribeModal;
window.__decoraitGetAccessToken = () => currentSession?.access_token || null;

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
            if (typeof window.__decoraitCurrentLayoutId !== 'undefined') window.__decoraitCurrentLayoutId = targetId;
        }
        showLayoutSaveToast('Layout saved.');
        if (typeof FloorPlanEditor.markSaved === 'function') FloorPlanEditor.markSaved();
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

window.__decoraitOnLayoutEditorShown = function (opts) {
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
    ctx.font = '14px sans-serif';
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
    listEl.innerHTML = '<p class="my-layouts-loading" role="status" aria-live="polite"><span class="my-layouts-spinner" aria-hidden="true"></span>Loading your layouts…</p>';
    fetchLayouts(bustCache).then(layouts => {
        listEl.innerHTML = '';
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
    }).catch(() => {
        listEl.innerHTML = '<p class="my-layouts-empty">Couldn\u2019t load your layouts. Try again in a moment.</p>';
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
        if (typeof window.__decoraitCurrentLayoutId !== 'undefined') window.__decoraitCurrentLayoutId = id;
        setLayoutNameDisplay(data.name || DEFAULT_LAYOUT_NAME);
        showLayoutSaveToast('Layout loaded.');
        const panel = document.getElementById('my-layouts-panel');
        panel?.classList.remove('show');
        panel?.classList.add('hidden');
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
        if (typeof window.__decoraitCurrentLayoutId !== 'undefined' && window.__decoraitCurrentLayoutId === id) window.__decoraitCurrentLayoutId = null;
        refreshLayoutsList();
        showLayoutSaveToast('Layout deleted.');
    } catch (e) {
        showLayoutSaveToast(e?.message || 'Failed to delete layout', true);
    }
}

// ===== SAVED GENERATED DESIGNS (subscription-only) =====

const DESIGN_SOURCE_LABELS = {
    'room-design': 'Room design',
    'quick-edit': 'Quick edit',
    'feng-shui': 'Feng shui',
    'room3d': '3D room render',
};

const DESIGN_EDIT_FLOW_LABELS = {
    'room-design': 'Design Wizard',
    'quick-edit': 'Quick Edit',
    'feng-shui': 'Feng Shui Analysis',
    'room3d': '3D Room Render',
};

const DESIGN_MODEL_LABELS = {
    openai: 'Premium (GPT Image)',
    'proplabs-staging': 'PropLabs Virtual Staging',
    img2img: 'SD 3.5 Large',
    'nano-banana': 'Nano Banana',
};

const DESIGN_ROOM_TYPE_LABELS = {
    empty: 'Empty room',
    furnished: 'Furnished room',
};

async function autoSaveGeneratedDesign(imageUrl, {
    prompt = null,
    model = null,
    sourceType = 'room-design',
    metadata = {},
    savedDesignId = null,
} = {}) {
    if (!userHasSubscription || !currentSession?.access_token || !imageUrl) return savedDesignId || null;
    if (savedDesignId) return savedDesignId;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/designs`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${currentSession.access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl, prompt, model, sourceType, metadata }),
        });
        if (!res.ok) {
            console.warn('autoSaveGeneratedDesign failed:', res.status);
            return null;
        }
        const data = await res.json();
        return data.id || null;
    } catch (err) {
        console.warn('autoSaveGeneratedDesign error:', err);
        return null;
    }
}

async function onGenerationSuccess(imageUrl, saveMeta = {}) {
    pushDesignHistory(imageUrl);
    await autoSaveGeneratedDesign(imageUrl, saveMeta);
}

async function fetchSavedDesigns(bustCache = false) {
    if (!currentSession?.access_token || !userHasSubscription) return [];
    try {
        const url = `${PROXY_SERVER_URL}/api/designs` + (bustCache ? `?_=${Date.now()}` : '');
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
        });
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data.designs) ? data.designs : [];
    } catch (e) {
        console.error('Failed to fetch designs:', e);
        return [];
    }
}

function formatDesignSourceLabel(sourceType) {
    return DESIGN_SOURCE_LABELS[sourceType] || 'Generated design';
}

function formatDesignTitle(design) {
    const style = design?.metadata?.style;
    if (typeof style === 'string' && style.trim()) return style.trim();
    return formatDesignSourceLabel(design?.sourceType);
}

function formatDesignDate(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString(undefined, { month: 'numeric', day: 'numeric', year: 'numeric' });
}

function getDesignStyleLabel(design) {
    const styleText = design?.metadata?.style?.trim();
    if (styleText) {
        const match = interiorDesignStyles.find(s => s.promptText === styleText);
        return match?.name || styleText;
    }
    const stylePrompt = design?.metadata?.stylePrompt?.trim();
    return stylePrompt || null;
}

function buildDesignPreviewRows(design) {
    const rows = [
        {
            label: 'Edit flow',
            value: DESIGN_EDIT_FLOW_LABELS[design.sourceType] || formatDesignSourceLabel(design.sourceType),
        },
        { label: 'Date', value: formatDesignDate(design.createdAt) },
    ];

    if (design.model) {
        rows.push({
            label: 'Model',
            value: DESIGN_MODEL_LABELS[design.model] || design.model,
        });
    }

    const roomType = design.metadata?.roomType;
    if (roomType) {
        rows.push({
            label: 'Room type',
            value: DESIGN_ROOM_TYPE_LABELS[roomType] || roomType,
        });
    }

    const styleLabel = getDesignStyleLabel(design);
    if (styleLabel) {
        rows.push({ label: 'Style', value: styleLabel });
    }

    return rows;
}

function renderDesignPreviewDetails(design) {
    const detailsEl = document.getElementById('my-designs-preview-details');
    const promptWrap = document.getElementById('my-designs-preview-prompt-wrap');
    const promptEl = document.getElementById('my-designs-preview-prompt');
    if (!detailsEl) return;

    detailsEl.innerHTML = '';
    buildDesignPreviewRows(design).forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'my-designs-detail-row';
        rowEl.setAttribute('role', 'listitem');

        const label = document.createElement('span');
        label.className = 'my-designs-detail-label';
        label.textContent = row.label;

        const value = document.createElement('span');
        value.className = 'my-designs-detail-value';
        value.textContent = row.value;

        rowEl.append(label, value);
        detailsEl.appendChild(rowEl);
    });

    const prompt = design.prompt?.trim();
    if (promptWrap && promptEl) {
        if (prompt) {
            promptEl.textContent = prompt;
            promptWrap.classList.remove('hidden');
        } else {
            promptEl.textContent = '';
            promptWrap.classList.add('hidden');
        }
    }
}

function refreshDesignsGallery(bustCache = false) {
    const gridEl = document.getElementById('my-designs-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '<p class="my-designs-loading" role="status" aria-live="polite"><span class="my-layouts-spinner" aria-hidden="true"></span>Loading your designs…</p>';
    fetchSavedDesigns(bustCache).then(designs => {
        gridEl.innerHTML = '';
        if (designs.length === 0) {
            gridEl.innerHTML = '<p class="my-designs-empty">No saved designs yet. Generate a room design and it will appear here automatically.</p>';
            return;
        }
        designs.forEach(design => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'my-designs-card';
            card.dataset.designId = design.id;
            card.setAttribute('aria-label', `View ${formatDesignTitle(design)} from ${formatLayoutDate(design.createdAt)}`);

            const img = document.createElement('img');
            img.className = 'my-designs-card-img';
            img.alt = '';
            img.loading = 'lazy';
            img.src = design.imageUrl || '';
            img.onerror = function () {
                this.style.visibility = 'hidden';
            };

            const meta = document.createElement('span');
            meta.className = 'my-designs-card-meta';
            meta.textContent = formatLayoutDate(design.createdAt);

            const label = document.createElement('span');
            label.className = 'my-designs-card-label';
            label.textContent = formatDesignTitle(design);

            card.append(img, label, meta);
            card.addEventListener('click', () => openSavedDesignPreview(design));
            gridEl.appendChild(card);
        });
    }).catch(() => {
        gridEl.innerHTML = '<p class="my-designs-empty">Couldn\u2019t load your designs. Try again in a moment.</p>';
    });
}

function openSavedDesignPreview(design) {
    const panel = document.getElementById('my-designs-preview');
    const img = document.getElementById('my-designs-preview-img');
    const openBtn = document.getElementById('my-designs-open-btn');
    const deleteBtn = document.getElementById('my-designs-delete-btn');
    if (!panel || !img) return;

    img.src = design.imageUrl || '';
    img.alt = formatDesignTitle(design);
    renderDesignPreviewDetails(design);
    panel.dataset.designId = design.id;
    panel.classList.remove('hidden');

    if (openBtn) {
        openBtn.onclick = () => loadSavedDesignIntoResults(design);
    }
    if (deleteBtn) {
        deleteBtn.onclick = () => deleteSavedDesignById(design.id);
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function closeSavedDesignPreview() {
    const panel = document.getElementById('my-designs-preview');
    if (panel) panel.classList.add('hidden');
}

async function loadSavedDesignIntoResults(design) {
    if (!design?.imageUrl) return;
    closeSavedDesignPreview();
    closeDesignsModal();

    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (wizardProgress) wizardProgress.classList.add('hidden');
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.add('hidden');
    if (resultsSection) resultsSection.classList.remove('hidden');
    if (backToOptionsBtn) backToOptionsBtn.classList.remove('hidden');

    lastGeneratedImageUrl = design.imageUrl;
    resetDesignHistory();
    if (currentUploadedImage) seedDesignHistoryWithOriginal();
    pushDesignHistory(design.imageUrl);

    const savedDesign = {
        id: 'design-saved',
        title: formatDesignTitle(design),
        description: design.prompt ? design.prompt.slice(0, 200) : 'Previously generated design',
        imageUrl: design.imageUrl,
        originalImageUrl: currentUploadedImage || design.imageUrl,
        prompt: design.prompt || '',
        loading: false,
        isFallback: false,
        modelUsed: design.model || null,
        sourceImage: currentUploadedImage || design.imageUrl,
    };
    generatedDesigns = [savedDesign];
    displayDesigns(generatedDesigns);
    updateResultsFengShuiButtonState();
}

async function deleteSavedDesignById(id) {
    if (!currentSession?.access_token || !id) return;
    const proceed = await showConfirmDialog(
        'Delete this saved design? This cannot be undone.',
        'Delete design',
        'Delete',
        'Cancel'
    );
    if (!proceed) return;
    try {
        const res = await fetch(`${PROXY_SERVER_URL}/api/designs/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${currentSession.access_token}` },
        });
        if (!res.ok) throw new Error('Failed to delete');
        closeSavedDesignPreview();
        refreshDesignsGallery(true);
    } catch (e) {
        showAlertDialog(e?.message || 'Failed to delete design');
    }
}

function openDesignsModal() {
    if (!userHasSubscription) {
        showSubscribeModal();
        return;
    }
    const panel = document.getElementById('my-designs-panel');
    if (!panel) return;
    panel.classList.remove('hidden');
    panel.classList.add('show');
    refreshDesignsGallery();
    if (typeof feather !== 'undefined') feather.replace();
}

function closeDesignsModal() {
    const panel = document.getElementById('my-designs-panel');
    if (panel) {
        panel.classList.remove('show');
        panel.classList.add('hidden');
    }
    closeSavedDesignPreview();
}

window.__decoraitSaveGeneratedDesign = autoSaveGeneratedDesign;

function updateAuthUI() {
    if (!authButtons || !userMenu) return;
    setHeaderActionsEnabled(authReady);
    if (!authReady) return;
    if (currentUser) {
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
        // Subscribers see the monthly-usage badge; everyone else sees tokens.
        if (tokensDisplay) tokensDisplay.classList.toggle('hidden', userHasSubscription);
        if (userEmailDisplay) userEmailDisplay.textContent = currentUser.email?.split('@')[0] || 'Account';
        updateTokensDisplay();
        updateSubscriptionUsageDisplay();
        const myDesignsBtn = document.getElementById('my-designs-btn');
        if (myDesignsBtn) myDesignsBtn.classList.toggle('hidden', !userHasSubscription);
        const subscribeDropdownBtn = document.getElementById('subscribe-dropdown-btn');
        if (subscribeDropdownBtn) subscribeDropdownBtn.classList.toggle('hidden', userHasSubscription);
    } else {
        authButtons.classList.remove('hidden');
        userMenu.classList.add('hidden');
        if (tokensDisplay) tokensDisplay.classList.add('hidden');
        if (subscriptionUsageDisplay) subscriptionUsageDisplay.classList.add('hidden');
        syncDefaultModelToggles();
    }
    if (typeof feather !== 'undefined') feather.replace();
}

function submitAuthForm(form) {
    if (!form || form.classList.contains('hidden')) return;
    const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (submitBtn) {
        submitBtn.click();
        return;
    }
    if (typeof form.requestSubmit === 'function') {
        form.requestSubmit();
        return;
    }
    form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
}

/** Enter advances through empty fields; submits once all fields are filled. */
function setupAuthFormEnterToSubmit(form) {
    if (!form) return;
    form.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' || e.isComposing) return;
        if (form.classList.contains('hidden')) return;

        const inputs = Array.from(form.querySelectorAll('input:not([type="hidden"])'));
        const index = inputs.indexOf(e.target);
        if (index === -1) return;

        const allFilled = inputs.every((input) => input.value.trim() !== '');
        if (allFilled) {
            e.preventDefault();
            submitAuthForm(form);
            return;
        }

        if (index < inputs.length - 1) {
            e.preventDefault();
            inputs[index + 1].focus();
        }
    });
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
    setLoginSubmitLoading(false);
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

function setLoginSubmitLoading(loading) {
    const btn = document.getElementById('login-submit-btn');
    if (!btn) return;
    if (loading) {
        if (!btn.dataset.defaultLabel) btn.dataset.defaultLabel = btn.textContent.trim();
        btn.disabled = true;
        btn.classList.add('auth-submit-btn--loading');
        btn.setAttribute('aria-busy', 'true');
        btn.innerHTML = '<span class="auth-submit-spinner" aria-hidden="true"></span><span>Signing in…</span>';
    } else {
        btn.disabled = false;
        btn.classList.remove('auth-submit-btn--loading');
        btn.removeAttribute('aria-busy');
        btn.textContent = btn.dataset.defaultLabel || 'Sign In';
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value?.trim();
    const password = document.getElementById('login-password')?.value ?? '';
    if (!email || !password) {
        if (loginError) {
            loginError.textContent = 'Please enter your email and password.';
            loginError.classList.remove('hidden');
        }
        return;
    }
    if (!supabase) {
        if (loginError) {
            loginError.textContent = authInitError
                || 'Sign-in is unavailable right now. Please refresh and try again.';
            loginError.classList.remove('hidden');
        }
        return;
    }
    if (loginError) loginError.classList.add('hidden');
    hideLoginResendBlock();
    setLoginSubmitLoading(true);
    try {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        hideAuthModal();
    } catch (err) {
        if (loginError) { loginError.textContent = err.message; loginError.classList.remove('hidden'); }
        if (isEmailNotConfirmedError(err)) showLoginResendBlock();
    } finally {
        setLoginSubmitLoading(false);
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
    if (!authReady) return false;
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
window.__decoraitRequireEmailConfirmed = requireEmailConfirmedForFeature;

document.addEventListener('DOMContentLoaded', async () => {
    setupProtectedHeaderActions();
    await initializeApp();

    // Populate design style grids on load
    populateDesignStyles();

    // Event Listeners (Add null checks for safety)
    if (roomUpload) roomUpload.addEventListener('change', handleImageUpload);
    if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
    if (changeImageBtn) changeImageBtn.addEventListener('click', openFileSelector);
    if (generateBtn) generateBtn.addEventListener('click', generateDesigns);
    if (backToOptionsBtn) backToOptionsBtn.addEventListener('click', goBackToPreview);
    if (regenerateBtn) regenerateBtn.addEventListener('click', regenerateDesigns);
    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveCurrentDesign);
    if (wizardFengShuiBtn) {
        wizardFengShuiBtn.addEventListener('click', () => {
            if (!currentUploadedImage) return;
            startRoomFengShuiAnalysis(currentUploadedImage, { label: 'Uploaded photo' });
        });
    }
    if (resultsFengShuiBtn) {
        resultsFengShuiBtn.addEventListener('click', () => {
            const target = getFengShuiAnalysisTarget();
            if (!target) return;
            startRoomFengShuiAnalysis(target.src, { label: target.label });
        });
    }
    if (wizardQuickEditBtn) {
        wizardQuickEditBtn.addEventListener('click', () => {
            if (!currentUploadedImage) return;
            openQuickEdit();
        });
    }
    if (quickEditCloseBtn) quickEditCloseBtn.addEventListener('click', closeQuickEdit);
    if (quickEditClearBtn) quickEditClearBtn.addEventListener('click', clearQuickEditInput);
    if (quickEditApplyBtn) quickEditApplyBtn.addEventListener('click', applyQuickEdit);
    if (quickEditPremiumToggle) {
        quickEditPremiumToggle.addEventListener('change', () => {
            if (quickEditPremiumToggle.checked && !hasPremiumGenerationsAvailable()) {
                quickEditPremiumToggle.checked = false;
                if (userHasSubscription) showSubscriptionLimitMessage();
                else showBuyTokensModal();
            }
        });
    }
    if (quickEditInput) {
        quickEditInput.addEventListener('input', updateQuickEditApplyState);
        // Cmd/Ctrl+Enter applies; plain Enter inserts a newline.
        quickEditInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                if (!quickEditApplyBtn?.disabled) applyQuickEdit();
            }
        });
    }
    if (quickEditModal) {
        quickEditModal.addEventListener('click', (e) => {
            if (e.target === quickEditModal) closeQuickEdit();
        });
    }
    if (roomFengShuiCloseBtn) roomFengShuiCloseBtn.addEventListener('click', hideRoomFengShuiModal);
    if (fengShuiApplyBtn) fengShuiApplyBtn.addEventListener('click', applyFengShuiFromAnalysis);
    if (fengShuiContinueWizardBtn) {
        fengShuiContinueWizardBtn.addEventListener('click', hideRoomFengShuiModal);
    }
    if (fengShuiApplyPremiumToggle) {
        fengShuiApplyPremiumToggle.addEventListener('change', () => {
            if (fengShuiApplyPremiumToggle.checked && !hasPremiumGenerationsAvailable()) {
                fengShuiApplyPremiumToggle.checked = false;
                if (userHasSubscription) showSubscriptionLimitMessage();
                else showBuyTokensModal();
                syncDefaultModelToggles();
            }
        });
    }
    if (roomFengShuiModal) {
        roomFengShuiModal.addEventListener('click', (e) => {
            if (e.target === roomFengShuiModal) hideRoomFengShuiModal();
        });
    }

    // Token / payment listeners
    if (buyTokensBtn) buyTokensBtn.addEventListener('click', showBuyTokensModal);
    if (closeBuyTokensModalBtn) closeBuyTokensModalBtn.addEventListener('click', hideBuyTokensModal);
    const tokensModalSubscribeBtn = document.getElementById('tokens-modal-subscribe-btn');
    if (tokensModalSubscribeBtn) tokensModalSubscribeBtn.addEventListener('click', () => { hideBuyTokensModal(); showSubscribeModal(); });
    const subscribeDropdownBtn = document.getElementById('subscribe-dropdown-btn');
    if (subscribeDropdownBtn) subscribeDropdownBtn.addEventListener('click', () => { userDropdown?.classList.add('hidden'); showSubscribeModal(); });
    // Subscribers can click their monthly-usage badge to buy overflow token packs.
    if (subscriptionUsageDisplay) subscriptionUsageDisplay.addEventListener('click', showBuyTokensModal);
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
    setupAuthFormEnterToSubmit(loginForm);
    if (loginResendBtn) loginResendBtn.addEventListener('click', handleLoginResendClick);
    if (signupForm) signupForm.addEventListener('submit', handleSignup);
    setupAuthFormEnterToSubmit(signupForm);
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
    const myLayoutsClose = document.getElementById('my-layouts-close');
    const openLayoutsModal = () => {
        myLayoutsPanel.classList.remove('hidden');
        myLayoutsPanel.classList.add('show');
        refreshLayoutsList();
        feather.replace();
    };
    const closeLayoutsModal = () => {
        myLayoutsPanel.classList.remove('show');
        myLayoutsPanel.classList.add('hidden');
    };
    if (myLayoutsToggle && myLayoutsPanel) {
        myLayoutsToggle.addEventListener('click', openLayoutsModal);
        myLayoutsClose?.addEventListener('click', closeLayoutsModal);
        myLayoutsPanel.addEventListener('click', (e) => {
            if (e.target === myLayoutsPanel) closeLayoutsModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && myLayoutsPanel.classList.contains('show')) closeLayoutsModal();
        });
    }
    const myDesignsBtn = document.getElementById('my-designs-btn');
    const myDesignsPanel = document.getElementById('my-designs-panel');
    const myDesignsClose = document.getElementById('my-designs-close');
    const myDesignsPreviewClose = document.getElementById('my-designs-preview-close');
    if (myDesignsBtn) myDesignsBtn.addEventListener('click', () => {
        if (userDropdown) userDropdown.classList.add('hidden');
        openDesignsModal();
    });
    if (myDesignsClose) myDesignsClose.addEventListener('click', closeDesignsModal);
    if (myDesignsPreviewClose) myDesignsPreviewClose.addEventListener('click', closeSavedDesignPreview);
    if (myDesignsPanel) {
        myDesignsPanel.addEventListener('click', (e) => {
            if (e.target === myDesignsPanel) closeDesignsModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && myDesignsPanel.classList.contains('show')) closeDesignsModal();
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

    // Room type selection — enable step 1 "Next" when a type is chosen
    const roomTypeRadios = document.querySelectorAll('input[name="room-type"]');
    roomTypeRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentRoomType = e.target.value;
            if (step1NextBtn) step1NextBtn.disabled = false;
        });
    });

    // Furnished option selection — enable step 2 "Next" when an option is chosen
    const furnishedOptionRadios = document.querySelectorAll('input[name="furnished-option"]');
    furnishedOptionRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            furnishedOption = e.target.value;
            if (step2NextBtn) step2NextBtn.disabled = false;
        });
    });

    // Wizard navigation buttons
    if (step1NextBtn) step1NextBtn.addEventListener('click', () => wizardNext(1));
    if (step2BackBtn) step2BackBtn.addEventListener('click', () => wizardNext(2, true));
    if (step2NextBtn) step2NextBtn.addEventListener('click', () => wizardNext(2));
    if (step3BackBtn) step3BackBtn.addEventListener('click', () => wizardNext(3, true));
    if (step3NextBtn) step3NextBtn.addEventListener('click', () => wizardNext(3));
    if (step4BackBtn) step4BackBtn.addEventListener('click', () => wizardNext(4, true));

    // Drag-and-drop file upload
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
                        clearFengShuiCache();
                        currentUploadedImage = event.target.result;
                        if (roomPreview) roomPreview.src = currentUploadedImage;
                        isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                        applyDetectedRoomType();
                        showWizard();
                    };
                    reader.readAsDataURL(file);
                } else {
                    showAlertDialog('Please upload a valid image file (JPEG, PNG, etc.)');
                }
            }
        });
    }

    // Initialize the app UI (feather icons)
    initializeAppUI();
});

// Functions
function initializeAppUI() {
    feather.replace();

    // Step clicks: navigate back to any completed or active step
    document.querySelectorAll('.wizard-progress .wizard-step').forEach(stepEl => {
        stepEl.addEventListener('click', () => {
            const target = parseInt(stepEl.dataset.step, 10);
            if (stepEl.classList.contains('completed') || stepEl.classList.contains('active')) {
                goToWizardStep(target);
            }
        });
    });
}

// ── Wizard navigation ────────────────────────────────────────────────────────

const wizardProgress = document.getElementById('wizard-progress');

/** Show the wizard container and go to step 1, hiding the upload drop zone. */
function showWizard() {
    if (uploadContainer) uploadContainer.classList.add('hidden');
    if (wizardContainer) wizardContainer.classList.remove('hidden');
    if (wizardProgress) wizardProgress.classList.remove('hidden');
    goToWizardStep(1);
}

/** Hide the wizard, show the upload drop zone, and fully reset state. */
function hideWizard() {
    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (wizardProgress) wizardProgress.classList.add('hidden');
    if (uploadContainer) uploadContainer.classList.remove('hidden');
    resetWizardState();
}

/**
 * Advance or retreat the wizard from a given pane.
 * @param {number} fromStep – the pane currently visible
 * @param {boolean} goBack  – true when the Back button was pressed
 */
function wizardNext(fromStep, goBack = false) {
    if (goBack) {
        // Back routes
        if (fromStep === 2) { goToWizardStep(1); return; }
        if (fromStep === 3) {
            goToWizardStep(currentRoomType === 'empty' ? 1 : 2);
            return;
        }
        if (fromStep === 4) {
            // Skip step 3 if keep-existing (no items needed) or empty+keep-existing N/A
            const skipItems = furnishedOption === 'keep-existing';
            goToWizardStep(skipItems ? 2 : 3);
            return;
        }
        return;
    }

    // Forward routes
    if (fromStep === 1) {
        // Empty rooms skip the "how to redesign" step
        if (currentRoomType === 'empty') {
            updateItemsSelectionUI('empty');
            populateRoomItems();
            goToWizardStep(3);
        } else {
            goToWizardStep(2);
        }
        return;
    }
    if (fromStep === 2) {
        if (furnishedOption === 'keep-existing') {
            // No items needed — jump straight to style
            selectedRoomItems.clear();
            goToWizardStep(4);
        } else {
            const ctx = furnishedOption === 'add-new' ? 'add-new' : 'start-fresh';
            updateItemsSelectionUI(ctx);
            populateRoomItems();
            goToWizardStep(3);
        }
        return;
    }
    if (fromStep === 3) {
        // For empty rooms, at least one item is required
        if (currentRoomType === 'empty' && selectedRoomItems.size === 0) {
            if (itemsSelectionError) itemsSelectionError.classList.remove('hidden');
            return;
        }
        if (itemsSelectionError) itemsSelectionError.classList.add('hidden');
        goToWizardStep(4);
        return;
    }
}

/** Activate a specific wizard pane and update the progress indicator. */
function goToWizardStep(step) {
    currentWizardStep = step;

    // Show/hide panes
    for (let i = 1; i <= 4; i++) {
        const pane = document.getElementById(`wizard-pane-${i}`);
        if (pane) pane.classList.toggle('hidden', i !== step);
    }

    // Update progress steps and connecting lines
    const steps = document.querySelectorAll('.wizard-progress .wizard-step');
    const lines = document.querySelectorAll('.wizard-progress .wizard-step-line');
    steps.forEach(stepEl => {
        const s = parseInt(stepEl.dataset.step, 10);
        stepEl.classList.toggle('active', s === step);
        stepEl.classList.toggle('completed', s < step);
    });
    lines.forEach((line, idx) => {
        // Line idx connects step (idx+1) to step (idx+2)
        line.classList.toggle('completed', idx + 2 <= step);
    });

    // Feng shui is tied to the uploaded photo — show on the photo step only.
    const wizardUploadActions = wizardFengShuiBtn?.closest('.wizard-upload-actions');
    if (wizardUploadActions) {
        wizardUploadActions.classList.toggle('hidden', step !== 1);
    }

    scrollPageToTop();
}

function scrollPageToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildRefinementPrompt(basePrompt, refinementText) {
    const base = (basePrompt || '').trim();
    const refinement = (refinementText || '').trim();
    if (!refinement) return base;
    if (!base) return refinement;
    return `${base} Apply these refinements: ${refinement}`;
}

/** Scroll the viewport to a design card's loading placeholder. */
function scrollToDesignLoader(cardOrIndex) {
    requestAnimationFrame(() => {
        let card = cardOrIndex;
        if (typeof cardOrIndex === 'number') {
            card = designCarousel.querySelector(`[data-design-id="design-${cardOrIndex}"]`);
        } else if (typeof cardOrIndex === 'string') {
            card = designCarousel.querySelector(`[data-design-id="${cardOrIndex}"]`);
        }
        if (!card) return;
        const target = card.querySelector('.image-loader') || card.querySelector('.design-image-container');
        target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

function showMobileOptionsScreen() { /* no-op — replaced by wizard */ }
function hideMobileOptionsScreen() { /* no-op — replaced by wizard */ }

/** Reset all wizard selections (room type, furnished option, items). */
function resetWizardState() {
    currentRoomType = null;
    furnishedOption = null;
    selectedRoomItems.clear();
    currentWizardStep = 0;

    // Uncheck all room-type radios
    document.querySelectorAll('input[name="room-type"]').forEach(r => { r.checked = false; });
    // Uncheck all furnished-option radios
    document.querySelectorAll('input[name="furnished-option"]').forEach(r => { r.checked = false; });
    // Reset step 1 Next button
    if (step1NextBtn) step1NextBtn.disabled = true;
    if (step2NextBtn) step2NextBtn.disabled = true;
    // Hide items error
    hideItemsSelectionError();
}

function resetRoomTypeSelection() {
    // Alias kept for callers in the results / goBackToPreview flow
    resetWizardState();
}

function goBackToUpload() {
    hideWizard();
    resetImageUpload();
}

function toggleKeyVisibility() { /* no-op */ }
function toggleReplicateKeyVisibility() { /* no-op */ }
function saveApiKeys() { /* no-op */ }

async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
        const reader = new FileReader();
        reader.onload = async function (event) {
            clearFengShuiCache();
            currentUploadedImage = event.target.result;
            if (roomPreview) roomPreview.src = currentUploadedImage;
            isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
            console.log(`Uploaded room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);
            applyDetectedRoomType();
            showWizard();
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

                    clearFengShuiCache();
                    currentUploadedImage = canvas.toDataURL('image/jpeg');
                    if (roomPreview) roomPreview.src = currentUploadedImage;

                    // Detect if the room is empty
                    isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                    console.log(`Captured room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);
                    applyDetectedRoomType();
                    showWizard();

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
    lastGeneratedImageUrl = null;
    isRoomActuallyEmpty = true;
    clearFengShuiCache();
    resetDesignHistory();
    if (roomPreview) roomPreview.src = '';
    if (roomUpload) roomUpload.value = '';
    // wizardContainer is hidden by hideWizard(); uploadContainer shown there too
}

// Detect if a room is empty by measuring center-weighted edge density.
// Furniture adds many strong gradients; bare walls and floors do not.
// Edge density across the whole frame (with a radial center weight so
// ceilings/corners count less) is the most robust single signal we can
// compute from pixel statistics alone.
async function detectEmptyRoom(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            const targetW = 200;
            const scale = targetW / img.width;
            const w = targetW;
            const h = Math.max(1, Math.round(img.height * scale));

            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;

            const gray = new Float32Array(w * h);
            for (let i = 0, p = 0; i < data.length; i += 4, p++) {
                gray[p] = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            }

            const cx = (w - 1) / 2;
            const cy = (h - 1) / 2;
            const maxDist = Math.hypot(cx, cy);
            const edgeThreshold = 45;

            let edgeScore = 0;
            let totalWeight = 0;

            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const i = y * w + x;
                    const gx =
                        -gray[i - w - 1] - 2 * gray[i - 1] - gray[i + w - 1] +
                        gray[i - w + 1] + 2 * gray[i + 1] + gray[i + w + 1];
                    const gy =
                        -gray[i - w - 1] - 2 * gray[i - w] - gray[i - w + 1] +
                        gray[i + w - 1] + 2 * gray[i + w] + gray[i + w + 1];
                    const mag = Math.abs(gx) + Math.abs(gy);

                    const dist = Math.hypot(x - cx, y - cy) / maxDist;
                    const weight = 1 - 0.6 * dist;

                    if (mag > edgeThreshold) edgeScore += weight;
                    totalWeight += weight;
                }
            }

            const edgeRatio = edgeScore / totalWeight;
            // Threshold of 0.39 was selected by measuring edge ratios across
            // a labeled set of empty/furnished room photos — it separates
            // the two distributions with ~92% accuracy.
            const isEmpty = edgeRatio < 0.39;

            console.log(`Room analysis: edge=${(edgeRatio * 100).toFixed(1)}%, empty=${isEmpty}`);
            resolve(isEmpty);
        };

        img.onerror = function () {
            console.log('Could not analyze image, assuming room is furnished');
            resolve(false);
        };

        img.src = imageSrc;
    });
}

// Pre-check the detected room type radio and enable "Next" in step 1
function applyDetectedRoomType() {
    const detectedType = isRoomActuallyEmpty ? 'empty' : 'furnished';
    const radio = document.getElementById(detectedType === 'empty' ? 'empty-room' : 'furnished-room');
    if (radio) radio.checked = true;
    currentRoomType = detectedType;
    // Enable step 1 "Next" since we auto-detected a type
    if (step1NextBtn) step1NextBtn.disabled = false;
}

// Stub — wizard controls section visibility, not this function
function handleRoomTypeChange() { /* handled by wizard nav */ }

// Populate the room items grid (wizard-pane-3)
function populateRoomItems() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;

    itemsGrid.innerHTML = '';

    roomItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-option';
        itemElement.setAttribute('data-item-id', item.id);

        itemElement.innerHTML = `
            <input type="checkbox" id="item-${item.id}" class="item-checkbox" ${selectedRoomItems.has(item.id) ? 'checked' : ''}>
            <label for="item-${item.id}" class="item-label">
                <div class="item-icon">
                    ${customItemSvgs[item.icon] || `<i data-feather="${item.icon}"></i>`}
                </div>
                <span class="item-name">${item.name}</span>
            </label>
        `;

        const checkbox = itemElement.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedRoomItems.add(item.id);
            } else {
                selectedRoomItems.delete(item.id);
            }
            // Hide validation error as soon as user picks something
            if (selectedRoomItems.size > 0) hideItemsSelectionError();
        });

        itemsGrid.appendChild(itemElement);
    });

    feather.replace();
}

// Populate the design style grid (wizard-pane-4)
function populateDesignStyles() {
    const grid = document.getElementById('style-options-grid');
    if (!grid) return;

    grid.innerHTML = '';

    interiorDesignStyles.forEach(style => {
        const inputId = `style-${style.id}`;
        const el = document.createElement('div');
        el.className = 'style-option';

        el.innerHTML = `
            <input type="radio" id="${inputId}" name="design-style" value="${style.id}" ${style.id === selectedDesignStyle ? 'checked' : ''}>
            <label for="${inputId}" class="style-label">
                <div class="style-thumbnail">
                    <i data-feather="${style.icon}"></i>
                </div>
                <span class="style-name">${style.name}</span>
            </label>
        `;

        el.querySelector('input[type="radio"]').addEventListener('change', (e) => {
            if (e.target.checked) selectedDesignStyle = style.id;
        });

        grid.appendChild(el);
    });

    feather.replace();
}

// Stub — section visibility managed by wizard navigation
function handleFurnishedOptionChange() { /* handled by wizard nav */ }

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

    // When the user hasn't picked a style, force the model to preserve the room's existing style/materials/colors.
    // When they have picked one, append it as an explicit "Style: ..." instruction.
    const hasStyle = !!(style && String(style).trim());
    const styleClause = hasStyle
        ? ` Style: ${style}.`
        : ' Preserve the existing style, materials, colors, and finishes of the room exactly as they appear in the original image. Do not restyle.';
    const styleNegatives = hasStyle
        ? ''
        : ', restyled, different style, changed style, different materials, different colors, different finishes, repainted, redecorated';

    // Simplified base negative prompt - focused on architectural preservation
    const baseNegativePrompt = "blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, architectural changes, structural modifications, zoomed in, cropped, close-up, tighter framing, recomposed, cut off, parts of room missing, narrower field of view, different camera distance" + styleNegatives;

    // If the image looks empty but the user picked "furnished", we usually treat it like an empty room
    // (pick items, etc.) — except for "keep existing items", which has its own prompt and no item grid.
    const shouldTreatAsEmpty =
        isRoomActuallyEmpty && currentRoomType === 'furnished' && furnishedOption !== 'keep-existing';

    // Special case: "start fresh" should always generate, even with no items
    if (currentRoomType === 'furnished' && furnishedOption === 'start-fresh') {
        if (selectedRoomItems.size === 0) {
            result.positivePrompt = `Given this image of a furnished room, remove all furniture, leaving an empty room. DO NOT change walls, floor, ceiling, windows, or doors.${styleClause}`;
            result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
        } else {
            // Get selected and unselected items
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            const unselectedItems = roomItems.filter(item => !selectedRoomItems.has(item.id));

            // Build positive prompt with selected items
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.positivePrompt = `DO NOT change walls, floor, ceiling, windows, or doors. Remove all existing furniture, then add ONLY: ${selectedItemNames}. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;

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

            // Edit-style instruction: lead with the action, then explicit preservation. Works better with gpt-image-1.
            result.positivePrompt = `Edit the image: add ${promptItemNames} to the room, placed naturally on the floor. Do not change anything else. Keep every wall, the floor, the ceiling, the windows, the doors, the lighting, the wall colors, the floor color, the materials, and the camera perspective exactly as they appear in the original image. The only difference between the input and output should be the newly added ${promptItemNames}.${styleClause}`;

            // Strong negative: no room/lighting changes, no other furniture or decor
            result.negativePrompt = `${baseNegativePrompt}, modified walls, modified floor, modified ceiling, modified windows, modified doors, changed lighting, different lighting, altered lighting, brighter, darker, shadow change, different shadows, changed perspective, changed colors, different materials, architectural change, structural change, ${allOtherItemNames}, other furniture, decor, plants, art, rugs, curtains, accessories, extra objects, style change, different room, empty room without furniture`;
        }
    } else {
        // Furnished room logic (and room is actually furnished)
        if (furnishedOption === 'keep-existing') {
            result.positivePrompt = `Given this image of a furnished room, rearrange the furniture to a different layout. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
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

                result.positivePrompt = `Given this image of a furnished room, add ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = baseNegativePrompt;
            }
        } else if (furnishedOption === 'start-fresh') {
            if (selectedRoomItems.size === 0) {
                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: (empty room). Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
                result.negativePrompt = `${baseNegativePrompt}, furniture, decor, items, objects`;
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');

                result.positivePrompt = `Given this image of a furnished room, remove all furniture before adding ONLY the following items: ${selectedItemNames}. Do not change anything about the structural parts of the room like the walls, floors, ceiling, windows, etc. ${ARCHITECTURAL_PRESERVATION_SUFFIX}${styleClause}`;
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

// Helper: Check if we have a stable internet connection.
// Uses the browser's online signal first, then a lightweight HEAD against our
// own proxy. Calling api.replicate.com directly from the browser fails CORS
// and requires auth, so we can't use it as a health probe.
async function checkConnectionHealth() {
    if (typeof navigator !== 'undefined' && navigator.onLine === false) {
        return false;
    }
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const response = await fetch(`${PROXY_SERVER_URL}/health`, {
            method: 'GET',
            signal: controller.signal,
            cache: 'no-store'
        });
        clearTimeout(timeout);
        return response.ok;
    } catch (error) {
        console.warn('Connection health check failed:', error.message);
        // Assume healthy rather than blocking retries — the actual request
        // will surface a real error if the network is truly down.
        return true;
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
async function pollReplicatePrediction(predictionUrl, saveContext = null) {
    let prediction;
    let attempts = 0;
    const maxAttempts = 90; // Increased to 3 minutes (90 attempts * 2 seconds)
    let delay = 2000; // Start with 2 seconds, will adapt based on status
    let consecutiveErrors = 0;
    const maxConsecutiveErrors = 5;
    let savedDesignId = null;

    while (attempts < maxAttempts) {
        attempts++;
        try {
            const pollBody = { predictionUrl };
            if (saveContext) pollBody.saveContext = saveContext;

            const response = await fetchWithRetry(REPLICATE_POLL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // The poll proxy now requires auth (it carries the Replicate
                    // token), so always send the bearer token when signed in.
                    ...(currentSession?.access_token
                        ? { Authorization: `Bearer ${currentSession.access_token}` }
                        : {}),
                },
                body: JSON.stringify(pollBody),
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
                if (prediction.savedDesignId) savedDesignId = prediction.savedDesignId;
                return { imageUrls: prediction.output, savedDesignId };
            } else if (prediction.status === 'failed') {
                // Terminal — the model rejected the input. Mark the error so
                // the outer retry loop bails out instead of polling forever.
                console.error('Replicate prediction failed:', prediction.error);
                const err = new Error(`Replicate prediction failed: ${prediction.error}`);
                err.terminal = true;
                throw err;
            } else if (prediction.status === 'canceled') {
                console.warn('Replicate prediction canceled:', prediction);
                const err = new Error('Replicate prediction was canceled.');
                err.terminal = true;
                throw err;
            }

            // Adaptive delay based on status
            if (prediction.status === 'starting') {
                delay = 3000; // Longer delay for starting phase
            } else if (prediction.status === 'processing') {
                delay = 2000; // Standard delay for processing
            }

            await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
            // Terminal errors (model rejected the input, prediction canceled)
            // must not be retried — surface immediately so the caller can
            // show the user a choice dialog.
            if (error.terminal) {
                throw error;
            }

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

// Pick a gpt-image-1 output size that matches the input image's aspect ratio.
// gpt-image-1 only supports 1024x1024, 1024x1536 (portrait), and 1536x1024 (landscape).
// Using 'auto' lets the model pick — which often results in a square crop that zooms
// into part of the source image. Matching aspect ratio keeps the full original framing.
function pickGptImageSize(imageBase64) {
    return new Promise((resolve) => {
        try {
            const img = new Image();
            img.onload = () => {
                const w = img.naturalWidth || 1;
                const h = img.naturalHeight || 1;
                const ratio = w / h;
                // Square supported sizes have ratios: 1.0, 1.5 (landscape), 0.667 (portrait).
                // Pick whichever is closest in log-space to the input ratio.
                const candidates = [
                    { size: '1024x1024', ratio: 1.0 },
                    { size: '1536x1024', ratio: 1536 / 1024 },
                    { size: '1024x1536', ratio: 1024 / 1536 }
                ];
                let best = candidates[0];
                let bestDist = Math.abs(Math.log(ratio / best.ratio));
                for (const c of candidates.slice(1)) {
                    const d = Math.abs(Math.log(ratio / c.ratio));
                    if (d < bestDist) { best = c; bestDist = d; }
                }
                resolve(best.size);
            };
            img.onerror = () => resolve('1024x1024');
            img.src = imageBase64.startsWith('data:image') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;
        } catch (_) {
            resolve('1024x1024');
        }
    });
}

// Map free-form prompt text to proplabs/virtual-staging's `room` enum.
// Order matters — check the most specific names first (e.g. "dining room"
// before "room") so "dining room" doesn't get swallowed by a generic match.
function mapPromptToProplabsRoom(prompt) {
    const text = (prompt || '').toLowerCase();
    if (/\bdining\b/.test(text)) return 'Dining Room';
    if (/\bbedroom\b|\bbed room\b/.test(text)) return 'Bedroom';
    if (/\bkitchen\b/.test(text)) return 'Kitchen';
    if (/\bbathroom\b|\bbath room\b/.test(text)) return 'Bathroom';
    if (/\boffice\b|\bstudy\b|\bworkspace\b/.test(text)) return 'Office';
    if (/\bbalcony\b/.test(text)) return 'Balcony';
    if (/\bgarden\b|\bbackyard\b|\bpatio\b/.test(text)) return 'Garden';
    if (/\bpool\b/.test(text)) return 'Swimming Pool';
    return 'Living Room';
}

// Map free-form prompt text to proplabs/virtual-staging's `furniture_style`
// enum. Anything unrecognised falls through to the model's default.
function mapPromptToProplabsStyle(prompt) {
    const text = (prompt || '').toLowerCase();
    // Order matters — longer/more-specific names first.
    if (/mid-?century/.test(text)) return 'Mid-Century Modern';
    if (/scandinavian oasis/.test(text)) return 'Scandinavian Oasis';
    if (/scandinavian/.test(text)) return 'Scandinavian';
    if (/transitional luxury/.test(text)) return 'Transitional Luxury';
    if (/transitional/.test(text)) return 'Transitional';
    if (/modern organic/.test(text)) return 'Modern Organic';
    if (/b&w modern|black and white modern/.test(text)) return 'B&W Modern';
    if (/nyc modern|new york modern/.test(text)) return 'NYC Modern';
    if (/farmhouse hacienda/.test(text)) return 'Farmhouse Hacienda';
    if (/farmhouse/.test(text)) return 'Farmhouse';
    if (/metro industrial/.test(text)) return 'Metro Industrial';
    if (/urban industrial|industrial/.test(text)) return 'Urban Industrial';
    if (/coastal|beach/.test(text)) return 'Coastal';
    if (/traditional/.test(text)) return 'Traditional';
    if (/rustic/.test(text)) return 'Rustic';
    if (/modern/.test(text)) return 'Modern';
    return 'Default (AI decides)';
}

const DEFAULT_MODEL_FAILED_USER_MESSAGE =
    "Our default image model couldn't process this image. Would you like to try our free backup model? " +
    'It uses a different AI engine and may handle this image. This won\'t count against your limits.';

// Helper: Generate image with a Replicate model.
// By default it runs ONLY the proplabs default model — no auto-fallback,
// because we want to surface the failure and let the user decide whether
// to try the free backup or the premium model. Callers can pass
// `options.modelType` to pick a different model from the available list
// (e.g. 'img2img' for the SD 3.5 free backup), and `options.forceFallback`
// to mark the run as free (server skips quota tracking).
async function generateImageWithControlNet(imageBase64, prompt, negativePrompt, options = {}) {
    // Check if this is a "start fresh" scenario (empty room generation)
    const isStartFresh = prompt.includes("completely empty space") || prompt.includes("Remove all furniture") || prompt.includes("empty room") || prompt.includes("COMPLETELY EMPTY ROOM") || prompt.includes("REMOVE ALL EXISTING FURNITURE") || prompt.includes("EMPTY ROOM ONLY");
    // Empty room + add furniture only: add specified items while preserving room structure
    const isEmptyRoomAddFurniture = (/keep the room exactly|add .+ to this room|a room with .+ visible|empty room/i.test(prompt)) && (/add .+(to this room|these items|the following)/i.test(prompt));

    // Catalog of models we can run. Default behavior runs only the first
    // entry (proplabs); the user's choice after a failure determines
    // whether we run the SD 3.5 backup or the OpenAI premium upgrade.
    const modelOptions = [
        {
            version: "proplabs/virtual-staging:635d607efc6e3a6016ef6d655327cd35f3d792e84b8f110688b04498c6e94cfb",
            name: "PropLabs Virtual Staging",
            type: "proplabs-staging"
        },
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "img2img"
        }
    ];

    let lastError = null;
    // True when this run is a free fallback (after the default failed and
    // the user chose to try a backup). Tells the server to skip quota
    // tracking and surfaces the "free run" banner.
    let usedFallback = !!options.forceFallback;

    // Pick which model to run. Default is JUST proplabs — we do NOT
    // auto-chain. Failures bubble up so the caller can ask the user
    // whether to try the free backup or the premium upgrade.
    const requestedType = options.modelType || 'proplabs-staging';
    const selected = modelOptions.filter(m => m.type === requestedType);
    if (selected.length === 0) {
        throw new Error(`Unknown modelType: ${requestedType}`);
    }

    for (let i = 0; i < selected.length; i++) {
        const model = selected[i];
        console.log(`Attempting generation with model: ${model.name}`);

        try {

            let inputData;
            if (model.type === 'proplabs-staging') {
                // proplabs/virtual-staging has no free-form prompt — it
                // takes a room enum and a furniture-style enum. Map the
                // prompt text to the closest enum value; fall back to the
                // model's own "Default (AI decides)" if nothing matches.
                // The `replicate_api_key` field is injected server-side
                // from env so it never touches the browser.
                inputData = {
                    image: imageBase64,
                    room: mapPromptToProplabsRoom(prompt),
                    furniture_style: mapPromptToProplabsStyle(prompt),
                };
            } else {
                inputData = {
                    image: imageBase64,
                    prompt: prompt,
                };
                if (negativePrompt && negativePrompt.trim()) {
                    inputData.negative_prompt = negativePrompt;
                }
            }

            if (model.type === 'img2img') {
                // stability-ai/stable-diffusion-3.5-large schema uses `cfg`
                // and `prompt_strength` — NOT the SDXL-style param names.
                // Anything else is rejected with 422 "additional property
                // not allowed".
                inputData.cfg = 5;
                inputData.prompt_strength = isStartFresh ? 0.95 : 0.75;
                inputData.output_format = 'png';
                inputData.seed = Math.floor(Math.random() * 1000000);
            }

            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Fallback signal travels in a header so the JSON body
                    // stays a pure Replicate payload (Replicate rejects
                    // unknown top-level properties).
                    ...(usedFallback ? { 'X-Fallback': '1' } : {}),
                    ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000); // Increased retries and timeout for initial request

            // Quota exceeded — stop the fallback chain and propagate.
            if (response.status === 429) {
                const data = await response.json().catch(() => ({}));
                const err = new Error(data.error || 'Monthly generation limit reached');
                err.code = 'QUOTA_EXCEEDED';
                err.quota = data;
                throw err;
            }

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
            const saveContext = {
                prompt,
                model: model.type,
                sourceType: options.sourceType || 'room-design',
                metadata: options.saveMetadata || {},
            };
            const result = await pollReplicatePrediction(prediction.urls.get, saveContext);
            console.log(`Successfully generated with ${model.name}`);
            // pollReplicatePrediction returns either a string or an array
            // depending on the model — normalize to an array so we can attach
            // the usedFallback flag.
            const raw = result.imageUrls;
            const imageUrls = Array.isArray(raw) ? raw.slice() : (raw ? [raw] : []);
            imageUrls.usedFallback = usedFallback;
            imageUrls.modelUsed = model.type;
            imageUrls.savedDesignId = result.savedDesignId || null;
            return imageUrls;

        } catch (error) {
            // Quota errors are terminal — don't try other models, surface
            // immediately so the UI can show a clear "monthly limit reached"
            // message and refresh the badge.
            if (error.code === 'QUOTA_EXCEEDED') {
                throw error;
            }

            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;

            // If this is the last model in the selected set, throw a
            // distinct error so the caller can recognise it and surface
            // the right choice dialog.
            if (i === selected.length - 1) {
                const err = new Error(`Model failed: ${error.message}`);
                err.code = 'MODEL_FAILED';
                err.modelType = requestedType;
                err.detail = error.message;
                throw err;
            }

            continue;
        }
    }

    // This should never be reached, but just in case
    throw lastError || new Error('All model attempts failed');
}

// Exposed so the floor plan editor can turn a rendered room blockout into a
// photoreal eye-level interior. Uses the premium gpt-image-2 edit path: it
// follows the blockout's room shape, camera and furniture placement while
// producing a fully photorealistic result. Counts against the monthly quota.
window.__decoraitGenerateRoomRender = async function (guideBase64, opts = {}) {
    const stylePrompt = (opts && opts.stylePrompt) ? opts.stylePrompt.trim() : '';
    const prompt = `This image is a plain 3D blockout of a room: a wooden floor, blank walls and ceiling, and colored boxes that mark where furniture goes. Turn it into a photorealistic interior photograph of the same room. Keep the room's shape and the position, footprint and orientation of every furniture block — replace each colored box with a realistic, well-designed piece of furniture of the matching type standing in that exact spot. Style: ${stylePrompt || 'tasteful contemporary interior'}. Add realistic materials, textures, soft natural daylight and subtle shadows. Ultra photorealistic, interior design magazine photography, high detail, no text or labels.`;
    const result = await callPremiumImageEdit(guideBase64, prompt, {
        sourceType: 'room3d',
        metadata: { stylePrompt: stylePrompt || null },
    });
    return result.imageUrl;
};

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
async function generateDesigns(options = {}) {
    const fengShuiApply = options.fengShuiResult && options.imageSource;
    const quickEditApply = !!(options.quickEdit && options.imageSource);
    const specialApply = fengShuiApply || quickEditApply;

    if (!requireEmailConfirmedForFeature('design generation')) return;
    if (!currentUploadedImage && !specialApply) {
        showAlertDialog('Please upload an image first');
        return;
    }

    const usePremium = fengShuiApply
        ? !!options.usePremium
        : quickEditApply
            ? !!options.usePremium
            : getEffectiveDefaultModelPref() === 'premium';

    // Only premium generations consume tokens. Free runs are unlimited for
    // signed-in users — we gate on auth so anonymous traffic can't abuse it.
    if (usePremium) {
        if (!hasTokensAvailable()) return;
    } else {
        if (!ensureLoggedIn()) return;
    }


    // Check if we're regenerating (already on results screen)
    const isCurrentlyOnResults = resultsSection && !resultsSection.classList.contains('hidden');

    let basePrompt;
    let style;
    let description;
    let prompts;
    let fullPrompt;
    let negativePrompt;
    // When set, the non-premium path uses Nano Banana (instruction-edit model)
    // with this prompt instead of the proplabs/ControlNet staging model. This is
    // for targeted edits ("make the walls blue") where proplabs — which has no
    // free-form prompt — would ignore the instruction and just re-stage furniture.
    let nanoEditPrompt = null;

    if (fengShuiApply) {
        ensureRoomTypeFromWizard();
        basePrompt = aiPrompts[currentRoomType] || aiPrompts.furnished;
        style = 'Feng shui layout';
        description = 'Applying feng shui recommendations to your room…';
        fullPrompt = buildFengShuiGenerationPrompt(options.fengShuiResult);
        negativePrompt = getFengShuiNegativePrompt();
        prompts = { shouldGenerate: true };
    } else if (quickEditApply) {
        // Prompt is fully specified by the user's swatch picks; no wizard
        // context or base prompt needed.
        basePrompt = '';
        style = options.quickEdit.label || 'Quick edit';
        description = options.quickEdit.description || 'Applying your quick edit…';
        fullPrompt = options.quickEdit.prompt;
        negativePrompt = '';
        prompts = { shouldGenerate: true };
        nanoEditPrompt = fullPrompt; // free path → Nano Banana
    } else {
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

        basePrompt = aiPrompts[currentRoomType];
        const styleObj = selectedDesignStyle ? interiorDesignStyles.find(s => s.id === selectedDesignStyle) : null;
        style = styleObj ? styleObj.promptText : '';
        description = designDescriptions[currentRoomType][0]; // Use first description
        prompts = generatePromptsWithItems(basePrompt, style);

        const refinementText = refinementInput?.value?.trim();
        const priorDesign = generatedDesigns?.[0];
        const isResultsRegenerate = isCurrentlyOnResults && priorDesign && !priorDesign.loading;
        const canBypassItemValidation = isResultsRegenerate
            && (refinementText || priorDesign.prompt || priorDesign.imageUrl);

        // Check if we should generate an image (skip wizard item validation when refining a result)
        if (!prompts.shouldGenerate && !canBypassItemValidation) {
            if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
                showItemsSelectionError();
            }
            return;
        }

        if (isResultsRegenerate) {
            const baseForRefinement = priorDesign.prompt || prompts.positivePrompt;
            fullPrompt = buildRefinementPrompt(baseForRefinement, refinementText);
            negativePrompt = priorDesign.negativePrompt || prompts.negativePrompt;
            // Refining an existing result with a typed instruction is an *edit*,
            // not a re-stage. Route the non-premium path through Nano Banana with
            // just the instruction (guardrailed) so it honors the user's words.
            // No text → leave nanoEditPrompt null so "regenerate for a fresh
            // variation" keeps the legacy proplabs staging behavior.
            if (refinementText) {
                nanoEditPrompt = buildQuickEditPrompt(refinementText)?.prompt || null;
            }
        } else {
            fullPrompt = refinementText
                ? buildRefinementPrompt(prompts.positivePrompt, refinementText)
                : prompts.positivePrompt;
            negativePrompt = prompts.negativePrompt;
        }
    }

    // Transition: hide wizard (and its progress bar), show results
    if (wizardContainer) wizardContainer.classList.add('hidden');
    if (wizardProgress) wizardProgress.classList.add('hidden');
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    designCarousel.innerHTML = '';

    // Ensure back button is visible
    if (backToOptionsBtn) {
        backToOptionsBtn.classList.remove('hidden');
    }

    // Create initial design with loading state
    const initialDesign = {
        id: 'design-0',
        title: style,
        description: description,
        imageUrl: '',
        originalImageUrl: currentUploadedImage,
        prompt: fullPrompt,
        negativePrompt: negativePrompt,
        isFallback: false,
        loading: true,
        needsRetry: false,
        errorMessage: ''
    };

    generatedDesigns = [initialDesign];
    displayDesigns(generatedDesigns);
    updateResultsFengShuiButtonState();

    scrollPageToTop();
    if (isCurrentlyOnResults) {
        scrollToDesignLoader(0);
    }

    // Seed history with the original upload on the first run, so the user can
    // always navigate back to it from the strip.
    seedDesignHistoryWithOriginal();

    // When regenerating from the results screen, chain off whichever history
    // entry the user has selected (defaults to the most recent generation).
    // On the first run, the strip is empty and we use the original upload.
    const sourceImage = specialApply
        ? options.imageSource
        : (isCurrentlyOnResults ? getBaseImageForNextGeneration() : currentUploadedImage);

    // Stash inputs on the design up front so the premium fallback handler
    // can reuse them even if the default chain throws before we'd normally
    // attach them on success.
    initialDesign.sourceImage = sourceImage;

    initialDesign.negativePrompt = negativePrompt;

    // Generate the image
    try {
        console.log('Starting image generation with prompt:', fullPrompt);
        console.log('Negative prompt:', negativePrompt);
        console.log('Source image:', fengShuiApply ? 'feng shui apply' : quickEditApply ? 'quick edit' : (isCurrentlyOnResults && lastGeneratedImageUrl ? 'last generated' : 'original upload'));
        console.log('Model preference:', usePremium ? 'premium' : 'free');

        let imageUrl = '';
        let usedFallback = false;
        let modelUsed = null;
        let savedDesignId = null;
        const designSourceType = fengShuiApply
            ? 'feng-shui'
            : (nanoEditPrompt ? 'quick-edit' : 'room-design');

        if (usePremium) {
            // Premium path — counts against quota. Endpoint reserves a slot.
            const premiumResult = await callPremiumImageEdit(sourceImage, fullPrompt, {
                sourceType: designSourceType,
                metadata: { style, roomType: currentRoomType },
            });
            imageUrl = premiumResult.imageUrl;
            savedDesignId = premiumResult.savedDesignId;
            modelUsed = 'openai';
        } else if (nanoEditPrompt) {
            // Free instruction-edit path — Nano Banana (Gemini 2.5 Flash Image)
            // preserves the rest of the room while applying the typed edit.
            // Used for Quick Edit and for refining a generated result with text.
            // Free to the user; never counts against quota.
            const nanoResult = await generateQuickEditWithNanoBanana(sourceImage, nanoEditPrompt);
            imageUrl = nanoResult.imageUrl;
            savedDesignId = nanoResult.savedDesignId;
            modelUsed = 'nano-banana';
        } else {
            const imageUrls = await generateImageWithControlNet(sourceImage, fullPrompt, negativePrompt, {
                sourceType: designSourceType,
                saveMetadata: { style, roomType: currentRoomType },
            });
            if (Array.isArray(imageUrls)) {
                imageUrl = imageUrls[0];
                usedFallback = !!imageUrls.usedFallback;
                modelUsed = imageUrls.modelUsed || null;
                savedDesignId = imageUrls.savedDesignId || savedDesignId;
            } else if (typeof imageUrls === 'string') {
                imageUrl = imageUrls;
            }
        }

        initialDesign.imageUrl = imageUrl;
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        initialDesign.modelUsed = modelUsed;
        initialDesign.sourceImage = sourceImage;
        initialDesign.negativePrompt = negativePrompt;

        if (fengShuiApply) {
            initialDesign.description = buildFengShuiAppliedDescription(options.fengShuiResult);
        }

        // Remember this image for subsequent regenerations
        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: fullPrompt,
                model: modelUsed,
                sourceType: designSourceType,
                metadata: { style, roomType: currentRoomType },
                savedDesignId,
            });
        }

        // Only premium runs consume a generation slot — refresh the badge.
        // Free models (proplabs / SD 3.5) never count against the limit.
        if (modelUsed === 'openai') {
            await useTokenAfterSuccess();
        }

    } catch (error) {
        console.error(`Error in image generation for design (${style}):`, error);
        // Token is NOT deducted on failure

        // Quota errors are terminal — no fallback offer makes sense.
        if (error.code === 'QUOTA_EXCEEDED') {
            const limit = error.quota?.limit ?? subscriptionUsage.limit ?? 50;
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage =
                `You've reached your monthly limit of ${limit} image generations. ` +
                `Your quota will reset at the start of next month.`;
            if (userHasSubscription) await fetchSubscriptionUsage();
            syncDefaultModelToggles();
            updateDesignCard(initialDesign, 0);
            return;
        }

        // Premium model failed when used as default — surface the failure and
        // offer the user a free fallback.
        if (error.code === 'PREMIUM_FAILED') {
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage = `The premium model couldn't process your image: ${error.detail || 'unknown error'}.`;
            updateDesignCard(initialDesign, 0);

            const tryFree = await showConfirmDialog(
                `Our premium image model couldn't process this image.\n\n` +
                `Details: ${error.detail || 'unknown error'}\n\n` +
                `Would you like to try our free default model instead? It won't count against your limits.`,
                'Premium model failed',
                'Try free model',
                'Cancel'
            );
            if (tryFree) {
                await runFallbackOnDesign(0, initialDesign, 'proplabs-staging');
            }
            return;
        }

        // Default (free) model failed — surface the failure and offer the
        // user a choice: free backup model OR premium upgrade OR cancel.
        if (error.code === 'MODEL_FAILED') {
            initialDesign.imageUrl = '';
            initialDesign.loading = false;
            initialDesign.isFallback = false;
            initialDesign.needsRetry = true;
            initialDesign.errorMessage = DEFAULT_MODEL_FAILED_USER_MESSAGE;
            updateDesignCard(initialDesign, 0);

            await offerFallbackChoice(0, initialDesign);
            return;
        }

        // Everything else — generic error path.
        let userFriendlyMessage = 'Image generation failed. Please try again.';
        if (error.message.includes('timed out')) {
            userFriendlyMessage = 'Generation took too long and timed out. This can happen during peak usage. Please try again.';
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
        updateDesignCard(initialDesign, 0);
        return;
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

    // Retry runs the free default chain — only an auth check is needed.
    if (!ensureLoggedIn()) return;

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
    updateResultsFengShuiButtonState();

    // Find the card and show loading state
    const card = designCarousel.querySelector('[data-design-id="design-0"]');
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            revealContainer.classList.add('reveal-loading');

            // Replace the previous content (retry button or stale images)
            // with fresh image elements for the new generation to populate.
            revealContainer.innerHTML = `
                <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                <img class="design-image generated-image" src="" alt="${design.title}" style="opacity: 0; z-index: 3;">
            `;

            ensureLoadingSpinner(card);
            scrollToDesignLoader(card);

            // Add reveal checkbox if it's missing.
            const designCard = revealContainer.closest('.design-card');
            const imageContainer = card.querySelector('.design-image-container');
            if (designCard && !designCard.querySelector('.reveal-checkbox-container')) {
                const checkboxContainer = document.createElement('div');
                checkboxContainer.className = 'reveal-checkbox-container';
                checkboxContainer.innerHTML = `
                    <label class="reveal-checkbox-label">
                        <input type="checkbox" class="reveal-checkbox" aria-label="Show original image">
                        <span class="reveal-checkbox-text">Show Original Image</span>
                    </label>
                `;
                if (imageContainer && imageContainer.nextSibling) {
                    designCard.insertBefore(checkboxContainer, imageContainer.nextSibling);
                } else {
                    designCard.appendChild(checkboxContainer);
                }
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
        const styleObj = selectedDesignStyle ? interiorDesignStyles.find(s => s.id === selectedDesignStyle) : null;
        const style = styleObj ? styleObj.promptText : '';
        const prompts = generatePromptsWithItems(basePrompt, style);

        const retryRefinementText = refinementInput?.value?.trim();
        const canBypassItemValidation = !!(retryRefinementText || design.prompt || design.imageUrl);

        // Check if we should generate an image
        if (!prompts.shouldGenerate && !canBypassItemValidation) {
            if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption === 'add-new')) {
                showItemsSelectionError();
            }
            design.loading = false;
            updateResultsFengShuiButtonState();
            return;
        }

        const retryPrompt = buildRefinementPrompt(
            design.prompt || prompts.positivePrompt,
            retryRefinementText
        );

        // Chain off the user-selected history entry (defaults to the latest
        // generation, falls back to the original upload).
        const retrySourceImage = getBaseImageForNextGeneration();

        let imageUrl;
        let usedFallback = false;
        let modelUsed = null;
        let savedDesignId = null;

        // A typed refinement is an instruction edit → use Nano Banana so the
        // text is honored (proplabs has no free-form prompt). No text → keep the
        // legacy proplabs staging for a fresh variation.
        const retryNanoPrompt = retryRefinementText
            ? (buildQuickEditPrompt(retryRefinementText)?.prompt || null)
            : null;

        if (retryNanoPrompt) {
            const nanoResult = await generateQuickEditWithNanoBanana(retrySourceImage, retryNanoPrompt);
            imageUrl = nanoResult.imageUrl;
            savedDesignId = nanoResult.savedDesignId;
            modelUsed = 'nano-banana';
        } else {
            let imageUrls = await generateImageWithControlNet(
                retrySourceImage,
                retryPrompt,
                design.negativePrompt || prompts.negativePrompt
            );
            if (Array.isArray(imageUrls)) {
                imageUrl = imageUrls[0];
                usedFallback = !!imageUrls.usedFallback;
                modelUsed = imageUrls.modelUsed || null;
                savedDesignId = imageUrls.savedDesignId || null;
            } else if (typeof imageUrls === 'string') {
                imageUrl = imageUrls;
            } else {
                imageUrl = '';
            }
        }

        design.imageUrl = imageUrl;
        design.loading = false;
        design.needsRetry = false;
        design.isFallback = false;
        design.modelUsed = modelUsed;
        design.sourceImage = retrySourceImage;
        design.prompt = retryPrompt;
        design.negativePrompt = prompts.negativePrompt;

        // Remember this image for subsequent regenerations
        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: retryPrompt,
                model: modelUsed,
                sourceType: retryNanoPrompt ? 'quick-edit' : 'room-design',
                metadata: { roomType: currentRoomType },
                savedDesignId,
            });
        }

        console.log('Retry successful');

        // Retry runs the free chain — never counts against the quota.

    } catch (error) {
        console.error('Retry failed:', error);
        // Token is NOT deducted on failed retry
        design.imageUrl = '';
        design.loading = false;
        design.needsRetry = true;
        design.isFallback = false;
        design.errorMessage = error.code === 'MODEL_FAILED'
            ? DEFAULT_MODEL_FAILED_USER_MESSAGE
            : error.message;
        // Make sure the source/prompt are persisted so the user can fall
        // back to the free backup or premium model from here.
        design.sourceImage = design.sourceImage || getBaseImageForNextGeneration();

        updateDesignCard(design, 0);

        if (error.code === 'MODEL_FAILED') {
            await offerFallbackChoice(0, design);
        }
        return;
    }

    // Update the card
    updateDesignCard(design, 0);
}

function updateDesignCard(cardData, index) {
    // Find the card by data-design-id
    const card = designCarousel.querySelector(`[data-design-id="design-${index}"]`);
    console.log(`Updating card ${index}, found card: ${!!card}`);
    if (!card) return;
    updateResultsFengShuiButtonState();
    // Hide the in-progress status banner now that generation is done.
    const statusBanner = card.querySelector('.model-status');
    if (statusBanner) statusBanner.classList.add('hidden');
    // Apply the new image + reveal/checkbox/state UI.
    const applyImageUpdate = () => {
        // Check if we need to show retry button instead of image
        if (cardData.needsRetry) {
            showRetryButton(card, cardData, index);
            return;
        }

        const img = card.querySelector('.generated-image');
        if (img) {
            img.onload = () => {
                console.log(`Image ${index} loaded successfully`);
                img.style.opacity = 1;
                img.style.display = 'block';
                img.style.zIndex = 3;

                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }

                if (backToOptionsBtn) {
                    backToOptionsBtn.classList.remove('hidden');
                }

                setupRevealCheckbox(card, index);
            };
            img.onerror = () => {
                console.error(`Image ${index} failed to load: ${cardData.imageUrl}`);
                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }
            };
            img.src = cardData.imageUrl;
            img.classList.add('fade-in');
            img.style.opacity = 1;
            img.style.zIndex = 3;

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
                const imageContainer = card.querySelector('.design-image-container');
                if (imageContainer && imageContainer.nextSibling) {
                    card.insertBefore(checkboxContainer, imageContainer.nextSibling);
                } else {
                    card.appendChild(checkboxContainer);
                }

                setupRevealCheckbox(card, index);
            }

            setTimeout(() => {
                img.style.opacity = 1;
                img.style.display = 'block';
                img.style.zIndex = 3;

                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer) {
                    revealContainer.classList.remove('reveal-loading');
                }

                console.log(`Image ${index} should be visible now. Opacity: ${img.style.opacity}, Display: ${img.style.display}`);
                setupRevealCheckbox(card, index);
            }, 100);
        }

        const disclaimer = card.querySelector('.design-disclaimer');
        if (cardData.isFallback && disclaimer) {
            disclaimer.innerHTML = `<p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>`;
            disclaimer.classList.add('error');
        }
        const desc = card.querySelector('.design-description');
        if (desc) desc.textContent = cardData.description;
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
    };

    // Remove the loading spinner if present (first generation only) and
    // then wire up the new image.
    const loader = card.querySelector('.image-loader');
    if (loader) loader.remove();
    applyImageUpdate();
}

// ── Default-model preference ───────────────────────────────────────────────
// Stored per-device in localStorage. Values: 'free' (proplabs) or 'premium'
// (OpenAI gpt-image-1). Free is the conservative default for new users.
const DEFAULT_MODEL_PREF_KEY = 'decorait.defaultModel';

function getDefaultModelPref() {
    try {
        return localStorage.getItem(DEFAULT_MODEL_PREF_KEY) === 'premium' ? 'premium' : 'free';
    } catch (_) {
        return 'free';
    }
}

function setDefaultModelPref(value) {
    try {
        localStorage.setItem(DEFAULT_MODEL_PREF_KEY, value === 'premium' ? 'premium' : 'free');
    } catch (_) { /* ignore quota / privacy-mode errors */ }
}

function getEffectiveDefaultModelPref() {
    if (!hasPremiumGenerationsAvailable()) return 'free';
    return getDefaultModelPref();
}

// Keep all default-model toggles (wizard step 4 + results page refinement
// area) in sync with the persisted preference. A change on either updates
// localStorage AND mirrors the new state on the other.
const defaultModelToggles = [defaultModelToggle, defaultModelToggleResults].filter(Boolean);
function syncDefaultModelToggles() {
    const canUsePremium = hasPremiumGenerationsAvailable();
    const preferPremium = getDefaultModelPref() === 'premium';
    const checked = canUsePremium && preferPremium;

    const toggles = [...defaultModelToggles];
    if (fengShuiApplyPremiumToggle) toggles.push(fengShuiApplyPremiumToggle);
    if (quickEditPremiumToggle) toggles.push(quickEditPremiumToggle);

    toggles.forEach((el) => {
        el.checked = checked;
        el.disabled = !canUsePremium;
        el.closest('.model-pref-toggle')?.classList.toggle('model-pref-disabled', !canUsePremium);
        const row = el.closest('.model-pref-row');
        if (!row) return;
        // Always show the row — locked users see it with an upsell nudge.
        row.classList.remove('hidden');
        // Rebuild the upsell message on every sync (avoids stale event listeners).
        row.querySelector('.model-pref-upsell')?.remove();
        if (!canUsePremium) {
            const upsell = document.createElement('p');
            upsell.className = 'model-pref-upsell';
            if (!currentUser) {
                upsell.innerHTML =
                    '<button type="button" class="model-pref-upsell-btn">Sign in</button>' +
                    ' and purchase tokens or a monthly subscription to use the premium model.';
                upsell.querySelector('.model-pref-upsell-btn').addEventListener('click', () => showAuthModal('login'));
            } else {
                upsell.innerHTML =
                    'No tokens remaining — ' +
                    '<button type="button" class="model-pref-upsell-btn" data-upsell="buy">buy tokens</button>' +
                    ' or <button type="button" class="model-pref-upsell-btn" data-upsell="subscribe">get a subscription</button>' +
                    ' to unlock the premium model.';
                upsell.querySelector('[data-upsell="buy"]').addEventListener('click', () => showBuyTokensModal());
                upsell.querySelector('[data-upsell="subscribe"]').addEventListener('click', () => showSubscribeModal());
            }
            row.appendChild(upsell);
        }
    });
}
syncDefaultModelToggles();
defaultModelToggles.forEach((el) => {
    el.addEventListener('change', () => {
        if (el.checked && !hasPremiumGenerationsAvailable()) {
            el.checked = false;
            if (userHasSubscription) showSubscriptionLimitMessage();
            else showBuyTokensModal();
            syncDefaultModelToggles();
            return;
        }
        setDefaultModelPref(el.checked ? 'premium' : 'free');
        syncDefaultModelToggles();
    });
});

// Normalize any image reference (data URI, http(s) URL, or raw base64) into
// a data: URI. Replicate output is a regular http(s) URL, so when the user
// regenerates from a previous result we have to fetch it before we can
// hand it to gpt-image-1 (which only takes inline image data).
async function toDataUri(source) {
    if (!source) return source;
    if (source.startsWith('data:')) return source;
    if (/^https?:\/\//i.test(source)) {
        const resp = await fetch(source);
        if (!resp.ok) {
            throw new Error(`Failed to fetch source image (${resp.status})`);
        }
        const blob = await resp.blob();
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error || new Error('FileReader failed'));
            reader.readAsDataURL(blob);
        });
    }
    // Assume raw base64 (no prefix) — default to jpeg.
    return `data:image/jpeg;base64,${source}`;
}

// Call the server-side OpenAI image-edit endpoint (gpt-image-1). Returns
// the resulting image URL and optional savedDesignId — on a 429 the thrown
// error carries `code: 'QUOTA_EXCEEDED'` so the caller can show the right
// messaging. The endpoint reserves a generation slot, so a successful call
// counts against the user's monthly quota.
async function callPremiumImageEdit(sourceImage, prompt, saveOptions = {}) {
    const imageInput = await toDataUri(sourceImage);
    const outputSize = await pickGptImageSize(imageInput);
    const sourceType = saveOptions.sourceType || 'room-design';
    const skipPromptFraming = sourceType === 'quick-edit' || sourceType === 'feng-shui';
    const apiPrompt = skipPromptFraming
        ? prompt
        : `${prompt} Keep the exact same camera framing, field of view, zoom level, and composition as the input image — do not crop, zoom in, or recompose. The output must show the entire original scene with no parts of the room cut off.`;

    // gpt-image-1 high-quality edits take 30–90s — never retry, each
    // retry would be a duplicate billable call.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 180000);
    let resp;
    try {
        resp = await fetch(OPENAI_IMAGE_EDIT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
            },
            body: JSON.stringify({
                imageBase64: imageInput,
                prompt: apiPrompt,
                savePrompt: prompt,
                size: outputSize,
                quality: 'high',
                sourceType,
                metadata: saveOptions.metadata || {},
            }),
            signal: controller.signal
        });
    } finally {
        clearTimeout(timeout);
    }

    if (resp.status === 429) {
        const data = await resp.json().catch(() => ({}));
        const err = new Error(data.error || 'Monthly generation limit reached');
        err.code = 'QUOTA_EXCEEDED';
        err.quota = data;
        throw err;
    }
    if (!resp.ok) {
        const rawText = await resp.text().catch(() => '');
        let parsed = null;
        try { parsed = JSON.parse(rawText); } catch (_) {}
        const err = new Error(`Premium model failed: ${(parsed && parsed.error) || resp.status}`);
        err.code = 'PREMIUM_FAILED';
        err.detail = (parsed && parsed.error) || resp.statusText;
        throw err;
    }
    const data = await resp.json();
    if (!data.imageUrls || !data.imageUrls.length) {
        const err = new Error('Premium model returned no images.');
        err.code = 'PREMIUM_FAILED';
        err.detail = 'no images returned';
        throw err;
    }
    return {
        imageUrl: data.imageUrls[0],
        savedDesignId: data.savedDesignId || null,
    };
}

// After the default model fails, ask the user how to proceed:
//   1) Try our free backup model (SD 3.5)
//   2) Try the premium model (counts as one generation)
//   3) Cancel — leave the failure card with its retry button
// Implemented as two chained confirms so we can reuse the existing modal.
async function offerFallbackChoice(designIndex, design) {
    const tryFree = await showConfirmDialog(
        DEFAULT_MODEL_FAILED_USER_MESSAGE,
        'Default model failed',
        'Try free backup',
        'No, try something else'
    );

    if (tryFree) {
        // 'img2img' is the SD 3.5 backup — different engine from the
        // proplabs default that just failed.
        await runFallbackOnDesign(designIndex, design, 'img2img');
        return;
    }

    // Only offer premium if the user actually has a generation slot left.
    if (!hasTokensAvailable()) return;

    const tryPremium = await showConfirmDialog(
        `Would you like to try our premium image model instead?\n\n` +
        `This counts as one image generation against your monthly limit.`,
        'Try premium model?',
        'Use premium model',
        'Cancel'
    );

    if (tryPremium) {
        await regenerateWithPremiumModel(designIndex);
    }
}

// Insert the loading spinner into a card's image container if it's not
// already present.
function ensureLoadingSpinner(card) {
    const imageContainer = card?.querySelector('.design-image-container');
    if (!imageContainer || imageContainer.querySelector('.image-loader')) return;
    const loader = document.createElement('div');
    loader.className = 'image-loader';
    loader.setAttribute('aria-label', 'Generating image');
    loader.innerHTML = '<div class="image-loader-spinner"></div>';
    imageContainer.insertBefore(loader, imageContainer.firstChild);
}

// Run a free Replicate model on an existing design. The request is flagged
// as a fallback so the server skips quota tracking. `modelType` selects
// the engine — 'proplabs-staging' (the default free model) or 'img2img'
// (the SD 3.5 backup).
async function runFallbackOnDesign(designIndex, design, modelType = 'img2img') {
    if (!design || !design.sourceImage || !design.prompt) {
        console.warn('Cannot run free model — design missing inputs', design);
        return;
    }

    const card = designCarousel.querySelector(`[data-design-id="${design.id}"]`);
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            if (!revealContainer.querySelector('.generated-image')) {
                revealContainer.innerHTML = `
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image" src="" alt="${design.title}" style="opacity:0; z-index: 3;">
                `;
            }
            revealContainer.classList.add('reveal-loading');
        }
        ensureLoadingSpinner(card);
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.innerHTML = '';
            disclaimer.classList.remove('error');
            disclaimer.style.display = 'none';
        }
        const statusBanner = card.querySelector('.model-status');
        if (statusBanner) {
            statusBanner.textContent = 'Running our free model — this won\'t count against your limits.';
            statusBanner.classList.remove('hidden');
        }
        scrollToDesignLoader(card);
    }
    design.needsRetry = false;
    design.errorMessage = '';
    design.loading = true;
    updateResultsFengShuiButtonState();

    try {
        const imageUrls = await generateImageWithControlNet(
            design.sourceImage,
            design.prompt,
            design.negativePrompt || '',
            { modelType, forceFallback: true }
        );

        let imageUrl = '';
        let modelUsed = null;
        let savedDesignId = null;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
            modelUsed = imageUrls.modelUsed || null;
            savedDesignId = imageUrls.savedDesignId || null;
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        }

        design.imageUrl = imageUrl;
        design.loading = false;
        design.modelUsed = modelUsed;

        if (imageUrl) {
            lastGeneratedImageUrl = imageUrl;
            await onGenerationSuccess(imageUrl, {
                prompt: design.prompt,
                model: modelUsed,
                sourceType: 'room-design',
                savedDesignId,
            });
        }
    } catch (error) {
        console.error('Free model failed:', error);
        design.loading = false;
        design.needsRetry = true;
        design.errorMessage = `The free model also failed: ${error.detail || error.message || 'unknown error'}.`;
    }

    updateDesignCard(design, designIndex);

    // If the free model also failed, offer the premium upgrade as a last
    // resort (only if the user has a generation slot left).
    if (design.needsRetry && hasTokensAvailable()) {
        const tryPremium = await showConfirmDialog(
            'Our free model also failed. Would you like to try our premium model?\n\n' +
            'This counts as one image generation against your monthly limit.',
            'Free model also failed',
            'Use premium model',
            'Cancel'
        );
        if (tryPremium) {
            await regenerateWithPremiumModel(designIndex);
        }
    }
}

// Regenerate a design using the premium OpenAI gpt-image-1 model. This is
// the user's upgrade path from the default proplabs result — it counts as
// one image generation against the user's monthly limit / token balance.
async function regenerateWithPremiumModel(designIndex) {
    const design = generatedDesigns?.[designIndex];
    if (!design || !design.sourceImage || !design.prompt) {
        console.warn('Cannot regenerate — design missing source image or prompt', design);
        return;
    }

    // Check token availability up front — the premium run consumes a slot.
    if (!hasTokensAvailable()) return;

    const card = designCarousel.querySelector(`[data-design-id="${design.id}"]`);
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            // If the chain failed earlier, showRetryButton wiped this
            // container of its <img> elements. Rebuild them so the
            // post-success render in updateDesignCard has something to
            // assign the new URL to.
            if (!revealContainer.querySelector('.generated-image')) {
                revealContainer.innerHTML = `
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image" src="" alt="${design.title}" style="opacity:0; z-index: 3;">
                `;
            }
            revealContainer.classList.add('reveal-loading');
        }
        ensureLoadingSpinner(card);
        // Clear any error disclaimer left over from the prior failure.
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.innerHTML = '';
            disclaimer.classList.remove('error');
            disclaimer.style.display = 'none';
        }
        const generatedImg = card.querySelector('.generated-image');
        if (generatedImg) {
            generatedImg.style.opacity = 0;
            generatedImg.classList.remove('fade-in');
        }
        const statusBanner = card.querySelector('.model-status');
        if (statusBanner) {
            statusBanner.textContent = 'Regenerating with premium model — this typically takes 30–90 seconds.';
            statusBanner.classList.remove('hidden');
        }
        scrollToDesignLoader(card);
    }
    // Clear failure flags from any earlier attempt so updateDesignCard runs
    // the normal success-render path.
    design.needsRetry = false;
    design.errorMessage = '';
    design.loading = true;
    updateResultsFengShuiButtonState();

    try {
        const premiumResult = await callPremiumImageEdit(design.sourceImage, design.prompt, {
            sourceType: 'room-design',
        });
        design.imageUrl = premiumResult.imageUrl;
        design.loading = false;
        design.modelUsed = 'openai';

        if (premiumResult.imageUrl) {
            lastGeneratedImageUrl = premiumResult.imageUrl;
            await onGenerationSuccess(premiumResult.imageUrl, {
                prompt: design.prompt,
                model: 'openai',
                sourceType: 'room-design',
                savedDesignId: premiumResult.savedDesignId,
            });
        }

        // Premium run consumed a generation slot — refresh the badge.
        await useTokenAfterSuccess();
    } catch (error) {
        console.error('Premium-model regeneration failed:', error);
        design.loading = false;
        design.needsRetry = true;
        if (error.code === 'QUOTA_EXCEEDED') {
            const limit = error.quota?.limit ?? subscriptionUsage.limit ?? 50;
            design.errorMessage = `You've reached your monthly limit of ${limit} image generations. Your quota will reset at the start of next month.`;
        } else {
            design.errorMessage = error.message || 'Premium model regeneration failed. Please try again.';
        }
    }

    updateDesignCard(design, designIndex);
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
                ${design.loading ? '<div class="image-loader" aria-label="Generating image"><div class="image-loader-spinner"></div></div>' : ''}
                <div class="image-reveal-container${design.loading ? ' reveal-loading' : ''}">
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image${design.loading ? '' : ' fade-in'}" src="${design.loading ? '' : design.imageUrl}" alt="${design.title}" style="opacity:${design.loading ? 0 : 1}; z-index: 3;">
                </div>
                ${disclaimer}
            </div>
            <div class="model-status${design.loading ? '' : ' hidden'}" aria-live="polite">Generating your design — this can take up to a minute for premium model generations.</div>
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

    // Add reveal checkbox functionality to the card
    const card = designCarousel.querySelector('.design-card');
    if (card) {
        console.log('Setting up reveal checkbox for design card');
        setupRevealCheckbox(card, 0);
    }

    // The "Regenerate with premium model" buttons are bound lazily inside
    // updateDesignCard (which sets `dataset.bound` to prevent duplicates).
    // Don't bind here — doing so would double-fire the handler on click,
    // triggering two billable premium generations per click.
}

// ===== DESIGN HISTORY =====

/** Reset history when starting a fresh upload. */
function resetDesignHistory() {
    designHistory = [];
    selectedHistoryId = null;
    renderDesignHistory();
}

/** Seed history with the original upload (idempotent — won't duplicate). */
function seedDesignHistoryWithOriginal() {
    if (!currentUploadedImage) return;
    const hasOriginal = designHistory.some(h => h.isOriginal);
    if (hasOriginal) return;
    designHistory.unshift({
        id: 'history-original',
        imageUrl: currentUploadedImage,
        label: 'Original',
        isOriginal: true,
    });
}

/** Push a successful generation onto the history and select it as latest. */
function pushDesignHistory(imageUrl) {
    if (!imageUrl) return;
    // Skip if the same URL is already the most recent entry (e.g. re-render).
    const last = designHistory[designHistory.length - 1];
    if (last && last.imageUrl === imageUrl) {
        selectedHistoryId = last.id;
        renderDesignHistory();
        return;
    }
    const generationCount = designHistory.filter(h => !h.isOriginal).length + 1;
    const entry = {
        id: `history-${Date.now()}-${generationCount}`,
        imageUrl,
        label: `v${generationCount}`,
        isOriginal: false,
    };
    designHistory.push(entry);
    selectedHistoryId = entry.id;
    renderDesignHistory();
}

/** Returns the user-selected history entry, or the latest if none picked. */
function getSelectedHistoryEntry() {
    if (!designHistory.length) return null;
    if (selectedHistoryId) {
        const found = designHistory.find(h => h.id === selectedHistoryId);
        if (found) return found;
    }
    return designHistory[designHistory.length - 1];
}

/** Source image for the NEXT generation: user pick > latest > original upload. */
function getBaseImageForNextGeneration() {
    const sel = getSelectedHistoryEntry();
    return sel?.imageUrl || lastGeneratedImageUrl || currentUploadedImage;
}

/** Render the history strip; hide it until there's at least one generation. */
function renderDesignHistory() {
    const container = document.getElementById('design-history');
    const strip = document.getElementById('design-history-strip');
    if (!container || !strip) return;

    // Hide until the user has at least one generated design (original + 1 gen = 2 entries).
    if (designHistory.length < 2) {
        container.classList.add('hidden');
        strip.innerHTML = '';
        return;
    }

    container.classList.remove('hidden');
    const activeId = getSelectedHistoryEntry()?.id;

    strip.innerHTML = designHistory.map(entry => `
        <button type="button"
                class="design-history-thumb${entry.id === activeId ? ' active' : ''}"
                data-history-id="${entry.id}"
                role="listitem"
                aria-pressed="${entry.id === activeId}"
                aria-label="${entry.isOriginal ? 'Original photo' : 'Version ' + entry.label.replace('v', '')}">
            <img src="${entry.imageUrl}" alt="">
            <span class="design-history-thumb-label">${entry.label}</span>
        </button>
    `).join('');

    strip.querySelectorAll('.design-history-thumb').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-history-id');
            selectHistoryEntry(id);
        });
    });
}

/** User clicked a thumbnail: swap the visible design + remember as next base. */
function selectHistoryEntry(id) {
    const entry = designHistory.find(h => h.id === id);
    if (!entry) return;
    selectedHistoryId = id;

    // Swap the currently displayed generated image to this entry.
    const generatedImg = document.querySelector('.design-card .design-image.generated-image');
    if (generatedImg) {
        generatedImg.src = entry.imageUrl;
    }
    // Update model-status copy to reflect what's shown.
    const modelStatus = document.querySelector('.design-card .model-status');
    if (modelStatus) {
        modelStatus.classList.add('hidden');
    }

    renderDesignHistory();
    updateResultsFengShuiButtonState();
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
    // Return to style selection (step 4) — the last wizard step before generation
    const uploadSection = document.getElementById('upload-section');
    if (uploadSection) uploadSection.classList.remove('hidden');
    if (wizardContainer) wizardContainer.classList.remove('hidden');
    if (wizardProgress) wizardProgress.classList.remove('hidden');
    goToWizardStep(4);

    // Clear refinement text so it doesn't bleed into the next generation
    if (refinementInput) refinementInput.value = '';
}

function regenerateDesigns() {
    // Simply call the generate designs function again
    generateDesigns();
}

// ── Room photo Feng Shui analysis ───────────────────────────────────────────

function clearFengShuiCache() {
    fengShuiAnalysisCache.clear();
}

function getCachedFengShuiAnalysis(imageSource) {
    if (!imageSource) return null;
    return fengShuiAnalysisCache.get(imageSource) || null;
}

function setCachedFengShuiAnalysis(imageSource, entry) {
    if (!imageSource) return;
    fengShuiAnalysisCache.set(imageSource, entry);
}

function getFengShuiAnalysisTarget() {
    if (isDesignGenerationInProgress()) return null;

    // Prefer the history-strip selection — it drives the visible generated image on results.
    const historyEntry = getSelectedHistoryEntry();
    if (historyEntry?.imageUrl) {
        const label = historyEntry.isOriginal
            ? 'original photo'
            : (historyEntry.label || 'selected design');
        return { src: historyEntry.imageUrl, label };
    }

    const design = generatedDesigns?.[0];
    if (design?.imageUrl && !design.loading && !design.needsRetry) {
        return { src: design.imageUrl, label: 'generated design' };
    }
    if (currentUploadedImage) {
        return { src: currentUploadedImage, label: 'uploaded photo' };
    }
    return null;
}

function isDesignGenerationInProgress() {
    return generatedDesigns.some((d) => d.loading);
}

function updateResultsFengShuiButtonState() {
    const generating = isDesignGenerationInProgress();

    if (wizardFengShuiBtn) {
        wizardFengShuiBtn.disabled = generating;
        wizardFengShuiBtn.title = generating ? 'Wait for image generation to finish' : '';
    }

    if (regenerateBtn) {
        regenerateBtn.disabled = generating;
        regenerateBtn.title = generating ? 'Wait for image generation to finish' : '';
    }

    if (!resultsFengShuiBtn) return;
    const target = getFengShuiAnalysisTarget();
    const canAnalyze = !generating && !!target;
    resultsFengShuiBtn.disabled = !canAnalyze;
    if (generating) {
        resultsFengShuiBtn.title = 'Wait for image generation to finish';
    } else if (target) {
        resultsFengShuiBtn.title = `Analyze feng shui for your ${target.label.toLowerCase()}`;
    } else {
        resultsFengShuiBtn.title = 'Generate a design first to analyze feng shui';
    }
}

function showRoomFengShuiModal(label) {
    if (!roomFengShuiModal) return;
    if (roomFengShuiTitle) {
        roomFengShuiTitle.textContent = label ? `Feng Shui — ${label}` : 'Feng Shui Analysis';
    }
    roomFengShuiModal.classList.add('show');
    roomFengShuiModal.style.opacity = '1';
    roomFengShuiModal.style.visibility = 'visible';
    if (typeof feather !== 'undefined') feather.replace();
}

function hideRoomFengShuiModal() {
    if (!roomFengShuiModal) return;
    roomFengShuiModal.classList.remove('show');
    roomFengShuiModal.style.opacity = '';
    roomFengShuiModal.style.visibility = '';
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
}

function showRoomFengShuiLoading() {
    if (!roomFengShuiBody) return;
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
    currentFengShuiContext = null;
    roomFengShuiBody.innerHTML = `
        <div class="feng-shui-loading">
            <div class="feng-shui-spinner"></div>
            <p>Analyzing your room…</p>
            <small>This usually takes 5-10 seconds.</small>
        </div>
    `;
}

function showRoomFengShuiError(message) {
    if (!roomFengShuiBody) return;
    if (roomFengShuiFooter) roomFengShuiFooter.classList.add('hidden');
    currentFengShuiContext = null;
    roomFengShuiBody.innerHTML = `
        <div class="feng-shui-error">
            <p>${message}</p>
        </div>
    `;
}

function formatFengShuiCategory(category) {
    if (!category) return 'Recommendation';
    return category.charAt(0).toUpperCase() + category.slice(1);
}

function ensureRoomTypeFromWizard() {
    if (currentRoomType && designStyles[currentRoomType]) return;

    const emptyRadio = document.getElementById('empty-room');
    const furnishedRadio = document.getElementById('furnished-room');
    if (emptyRadio?.checked) {
        currentRoomType = 'empty';
    } else if (furnishedRadio?.checked) {
        currentRoomType = 'furnished';
    } else {
        currentRoomType = isRoomActuallyEmpty ? 'empty' : 'furnished';
    }
}

function getFengShuiNegativePrompt() {
    return 'blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, architectural changes, structural modifications, zoomed in, cropped, close-up, tighter framing, recomposed, cut off, parts of room missing, narrower field of view, different camera distance';
}

function buildFengShuiGenerationPrompt(result) {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const suggestions = (result?.suggestions || [])
        .slice()
        .sort((a, b) => (priorityOrder[a.priority] ?? 2) - (priorityOrder[b.priority] ?? 2))
        .slice(0, 5)
        .map((s) => s.description)
        .filter(Boolean);

    if (suggestions.length > 0) return suggestions.join(' ');
    return result?.summary || 'Improve overall feng shui balance and energy flow in the room.';
}

/** User-facing copy for the results card after a feng shui apply generation completes. */
function buildFengShuiAppliedDescription(result) {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const applied = (result?.suggestions || [])
        .slice()
        .sort((a, b) => (priorityOrder[a.priority] ?? 2) - (priorityOrder[b.priority] ?? 2))
        .slice(0, 3)
        .map((s) => s.description)
        .filter(Boolean);

    if (applied.length > 0) {
        return `This layout reflects your feng shui updates: ${applied.join(' ')}`;
    }

    const strengths = (result?.strengths || []).filter(Boolean);
    if (strengths.length > 0) {
        return `This layout preserves ${strengths[0].charAt(0).toLowerCase()}${strengths[0].slice(1)} while improving overall balance and energy flow.`;
    }

    const score = Number(result?.overallScore);
    if (score >= 8) {
        return 'This layout maintains strong feng shui harmony with open flow and balanced energy throughout the space.';
    }

    return 'This layout has been updated to improve feng shui balance, energy flow, and harmony in the room.';
}

function isWizardVisible() {
    return wizardContainer && !wizardContainer.classList.contains('hidden');
}

function updateFengShuiApplyFooter() {
    if (!roomFengShuiFooter) return;

    const wizardVisible = isWizardVisible();
    if (fengShuiContinueWizardBtn) {
        fengShuiContinueWizardBtn.classList.toggle('hidden', !wizardVisible);
    }

    if (fengShuiApplyPremiumToggle) {
        fengShuiApplyPremiumToggle.checked = getEffectiveDefaultModelPref() === 'premium';
    }

    roomFengShuiFooter.classList.remove('hidden');
    if (typeof feather !== 'undefined') feather.replace();
}

const FIVE_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'];

const ELEMENT_META = {
    wood: {
        label: 'Wood',
        color: '#16a34a',
        bg: '#dcfce7',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12"/><path d="M12 12C12 8 8 4 4 4c0 4 4 8 8 8z"/><path d="M12 12c0-4 4-8 8-8 0 4-4 8-8 8z"/></svg>',
    },
    fire: {
        label: 'Fire',
        color: '#ea580c',
        bg: '#ffedd5',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.5-1.5-3-3-5-1.5 2-3 4-3 6a6 6 0 1 0 12 0c0-2-1.5-4-3-6-1.5 2-3 3.5-3 5a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    },
    earth: {
        label: 'Earth',
        color: '#a16207',
        bg: '#fef9c3',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V10l7-6 7 6v10"/><path d="M9 20v-6h6v6"/></svg>',
    },
    metal: {
        label: 'Metal',
        color: '#64748b',
        bg: '#f1f5f9',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>',
    },
    water: {
        label: 'Water',
        color: '#2563eb',
        bg: '#dbeafe',
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/></svg>',
    },
};

const ELEMENT_LEVEL_LABELS = {
    low: 'Low',
    balanced: 'Balanced',
    strong: 'Strong',
};

function inferElementLevelFromText(text) {
    const t = String(text).toLowerCase();
    if (/\b(low|lacking|weak|missing|deficient|insufficient|absent|underrepresented)\b/.test(t)) return 'low';
    if (/\b(strong|excessive|dominant|abundant|overpowering|heavy|overrepresented)\b/.test(t)) return 'strong';
    return 'balanced';
}

function normalizeFengShuiElement(raw) {
    if (!raw) return null;
    if (typeof raw === 'string') {
        const summary = raw.trim();
        if (!summary) return null;
        const level = inferElementLevelFromText(summary);
        const score = level === 'low' ? 3 : level === 'strong' ? 9 : 6;
        return { level, score, summary, present: [], add: [] };
    }
    if (typeof raw === 'object') {
        const summary = (raw.summary || '').trim();
        const level = raw.level || (summary ? inferElementLevelFromText(summary) : 'balanced');
        let score = Number(raw.score);
        if (!Number.isFinite(score) || score < 1 || score > 10) {
            score = level === 'low' ? 3 : level === 'strong' ? 9 : 6;
        }
        return {
            level,
            score,
            summary,
            present: Array.isArray(raw.present) ? raw.present.filter(Boolean) : [],
            add: Array.isArray(raw.add) ? raw.add.filter(Boolean) : [],
        };
    }
    return null;
}

function normalizeFengShuiElements(rawElements) {
    if (!rawElements || typeof rawElements !== 'object') return {};
    const normalized = {};
    FIVE_ELEMENTS.forEach((key) => {
        const entry = normalizeFengShuiElement(rawElements[key]);
        if (entry) normalized[key] = entry;
    });
    return normalized;
}

function buildElementsBalanceSummary(elements, apiSummary) {
    if (apiSummary && String(apiSummary).trim()) return String(apiSummary).trim();

    const low = [];
    const strong = [];
    FIVE_ELEMENTS.forEach((key) => {
        const el = elements[key];
        if (!el) return;
        if (el.level === 'low') low.push(ELEMENT_META[key].label);
        if (el.level === 'strong') strong.push(ELEMENT_META[key].label);
    });

    const parts = [];
    if (low.length > 0) parts.push(`${formatElementList(low)} could use more support`);
    if (strong.length > 0) parts.push(`${formatElementList(strong)} ${strong.length === 1 ? 'is' : 'are'} well represented`);
    if (parts.length === 0) return 'The five elements appear reasonably balanced in this room.';
    return `${parts.join('; ')}.`;
}

function formatElementList(items) {
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
}

function renderRoomFengShuiElementsSection(result) {
    const elements = normalizeFengShuiElements(result.elements);
    if (Object.keys(elements).length === 0) return '';

    const summary = buildElementsBalanceSummary(elements, result.elementsSummary);
    let html = `
        <div class="room-feng-shui-elements">
            <h4>Five elements</h4>
            <p class="fs-elements-summary">${summary}</p>
            <div class="fs-elements-list">
    `;

    FIVE_ELEMENTS.forEach((key) => {
        const el = elements[key];
        if (!el) return;
        const meta = ELEMENT_META[key];
        const level = el.level || 'balanced';
        const levelLabel = ELEMENT_LEVEL_LABELS[level] || ELEMENT_LEVEL_LABELS.balanced;
        const meterPct = Math.max(10, Math.min(100, el.score * 10));

        html += `
            <div class="fs-element-row fs-element-row--${level}">
                <div class="fs-element-header">
                    <span class="fs-element-icon" style="background:${meta.bg};color:${meta.color}">${meta.icon}</span>
                    <span class="fs-element-name">${meta.label}</span>
                    <span class="fs-element-level fs-element-level--${level}">${levelLabel}</span>
                    <span class="fs-element-score">${el.score}/10</span>
                </div>
                <div class="fs-element-meter" aria-hidden="true">
                    <div class="fs-element-meter-fill" style="width:${meterPct}%;background:${meta.color}"></div>
                </div>
        `;

        if (el.summary) {
            html += `<p class="fs-element-summary">${el.summary}</p>`;
        }

        if (el.present.length > 0) {
            html += `
                <div class="fs-element-detail">
                    <span class="fs-element-detail-label">Present</span>
                    <span class="fs-element-detail-value">${el.present.join(', ')}</span>
                </div>
            `;
        }

        if (el.add.length > 0) {
            html += `
                <div class="fs-element-detail fs-element-detail--add">
                    <span class="fs-element-detail-label">To strengthen</span>
                    <span class="fs-element-detail-value">${el.add.join('; ')}</span>
                </div>
            `;
        }

        html += `</div>`;
    });

    html += `</div></div>`;
    return html;
}

function displayRoomFengShuiResults(result, imageDisplaySrc, label, imageSource) {
    if (!roomFengShuiBody) return;

    currentFengShuiContext = { result, imageDisplaySrc, label, imageSource };

    const score = Number(result.overallScore) || 0;
    const scoreColor = score >= 7 ? '#22c55e' : score >= 4 ? '#f59e0b' : '#ef4444';
    let html = '';

    if (imageDisplaySrc) {
        html += `<img class="room-feng-shui-photo" src="${imageDisplaySrc}" alt="${label || 'Room'}">`;
    }

    html += `
        <div class="feng-shui-score">
            <div class="score-circle" style="border-color: ${scoreColor}">
                <span class="score-number" style="color: ${scoreColor}">${score}</span>
                <span class="score-label">/ 10</span>
            </div>
            <p class="score-summary">${result.summary || 'Analysis complete.'}</p>
        </div>
    `;

    if (Array.isArray(result.strengths) && result.strengths.length > 0) {
        html += `
            <div class="room-feng-shui-strengths">
                <h4>What's working well</h4>
                <ul>${result.strengths.map((item) => `<li>${item}</li>`).join('')}</ul>
            </div>
        `;
    }

    html += renderRoomFengShuiElementsSection(result);

    if (Array.isArray(result.suggestions) && result.suggestions.length > 0) {
        html += `<div class="feng-shui-suggestions"><div class="fs-suggestions-title">Recommendations</div>`;
        result.suggestions.forEach((suggestion) => {
            const priority = suggestion.priority || 'medium';
            const priorityColor = priority === 'high' ? '#ef4444' : priority === 'medium' ? '#f59e0b' : '#22c55e';
            const name = suggestion.furnitureName || formatFengShuiCategory(suggestion.category);
            html += `
                <div class="feng-shui-suggestion">
                    <div class="suggestion-header">
                        <span class="suggestion-priority" style="background: ${priorityColor}">${priority}</span>
                        <span class="suggestion-name">${name}</span>
                    </div>
                    <p class="suggestion-principle">${suggestion.principle || ''}</p>
                    <p class="suggestion-desc">${suggestion.description || ''}</p>
                </div>
            `;
        });
        html += `</div>`;
    } else if (score >= 8) {
        html += `<p class="feng-shui-no-suggestions">Your room has good feng shui! No major changes suggested.</p>`;
    }

    roomFengShuiBody.innerHTML = html;
    updateFengShuiApplyFooter();
}

// ── Quick Edit (Option A: prompt-only simple edits) ──────────────────────────
// A lightweight path for simple changes (wall color, flooring, finishes) without
// the full design wizard. The user types a plain-language instruction; we wrap it
// with "keep everything else the same" guardrails and send it to the premium
// image-edit model, which preserves the rest of the photo.

// Nano Banana = Google's Gemini 2.5 Flash Image on Replicate — a cheap
// instruction-edit model. Runs through the existing Replicate proxy/poll;
// a bare "owner/name" slug routes to Replicate's official-model endpoint.
const NANO_BANANA_MODEL = 'google/nano-banana';

/** Run a free Quick Edit through Nano Banana. Returns the result image URL. */
async function generateQuickEditWithNanoBanana(sourceImage, prompt) {
    const imageInput = await toDataUri(sourceImage);
    const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(currentSession ? { 'Authorization': `Bearer ${currentSession.access_token}` } : {})
        },
        body: JSON.stringify({
            version: NANO_BANANA_MODEL,
            input: {
                prompt,
                image_input: [imageInput],
                output_format: 'png',
            },
        }),
    }, 3, 3000);

    if (startResponse.status === 429) {
        const data = await startResponse.json().catch(() => ({}));
        const err = new Error(data.error || 'Monthly generation limit reached');
        err.code = 'QUOTA_EXCEEDED';
        err.quota = data;
        throw err;
    }
    if (!startResponse.ok) {
        const data = await startResponse.json().catch(() => ({}));
        throw new Error(`Quick edit failed: ${data.error || data.detail || startResponse.status}`);
    }
    const prediction = await startResponse.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Quick edit model did not return a polling URL.');
    }
    const saveContext = {
        prompt,
        model: 'nano-banana',
        sourceType: 'quick-edit',
    };
    const result = await pollReplicatePrediction(prediction.urls.get, saveContext);
    const raw = result.imageUrls;
    const imageUrl = Array.isArray(raw) ? raw[0] : raw;
    if (!imageUrl) throw new Error('Quick edit model returned no image.');
    return { imageUrl, savedDesignId: result.savedDesignId || null };
}

/** Return the user's quick-edit text as-is — no guardrail wrapping. */
function buildQuickEditPrompt(text) {
    const edit = (text || '').trim();
    if (!edit) return null;
    return { prompt: edit, label: edit };
}

/** Enable/disable Apply based on whether there's any text. */
function updateQuickEditApplyState() {
    if (quickEditApplyBtn) {
        quickEditApplyBtn.disabled = !(quickEditInput?.value || '').trim();
    }
}

function clearQuickEditInput() {
    if (quickEditInput) quickEditInput.value = '';
    updateQuickEditApplyState();
}

function openQuickEdit() {
    if (!requireEmailConfirmedForFeature('quick edit')) return;
    clearQuickEditInput();
    // Default to the free model every time — premium is an explicit opt-in.
    // syncDefaultModelToggles manages row visibility and the upsell message.
    if (quickEditPremiumToggle) quickEditPremiumToggle.checked = false;
    if (quickEditModal) quickEditModal.classList.add('show');
    // Focus the box so the user can start typing right away.
    requestAnimationFrame(() => quickEditInput?.focus());
}

function closeQuickEdit() {
    if (quickEditModal) quickEditModal.classList.remove('show');
}

/** Apply the typed quick edit through the shared generation pipeline. */
async function applyQuickEdit() {
    if (!currentUploadedImage) {
        showAlertDialog('Please upload an image first.');
        return;
    }
    const built = buildQuickEditPrompt(quickEditInput?.value);
    if (!built) return;
    const usePremium = !!quickEditPremiumToggle?.checked;
    closeQuickEdit();
    // Default: free Nano Banana (cheap instruction-edit model, no token).
    // Premium opt-in: gpt-image-2 (higher fidelity, counts as one generation).
    // generateDesigns handles token gating and the buy/limit modal.
    await generateDesigns({
        quickEdit: {
            prompt: built.prompt,
            label: usePremium ? 'Quick edit (premium)' : 'Quick edit',
            description: built.label,
        },
        imageSource: currentUploadedImage,
        usePremium,
    });
}

async function applyFengShuiFromAnalysis() {
    const ctx = currentFengShuiContext;
    if (!ctx?.imageSource || !ctx?.result) return;

    const usePremium = fengShuiApplyPremiumToggle?.checked ?? (getEffectiveDefaultModelPref() === 'premium');
    hideRoomFengShuiModal();

    await generateDesigns({
        fengShuiResult: ctx.result,
        imageSource: ctx.imageSource,
        usePremium,
    });
}

async function startRoomFengShuiAnalysis(imageSource, { label = 'Room' } = {}) {
    if (!requireEmailConfirmedForFeature('feng shui analysis')) return;
    if (!imageSource) {
        showAlertDialog('No image available to analyze.');
        return;
    }

    showRoomFengShuiModal(label);

    const cached = getCachedFengShuiAnalysis(imageSource);
    if (cached) {
        displayRoomFengShuiResults(cached.result, cached.imageDisplaySrc, cached.label, imageSource);
        return;
    }

    showRoomFengShuiLoading();

    try {
        const imageBase64 = await toDataUri(imageSource);
        if (!currentSession?.access_token) {
            showAuthModal('login');
            hideRoomFengShuiModal();
            return;
        }
        const resp = await fetch(FENG_SHUI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentSession.access_token}`,
            },
            body: JSON.stringify({
                imageBase64,
                analysisType: 'room-photo',
            }),
        });

        const data = await resp.json().catch(() => ({}));
        if (!resp.ok) {
            throw new Error(data.error || `Analysis failed (${resp.status})`);
        }

        setCachedFengShuiAnalysis(imageSource, {
            result: data,
            imageDisplaySrc: imageBase64,
            label,
        });
        displayRoomFengShuiResults(data, imageBase64, label, imageSource);
    } catch (error) {
        console.error('Feng shui analysis failed:', error);
        showRoomFengShuiError(error.message || 'Unable to analyze this room. Please try again.');
    }
}

function saveCurrentDesign() {
    // Find the currently visible design card (first one in mobile view)
    const selectedDesign = document.querySelector('.design-card');
    if (selectedDesign) {
        const designImage = selectedDesign.querySelector('.design-image.generated-image');
        if (designImage && designImage.src) {
            const link = document.createElement('a');
            link.download = 'decorait-design.jpg';

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