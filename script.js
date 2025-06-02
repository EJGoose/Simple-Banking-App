// a class to hold our bank accounts in
class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    //Define methods of the bank account class to deposit withdraw and check balances of the users accounts. 
    //increase funds
    deposit(amount) {
        this.balance += amount;
        return `£${amount} deposited. Current balance: £${this.balance}`;
    };
    //Check the ammount and then decrease funds in the account if there are enough.
    withdraw(amount) {
        if (amount > this.balance){
            return "Insufficient funds";
        } else {
            this.balance -= amount; 
            return`£${amount} withdrawn. Current balance: £${this.balance}`;
        }
    };
    //check the balance of the account
    checkBalance() {
        return`Account balance for ${this.accountHolder}: ${this.balance}`;
    };
}
const accounts = new Map();
let accountIds = []


//create an instance of the BankAccount class, with random id. 
function createAccount() {
    const accountHolder = document.getElementById('accountHolder').value;
    const initialBalance= parseFloat(document.getElementById('initialBalance').value);
    //create a random 7 digit id, add one to avoid zero
    const accountNumber = Math.floor((Math.random()+1)*1000000);
    //ensure this number is unique
    accountIds.forEach(i => {
        if (i == accountNumber) {
            console.log("conflicting account number")
            createAccount()
        }
    });
    //if id is unique, add it to list of account numbers
    accountIds.push(accountNumber);
    //create a new instance of the bankaccount class
    const newAccount = new BankAccount(accountNumber, accountHolder, initialBalance);
    accounts.set(accountNumber, newAccount);
    document.getElementById('output').innerText = `Account created. Account Number: ${accountNumber}`;
}

//increase the ammount in an account
function deposit() {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById('output').innerText = account.deposit(amount);
    } else {
        document.getElementById('output').innerText = "Account Not Found";
    }
}

//decrease the ammount in an account
function withdraw () {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById('output').innerText = account.withdraw(amount);
    } else {
        document.getElementById('output').innerText = "Account Not Found";
    }
}

//Check the ammount in an account
function checkBalance() {
    const accountNumber = parseInt(document.getElementById('accountNumber').value);
    const account = accounts.get(accountNumber);
    if (account) {
        document.getElementById('output').innerText = account.checkBalance(amount);
    } else {
        document.getElementById('output').innerText = "Account Not Found";
    }
}