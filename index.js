const formulario = document.getElementById('form-contato');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);
    const valores = Object.fromEntries(dados.entries());
    const nome = valores["nome"];
    const email = valores["email"];
    const mensagem = valores["mensagem"];
    
    if(!nome || !email || !mensagem){
        alert("Todos campos devem ser preenchidos.");
        return;
    }   

    alert("Enviado com sucesso")
    formulario.reset()
});