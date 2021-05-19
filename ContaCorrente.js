export class ContaCorrente{
    agencia;
    numero;
    cliente;


    _saldo = 0;

    depositar(valor){
        console.log(`>> Ordem de depósito de R$ ${valor} da conta ${this.numero} <<`);
        if(valor <= 0){
            console.log(`Valor incorreto.`);
            return;
        }
        this._saldo = this._saldo+valor;
        console.log(`Saldo restante: R$ ${this._saldo}`);
    }
    
    sacar(valor){
        console.log(`>> Ordem de saque de R$ ${valor} da conta ${this.numero} <<`);
        if(this._saldo < valor){
            console.log("Saldo insuficiente");
            return;
        }
        this._saldo = this._saldo-valor;
        console.log(`Saque efetuado!`);
        console.log(`Saldo restante: R$ ${this._saldo}`);
        return valor;
    }
    
    transferir(valor, conta){
        console.log(`>> Ordem de transferência de R$ ${valor} da conta ${this.numero}  para a ${conta.numero}<<`);
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        console.log(`Transferênia realizada com sucesso!`);
    }
}