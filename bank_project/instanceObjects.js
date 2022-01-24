import { CheckingAccount } from "./BankAccount/CheckingAccount.js"
import { Client } from "./client/Client.js"
import {SavingsAccount} from "./BankAccount/SavingsAccount.js"

const clientCheckint = new CheckingAccount("0332", "1002", new Client("Joao", "092213213"))
const clientSaving = new SavingsAccount("2032", "2220", new Client("Ane", "08823232950"))

clientCheckint.toRecieve(10000)
clientSaving.deposit(1200)
clientSaving.setSavingCash(1000)


console.log(clientCheckint.dataClient.name, clientCheckint.cash)
console.log(clientSaving.savingCash, clientSaving.cash)