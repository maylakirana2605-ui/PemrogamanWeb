const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadDataBuku() {
    const tbody = document.querySelector("#tabel-buku tbody");
    const loading = document.getElementById("loading-indicator");

    try {
        if (loading) loading.style.display = "block";
        await delay(600);

        const response = await fetch("../data/buku.json");
        if (!response.ok) throw new Error("Gagal mengambil data buku: " + response.statusText);

        const data = await response.json();
        tbody.innerHTML = "";

        data.forEach((buku, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${buku.kode}</td>
                <td>${buku.judul}</td>
                <td>${buku.penulis}</td>
                <td>${buku.tahun}</td>
                <td>${buku.stok}</td>
                <td>${buku.status}</td>
                <td>
                    <button type="button">Edit</button>
                    <button type="button" class="btn-hapus">Hapus</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; color:red;">${err.message}</td></tr>`;
    } finally {
        if (loading) loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", loadDataBuku);