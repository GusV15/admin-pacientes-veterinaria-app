Ahi deje configurado el tema de los CORS
Hice la prueba de pegarle a los endpoints del backend y funciona joya. Asi que ahi les dejo la prueba que hice
Cualquier cosa me consultan.

async logIn() {
    const res = await fetch('http://localhost:3000/api/v1/login/123');
    const data = await res.json();
    console.log(data);
},

Despues eliminen este archivo