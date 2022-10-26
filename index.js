const express = require("express");

const PORT = 3000;
const server = express();
const router = express.Router();


//http://localhost:3000 --     /huevos-fritos (el primer match);

// server.use("/", (request, response) => {
//   console.log(request); //El pedido que entra

//   const tortilla = {
//     huevos: 3,
//     patatas: "Muchas",
//     punto: "poco hecha",
//   };

//   console.log(response); //Procesamos la petición y entregamos el resultado -> un plato con un pincho de tortilla

//   return response.send(tortilla);
// });

router.get("/", (request, response) => {
    console.log(request); //El pedido que entra
  
    const tortilla = {
      huevos: 3,
      patatas: "Muchas",
      punto: "poco hecha",
    };
  
    console.log(response); //Procesamos la petición y entregamos el resultado -> un plato con un pincho de tortilla
  
    return response.send(tortilla);
  });


//endpoint
// server.use("/huevos-fritos", (request, response) => {
//     const huevosFritos = {
//       cantidad: 4,
//       variedad: "huevos camperos",
//       patatas: true,
//     };

//     return response.send(huevosFritos);
//   });

//endpoint
router.get("/huevos-fritos", (request, response) => {
   
    const huevosFritos = {
      cantidad: 4,
      variedad: "huevos camperos",
      patatas: true,
    };

    return response.send(huevosFritos);
  });


  server.use('/', router)

server.listen(PORT, () => {
  console.log("Servidor a toda máquina en http://localhost:${PORT}");
});
