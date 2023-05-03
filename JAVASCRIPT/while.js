//ciclo while

let l = 50; //contador
while(l >= 30){
    //l--; //l = l - 1 //50 -1 = 49
    document.write("Numero Decrementados: " + l + "<br>");
    l--;
}

let arreglo_sum = [8,52,10,25]; 
//suma del arreglo con while

let m = 0;
let suma = 0;

while(m < arreglo_sum.length){
    /**
     * suma = 0 + 8 = 8
     * 8 = 8 + 52 = 60
     * 60 = 60 + 10 = 70
     * 70 = 70 + 25 = 95
     */
    
    //suma = suma + arreglo_sum[m];
    suma += arreglo_sum[m];
    m++;
}

document.write("La suma del arreglo es: " + suma);
