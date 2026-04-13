const tbodyAtletismo = document.querySelector('#atletismo')

fetch('dados.json').then((response) => {
    response.json().then((dados) => {
        dados.atletas.map((atleta) => {
            if(atleta.competindo == "Sim" && atleta.modalidade == "ATLETISMO") {
                tbodyAtletismo.innerHTML += `
                                            <div class="tabela-container"> <!-- CADA CONTAINER DESTE REPRESENTA UM ALUNO -->
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Nome</th>
                                                            <th>Modalidade</th>
                                                            <th>Esquadrilha</th>
                                                            <th>Data Partida</th>
                                                            <th>Em jogo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="box atletismo">
                                                        <tr>
                                                            <tr>
                                                                <td data-label="Nome">Al. ${atleta.nomeDeGuerra}</td>
                                                                <td data-label="Modalidade">${atleta.modalidade}</td>
                                                                <td data-label="Local">${atleta.esquadrilha}</td>
                                                                <td data-label="Data Partida">${atleta.dataDeCompeticao}</td>
                                                                <td data-label="Em jogo">${atleta.competindo} &#128309;</td>
                                                            </tr>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            `
                        console.log(atleta)
            } else {
                tbodyAtletismo.innerHTML += `
                                            <div class="tabela-container"> <!-- CADA CONTAINER DESTE REPRESENTA UM ALUNO -->
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Nome</th>
                                                            <th>Modalidade</th>
                                                            <th>Esquadrilha</th>
                                                            <th>Data Partida</th>
                                                            <th>Em jogo</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="box atletismo">
                                                        <tr>
                                                            <tr>
                                                                <td data-label="Nome">Al. ${atleta.nomeDeGuerra}</td>
                                                                <td data-label="Modalidade">${atleta.modalidade}</td>
                                                                <td data-label="Local">${atleta.esquadrilha}</td>
                                                                <td data-label="Data Partida">${atleta.dataDeCompeticao}</td>
                                                                <td data-label="Em jogo">${atleta.competindo} &#128308;</td>
                                                            </tr>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            `
                    console.log(atleta)
            };
        });
    })
})