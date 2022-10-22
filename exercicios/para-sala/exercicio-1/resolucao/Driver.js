module.exports = class Driver {
  nome;
  idade;
  qtdeCorridas = 0;
  valorRecebido = 0;

  constructor(nome, idade) {
    if (idade >= 18) {
      this.nome = nome;
      this.idade = idade;
      console.log(`Motorista ${this.nome} criada!`);
    } else return new Error(`Motorista não pode ser criada!`);
  }
};
