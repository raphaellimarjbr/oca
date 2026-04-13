// Captura os elementos da tela
const inputPesquisa = document.querySelector('#campoPesquisa');
const containerAtletas = document.querySelector('#atetlas');

// Variável para guardar todos os atletas carregados do JSON
let todosOsAtletas = []; 

// 1. Função para desenhar os atletas na tela
function renderizarAtletas(listaDeAtletas) {
    // Limpa o container antes de desenhar a nova lista (importante para a pesquisa)
    containerAtletas.innerHTML = ''; 

    listaDeAtletas.forEach((atleta) => {
        // Junta o array de modalidades em um texto separado por vírgula
        const modalidadesTexto = atleta.modalidade.join(', '); 
        
        // Define a bolinha azul ou vermelha com base no status
        const iconeStatus = atleta.competindo === "Sim" ? "&#128309;" : "&#128308;";

        // Adiciona o HTML ao container
        containerAtletas.innerHTML += `
            <div class="tabela-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Modalidade</th>
                            <th>Esquadrilha</th>
                            <th>Data</th>
                            <th>Em jogo</th>
                            <th>Destino</th>
                        </tr>
                    </thead>
                    <tbody class="box atetlas">
                        <tr>
                            <td data-label="Nome"> Al. ${atleta.nomeDeGuerra}</td>
                            <td data-label="Modalidade"> ${modalidadesTexto}</td>
                            <td data-label="Local"> ${atleta.esquadrilha}</td>
                            <td data-label="Data"> ${atleta.dataDeCompeticao}</td>
                            <td data-label="Em jogo"> ${atleta.competindo} ${iconeStatus}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    });
}

// 2. Buscar os dados do JSON
fetch('dados.json')
    .then((response) => response.json())
    .then((dados) => {
        todosOsAtletas = dados.atletas; // Salva os dados na nossa variável
        renderizarAtletas(todosOsAtletas); // Renderiza a lista inteira pela primeira vez
    });

// 3. A Mágica da Pesquisa
inputPesquisa.addEventListener('input', (evento) => {
    // Pega o que o usuário digitou e transforma em minúsculo
    const termo = evento.target.value.toLowerCase(); 

    // Filtra a lista principal
    const atletasFiltrados = todosOsAtletas.filter((atleta) => {
        
        // Object.values pega todos os valores do objeto (Nome, Esquadrilha, Modalidade, etc)
        // O .some() verifica se PELO MENOS UM desses valores contém o termo pesquisado
        return Object.values(atleta).some((valor) => {
            // Transforma o valor em texto minúsculo e checa se inclui o termo digitado
            return String(valor).toLowerCase().includes(termo);
        });
        
    });

    // Pega a lista filtrada e manda renderizar na tela de novo!
    renderizarAtletas(atletasFiltrados);
});