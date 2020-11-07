function addUser(){
    player1_ID = document.getElementById("player_1ID_input").value;
    player2_ID = document.getElementById("player_2ID_input").value;
localStorage.setItem("player1_ID", player1_ID);
localStorage.setItem("player2_ID", player2_ID);
    window.location = "game.html";
}