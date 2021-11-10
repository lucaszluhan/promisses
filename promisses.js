function numero(valor) {
   console.log(valor);
   return new Promise(function (resolve, reject) {
      setTimeout(function () {
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
   ['catch'](function (reason) {
      return console.log('deu impar');
   });
