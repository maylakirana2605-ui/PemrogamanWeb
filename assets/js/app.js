document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initValidasiForm();
    initTableFilter();
    initBtnHapus();
});

function initNavToggle() {
    const btnToggle = document.getElementById("nav-toggle-btn");
    const navMenu = document.querySelector("header nav");

    if (btnToggle && navMenu) {
        btnToggle.addEventListener("click", function () {
            navMenu.classList.toggle("nav-open");
        });
    }
}

function initValidasiForm() {
    const form = document.querySelector("form");
    if (!form) return;

    form.setAttribute("novalidate", "true");

    form.addEventListener("submit", function (e) {
        let isValid = true;

        const oldErrors = form.querySelectorAll(".error-msg");
        oldErrors.forEach(function (err) {
            err.remove();
        });

        const requiredInputs = form.querySelectorAll("input[required], select[required]");
        requiredInputs.forEach(function (input) {
            if (!input.value.trim()) {
                tampilkanError(input, "Field ini wajib diisi!");
                isValid = false;
            }
        });

        const tahunInput = form.querySelector("input[name='tahun']");
        if (tahunInput && tahunInput.value.trim()) {
            const tahun = parseInt(tahunInput.value, 10);
            if (tahun < 1900 || tahun > 2099) {
                tampilkanError(tahunInput, "Tahun harus berada dalam rentang 1900 - 2099!");
                isValid = false;
            }
        }

        const stokInput = form.querySelector("input[name='stok']");
        if (stokInput && stokInput.value.trim()) {
            const stok = parseInt(stokInput.value, 10);
            if (stok < 0) {
                tampilkanError(stokInput, "Stok tidak boleh bernilai negatif!");
                isValid = false;
            }
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
}

function tampilkanError(element, pesan) {
    const errorEl = document.createElement("small");
    errorEl.className = "error-msg";
    errorEl.style.color = "red";
    errorEl.style.display = "block";
    errorEl.style.marginTop = "4px";
    errorEl.textContent = pesan;
    element.insertAdjacentElement("afterend", errorEl);
}

function initTableFilter() {
    const searchInput = document.getElementById("search-input");
    const tbody = document.querySelector("table tbody");

    if (searchInput && tbody) {
        searchInput.addEventListener("keyup", function () {
            const keyword = searchInput.value.toLowerCase();
            const rows = tbody.querySelectorAll("tr");

            rows.forEach(function (row) {
                const text = row.textContent.toLowerCase();
                if (text.includes(keyword)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
}

function initBtnHapus() {
    const hapusButtons = document.querySelectorAll(".btn-hapus");

    hapusButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const yakin = confirm("Apakah Anda yakin ingin menghapus data ini?");
            if (yakin) {
                const row = btn.closest("tr");
                if (row) {
                    row.remove();
                }
            }
        });
    });
}