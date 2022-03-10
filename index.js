class Estudante{
  constructor( nome, sobrenome, turma, instituicao, data_nascimento){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.turma = turma;
    this.instituicao =instituicao;
    this. data_nascimento = data_nascimento;
 }
  mostrarAtributos(){
  return this.nome + "\n" + this.sobrenome + "\n" + this.turma + "\n" + this.instituicao
+ "\n" + this.data_nascimento   
  }
}

let estudante = new Estudante("Vinicius", " de Souza Solique", "3B", "instituicao", "25/10/2005" );
console.log(estudante.mostrarAtributos())
