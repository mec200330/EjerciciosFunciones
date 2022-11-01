
//Ejercicios par/impar Ejercicio 1
// function parimpar(num1) {
//     if(num1%2===0){

//          console.log(num1, ' Es par')
//     }else{

//          console.log(num1, ' Es impar')
//     }
// }

// let num = prompt('ingrese un numero')
// console.log(parimpar(num))

//Ejercicio 2
// function numlargest(num1, num2) {
//     if (num1<num2){
//         console.log('Este numero es el mayor', num2)
//     }else if(num1>num2){
//         console.log('Este numero es el mayor', num1)
//     }else{
//         console.log('Son iguales')
//     }
// }

// let num3 = prompt('ingrese un numero')
// let num4 = prompt('ingrese un numero')

// numlargest(num3,num4)

//ejercicio 3

// function triangulo(num1,num2,num3) {
//     if(num1===num2 && num3!== num1 && num3 !== num2){
//         console.log('El triangulo es Isoceles');
//     }else if (Math.pow(num1,2)+Math.pow(num2,2)==Math.pow(num3,2)){
//         console.log('El triangulo es Escaleno');
//     }else if (num1===num2 && num2===num3 && num1===num3){
//         console.log('El triangulo es Equilatero');
//  }else{
//      console.log('No ingresaste datos referente a los triangulos que evaluamos')
// }
// }

// let num7 = prompt('ingrese la altura del triangulo')
// let num8 = prompt('ingrese la base del triangulo')
// let num9 = prompt('ingrese la hipotenusa del triangulo')

// triangulo(num7,num8,num9)

//Ejercicios de Arrays

//Ejercicio 1

// months = ['January', 'February', 'Marj', 'April', 'Mei']
// for (let i=0; i<5; i++){
//    // console.log(months[i]);
// }

// months [2] = 'March'
// months [4] = 'May'

// for (let i=0; i<5; i++){
//     //console.log(months[i]);
// }

// newMonths = ['June', 'July', 'August', 'September']


// function monthsfun (num1,num2 ) {

//     totalMonths = num1.concat(num2)


// }

// monthsfun(months,newMonths)
// //console.log(totalMonths);
// totalMonths.push('October', 'November', 'December')
// //console.log(totalMonths);
// //Ejercicio 2
// let num7 = prompt('ingrese primer número')*1
// let num8 = prompt('ingrese segundo número')*1
// let num9 = prompt('ingrese tercer número')*1
// tresnum(num7,num8,num9)
// function tresnum(num1,num2,num3) {




//         if (num1>num2){
//             totalMonths.pop()

//         }else if(num2>num3 && num2<10){
//             totalMonths.shift()

//         }else if(num2>num3 ||num2>num1){
//             totalMonths.push('Octuber')

//         }else{
//             console.log('Bad luck!')

//         }


// }
// tresnum()
// console.log('resultado',totalMonths);

//Ejercicio 3
//days =['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday']



// for(let i=0; i<days.length; i++){
//     console.log(days[i])
//     if(days[i]==='Monday'){
//         console.log(days[i].length)

//     }

//}
// dayuw = prompt('Ingrese el dia de la semana que le guste')

// function pos (arr, dia){
//     let arrPos = arr.indexOf(dia);
//            if(arr[arrPos].length > arrPos){
//             console.log(arr.reverse());
//            }
//     }
//   pos(days,dayuw)

//Ejercicio 3.2

//   function longFunc(arr1) {
//     if(arr1[0].length<arr1[1].length){
//         console.log(arr1.splice(0,3))
//     }
//   }
//   longFunc(days)

//Ejercico 3.3

// function checkFunc (arr2) {
//     if(arr2.includes('Sunday')){
//         console.log("That's nice!."); 
//     }else{

//     console.log("Oh no!");
//     arr2.push('Sunday')
//     console.log(arr2);
//     }
// }

// checkFunc(days)

//Ejercicio 4

// function vueltaFunc(palabra) {
//     console.log( palabra.split('').reverse().join(''))


// }
// vueltaFunc('Paralelepípedo')


//Ejercicio 5
// food = ['hotdog', 'Hamburguer']

// function cambio (arr3) {
//     let result = []
//     //console.log(arr3.reverse());
//     for(let i=1; i>=0; i--){
//         result.push(arr3[i]);
//     }
//     console.log(result);
// }
// cambio(food)

//Ejercicios if/else

//Ejercicio 4

// function range(num, start, end) {
//     if(num>start && num<end){
//         //console.log('Si esta en el rango');
//         return 'Si esta'
//     }else{
//         //console.log('No esta en el rango');
//         return 'No esta'
//     }


// }

// num1 = prompt ('Ingrese un número')
// num2 = prompt ('Ingrese el inicio del rango')
// num3 = prompt ('Ingrese el final del rango')
// console.log(range(num1,num2,num3))


//Ejercicio 5

// function opert (num1,num2,operation){
//     if(operation ==='add'){
//        return num1+num2
//     }else if (operation ==='subtract'){
//         return num1-num2
//     }else if (operation==='multiply'){
//         return num1*num2
//     }else if(operation==='divide'){
//        return num1/num2
//     }else if (operation==='modulus'){
//         return num1%num2
//     }else {
//        return 'No has ingresado una opción del menu'
//     }
// }

// let operacion = prompt('Ingrese la operación que desea realizar:  \n 1.add \n2.subtract \n3.multiply \n4.divide \n5.modulus')
// let num3 = prompt('Ingrese el primer numero de la operación que desea realizar')*1
// let num4 = prompt('Ingrese el segundo numero de la operación que desea realizar')*1

// console.log(opert(num3,num4,operacion))

//Ejercicio 6

// function isLeapYear(year) {

//     if((year%4===0 && year%100===0 && year%400===0) || (year%4===0 && year%100!==0)){
// return 'El años es bisiesto'
//     }else{
//         return 'El año no es bisiesto'
//     }   
// }

// // let yearUser = prompt('Ingrese el año que desea saber si es bisiesto')
// // console.log(isLeapYear(yearUser));

// function daysMonths(months) {

  
  
//     if (months === 1 || months === 3 || months === 5 || months === 7 || months === 8 || months === 10 || months === 12) {
//         return 'The month has 31 days'
//     } else if (months === 2) {
//         return 'The month has 28 days'
//     }
//     else {
//         return 'The month has 30 days'
//     }

// }

// let month = prompt('Indique el mes que desea saber cuantos días tiene') * 1
// let yearUser = prompt('Ingrese el año que desea saber si es bisiesto')
// console.log(daysMonths(month))
// console.log(isLeapYear(yearUser))

//Ejercicios Objetos
//Ejercicio 1

const citizen1 = {
    age : 'Cristhian',
    lastName : 'Gomez',
    age : '36',
}
citizen1.city = 'Bogotá'

console.log(citizen1)

citizen1.age = '17'
console.log('Me llamo', citizen1.age, citizen1.lastName, 'tengo', citizen1.age, 'años y soy de', citizen1.city)


function checkCitizenship(obje) {
   if(obje.age>=18){
           obje.canVote= true
           
        }else{
           return obje.canVote=false
        }
    }
checkCitizenship(citizen1)
console.log(citizen1); 

function creeateCitizen(nombre,apellido,edad) {

    if(nombre != '' && apellido != '' && edad !=='' && nombre != 0 && apellido != 0 && edad !==0){
        return 'Valido',  citizen2.name=nombre, citizen2.lastName=apellido, citizen2.age=edad

    } else{
        return 'No Valido'
    }
    
}
const citizen2 ={
    name: ' ',
    lastName:' ',
    age:' ',
}

let cas1 = prompt('ingrese nombre')
let cas2 = prompt('ingrese apellido')
let num1 = prompt('ingrese edad')*1
creeateCitizen(cas1,cas2,num1)

console.log(citizen2)
