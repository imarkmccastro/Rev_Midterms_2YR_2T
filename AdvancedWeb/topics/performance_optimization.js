// Performance optimization examples.
// Walkthrough:
// 1) Lazy-load images and decode off the main thread.
// 2) Show a long-lived cache header for static assets.
// 3) Log the settings.
const img = new Image();
img.loading = "lazy";
img.decoding = "async";
img.src = "hero.webp";

const headers = {
    "Cache-Control": "public, max-age=31536000",
};

console.log(img.loading, img.decoding, headers["Cache-Control"]);
// Output:
// lazy async public, max-age=31536000
