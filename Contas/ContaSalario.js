import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(100, cliente, 0);
    }

    sacar(valor){
        const taxa = 1.01;
        return super._sacar(valor, taxa);
    }
}