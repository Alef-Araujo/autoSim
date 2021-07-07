export const legislacao = [
    'Legislação',
    {
        id: 1,
        command: 'Para o licenciamento de um veículo, em outro Estado, deve-se',
        alternative: [
            'obrigatoriamente alterar os caracteres das suas placas',
            'pedir autorização ao Conselho Nacional de Trânsito',
            'dar ciência ao Departamento de Trânsito do Estado de origem',
            'pedir autorização ao Conselho de Trânsito do Estado de origem',
            'pedir autorização às Prefeituras Municipais de origem e atual',
        ],
        win: 3
    },
    {
        id: 2,
        command: 'O principal objetivo da Inspeção de Segurança Veicular é',
        alternative: [
            'avaliar o desempenho do veículo na via para uma circulação segura',
            'avaliar as reais condições de segurança do veículo',
            'diagnosticar, detalhadamente, falhas nos diversos sistemas do veículo, recomendando o conserto específico',
            'fornecer dados sobre o veículo para realização de consertos',
            'reprovar veículos com mais de cinco anos',
        ],
        win: 2
    },
    {
        id: 3,
        command: 'Faz parte dos equipamentos obrigatórios dos veículos',
        alternative: [
            'espelho retrovisor externo do lado direito',
            'rádio toca-fitas',
            'conta-giros',
            'cinto de segurança',
            'limpador de vidro traseiro',
        ],
        win: 1
    },
    {
        id: 4,
        command: 'A prestação dos exames para obtenção da Carteira Nacional de Habilitação só poderá ser requerida pelo candidato que seja alfabetizado e tenha completado',
        alternative: [
            'dezessete anos',
            'dezesseis anos, com autorização dos pais',
            'dezesseis anos',
            'vinte e um anos',
            'dezoito anos',
        ],
        win: 5
    },
    {
        id: 5,
        command: 'Significa mudança de característica do veículo:',
        alternative: [
            'o pneu liso',
            'a falta de freio',
            'a descarga livre',
            'a instalação de rádio/toca-fitas',
            'o rebaixamento da suspensão e a mudança de cor',
        ],
        win: 5
    },
]