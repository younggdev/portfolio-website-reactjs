export function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // ganti spasi jadi -
    .replace(/[^\w\-]+/g, "") // hapus karakter aneh
    .replace(/\-\-+/g, "-"); // hapus double dash
}
