export default function calculo (json, homem, mulher, crianca) {

    let total = {};
    const totalPessoas = homem + mulher + crianca;

    let maximoQuilosConsumidos = (homem * 600) + (mulher * 400) + (crianca * 250);

    maximoQuilosConsumidos /= 1000; // Fica em formato de Quilo, ex: 4.5 kg
    // let maximoQuilosConsumidosArredondados = Math.round(maximoQuilosConsumidos) // Arredonda para cima o consumo ex: era 4.5, fica 5 kg

    let cortes = Array();
    let bebidas = Array();
    let acompanhamentos = Array();
    let suprimentos = Array();

    if (json.itens.dadosCortes.length > 0) {

        json.itens.dadosCortes.map((item) => {

            let kilos = (maximoQuilosConsumidos / json.itens.dadosCortes.length);
            let precoItem = (((kilos * 1000) * item.preco) / 1000).toFixed(2);

            cortes.push(
                [item.nome, `${kilos} kg`, `R$ ${precoItem}`]
            );
        });
    }

    if (json.itens.dadosBebidas.length > 0) {

        json.itens.dadosBebidas.map((item) => {
            let litros;
            let precoItem;

            if (item.nome == 'Cerveja') {
                litros = ((0.3 * (totalPessoas - crianca)) / json.itens.dadosBebidas.length);

            } else {
                litros = ((0.3 * totalPessoas) / json.itens.dadosBebidas.length);
            }

            precoItem = (((litros * 1000) * item.preco) / 1000).toFixed(2);

            bebidas.push(
                [item.nome, `${litros} L`, `R$ ${precoItem}`]
            );
        });
    }

    if (json.itens.dadosAcompanhamento.length > 0) {
        json.itens.dadosAcompanhamento.map((item) => {

            let unidade;
            let precoItem;
            let kilos;

            if (item.nome == 'Pão de Alho' || item.nome == 'Pão Francês') {

                if (item.nome == 'Pão de Alho') {

                    unidade = ((1 * totalPessoas) - totalPessoas / 2);
                } else {
                    unidade = ((3 * totalPessoas) - totalPessoas / 2);
                }

                precoItem = (unidade * item.preco).toFixed(2);

                acompanhamentos.push(
                    [item.nome, `${unidade} unidade(s)`, `R$ ${precoItem}`]
                );
            } else {

                if (item.nome == 'Queijo Coalho') {
                    kilos = (totalPessoas * 0.025).toFixed(2);
                } else if (item.nome == 'Farofa pronta') {
                    kilos = (totalPessoas * 0.020).toFixed(2);
                } else if (item.nome == 'Arroz') {
                    kilos = (totalPessoas * 0.045).toFixed(2);
                } else if (item.nome == 'Salada de maionese') {
                    kilos = (totalPessoas * 0.035.toFixed(2));
                }

                precoItem = (((kilos * 1000) * item.preco) / 1000).toFixed(2);

                acompanhamentos.push(
                    [item.nome, `${kilos} kg`, `R$ ${precoItem}`]
                );
            }
        });
    }

    if (json.itens.dadosSuprimentos.length > 0) {

        json.itens.dadosSuprimentos.map((item) => {
            let unidade;
            let precoItem;
            let kilos;

            if (item.nome == 'Carvão') {

                kilos = ((totalPessoas - totalPessoas / 2) / 2).toFixed(2);
                precoItem = (((kilos * 1000) * item.preco) / 1000).toFixed(2);
                suprimentos.push(
                    [item.nome, `${kilos} kg`, `R$ ${precoItem}`]
                );
            } else {

                if (item.nome == 'Fósforos/ascendedores') {
                    unidade = 1;
                } else {
                    unidade = 100;
                }

                precoItem = (item.preco).toFixed(2);

                suprimentos.push(
                    [item.nome, `${unidade} unidade(s)`, `R$ ${precoItem}`]
                );
            }
        });
    }

    let precoTotal = 0;

    [ cortes, acompanhamentos, suprimentos, bebidas ].map((pos) => {

        if (pos.length > 0) {
            
            pos.map((item) => {

                precoTotal += Number(item[2].replace('R$ ', ''));
            })
        }
    });

    return {
        precoFinal: precoTotal.toFixed(2),
        valorPorPessoaSemCrianca: (precoTotal / (totalPessoas - crianca)).toFixed(2),
        valorPorPessoaComCrianca: (precoTotal / totalPessoas).toFixed(2),
        itens: {
            'cortes': cortes,
            'acompanhamentos': acompanhamentos,
            'suprimentos': suprimentos,
            'bebidas': bebidas,
        }
    }

    // console.log(precoTotal.toFixed(2));
    
    // for (let tipo in json.itens) {

    //     totalTipo = 0;

    //     for (let item of json.itens[tipo]) {

    //         if (tipo == "dadosCortes") {

    //             totalTipo += item.preco;
    //             continue;
    //         }

    //         if (item.nome == "Cerveja") {
    //             totalTipo += item.preco * (totalPessoas - crianca);
    //             continue;
    //         }

    //         totalTipo += item.preco * totalPessoas;
    //     }

    //     if (tipo == "dadosCortes") {

    //         // Preço a ser pago nas carnes por Quilo
    //         precoMedioQuilo = totalTipo / json.itens.dadosCortes.length;

    //         // Preço das carnes dividido pelo quilos maximo consumidos
    //         totalTipo = precoMedioQuilo * maximoQuilosConsumidos;
    //     }
        
    //     total[tipo] = totalTipo;
    // }

    // precoFinal = Object.values(total).reduce((precoFinal, precoTipo) => precoFinal + precoTipo, 0);
}
