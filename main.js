function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `

}

let delay = -0.3;

function createCard(date, day, games) {
    
    delay = delay + 0.3;

    return `

    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>

    `

}

let delay2 = -0.3;

function createGroup(group, player1, player2, player3, player4) {
    
    delay2 = delay2 + 0.3;

    return `
    <div class="index" style="animation-delay: ${delay2}s">
                    
                    <h2>Grupo ${group}</h2>
                    <ul>
                        <li>
                            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                            <span>${player1}</span>
                        </li>
                        <li><img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
                        <span>${player2}</span>
                        </li>
                        <li>
                            <img src="./assets/icon-${player3}.svg" alt="Bandeira do ${player3}">
                            <span>${player3}</span>
                        </li>
                        <li>
                            <img src="./assets/icon-${player4}.svg" alt="Bandeira do ${player4}">
                            <span>${player4}</span>
                        </li>
                    </ul>
                    
                </div>
    `
}



        

