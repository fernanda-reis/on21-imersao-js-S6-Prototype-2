const Driver = require("./Driver.js");

module.exports = class Passenger {
  nome;
  idade;
  senha;
  valorGasto = 0;

  constructor(nome, idade, senha) {
    this.nome = nome;
    this.idade = idade;
    this.senha = senha;
    console.log(`Passageira ${this.nome} criada!`);
  }

  requestDrive(driver, amount, password) {
    if (password === this.senha) {
      if (driver instanceof Driver) {
        driver.qtdeCorridas++;
        driver.valorRecebido += amount;
        this.valorGasto -= amount;
        console.log(`Corrida realizada.`);
      } else console.log(`'Driver' deve ser uma instância de Driver.`);
    } else console.log(`Senha incorreta.`);
  }
};
