document.getElementById("validar").addEventListener('click', e => {
    e.preventDefault();

    var nome = document.getElementById('nomeCompleto').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagemContato').value;
    if(nome == '' || nome.length < 7){
        document.getElementById("nomeCompleto").style.border = '1px solid red'
    }else if(nome.length > 7){
        document.getElementById("nomeCompleto").style.border = ''
    }
    if(email == '' || email.indexOf('@') == -1 || email.indexOf('.') == -1 || email.indexOf('com') == -1){
        document.getElementById("email").style.border = '1px solid red'
    }else{
        document.getElementById("email").style.border = ''
    }
    if(telefone == '' || telefone.length < 11 || telefone.length > 11){
        document.getElementById('telefone').style.border = '1px solid red'
    }else if(telefone >= 11){
        document.getElementById('telefone').style.border = ''
    }
    if(mensagem == ''){
        document.getElementById('mensagemContato').style.border = '1px solid red'
    }
    else{
        document.getElementById("mensagemContato").style.border = ''
    }
})