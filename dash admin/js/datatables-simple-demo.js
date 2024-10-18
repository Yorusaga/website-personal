window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

document.getElementById('addPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var postTitle = document.getElementById('postTitle').value;
    var postDate = new Date().toISOString().split('T')[0]; // Mendapatkan tanggal saat ini

    var table = document.getElementById('postTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = postTitle;
    cell3.innerHTML = postDate;
    cell4.innerHTML = `
        <button class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editPostModal">Edit</button>
    `;

    // Reset form setelah submit
    document.getElementById('addPostForm').reset();
    alert('Postingan berhasil ditambahkan!');
});


function editPost(id) {
    // Ambil elemen dari baris tabel berdasarkan ID
    var row = document.getElementById('post-' + id);
    
    // Ambil data dari tabel
    var title = row.cells[1].innerHTML;
    var date = row.cells[2].innerHTML;

    // Isi modal form dengan data yang diambil
    document.getElementById('editPostTitle').value = title;
    document.getElementById('editPostDate').value = date;
    
    // Simpan ID postingan yang sedang diedit
    document.getElementById('editPostId').value = id;

    // Tampilkan modal edit
    var editModal = new bootstrap.Modal(document.getElementById('editPostModal'), {});
    editModal.show();
}

