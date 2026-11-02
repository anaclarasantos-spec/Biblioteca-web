const campoBusca = document.getElementById("campo-busca");
const filtroGenero = document.getElementById("filtro-genero");
const filtroIdade = document.getElementById("filtro-idade");
const livros = document.querySelectorAll(".livro");
const avisoVazio = document.getElementById("aviso-vazio");

function filtrarLivros() {
    const textoBusca = campoBusca.value.toLowerCase();
    const filtroG = filtroGenero.value.toLowerCase();
    const filtroAnos = filtroIdade.value.toLowerCase();

    let livrosVisiveis = 0;

    livros.forEach(function(livro) {
        const titulo = livro.textContent.toLowerCase();
        const generoLivro = livro.dataset.genero;
        const idadeLivro = livro.dataset.idade;
        const encontrou = titulo.includes(textoBusca);
        const generoCombina = filtroG === "todos" || filtroG === generoLivro;
        const idadeCombina = filtroAnos === "todas" || filtroAnos === idadeLivro;

        if (encontrou && generoCombina && idadeCombina) {
            livro.hidden = false;
            livrosVisiveis++;}
        else {
            livro.hidden = true;}
    });

    if (livrosVisiveis === 0) {
        avisoVazio.style.display = "block";}
    else {
        avisoVazio.style.display = "none";}
}

campoBusca.addEventListener('input', filtrarLivros);
filtroGenero.addEventListener('change', filtrarLivros);
filtroIdade.addEventListener('change', filtrarLivros);

const formulario = document.getElementById("form-sugestao");
const mensagem = document.getElementById("mensagem")
const nomeSugestoes = document.querySelector("#nome")
const tituloSugestoes = document.querySelector("#titulo-livro")

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const textoSugestoes = nomeSugestoes.value.trim();
    const tituloSugestao = tituloSugestoes.value;

    mensagem.textContent = `Obrigado, ${textoSugestoes}! A sugestão do livro "${tituloSugestao}" foi enviada com sucesso.`;
    nomeSugestoes.value = "";
    tituloSugestoes.value = "";
});