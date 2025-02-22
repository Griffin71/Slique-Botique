const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 86400000); // Convert days to milliseconds
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value);
        return acc;
    }, {})[name] || null;
};

const checkCookie = () => {
    if (!getCookie('cookieConsent')) {
        showCookieConsent();
    } else {
        console.log('Cookie consent already given.');
    }
};

const showCookieConsent = () => {
    const consentDiv = document.createElement('div');
    consentDiv.id = 'cookieConsent';
    consentDiv.style.cssText = `
        position: fixed; bottom: 0; left: 0; width: 100%; background: rgba(0, 0, 0, 0.85);
        color: #fff; text-align: center; padding: 1rem; font-size: 14px; z-index: 1000;
        display: flex; justify-content: center; align-items: center;
    `;

    consentDiv.innerHTML = `
        <span>This website uses cookies to ensure you get the best experience.</span>
        <button id="acceptCookies" style="
            margin-left: 1rem; padding: 0.5rem 1rem; background: #4CAF50; 
            color: #fff; border: none; cursor: pointer; font-size: 14px;
        ">Accept</button>
    `;

    document.body.appendChild(consentDiv);

    document.getElementById('acceptCookies').addEventListener('click', () => {
        setCookie('cookieConsent', 'accepted', 365); // 12 months
        console.log('Cookie consent given.');
        consentDiv.remove();
    });
};

// Run the check when the page loads
document.addEventListener('DOMContentLoaded', checkCookie);


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const items = [
        "🌸", // Bouquet
        "🍫", // Chocolate
        "🦋", // Butterfly
        "⚪", // Marble
    ];

    function createFloatingItem() {
        const item = document.createElement("div");
        item.classList.add("floating-item");

        // Random size class
        const sizes = ["small", "medium", "large"];
        item.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

        // Random emoji
        item.textContent = items[Math.floor(Math.random() * items.length)];

        // Random position
        item.style.left = `${Math.random() * 100}%`;
        item.style.animationDuration = `${5 + Math.random() * 5}s`; // Between 5s and 10s

        header.appendChild(item);

        // Remove after animation ends
        setTimeout(() => {
            item.remove();
        }, 10000);
    }

    // Generate new floating items every second
    setInterval(createFloatingItem, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const emojis = ["🌸", "💖", "🎁", "🍫", "🦋", "✨"];

    function createFloatingEmoji() {
        const emoji = document.createElement("div");
        emoji.classList.add("floating-emoji");

        // Random emoji
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        // Random position
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.animationDuration = `${5 + Math.random() * 5}s`; // Between 5s and 10s

        footer.appendChild(emoji);

        // Remove after animation ends
        setTimeout(() => {
            emoji.remove();
        }, 10000);
    }

    // Generate new floating emojis every 1.5 seconds
    setInterval(createFloatingEmoji, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach((btn) => {
        const mediaSrc = btn.closest(".media").querySelector("img, video").src;

        // Check if the media is already liked in local storage
        if (localStorage.getItem(`liked-${mediaSrc}`) === "true") {
            btn.classList.add("liked");
            btn.innerText = "💖";
        }

        btn.addEventListener("click", () => {
            if (btn.classList.contains("liked")) {
                btn.classList.remove("liked");
                btn.innerText = "❤️";
                localStorage.removeItem(`liked-${mediaSrc}`);
            } else {
                btn.classList.add("liked");
                btn.innerText = "💖";
                localStorage.setItem(`liked-${mediaSrc}`, "true");
            }
        });
    });
});
