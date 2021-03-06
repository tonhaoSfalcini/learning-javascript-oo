export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Uso indevido. A classe Conta não deve ser instanciada");
        }
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial
    }

    set cliente(cli){
        if(cli instanceof Cliente) this._cliente = cli
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this.saldo;
    }

    depositar(valor){
        console.log(`>> Ordem de depósito de R$ ${valor} da conta ${this.numero} <<`);
        if(valor <= 0){
            console.log(`Valor incorreto.`);
            return;
        }
        this._saldo = this._saldo+valor;
        console.log(`Saldo restante: R$ ${this._saldo}`);
        console.log();
    }
    
    sacar(valor){
        throw new Error("Uso indevido. Este método deverá ser sobrescrito.");
    }

    _sacar(valor, taxa){
        console.log(`>> Ordem de saque de R$ ${valor} da conta ${this.numero} <<`);
        const valorSacado = taxa * valor;
        if(this._saldo < valorSacado){
            console.log("Saldo insuficiente");
            return;
        }
        this._saldo = this._saldo - valorSacado;
        console.log(`Saque efetuado!`);
        console.log(`Saldo restante: R$ ${this._saldo}`);
        console.log();
        return valor;
    }

    teste(){
        console.log(this);
    }
}