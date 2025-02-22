


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
