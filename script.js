document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do Carrossel de Perfil
    const profileImages = [
        'profileImages/foto1.png',
        'profileImages/foto2.png',
        'profileImages/foto3.png'
    ];
    
    const carouselContainer = document.getElementById('profileCarousel');
    
    // Criar elementos de imagem
    profileImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        if (index === 0) img.classList.add('active');
        carouselContainer.appendChild(img);
    });

    let currentIdx = 0;
    const images = carouselContainer.querySelectorAll('img');

    setInterval(() => {
        images[currentIdx].classList.remove('active');
        currentIdx = (currentIdx + 1) % images.length;
        images[currentIdx].classList.add('active');
    }, 3000); // Troca a cada 3 segundos

    // 2. Garantir que o Accordion inicie aberto
    // O HTML já possui a classe 'open', esta lógica pode ser usada para alternar depois
    const techHeader = document.querySelector('#process-tech h2');
    techHeader.addEventListener('click', () => {
        document.getElementById('techContent').classList.toggle('open');
    });
});