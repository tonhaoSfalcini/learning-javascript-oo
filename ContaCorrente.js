import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static qtdeContas = 0;

    agencia;
    numero;
    
    
    _cliente;
    _saldo = 0;

    constructor(numero, agencia, cliente){
        this.numero = numero;
        this.agencia = agencia;
        this.cliente = cliente;

        ContaCorrente.qtdeContas++;
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
        console.log(`>> Ordem de saque de R$ ${valor} da conta ${this.numero} <<`);
        if(this._saldo < valor){
            console.log("Saldo insuficiente");
            return;
        }
        this._saldo = this._saldo-valor;
        console.log(`Saque efetuado!`);
        console.log(`Saldo restante: R$ ${this._saldo}`);
        console.log();
        return valor;
    }
    
    transferir(valor, conta){
        console.log(`>> Ordem de transferência de R$ ${valor} da conta ${this.numero}  para a ${conta.numero}<<`);
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferênia realizada com sucesso!`);
        console.log();
    }

}