export default function calculo (json, homem, mulher, crianca) {

    let total = {};
    const totalPessoas = homem + mulher + crianca;

    let maximoQuilosConsumidos = (homem * 600) + (mulher * 400) + (crianca * 250);

    maximoQuilosConsumidos /= 1000; // Fica em formato de Quilo, ex: 4.5 kg
    // let maximoQuilosConsumidosArredondados = Math.round(maximoQuilosConsumidos) // Arredonda para cima o consumo ex: era 4.5, fica 5 kg

    let cortes = Array();
    let bebidas = Array();
    let acompanhamentos = Array();

    if (json.itens.dadosCortes.length > 0) {

        json.itens.dadosCortes.map((item) => {

            let kilos = (maximoQuilosConsumidos / json.itens.dadosCortes.length).toFixed(1);
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
                litros = ((0.3 * (totalPessoas - crianca)) / json.itens.dadosBebidas.length).toFixed(1);

            } else {
                litros = ((0.3 * totalPessoas) / json.itens.dadosBebidas.length).toFixed(1)
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

            if (item.nome == 'Pão de Alho' || item.nome == 'Pão Francês') {

                if (item.nome == 'Pão de Alho') {

                    unidade = (1 * totalPessoas);
                } else {
                    unidade = (3 * totalPessoas);
                }

                precoItem = (unidade * item.preco).toFixed(2);

                acompanhamentos.push(
                    [item.nome, `${unidade} unidade(s)`, `R$ ${precoItem}`]
                );
            }
        });
    }
    
    for (let tipo in json.itens) {

        totalTipo = 0;

        for (let item of json.itens[tipo]) {

            if (tipo == "dadosCortes") {

                totalTipo += item.preco;
                continue;
            }

            if (item.nome == "Cerveja") {
                totalTipo += item.preco * (totalPessoas - crianca);
                continue;
            }

            totalTipo += item.preco * totalPessoas;
        }

        if (tipo == "dadosCortes") {

            // Preço a ser pago nas carnes por Quilo
            precoMedioQuilo = totalTipo / json.itens.dadosCortes.length;

            // Preço das carnes dividido pelo quilos maximo consumidos
            totalTipo = precoMedioQuilo * maximoQuilosConsumidos;
        }
        
        total[tipo] = totalTipo;
    }

    precoFinal = Object.values(total).reduce((precoFinal, precoTipo) => precoFinal + precoTipo, 0);

    // console.log(cortes);
    // console.log(bebidas);
    // console.log(acompanhamentos);

    // let finalDados = {
    //     precoTotal: precoFinal.toFixed(2),
    //     valorPorPessoa: (precoFinal / (totalPessoas - crianca)).toFixed(2)
    // }

    // console.log(finalDados);
}
