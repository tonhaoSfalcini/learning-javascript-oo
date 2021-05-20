import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cco1 = new ContaCorrente();
cco1.numero = 109916;
cco1.agencia = 3271;
cco1.cliente = new Cliente("Tonhao", 1061967239);

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

const cco2 = new ContaCorrente();
cco2.agencia = 3271;
cco2.numero = 129054;
cco2.cliente = new Cliente("Thay", 812965256);

console.log(cco2);
console.log();

cco2.depositar(500);
valorSacado = cco2.sacar(5000);
console.log(`Valor sacado: R$ ${valorSacado}`);
console.log();


cco1.transferir(1000, cco2);
console.log(cco1);
console.log();
console.log(cco2);