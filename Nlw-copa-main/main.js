function resultados(team1,team2,player1,player2){
   return  `
   <li>
   <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
   <strong>${team1}</strong>
   <p>X</p>
   <strong>${team2}</strong>
   <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
   </li>
   `
}

function createGame(player1, hour, player2,) {
	return `
   <li>
   <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
   <strong>${hour}</strong>
   
   <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
   </li>
   `;
}

// animação
let delay = -0.4;

function createCard(date, day, games) {
   delay = delay + -0.4;
	return `
   <div class="card" stye="animaiton-delay:${delay}s">
   <h2>${date} <span>${day}</span></h2>
   <ul>
   ${games}
   </ul>
</div>
   `;
}
document.querySelector("#cards").innerHTML = 


createCard("23/11", "quinta", 
createGame("brazil","16:00","serbia"))
+

createCard("23/11", "quinta", createGame("brazil","13:00","switzerland")) +

createCard("23/11", "quinta", createGame("brazil","16:00","serbia"));

document.querySelector("#GrupoA").innerHTML = 
createCard("23/11", "quinta", createGame("brazil","13:00","switzerland"));
// document.querySelector("#GrupoB").innerHTML = 
// document.querySelector("#GrupoC").innerHTML = 
// document.querySelector("#GrupoD").innerHTML = 
// document.querySelector("#GrupoE").innerHTML = 
// document.querySelector("#GrupoF").innerHTML = 
// document.querySelector("#GrupoG").innerHTML = 
// document.querySelector("#GrupoH").innerHTML = 

// document.querySelector("section").innerHTML =

// createCard("23/11", "quinta", resultados("1","2","brazil","serbia"))



