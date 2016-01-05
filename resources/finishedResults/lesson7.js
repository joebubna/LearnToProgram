///////////////////////////////////////////////////////
// Code that runs as soon as page loads.
///////////////////////////////////////////////////////

$(function() {
    
    // Variables
    db          = new Db();
    model       = new Model(db);
    view        = new View();
    controller  = new Controller();
    lang        = new Language();
    
    // Populate Model
    model.load();
    
    // Populate persons field
    view.loadPersons();
    
    // Event Bindings
    $('#guessButton').on('click', controller.guess);
    
});


///////////////////////////////////////////////////////
// Functions
///////////////////////////////////////////////////////

function guess() {
    
    // Initialize the string we will use for our results.
    //var result = '';
    
    // Obtain DATA (in this case a number) from the user via the UI.
    var number = $('#number').val();
    
    // Check if user's guess is correct or not, and set our Result string appropriately.
    if (number == secretNumber)
        result = 'Correct!';
    else
        result = 'Sorry, guess again!';
    
    // Load our Result string on the page for the user to see.
    $('#guessResult').text(result);
}

///////////////////////////////////////////////////////
// Controller
///////////////////////////////////////////////////////

function Controller() {
    
    this.guess = function() {
        
        var person = view.getPerson();
        var number = view.getNumber();
        var personLang = model.persons[person].lang.toLowerCase();
        var result;       
        
        if ( !$.isNumeric(number) ) {
            result = lang[personLang].notANumber;
        }
        else {
            if (number == model.persons[person].secretNumber) {
                result = lang[personLang].correct;
            }
            else {
                result = lang[personLang].incorrect;   
            }
        }
        view.displayResult( result );
    };
    
}

///////////////////////////////////////////////////////
// Data
///////////////////////////////////////////////////////

function Db() {
    
    this.users = [
        {
            id : 1,
            name: 'Ryan',
            age: 33,
            email: 'ryan1337@gmail.com',
            preferred_language: 'English'
        },
        {
            id: 2,
            name: 'Andrea',
            age: 28,
            email: 'AndreaTheAmazing@gmail.com',
            preferred_language: 'English'
        },
        {
            id: 3,
            name: 'Jose',
            age: 44,
            email: 'JoseGonzoles@gmail.com',
            preferred_language: 'Spanish'
        }
    ];
    
    this.gameData = [
        {
            userId: 1,
            secretNum: 78
        },
        {
            userId: 2,
            secretNum: 22
        },
        {
            userId: 3,
            secretNum: 11
        }
    ];
    
    this.languagesSupported = [ 'English', 'Spanish' ];
}

///////////////////////////////////////////////////////
// Model
///////////////////////////////////////////////////////

function Model(db) {
    
    this.Person = function(id, name, secretNumber, lang) {
        this.id             = id;
        this.name           = name; 
        this.secretNumber   = secretNumber;
        this.lang           = lang;
    };
    
    this.persons = [];
    
    /////////////////////
    // METHODS
    /////////////////////
    
    /**
     * Load data from the database into the model.
     */
    this.load = function() {
        // Load data from Db into Model 
        for (var i=0, len = db.users.length; i < len; i++) {

            // For each user in the database, grab the data we need to create a "Person" object for them.
            var userId          = db.users[i].id;
            var userName        = db.users[i].name;
            var userLanguage    = db.users[i].preferred_language;
            var secretNumberMatches = $.grep(db.gameData, function(userGameData){ 
                                            return userGameData.userId == db.users[i].id; 
                                        });
            var secretNumber = secretNumberMatches[0].secretNum;

            // Create a new person
            var somePerson = new this.Person(userId, userName, secretNumber, userLanguage);

            // Add that person to the list of people
            this.persons.push( somePerson );
        }
    };
}

///////////////////////////////////////////////////////
// View
///////////////////////////////////////////////////////

function View() {
    
    this.loadPersons = function() {
        
        var options = '';
        var len = model.persons.length;
        for (var i=0; i < len; i++) {
            options += "<option value='" + i + "'>" + model.persons[i].name + '</option>';
        }
        $('#person').html( options );
        
    };
    
    this.getNumber = function() {
        return $('#number').val();
    };
    
    this.getPerson = function() {
        return $('#person option:selected').val();
    };
    
    this.displayResult = function(result) {
        $('#guessResult').text( result );  
    };
    
}


function Language() {
    
    this.english = {
        correct :   'Correct!',
        incorrect : 'Sorry, guess again!',
        notANumber : 'You must enter a number!'
    };
    
    this.spanish = {
        correct :   '¡Correcto!',
        incorrect : 'Lo sentimos , piénselo otra vez!',
        notANumber : 'Debe ingresar un número!'
    };
    
}