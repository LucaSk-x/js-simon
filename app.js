/* creare 5 numeri randoma in un array
inserirli nell html
fare partire il timer e nascondere i  numeri
al termine chiedere con 5 porompt i numeri all utente e inserirli in un array
congrontare gli array in un ciclo e pushare in un terzo array
i numeri che combaciano e farli visualizzare in html
*/

let btn = document.getElementById("btn")
let textResult = document.getElementById("textResult")
let showNumber = document.getElementById("showNumber")
let secondiTimer = 0;
let result;
let stampa = false;

const array = [];
const arrayUserNumber = [];
const arraySameNumber = [];


for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    array.push(randomNumber)
    showNumber.innerHTML += `${array[i]}, `
}

console.log(array);

btn.addEventListener("click", function() {
    showNumber.innerHTML = `--, --, --, --, --`;

    secondiTimer = 10;

        let myTimer = setInterval(function () {
            secondiTimer--;
            console.log(secondiTimer);
            
            if (secondiTimer === 0) {
                clearTimeout(myTimer)
                for(let i = 0; i < 5; i++) {
                    let inputUser = prompt("Inserisci numero");
                    let inputNumber = parseInt(inputUser);
                    arrayUserNumber.push(inputNumber);
                }
            }
            console.log(arrayUserNumber)

            for (let i = 0; i < 5; i++) {

                if(array.includes(arrayUserNumber[i])) {
                    arraySameNumber.push(arrayUserNumber[i])
                } 
                console.log(arraySameNumber.length)
            

                if (arraySameNumber.length < 5) {
                    result = "Ritenta sarai più fortunato"
                } else if (arraySameNumber.length = 5) {
                    result = "Hai un memoria di ferro, hai preso 5 numeri su 5"
                    stampa = true
                }

                    console.log(result)
            }
            if (stampa === true) {
                textResult.innerHTML = `${result}`
            }
        }, 1000)

})



