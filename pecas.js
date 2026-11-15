/*
  PEÇAS DO BAZAR LUDBYMILA
  Este arquivo é atualizado pelo Hermes (Telegram) com o ajudante hermes/bazar.py.
  Se for editar à mão: cada peça é um bloco { ... } separado por vírgula.
  categoria: casual, trabalho, fitness, calcados ou bolsas
  preco: só o número (0 = "Consulte"); vendido: true ou false
*/
const PECAS = [
  {
    "id": "blusa-zara",
    "nome": "Blusa Zara",
    "marca": "Zara",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "blusa-zara-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "shorts-john-john-2",
    "nome": "Shorts John John",
    "marca": "John John",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "shorts-john-john-2-1.jpg",
      "shorts-john-john-2-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-lelisblanc",
    "nome": "Croped Lelisblanc",
    "marca": "Lelisblanc",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "croped-lelisblanc-1.jpg",
      "croped-lelisblanc-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "shorts-academia",
    "nome": "Shorts Academia",
    "marca": "",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "shorts-academia-1.jpg",
      "shorts-academia-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "calca-animale",
    "nome": "Calça Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "calca-animale-1.jpg",
      "calca-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "calca-voar",
    "nome": "Calça Voar",
    "marca": "",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "calca-voar-1.jpg",
      "calca-voar-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-bobo",
    "nome": "Blusa Bobô",
    "marca": "",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 40,
    "fotos": [
      "blusa-bobo-1.jpg",
      "blusa-bobo-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-black-nxt",
    "nome": "Croped Black NXT",
    "marca": "NXT",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "croped-black-nxt-1.jpg",
      "croped-black-nxt-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-animale",
    "nome": "Croped Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "croped-animale-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-hit",
    "nome": "Croped HIT",
    "marca": "HIT",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 60,
    "fotos": [
      "croped-hit-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "shorts-john-john",
    "nome": "Shorts John John",
    "marca": "John John",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "shorts-john-john-1.jpg",
      "shorts-john-john-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "macacao-100-couro",
    "nome": "Macacão 100% Couro",
    "marca": "",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 300,
    "fotos": [
      "macacao-100-couro-1.jpg",
      "macacao-100-couro-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-john-john",
    "nome": "Blusa John John",
    "marca": "John John",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 140,
    "fotos": [
      "blusa-john-john-1.jpg",
      "blusa-john-john-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "legging-ombre",
    "nome": "Legging Ombré",
    "marca": "",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Nunca usada",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "legging-ombre-1.jpg",
      "legging-ombre-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "conjunto-seda",
    "nome": "Conjunto Seda",
    "marca": "",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "conjunto-seda-1.jpg",
      "conjunto-seda-2.jpg",
      "conjunto-seda-3.jpg"
    ],
    "vendido": false
  },
  {
    "id": "top-track-field",
    "nome": "Top Track Field",
    "marca": "Track Field",
    "categoria": "fitness",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "top-track-field-1.jpg",
      "top-track-field-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "shorts-fabolous",
    "nome": "Shorts Fabolous",
    "marca": "Agilitá",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "shorts-fabolous-1.jpg",
      "shorts-fabolous-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "vestido-animale",
    "nome": "Vestido Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 200,
    "fotos": [
      "vestido-animale-1.jpg",
      "vestido-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "macacao-ripndip",
    "nome": "Macacão RIPNDIP",
    "marca": "RipNDip",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 40,
    "fotos": [
      "macacao-ripndip-1.jpg",
      "macacao-ripndip-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "vestido-zara",
    "nome": "Vestido Zara",
    "marca": "Zara",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "vestido-zara-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "vestido-paite-black",
    "nome": "Vestido Paitê Black",
    "marca": "Adriana Papell",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 250,
    "fotos": [
      "vestido-paite-black-1.jpg",
      "vestido-paite-black-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "calca-paite-animale",
    "nome": "Calça Paitê Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 200,
    "fotos": [
      "calca-paite-animale-1.jpg",
      "calca-paite-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-live-academia",
    "nome": "Blusa Live Academia",
    "marca": "",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "blusa-live-academia-1.jpg",
      "blusa-live-academia-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-agilita",
    "nome": "Blusa Agilitá",
    "marca": "Agilitá",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 80,
    "fotos": [
      "blusa-agilita-1.jpg",
      "blusa-agilita-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "saia-animale-3",
    "nome": "Saia Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 350,
    "fotos": [
      "saia-animale-3-1.jpg",
      "saia-animale-3-2.jpg",
      "saia-animale-3-3.jpg"
    ],
    "vendido": false
  },
  {
    "id": "vestido-td",
    "nome": "Vestido TD",
    "marca": "",
    "categoria": "casual",
    "tamanho": "P",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "vestido-td-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-animale",
    "nome": "Blusa Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "blusa-animale-1.jpg",
      "blusa-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "conjunto-animale",
    "nome": "Conjunto Animale",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 350,
    "fotos": [
      "conjunto-animale-1.jpg",
      "conjunto-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "legging-preta",
    "nome": "Legging Preta",
    "marca": "",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "legging-preta-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "regata-verde",
    "nome": "Regata Verde",
    "marca": "Animale",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "regata-verde-1.jpg",
      "regata-verde-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-rosa",
    "nome": "Croped Rosa",
    "marca": "Agilitá",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 80,
    "fotos": [
      "croped-rosa-1.jpg",
      "croped-rosa-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "biquini-rosa",
    "nome": "Biquíni Rosa",
    "marca": "",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 80,
    "fotos": [
      "biquini-rosa-1.jpg",
      "biquini-rosa-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "biquini-preto",
    "nome": "Biquíni Preto",
    "marca": "Cia Marítima",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "biquini-preto-1.jpg",
      "biquini-preto-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "legging-track-field",
    "nome": "Legging Track Field",
    "marca": "Lorna Jane",
    "categoria": "fitness",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "legging-track-field-1.jpg",
      "legging-track-field-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "croped-iorane",
    "nome": "Croped Iorane",
    "marca": "Iorane",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 70,
    "fotos": [
      "croped-iorane-1.jpg",
      "croped-iorane-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-lavanda",
    "nome": "Blusa Lavanda",
    "marca": "Zara",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 160,
    "fotos": [
      "blusa-lavanda-1.jpg",
      "blusa-lavanda-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-regata",
    "nome": "Blusa Regata",
    "marca": "Lelisblanc",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Nunca usada",
    "detalhe": "Perfeito estado",
    "preco": 70,
    "fotos": [
      "blusa-regata-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "shorts-saia-animale",
    "nome": "Shorts Saia Animale",
    "marca": "",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "shorts-saia-animale-1.jpg",
      "shorts-saia-animale-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "blusa-gola-alta",
    "nome": "Blusa Gola Alta",
    "marca": "Zara",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "blusa-gola-alta-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "cropped-lelisblanc-2",
    "nome": "Cropped Lelisblanc",
    "marca": "Lelisblanc",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "cropped-lelisblanc-2-1.jpg",
      "cropped-lelisblanc-2-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "saia-animale-2",
    "nome": "Saia Animale",
    "marca": "",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "saia-animale-2-1.jpg",
      "saia-animale-2-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "cropped-lelisblanc",
    "nome": "Cropped Lelisblanc",
    "marca": "Lelisblanc",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 100,
    "fotos": [
      "cropped-lelisblanc-1.jpg",
      "cropped-lelisblanc-2.jpg"
    ],
    "vendido": false
  },
  {
    "id": "saia-animale",
    "nome": "Saia Animale",
    "marca": "",
    "categoria": "casual",
    "tamanho": "G",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 150,
    "fotos": [
      "saia-animale-1.jpg"
    ],
    "vendido": false
  },
  {
    "id": "vestido-agilita",
    "nome": "Vestido Agilitá",
    "marca": "",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 120,
    "fotos": [
      "vestido-agilita-1.jpg"
    ],
    "vendido": false
  },
  {
    "nome": "Vestido Yolanda Primavera",
    "marca": "Agilitá Fabulous",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Nunca usado",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 400,
    "fotos": [
      "vestido-yolanda-1.jpg",
      "vestido-yolanda-2.jpg",
      "vestido-yolanda-3.jpg"
    ],
    "vendido": false,
    "id": "vestido-yolanda-primavera"
  },
  {
    "nome": "Saia Palemberg Bege",
    "marca": "Bo.Bô",
    "categoria": "casual",
    "tamanho": "P",
    "estado": "Nunca usado",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 400,
    "extra": "Conjunto (saia + top): R$ 500",
    "fotos": [
      "saia-palemberg-1.jpg",
      "saia-palemberg-2.jpg",
      "saia-palemberg-3.jpg"
    ],
    "vendido": false,
    "id": "saia-palemberg-bege"
  },
  {
    "nome": "Shorts Saia Black",
    "marca": "Le Lis Blanc",
    "categoria": "casual",
    "tamanho": "40",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 140,
    "fotos": [
      "shorts-saia-black-1.jpg",
      "shorts-saia-black-2.jpg",
      "shorts-saia-black-3.jpg"
    ],
    "vendido": false,
    "id": "shorts-saia-black"
  },
  {
    "nome": "Shorts Saia Bege",
    "marca": "Carol Arbex",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 100,
    "fotos": [
      "shorts-saia-bege-1.jpg",
      "shorts-saia-bege-2.jpg",
      "shorts-saia-bege-3.jpg"
    ],
    "vendido": false,
    "id": "shorts-saia-bege"
  },
  {
    "nome": "Shorts Animal Print",
    "marca": "The Super",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado",
    "preco": 50,
    "fotos": [
      "shorts-animal-print-1.jpg",
      "shorts-animal-print-2.jpg",
      "shorts-animal-print-3.jpg"
    ],
    "vendido": false,
    "id": "shorts-animal-print"
  },
  {
    "nome": "Blusa Premium",
    "marca": "Nati Vozza",
    "categoria": "casual",
    "tamanho": "M",
    "estado": "Nunca usado",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 0,
    "fotos": [
      "blusa-premium-1.jpg",
      "blusa-premium-2.jpg",
      "blusa-premium-3.jpg"
    ],
    "vendido": false,
    "id": "blusa-premium"
  },
  {
    "nome": "Calça White Boca de Sino",
    "marca": "Agilitá",
    "categoria": "casual",
    "tamanho": "38",
    "estado": "Usado poucas vezes",
    "detalhe": "Precisa arrumar o zíper",
    "preco": 100,
    "fotos": [
      "calca-boca-de-sino-3.jpg",
      "calca-boca-de-sino-1.jpg",
      "calca-boca-de-sino-2.jpg"
    ],
    "vendido": false,
    "id": "calca-white-boca-de-sino"
  },
  {
    "nome": "Vestido Black Luxury",
    "marca": "Martha Medeiros",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado poucas vezes",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 200,
    "fotos": [
      "vestido-black-luxury-1.jpg",
      "vestido-black-luxury-2.jpg",
      "vestido-black-luxury-3.jpg"
    ],
    "vendido": false,
    "id": "vestido-black-luxury"
  },
  {
    "nome": "Vestido Preto e Off-white",
    "marca": "",
    "categoria": "casual",
    "tamanho": "42",
    "estado": "Usado uma vez",
    "detalhe": "Perfeito estado · ideal para eventos",
    "preco": 600,
    "fotos": [
      "vestido-preto-off-1.jpg",
      "vestido-preto-off-2.jpg",
      "vestido-preto-off-3.jpg"
    ],
    "vendido": false,
    "id": "vestido-preto-e-off-white"
  }
];
