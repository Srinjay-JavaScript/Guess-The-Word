var p1_name = localStorage.getItem("player1_ID");
var p2_name = localStorage.getItem("player2_ID");
var p1_score = 0;
var p2_score = 0;


document.getElementById("player_1_name_label").innerHTML = p1_name + ": ";
document.getElementById("player_1_score_label").innerHTML = p1_score;
document.getElementById("player_2_name_label").innerHTML = p2_name + ": ";
document.getElementById("player_1_name").innerHTML = p1_name;
document.getElementById("player_2_name").innerHTML = p2_name;
document.getElementById("player_2_score_label").innerHTML = p2_score;

function send(){
var user_word = document.getElementById("word_User").value;
var word = user_word.toUpperCase();
localStorage.setItem("Word", word);
console.log("WORD IN UPPERCASE: " + word);
word = word.replace(word.charAt(1), "_");
console.log("After removing 1st letter:" + word);
word = word.replace(word.charAt(Math.floor(word.length / 2)), "_");
console.log("After removing 2nd letter:" + word);
word =  word.replace(word.charAt(word.length - 1), "_");
console.log("After removing 3rd letter:" + word);

var htmlCode = "<h1 id='blank_word'> Q. " + word + "</h1> <br> <input id='user_answer' type='text' placeholder='Guess word: '> <br> <button class='btn btn-success' onclick='check()'>Check</button>";
document.getElementById("output").innerHTML = htmlCode;
document.getElementById("word_User").innerHTML = "";



}
function check(){
    var uanswer = document.getElementById("user_answer").value;
    console.log(uanswer);
    var realWord = localStorage.getItem("Word");
    console.log(realWord);
    var p1Turn = document.getElementById("player1_turn").innerHTML;
    if (uanswer.toUpperCase() == realWord){
        if (p1Turn == "Answer Turn -"){
            p1_score = p1_score + 1;
            document.getElementById("player_1_score_label").innerHTML = p1_score;
        }
        else{
            p2_score = p2_score + 1;
            document.getElementById("player_1_score_label").innerHTML = p2_score; 
        }
    }
    else{
        console.log("Incorrect!");
    }
    if (p1Turn == "Question Turn -"){
        document.getElementById("player1_turn").innerHTML = "Answer Turn -";
        document.getElementById("player2_turn").innerHTML = "Question Turn -";
    }
    else{
        document.getElementById("player1_turn").innerHTML = "Question Turn -";
        document.getElementById("player2_turn").innerHTML = "Answer Turn -";
    }
    
}