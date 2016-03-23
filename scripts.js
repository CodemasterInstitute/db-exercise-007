
function main() {
    
    var BankAccount = function() {
        
        this._funds = 0;
        
        this.depositFunds = function(amount) {
            this._funds += amount;
        }
        
        this.withdrawalFunds = function(amount) {
            this._funds -= amount;
        }
        
        this.getBalance = function() {
            return this._funds;
        }
        
        return this;
    }
    
    // Exercise #1-a
    // Create an 'instance' of the BankAccount class
    var dansAccount = new BankAccount();
    
    // Exercise #1-b
    // Deposit 20 dollars into your bank account
    dansAccount.depositFunds(20);
    
    // Exercise #1-c
    // Withdrawl 15 dollars into your bank account
    dansAccount.withdrawalFunds(15);
    
    // Exercise #1-d
    // Display you current balance on the screen
    var currentBalance = dansAccount.getBalance();
    outputLine('Balance = $' + currentBalance);
    
    
    // Exercise #2-a
    // Create a class called 'Battleship' which contains to private variables 'x' and 'y' which indicate the ships current position
    
    // Exercise #2-b
    // Give the battleship class 4 methods; moveUp (increments y), moveBack, moveRight (increments x), moveLeft
    
    // Exercise #2-c
    // Give the battleship class a methods that returns to current coordinates in this format: 'Coords = [y]|[x]'
    
    var Battleship = function() {
        
        this._x = 0;
        this._y = 0;
        
        this.moveUp = function() {
            this._y++;
        }
        
        this.moveBack = function() {
            this._y--;
        }
        
        this.moveRight = function() {
            this._x++;
        }
        
        this.moveLeft = function() {
            this._x--;
        }
        
        this.getCoords = function() {
            return 'Coords = ' + this._y + '|' + this._x;
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
        
}

function outputLine(line) {
    
    var output = document.getElementById('output');
        
    var currentHtml = output.innerHTML;
    
    var newHtml = currentHtml + line + '<br />';
    
    output.innerHTML = newHtml;
    
}