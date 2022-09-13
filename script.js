class billete {
    constructor(valor, cantidad)
    {
        this.valor = valor;
        this.cantidad = cantidad;    
    }
}



function comprobarInput(){
    var resultadoChild = document.getElementById("resultado");
    var dinero = valorInput.value;
    document.getElementById('resultado').innerHTML = '';
    

    if (dinero === "") {
        valorInput.setAttribute("placeholder", "Escriba un valor");
        resultadoChild.innerHTML = ("Escriba un valor");
    }
    else if (dinero <= 0) {
        valorInput.setAttribute("placeholder", "Escriba un valor");
        resultadoChild.innerHTML = ("Escriba un valor positivo");
    }
    else if (dinero > cantidadCaja) {
        resultadoChild.innerHTML = ("No hay disponible esa cantidad");
    }
    else if (dinero % 10 !== 0) {
        resultadoChild.innerHTML = ("Inserte un valor múltiplo de 10");
    }
    else {
        entregarDinero();
    }
}
function entregarDinero() {

    var resultadoChild = document.getElementById("resultado");
    var dinero = valorInput.value;

    for (var bi of caja) {
        
        if (dinero > 0) {
            division = Math.floor(dinero / bi.valor);
            if (division > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = division;
            }
        
        
        entregado.push (new billete (bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);
        console.log(entregado);
        }
    
    }

        
        
            for (var e of entregado) {
                if(e.cantidad>0)
            {
            resultadoChild.innerHTML += "Recibio " + e.cantidad + " billetes de $" + e.valor + "<br/>";
            cantidadCaja = cantidadCaja - (e.valor* e.cantidad);
            cantidadCajero.innerHTML = "Cantidad Disponible " + cantidadCaja;
            
            }

            
        }
        entregado.splice (0, 3);
        
}
var caja = [];
var entregado = [];
caja.push (new billete (50, 5));
caja.push (new billete (20, 3));
caja.push (new billete (10, 2));
var cantidadCaja = ((caja[0].valor * caja[0].cantidad) + (caja[1].valor * caja[1].cantidad) + (caja[2].valor * caja[2].cantidad));
var resultadoChild = document.getElementById("resultado");
var dinero = valorInput.value;
var division = 0;
var papeles = 0;
cantidadCajero.innerHTML = "Cantidad Disponible " + cantidadCaja;


var boton = document.getElementById("boton");
boton.addEventListener("click", comprobarInput);


