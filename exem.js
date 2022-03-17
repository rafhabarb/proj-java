class Aluno {
  constructor (c, n) {
    this.cpf = c;
    this.nome = n;
  }
  
  exibir (){
    alert ("Executando o método exibir do aluno");
    alert ("this = " + this + "\ncpf = " + this.cpf + "\nnome = " +this.nome);
  }
}

var aluno1 = new Aluno('123.346.678-09', 'José da Silva');
var aluno2 = new Aluno('987.754.321-09', 'Maria de Souza');

aluno1.exibir();
aluno2.exibir();
