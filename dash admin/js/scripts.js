/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.getElementById('addPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic to add post
    alert('Postingan berhasil ditambahkan!');
});

document.getElementById('editPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Logic to edit post
    alert('Postingan berhasil diubah!');
});

document.getElementById('editPostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari form edit
    var postId = document.getElementById('editPostId').value;
    var newTitle = document.getElementById('editPostTitle').value;

    // Perbarui baris tabel yang sesuai
    var row = document.getElementById('post-' + postId);
    row.cells[1].innerHTML = newTitle;

    // Sembunyikan modal setelah menyimpan
    var editModal = bootstrap.Modal.getInstance(document.getElementById('editPostModal'));
    editModal.hide();

    alert('Postingan berhasil diperbarui!');
});

