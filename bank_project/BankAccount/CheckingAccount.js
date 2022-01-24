import { Account } from "./Account.js";

export class CheckingAccount extends Account {
   
    constructor(agency, account, cliente){
       super(agency, account, cliente)
    }

    toRecieve(cash){
        this.deposit(cash)
    }
    
}