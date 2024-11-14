Esercizio
===
FizzBuzz
## Consegna
- Scrivere un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 deve stampare la parola ''Fizz'', per i multipli di 5 invece, la parola ''Buzz''.

## Logica del procedimento
- Rendiamo noto un ciclo di numeri da 1 a 100, in questo caso utilizzando for (i=1; i < 100; i++)
- A questo punto, avremo tutti i numeri disponibili, e possiamo definire la condizione if (i % 3 == 0) = Fizz
- Per i multipli di 5 invece: else (i % 5 == 0) = Buzz 
- Nel caso del numero 15 o degli altri numeri condivisi fra i due multipli, dovranno mostrare entrambi i valori
- Per tutti gli altri numeri non cambierà nulla, indi per cui si mostreranno come console.log(i)

