
export class Client{
   
    static countAccount = 0;
    #name;
    #cpf;


    //construtor para iniciar a classe Client
    constructor(name,cpf){
        this.#name = name
        this.#cpf = cpf
        Client.countAccount+=1
    }

    // comportamentos
    set name(name){
        this.#name = name
    }

    get name(){
        return this.#name
    }

    get cpf(){
        return this.#cpf
    }

    set cpf(cpf){
        if(cpf.length == 9) {
            this.#cpf = cpf
        } 
        else{
            throw `O cpf ${cpf} esta incorreto!`
        }
    }


}

