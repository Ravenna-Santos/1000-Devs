/*
Criar classes que representam livros e bibliotecas. Cada livro deve ter informações como título,
autor e ano de publicação, e a biblioteca deve permitir adicionar, emprestar e devolver livros 
pode criar um método para listar os livros disponíveis na biblioteca.
*/

class Livro{
    constructor(titulo, autor, ano_publicacao, disponivel){
        this.titulo = titulo
        this.autor = autor
        this.ano_publicacao = ano_publicacao
        this.disponivel = disponivel
    }

}

class Biblioteca{
    livros = []
    constructor(livros){
        this.livros = livros;
    }

    adicionar(titulo, autor, ano_publicacao){
        let livro = new Livro(titulo, autor, ano_publicacao, true)
        this.livros.push(livro);
    }

    emprestar(posicao){
        this.livros[posicao - 1].disponivel = false;
    }

    devolver(posicao){
        this.livros[posicao - 1].disponivel = true;
    }

    listar(){
        let livro
        console.log("id".padEnd(5) + "Título".padEnd(50) + "Autor".padEnd(30) + "Ano de Lançamento")
        for(let id = 0; id < this.livros.length; id++){
            livro = this.livros[id]
            if(livro.disponivel == true){
            console.log(String(id + 1).padEnd(5) + String(livro.titulo).padEnd(50) + String(livro.autor).padEnd(30) + String(livro.ano_publicacao))
            }
        }

    }

}

let biblioteca = new Biblioteca([])
biblioteca.adicionar("A Song of Ice and Fire", "George R. R. Martin", 1996)
biblioteca.adicionar("Harry Potter e a Pedra Filosofal", "J. K. Rowling", 1997)
biblioteca.adicionar("O Príncipe", "Nicolau Maquiavel", 1532)
biblioteca.listar()
biblioteca.emprestar(1)
biblioteca.listar()
biblioteca.devolver(1)
biblioteca.listar()