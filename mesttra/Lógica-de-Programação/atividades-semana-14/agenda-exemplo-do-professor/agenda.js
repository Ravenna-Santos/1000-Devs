const MENU_CADASTRAR_NOME = 1
const MENU_EXIBIR_AGENDA = 2
const MENU_CONSULTAR_NOME = 3
const MENU_ALTERAR_NOME = 4
const MENU_EXCLUIR_NOME = 3

const MENU_PRINCIPAL_SAIR = 6

const ESPACAMENTO_CODIGO = 6
const ESPACAMENTO_NOME = 30
const ESPACAMENTO_TELEFONE = 15
const ESPACAMENTO_EMAIL = 15

const fileSystem = require('fs'); 
const path = require('path');

//identifica em qual diretorio o sistema esta armazenado
const currentPath = path.dirname(process.argv[1]);
//para servir de referencia para carregarmos o arquivo txt
const localBancoDados = currentPath + '\\bancoDados.txt'


//define os itens que irao compor o menu
const ITENS_MENU = [    [1,"Cadastrar nome"],
                        [2,"Exibir agenda"],
                        [3,"Consultar nomes"],
                        [4,"Alterar nomes"],
                        [MENU_PRINCIPAL_SAIR,"Sair"]
                    ]

const prompt = require("prompt-sync")()

app()

function app(){
    //A memoria da agenda sera um matriz de 2 dimensoes
    //[x][0] Nome
    //[x][1] telefone
    //[x][2] email
    let cadastroAgenda = []
    let itemMenuSelecionado
    let mensagem = ""
    let retorno = []

    cadastroAgenda = lerDados()

    do {
        console.clear()
        //imprime o conteudo da variavel mensagem pois pode existir alguma mensagem
        //gerada na iteração anterior do laço
        console.log(mensagem)
        //depois de imprimir a mensagem apaga o conteúdo da mensagem
        mensagem = ""

        itemMenuSelecionado = exibirMenuPrincipal()
        retorno = processarOpcaoMenu(itemMenuSelecionado, cadastroAgenda)
        
        mensagem = retorno[0]
        cadastroAgenda = retorno[1]

    } while (itemMenuSelecionado != MENU_PRINCIPAL_SAIR)
}

function processarOpcaoMenu(itemMenuSelecionado, cadastroAgenda){
    let mensagem = ""

    switch (itemMenuSelecionado) {
        case MENU_CADASTRAR_NOME: 
            cadastroAgenda = cadastrarNome(cadastroAgenda)
            mensagem = "Nome cadastrado com sucesso!"
            break;
        case MENU_EXIBIR_AGENDA: 
            imprimirContatos(cadastroAgenda)
            pausar()
            break
        case MENU_CONSULTAR_NOME:
            let econtrouAlgumContato
            econtrouAlgumContato = imprimirContatosPorNome(cadastroAgenda)

            if (econtrouAlgumContato){
                pausar()
            } else {
                mensagem = "Não foi encontrado contatos com este nome"
            }

            break
        case MENU_ALTERAR_NOME:
            //implementar ainda
            break
        case MENU_EXCLUIR_NOME:
            //implementar ainda
            break
        case MENU_PRINCIPAL_SAIR:
            gravarDados(cadastroAgenda)
    }

    return [mensagem, cadastroAgenda]
}

function lerDados(){
    let cadastroAgenda = []
    try {
        let input = require('fs').readFileSync(localBancoDados, 'utf8').split('\r\n');
        //leitura das linhas do arquivo
        for(let linha = 0; linha < input.length; linha++){
            let registro = input[linha].split(";")
            cadastroAgenda[linha] = registro
        }
    } catch (erro) {
        //nada a fazer
    }

    //importar todo o conteudo do arquivo para a memoria
    //nao e uma abordagem interessante para arquivos muito grandes
    //pois isso vai consumir muita memoria
    //para aquivos grandes a abordagem precisaria ser utilizar um banco de dados
    return cadastroAgenda

}

function gravarDados(cadastroAgenda){
    let conteudo = ""

    for(let index = 0; index < cadastroAgenda.length; index++){
        let [nome, telefone, email] = cadastroAgenda[index]
        conteudo += nome + ";" + telefone + ";" + email 
        //no ultimo registro nao inserir a quebra de linha
        //para que nao fique uma linha em branco no fim do arquivo
        if (!ehUltimaPosicao(index,cadastroAgenda)) {
            conteudo += "\r\n"
        }
        console.log()
    }

    fileSystem.writeFileSync(localBancoDados, conteudo); 
}

function ehUltimaPosicao(posicao,cadastroAgenda){
    return (posicao == (cadastroAgenda.length - 1))
}

function imprimirContatosPorNome(agenda){
    console.log()
    let inicioNome = prompt("Digite o início do nome a ser pesquisado: ")

    let encontrouContato = false

    console.log()
    imprimirCabelhoContatos(ESPACAMENTO_NOME, ESPACAMENTO_EMAIL, ESPACAMENTO_TELEFONE)
    for (let i = 0; i < agenda.length; i++) {
        // Verifique se a string começa com o determinador
        if (agenda[i][0].startsWith(inicioNome)) {
            imprimirContato(i, agenda[i]);
            encontrouContato = true
        }
    }

    return encontrouContato
}

function cadastrarNome(agenda){
    //obtem dos dados e realiza o cadastro do novo contato
    let registro = []
    registro[0] = prompt("Digite o nome: ")
    registro[1] = prompt("Digite o telefone: ")
    registro[2] = prompt("Digite o email: ")

    //adiciona o novo contato na agenda
    agenda[agenda.length] = registro

    return agenda
}

function imprimirContato(codigo, registro){
    let nome

    //se o nome for maior que 30 caracteres coloca ... para nao estourar o alinhamento
    nome = (registro[0].length > ESPACAMENTO_NOME) ? registro[0].substr(0,27) + "..." : registro[0]

    console.log(`${ (codigo+1).toString().padStart(ESPACAMENTO_CODIGO)} ${ nome.padEnd(ESPACAMENTO_NOME)} ${registro[1].padEnd(ESPACAMENTO_TELEFONE)} ${registro[2].padEnd(ESPACAMENTO_EMAIL)}`);
}

function imprimirContatos(agenda){
    //imprimi todos os contatos na agenda
    console.log()
    imprimirCabelhoContatos(agenda.length)

    for (let index = 0; index < agenda.length; index++) {
        imprimirContato(index, agenda[index])
    }
}

function imprimirCabelhoContatos(qtdeContatos){
    if (qtdeContatos > 0){
        console.log("CODIGO".padEnd(ESPACAMENTO_CODIGO) + " " + "NOME".padEnd(ESPACAMENTO_NOME) + " " + "TELEFONE".padEnd(ESPACAMENTO_TELEFONE) + " "  + "EMAIL".padEnd(ESPACAMENTO_EMAIL))
    } else {
        console.log("Nenhum contato cadastrado!")
    }
}

function pausar(){
    console.log()
    prompt("Tecle ENTER para continuar")
}

function exibirMenuPrincipal(){
    let itemSelecionado

    console.log("====================== MENU PRINCIPAL ======================")
    console.log()

    //imprime os itens do menu
    for (let index = 0; index < ITENS_MENU.length; index++) {
        //coluna 0 é o codigo do menu
        //coluna 1 é nome do item do menu
        console.log(ITENS_MENU[index][0] + " - " + ITENS_MENU[index][1]);
    }
    console.log()

    //conta a quantidade de vezes que o usuario ja tentou digitar um item do menu
    let tentativa = 0

    //le o codigo do menu ate que seja digitado um codigo valido
    do {
        //se nao for a primeira vez ele já digitou o codigo incorreto
        if (tentativa > 0){
            console.log("Código inválido!")
        }

        itemSelecionado = Number(prompt("Digite o código da opção desejada: "))
        tentativa++
    } while(!validarItemMenu(itemSelecionado,ITENS_MENU))

    return itemSelecionado
}

function validarItemMenu(item, itensValidos){
    //verifica se o item e um dos itens validos dentro de itensValidos
    for (let index = 0; index < itensValidos.length; index++) {
        if (item == itensValidos[index][0]){
            return true
        }
    }

    return false
}