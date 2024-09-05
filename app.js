function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos pelo ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa, que serão concatenados dentro do loop
    let resultados = "";

    // Itera sobre cada elemento (dado) dentro do array 'dados' (assumindo que 'dados' seja um array de objetos com as propriedades 'titulo', 'descricao' e 'link')
    for (let dado of dados) {
        // Constrói o HTML para cada resultado da pesquisa, formatando os dados do objeto 'dado'
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais Informações</a> </div>
    `;
    }

    // Atribui o HTML gerado para o conteúdo interno da seção de resultados, substituindo qualquer conteúdo anterior
    section.innerHTML = resultados;
}


