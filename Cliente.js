export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){
        this._cpf = cpf;
        this.nome = nome;
    }

}