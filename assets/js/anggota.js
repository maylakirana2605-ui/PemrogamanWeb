const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadDataAnggota() {
    const tbody = document.querySelector("#tabel-anggota tbody");
    const loading = document.getElementById("loading-indicator");

    try {
        if (loading) loading.style.display = "block";
        await delay(600);

        const response = await fetch("../data/anggota.json");
        if (!response.ok) throw new Error("Gagal mengambil data anggota: " + response.statusText);

        const data = await response.json();
        tbody.innerHTML = "";

        data.forEach((anggota, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${anggota.nim}</td>
                <td>${anggota.nama}</td>
                <td>${anggota.prodi}</td>
                <td>${anggota.status}</td>
                <td>
                    <button type="button">Edit</button>
                    <button type="button" class="btn-hapus">Hapus</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red;">${err.message}</td></tr>`;
    } finally {
        if (loading) loading.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", loadDataAnggota);