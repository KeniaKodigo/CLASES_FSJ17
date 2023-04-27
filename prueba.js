const precioCafe = 25;

const cantidadCafe = prompt("¿Cuántos cafés desea comprar?");

const cantidadCafeEntero = parseInt(cantidadCafe);

let descuento = 0;

if (cantidadCafeEntero >= 5 && cantidadCafeEntero <= 10) {
  descuento = 0.2;
} else if (cantidadCafeEntero > 10 && cantidadCafeEntero <= 20) {
  descuento = 0.4;
} else if (cantidadCafeEntero > 20) {
  descuento = 0.5;
}

const precioTotalConDescuento = cantidadCafeEntero * precioCafe * (1 - descuento);

console.log("Usted compró " + cantidadCafeEntero + " cafés.");
console.log("Su descuento es de " + (descuento * 100) + "%.");
console.log("El precio total con descuento es de $" + precioTotalConDescuento.toFixed(2) + ".");

//let contador = 1;
for(let i=0; i <= 20; i++){
    suma = i + i;
}

array_sum([1,2,3]); //1+2+3 = 6

apellido; //hernandez

nombre; //maria //error
