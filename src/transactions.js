export default class Transactions {
    #date;
    #tIn;
    #tOut;
    #balance = 0;

    constructor(date, deposit, withdrawal) {
        this.#date = date;
        this.#tIn = deposit;
        this.#tOut = withdrawal;
    };

    getDate() {
        return this.#date;
    };

    getDepositValue() {
        return this.#tIn;
    };

    getWithdrawalValue() {
        return this.#tOut;
    };

    getTBalance(balance) {
        return this.#balance = balance
    }

}
