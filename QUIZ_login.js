function adduser(){
    var player1_name=document.getElementById("p1_name_input").value;
    var player2_name=document.getElementById("p2_name_input").value;
    localStorage.setItem("player_name1",player1_name);
    localStorage.setItem("player_name2",player2_name);
    window.location="QUIZ_page.html";
}

