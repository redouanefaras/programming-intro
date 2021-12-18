var dzScore = document.getElementById("scoreDZ")
var tnScore = document.getElementById("scoreTN")
var prdbtn = document.getElementById("prdbtn")


 function predictScoreDz() {
     return Math.round(Math.random()*4)
 }
     
 function predictScoreTn() {
    return Math.round(Math.random()*4)
}

dzScore.style.textAlign = "center"
dzScore.style.fontSize = "30px"
tnScore.style.textAlign = "center"
tnScore.style.fontSize = "30px"
dzScore.innerHTML = "0"
tnScore.innerHTML = "0"

function btnClicked(){
    var dz = predictScoreDz();
    var tn = predictScoreTn();
    dzScore.innerHTML = dz;
    tnScore.innerHTML = tn;
}


prdbtn.addEventListener("click", btnClicked)