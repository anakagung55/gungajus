
<script>
// TOGGLE OPEN/CLOSE
document.querySelectorAll('.comment-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const box = toggle.nextElementSibling;
        box.classList.toggle("show");
    });
});

// tombol close
document.querySelectorAll('.close-comment').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.remove("show");
    });
});

// VALIDATION + ALERT MESSAGE
document.querySelectorAll('.send-comment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const box = btn.parentElement;
        const name = box.querySelector('.comment-name');
        const text = box.querySelector('.comment-text');
        const alertBox = box.querySelector('.comment-alert');

        if (name.value.trim() === "" || text.value.trim() === "") {
            alertBox.textContent = "⚠️ Semua kolom harus diisi.";
            alertBox.className = "comment-alert error";
            alertBox.style.display = "block";
            return;
        }

        // jika sukses
        alertBox.textContent = "✔️ Komentar berhasil dikirim!";
        alertBox.className = "comment-alert success";
        alertBox.style.display = "block";

        // reset input
        name.value = "";
        text.value = "";

        // hide alert after 3 sec
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    });
});

</script>
