class Cliente{
    nome;
    cpf;
    rg;
    ContaCorrente;
}
class ContaCorrente{
    agencia;
    numero;
    saldo;

    depositar(valor){
        console.log(`>> Ordem de depósito de R$ ${valor} da conta ${this.numero} <<`);
        this.saldo = this.saldo+valor;
        console.log(`Saldo restante: R$ ${this.saldo}`);
    }
    
    sacar(valor){
        console.log(`>> Ordem de saque de R$ ${valor} da conta ${this.numero} <<`);
        if(this.saldo >= valor){
            this.saldo = this.saldo+valor;
            console.log(`Saque efetuado!`);
        }else{
            console.log("Saldo insuficiente");
        }
        console.log(`Saldo restante: R$ ${this.saldo}`);
    }
}

const cco1 = new ContaCorrente();
cco1.numero = 109916;
cco1.saldo = 4000.0;
cco1.agencia = 3271;

const c1 = new Cliente();
c1.nome = "Tonhao";
c1.cpf = 1061967239;
c1.rg = 1214364;
c1.ContaCorrente = cco1;

console.log(c1);

cco1.depositar(500);
cco1.sacar(50);

const cco2 = new ContaCorrente();
cco2.agencia = 3271;
cco2.numero = 129054;
cco2.saldo = 1500.0;

const c2 = new Cliente();
c2.nome = "Thay"
c2.cpf = 812965256;
c2.ContaCorrente = cco2;

console.log(c2);

cco2.depositar(500);
cco2.sacar(5000);