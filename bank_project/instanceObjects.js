import { CheckingAccount } from "./BankAccount/CheckingAccount.js"
import { Client } from "./client/Client.js"

const clientCheckint = new CheckingAccount("0332", "1002", new Client("Joao", "092213213"))

clientCheckint.toRecieve(10000)

console.log(clientCheckint.dataClient.name, clientCheckint.cash)
