function numero(valor: any) {
   console.log(valor);
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (valor % 2 == 0) {
            resolve(Math.floor(Math.random() * 10));
         } else reject();
      }, 5000);
   });
}

numero(2)
   .then(numero)
   .then(numero)
   .then(numero)
   .then(numero)
   .then(numero)
   .then(numero)
   .then(numero)
   .catch((reason: any) => {
      return console.log('deu impar');
   });
