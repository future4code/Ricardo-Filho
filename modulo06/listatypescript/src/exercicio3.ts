type Filmes = {
    Nome_do_Filme: string;
    Ano_de_Lançamento: number;
    Gênero_do_Filme: string;
    Resenha?: number;
};

enum Genre {
  ACAO = "Ação",
  DRAMA = "Drama",
  COMEDIA = "Comédia",
  ROMANCE = "Romance",
  TERROR = "Terror",
}

function osFilmes(Nome: string, Ano: number, Gênero: string, points?: number): Filmes {
    const movieDetails: Filmes = {
        Nome_do_Filme: Nome,
        Ano_de_Lançamento: Ano,
        Gênero_do_Filme: Gênero,
        Resenha: points
    }
    return movieDetails
}
console.table([osFilmes("Spencer", 2021, "Drama")])