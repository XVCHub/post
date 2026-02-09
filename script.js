const SCRIPTS = {
    loader: 'loadstring(game:HttpGet("https://pastebin.com/raw/Piw5bqGq"))()',
    luna: 'loadstring(game:HttpGet("https://luna.xvchubontop.workers.dev/"))()',
    rayfield: 'loadstring(game:HttpGet("https://rayfield.xvchubontop.workers.dev/"))()'
};

const MODES = ['loader', 'luna', 'rayfield'];
let CURRENT_MODE = 0;

const TOGGLE = document.getElementById('modeToggle');
const COPY_BTN = document.getElementById('copyScript');

TOGGLE.addEventListener('click', () => {
    CURRENT_MODE = (CURRENT_MODE + 1) % MODES.length;
    TOGGLE.textContent = MODES[CURRENT_MODE];
});

COPY_BTN.addEventListener('click', async () => {
    const SCRIPT = SCRIPTS[MODES[CURRENT_MODE]];
    
    try {
        await navigator.clipboard.writeText(SCRIPT);
        const ORIGINAL = COPY_BTN.textContent;
        COPY_BTN.textContent = 'copied!';
        setTimeout(() => {
            COPY_BTN.textContent = ORIGINAL;
        }, 2000);
    } catch (err) {
        const ORIGINAL = COPY_BTN.textContent;
        COPY_BTN.textContent = 'failed';
        setTimeout(() => {
            COPY_BTN.textContent = ORIGINAL;
        }, 2000);
    }
});
