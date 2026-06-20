// ===== MENU MOBILE =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            // Alterna o ícone ☰ / ✕
            menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
        });

        // Fecha o menu ao clicar em um link (mobile)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                menuToggle.textContent = '☰';
            });
        });
    }

    // ===== DESTAQUE DO LINK ATIVO (opcional) =====
    // Remove a classe 'active' de todos e adiciona no link atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});