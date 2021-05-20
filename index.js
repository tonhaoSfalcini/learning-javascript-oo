import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

let qtdeContas = 0;

const c1 = new Cliente("Tonhao", 1061967239);
const cco1 = new ContaCorrente(109916, 3271, c1);

console.log(cco1);
console.log();

cco1.depositar(500);
let valorSacado = cco1.sacar(50);

console.log(`Valor sacado: R$ ${valorSacado}`);
console.log();

cco1.depositar(50000);
cco1.depositar(-1);

console.log();
console.log();
console.log();

const c2 = new Cliente("Thay", 812965256);
const cco2 = new ContaCorrente(129054, 3271, c2);

console.log(cco2);
console.log();

cco2.depositar(500);
valorSacado = cco2.sacar(5000);
console.log(`Valor sacado: R$ ${valorSacado}`);
console.log();


cco1.transferir(1000, cco2);
console.log(`Quantidade de contas abertas: ${ContaCorrente.qtdeContas}`);
console.log(cco1);
console.log();
console.log(cco2);