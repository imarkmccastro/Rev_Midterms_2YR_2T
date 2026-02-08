// Performance optimization examples.
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
