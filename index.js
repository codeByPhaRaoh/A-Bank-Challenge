import Account from './src/account.js';
import StatementPrinter from "./src/statementPrinter.js";
import Transactions from './src/transactions.js';


let account = new Account();
let t1 = new Transactions(new Date(2012, 0, 10), 1000, 0);
let t2 = new Transactions(new Date(2012, 0, 13), 2000, 0);
let t3 = new Transactions(new Date(2012, 0, 14), 0, 500);


account.pushTransaction(t1);
account.pushTransaction(t2);
account.pushTransaction(t3);

StatementPrinter.print(account.getTransactions())
