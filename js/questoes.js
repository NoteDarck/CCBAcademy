// ===== BANCO DE QUESTÕES =====
const questoes = {
    teorico: [
        {
            id: 1,
            pergunta: 'Qual o nome completo da CCB?',
            alternativas: [
                'Congregação Cristã do Brasil',
                'Congregação Cristã no Brasil',
                'Comunidade Cristã do Brasil',
                'Igreja Cristã no Brasil'
            ],
            correta: 1
        },
        {
            id: 2,
            pergunta: 'Em que ano foi fundada a CCB?',
            alternativas: [
                '1910',
                '1920',
                '1930',
                '1940'
            ],
            correta: 0
        },
        {
            id: 3,
            pergunta: 'Quantos hinos possui o hinário oficial da CCB?',
            alternativas: [
                '350',
                '400',
                '480',
                '500'
            ],
            correta: 2
        },
        {
            id: 4,
            pergunta: 'Qual o primeiro hino do hinário da CCB?',
            alternativas: [
                'Santo, Santo, Santo',
                'Grandioso És Tu',
                'Oh! Vinde, Adoremos',
                'Hino da Igreja'
            ],
            correta: 0
        },
        {
            id: 5,
            pergunta: 'A CCB é uma igreja de origem:',
            alternativas: [
                'Italiana',
                'Portuguesa',
                'Brasileira',
                'Americana'
            ],
            correta: 0
        },
        {
            id: 6,
            pergunta: 'O que significa a sigla "S.S." na partitura?',
            alternativas: [
                'Solo e Soprano',
                'Soprano e Soprano',
                'Sons Suaves',
                'Sem Sinal'
            ],
            correta: 1
        },
        {
            id: 7,
            pergunta: 'Quantas vozes geralmente são utilizadas nos hinos da CCB?',
            alternativas: [
                '2 vozes',
                '3 vozes',
                '4 vozes',
                '5 vozes'
            ],
            correta: 2
        },
        {
            id: 8,
            pergunta: 'O hinário da CCB é dividido em quantas partes?',
            alternativas: [
                '2 partes',
                '3 partes',
                '4 partes',
                '5 partes'
            ],
            correta: 1
        },
        {
            id: 9,
            pergunta: 'Qual a principal característica da música na CCB?',
            alternativas: [
                'Uso de instrumentos eletrônicos',
                'Música apenas vocal',
                'Uso de instrumentos de sopro e cordas',
                'Música contemporânea'
            ],
            correta: 2
        },
        {
            id: 10,
            pergunta: 'Os hinos da CCB são classificados como:',
            alternativas: [
                'Hinos de Louvor',
                'Hinos de Adoração e Súplica',
                'Hinos de Guerra',
                'Todas as anteriores'
            ],
            correta: 3
        },
        {
            id: 11,
            pergunta: 'Qual a função do "regente" na CCB?',
            alternativas: [
                'Tocar órgão',
                'Dirigir os músicos durante o culto',
                'Cuidar da manutenção dos instrumentos',
                'Ensinar teoria musical'
            ],
            correta: 1
        },
        {
            id: 12,
            pergunta: 'O hinário da CCB é de domínio:',
            alternativas: [
                'Público',
                'Privado',
                'Internacional',
                'Restrito'
            ],
            correta: 0
        },
        {
            id: 13,
            pergunta: 'Quantos versículos geralmente tem cada hino da CCB?',
            alternativas: [
                '2 a 3',
                '3 a 4',
                '4 a 5',
                '5 a 6'
            ],
            correta: 1
        },
        {
            id: 14,
            pergunta: 'O que é um "solfejo" na música?',
            alternativas: [
                'Tocar um instrumento',
                'Cantar as notas musicais',
                'Escrever uma partitura',
                'Compor um hino'
            ],
            correta: 1
        },
        {
            id: 15,
            pergunta: 'A CCB utiliza que tipo de notação musical?',
            alternativas: [
                'Cifras',
                'Partitura tradicional',
                'Tablatura',
                'Notação numérica'
            ],
            correta: 1
        },
        {
            id: 16,
            pergunta: 'Qual instrumento é considerado o principal na CCB?',
            alternativas: [
                'Violino',
                'Trompete',
                'Órgão',
                'Flauta'
            ],
            correta: 2
        },
        {
            id: 17,
            pergunta: 'Os hinos da CCB são inspirados em:',
            alternativas: [
                'Hinos americanos',
                'Hinos italianos',
                'Hinos portugueses',
                'Todas as anteriores'
            ],
            correta: 1
        },
        {
            id: 18,
            pergunta: 'O que significa "piano" em uma partitura?',
            alternativas: [
                'Cantar forte',
                'Tocar suavemente',
                'Acelerar o ritmo',
                'Diminuir a velocidade'
            ],
            correta: 1
        },
        {
            id: 19,
            pergunta: 'Quantas linhas tem uma pauta musical padrão?',
            alternativas: [
                '3 linhas',
                '4 linhas',
                '5 linhas',
                '6 linhas'
            ],
            correta: 2
        },
        {
            id: 20,
            pergunta: 'O "compasso" na música serve para:',
            alternativas: [
                'Medir a altura do som',
                'Organizar a duração das notas',
                'Definir o tom da música',
                'Indicar os instrumentos'
            ],
            correta: 1
        }
    ],

    oficial: [
        {
            id: 1,
            pergunta: 'O que é o Manual da CCB?',
            alternativas: [
                'Um livro de hinos',
                'O regulamento e organização da igreja',
                'Um caderno de exercícios',
                'Um guia de instrumentos'
            ],
            correta: 1
        },
        {
            id: 2,
            pergunta: 'Quantos oficiais são necessários para um culto na CCB?',
            alternativas: [
                '1 oficial',
                '2 oficiais',
                '3 oficiais',
                '4 oficiais'
            ],
            correta: 0
        },
        {
            id: 3,
            pergunta: 'A função do "oficial" na CCB é:',
            alternativas: [
                'Tocar instrumentos',
                'Dirigir o culto e a doutrina',
                'Cuidar da finanças',
                'Ensinar música'
            ],
            correta: 1
        },
        {
            id: 4,
            pergunta: 'O culto da CCB é dividido em quantas partes principais?',
            alternativas: [
                '2 partes',
                '3 partes',
                '4 partes',
                '5 partes'
            ],
            correta: 1
        },
        {
            id: 5,
            pergunta: 'A "Santa Ceia" na CCB é celebrada:',
            alternativas: [
                'Todos os cultos',
                'Mensalmente',
                'Trimestralmente',
                'Anualmente'
            ],
            correta: 1
        },
        {
            id: 6,
            pergunta: 'Quem pode ser oficial na CCB?',
            alternativas: [
                'Apenas homens',
                'Homens e mulheres',
                'Apenas músicos',
                'Qualquer membro'
            ],
            correta: 0
        },
        {
            id: 7,
            pergunta: 'O que significa "doutrina" na CCB?',
            alternativas: [
                'O conjunto de músicas',
                'Os ensinamentos bíblicos',
                'A organização da igreja',
                'Os instrumentos'
            ],
            correta: 1
        },
        {
            id: 8,
            pergunta: 'O hinário da CCB é considerado:',
            alternativas: [
                'Um livro de doutrina',
                'Um livro de música',
                'Um regulamento',
                'Um guia de culto'
            ],
            correta: 0
        },
        {
            id: 9,
            pergunta: 'O "batismo" na CCB é realizado por:',
            alternativas: [
                'Aspersão',
                'Imersão',
                'Efusão',
                'Todos os métodos'
            ],
            correta: 1
        },
        {
            id: 10,
            pergunta: 'A CCB não possui:',
            alternativas: [
                'Pastores',
                'Oficiais',
                'Músicos',
                'Regentes'
            ],
            correta: 0
        },
        {
            id: 11,
            pergunta: 'Qual a posição da CCB em relação a instrumentos eletrônicos?',
            alternativas: [
                'Permite todos',
                'Permite apenas teclado',
                'Não utiliza instrumentos eletrônicos',
                'Utiliza apenas violão'
            ],
            correta: 2
        },
        {
            id: 12,
            pergunta: 'O hinário da CCB é de uso:',
            alternativas: [
                'Apenas nos cultos',
                'Pessoal e familiar',
                'Apenas para oficiais',
                'Apenas para músicos'
            ],
            correta: 1
        },
        {
            id: 13,
            pergunta: 'O que é "oração" na doutrina da CCB?',
            alternativas: [
                'Um cântico',
                'Comunhão com Deus',
                'Um estudo bíblico',
                'Uma reunião'
            ],
            correta: 1
        },
        {
            id: 14,
            pergunta: 'A CCB acredita na:',
            alternativas: [
                'Trindade',
                'Unidade de Deus',
                'Divindade de Maria',
                'Santos'
            ],
            correta: 1
        },
        {
            id: 15,
            pergunta: 'A "oferta" na CCB é:',
            alternativas: [
                'Obrigatória',
                'Voluntária',
                'Mensal',
                'Anual'
            ],
            correta: 1
        }
    ],

    organista: [
        {
            id: 1,
            pergunta: 'Qual a função do pedal no órgão?',
            alternativas: [
                'Apenas estético',
                'Produzir notas graves',
                'Controlar o volume',
                'Mudar o timbre'
            ],
            correta: 1
        },
        {
            id: 2,
            pergunta: 'O que é uma "progressão harmônica"?',
            alternativas: [
                'Uma sequência de notas',
                'Uma sequência de acordes',
                'Um ritmo específico',
                'Uma dinâmica musical'
            ],
            correta: 1
        },
        {
            id: 3,
            pergunta: 'Campo harmônico de dó maior possui quantos acordes?',
            alternativas: [
                '5 acordes',
                '6 acordes',
                '7 acordes',
                '8 acordes'
            ],
            correta: 2
        },
        {
            id: 4,
            pergunta: 'O que significa "modulação" na harmonia?',
            alternativas: [
                'Mudança de ritmo',
                'Mudança de tonalidade',
                'Mudança de instrumento',
                'Mudança de dinâmica'
            ],
            correta: 1
        },
        {
            id: 5,
            pergunta: 'Qual o acorde dominante em dó maior?',
            alternativas: [
                'Dó maior',
                'Fá maior',
                'Sol maior',
                'Lá menor'
            ],
            correta: 2
        },
        {
            id: 6,
            pergunta: 'O que é "síncope" no ritmo?',
            alternativas: [
                'Tocar todas as notas',
                'Acentuar tempos fracos',
                'Acelerar o ritmo',
                'Diminuir o ritmo'
            ],
            correta: 1
        },
        {
            id: 7,
            pergunta: 'Uma "cifra" representa:',
            alternativas: [
                'Uma nota isolada',
                'Um acorde',
                'Um ritmo',
                'Uma dinâmica'
            ],
            correta: 1
        },
        {
            id: 8,
            pergunta: 'O que é "andamento" na música?',
            alternativas: [
                'O tom da música',
                'A velocidade da música',
                'A dinâmica da música',
                'A harmonia da música'
            ],
            correta: 1
        },
        {
            id: 9,
            pergunta: 'Quantos tipos de "dinâmica" existem na música?',
            alternativas: [
                '2 tipos',
                '3 tipos',
                '4 tipos',
                'Mais de 5 tipos'
            ],
            correta: 3
        },
        {
            id: 10,
            pergunta: 'O que significa "legato" em uma partitura?',
            alternativas: [
                'Tocar seco',
                'Tocar ligado',
                'Tocar forte',
                'Tocar suave'
            ],
            correta: 1
        },
        {
            id: 11,
            pergunta: 'A "clave de sol" indica a posição da nota:',
            alternativas: [
                'Dó',
                'Ré',
                'Mi',
                'Sol'
            ],
            correta: 3
        },
        {
            id: 12,
            pergunta: 'Qual a diferença entre "staccato" e "legato"?',
            alternativas: [
                'Um é forte e outro suave',
                'Um é curto e outro ligado',
                'Um é lento e outro rápido',
                'Não há diferença'
            ],
            correta: 1
        },
        {
            id: 13,
            pergunta: 'O "compasso 4/4" significa:',
            alternativas: [
                '4 notas por compasso',
                '4 tempos por compasso',
                '4 compassos por música',
                '4 músicas por hino'
            ],
            correta: 1
        },
        {
            id: 14,
            pergunta: 'A "terça maior" é um intervalo de:',
            alternativas: [
                '2 tons',
                '3 tons',
                '4 tons',
                '5 tons'
            ],
            correta: 0
        },
        {
            id: 15,
            pergunta: 'O que é "improviso" na música?',
            alternativas: [
                'Tocar com erro',
                'Criar melodias em tempo real',
                'Tocar muito rápido',
                'Tocar com força'
            ],
            correta: 1
        }
    ]
};