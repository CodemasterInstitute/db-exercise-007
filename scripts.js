
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
    var dansAccount = new BankAccount('Dans Savings Acc.');
    
    // Exercise #1-b
    // Display the name of your account
    outputLine('Account name: ' + dansAccount.accountName);

    // Exercise #1-c
    // Deposit 20 dollars into your bank account
    dansAccount.depositFunds(20);
    
    // Exercise #1-d
    // Withdrawl 15 dollars into your bank account
    dansAccount.withdrawalFunds(15);
    
    // Exercise #1-e
    // Display you current balance on the screen
    var currentBalance = dansAccount.getBalance();
    outputLine('Balance = $' + currentBalance);
    

    // INTERMEDIATE level

    
    // Exercise #2-a
    // Create a class called 'Battleship' which contains two properties 'xCoord' and 'yCoord' which indicate the ships current position

    // Exercise #2-b
    // Give the battleship class 4 public methods; moveUp (increments yCoord), moveBack (decrements yCoord), moveRight (increments xCoord), moveLeft (decrements xCoord)

    // Exercise #2-c
    // Give the battleship class a public methods that returns to current coordinates in this format: 'Coords = [y]|[x]'
    
    var Battleship = function(name) {

        this.name = name;
        
        this.xCoord = 0;
        this.yCoord = 0;
        
        this.moveUp = function() {
            this.yCoord++;
        }
        
        this.moveBack = function() {
            this.yCoord--;
        }
        
        this.moveRight = function() {
            this.xCoord++;
        }
        
        this.moveLeft = function() {
            this.xCoord--;
        }
        
        this.getCoords = function() {
            return 'Coords = ' + this.yCoord + '|' + this.xCoord;
        }
        
        return this;
    }
    
    
    // Exercise #3-a
    // Create an 'instance' of your battleship
    var hmasDan = new Battleship();
    

    // Exercise #3-b
    // Move it to 'Coords = 2|3' and display your coordinates
    hmasDan.moveUp();
    hmasDan.moveUp();
    hmasDan.moveRight();
    hmasDan.moveRight();
    hmasDan.moveRight();
    outputLine(hmasDan.getCoords());
    

    // Exercise #3-c
    // Move it to 'Coords = -1|2' and display your coordinates
    hmasDan.moveBack();
    hmasDan.moveBack();
    hmasDan.moveBack();
    hmasDan.moveLeft();
    outputLine(hmasDan.getCoords());


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

        var attemptAttack = function () {
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
            _onProgress(_ship1.name + ' moved to ' + _ship1.getCoords());
        }
        
        var moveShip2 = function() {
            moveShip(_ship2);
            _onProgress(_ship2.name + ' moved to ' + _ship2.getCoords());
        }
        
        var ship1Attacks = function() {
            var attackSuccess = attemptAttack();

            if (attackSuccess) {
                _onProgress('Bang! ' + _ship1.name + ' successfully attacked ' + _ship2.name + '!');
                _ship2DamageCnt++;
                moveShip(_ship1);
            } else {
                _onProgress('Crash! ' + _ship2.name + ' deflected an attack from ' + _ship1.name + '!');
                _ship1DamageCnt++;
                moveShip(_ship2);
            }
        }
        
        var ship2Attacks = function() {
            var attackSuccess = attemptAttack();

            if (attackSuccess) {
                _onProgress('Doof! ' + _ship2.name + ' successfully attacked ' + _ship1.name + '!');
                _ship1DamageCnt++;
                moveShip(_ship2);
            } else {
                _onProgress('Pop! ' + _ship1.name + ' deflected an attack from ' + _ship2.name + '!');
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

            var moveCnt = 0
            while (!_gameOver) {

                if (moveCnt % 2) {
                    moveShip2();
                    if (doPositionsOverlap()) {
                        ship2Attacks();
                    }
                } else {
                    moveShip1();
                    if (doPositionsOverlap()) {
                        ship1Attacks();
                    }
                }

                moveCnt++

                if (_ship1DamageCnt === _damageLimit || _ship2DamageCnt === _damageLimit) {
                    _gameOver = true;
                }
            }


            if (_ship1DamageCnt === _damageLimit) {
                _onProgress(_ship1.name + ' sunk!!!');
            } else if (_ship2DamageCnt === _damageLimit) {
                _onProgress(_ship2.name + ' sunk!!!');
            }

        }

        
        return this;
    }

    // Exercise 4
    // Complete the logic in side the BattleshipEncounter class named 'battle', then create the battleships, the encounter and then initiate the battle

    var alliedShip = new Battleship("British Ship");
    var axisShip = new Battleship("Italian Ship");

    var encounter = new BattleshipEncounter(alliedShip, axisShip, outputLine, 3, 2);
    
    encounter.battle();


    // Exercise 5
    // Now we want to get the ships their own name. Modify the Battleship class to accept a name and modify the BattleshipEncounter class to only refer to the ships by their name

    var alliedShip = new Battleship("US Ship");
    var axisShip = new Battleship("German Ship");

    var encounter = new BattleshipEncounter(alliedShip, axisShip, outputLine, 3, 2);
    
    encounter.battle();

    

}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}