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
    // Funcao calcular espaco livre
    calcularEspacoLivre(recinto) {
        const result = recinto.tamanhoTotal - recinto.animaisExistentes.reduce((total, animal) => total + (this.encontrarAnimal(animal.especie).tamanho * animal.quantidade), 0);
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
        const recintosViaveis = []
        let resultado = {
            erro: null,
            recintosViaveis: []
        }
        const informacaoAnimal = this.encontrarAnimal(especie)
        // Validar animal
        if (!informacaoAnimal) {
            return { erro: "Animal inválido" };
        }
        // Validar quantidade
        if (quantidade <= 0) {
            return { erro: "Quantidade inválida" };
        }
        if (informacaoAnimal === undefined) {
            return { erro: "Animal inválido" };
        }

        const tamanhoQuantidadeAnimal = this.calcularTamanhoAnimal(especie, quantidade)

        if (informacaoAnimal.grupoAlimentar === "carnivoro") {
            // TODO - vai se tornar uma funcao
            recintos.filter(r => {
                // Verifica se tem animais no recinto
                if (r.animaisExistentes.length > 0) {
                    r.animaisExistentes.filter(e => {
                        if (informacaoAnimal.bioma.includes(r.bioma) && e.especie === informacaoAnimal.especie) {
                            const espacoLivre = this.calcularEspacoLivre(r)
                            if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                            } else {
                                resultado.erro = "Não há recinto viável"
                                return resultado;
                            }
                        } else {
                            resultado.erro = "Não há recinto viável"
                            return resultado;
                        }
                    })
                } else {
                    if (informacaoAnimal.bioma.includes(r.bioma)) {
                        const espacoLivre = this.calcularEspacoLivre(r)
                        if (tamanhoQuantidadeAnimal <= espacoLivre) {
                            recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                        } else {
                            resultado.erro = "Não há recinto viável"
                            return resultado;
                        }
                    } else {
                        resultado.erro = "Não há recinto viável"
                        return resultado;
                    }
                }
            })

            // TODO - retornar array com recintos viaveis aqui

        } else {
            // TODO - vai se tornar uma funcao
            recintos.filter(r => {
                if (r.animaisExistentes.length > 0) {
                    r.animaisExistentes.filter(e => {
                        if (e.especie === "HIPOPOTAMO") {
                            if (r.bioma === "savana") {
                                if (informacaoAnimal.especie === e.especie) {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                        recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                                    } else {
                                        resultado.erro = "Quantidade inválida"
                                    }
                                } else {
                                    resultado.erro = "Não há recinto viável"
                                }
                            } else if (r.bioma !== "savana") {
                                if (informacaoAnimal.especie === e.especie) {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                        recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                                    } else {
                                        resultado.erro = "Quantidade inválida"
                                    }
                                } else {
                                    const espacoLivre = this.calcularEspacoLivre(r)
                                    if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                        recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal - 1} total: ${r.tamanhoTotal})`)
                                    } else {
                                        resultado.erro = "Quantidade inválida"
                                    }
                                }
                            }
                        }
                        // Se nao for hipopotamo
                        else {
                            if (informacaoAnimal.bioma.includes(r.bioma) && e.especie === informacaoAnimal.especie) {
                                const espacoLivre = this.calcularEspacoLivre(r)
                                if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                    recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                                } else {
                                    resultado.erro = "Quantidade inválida"
                                }
                            } else if (r.bioma !== "savana" && informacaoAnimal.bioma.includes(r.bioma) && e.especie !== informacaoAnimal.especie) {
                                const espacoLivre = this.calcularEspacoLivre(r)
                                if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                    recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal - 1} total: ${r.tamanhoTotal})`)
                                    console.log(recintosViaveis)
                                } else {
                                    resultado.erro = "Quantidade inválida"
                                }
                            } else {
                                resultado.erro = "Não há recinto viável"
                            }
                        }
                    })
                } else {
                    if (informacaoAnimal.especie === "MACACO" && quantidade < 2) {
                        resultado.erro = "Quantidade inválida"
                    } else {
                        if (informacaoAnimal.bioma.includes(r.bioma)) {
                            const espacoLivre = this.calcularEspacoLivre(r)
                            if (tamanhoQuantidadeAnimal <= espacoLivre) {
                                recintosViaveis.push(`Recinto ${r.numero} (espaço livre: ${espacoLivre - tamanhoQuantidadeAnimal} total: ${r.tamanhoTotal})`)
                            } else {
                                resultado.erro = "Não há recinto viável"
                            }
                        } else {
                            resultado.erro = "Não há recinto viável"
                        }
                    }
                }
            })
            // TODO - retornar array com recintos viaveis aqui
        }

        if (recintosViaveis.length > 0) {
            return { recintosViaveis: recintosViaveis.sort((a, b) => a.localeCompare(b)) };
        } else if (resultado.erro) {
            return { erro: resultado.erro };
        } else {
            return { erro: "Não há recinto viável" };
        }

    }

}
export { RecintosZoo as RecintosZoo };
const resultadox = new RecintosZoo().analisaRecintos('CROCODILO', 1);
console.log(resultadox)