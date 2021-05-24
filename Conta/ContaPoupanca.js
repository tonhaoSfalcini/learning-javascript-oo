import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    sacar(valor){
        const taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}