const animais = [
    { especie: "LEAO", grupoAlimentar: "carnivoro", tamanho: 3, bioma: ["savana", "savana e rio"] },
    { especie: "LEOPARDO", grupoAlimentar: "carnivoro", tamanho: 2, bioma: ["savana", "savana e rio"] },
    { especie: "CROCODILO", grupoAlimentar: "carnivoro", tamanho: 3, bioma: ["rio", "savana e rio"] },
    { especie: "MACACO", grupoAlimentar: "herbivoro", tamanho: 1, bioma: ["savana", "floresta", "savana e rio"] },
    { especie: "GAZELA", grupoAlimentar: "herbivoro", tamanho: 2, bioma: ["savana", "savana e rio"] },
    { especie: "HIPOPOTAMO", grupoAlimentar: "herbivoro", tamanho: 4, bioma: ["savana", "rio", "savana e rio"] },
];

const recintos = [
    {
        numero: 1,
        bioma: "savana",
        tamanhoTotal: 10,
        animaisExistentes: [
            {
                especie: "MACACO", quantidade: 1
            }
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
            { especie: "GAZELA", quantidade: 1 },
            { especie: "MACACO", quantidade: 1 }
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
        animaisExistentes: []
    }
];


class RecintosZoo {

    calcularEspacoLivre(recinto) {
        const result = recinto.tamanhoTotal - recinto.animaisExistentes.reduce((total, animal) => total + animal.quantidade, 0)
        return result;
    }
    //Funcao calcular tamanho animal vezes quantidade
    calcularTamanhoAnimal(especie, quantidade) {
        const informacaoAnimal = this.encontrarAnimal(especie)
        return informacaoAnimal.tamanho * quantidade
    }
    // Funcao para encontrar um animal dentro de array de animais
    encontrarAnimal(especie) {
        return animais.find(a => a.especie === especie)
    }

    // Funcao para verificar se o recinto é adequado
    analisaRecintos(especie, quantidade) {
        const informacaoAnimal = this.encontrarAnimal(especie)
        // Validar animal
        if (!especie) {
            return "Animal não encontrado"
        }
        // Validar quantidade
        if (quantidade <= 0) {
            return "Quantidade inválida"
        }

        const tamanhoQuantidadeAnimal = this.calcularTamanhoAnimal(especie, quantidade)
        if (informacaoAnimal.grupoAlimentar === "carnivoro") {
            // TODO - vai se tornar uma funcao
            recintos.filter(r => {
                // Verifica se tem animais no recinto
                if (r.animaisExistentes.length !== 0) {
                    r.animaisExistentes.filter(e => {
                        if (informacaoAnimal.bioma.includes(r.bioma) && e.especie === informacaoAnimal.especie) {
                            const espacoLivre = this.calcularEspacoLivre(r)
                            if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                            } else {
                                console.log("Não há recinto viável")
                            }
                        } else {
                            console.log("Não há recinto viável")
                        }
                    })
                } else {
                    if (informacaoAnimal.bioma.includes(r.bioma)) {
                        const espacoLivre = this.calcularEspacoLivre(r)
                        if (tamanhoQuantidadeAnimal <= espacoLivre) {
                            console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                        } else {
                            console.log("Não há recinto viável")
                        }
                    } else {
                        console.log("Não há recinto viável")
                    }
                }
            })
            // TODO - retornar array com recintos viaveis aqui
        } else {
            console.log("animal é herbivoro")
            // TODO - vai se tornar uma funcao
            recintos.filter(r => {
                if (r.animaisExistentes.length !== 0) {
                    r.animaisExistentes.filter(e => {
                        if (e.especie === "HIPOPOTAMO") {
                            if (r.bioma === "savana") {
                                if (informacaoAnimal.especie === e.especie) {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                        console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                                    } else {
                                        console.log("NAO CABE")
                                    }
                                } else {
                                    console.log("Hipopotamo nao aceita outro animal na savana")
                                }
                            } else if (r.bioma !== "savana") {
                                if (informacaoAnimal.especie === e.especie) {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                        console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                                    } else {
                                        console.log("NAO CABE")
                                    }
                                } else {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal + 1 <= espacoLivre) {
                                        console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                                    } else {
                                        console.log("NAO CABE")
                                    }
                                }
                            }
                        }
                        // Se nao for hipopotamo
                        else {
                            if (informacaoAnimal.bioma.includes(r.bioma) && e.especie === informacaoAnimal.especie) {
                                const espacoLivre = this.calcularEspacoLivre(r)
                                if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                    console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                                } else {
                                    console.log("NAO CABE")
                                }
                            } else if (r.bioma !== "savana" && informacaoAnimal.bioma.includes(r.bioma) && e.especie !== informacaoAnimal.especie) {
                                const espacoLivre = this.calcularEspacoLivre(r)
                                if (tamanhoQuantidadeAnimal + 1 <= espacoLivre) {
                                    console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                                }
                            } else {
                                console.log("Recinto nao viavel")
                            }
                        }
                    })
                } else {
                    if (informacaoAnimal.especie === "MACACO" && quantidade < 2) {
                        console.log("Recinto nao viavel")
                    } else {
                        if (informacaoAnimal.bioma.includes(r.bioma)) {
                            const espacoLivre = this.calcularEspacoLivre(r)
                            if (tamanhoQuantidadeAnimal + 1 <= espacoLivre) {
                                console.log(`Recinto ${r.numero} (espaço livre: ${espacoLivre}, total: ${r.tamanhoTotal})`)
                            } else {
                                console.log("NAO CABE")
                            }
                        } else {
                            console.log("Recinto nao viavel")
                        }
                    }
                }
            })
            // TODO - retornar array com recintos viaveis aqui
        }

        // return r.tamanhoTotal >= quantidade && r.bioma === informacaoAnimal.bioma[0]

        // return { erro: null, recintosViaveis: recintosViaveis }
    }

}
export { RecintosZoo as RecintosZoo };
const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);