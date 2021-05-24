import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{

    teste(){
        super.teste();
        console.log(this);
    }
}