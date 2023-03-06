import chalk from 'chalk';
const log = console.log;

export default class StatementPrinter {

    static print(transactionArray) {
        log("date        || credit  || debit    || balance");
        for (let i = transactionArray.length - 1; i >= 0; i--) {
            if (transactionArray[i].tIn > 0) {
                log(transactionArray[i].date.toLocaleDateString("en-GB", { timeZone: "UTC" }) + `  || ` + chalk.green(parseFloat(transactionArray[i].tIn).toFixed(2)) + ` ||` + `        ` + `  || ` + parseFloat(transactionArray[i].balance).toFixed(2))
            } else if (transactionArray[i].tOut > 0) {
                log(transactionArray[i].date.toLocaleDateString("en-GB", { timeZone: "UTC" }) + `  || ` + `      ` + `  || ` + chalk.red(parseFloat(transactionArray[i].tOut).toFixed(2)) + `   || ` + parseFloat(transactionArray[i].balance).toFixed(2))
            };

        };
    };
}
