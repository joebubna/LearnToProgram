//////////////////////////////////////////////
// For Loop Example
//////////////////////////////////////////////

var numList = [23, 45, 11, 73, 31, 42, 17, 14, 97, 66, 58, 90, 79, 12, 4];
var largest = 0;

for (var i=0; i < numList.length; i++) {
    if (numList[i] > largest)
        largest = numList[i];
}

$('#forLoop').text( largest );

//////////////////////////////////////////////
// While Loop Example
//////////////////////////////////////////////

var command = '';
var mapWidth = $('#map tr:eq(0) td').length;
var mapHeight = $('#map tr').length;

var player = {
    name: 'Bob',
    x : 0,
    y : 0
};

function play2() {

    // Reset command variable
    command = '';
    
    // Position player at starting point
    $('#map tr:eq(' + player.y + ') td:eq(' + player.x + ')').css('backgroundColor', 'black');
    player.x = 0;
    player.y = 0;
    $('#map tr:eq(' + player.y + ') td:eq(' + player.x + ')').css('backgroundColor', 'blue');
    
    // Start main game loop
    while (command != 'quit') {
        command = prompt('Please enter a command:');

        if (command == 'up')
            move(player.x, player.y - 1);
        else if (command == 'down')
            move(player.x, player.y + 1);
        else if (command == 'left')
            move(player.x - 1, player.y);
        else if (command == 'right')
            move(player.x + 1, player.y);

    }
}

function move(x,y) {
    
    // Prevent player from going off the map.
    if (x < 0)
        x = 0;
    if (x >= mapWidth)
        x = mapWidth-1;
    if (y < 0)
        y = 0;
    if (y >= mapHeight)
        y = mapHeight-1; 
    
    // Change background color of player's previous position back to default black.
    $('#map tr:eq(' + player.y + ') td:eq(' + player.x + ')').css('background', 'black');
    
    // Update background of player's new position to show that the player is there.
    $('#map tr:eq(' + y + ') td:eq(' + x + ')').css('background', 'blue');
    
    // Update player's location in player object
    player.x = x;
    player.y = y;
}

function play() {
    
    // Position player at starting point
    $('#map tr:eq(' + player.y + ') td:eq(' + player.x + ')').css('backgroundColor', 'black');
    player.x = 0;
    player.y = 0;
    $('#map tr:eq(' + player.y + ') td:eq(' + player.x + ')').css('backgroundColor', 'blue');
    
    // Register a keypress event handler
    $( document ).on('keydown', function(keyboardEvent) {
        
        // Grab keycode pressed
        var command = keyboardEvent.which;

        // Execute Keyboard command if applicable
        if (command == 38)
            move(player.x, player.y - 1); // UP
        else if (command == 40)
            move(player.x, player.y + 1); // DOWN
        else if (command == 37)
            move(player.x - 1, player.y); // LEFT
        else if (command == 39)
            move(player.x + 1, player.y); // RIGHT
        else
            // Exit this function early if the key pressed was NOT an Arrow key.
            // We don't want to prevent the normal behavior on other keys.
            return true;      
        
        // Prevent Arrow key default scrolling behavior
        keyboardEvent.preventDefault();
    });
    
}