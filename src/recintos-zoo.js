const animais = [
    { especie: "LEAO", tamanho: 3, bioma: ["savana", "savana e rio"] },
    { especie: "LEOPARDO", tamanho: 2, bioma: ["savana", "savana e rio"] },
    { especie: "CROCODILO", tamanho: 3, bioma: ["rio", "savana e rio"] },
    { especie: "MACACO", tamanho: 1, bioma: ["savana", "floresta", "savana e rio"] },
    { especie: "GAZELA", tamanho: 2, bioma: ["savana", "savana e rio"] },
    { especie: "HIPOPOTAMO", tamanho: 4, bioma: ["savana", "rio", "savana e rio"] },
];

const recintos = [
    {
        numero: 1,
        bioma: "savana",
        tamanhoTotal: 10,
        animaisExistentes: [
            { especie: "MACACO", quantidade: 3 }
        ]
    },
    {
        numero: 2,
        bioma: "floresta",
        tamanhoTotal: 5,
        animaisExistentes: []
    },
    {
        numero: 3,
        bioma: "savana e rio",
        tamanhoTotal: 7,
        animaisExistentes: [
            { especie: "GAZELA", quantidade: 1 }
        ]
    },
    {
        numero: 4,
        bioma: "rio",
        tamanhoTotal: 8,
        animaisExistentes: []
    },
    {
        numero: 5,
        bioma: "savana",
        tamanhoTotal: 9,
        animaisExistentes: [
            { especie: "LEAO", quantidade: 1 }
        ]
    }
];


class RecintosZoo {

    // Funcao para encontrar um animal dentro de array de animais
    encontrarAnimal(especie) {
        return animais.find(a => a.especie === especie)
    }

    // Funcao para verificar se o recinto é adequado
    analisaRecintos(especie, quantidade) {
        const informacaoAnimal = this.encontrarAnimal(especie)
        if (!especie) {
            return "Animal não encontrado"
        } else if (quantidade <= 0) {
            return "Quantidade inválida"
        } else if (informacaoAnimal.tamanho > quantidade) {
            return "Não há recinto viável"
        } else {
            const recintosViaveis = recintos.filter(r => {
                return r.tamanhoTotal >= quantidade && r.bioma === informacaoAnimal.bioma[0]
            })
            return { erro: null, recintosViaveis: recintosViaveis }
        }
    }

}
export { RecintosZoo as RecintosZoo };
const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);