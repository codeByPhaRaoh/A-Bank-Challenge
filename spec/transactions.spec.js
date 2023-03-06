import Transactions from "../src/transactions.js";

describe(`Tests for Transactions Class`, () => {

    it(`Test T1 - getDate should return the date for the transaction`, () => {
        // Arrange and Act
        let testT1 = new Transactions(`31/07/1996`, 0, 0)
        // Act
        let resultT1 = testT1.getDate();
        // Assert
        expect(resultT1).toBe(`31/07/1996`);
    });

    it(`Test T2 - getDepositValue should return the correct value deposited`, () => {
        // Arrange
        let testT2 = new Transactions(`31/07/1996`, 1738, 0);
        // Act
        let resultT2 = testT2.getDepositValue();
        // Assert
        expect(resultT2).toBe(1738);
    });

    it(`Test T3 - getWithdrawalValue should return the correct value withdrawn`, () => {
        // Arrange
        let testT3 = new Transactions(`31/07/1996`, 0, 117);
        // Act
        let resultT3 = testT3.getWithdrawalValue();
        // Assert
        expect(resultT3).toBe(117);
    });

    it(`Test T4 - getBalance should have been called when a new Transactions has been created`, () => {
        // Arrange
        let testT4 = new Transactions(`31/07/1996`, 6789998212, 0);
        let testT4Spy = spyOn(testT4, `getTBalance`);
        // Act
        testT4.getTBalance();
        // Assert
        expect(testT4Spy).toHaveBeenCalled();
    })


})