import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static qtdeContas = 0;
    
    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.qtdeContas++;
    }

    sacar(valor){
        console.log(`>> Ordem de saque de R$ ${valor} da conta ${this.numero} <<`);

        const taxa = 1.1;
        valor = valor*taxa;
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

}