document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links a.active')?.classList.remove('active');
        link.classList.add('active');
    });
});
modal.classList.add('show');
function showSnackbar(message) {
    const snackbar = document.createElement('div');
    snackbar.className = 'snackbar show';
    snackbar.innerText = message;
    document.body.appendChild(snackbar);
    setTimeout(() => snackbar.remove(), 3000);
}

toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    showSnackbar(`${mode} Diaktifkan`);
});
window.addEventListener('load', () => {
    const loader = document.getElementById('loading');
    loader.style.display = 'none';
});
// Menangani interaksi tombol
document.getElementById('interactiveButton').addEventListener('click', () => {
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Tampilkan pesan interaktif
    feedbackMessage.innerText = 'Tombol berhasil ditekan! 🎉';
    feedbackMessage.classList.add('visible');

    // Reset pesan setelah 3 detik
    setTimeout(() => {
        feedbackMessage.classList.remove('visible');
    }, 3000);
});
document.getElementById('interactiveButton').addEventListener('click', () => {
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Animasi pesan muncul
    feedbackMessage.innerText = 'Tombol berhasil ditekan! ✨🚀';
    feedbackMessage.classList.add('visible');

    // Reset pesan setelah 3 detik
    setTimeout(() => {
        feedbackMessage.classList.remove('visible');
    }, 3000);
});
