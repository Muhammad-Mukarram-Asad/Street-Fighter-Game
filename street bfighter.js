/*
Create a game that will have characters. Ask user to type any one of the name, if the name not found. Tell user it's invalid. Let the player1's character name is that user typed.
And select any player randomly for player2 from the following
var characters = '‘Ken', ‘Ryu', ‘Ehonda', ‘Blanka']
*/

function part_1() {
    var characters = ["Ken", "Ryu", "Ehonda", "Blanka"];
    var flag = 0;
    var user_name = prompt(" Enter the name of the character: ");

    for (var i = 0; i < characters.length; i++) {
        if (user_name == characters[i]) {
            flag += 1;
            alert(" The user character name is = " + user_name);
        }
        else{
            
        }
    }


    
               

    var cpu_player = characters[Math.floor(Math.random() * characters.length)];

    console.log(" The user player name is = " + user_name);
    console.log(" The cpu player name is = " + cpu_player);

}

/*
Create a function that will return any random action from the followings:
var actions= '‘punch', ‘kick', ‘jump', ‘special attack']
Kick & Punch has 10 points
Jump has 0 points. If any one jump, no player will hurt on anyone's attack.
Special attack has 25 points

Create a game function that will use the above things and should do a fight between 
2 players. Each player has 100% health. The game should run until any player’s health 
decrease to 0. Show the name and character name of the player won! E.g. “Player 2 Ken
 wins!”

*/

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function part_2() {
    var user_player_health = 100;
    var cpu_player_health = 100;

    var actions = ['punch', 'kick', 'jump', 'special attack'];

    var user_player_action = actions[Math.floor(Math.random() * actions.length)];
    var cpu_player_action = actions[Math.floor(Math.random() * actions.length)];


    while ((user_player_health > 0) || (cpu_player_health > 0)) {
        var user_player_action = actions[Math.floor(Math.random() * actions.length)];
        var cpu_player_action = actions[Math.floor(Math.random() * actions.length)];

        alert(user_player_action);
        alert(cpu_player_action);

        sleep(1000);



        if ((user_player_action == "kick") && (cpu_player_action == "punch")) {
            user_player_health -= 10;
            cpu_player_health -= 10;

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

        }

        if ((user_player_action == "punch") && (cpu_player_action == "kick")) {

            console.log(" Before action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

            console.log(" After action: ");

            user_player_health -= 10;
            cpu_player_health -= 10;

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);
        }


        if ((user_player_action == "special attack") &&
            (cpu_player_action == "kick" || cpu_player_action == "punch")) {
            console.log(" Before action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

            cpu_player_health -= 25;

            console.log(" After action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

        }

        if ((cpu_player_action == "special attack") &&
            (user_player_action == "kick" || user_player_action == "punch")) {
            console.log(" Before action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

            user_player_health -= 25;

            console.log(" After action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

        }

        if ((user_player_action == "special attack") && (cpu_player_action == "special attack")) {
            console.log(" Before action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);

            user_player_health -= 25;
            cpu_player_health -= 25;

            console.log(" After action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);
        }

        if ((user_player_action == "kick" || user_player_action == "punch" ||
            user_player_action == "special attack") && (cpu_player_action == "jump")) {
            console.log(" Well played cpu player. Good jump.");

            console.log(" Before action: ")
            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);


            cpu_player_health -= 0;

            console.log(" After action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);


        }

        if ((cpu_player_action == "kick" || cpu_player_action == "punch" ||
            cpu_player_action == "special attack") && (user_player_action == "jump")) {
            console.log(" Well played user player. Good jump.");

            console.log(" Before action: ")
            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);


            user_player_health -= 0;

            console.log(" After action: ")

            console.log(" Now the user player health is = " + user_player_health);
            console.log(" Now the cpu player health is = " + cpu_player_health);


        }

    }
}




