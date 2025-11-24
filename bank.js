function createBankAccountWithCounter() {
  let balance = 0;
  let transactionHistory = [];
  let count = 0;

  return {
    deposit(amount) {
      balance += amount;
      transactionHistory.push({ type: "deposit", amount });
      console.log(`Deposited: ${amount}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionHistory.push({ type: "withdraw", amount });
        console.log(`Withdrawn: ${amount}`);
      } else {
        console.log("Insufficient balance");
      }
    },
    getBalance() {
      console.log(`Current balance: ${balance}`);
      return balance;
    },
    getTransactionHistory() {
      console.log(transactionHistory);
      return transactionHistory;
    },
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      console.log("Current count:", count);
      return count;
    }
  };
}
const accountCounter = createBankAccountWithCounter();

accountCounter.deposit(300);        
accountCounter.withdraw(100);        
accountCounter.withdraw(300);        
accountCounter.getBalance();         
accountCounter.getTransactionHistory(); 

accountCounter.increment();         
accountCounter.increment();          
accountCounter.decrement();          
accountCounter.getCount();           

console.log(accountCounter.balance); 
console.log(accountCounter.count);   
