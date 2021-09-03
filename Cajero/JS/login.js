var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '1' }
];


class cuentaBancaria {
    // atributos
    constructor(nombre, saldo, password) {
        this.nombre = nombre;
        this.saldo = saldo;
        this.password = password;
    }
    // métodos
    getSaldo() {
        return ' $ ' + this.saldo
    }
    ingresarSaldo(monto) {
        let validar = this.saldo + monto;
        if (validar <= 990) {
            this.saldo += monto;
            return '<p style="font-size: 50px; color: #0033a1;"> Monto ingresado $ ' + monto + '<br> Nuevo saldo <br> $ ' + this.saldo + '</p>';
            //return 'Monto ingresado $ ' + monto + '\nNuevo saldo $ ' + this.saldo;
        } else {
            return '<p style="font-size: 50px; color: #e4954c;">Monto excedido, transacción cancelada</p>';
        }

    }
    retirarSaldo(monto) {

        let validar = this.saldo - monto;
        if (validar >= 10) {
            this.saldo -= monto;
            return '<p style="font-size: 50px; color: #0033a1;"> Monto retirado $ ' + monto + '<br> Nuevo saldo <br> $ ' + this.saldo + '</p>';
            //return 'Monto retirado $ ' + monto + '\nNuevo saldo $ ' + this.saldo;
        } else {
            return '<p style="font-size: 50px; color: #e4954c;">Monto insuficiente, transacción cancelada</p>';
        }

    }
}
// instancia
const acceso = new cuentaBancaria();



function validarcuenta() {
    let contra = document.getElementById('password').value;
    let usuario = document.getElementById('user').value;
    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre == usuario && cuentas[i].password == contra) {
            acceso.nombre = usuario;
            acceso.saldo = cuentas[i].saldo;
            acceso.password = contra;
            console.log(acceso)
            //window.location.assign("index.html")
            document.querySelector('.login-container-general').style.display = 'none';
           // document.getElementById('woman').style.display = 'none';
            document.getElementById('login').style.display = 'none';

            document.getElementById('bienvenida').style.display = 'block';

            document.getElementById('nombreUsuario').innerHTML = acceso.nombre;
            document.getElementById('saldo_usuario').innerHTML = acceso.getSaldo();
            document.getElementById('saldofijo').innerHTML = acceso.getSaldo();
            return true;
            return alert("Ingreso")
        }
    }
    return alert("Datos incorrectos, volver a ingresar")
}



function consultarSaldo() {
    console.log(acceso)
    document.getElementById('consultarSaldo').style.display = 'block';
    document.getElementById('ingresarMonto').style.display = 'none';
    document.getElementById('retirarMonto').style.display = 'none';
}
function ingresarMonto() {
    console.log(acceso)
    document.getElementById('consultarSaldo').style.display = 'none';
    document.getElementById('ingresarMonto').style.display = 'block';
    document.getElementById('retirarMonto').style.display = 'none';
    document.getElementById('confirmacion_ingresoMonto').style.display = 'none';
    document.getElementById('confirmacion_retirarMonto').style.display = 'none';
}
function retirarMonto() {
    console.log(acceso)
    document.getElementById('consultarSaldo').style.display = 'none';
    document.getElementById('ingresarMonto').style.display = 'none';
    document.getElementById('retirarMonto').style.display = 'block';
    document.getElementById('confirmacion_ingresoMonto').style.display = 'none';
    document.getElementById('confirmacion_retirarMonto').style.display = 'none';
}
function operacion_retirarMonto() {
    let monto_retirar = document.getElementById('input-number_retirar').value;
    if (monto_retirar > 0) {
        document.getElementById('confirma_retiro').innerHTML = acceso.retirarSaldo(Number(monto_retirar));
        document.getElementById('retirarMonto').style.display = 'none';
        document.getElementById('confirmacion_retirarMonto').style.display = 'block';
        document.getElementById('ingresarMonto').style.display = 'none';
        document.getElementById('confirmacion_ingresoMonto').style.display = 'none';
        document.getElementById('saldofijo').innerHTML = acceso.getSaldo();
    } else {
        alert("Ingresa montos validos")
    }

}
function operacion_ingresarMonto() {
    let monto_ingresar = document.getElementById('input-number_ingresar').value;
    if (monto_ingresar > 0) {
        document.getElementById('confirma_ingreso').innerHTML = acceso.ingresarSaldo(Number(monto_ingresar));
        document.getElementById('ingresarMonto').style.display = 'none';
        document.getElementById('confirmacion_ingresoMonto').style.display = 'block';
        document.getElementById('retirarMonto').style.display = 'none';
        document.getElementById('confirmacion_retirarMonto').style.display = 'none';
        document.getElementById('saldofijo').innerHTML = acceso.getSaldo();
    } else {
        alert("Ingresa montos validos")
    }
}
function Cancelar() {
    console.log(acceso)
    document.getElementById('consultarSaldo').style.display = 'block';
    document.getElementById('ingresarMonto').style.display = 'none';
    document.getElementById('retirarMonto').style.display = 'none';
    document.getElementById('saldo_usuario').innerHTML = acceso.getSaldo();
    document.getElementById('saldofijo').innerHTML = acceso.getSaldo();
}

function Salir() {
    // window.location.assign("login.html")
    // FUNCION PARA ALMACENAR LOS DATOS DE MANERA MOMENTANEA
    for(var i=0;i<cuentas.length;i++){
        if(cuentas[i].nombre==acceso.nombre){
            cuentas[i].saldo=acceso.saldo;
        }
    }
    
    document.querySelector('.login-container-general').style.display = 'grid';
   
   // document.getElementById('woman').style.display = 'block';
    document.getElementById('login').style.display = 'grid';
  
    document.getElementById('bienvenida').style.display = 'none';
    document.getElementById('consultarSaldo').style.display = 'none';
    document.getElementById('ingresarMonto').style.display = 'none';
    document.getElementById('retirarMonto').style.display = 'none';
    document.getElementById('confirmacion_ingresoMonto').style.display = 'none';
    document.getElementById('confirmacion_retirarMonto').style.display = 'none';  
}

/*    function validarcuenta(cuentas,usuario,contra){
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
    */
/*     console.log(validarcuenta(cuentas,"Mali","helloworld"))
    console.log(acceso)
    console.log(acceso.ingresarSaldo(200));
    console.log(acceso.retirarSaldo(100));
     */

