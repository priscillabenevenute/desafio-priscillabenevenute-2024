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

    analisaRecintos(animal, quantidade) {
    }
    // Funcao para encontrar um animal dentro de array de animais
    encontrarAnimal(especie) {
        console.log(animais.find(a => a.especie === especie))
    }

    //Funcao para verificar se o recinto é o adequado
    verificaRecinto(recinto, especie, quantidade) {
        const informacaoAnimal = encontrarAnimal(especie)
        if (!encontrarAnimal) {
            return "Animal não encontrado"
        }
    }

    //Funcao para verificar se o recinto tem espaco
}

export { RecintosZoo as RecintosZoo };
const resultado = new RecintosZoo().encontrarAnimal('MACACO');