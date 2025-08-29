// Global variables
let currentTruthIndex = 0;
let currentDareIndex = 0;
let currentTruth = null;
let currentDare = null;
let chaosLevel = 0; // Track how chaotic the game gets

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥💀 DOM loaded, initializing Truth or Dare game...');
    console.log('🌐 Current URL:', window.location.href);
    
    // Initialize game immediately and also after a delay to ensure scripts are loaded
    initializeGame();
    
    // Also try again after a delay to handle any loading issues
    setTimeout(function() {
        console.log('⏰ Delayed initialization check...');
        if (!currentTruth || !currentDare) {
            console.log('🔄 Re-initializing game due to missing data...');
            initializeGame();
        }
    }, 2000);
    
    // Force load questions after 3 seconds if still not loaded
    setTimeout(function() {
        console.log('🔄 Force loading questions...');
        if (typeof TRUTH_QUESTIONS !== 'undefined' && typeof DARE_CHALLENGES !== 'undefined') {
            loadRandomTruth();
            loadRandomDare();
        }
    }, 3000);
});

// Also try to load when window is fully loaded
window.addEventListener('load', function() {
    console.log('🌐 Window fully loaded, checking game data...');
    
    // Force load questions if they haven't loaded yet
    setTimeout(function() {
        const truthText = document.getElementById('truthText');
        const dareText = document.getElementById('dareText');
        
        if (truthText && truthText.innerHTML.includes('Loading')) {
            console.log('🔄 Force loading truth question...');
            loadRandomTruth();
        }
        
        if (dareText && dareText.innerHTML.includes('Loading')) {
            console.log('🔄 Force loading dare question...');
            loadRandomDare();
        }
    }, 1000);
});

// Main initialization function
function initializeGame() {
    console.log('🎮 Starting game initialization...');
    console.log('TRUTH_QUESTIONS available:', typeof TRUTH_QUESTIONS !== 'undefined' ? TRUTH_QUESTIONS.length : 'UNDEFINED');
    console.log('DARE_CHALLENGES available:', typeof DARE_CHALLENGES !== 'undefined' ? DARE_CHALLENGES.length : 'UNDEFINED');
    
    // Test if HTML elements exist
    console.log('truthText element exists:', !!document.getElementById('truthText'));
    console.log('dareText element exists:', !!document.getElementById('dareText'));
    console.log('truthAnswer element exists:', !!document.getElementById('truthAnswer'));
    
    if (typeof TRUTH_QUESTIONS !== 'undefined' && typeof DARE_CHALLENGES !== 'undefined' && 
        TRUTH_QUESTIONS.length > 0 && DARE_CHALLENGES.length > 0) {
        console.log('🎉 Game data loaded successfully!');
        
        // Load initial questions
        loadRandomTruth();
        loadRandomDare();
        setupEventListeners();
        startChaosMode(); // Start the chaos immediately!
        console.log('🚀 Game initialization complete!');
        
        // Update loading text to show it's working
        const truthText = document.getElementById('truthText');
        const dareText = document.getElementById('dareText');
        if (truthText && truthText.innerHTML.includes('Loading')) {
            console.log('✅ Updating truth loading text...');
            loadRandomTruth(); // Force update
        }
        if (dareText && dareText.innerHTML.includes('Loading')) {
            console.log('✅ Updating dare loading text...');
            loadRandomDare(); // Force update
        }
    } else {
        console.error('❌ Game data not loaded! Check script loading order.');
        console.log('TRUTH_QUESTIONS:', TRUTH_QUESTIONS);
        console.log('DARE_CHALLENGES', DARE_CHALLENGES);
        
        // Show error message to user
        const mainPage = document.getElementById('mainPage');
        if (mainPage) {
            mainPage.innerHTML = `
                <div class="container">
                    <div class="emoji">💀</div>
                    <h1>�� CHAOS ERROR! 🔥</h1>
                    <p class="subtitle">Game data failed to load! Check console for details.</p>
                    <button onclick="location.reload()" class="game-btn">🔄 Reload Chaos</button>
                </div>
            `;
        }
        
        // Try to load again after a short delay
        setTimeout(function() {
            if (typeof TRUTH_QUESTIONS !== 'undefined' && typeof DARE_CHALLENGES !== 'undefined') {
                console.log('🔄 Retrying initialization...');
                initializeGame();
            }
        }, 1000);
    }
}

// Setup event listeners
function setupEventListeners() {
    // File upload preview
    const dareImage = document.getElementById('dareImage');
    if (dareImage) {
        dareImage.addEventListener('change', handleImagePreview);
    }

    // Dare form submission
    const dareForm = document.getElementById('dareForm');
    if (dareForm) {
        dareForm.addEventListener('submit', handleDareSubmission);
    }

    // Add random chaos to button clicks
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('game-btn')) {
            triggerRandomChaos();
        }
    });
}

// CHAOS MODE ACTIVATED! 🔥
function startChaosMode() {
    // Random emoji rain every 10 seconds
    setInterval(() => {
        if (Math.random() > 0.7) {
            createEmojiStorm();
        }
    }, 10000);

    // Random screen shake every 15 seconds
    setInterval(() => {
        if (Math.random() > 0.8) {
            shakeScreen();
        }
    }, 15000);

    // Random color changes every 20 seconds
    setInterval(() => {
        if (Math.random() > 0.9) {
            changeRandomColors();
        }
    }, 20000);
}

// Navigation functions
function showMainPage() {
    document.getElementById('mainPage').classList.add('active');
    document.getElementById('truthPage').classList.remove('active');
    document.getElementById('darePage').classList.remove('active');
    triggerRandomChaos(); // Chaos on navigation!
}

function showTruthPage() {
    document.getElementById('mainPage').classList.remove('active');
    document.getElementById('truthPage').classList.add('active');
    document.getElementById('darePage').classList.remove('active');
    loadRandomTruth();
    createEmojiExplosion(); // Truth page gets emoji explosion!
}

function showDarePage() {
    document.getElementById('mainPage').classList.remove('active');
    document.getElementById('truthPage').classList.remove('active');
    document.getElementById('darePage').classList.add('active');
    loadRandomDare();
    shakeScreen(); // Dare page gets screen shake!
}

// Truth functions
function loadRandomTruth() {
    console.log('Loading random truth...');
    
    if (typeof TRUTH_QUESTIONS === 'undefined' || !TRUTH_QUESTIONS || TRUTH_QUESTIONS.length === 0) {
        console.error('TRUTH_QUESTIONS not available!');
        // Set a fallback question
        const fallbackQuestion = "What's the most embarrassing thing you've ever done?";
        const truthText = document.getElementById('truthText');
        if (truthText) {
            truthText.innerHTML = `<strong>💀 ${fallbackQuestion} 💀</strong>`;
        }
        return;
    }
    
    console.log('TRUTH_QUESTIONS length:', TRUTH_QUESTIONS.length);
    
    currentTruthIndex = Math.floor(Math.random() * TRUTH_QUESTIONS.length);
    currentTruth = TRUTH_QUESTIONS[currentTruthIndex];
    
    console.log('Selected truth:', currentTruth);
    
    const truthText = document.getElementById('truthText');
    if (truthText) {
        // Add random emojis to make it more chaotic
        const randomEmojis = ['💀', '🤡', '👻', '🤪', '😵‍💫', '🧠', '💥', '🔥', '⚡', '🎭'];
        const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        truthText.innerHTML = `<strong>${randomEmoji} ${currentTruth} ${randomEmoji}</strong>`;
        console.log('Truth text updated successfully');
    } else {
        console.error('truthText element not found!');
    }
    
    // Clear previous answer
    const truthAnswer = document.getElementById('truthAnswer');
    if (truthAnswer) {
        truthAnswer.value = '';
    }
}

function submitTruth() {
    const truthAnswer = document.getElementById('truthAnswer').value.trim();
    
    if (!truthAnswer) {
        showMessage('Please type your answer before submitting!', 'error');
        return;
    }
    
    // Save truth answer to Supabase
    saveTruthAnswer(currentTruth, truthAnswer, true);
    
    // Show result with maximum chaos
    showTruthResult(`🎉 Great job being honest! Your answer: "${truthAnswer}"`, true);
    createEmojiStorm();
    shakeScreen();
    changeRandomColors();
}

function skipTruth() {
    // Save truth skip to Supabase
    saveTruthAnswer(currentTruth, "Skipped", false);
    
    // Show result with chaos
    showTruthResult("😅 You skipped this truth! That's okay, maybe next time!", true);
    createEmojiExplosion();
}

function showTruthResult(result, showPromotion) {
    document.getElementById('truthQuestion').style.display = 'none';
    document.getElementById('truthResult').style.display = 'block';
    document.getElementById('resultText').innerHTML = result;
    
    if (showPromotion) {
        document.getElementById('clubPromotion').style.display = 'block';
    } else {
        document.getElementById('clubPromotion').style.display = 'none';
    }
}

function resetTruth() {
    document.getElementById('truthQuestion').style.display = 'block';
    document.getElementById('truthResult').style.display = 'none';
    loadRandomTruth();
    
    // Clear the textarea
    const truthAnswer = document.getElementById('truthAnswer');
    if (truthAnswer) {
        truthAnswer.value = '';
    }
    
    // Add chaos to reset
    triggerRandomChaos();
}

// Dare functions
function loadRandomDare() {
    console.log('Loading random dare...');
    
    if (typeof DARE_CHALLENGES === 'undefined' || !DARE_CHALLENGES || DARE_CHALLENGES.length === 0) {
        console.error('DARE_CHALLENGES not available!');
        // Set a fallback dare
        const fallbackDare = "Take a selfie with your most embarrassing face!";
        const dareText = document.getElementById('dareText');
        if (dareText) {
            dareText.innerHTML = `<strong>🔥 ULTIMATE DARE: ⚡</strong><br><br>${fallbackDare}<br><span style="font-size: 1rem; opacity: 0.8;">No excuses, no delays! Maximum chaos! 🔥</span>`;
        }
        return;
    }
    
    console.log('DARE_CHALLENGES length:', DARE_CHALLENGES.length);
    
    currentDareIndex = Math.floor(Math.random() * DARE_CHALLENGES.length);
    currentDare = DARE_CHALLENGES[currentDareIndex];
    
    console.log('Selected dare:', currentDare);
    
    const dareText = document.getElementById('dareText');
    if (dareText) {
        // Add random emojis and make it more chaotic
        const randomEmojis = ['🔥', '⚡', '💀', '🤡', '👻', '🤪', '😵‍💫', '🧠', '💥', '🎭'];
        const randomEmoji1 = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        const randomEmoji2 = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        dareText.innerHTML = `<strong>${randomEmoji1} ULTIMATE DARE: ${randomEmoji2}</strong><br><br>${currentDare}<br><span style="font-size: 1rem; opacity: 0.8;">No excuses, no delays! Maximum chaos! ${randomEmoji1}</span>`;
        console.log('Dare text updated successfully');
    } else {
        console.error('dareText element not found!');
    }
}

function acceptDare() {
    document.getElementById('dareChallenge').style.display = 'none';
    document.getElementById('dareSubmission').style.display = 'block';
    createEmojiStorm(); // Chaos when accepting dare!
}

function skipDare() {
    // Save dare skip to Supabase
    saveDareSkip(currentDare);
    
    // Show result with chaos
    showDareResult("😰 You skipped the dare! But that's okay, try again next time!", true);
    shakeScreen();
}

function showDareResult(result, showPromotion) {
    document.getElementById('dareChallenge').style.display = 'none';
    document.getElementById('dareSubmission').style.display = 'none';
    document.getElementById('dareResult').style.display = 'block';
    document.getElementById('dareResultText').innerHTML = result;
    
    if (showPromotion) {
        document.getElementById('dareClubPromotion').style.display = 'block';
    } else {
        document.getElementById('dareClubPromotion').style.display = 'none';
    }
}

function resetDare() {
    document.getElementById('dareChallenge').style.display = 'block';
    document.getElementById('dareSubmission').style.display = 'none';
    document.getElementById('dareResult').style.display = 'none';
    loadRandomDare();
    triggerRandomChaos(); // Chaos on reset!
}

function cancelDareSubmission() {
    document.getElementById('dareChallenge').style.display = 'block';
    document.getElementById('dareSubmission').style.display = 'none';
    resetImagePreview();
    createEmojiExplosion(); // Chaos on cancel!
}

// Image preview functionality
function handleImagePreview(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImg = document.getElementById('previewImg');
            const imagePreview = document.getElementById('imagePreview');
            
            previewImg.src = e.target.result;
            imagePreview.style.display = 'block';
            
            // Add chaos to image preview
            if (Math.random() > 0.5) {
                shakeElement(imagePreview);
            }
        };
        reader.readAsDataURL(file);
    }
}

function resetImagePreview() {
    const imagePreview = document.getElementById('imagePreview');
    const dareImage = document.getElementById('dareImage');
    
    if (imagePreview) imagePreview.style.display = 'none';
    if (dareImage) dareImage.value = '';
}

// Dare form submission
async function handleDareSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const file = formData.get('dareImage');
    
    if (!file) {
        showMessage('Please select an image!', 'error');
        return;
    }
    
    try {
        // Show loading state
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading"></span> Uploading...';
        submitBtn.disabled = true;
        
        // Check if Supabase is ready
        if (!supabase) {
            throw new Error('Supabase not ready yet');
        }
        
        // Upload file to Supabase storage
        const fileName = `${Date.now()}_${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('dares')
            .upload(`public/${fileName}`, file);
        
        if (uploadError) {
            throw uploadError;
        }
        
        // Get public URL
        const { data: urlData } = await supabase.storage
            .from('dares')
            .getPublicUrl(uploadData.path);
        
        // Save dare submission to database
        const { error: dbError } = await supabase
            .from('dares')
            .insert([
                {
                    file_url: urlData.publicUrl
                }
            ]);
        
        if (dbError) {
            throw dbError;
        }
        
        // Show success result with MAXIMUM CHAOS
        showDareResult(`🎉 Amazing! You completed the dare: "${currentDare}"`, true);
        showMessage('Dare submitted successfully! 🎉', 'success');
        
        // Trigger all chaos effects
        createEmojiStorm();
        shakeScreen();
        changeRandomColors();
        addConfetti();
        
    } catch (error) {
        console.error('Error submitting dare:', error);
        showMessage('Failed to submit dare. Please try again.', 'error');
    } finally {
        // Reset button
        const submitBtn = event.target.querySelector('button[type="submit"]');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Supabase functions
async function saveTruthAnswer(question, answer, answered) {
    try {
        if (!supabase) {
            console.log('Supabase not ready, skipping save');
            return;
        }
        await supabase.from('truths').insert([
            {
                content: answer
            }
        ]);
        console.log('Truth saved successfully!');
    } catch (error) {
        console.error('Error saving truth answer:', error);
    }
}

async function saveDareSkip(dare) {
    try {
        if (!supabase) {
            console.log('Supabase not ready, skipping save');
            return;
        }
        // For skipped dares, we don't store the challenge text
        // Just store that a dare was skipped (optional)
        await supabase.from('dares').insert([
            {
                file_url: null
            }
        ]);
        console.log('Dare skip saved successfully!');
    } catch (error) {
        console.error('Error saving dare skip:', error);
    }
}

// Utility functions
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Add to page
    const container = document.querySelector('.container');
    container.insertBefore(messageDiv, container.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

// ABSOLUTE CHAOS FUNCTIONS! 🔥💀
function createEmojiStorm() {
    const emojis = ['💀', '🤡', '👻', '🤪', '😵‍💫', '🧠', '💥', '🔥', '⚡', '🎭', '🎪', '🎨', '🎭', '🎪', '🎨'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.top = '-20px';
            emoji.style.fontSize = '30px';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '9999';
            emoji.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 3000);
        }, i * 100);
    }
}

function createEmojiExplosion() {
    const emojis = ['💥', '🔥', '⚡', '💀', '🤡', '👻'];
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = '50vw';
            emoji.style.top = '50vh';
            emoji.style.fontSize = '40px';
            emoji.style.pointerEvents = 'none';
            emoji.style.zIndex = '9999';
            emoji.style.transform = 'translate(-50%, -50%)';
            emoji.style.animation = 'explode 1s ease-out forwards';
            
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 1000);
        }, i * 50);
    }
}

function shakeScreen() {
    document.body.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 500);
}

function shakeElement(element) {
    element.style.animation = 'shake 0.3s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 300);
}

function changeRandomColors() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change random element colors
    const elements = document.querySelectorAll('.challenge-card, .game-btn');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    if (randomElement) {
        randomElement.style.background = randomColor;
        setTimeout(() => {
            randomElement.style.background = '';
        }, 2000);
    }
}

function triggerRandomChaos() {
    const chaosFunctions = [createEmojiStorm, createEmojiExplosion, shakeScreen, changeRandomColors];
    const randomChaos = chaosFunctions[Math.floor(Math.random() * chaosFunctions.length)];
    randomChaos();
}

// Add some fun animations
function addConfetti() {
    // Simple confetti effect
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.innerHTML = ['🎉', '🎊', '✨', '🌟', '💫', '💀', '🤡', '👻', '🤪', '😵‍💫', '🧠', '💥', '🔥', '⚡', '🎭'][Math.floor(Math.random() * 15)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.fontSize = '20px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 100);
    }
}

// Add chaos animation CSS
const chaosStyle = document.createElement('style');
chaosStyle.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes explode {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
    }
    
    .game-btn:hover {
        animation: shake 0.3s ease-in-out;
    }
    
    .challenge-card:hover {
        animation: shake 0.2s ease-in-out;
    }
`;
document.head.appendChild(chaosStyle);

// Add confetti to successful dare submissions
const originalHandleDareSubmission = handleDareSubmission;
handleDareSubmission = async function(event) {
    await originalHandleDareSubmission(event);
    addConfetti();
};
