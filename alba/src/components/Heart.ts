export function setupSVGHeartAnimation() {
    const heart = document.querySelector("#heart") as SVGElement | null;
    if (!heart) return;

    heart.style.animation = "blink 4s cubic-bezier(0.4, 0, 0.2, 1) infinite";
}
