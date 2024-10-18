let dados = [
    
    {
      titulo: "Rayssa Leal",
      descricao: "Rayssa Leal, a Fadinha do skate, é a mais jovem medalhista olímpica brasileira de todos os tempos.",
      link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
      tags: "skate, olimpíadas, fadinha"
    },
    {
      titulo: "Letícia Bufoni",
      descricao: "Letícia Bufoni é uma das maiores skatistas do mundo, com vários títulos no X-Games e presença olímpica.",
      link: "https://pt.wikipedia.org/wiki/Let%C3%ADcia_Bufoni",
      tags: "skate, X-Games, olimpíadas"
    },
    {
      titulo: "Yndiara Asp",
      descricao: "Yndiara Asp é uma skatista brasileira especialista em skate park, com participações em eventos internacionais.",
      link: "https://pt.wikipedia.org/wiki/Yndiara_Asp",
      tags: "skate, park, brasil"
    },
    {
      titulo: "Karen Jonz",
      descricao: "Karen Jonz é campeã mundial de skate e uma das pioneiras do esporte no Brasil.",
      link: "https://pt.wikipedia.org/wiki/Karen_Jonz",
      tags: "skate, campeã mundial, brasil"
    },
    {
      titulo: "Isadora Pacheco",
      descricao: "Isadora Pacheco é uma skatista brasileira com grandes participações em campeonatos internacionais.",
      link: "https://pt.wikipedia.org/wiki/Isadora_Pacheco",
      tags: "skate, brasil, internacional"
    },
    {
      titulo: "Pedro Barros",
      descricao: "Pedro Barros é um dos maiores nomes do skate park mundial, com várias medalhas em X-Games e nas Olimpíadas.",
      link: "https://pt.wikipedia.org/wiki/Pedro_Barros",
      tags: "skate, park, X-Games"
    },
    {
      titulo: "Luiz Francisco",
      descricao: "Luiz Francisco é skatista da modalidade park e representou o Brasil nas Olimpíadas de Tóquio 2020.",
      link: "https://pt.wikipedia.org/wiki/Luiz_Francisco",
      tags: "skate, park, olimpíadas"
    },
    {
      titulo: "Luan de Oliveira",
      descricao: "Luan de Oliveira é um dos maiores skatistas de street do Brasil, com várias conquistas no circuito mundial.",
      link: "https://pt.wikipedia.org/wiki/Luan_de_Oliveira",
      tags: "skate, street, brasil"
    },
    {
      titulo: "Felipe Gustavo",
      descricao: "Felipe Gustavo é skatista profissional e tem destaque em competições internacionais da modalidade street.",
      link: "https://pt.wikipedia.org/wiki/Felipe_Gustavo",
      tags: "skate, street, internacional"
    },
    {
      titulo: "Kelvin Hoefler",
      descricao: "Kelvin Hoefler é medalhista de prata na estreia do skate nas Olimpíadas de Tóquio 2020, na modalidade street.",
      link: "https://pt.wikipedia.org/wiki/Kelvin_Hoefler",
      tags: "skate, street, olimpíadas"
    },
    
    // Boxe
    {
      titulo: "Beatriz Ferreira",
      descricao: "Beatriz Ferreira é campeã mundial de boxe e medalhista de prata nas Olimpíadas de Tóquio 2020.",
      link: "https://pt.wikipedia.org/wiki/Beatriz_Ferreira",
      tags: "boxe, medalhista olímpica, campeã mundial"
    },
    {
      titulo: "Adriana Araújo",
      descricao: "Adriana Araújo é medalhista de bronze nas Olimpíadas de Londres 2012, sendo a primeira brasileira a conquistar uma medalha olímpica no boxe.",
      link: "https://pt.wikipedia.org/wiki/Adriana_Ara%C3%BAjo",
      tags: "boxe, medalhista olímpica, pioneira"
    },
    {
      titulo: "Viviane Obenauf",
      descricao: "Viviane Obenauf é uma boxeadora brasileira com destaque em competições internacionais de boxe.",
      link: "https://pt.wikipedia.org/wiki/Viviane_Obenauf",
      tags: "boxe, competições internacionais, Brasil"
    },
    {
      titulo: "Rose Volante",
      descricao: "Rose Volante foi a primeira boxeadora brasileira a conquistar um título mundial de boxe profissional.",
      link: "https://pt.wikipedia.org/wiki/Rose_Volante",
      tags: "boxe, campeã mundial, pioneira"
    },
    {
      titulo: "Taynna Cardoso",
      descricao: "Taynna Cardoso é uma jovem promessa do boxe brasileiro, com resultados expressivos em competições nacionais.",
      link: "https://pt.wikipedia.org/wiki/Taynna_Cardoso",
      tags: "boxe, promissora, competições nacionais"
    },
    {
      titulo: "Robson Conceição",
      descricao: "Robson Conceição é campeão olímpico nas Olimpíadas de Rio 2016, sendo o primeiro brasileiro a conquistar ouro no boxe.",
      link: "https://pt.wikipedia.org/wiki/Robson_Concei%C3%A7%C3%A3o",
      tags: "boxe, campeão olímpico, Rio 2016"
    },
    {
      titulo: "Hebert Conceição",
      descricao: "Hebert Conceição conquistou o ouro nas Olimpíadas de Tóquio 2020 na categoria peso médio.",
      link: "https://pt.wikipedia.org/wiki/Hebert_Concei%C3%A7%C3%A3o",
      tags: "boxe, campeão olímpico, Tóquio 2020"
    },
    {
      titulo: "Esquiva Falcão",
      descricao: "Esquiva Falcão é medalhista de prata nas Olimpíadas de Londres 2012 e atualmente compete no boxe profissional.",
      link: "https://pt.wikipedia.org/wiki/Esquiva_Falc%C3%A3o",
      tags: "boxe, medalhista olímpico, Londres 2012"
    },
    {
      titulo: "Yamaguchi Falcão",
      descricao: "Yamaguchi Falcão é irmão de Esquiva e medalhista de bronze nas Olimpíadas de Londres 2012.",
      link: "https://pt.wikipedia.org/wiki/Yamaguchi_Falc%C3%A3o",
      tags: "boxe, medalhista olímpico, Londres 2012"
    },
    {
      titulo: "Patrick Lourenço",
      descricao: "Patrick Lourenço é boxeador brasileiro, destaque nas categorias de base e em competições internacionais.",
      link: "https://pt.wikipedia.org/wiki/Patrick_Louren%C3%A7o",
      tags: "boxe, promissora, Brasil"
    },
    
    // Vela
    {
      titulo: "Martine Grael",
      descricao: "Martine Grael é campeã olímpica na classe 49er FX em Rio 2016, junto com Kahena Kunze.",
      link: "https://pt.wikipedia.org/wiki/Martine_Grael",
      tags: "vela, campeã olímpica, 49er FX"
    },
    {
      titulo: "Kahena Kunze",
      descricao: "Kahena Kunze é campeã olímpica na classe 49er FX em Rio 2016 e Tóquio 2020, ao lado de Martine Grael.",
      link: "https://pt.wikipedia.org/wiki/Kahena_Kunze",
      tags: "vela, campeã olímpica, 49er FX"
    },
    {
      titulo: "Fernanda Oliveira",
      descricao: "Fernanda Oliveira conquistou a medalha de bronze nas Olimpíadas de Pequim 2008 na classe 470.",
      link: "https://pt.wikipedia.org/wiki/Fernanda_Oliveira",
      tags: "vela, medalhista olímpica, classe 470"
    },
    {
      titulo: "Isabel Swan",
      descricao: "Isabel Swan foi medalhista olímpica ao lado de Fernanda Oliveira nas Olimpíadas de Pequim 2008.",
      link: "https://pt.wikipedia.org/wiki/Isabel_Swan",
      tags: "vela, medalhista olímpica, classe 470"
    },
    {
      titulo: "Patrícia Freitas",
      descricao: "Patrícia Freitas é uma velejadora especialista na classe RS:X e participou de várias edições dos Jogos Olímpicos.",
      link: "https://pt.wikipedia.org/wiki/Patr%C3%ADcia_Freitas",
      tags: "vela, RS:X, Jogos Olímpicos"
    },
    {
      titulo: "Robert Scheidt",
      descricao: "Robert Scheidt é um dos maiores velejadores de todos os tempos, com 5 medalhas olímpicas.",
      link: "https://pt.wikipedia.org/wiki/Robert_Scheidt",
      tags: "vela, campeão olímpico, Laser"
    },
    {
      titulo: "Torben Grael",
      descricao: "Torben Grael é campeão olímpico e um dos maiores nomes da vela mundial, com 5 medalhas em Jogos Olímpicos.",
      link: "https://pt.wikipedia.org/wiki/Torben_Grael",
      tags: "vela, campeão olímpico, Star"
    },
    {
      titulo: "Lars Grael",
      descricao: "Lars Grael é medalhista olímpico e irmão de Torben Grael, com destaque na classe Tornado.",
      link: "https://pt.wikipedia.org/wiki/Lars_Grael",
      tags: "vela, medalhista olímpico, Tornado"
    },
    {
      titulo: "Jorge Zarif",
      descricao: "Jorge Zarif é velejador brasileiro, especialista na classe Finn e com participações em Olimpíadas.",
      link: "https://pt.wikipedia.org/wiki/Jorge_Zarif",
      tags: "vela, Finn, Brasil"
    },
    {
      titulo: "Bruno Prada",
      descricao: "Bruno Prada é medalhista olímpico na classe Star, ao lado de Robert Scheidt.",
      link: "https://pt.wikipedia.org/wiki/Bruno_Prada",
      tags: "vela, medalhista olímpico, Star"
    },
  
    
  ];
  
  