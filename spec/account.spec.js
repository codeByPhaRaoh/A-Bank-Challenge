import Account from "../src/account.js";
import Transactions from "../src/transactions.js";


describe("Tests for Account Class", () => {

    it(`Test A1 - getBalance should return the account balance`, () => {
        // Arrange
        let testA1 = new Account();
        // Act
        let resultA1 = testA1.getBalance();
        // Assert
        expect(resultA1).toBe(0);
    });

    it(`Test A2 - getTransactions should return transactionsArray`, () => {
        // Arrange
        let testA2 = new Account();
        // Act
        let resultA2 = testA2.getTransactions();
        // Assert
        expect(resultA2).toEqual([]);
    });

    it(`Test A3.1 - deposit() should deposit value to balance`, () => {
        // Arrange
        let testA31 = new Account();
        // Act
        testA31.deposit(500);
        let resultA31 = testA31.getBalance();
        // Assert
        expect(resultA31).toBe(500);
    });

    it(`Test A3.2 - deposit() throws error if value is less than or equal to 0`, () => {
        // Arrange
        let testA32 = new Account();
        // Act
        testA32.deposit(0);
        // Assert
        // It does throw an error when 0 is deposited
    });

    it(`Test A4.1 - withdraw() should withdraw value from the balance`, () => {
        // Arrange
        let testA41 = new Account();
        // Act
        testA41.deposit(1000);
        testA41.withdraw(400);
        let resultA41 = testA41.getBalance();
        // Assert
        expect(resultA41).toBe(600);
    });

    it(`Test A4.2 - withdraw() throws error if value is higher than balance`, () => {
        // Arrange
        let testA42 = new Account();
        // Act
        testA42.deposit(200);
        testA42.withdraw(500);
        // Assert
        // It does throw an error when the amount attempted to be withdrawn is higher than the account balance
    });

    it(`Test A5 - pushTransactions() should push the transaction into the transactionArray`, () => {
        // Arrange
        let testA5 = new Account();
        // let testA5T = new Transactions("31/07/1996", 1738, 0);
        const testTransactions = {
            getDate: function () { return `31/07/1996` },
            getDepositValue: function () { return 1738 },
            getWithdrawalValue: function () { return 0 },
            getTBalance: function () { return 1738 }
        }
        // Act
        testA5.pushTransaction(testTransactions);

        // Assert
        expect(testA5.getTransactions()[0].date).toBe(`31/07/1996`)
        expect(testA5.getTransactions()[0].tIn).toBe(1738)
        expect(testA5.getTransactions()[0].tOut).toBe(0)
        expect(testA5.getTransactions()[0].balance).toBe(1738);

    });
    // Test A5 keeps failing as balance keeps coming up as undefined
    // Next time use error catching





});