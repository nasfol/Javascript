/*let js='amazing';
console.log(40+8+20-10);
console.log('jinas');
console.log(23);
let firstName='jonas';//decalaring variable
console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI=3.142;
let country="Nigeria";
let continent="Africa";
let pouplation="1000000";
console.log(country)
console.log(continent)
console.log(pouplation)
*/

true;
console.log(true);
let javascript="dollar"
console.log(javascript)
console.log(typeof(true))
console.log(typeof(javascript))
console.log(typeof(null))


//Dynamic typing ->assigning different value of different data type to a single variuable.
/*let schoolName="AdoPoly";
console.log(schoolName);
console.log(typeof(schoolName));
schoolName=true;
console.log(schoolName)
console.log(typeof(schoolName));*/

// Undefined  Datatypes;
//whenever you decalare an empty variable, it will hold the value of undefined
// let year;
// console.log(typeof(year))
// year=2000;
// console.log(typeof(year))
// console.log(year);

/*You cannot declare an empty variable
You can use const for variable that you are sure is not going to change and use let for variable that can change or mutatate.
-var is another way of decalaring variable which is te old way,
Although let and var are similar, they are different in their use.
-let is block scope while var is function scope
*/
//Operator Precedence

const now = 2021;
const ageFoluso= now-1991;
const ageSarah=now-2018;
console.log(now-1991>now-2018);
//mathmeatical operator have higher precedence , developer.mdn for more on precedence

//Coding Challenge 1
console.log("..................")

//String
//String literals
let firstName="Foluso"
let jib="Teacher";
let birthYear=1983;
let foluso="I'm "+firstName+" ,a "+jib+", I'm "+(now-birthYear)+" years old"
console.log(foluso);
console.log("..................")
//Template literals
//we use tyhe backstrick to write template literals
let folusoNew=`I'm ${firstName} a ${jib}, I am ${now-birthYear} years old`
console.log(folusoNew)
console.log("..................")
// we can also use backstrick for any regular string
//- Example
console.log(`The Name of the lord is strong tower the righeous runneth and they are save`)
console.log("..................")
//Backstrick can be used to write strings of multiple lines
console.log(`string
multiple
lines
`)
console.log("..................")

// Taking Decisions
const age=15;
const isOldEnough=age>=18;
if(isOldEnough){
    console.log(`You are old enough to get a driver's licence🚗`)
}
else{
    console.log(`you are not old enough for a licence, You still have ${18-age} years left`)
}
let century;
const birthyear=2001;
if(birthyear<=2000){
    century=20;
}else{
    century=21;
}
//TYpe Conversion
console.log(century)
console.log("..............................")
console.log(Number("55"))
let x=console.log(Number("55"));
console.log(x)

//Type Coercion
//Type coecion happen whenever an operator is dealing with two value that have two different types. Javascript will convert  one of the value to mathch the other vakue
console.log(`..................................................`)
const score1=97;
const score2=50;
const score3=101;
let averageDolphinScore=(score1+score2+score3)/3
console.log(Math.round( averageDolphinScore))

const scoreKolalas1=109;
const scoreKolalas2=50;
const scoreKolalas3=106;
let averageKolalasScore=(scoreKolalas1+scoreKolalas2+scoreKolalas3)/3
console.log (Math.round(averageKolalasScore))
 if(averageDolphinScore>averageKolalasScore&&averageDolphinScore>=100){
     console.log(`Dolphin Team is the winner`);
 }
 else if(averageKolalasScore>averageDolphinScore&&averageKolalasScore>=100){
     console.log(`Koalas is the winner`)
 }
 else if(averageKolalasScore===averageDolphinScore &&averageDolphinScore>=100 &&averageKolalasScore>=100){
     console.log("This  is a draw")
 }
 else{
     console.log(`There is no winner`)
 }
 console.log("...............................................................")
 // using ternary operator

 let bill=430
//  const tip=bill>=50&&bill<=300? console.log(`The bill was ${bill}, the tip was ${(15/100)*bill} and the totak value ${(15/100)*bill+bill}`):console.log(`The bill was ${bill}, the tip was ${(20/100)*bill} and the totak value ${(20/100)*bill+bill}`);


//  const tip=bill>=50&&bill<=300?bill*15/100:bill*20/100
//  console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${tip+bill}`)
 