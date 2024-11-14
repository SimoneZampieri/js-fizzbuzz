//creiamo un programma che stampa i numeri da 1 a 100
//Per i multipli di 3, aznichè il numero, deve essre visualizzato il termine Fizz
//per i multipli di 5, il termine Buzz

//definiamo il ciclo

console.log('===== stampo i numeri da 1 a 100 =====');

for (let i=1; i <= 100; i++){ //ora definiamo le istruzioni

    if ( i % 15 == 0 ){
        console.log('FizzBuzz');  //15 ed i numeri condivisi fra i multipli di 5 e 3 avranno denominazione FizzBuzz
    }
        
    else if ( i % 3 == 0){
        console.log('Fizz') //3 ed i suoi multipli mostrereanno la denominazione Fizz
    }

    else if ( i % 5 == 0){
        console.log('Buzz') //5 ed i suoi multipli mostreranno la denominazione Buzz
    }

    else{
        console.log(i) //gli altri numeri, non essendo multipli di 3 o 5, saranno invariati
    }
       
}
   