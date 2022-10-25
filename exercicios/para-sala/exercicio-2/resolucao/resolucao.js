const Driver = require("./Driver.js");
const Passenger = require("./Passenger.js");

console.log(Driver.motoristas);
console.log(Passenger.passageiras);

const driverLulu = new Driver("Lulu", 23); // Motorista Lulu criada!
const driverBruna = new Driver("Bruna", 50); // Motorista Bruna criada!
const driverPaula = new Driver("Paula", 35); // Motorista Paula criada!

const passengerMari = new Passenger("Mari", 40, "00123@"); //Passageira Mari criada!
const passengerJoana = new Passenger("Joana", 60, "00123@"); //Passageira Joana criada!
const passengerGabi = new Passenger("Gabi", 25, "00123@"); //Passageira Gabi criada!

console.log(Driver.motoristas);
console.log(Passenger.passageiras);
console.log("\n");

Driver.getQtdMotoristas(Driver.motoristas); //3 motoristas cadastradas.
Driver.getMediaIdade(Driver.motoristas); //A média de idade das motoristas é 36.00.
Passenger.getQtdPassageiras(Passenger.passageiras); //3 passageiras cadastradas.
Passenger.getMediaIdade(Passenger.passageiras); //A média de idade das passageiras é 41.67
