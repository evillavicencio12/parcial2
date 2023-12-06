//const Leer = require('prompt-sync')()
class Ejercicio1 {
    Ejercicio1(){
        let a = 3, b = 7, r = 0
        r = 2 * a + b - a % 3
        //console.log("El resultado es ", r)
        document.getElementById("Respuesta1").innerText = r;
        

    }
    Ejercicio2(){
        let a = 10, b = 4, z = 0
        z = a * b + 3 % a + b
        document.getElementById("Respuesta2").innerHTML = z;
    }
    Ejercicio3(){
        let a = 6, b = 2, w = 0
        w = a - b + 2 * a % b
        document.getElementById("Respuesta3").innerHTML = w;
    }
    Ejercicio4(){
        let a = 8, b = 5, v = 0
        v = 2 * b + a / 2 + 4 * b % a
        document.getElementById("Respuesta4").innerHTML = v;
    }
    Ejercicio5(){
        let a = 12, b = 9, u = 0
        u = b - a + 3 * a % b
        document.getElementById("Respuesta5").innerHTML = u;
    }

    Ejercicio6(){
        let resultante = 0
        resultante = (5 + 3 * 2) + 9 > 3 * 5  * 14 % 3
        document.getElementById("Respuesta6").innerHTML = resultante;
    }

    Ejercicio7(){
        let resultante = 0
        resultante = 2 * ( 4 - 10 + 8) / 2 * 36 * (1 / 2)
        document.getElementById("Respuesta7").innerHTML = resultante;

    }

    Ejercicio8(){
        let resultante = 0
        resultante = 260 / 12 + 54 % 3 - 85 % 7
        document.getElementById("Respuesta8").innerHTML = resultante;
    }

    Ejercicio9(){
        let resultante = 0
        resultante = ( 48 < 2 * 3 ) || ( 2 * 7 < 12 )
        document.getElementById("Respuesta9").innerHTML = resultante;
    }

    Ejercicio10(){
        let resultante = 0
        resultante = ( ( 8 > 2 ) || ( 932 < 23 ) ) && 4 == 2
        document.getElementById("Respuesta10").innerHTML = resultante;
    }

    //apartir de aqui son los ejercicios tochos, del 11 al 60....
    Ejercicio11(){
        let n1, n2, rr;
        n1=parseInt(document.getElementById("n1").value);
        n2=parseInt(document.getElementById("n2").value);

            rr=n1 + n2;
            document.getElementById("Respuesta11").innerHTML = rr;
        
        
    }

    //Ejercicio 12
    Ejercicio12(){
        let n1, n2, rr;
        n1 = parseFloat(document.getElementById("n1").value);
        n2 = parseFloat(document.getElementById("n2").value);
        rr = (n1 * n2) / 2;
        console.log(rr)
        document.getElementById("Respuesta12").innerHTML = (rr)
        


    }

    Ejercicio13(){
        let n1, rr;
        n1 = parseInt(document.getElementById("n1").value);
        rr = n1 % 2;
        if (rr == 0) {
            console.log("Es par")
            document.getElementById("Respuesta13").innerHTML = n1 + " es par";
        }else {
            console.log("Impar")
            document.getElementById("Respuesta13").innerHTML = n1 + " es impar";
        }
    }
    Ejercicio14(){
        //Declaramos variables
var operandoa;
var operandob;
var operacion;
function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  }
  //Eventos de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    operandob = resultado.textContent;
    resolver();
}
function limpiar(){
    resultado.textContent = "";
  }
  
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}

}
   
Ejercicio15(){
    let vi, vf, tabla, resp, contador;
    vi = 0; vf = 0; tabla = 0; resp = 0;
    // vi = parseInt(Math.random() * 10);
    // vf = parseInt(Math.random() * 100);
    // tabla = parseInt(Math.random() * 20);
    vi = parseInt(document.getElementById("desde").value)
    vf = parseInt(document.getElementById("hasta").value)
    tabla = parseInt(document.getElementById("tabla").value)
    contador = vi;
    document.getElementById("resp").innerHTML=`Tabla del ${tabla}`
    while (contador <= vf) {
        resp = contador * tabla;
        console.log(`${contador} * ${tabla} = ${resp}`)
        document.getElementById("resp").innerHTML += `<br>${contador} * ${tabla} = ${resp} `
        contador= contador+1
        
    }

}
    //-------------------------------------------------------------
    copiarPalabra(){
        let palabra1, palabra2, palComp;
        palabra1 = ""; palabra2 = "";
        palabra1 = document.getElementById("palabra1").value;
        palabra2 = document.getElementById("palabra2").value;
        palComp = palabra1 + " " + palabra2
        console.log(`${palabra1} + ${palabra2} = ${palComp}`);
        document.getElementById("resp").innerHTML = `Su palabra nueva es: ${palComp}`;
    }
    mayorDeTres(){
        let num1, num2, num3;
        num1 = 0; num2 = 0; num3 = 0;
        num1 = parseInt(document.getElementById("num1").value)
        num2 = parseInt(document.getElementById("num2").value)
        num3 = parseInt(document.getElementById("num3").value)
        if(num1 > num2 && num1 > num3){
            document.getElementById("resp").innerHTML = `El número mayor es: ${num1}`;
        } else if (num2 > num3 && num2 > num1){
            document.getElementById("resp").innerHTML = `El número mayor es: ${num2}`;
        }else if (num3 > num2 && num3 > num1){
            document.getElementById("resp").innerHTML = `El número mayor es: ${num3}`;
        }
    }    
    edadMinima(){
        let edad;
        edad = 0;
        edad = parseInt(document.getElementById("edad").value)
        if(edad >= 18){
            document.getElementById("resp").innerHTML = "Tienes edad para votar"
        }
        else{
            document.getElementById("resp").innerHTML = "No tienes edad para votar"
        }
    }
    calculadoraBMI(){
        let peso, altura, bmi;
        peso = 0; altura = 0; bmi = 0;
        altura = parseInt(document.getElementById("altura").value);
        peso = parseInt(document.getElementById("peso").value);
        bmi = peso / (altura * altura)
        console.log(`${peso} / ${altura} * ${altura} = ${bmi}`)
        document.getElementById("resp").innerHTML = `Su BMI es de: ${bmi}`
        if (bmi <= 24.9 && bmi >= 18.5){
            document.getElementById("resp").innerHTML += `<br>Su peso es saludable</br>`
        }
        else{
            document.getElementById("resp").innerHTML += `<br>Su peso no es saludable</br>`
        }
    }
    posit(){
        let num;
        num = 0;
        num = parseInt(document.getElementById("num").value);
        if (num > 0){
            document.getElementById("resp").innerHTML = `Su numero ${num} es positivo`
        } else if (num < 0){
            document.getElementById("resp").innerHTML = `Su número ${num} es negativo`
        }
        else{
            document.getElementById("resp").innerHTML = `Su número ${num} es el 0`
        }

    }
    bisiesto(){
        let año;
        año = 0;
        año = parseInt(document.getElementById("año").value);
        if ((año % 4 === 0) && ((año % 100 !== 0) || (año % 400 === 0))){
            document.getElementById("resp").innerHTML = `El año ${año} es bisiesto`
        }
        else{
            document.getElementById("resp").innerHTML = `El año ${año} no es bisiesto`
        }
    }
    zodiacal(){
        let mes, dia;
        mes = 0; dia = 0;
        mes = parseInt(document.getElementById("mes").value);
        dia = parseInt(document.getElementById("dia").value);
        if((mes === 3 && dia >= 21 && dia <= 31)||(mes === 4 && dia >=1 && dia <= 20)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Aries`;
        }else if ((mes === 4 && dia >= 21 && dia <= 30) || (mes === 5 && dia <= 20 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Tauro`;
        }else if ((mes === 5 && dia >= 20 && dia <= 31) || (mes === 6 && dia <= 21 & dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Géminis`
        }else if ((mes === 6 && dia >= 22 && dia <= 30) || (mes === 7 && dia <= 21 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Cáncer`
        }else if((mes === 7 && dia >= 22 && dia <= 31) || (mes === 8 && dia <= 23 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Leo`
        }else if((mes === 8 && dia >= 24 && dia <= 31) || (mes === 9 && dia <= 23 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Virgo`
        }else if((mes === 9 && dia >= 24 && dia <= 30) || (mes === 10 && dia <= 23 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Libra`
        }else if((mes === 10 && dia >= 24 && dia <= 31) || (mes === 11 && dia <= 22 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Escorpio`
        }else if((mes === 11 && dia >= 23 && dia <= 30) || (mes === 12 && dia <= 21 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Sagitario`
        }else if((mes === 12 && dia >= 22 && dia <= 31) || (mes === 1 && dia <= 20 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Capricornio`
        }else if((mes === 1 && dia >= 21 && dia <= 31) || (mes === 2 && dia <= 19 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal Acuario`
        }else if ((mes === 2 && dia >= 20 && dia <= 28) || (mes === 3 && dia <= 20 && dia >= 1)){
            document.getElementById("resp").innerHTML = `Su signo zodiacal es Piscis`
        }
        else{
            document.getElementById("resp").innerHTML = `Los datos ingresados no son validos`
        }
    }
    quincena(){
        let dia
        dia = 0;
        dia = parseInt(document.getElementById("dia").value)
        if (dia >= 1 && dia <= 15){
            document.getElementById("resp").innerHTML = `Este dia pertenece a la primera quincena del mes`
        } else if(dia > 16 && dia <= 31){
            document.getElementById("resp").innerHTML = `Este dia pertenece a la segundo quincena del mes`
        }
    }
    semana(){
        let dia
        dia = 0;
        dia = parseInt(document.getElementById("dia").value);
        if(dia == 1){
            document.getElementById("resp").innerHTML = `El día es Domingo`
        }else if(dia == 2){
            document.getElementById("resp").innerHTML = `El día es Lunes`
        }else if(dia == 3){
            document.getElementById("resp").innerHTML = `El día es Martes`
        }else if(dia ==4){
            document.getElementById("resp").innerHTML = `El día es Miercoles`
        }else if(dia ==5){
            document.getElementById("resp").innerHTML = `El día es Jueves`
        }else if(dia == 6){
            document.getElementById("resp").innerHTML = `El día es Viernes`
        }else if(dia == 7){
            document.getElementById("resp").innerHTML = `El día es Sabado`
        }
    }
    frasesIguales(){
        let frase1, frase2;
        frase1 = ""; frase2 ="";
        frase1 = document.getElementById("frase1").value
        frase2 = document.getElementById("frase2").value
        if(frase1 == frase2){
            document.getElementById("resp").innerHTML = "Las palabras son iguales"
        }
        else{
            document.getElementById("resp").innerHTML = "Las palabras no son iguales"
        }
    }
    precioDescuento(){
        let precio, descuento, total;
        precio = 0; descuento = 0;
        precio = parseFloat(document.getElementById("precio").value);
        descuento = parseFloat(document.getElementById("descuento").value);
        total = precio - (precio * (descuento/100))
        console.log(`${precio} - (${precio} * (${descuento} / 100)) = ${total}`)
        document.getElementById("resp").innerHTML = `Su precio final es de: $${total}`
    }
    factImpuestos(){
        let fact, impuestos, total, porcentaje;
        fact = 0; porcentaje = 0;
        fact = parseInt(document.getElementById("fact").value)
        porcentaje = parseInt(document.getElementById("porcentaje").value)
        impuestos = fact * (porcentaje / 100)
        console.log(`${fact} * (${impuestos} / 100) = ${impuestos}`)
        document.getElementById("resp").innerHTML = `El impuesto es de: $${impuestos}`
        total = impuestos + fact
        console.log(`${impuestos} + ${fact} = ${total}`)
        document.getElementById("resp").innerHTML += `<br>El total a pagar es de: $${total}</br>`
    }
    aumentoSueldo(){
        let salario, aumento, total;
        salario = 0; aumento = 0;
        salario = parseFloat(document.getElementById("salario").value);
        aumento = parseFloat(document.getElementById("aumento").value);
        total = salario + (salario * (aumento/100))
        console.log(`${salario} + (${salario} * (${aumento} / 100)) = ${total}`)
        document.getElementById("resp").innerHTML =`Su nuevo salario es de: $${total}`
    }
    multiplesArtic(){
        let precio, cant,  desc, total, total1;
        precio = 0; cant = 0;
        precio = parseInt(document.getElementById("precio").value);
        cant = parseInt(document.getElementById("cant").value);
        total = precio * cant
        console.log(`${precio} * ${cant} = ${total}`)
        document.getElementById("resp").innerHTML = `Subtotal.....:$${total}`
        if(total > 100){
            desc = total * 0.10
            console.log(`${total} * 0.10 = ${desc}`)
            document.getElementById("resp").innerHTML += `<br>Descuento.....:$${desc}</br>`
            total1 = total - desc
            console.log(`${total} - ${desc} = ${total1}`)
            document.getElementById("resp").innerHTML += `<br>Total.....:$${total1}</br>`
        }
        else{
            document.getElementById("resp").innerHTML += `<br>Total.....:${total}</br>`
        }
    }
    

    

    //----------------------------------------------------------------------------------------------------------
    calculadoraImpuestos() {
        let salario, impuesto;
        salario = 0; impuesto = 0;
        salario = parseInt(document.getElementById("salario").value);
        if (salario <= 10000) {
            impuesto = salario * 0.05;
        } else if (salario > 10000 && salario <= 20000){
            impuesto = salario * 0.10
        } 
        else {
            impuesto = salario * 0.15
        }
        console.log(`${salario} * ${impuesto} = ${impuesto}`);
        document.getElementById("resp").innerHTML = `Su impuesto a la renta es de: $${impuesto}`;

    }
    descuentoAntigüedad(){
    let sal, años, bono;
    sal = 0; años = 0; bono = 0; 
    sal= parseInt(document.getElementById("sal").value);
    años= parseInt(document.getElementById("años").value);
    if(años > 5){
        bono = sal * 0.05
        console.log(`${sal} * ${bono} = ${bono}`);
    document.getElementById("resp").innerHTML = `Su bono por antiguedad en la empresa es: $${bono}`
    }
    else{
       document.getElementById("resp").innerHTML = `No tiene años suficientes para un bono` 
    }
}
   calculadoraEnvio(){
    let dist;
    dist = 0;
    dist = parseInt(document.getElementById("distancia").value)
    if(dist >= 50){
        document.getElementById("resp").innerHTML = `El envío a ${dist} km, es de $20`
    } 
    else{
        document.getElementById("resp").innerHTML = `El envío a ${dist} km, es de $10`
    }

   }

    descuentoLealtadCliente(){
        let total, desc;
        total = 0; desc = 0
        total = parseInt(document.getElementById("compras").value);
        if(total > 500){
            desc = total * 0.10
            document.getElementById("resp").innerHTML = `En su siguiente compra tendrá un descuento del: $${desc}`
        }
        else{
            document.getElementById("resp").innerHTML= `No tendrá descuento en su proxima compra`
        }
    }
    volumenCompra(){
        let cantuni, preciouni, desc, total, totalDesc;
        cantuni = 0; preciouni = 0; desc = 0; total = 0;
        cantuni = parseInt(document.getElementById("cantidadUni").value);
        preciouni = document.getElementById("precioUni").value;
        total = cantuni * preciouni
        if(cantuni >= 10 && cantuni <= 50){
            desc = total * 0.05
        } else if (cantuni > 50 && cantuni <= 100){
            desc = total * 0.10
        } else if(cantuni > 100){
            desc = total * 0.15
        }
        console.log(`${total} - ${desc} = ${total}`)
        totalDesc = total - desc
        document.getElementById("resp").innerHTML = `Su valor total con descuento es: $${totalDesc}`

    }
    costoServivio(){
        let horas, costo, descu;
        horas = 0;
        horas = parseInt(document.getElementById("horas").value)
        document.getElementById("resp").innerHTML = "Su tarifa por hora es de $15"
        costo = horas * 15
        document.getElementById("resp").innerHTML += `<br1>Su costo total actual es de: ${costo}`
        if(horas > 10){
            descu = costo - (costo * 0.20)
            document.getElementById("resp").innerHTML += `<br2> Su costo con descuento aplicado del 20% es de: $${descu}`
        }
        else{
            document.getElementById("resp").innerHTML += `<br> Su costo es de: $${costo}`
        }

    }
    numerosPares(){
        let contador, hasta;
        contador = 0; hasta = 0;
        contador = parseInt(document.getElementById("desde").value)
        hasta = parseInt(document.getElementById("hasta").value)
        document.getElementById("resp").innerHTML = "Estos son los números pares del 1 al 50"
        while(contador <= hasta){
            document.getElementById("resp").innerHTML += `<br>${contador}`
            contador = contador + 2
        }
    }
    tablaMultiplicar() {
        let tabla, contador, resp;
        tabla = 0;
        tabla = parseInt(document.getElementById("tabla").value)
        contador = 1
        while(contador <= 12){
            resp = contador * tabla;
            console.log(`${contador}*${tabla}=${resp}`)
            document.getElementById("resp").innerHTML += `<br>${tabla} * ${contador} = ${resp} `
            contador = contador + 1
        }
    }
    vocales() {
        let pos = 0, cv = 0, frase, resp;
        frase = document.getElementById("frase").value;
        frase = frase.toLowerCase();
        while (pos < frase.length) {
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
                cv = cv + 1; // cv++
            }
            pos++;
        }
        resp = document.getElementById("resp");
        resp.innerHTML = `Cantidad de vocales: ${cv}`;
    }

    // Contador de dígitos
    digitos() {
        let contadorD = 0, palabra = document.getElementById("palabra").value;
        for (let i = 0; i < palabra.length; i++) {
            if (!isNaN(palabra.charAt(i)) && palabra.charAt(i) !== " ") {
                contadorD++;
            }
        }
        document.getElementById("resp1").innerHTML = `Cantidad de dígitos: ${contadorD}`;
    }

    // Adivina el número
    aleatorio() {
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        let intentos = 0, numeroIngresado;
        do {
            numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 50):"));
            intentos++;
            if (numeroIngresado < numeroAleatorio) {
                alert("El número es mayor. Intenta de nuevo.");
            } else if (numeroIngresado > numeroAleatorio) {
                alert("El número es menor. Intenta de nuevo.");
            }
        } while (numeroIngresado !== numeroAleatorio);
        alert(`¡Correcto! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
    }

    // Cantidad de letras del alfabeto
    alfabeto() {
        const palabra = prompt("Ingresa una palabra:").toLowerCase();
        let contador = 0;
        for (let caracter of palabra) {
            if (caracter >= 'a' && caracter <= 'z') {
                contador++;
            }
        }
        alert(`Cantidad de letras del alfabeto (a..z) en la palabra: ${contador}`);
    }

    // Suma de números impares del 1 al 100
    impares() {
        let suma = 0;
        for (let num = 1; num <= 100; num += 2) {
            suma += num;
        }
        document.getElementById("resultadoImpares").innerHTML = `Suma de números impares del 1 al 100: ${suma}`;
    }

    // Contador de caracteres
    caracteres() {
        const palabra = prompt("Ingresa una palabra:").toLowerCase();
        let contador = 0;
        for (let caracter of palabra) {
            if (caracter >= 'a' && caracter <= 'z') {
                contador++;
            }
        }
        alert(`Cantidad de caracteres: ${contador}`);
    }

    // Suma de números ingresados por el usuario
    sumaNum() {
        let suma = 0, num;
        do {
            num = parseInt(prompt("Ingresa un número positivo (o un número negativo para finalizar):"));
            if (!isNaN(num) && num >= 0) {
                suma += num;
            }
        } while (num >= 0);
        alert(`La suma de los números positivos ingresados es: ${suma}`);
    }

    // Cuenta regresiva
    regresiva() {
        let num = parseInt(prompt("Ingresa un número entero positivo y te mostraremos su cuenta regresiva hasta 1:"));
    
        if (isNaN(num) || num <= 0) {
            alert("Por favor, ingresa un número válido.");
        } else {
            while (num >= 1) {
                alert(num); 
                num--; 
            }
        }
    }
    
    
    

    // Calcular suma de un arreglo
    calcularSuma(num) {
        let suma 
        let res
        num=[1,2]
         suma=[2,3]
        for (let i = 0; i < num.length; i++) {
            res= suma.length + num[i];
            alert("La suma de los elementos del arreglo es: " + res);
            
        }
    
    }

    // Calcular promedio de calificaciones
    promedio() {
        let resp, pro, acu = 0, pos, lon,notas 
        //numeros = [10,20,40,50]
        notas = document.getElementById("notas").value
        notas = notas.split(";")
        lon = notas.length
        for (pos = 0; pos < lon; pos++) {
            acu = acu + parseFloat(notas[pos])
        }
        pro = acu / lon
        pro = Math.round(pro * 100) / 100;
        resp = document.getElementById("resp")
        resp.innerHTML = `Promedio de Notas:[${notas}] = ${pro}`
    }

    // Encontrar máximo y mínimo en un arreglo
    encontrar() {
        const numerosInput = document.getElementById("numeros").value;
        const numeros = numerosInput.split(",").map(numero => parseInt(numero.trim(), 10));
        if (numeros.some(isNaN)) {
            alert("Por favor, ingrese números válidos separados por comas.");
            return;
        }
        if (numeros.length === 0) {
            alert("La lista de números está vacía.");
            return;
        }
        let maximo = Math.max(...numeros);
        let minimo = Math.min(...numeros);
        document.getElementById("resultado").textContent = `El valor máximo es: ${maximo}, y el valor mínimo es: ${minimo}`;
    }

    // Verificar si un elemento está en un arreglo y contar números pares
    elementoYContarPares() {
        const numeroBuscado = parseInt(document.getElementById("numero").value, 10);
        const arreglo = [15, 42, 7, 99, 23, 10];
        let mensaje = arreglo.includes(numeroBuscado) ? `El número ${numeroBuscado} está presente en el arreglo.` : `El número ${numeroBuscado} no se encuentra en el arreglo.`;
        document.getElementById("resultado").textContent = mensaje;

        let contadorPares = arreglo.filter(num => num % 2 == 0).length;
        console.log(`En el arreglo hay ${contadorPares} números pares.`);
    }
    arre(num1){

    let c= 0;
    
    num1 = [1, 2, 3, 4, 5, 6,8,13,43,12,22];
        for (let i = 0; i < num1.length; i++) {
            if (num1[i] % 2 === 0) {
                c=c+1
            }
        } 
        document.getElementById("resp").innerHTML = `La cantidad de números pares en el arreglo [${num1}] son: ${c}`
    }
    //---------------------------------------------------------------------------------------------------------
    // 56. Inversión de un arreglo
    invertirArreglo() {
        var num = document.getElementById("num").value;
        var arreglo = [];
        for (var i = 1; i <= num; i++) {
            arreglo.push(i);
        }
        var resultado = arreglo.reverse();
        document.getElementById("resp").innerHTML = `Arreglo invertido: [${resultado}]`;
    }

regresar() {
        document.getElementById("num").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 57. Buscar el índice

buscarIndice() {
        var num = document.getElementById("num").value;
        var valor = document.getElementById("valor").value;
        var arreglo = [];
        for (var i = 1; i <= num; i++) {
            arreglo.push(i);
        }
        var indices = [];
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i] == valor) {
                indices.push(i);
            }
        }
        document.getElementById("resp").innerHTML = `Índices del valor ${valor}: [${indices}]`;
    }

regresar() {
        document.getElementById("num").value = "";
        document.getElementById("valor").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 58. Función sin parámetros para saludar

saludar() {
        console.log("¡Hola!");
        document.getElementById("resp").innerHTML = "¡Hola!";
    }


// 59. Función con parámetros para sumar dos números

sumarNumeros() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var resultado = num1 + num2;
        document.getElementById("resp").innerHTML = `La suma es: ${resultado}`;
    }
regresar() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 60. Función con return para multiplicar dos números

multiplicarNumeros() {
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        var resultado = num1 * num2;
        document.getElementById("resp").innerHTML = `El resultado de la multiplicación es: ${resultado.toFixed(2)}`;
    }

regresar() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 61. Función sin return para determinar si un número es par o impar
determinarParidad() {
        var numero = parseInt(document.getElementById("numero").value);
        if (numero % 2 === 0) {
            document.getElementById("resp").innerHTML = "Es un número par.";
        } else {
            document.getElementById("resp").innerHTML = "Es un número impar.";
        }
    }

regresar() {
        document.getElementById("numero").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 62. Función con parámetros y return para calcular el área de un rectángulo

calcularAreaRectangulo() {
        var base = parseInt(document.getElementById("base").value);
        var altura = parseInt(document.getElementById("altura").value);
        var area = base * altura;
        document.getElementById("resp").innerHTML = `El área del rectángulo es: ${area}`;
    }

regresar() {
        document.getElementById("base").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 63. Función sin parámetros para imprimir tu nombre
imprimirNombre() {
        console.log("Tu Nombre");
        document.getElementById("resp").innerHTML = "Tu Nombre";
    }

regresar() {
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 64. Función con return para convertir grados Celsius a Fahrenheit
celsiusToFahrenheit() {
        var celsius = parseFloat(document.getElementById("celsius").value);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById("resp").innerHTML = `${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit.`;
    }

regresar() {
        document.getElementById("celsius").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 65. Función con parámetros para contar un carácter en una frase
contarCaracter() {
        var frase = document.getElementById("frase").value;
        var caracter = document.getElementById("caracter").value;
        var contador = 0;
        for (var i = 0; i < frase.length; i++) {
            if (frase[i] === caracter) {
                contador++;
            }
        }
        document.getElementById("resp").innerHTML = `El caracter '${caracter}' aparece ${contador} veces en la frase.`;
    }

regresar() {
        document.getElementById("frase").value = "";
        document.getElementById("caracter").value = "";
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 66. Función sin return para imprimir números del 1 al 10

imprimirNumeros() {
        var resultado = "";
        for (var i = 1; i <= 10; i++) {
            resultado += i + "<br>";
        }
        document.getElementById("resp").innerHTML = resultado;
    }
regresar() {
        document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
    }

// 67. Función con parámetros y return para sumar una lista de números
sumarListaNumeros() {
    var numeros = document.getElementById("numeros").value.split(",").map(Number);
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    document.getElementById("resp").innerHTML = `La suma de los números es: ${suma}`;
}
return() {
    document.getElementById("numeros").value = "";
    document.getElementById("resp").innerHTML = "Aquí va a ir la respuesta:";
}
}
let ope = new Ejercicio1() //crea una variable igual que la clase
ope.Ejercicio1()
ope.Ejercicio2()
ope.Ejercicio3()
ope.Ejercicio4()
ope.Ejercicio5()
ope.Ejercicio6()
ope.Ejercicio7()
ope.Ejercicio8()
ope.Ejercicio9()
ope.Ejercicio10()
ope.Ejercicio11()
ope.Ejercicio12()
ope.Ejercicio13()
ope.Ejercicio14()
ope.Ejercicio15()
ope.calculadoraImpuestos()
ope.descuentoAntigüedad()
ope.calculadoraEnvio()
ope.descuentoLealtadCliente()
ope.volumenCompra()
ope.costoServivio()
ope.numerosPares()
ope.tablaMultiplicar()
ope.copiarPalabra()
ope.mayorDeTres()
ope.edadMinima()
ope.calculadoraBMI()
ope.posit()
ope.bisiesto()
ope.zodiacal()
ope.quincena()
ope.precioDescuento()
ope.invertirArreglo();
ope.buscarIndice();
ope.saludar();
ope.sumarNumeros();
ope.multiplicarNumeros();
ope.determinarParidad();
ope.calcularAreaRectangulo();
ope.imprimirNombre();
ope.celsiusToFahrenheit();
ope.contarCaracter("Hola mundo", "o");
ope.imprimirNumeros();