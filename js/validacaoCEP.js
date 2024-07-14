async function buscarEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = '';
    try{
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro){
        throw alert('CEP não existente!')
    }
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');
    const telefone = document.getElementById('telefone');

    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;
    telefone.value = consultaCEPConvertida.ddd;
    return consultaCEPConvertida
    }catch(erro){
        mensagemErro.innerHTML = '<p>CEP inválido, tente novamente!</p>'
        console.log(erro)

    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscarEndereco(cep.value))