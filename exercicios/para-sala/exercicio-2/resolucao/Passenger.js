const Driver = require("./Driver.js");

module.exports = class Passenger {
  nome;
  idade;
  senha;
  valorGasto = 0;

  static passageiras = [];

  constructor(nome, idade, senha) {
    this.nome = nome;
    this.idade = idade;
    this.senha = senha;

    this.constructor.passageiras.push({ nome: nome, idade: idade });
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

  static getQtdPassageiras(passageiras) {
    console.log(`${passageiras.length} passageiras cadastradas.`);
  }

  static getMediaIdade(passageiras) {
    const soma = passageiras.reduce((total, next) => total + next.idade, 0);
    const media = soma / passageiras.length;
    console.log(`A média de idade das passageiras é ${media.toFixed(2)}. `);
  }
};
