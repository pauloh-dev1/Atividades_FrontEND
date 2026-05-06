function revelar() {
    const imgElement = document.getElementById("jogador-img");

    if (imgElement) {
        imgElement.src = "img/_vinicius_junior.png";
        imgElement.onerror = () => {
            console.log("Imagem não encontrada. Verifique o caminho.");
        };
    }

    const nome = document.getElementById("Nome");
    const dataNas = document.getElementById("Data_Nas");
    const altura = document.getElementById("Altura");
    const posicao = document.getElementById("Posição");
    const rankEl = document.getElementById("Rank");

    if (nome) nome.textContent = "Vinícius José Paixão de Oliveira Júnior";
    if (dataNas) dataNas.textContent = "12/07/2000 (25 anos)";
    if (altura) altura.textContent = "1,76 m";
    if (posicao) posicao.textContent = "Ponta-esquerda / Atacante";

    if (rankEl) {
        rankEl.textContent = "9,5";
        rankEl.classList.remove("text-bg-secondary");
        rankEl.classList.add("text-bg-success");
    }

    const elementos = ["Nome", "Data_Nas", "Altura", "Posição"];

    elementos.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove("placeholder");
            if (el.parentElement) {
                el.parentElement.classList.remove("placeholder-glow");
            }
        }
    });
}