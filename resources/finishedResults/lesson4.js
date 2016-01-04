////////////////////////////////////////////////////
// Data
////////////////////////////////////////////////////

// Amount the children intend to spend on Mom's Christmas gift.
var child = {
    matt : 45,
    john : 20,
    susan : 120
};

// The variable we'll hold the result string in.
var result;

////////////////////////////////////////////////////
// If / Else Test #1
////////////////////////////////////////////////////

if (child.matt > child.john) {
    // Matt intends to spend more than John. Let's test if he will spend more than Susan.
    
    if (child.matt > child.susan) {
        // Matt intends to spend more than both John and Susan. Matt wins.
        result = 'Matt intends to spend the most.';
    }
    else {
        // Matt intends to spend more than John, but not more than Susan. Susan wins.
        result = 'Susan intends to spend the most.';
    }
}
else {
    // John intends to spend more than Matt. Let's test if he will spend more than Susan.
    
    if (child.john > child.susan) {
        // John intends to spend more than both Matt and Susan. John Wins. 
        result = 'John intends to spend the most.';
    }
    else {
        // John intends to spend more than Matt, but not more than Susan. Susan wins.
        result = 'Susan intends to spend the most.';
    }
}

// Update our Test Results area with result.
$('#ifElse1').html( result );

////////////////////////////////////////////////////
// If / Else Test #2
////////////////////////////////////////////////////

if (child.matt > child.john) {
    if (child.matt > child.susan)
        result = 'Matt intends to spend the most.';
    else 
        result = 'Susan intends to spend the most.';
}
else if (child.john > child.susan) {
    result = 'John intends to spend the most.';
}
else {
    result = 'Susan intends to spend the most.';  
}

// Update our Test Results area with result.
$('#ifElse2').html( result );

////////////////////////////////////////////////////
// If / Else Test #3
////////////////////////////////////////////////////

if (child.matt > child.john && child.matt > child.susan) {
    result = 'Matt intends to spend the most.';
}
else if (child.john > child.susan && child.john > child.matt) {
    result = 'John intends to spend the most.';
}
else {
    result = 'Susan intends to spend the most.';  
}

// Update our Test Results area with result.
$('#ifElse3').html( result );

////////////////////////////////////////////////////
// For/In Loop
////////////////////////////////////////////////////

var name;
var biggestValue = 0;
var biggestSpender;
result = '';

for (name in child) {
    result += name + ' intends to spend ' + child[name] + '<br>';
    if (child[name] == biggestValue)
        biggestSpender += ' & ' + name;
    else if (child[name] > biggestValue) {
        biggestSpender = name;
        biggestValue    = child[name];
    }
}
result += 'The sibling(s) that intends to spend the most is ' +
            biggestSpender;

$('#forInLoop').html( result );



