import { Account } from "./Account.js";

export class SavingsAccount extends Account {

    #depositCash 

    constructor(agency, account, client) {
        super(agency, account, client);
        this.#depositCash = 0;
    }

    setSavingCash(value){
        if(value < 1 || value > super.cash){
            throw 'You need deposit cash for transfer saving account!'
        }
        super.withdraw(value);
        this.#depositCash += value;
        
    }

    get savingCash(){
        return this.#depositCash;
    }

    transfer(user, cash){
        if(this.#cashBank < cash){
            return
        }
        super.withdraw(cash + 20)
        user.deposit(cash)

    }
}

