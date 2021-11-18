const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar2 = pessoa.falar;
falar2(); //conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
