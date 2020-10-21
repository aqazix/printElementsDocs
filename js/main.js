document.addEventListener("DOMContentLoaded", (e) => {
    document.querySelectorAll(".code-wrap").forEach((block) => {
        hljs.highlightBlock(block);
    });
});