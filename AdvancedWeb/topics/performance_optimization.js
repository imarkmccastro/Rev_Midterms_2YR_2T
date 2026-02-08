// Performance optimization examples.
// Walkthrough:
// 1) Configure lazy image loading and async decoding.
// 2) Show a long-lived cache header.
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
