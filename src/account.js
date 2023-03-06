import Transactions from "./transactions.js";

export default class Account {
    #balance = 0;
    #transactionArray = [];

    getBalance = () => this.#balance;

    getTransactions = () => this.#transactionArray;


    deposit(tIn) {
        if (tIn <= 0) {
            throw new Error('Unable to process request. \n Please try again.')
        } else {
            return this.#balance += tIn;
        }
    };

    withdraw(tOut) {
        if (this.#balance < tOut) {
            throw new Error('Unable to process request. \n Check your balance and please try again.')
        } else {
            return this.#balance -= tOut;
        }
    };

    pushTransaction(transaction) {
        if (transaction.getDepositValue() > 0) {
            this.#balance += transaction.getDepositValue();
        } else {
            this.#balance -= transaction.getWithdrawalValue();
        }
        this.#transactionArray.push({
            date: transaction.getDate(),
            tIn: transaction.getDepositValue(),
            tOut: transaction.getWithdrawalValue(),
            balance: transaction.getTBalance(this.#balance)
        });
    }

}