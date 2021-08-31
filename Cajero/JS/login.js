var cuentas = [
{ nombre: "Mali", saldo: 200, password: 'helloworld' },
{ nombre: "Gera", saldo: 290, password: 'l33t' },
{ nombre: "Maui", saldo: 67, password: '123' }
];


function validarcuenta(cuentas,usuario,contra){
    for(var i=0;i<cuentas.length;i++){
        if(cuentas[i].nombre==usuario&&cuentas[i].password==contra)
        {
            return true
        }
    }
    return "Datos incorrectos, volver a ingresar"
}
console.log(validarcuenta(cuentas,"Mali","helloworl"))

