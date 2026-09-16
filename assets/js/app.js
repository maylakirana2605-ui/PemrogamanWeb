document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger menu toggle
    const navBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (navBtn && nav) {
        navBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-open");
        });
    }

    // 2. Filter pencarian tabel real-time
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const keyword = this.value.toLowerCase();
            const rows = document.querySelectorAll("tbody tr");
            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(keyword) ? "" : "none";
            });
        });
    }

    // 3. Validasi Form Tambah (Buku & Anggota)
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            let isValid = true;
            document.querySelectorAll(".error-msg").forEach(el => el.remove());

            const requiredInputs = form.querySelectorAll("input[required], select[required]");
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    showError(input, "Field ini wajib diisi!");
                    isValid = false;
                }
            });

            const inputTahun = form.querySelector("input[name='tahun']");
            if (inputTahun && inputTahun.value.trim()) {
                const tahun = parseInt(inputTahun.value, 10);
                if (tahun < 1900 || tahun > 2099) {
                    showError(inputTahun, "Tahun terbit harus antara 1900 - 2099!");
                    isValid = false;
                }
            }

            const inputStok = form.querySelector("input[name='stok']");
            if (inputStok && inputStok.value.trim()) {
                const stok = parseInt(inputStok.value, 10);
                if (stok < 0) {
                    showError(inputStok, "Jumlah stok tidak boleh negatif!");
                    isValid = false;
                }
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    function showError(element, message) {
        const error = document.createElement("p");
        error.className = "error-msg";
        error.style.color = "red";
        error.style.fontSize = "0.85rem";
        error.style.marginTop = "0.25rem";
        error.textContent = message;
        element.insertAdjacentElement("afterend", error);
    }
});

// 4. Event delegation untuk tombol hapus dinamis (Jobsheet 6)
document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("btn-hapus")) {
        const row = e.target.closest("tr");
        if (confirm("Yakin ingin menghapus baris data ini?")) {
            row.remove();
        }
    }
});