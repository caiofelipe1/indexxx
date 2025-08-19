document.addEventListener("DOMContentLoaded", function() {

    // --- Efeito de digitação ---
    const title = document.getElementById("title");
    const text = title.textContent;
    title.textContent = "";
    let i = 0;
    function typeWriter() {
        if(i < text.length){
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // --- Mensagens secretas ---
    window.revealMessage = function(id){
        const message = document.getElementById(`message-${id}`);
        message.style.display = message.style.display === 'block' ? 'none' : 'block';
    }

    // --- Contador de amor ---
    let loveCount = 0;
    document.getElementById("love-button").addEventListener("click", function(){
        loveCount++;
        const counter = document.getElementById("love-counter");
        if(loveCount<10) counter.textContent = `Te amo ${loveCount} vezes mais hoje do que ontem ❤️`;
        else if(loveCount<20) counter.textContent = `Te amo ${loveCount} vezes mais que qualquer palavra pode expressar ❤️`;
        else counter.textContent = `Te amo ${loveCount} vezes mais que o infinito ❤️`;
    });

    // --- Corações flutuantes ---
    function createHearts(){
        const container = document.getElementById("hearts-container");
        const symbols = ["❤️","✨","🎈"];
        for(let i=0;i<20;i++){
            const heart = document.createElement("div");
            heart.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
            heart.classList.add("heart");
            heart.style.left = Math.random()*100 + "vw";
            heart.style.top = Math.random()*100 + "vh";
            heart.style.fontSize = (Math.random()*30+20) + "px";
            heart.style.animationDuration = (Math.random()*5+3)+"s";
            container.appendChild(heart);
            setTimeout(()=>heart.remove(),8000);
        }
    }
    document.getElementById("hearts-button").addEventListener("click",createHearts);
    for(let i=0;i<10;i++){ setTimeout(createHearts,i*300); }
    setInterval(createHearts,3000);

    // --- Upload de foto ---
    const photoPlaceholder = document.getElementById("photo-placeholder");
    const photoInput = document.getElementById("photo-input");
    photoPlaceholder.addEventListener("click", ()=>photoInput.click());
    photoInput.addEventListener("change", function(){
        if(this.files && this.files[0]){
            const reader = new FileReader();
            reader.onload = function(e){
                photoPlaceholder.innerHTML="";
                photoPlaceholder.style.backgroundImage = `url(${e.target.result})`;
                photoPlaceholder.style.backgroundSize = "cover";
                photoPlaceholder.style.backgroundPosition = "center";
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    // --- Surpresa final ---
    document.getElementById("surprise-button").addEventListener("click", function(){
        alert("Eu te amo do tamanho do Universo 💖✨");
    });

});
