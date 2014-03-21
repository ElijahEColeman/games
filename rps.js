$(document).ready(function () {
    $("button").click(function () {
        $("#playerRPS").removeClass();
        $("#computerRPS").removeClass();
        var choices = ["rock", "paper", "scissors"];
        var rand = Math.floor(Math.random() + Math.random() + Math.random());
        var computerChoice = choices[rand];
        var playerChoice = $(this).text().toLowerCase();
        $("#playerRPS").addClass("player_" + playerChoice);
        $("#computerRPS").addClass("computer_" + computerChoice);
        $("#RPSthrow").text(computerChoice);
        $("#playerThrow").text(playerChoice);
        var playerChoiceIndex = choices.indexOf(playerChoice);
        var computerChoiceIndex = choices.indexOf(computerChoice);
        var playerChoiceOperand = Math.pow((playerChoiceIndex * 2), 2);
        if (computerChoiceIndex === playerChoiceIndex) {
            $("#result").text("It's a tie!");
        } else if ((playerChoiceOperand - computerChoiceIndex) === -2 || (playerChoiceOperand - computerChoiceIndex) === 4 || (playerChoiceOperand - computerChoiceIndex) === 15) {
            $("#result").text("You win!");
        } else {
            $("#result").text("RPSBot wins!");
        }
    });
});
