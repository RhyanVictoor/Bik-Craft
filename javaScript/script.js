function Livro(nome, ano, autor) {
    const nomeMaiscu = nome.toUpperCase();
    const totalAnos = 2050 - ano;
    const frase = nome + " por " + autor;
    const objeto = {
        nome: nomeMaiscu,
        totalAnos,
        frase,
    };
    return objeto;
}

const livroRetorno = Livro("O senhor dos Aneis", 1954, "J. R. R. Tolkien");
console.log(livroRetorno.frase);
