
const form =document.getElementById('form-query'); //recebendo o formulario na minha variavél  
const emojiAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando"/>'; 
const emojiReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado"/>';  
const notas = []; //calcular as notas recebidas nesse array 
const atividades = []; // preciso armazenar a quantidade de atividade aqui
let linha = '<th>';// atribuindo a minha linha com o meu th da minha tabela e colocando a var global 
const spanAprovado =  '<span class ="aprovado"> Aprovado </span>'; 
const spanReprovado = '<span class ="Reprovado"> Reprovado </span>'; 
const notaMinima = parseFloat(prompt('Digite a nota minima'));  

form.addEventListener("submit",function(e) {
    
  //chamando functions 
    e.preventDefault();
    adicionaLinhas();  
    atualizaTabela(); 
    atualizaMediaFinal(); 

  }
);

function adicionaLinhas(){
    // puxando as informacoes do meu html 
    const inputNomeAtividade = document.getElementById("id-materia"); 
    const inputNotaAtividade = document.getElementById("id-notas"); 
    
    if(atividades.includes(inputNomeAtividade.value)) {
       alert('A atividade: ' +atividades+ ' ja existe no sistema! Por favor tente novamente com outra atividade')
    } else {
          // recebendo e armazenando as notas e as atividades no meu array
          atividades.push(inputNomeAtividade.value); 
          notas.push(parseFloat(inputNotaAtividade.value)); 
      
          // recebendo os dados da tabela
          linha += '<td>'+(inputNomeAtividade.value)+'</td>'; 
          linha += '<td>'+(inputNotaAtividade.value)+'</td>'; 
          
          // Adicionando o emoji com base na nota da atividade
          linha += '<td>' + (inputNotaAtividade.value >= notaMinima ? emojiAprovado : emojiReprovado) + '</td>';
      
          linha += '</tr>';        
    }; 

    //limpando campos após adicionar á tabela 
    inputNomeAtividade.value = ''; 
    inputNotaAtividade.value = ''; 
}; 

function atualizaTabela() {
      // inserindo as informacoes do usuário na tabela
      const corpoTabela = document.querySelector('tbody');
      corpoTabela.innerHTML = linha;
};

function atualizaMediaFinal()  {
  const mediaFinal = calculaMediaFinal(); 

  document.getElementById('valor-media-final').innerHTML = mediaFinal; 
  document.getElementById('Resp-final').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ; 
 
}; 

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length; i++)   {
        somaDasNotas += notas[i];  
    }
    // obtendo  as media dos alunos 
    let somatoria = somaDasNotas / notas.length; 

    // arredondando a media para 2 digitos depois da virgula
    let mediaArredondada = Math.round(somatoria * 100) / 100;
    return mediaArredondada ;  
        
}; 
   