//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);


let qtdeMatrizes = Number(lines.shift());

for(let instancia = 1; instancia <= qtdeMatrizes; instancia++){

    console.log(`Instancia ${instancia}` );
    let matriz = []

    for(let linha = 0; linha < 9; linha++){
        let colunas = lines.shift().split(" ");
        matriz[linha] = colunas.map((num) => Number(num))
    }

    function verificarArray(array) {
        // Verifica se não há duplicatas no array
        const numerosVistos = [];
        for (let i = 0; i < 9; i++) {
            const num = array[i];
            if (num !== 0 && numerosVistos[num] === 1) {
                return false; // Duplicata encontrada
            }
            numerosVistos[num] = 1;
        }
        return true; // Não há duplicatas
    }

    function validarSudoku(sudoku) {
        // Verificar linhas e colunas
        for (let i = 0; i < 9; i++) {
            // Verificar linha
            if (!verificarArray(sudoku[i])) {
                return false;
            }

            // Verificar coluna
            const coluna = [];
            for (let j = 0; j < 9; j++) {
                coluna[j] = sudoku[j][i];
            }
            if (!verificarArray(coluna)) {
                return false;
            }
        }

        // Verificar blocos 3x3
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                const bloco = [];
                let indice = 0;
                for (let x = 0; x < 3; x++) {
                    for (let y = 0; y < 3; y++) {
                        bloco[indice++] = sudoku[i + x][j + y];
                    }
                }
                if (!verificarArray(bloco)) {
                    return false;
                }
            }
        }

        return true; // Sudoku válido
    }

    // Verificar se o Sudoku é válido
    if (validarSudoku(matriz)) {
        console.log("SIM\n");
    } else {
        console.log("NAO\n");
    }
}