"use strict";
{
  const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  const account = {
    balance: 0,
    transactions: [],
    createTransaction(amount, type) {
      return { id: this.transactions.length + 1, amount, type };
    },
    deposit(amount) {
      this.balance += amount;
      let transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(transaction);
    },
    withdraw(amount) {
      this.balance < amount &&
        console.log("Cнятие такой суммы не возможно, недостаточно средств.");
      if (this.balance > amount) {
        this.balance -= amount;
        this.transactions.push(
          this.createTransaction(amount, Transaction.WITHDRAW)
        );
      }
    },
    getBalance() {
      return this.balance;
    },
    getTransactionDetails(id) {
      for (this.transaction of this.transactions) {
        if (this.transaction.id === id) {
          return this.transaction;
        }
      }
    },
    getTransactionTotal(type) {
      let total = 0;
      for (this.transaction of this.transactions) {
        this.transaction.type === type && (total += this.transaction.amount);
      }
      return total;
    },
    getTransactionTotal1(type) {
      for (this.transaction of this.transactions)
        if (this.transaction.type === type && console.log(type));
    },
  };
  account.deposit(575);
  console.log(account.getBalance());
  account.deposit(45);
  console.log(account.getBalance());
  account.withdraw(7026);
  console.log(account.getBalance());
  account.withdraw(34);
  console.log(account.getBalance());
  account.withdraw(800);
  console.log(account.getTransactionDetails(3));

  console.log(
    `Withdrawals: ${account.getTransactionTotal(Transaction.WITHDRAW)}`
  );
  console.log(`Deposits: ${account.getTransactionTotal(Transaction.DEPOSIT)}`);
  console.table(account.transactions);
}

// {
// /*
// { * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   balance: 0,
//   // История транзакций
//   transactions: [
//   ],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) { { amount, type, id: this.transactions.length + 1 } },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */

    // transaction(amount, type){
    //   if (type === Transaction.DEPOSIT) {this.balance += amount}
    //   if (type === Transaction.WITHDRAW) {(amount > this.balance) ? console.log('Malo babok') : this.balance -= amount}
    // },

//    /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.

//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     console.table(this.balance);

//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     for (const this.transaction of this.transactions)
//     if ((transaction.type === type) && console.log(type));
//   },
// };

// account.getBalance()
// account.transaction(500, Transaction.DEPOSIT)
// account.transaction(100, Transaction.WITHDRAW)
// account.transaction(800, Transaction.WITHDRAW)
// account.transaction(1500, Transaction.DEPOSIT)
// account.getBalance()
// account.getTransactionTotal(Transaction.WITHDRAW)
// account.getTransactionTotal(Transaction.DEPOSIT)
// account.createTransaction( 1 ,2 )
// console.log();

// }
{
  // const Transaction = {
  //   DEPOSIT: 'deposit',
  //   WITHDRAW: 'withdraw',
  // };
  // /*
  //  * Каждая транзакция это объект со свойствами: id, type и amount
  //  */
  // const account = {
  //   balance: 0,
  //   transactions: [],
  //   tCounter: 0,
  //   createTransaction(amount, type) {
  //       if(type=== 'deposit' ){
  //           this.deposit(amount);
  //       }else if(type === 'withdraw'){
  //           this.withdraw(amount);
  //       }
  //       const currentTransaction = {id:this.tCounter, type:type, balance:this.balance};
  //       this.transactions.push(currentTransaction);
  //   },
  //   // deposit(amount) {
  //   //     this.balance += amount;
  //   //     this.tCounter ++;
  //   //     const currentBalance = this.balance;
  //   // },
  //   // withdraw(amount) {
  //   //     this.balance -= amount;
  //   //     this.tCounter ++;
  //   // },
  //   getBalance() {
  //       console.log(this.balance);
  //   },
  //   getTransactionDetails(id) {
  //       console.log(this.transactions[id-1]);
  //   },
  //   getTransactionTotal(type) {
  //       for(const transaction of this.transactions){
  //           if(transaction.type === type){
  //               console.log(transaction);
  //           }
  //           // console.log(transaction);
  //       }
  //   },
  // };
  // account.createTransaction(500,'deposit');
  // account.createTransaction(300,'withdraw');
  // account.createTransaction(500,'deposit');
  // account.createTransaction(100,'withdraw');
  // account.createTransaction(700,'deposit');
  // console.log(account.balance);
  // console.table(account.transactions);
  // account.getBalance();
  // //   account.getTransactionDetails(2);
  // account.getTransactionTotal('withdraw');
}
