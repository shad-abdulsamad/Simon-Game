
let buttonColor=["red", "blue", "green", "yellow"];
let gamePattern=[];
let userClickedPattern=[];

$(".btn").click(function(){
    let userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);


});
function nextSequene(){
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColor=buttonColor[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    animatePress(randomChosenColor);

   
}
function playSound(name){
     let audio=new Audio("sounds/"+name+".mp3");
     audio.play();
}
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    })(100);
}
