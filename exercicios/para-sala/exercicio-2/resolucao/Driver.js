module.exports = class Driver {
  nome;
  idade;
  qtdeCorridas = 0;
  valorRecebido = 0;

  static motoristas = [];

  constructor(nome, idade) {
    if (idade >= 18) {
      this.nome = nome;
      this.idade = idade;

      this.constructor.motoristas.push({ nome: nome, idade: idade });
      console.log(`Motorista ${this.nome} criada!`);
    } else return new Error(`Motorista não pode ser criada!`);
  }

  static getQtdMotoristas(motoristas) {
    console.log(`${motoristas.length} motoristas cadastradas.`);
  }

  static getMediaIdade(motoristas) {
    const soma = motoristas.reduce((total, next) => total + next.idade, 0);
    const media = soma / motoristas.length;
    console.log(`A média de idade das motoristas é ${media.toFixed(2)}. `);
  }
};
