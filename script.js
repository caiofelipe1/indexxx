document.addEventListener("DOMContentLoaded", function() {

    // --- Efeito de digitação no título ---
    const title = document.getElementById("title");
    const text = title.textContent;
    title.textContent = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // --- Função para revelar mensagens ocultas ---
    window.revealMessage = function(id) {
        const message = document.getElementById(`message-${id}`);
        message.style.display = message.style.display === 'block' ? 'none' : 'block';
    }

    // --- Função para o contador de amor ---
    let loveCount = 0;
    document.getElementById("love-button").addEventListener("click", function() {
        loveCount++;
        const counter = document.getElementById('love-counter');
        if (loveCount < 10) {
            counter.textContent = `Te amo ${loveCount} vezes mais hoje do que ontem ❤️`;
        } else if (loveCount < 20) {
            counter.textContent = `Te amo ${loveCount} vezes mais que qualquer palavra pode expressar ❤️`;
        } else {
            counter.textContent = `Te amo ${loveCount} vezes mais que o infinito ❤️`;
        }
    });

    // --- Função para criar corações/estrelas/balões flutuantes ---
    function createHearts() {
        const heartsContainer = document.getElementById('hearts-container');
        const symbols = ['❤️', '✨', '🎈'];

        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
    }

    document.getElementById("hearts-button").addEventListener("click", createHearts);

    // --- Adicionar alguns corações iniciais ---
    for (let i = 0; i < 10; i++) {
        setTimeout(createHearts, i * 300);
    }

    // --- Permitir upload de foto ---
    document.getElementById('photo-placeholder').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();

            reader.onload = function(event) {
                const photoPlaceholder = document.getElementById('photo-placeholder');
                photoPlaceholder.innerHTML = '';
                photoPlaceholder.style.backgroundImage = `url(${event.target.result})`;
                photoPlaceholder.style.backgroundSize = 'cover';
                photoPlaceholder.style.backgroundPosition = 'center';
            };

            reader.readAsDataURL(file);
        };

        input.click();
    });

    // --- Adicionar corações aleatórios periodicamente ---
    setInterval(createHearts, 3000);

    // --- Surpresa final ---
    document.getElementById("surprise-button").addEventListener("click", function() {
        alert("Eu te amo do tamanho do Universo 💖✨");
    });

});
