import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";


const cco1 = new ContaCorrente();
cco1.numero = 109916;
// cco1.saldo = 4000.0;
cco1.agencia = 3271;

const c1 = new Cliente();
c1.nome = "Tonhao";
c1.cpf = 1061967239;
c1.rg = 1214364;
cco1.cliente = c1;

console.log();
console.log(cco1);
console.log();

let valorSacado;

cco1.depositar(500);
console.log();
valorSacado = cco1.sacar(50);
console.log();
console.log(`Valor sacado: R$ ${valorSacado}`);
console.log();
cco1.depositar(50000);
console.log();
cco1.depositar(-1);

console.log();
console.log();
console.log();

const cco2 = new ContaCorrente();
cco2.agencia = 3271;
cco2.numero = 129054;
// cco2.saldo = 1500.0;

const c2 = new Cliente();
c2.nome = "Thay"
c2.cpf = 812965256;
cco2.cliente = c2;

console.log(cco2);
console.log();

cco2.depositar(500);
console.log();
valorSacado = cco2.sacar(5000);
console.log(`Valor sacado: R$ ${valorSacado}`);
console.log();


cco1.transferir(1000, cco2);
console.log(cco1);
console.log(cco2);