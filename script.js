// script.js
const messages = [
    "Setiap detik bersamamu adalah momen terindah dalam hidupku. Selamat Hari Valentine, Jang Wonyoung! 💖",
    "Cintaku padamu tak terukur, seperti bintang di langit yang tak ada habisnya. Happy Valentine’s Day, sayang! 🌹",
    "Kau adalah alasan aku tersenyum setiap hari. Selamat Hari Valentine, cintaku. 🌷",
    "Tidak ada yang lebih indah dari cintaku padamu. Aku bersyukur memiliki kamu, Jang Wonyoung. Happy Valentine! 💕",
    "Hari Valentine ini aku hanya ingin mengucapkan terima kasih telah menjadi bagian dari hidupku. I love you, Jang Wonyoung! 💌",
    "Kamu adalah segalanya bagi aku, Jang Wonyoung. Setiap detik bersamamu adalah anugerah. Happy Valentine’s Day! ❤️",
];

function generateMessage() {
    const messageContainer = document.getElementById('message-container');
    const heartsContainer = document.getElementById('hearts-container');
    
    messageContainer.innerHTML = "";  // Clear the container before displaying new message
    heartsContainer.innerHTML = "";  // Clear existing hearts
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    typeWriter(randomMessage, messageContainer);
    generateHearts(heartsContainer);
}

function typeWriter(text, element) {
    let i = 0;
    let speed = 100; // speed of typing

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function generateHearts(container) {
    const heartCount = 20;  // Number of hearts to generate
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Random position for each heart
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 30 + 20; // Random size of hearts between 20px and 50px
        
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        
        container.appendChild(heart);
    }
}

<script>
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
<\script>