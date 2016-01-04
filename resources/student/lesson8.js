$(function() {
    
    controller  = new Controller();
    view        = new View();
    $('#convert').on('click', controller.run);
      
});

function Controller() {
    
    var self = this;
    var keys = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
    
    this.run = function() {
        // 'this' is the button that calls the function. 'this.id' will return "convert".
        var inputKey    = view.getInputKey();
        var outputKey   = view.getOutputKey();
        var keyDiff     = keys.indexOf(outputKey) - keys.indexOf(inputKey);

        var inputSong   = view.getInputSong();
        var lines = inputSong.split('\n');
        
        for (var i=0; i < lines.length; i++) {
            if (lines[i].charAt(0) === '*')
                lines[i] = self.convert(lines[i], keyDiff);
        }
        
        view.displayResult(lines);
        
    };
    
    this.convert = function(line, keyDiff) {
        
        // Get rid of asterisk at start of line.
        line = line.replace('*', ' ');
        
        // Create empty string we will use to store transposed
        // line of chords in.
        var newLine = '';
        
        // Loop for each character in our chords string...
        for (var i=0; i < line.length; i++) {
            
            // Grab current character in chord string.
            var c = line.charAt(i);
            
            // Grab location of this character in our keys array.
            // Returns -1 if not found.
            var cLoc = keys.indexOf(c);
            
            // If character is a key, do stuff to convert it...
            if (cLoc != -1) {
                
                // If the next character is a '#', like in "F#m7"...
                if (i+1 < line.length && line.charAt(i+1) == '#') {
                    // Convert F# into appropriate output key.
                    newLine += keys[(keys.indexOf(c+'#') + keyDiff) % 12];
                    i++;
                }
                
                // The next character is NOT a '#', like in "Fm7"
                else
                    // Convert F into appropriate output key.
                    newLine += keys[(cLoc + keyDiff) % 12];  
            }
            
            // Character is NOT a key, so just output it back out.
            else 
                newLine += line.charAt(i);
        }
        
        // Return our transposed line of chords.
        return newLine;
    };
        
}


function View() {
    
    this.getInputKey   = function() {
        return $('#songKey option:selected').val();
    };
    
    this.getOutputKey  = function() { 
        return $('#outputKey option:selected').val() 
    };
    
    this.getInputSong  = function() {
        return $('#chords').val();
    };
    
    this.displayResult = function(lines) {
        
        var song = '';
        for (var i=0; i < lines.length; i++) {
            song += lines[i] + '\n';
        }
        $('#song').text(song);
    };
}



function Car() {
    var self = this;
    this.brand = 'Ford';
    this.model = 'Explorer';
    this.year = '2016';
    this.getInfo = function() {
        return self.year + ' ' + self.brand + ' ' + self.model;
    };
}
var car = new Car();
var htmlButton = {
    text : 'Convert Key',
    event : car.getInfo
};