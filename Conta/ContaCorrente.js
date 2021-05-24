import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static qtdeContas = 0;
    
    constructor(agencia, cliente){
        super(agencia, cliente, 0)
        ContaCorrente.qtdeContas++;
    }

    sacar(valor){
        return super._sacar(valor, 1.1);
    }

}