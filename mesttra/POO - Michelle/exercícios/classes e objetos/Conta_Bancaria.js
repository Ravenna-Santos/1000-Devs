/*
Sistema Bancário:
Criar classes para um sistema bancário simples. Por exemplo, podem criar uma 
classe ContaBancaria com métodos para depositar, sacar e verificar o saldo. 
Em seguida, podem criar objetos representando contas de diferentes clientes.

*/

class ContaBancaria{
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor_deposito){
        this.saldo += valor_deposito
    }

    sacar(valor_saque){
        this.saldo -= valor_saque
    }

    verificar_saldo(){
        console.log(`O saldo de ${this.titular} é R$: ${this.saldo.toFixed(2)}`)
    }


}

const ravenna = new ContaBancaria("Ravenna", 100.50)
ravenna.verificar_saldo()
ravenna.depositar(10)
ravenna.verificar_saldo()
ravenna.sacar(100.10)
ravenna.verificar_saldo()



