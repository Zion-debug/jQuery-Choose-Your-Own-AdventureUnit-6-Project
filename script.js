$(".yes").dblclick(function() {
    $(".joined").show();
    $(".choice-1").text("The race is getting started!");
    $(".next").show();
    $(".yes").hide();
    $(".nah").hide();
});
$(".nah").dblclick(function() {
    $(".nope").show();
    $(".yes").hide();
    $(".nah").hide();
    $(".choice-1").text("Ahh man!");
    $(".reset").show();
});
$(".next").click(function() {
    
    $(".joined").hide();
    $(".yes").hide();
    $(".nah").hide();
    $(".choice-1").text("Starting the race");
    $(".start").slideDown(1000).delay(1);
    $(".next").hide();
    $(".con").slideDown(1000).delay(1);
});
$(".con").click(function() {
    $(".shortcut").show();
    $(".start").hide();
    $(".con").hide();
    $(".choice-1").text("Want to take a shortcut?");
    $(".ans-1").show();
    $(".ans-2").show();

});
$(".ans-1").click(function() {
    $(".ans-1").hide();
    $(".ans-2").hide();
    $(".lose").show();
    $(".shortcut").hide();
    $(".choice-1").text("Lmao, you lose. You came in last place!");
    $(".end").show();
});
$(".ans-2").click(function() {
    $(".ans-1").hide();
    $(".ans-2").hide();
    $(".win").show();
    $(".shortcut").hide();
    $(".choice-1").text("You Win! 1st Place");
    $(".end").show();
});
$(".end").click(function() {
    $(".ans-1").hide();
    $(".ans-2").hide();
    $(".win").hide();
    $(".lose").hide();
    $(".choice-1").text("The End! See you next time!");
    $(".end").hide();
    $(".reset").show();
});
$(".reset").click(function() {
    $(".yes").show();
    $(".nah").show();
    $(".reset").hide();
    $(".choice-1").text("Do you wanna join the race?(Double Click)");
    $(".nope").hide();
    $(".joined").hide();
});