var playerName = "javi"//window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
/*console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
  console.log(enemyNames[i]);
  console.log(i);
  console.log(enemyNames[i] + " is at " + i + " index");
}*/
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
//"WIN" -  Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
//"LOSE" -  PLayer robot's health is zero or less

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth, playerMoney);//

var fight = function (enemyName) {
  //repeat and execute as long as the enemy robot is alive
  while (enemyHealth > 0 && playerHealth > 0) {

    // skip fight prompt
      var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to continue.");

      // if player choses to skip
      if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          
          //award player money for winning
          playerMoney = playerMoney + 20;

          //leave while() loop since enemy is dead
          break;
        } 
          else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
          
        // check player's health
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          //leave while() loop if player is dead
          break;
        } 
        else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
        }

      // if player choses to fight, then fight
      if (promptFight === "fight" || promptFight === "FIGHT") {   
    }
  }
}     
        /*/ if no (false), ask question again by running fight() again
        else {
          fight();
        }
      }
      else {
        window.alert("You need to pick a valid option. Try again!");
      }*/
//function to start new game
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (var i = 0; i < enemyNames.length; i++) {
  //debugger;
    //call fight function with enemy robot
    if (playerHealth > 0) {
      //lets user know what round they are in
      window.alert("welcome to Robot Gladiators! Round " + (i + 1));

      //pick a new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      //reset enemyhealth before starting new fight
      enemyHealth = 50;
  
      //debugger;
  
      //pass the pickedenemyName variable's valiue into the fight function, where it will assume the enemyName parameter
      fight(pickedEnemyName);

      //if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.lenght - 1){
        shop();
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  
  }
  // play again
  endGame();
  //startGame();
};

//start the game when the page loads
//startGame();

//function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle");
  }

  //ask player if they'd like to play again
  var playerAgainConfirm = window.confirm("Would you like to play again?");

  if (playerAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }

  //startGame();
  //endGame();
};
//endGame();
var shop= function() {
  console.log("entered the shop");
}

startGame();
//endGame();