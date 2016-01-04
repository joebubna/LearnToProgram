////////////////////////////////////////
// Example #1
////////////////////////////////////////
var x = 0;

(function level1() {
    x = 1;
    
    (function level2() {
        x = 2;
        
        (function level3() {
            x += 3;
        })();
        
    })();
    
})();

(function b() {
    x += 2;
})();

$('#ex1_varX').text(x);


////////////////////////////////////////
// Example #2
////////////////////////////////////////
x = 3;
(function outer() {
    var x = 20;
    
    (function () {
        x += 10;
    })();
    
    $('#ex2_varX1').text(x); // POINT #1
    
})();

$('#ex2_varX3').text(x); // POINT #2


////////////////////////////////////////
// Example #3
////////////////////////////////////////
x = 2;
(function () {
    y = x; 
})();      
$('#ex3_varY').text(y);


////////////////////////////////////////
// Example #4
////////////////////////////////////////
var x = 0;
var y = 15;

mine();
$('#ex4_varX').text(x);
$('#ex4_varY').text(y);

function mine() {
    x += 9;
    var y = 7;
}


////////////////////////////////////////
// Example #5
////////////////////////////////////////
myVar = [1,2,3];
test( myVar );
$('#ex5').append( myVar.toString() );

function test(item) {
    item[0] = 5;
    $('#ex5').html(item.toString() + '<br>');
}

////////////////////////////////////////
// Example #6
////////////////////////////////////////

function Counter1() {
    var count = 0;
    this.increment = function() {
        count += 1;
    }
    this.decrement = function() {
        count -= 1;   
    }
    this.getValue = function() {
        return count;   
    }
}

function counter2() {
    var count = 0;
    function increment() {
        count += 1;
    }
    function decrement() {
        count -= 1;   
    }
    function getValue() {
        return count;   
    }
    return {
        increment : increment,
        decrement : decrement,
        getValue : getValue
    };
}

function Counter3() {
    this._count = 0;   
}

Counter3.prototype.increment = function () {
    this._count += 1;  
};

Counter3.prototype.decrement = function () {
    this._count -= 1;   
}

Counter3.prototype.getValue = function () {
    return this._count;   
}

// Test
c1 = new Counter1();
c2 = counter2();
c3 = new Counter3();

c1.increment();
c2.increment();
c3.increment();

$('#ex6_counter').html(
    'Counter #1 = ' + c1.getValue() + ', Variable = ' + c1.count + '<br>' +
    'Counter #2 = ' + c2.getValue() + ', Variable = ' + c2.count + '<br>' + 
    'Counter #3 = ' + c3.getValue() + ', Variable = ' + c3._count + '<br>'
);
