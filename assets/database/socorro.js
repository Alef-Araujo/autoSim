export const socorro = [
    'Primeiros Socorros',
    {
        id: 1,
        command: 'Na presença de sangramento abundante, qual o cuidado indicado?',
        alternative: [
            'Garrotear (usar torniquete)',
            'Fazer compressão no local do sangramento',
            'Dar bastante líquido para a pessoa ir tomando',
            'Jogar bastante água oxigenada para coagular e limpar o ferimento',
            'Deixar o sangramento para sozinho'
        ],
        win: 2
    },
    {
        id: 2,
        command: 'Uma pessoa foi atropelada e está caída no meio da rua. O que fazer em primeiro lugar?',
        alternative: [
            'Remover a pessoa para a calçada',
            'Anotar a chapa ou correr atrás do carro que atropelou',
            'Tentar chamar algum parente da vítima',
            'Iniciar imediatamente o atendimento, no local',
            'Sinalizar o local para evitar outros acidentes',
        ],
        win: 5
    },
    {
        id: 3,
        command: 'Um acidentado apresenta um pedaço de vidro encravado no olho, o que fazer no local, antes de remover a vítima?',
        alternative: [
            'Retirar o vidro com os dedos',
            'Retirar o vidro com uma pinça',
            'Pingar colírio anestésico/desinfetante',
            'Cobrir o ferimento e fechar o outro olho',
            'Lavar com água gelada',
        ],
        win: 4
    },
    {
        id: 4,
        command: 'Uma pessoa ao fechar a porta do carro teve seu dedo arrancado(amputado). O que fazer com o dedo?',
        alternative: [
            'Desprezar o dedo arrancado e socorrer a vítima, imediatamente',
            'Recolher o dedo e colocá-lo diretamente no gelo',
            'Recolher o dedo e colocá-lo no álcool',
            'Embrulhar o dedo em gaze e levá-lo junto com a pessoa para o hospital',
            'Tentar colar o dedo, imediatamente, enfaixando-o com esparadrapo',
        ],
        win: 4
    },
    {
        id: 5,
        command: 'Em caso de acidente',
        alternative: [
            'é obrigação de todos sempre prestar auxílio à vítima',
            'é obrigação de todos prestar auxílio desde que não corra risco pessoal',
            'é obrigação de todos prestar auxílio, mesmo com risco pessoal',
            'é obrigação de socorrer apenas para quem causou o acidente',
            'não existe obrigação legal em socorrer',
        ],
        win: 2
    },
    {
        id: 6,
        command: '',
        alternative: [
            '',
            '',
            '',
            '',
            '',
        ],
        win: 5
    },
]