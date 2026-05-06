function add() {

    let container = document.getElementById("Cards");

    if (document.getElementById("paqueta-card")) return;

    let novoCard = document.createElement("div");
    novoCard.className = "card";
    novoCard.style.width = "22rem";
    novoCard.id = "paqueta-card";

    novoCard.innerHTML = `
        <img src="img/Lucas_Paqueta.png" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">
                Lucas Paquetá
                <span class="badge text-bg-secondary">8,8</span>
            </h5>

            <p class="card-text">
                <strong>Nome:</strong> Lucas Tolentino Coelho de Lima<br>
                <strong>Nascimento:</strong> 27/08/1997<br>
                <strong>Altura:</strong> 1,80 m<br>
                <strong>Posição:</strong> Meio-campista
            </p>
        </div>
    `;

    container.appendChild(novoCard);
}