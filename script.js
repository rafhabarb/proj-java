//------------------------------------------------------------------------//

class ViewerError extends Error {
  
    // Construtor da Classe ViewerError
    constructor(txtDeErro) {
      super(txtDeErro); // Chamando o construtor da superclasse (Error)
      alert(txtDeErro + '\n\n' + this.stack);
    }
}

//------------------------------------------------------------------------//

class Aluno {
  
    constructor(m, c, n, e, t) {
      this.matricula = m;
      this.cpf = c;
      this.nome = n;
      this.email = e;
      this.telefone = t;
      
    }
  
    mostrar() {
      let texto = "Matrícula: " + this.matricula + "\n";
      texto += "Nome: " + this.nome + "\n";
      
      alert(texto);
      alert(JSON.stringify(this));
    }
}

//------------------------------------------------------------------------//

function obterElemento(idElemento) {
  
  var elemento = document.getElementById(idElemento);
  if(elemento == null) 
    throw new ViewerError("Não encontrei um elemento com id '" + idElemento + "'");
  return elemento;
}

//------------------------------------------------------------------------//


console.log('Realizando a carga do arquivo script.js');

const divNavegar  = obterElemento('divNavegar'); 
const divComandos = obterElemento('divComandos'); 
const divDialogo  = obterElemento('divDialogo');

const btPrimeiro  = obterElemento('btPrimeiro');
const btAnterior  = obterElemento('btAnterior');
const btProximo   = obterElemento('btProximo');
const btUltimo    = obterElemento('btUltimo');

const btIncluir   = obterElemento('btIncluir');
const btExcluir   = obterElemento('btExcluir');
const btAlterar   = obterElemento('btAlterar');
const btSair      = obterElemento('btSair');

const btOk        = obterElemento('btOk');
const btCancelar  = obterElemento('btCancelar');

const tfMatricula = obterElemento('tfMatricula');
const tfCpf       = obterElemento('tfCpf');
const tfNome      = obterElemento('tfNome');
const tfEmail     = obterElemento('tfEmail');
const tfTelefone  = obterElemento('tfTelefone');


function editando() { 
 divNavegar.hidden = true;
 divComandos.hidden = true;
 divDialogo.hidden = false; 
 tfMatricula.disabled = false;
 tfCpf.disabled = false;
 tfNome.disabled = false;
 tfEmail.disabled = false;
 tfTelefone.disabled = false;
}

function apresentando() { 
 tfCpf.disabled = true;
 divNavegar.hidden = false;
 divComandos.hidden = false;
 divDialogo.hidden = true; 
 tfMatricula.disabled = true;
 tfCpf.disabled = true;
 tfNome.disabled = true;
 tfEmail.disabled = true;
 tfTelefone.disabled = true;
}


//btPrimeiro.onclick = aviso; 
//btAnterior.onclick = aviso; 
//btProximo.onclick = aviso; 
//btUltimo.onclick = aviso; 

btIncluir.onclick = editando; 
//btExcluir.onclick = aviso; 
btAlterar.onclick = editando; 
//btSair.onclick = aviso; 

btOk.onclick = apresentando; 
btCancelar.onclick = apresentando; 

var aluno1 = new Aluno('12345', '123.456.789-09', 'José da Silva Xavier','jose@eu.com.br','(21)98765-4321');
aluno1.mostrar();

var aluno2 = new Aluno('67890', '987.654.321-56', 'Maria de Souza','maria@eu.com.br','(21)99999-8888');
aluno2.mostrar();


