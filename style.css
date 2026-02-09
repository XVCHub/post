@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
    --bg-color: #121212;
    --box-color: rgba(28, 28, 28, 0.75);
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent-color: #ffffff;
    --shadow-color: rgba(255, 255, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: var(--bg-color);
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
}

.animated-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #121212, #1a1a1a);
    z-index: 0;
}

.animated-bg::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    animation: grid-move 15s linear infinite;
}

@keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(40px, 40px); }
}

#mainContent {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-container {
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 20;
}

.mode-toggle {
    background: var(--box-color);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem 1.5rem;
    border-radius: 9px;
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: lowercase;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.mode-toggle:hover {
    background: rgba(38, 38, 38, 0.85);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
    box-shadow: 0 0 20px var(--shadow-color);
}

.center-buttons {
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
}

.main-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    padding: 1rem 3rem;
    border-radius: 50px;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: lowercase;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.main-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.main-btn:active {
    transform: translateY(-1px);
}

.discord-btn {
    background: linear-gradient(135deg, #5865F2 0%, #4752C4 100%);
    box-shadow: 0 4px 15px rgba(88, 101, 242, 0.4);
}

.discord-btn:hover {
    box-shadow: 0 6px 20px rgba(88, 101, 242, 0.6);
}

@media (max-width: 768px) {
    .toggle-container {
        top: 1rem;
        right: 1rem;
    }

    .mode-toggle {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }

    .center-buttons {
        gap: 1rem;
    }

    .main-btn {
        padding: 0.75rem 2rem;
        font-size: 1rem;
    }
}
