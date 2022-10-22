const Driver = require("./Driver.js");
const Passenger = require("./Passenger.js");

const driverBelinha = new Driver("Belinha", 15); // ERROR: Motorista não pode ser criado!
console.log(driverBelinha);
const driverLulu = new Driver("Lulu", 23); // Motorista Lulu criada!
console.log(driverLulu);
const passenger1 = new Passenger("Mari", 40, "00123@"); //Passageira Mari criada!
console.log(passenger1);

console.log("\n");

passenger1.requestDrive("Motorista", 20, "00123@"); // 'Driver' deve ser uma instância de Driver.
passenger1.requestDrive(driverLulu, 20, "xxxx"); // Senha incorreta.
passenger1.requestDrive(driverLulu, 20, "00123@"); // Corrida realizada.

console.log("\n");

console.log(
  `Driver Lulu: Qtde corridas: ${driverLulu.qtdeCorridas} | Valor recebido: ${driverLulu.valorRecebido}`
);
console.log(`Passenger Mari: Valor Gasto: ${passenger1.valorGasto}`);
