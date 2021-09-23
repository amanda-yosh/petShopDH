// para garantir que não ocorra nenhum evento na página, só mostra a página ao usuário após seu carregamento completo
// window.addEventListener('load', () => {
//     // código aqui
// })

window.onload = () => {
    // VALIDAÇÃO
    console.log('Validação do js');

    let btnEnviar = document.querySelector('form button');

    btnEnviar.onclick = (evento) => {
        // previne o evento padrão de enviar os dados do formulário
        evento.preventDefault();
        console.log('clicou no botão enviar');

        let form = document.querySelector('form');
        let inputTelefone = document.querySelector('#telefone');
        let inputNome = document.querySelector('#nome-completo');
        let inputEmail = document.querySelector('#email');

        // if (inputTelefone.value.length < 10 || inputNome.value.length < 6 || !inputEmail.value.includes('@')) {
        //     alert('Preencha corretamente todos os campos');
        // } else {
        //     form.submit();
        // }

        let htmlErros = document.querySelector('ul.erros');
        htmlErros.innerHTML = '';
        let listaErros = [];

        if (inputNome.value.length < 6) {
            listaErros.push('O campo Nome Completo deve ter no mínimo 6 caracteres.');
        }
        if (inputEmail.value.includes('@')) {
            listaErros.push('Preencha o campo email corretamente.');
        }
        if (inputTelefone.value.length < 10) {
            listaErros.push('O campo Telefone deve ter no mínimo 10 caracteres.');
        }
        if (listaErros.length > 0) {
            listaErros.forEach((mensagemErro) => {
                htmlErros.innerHTML += '<li>' + mensagemErro + '</li>';
            })
        }
        else {
            form.submit();
        }
    }

}
