export class Cliente{
    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this._cpf = cpf;
        this.nome = nome;

        this._senha = senha;
    }

    get senha(){
        return this._senha;
    }
}