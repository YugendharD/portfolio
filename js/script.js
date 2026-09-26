const hero = document.querySelector(".hero");
const visual = document.querySelector(".hero-visual");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (hero && visual && !prefersReducedMotion) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        visual.style.transform = `
            translate(
                calc(-50% + ${x * 18}px),
                calc(-50% + ${y * 18}px)
            )
            rotateX(${y * -4}deg)
            rotateY(${x * 4}deg)
        `;
    });

    hero.addEventListener("mouseleave", () => {
        visual.style.transform =
            "translate(-50%, -50%) rotateX(0deg) rotateY(0deg)";
    });
}