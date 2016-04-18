
function main() {

    // RESOURCES
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Custom_objects

    
    var BankAccount = function(accountName) {
        
        var _funds = 0;

        this.accountName = accountName;
        
        this.depositFunds = function(amount) {
            _funds += amount;
        }
        
        this.withdrawalFunds = function(amount) {
            _funds -= amount;
        }
        
        this.getBalance = function() {
            return _funds;
        }
        
        return this;
    }


    // BEGINNER level

    
    // Exercise #1-a
    // Create an 'instance' of the BankAccount class and provide it with a name

    
    // Exercise #1-b
    // Display the name of your account


    // Exercise #1-c
    // Deposit 20 dollars into your bank account

    
    // Exercise #1-d
    // Withdrawl 15 dollars into your bank account

    
    // Exercise #1-e
    // Display you current balance on the screen

    

    // INTERMEDIATE level

    
    // Exercise #2-a
    // Create a class called 'Battleship' which contains two properties 'xCoord' and 'yCoord' which indicate the ships current position

    // Exercise #2-b
    // Give the battleship class 4 public methods; moveUp (increments yCoord), moveBack (decrements yCoord), moveRight (increments xCoord), moveLeft (decrements xCoord)

    // Exercise #2-c
    // Give the battleship class a public methods that returns to current coordinates in this format: 'Coords = [y]|[x]'

    
    
    // Exercise #3-a
    // Create an 'instance' of your battleship

    

    // Exercise #3-b
    // Move it to 'Coords = 2|3' and display your coordinates

    

    // Exercise #3-c
    // Move it to 'Coords = -1|2' and display your coordinates



    // EXPERT level


    var BattleshipEncounter = function(ship1, ship2, onProgress, damageLimit, mapLimit) {
        
        var _ship1 = ship1;
        var _ship2 = ship2;
        var _onProgress = onProgress;
        var _damageLimit = damageLimit;
        var _mapLimit = mapLimit;

        var _ship1DamageCnt = 0;
        var _ship2DamageCnt = 0;

        var _gameOver = false;

        var moveShip = function (ship) {
            // get a random number between 1 and 4
            var direction = Math.floor(Math.random() * 4) + 1;

            // the resulting random number determines the ships move direction
            if (direction === 1) {
                if (ship.yCoord >= mapLimit) {
                    ship.moveBack();
                } else {
                    ship.moveUp();
                }
            } else if (direction === 2) {
                if (ship.xCoord >= mapLimit) {
                    ship.moveLeft();
                } else {
                    ship.moveRight();
                }
            } else if (direction === 3) {
                if (ship.yCoord <= -mapLimit) {
                    ship.moveUp();
                } else {
                    ship.moveBack();
                }
            } else if (direction === 4) {
                if (ship.xCoord <= -mapLimit) {
                    ship.moveRight();
                } else {
                    ship.moveLeft();
                }
            }
        }

        var executeAttack = function () {
            // get a random number between 1 and 3
            var bias = Math.floor(Math.random() * 3) + 1;

            // the resulting random number determines the bias as to who wins the attack
            if (bias === 1) {
                return false;
            } 

            return true;
        }

        var doPositionsOverlap = function() {
            var overlap = _ship1.yCoord === _ship2.yCoord && _ship1.xCoord === _ship2.xCoord;

            if (overlap) {
                return true;
            }

            return false;
        }
        
        var moveShip1 = function() {
            moveShip(_ship1);
            _onProgress('Ship 1 moved to ' + _ship1.getCoords());
        }
        
        var moveShip2 = function() {
            moveShip(_ship2);
            _onProgress('Ship 2 moved to ' + _ship2.getCoords());
        }
        
        var ship1Attacks = function() {
            var attackSuccess = executeAttack(_ship1DamageCnt, _ship2DamageCnt);

            if (attackSuccess) {
                _onProgress('Bang! ship 1 successfully attacked ship 2!');
                _ship2DamageCnt++;
                moveShip(_ship1);
            } else {
                _onProgress('Crash! ship 2 deflected an attack from Ship 1!');
                _ship1DamageCnt++;
                moveShip(_ship2);
            }
        }
        
        var ship2Attacks = function() {
            var attackSuccess = executeAttack(_ship2DamageCnt, _ship1DamageCnt);

            if (attackSuccess) {
                _onProgress('Doof! ship 2 successfully attacked ship 1!');
                _ship1DamageCnt++;
                moveShip(_ship2);
            } else {
                _onProgress('Pop! ship 1 deflected an attack from Ship 2!');
                _ship2DamageCnt++;
                moveShip(_ship1);
            }
        }


        this.battle = function () {
            _onProgress('Battle commenced...');

            // create a local variable moveCnt

            // use a while loop with the condition of exit being that the _gameOver variale is set to true
            // increment the moveCnt at the end of each while loop cycle

            // within the while loop, use this expression to determine whos turn it is to move
            // if (moveCnt % 2) { /* ship2's turn */ } else { /* ship1's turn */ }

            // if it's a ships turn perform these actions:
            // 1. move the ship
            // 2. check if the ships positions are overlapped
            // 3. if they overlap then the ship which just moved can attack

            // finally, compare both ships damage with the _damageLimit and end the game if any have reached this limit


            if (_ship1DamageCnt === _damageLimit) {
                _onProgress('Ship 1 sunk!!!');
            } else if (_ship2DamageCnt === _damageLimit) {
                _onProgress('Ship 2 sunk!!!');
            }

        }

        
        return this;
    }

    // Exercise 4
    // Complete the logic in side the BattleshipEncounter class named 'battle', then create the battleships, the encounter and then initiate the battle



    // Exercise 5
    // Now we want to get the ships their own name. Modify the Battleship class to accept a name and modify the BattleshipEncounter class to only refer to the ships by their name


    

}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}