
let buttonColor=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];

$(".btn").click(function(){
    let userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);


});
function nextSequene(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio=new Audio("sounds/"+randomChosenColor+".mp3");
    audio.play();
}
