import {Cliente} from "./Cliente.js";
import { Conta } from "./Contas/Conta.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";

let qtdeContas = 0;

const c1 = new Cliente("Tonhao", 1061967239);
const cco1 = new ContaCorrente(109916, 3271, c1);

console.log(cco1);

const ccp = new ContaPoupanca(1, c1, 60);
ccp.teste();

const cco = new ContaCorrente(3271, c1);
console.log(cco);

const conta = new Conta(2, c1, 150);