document.addEventListener("DOMContentLoaded", () => {
  const btnIg = document.querySelector("#btn-ig");
  const btnPorto = document.querySelector("#btn-porto");

  // Aksi saat tombol Instagram diklik
  btnIg.addEventListener("click", () => {
    window.open("https://instagram.com/username_kamu", "_blank");
  });

  // Aksi saat tombol Portofolio diklik
  btnPorto.addEventListener("click", () => {
    window.open("https://link-portofolio-kamu.com", "_blank");
  });
});