import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";

let qtdeContas = 0;

const c1 = new Cliente("Tonhao", 1061967239);
const cco1 = new ContaCorrente(109916, 3271, c1);

console.log(cco1);

const ccp = new ContaPoupanca(1, c1, 60);
ccp.sacar(10);
ccp.teste();

const cco = new ContaCorrente(3271, c1);
cco.depositar(500);
cco.sacar(100);

console.log(cco);