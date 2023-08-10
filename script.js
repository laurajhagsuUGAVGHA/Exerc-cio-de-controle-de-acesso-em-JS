function acesso(){
    let numeroCartao = Number(prompt('Informe o numero de seu cartão.'))
     let fundo = document.querySelector('#corpo')
     let texto = document.querySelector('#titulo')
     if(numeroCartao<=1999 && numeroCartao>=1000){
         alert('Acesso total')
         fundo.style.backgroundColor = '#06d6a0'
         texto.textContent = 'Acesso total a todas as áreas restritas.'
     }
     else if(numeroCartao<=2999 && numeroCartao>=2000){
         alert('Acesso restrito')
         fundo.style.backgroundColor = '#ffbe0b'
         texto.textContent = 'Acesso limitado a algumas áreas restritas.'
     }
     else{
         alert('Acesso negado')
         fundo.style.backgroundColor = '#d90429'
         texto.textContent = ' Não têm permissão para acessar as áreas restritas.'
     } 
 }