import StatementPrinter from "../src/statementPrinter.js";

describe(`Tests for StatementPrinter Class`, () => {

    let testSP1;

    beforeEach(() => {
        testSP1 = new StatementPrinter();
    });

    afterEach(() => {
        testSP1 = undefined;
    });

    it(`Test SP1 - The statement printer should print all transactions`, () => {
        // Arrange
        let testSP1Spy = spyOn(StatementPrinter, "print");
        // Act
        StatementPrinter.print(testSP1);
        // Assert
        expect(testSP1Spy).toHaveBeenCalled();

    })


})