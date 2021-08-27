var cuentas = [
{ nombre: "Mali", saldo: 200, password: 'helloworld' },
{ nombre: "Gera", saldo: 290, password: 'l33t' },
{ nombre: "Maui", saldo: 67, password: '123' }
];

class cuentaBancaria{
    // atributos
    constructor(nombre, saldo, password){
        this.nombre = nombre;
        this.saldo = saldo;
        this.password = password;
    }
    // métodos
    getSaldo(){
        return this.saldo
    }
    ingresarSaldo(monto){
        let validar = this.saldo + monto;
        if(validar<990){
            this.saldo += monto;
            return 'Monto ingresado $ ' + monto + '\nNuevo saldo $ ' + this.saldo;
        } else {
            return 'Monto excedido, transacción cancelada';
        }
    }
    retirarSaldo(monto){
        let validar = this.saldo - monto;
        if(validar > 10){
            this.saldo -= monto;
            return 'Monto retirado $ ' + monto + '\nNuevo saldo $ ' + this.saldo;
        } else {
            return 'Monto insuficiente, transacción cancelada';
        }

    }
}
// instancia
const acceso = new cuentaBancaria();

function validarcuenta(cuentas,usuario,contra){
    for(var i=0;i<cuentas.length;i++){
        if(cuentas[i].nombre==usuario&&cuentas[i].password==contra)
        {
            acceso.nombre=usuario;
            acceso.saldo=cuentas[i].saldo;
            acceso.password=contra;

            return true
        }
    }
    return "Datos incorrectos, volver a ingresar"
}

console.log(validarcuenta(cuentas,"Mali","helloworld"))
console.log(acceso)
console.log(acceso.ingresarSaldo(200));
console.log(acceso.retirarSaldo(100));
