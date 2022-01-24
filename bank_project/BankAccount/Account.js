export class Account{
    #agency;
    #account;
    #cashBank;
    #client;


    constructor(agency, account, client){
        this.#agency = agency
        this.#account = account
        this.#cashBank = 0
        this.#client = client
    }


    get dataClient(){
        return this.#client
    }

    get dataAccount(){
        return `Data account: \n Agency: ${this.#agency} \n Account: ${this.#account}`
    }

    deposit(value){
        if(value <= 0) {  return }

        this.#cashBank += value
    }

    withdraw(value){
        if(this.#cashBank >= value){
            this.#cashBank -=value
            return this.#cashBank - value
        }
        return 0;
        
    }


    get cash(){
        return this.#cashBank
    }

    transfer(user, cash){
        if(this.#cashBank < cash){
            return
        }
        this.withdraw(cash)
        user.deposit(cash)
    }
    
    
}