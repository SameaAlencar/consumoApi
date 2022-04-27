'use strict'

import{openModal, closeModal} from './modal.js'
import{lerClientes, criarCliente, deletarCliente} from './clientes.js'


const criarLinha = (cliente)=>{

    const linha = document.createElement('tr')
    linha.innerHTML = `
            <td>${cliente.nome}</td>
            <td>${cliente.email}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cidade}</td>
            <td>
                <button type="button" class="button green" id="editar"-${cliente.id}>editar</button>
                <button type="button" class="button red" id="excluir"-${cliente.id}>excluir</button>
            </td> 
        `

        return linha

}


const atualizarTabela = async () =>{
    const clientesContainer = document.getElementById('clientes-container')
    
    //Ler a API e retornar o resultado em uma variável
    const clientes = await lerClientes()

    //Preencher a tabela com as informações
    const linhas = clientes.map(criarLinha)
    clientesContainer.replaceChildren(...linhas)



} 



// Eventos 


const salvarCliente = async () => {
    //criar um json com as informações do cliente

    const cliente = {
        "id": "",
        "nome": document.getElementById('nome').value,
        "email": document.getElementById('email').value,
        "celular": document.getElementById('celular').value,
        "cidade": document.getElementById('cidade').value
      }

    //Enviar o json para o servidor API
    await criarCliente(cliente)

    //Fechar a modal
    closeModal()
    

    //Atualizar tabela 
    atualizarTabela()

}


    const editarExcluir = async (cursor) => {
        if(cursor.target.type == 'button'){

            const [botao, posicao] = cursor.target.id.split('-')
            if(botao == 'editar'){
                
                //função para editar o cliente
        }else if(botao == 'excluir'){
            await deletarCliente(posicao)
            atualizarTabela()

        }
       

    }
}

atualizarTabela()


document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('salvar').addEventListener('click', salvarCliente)
document.getElementById('cliente-container').addEventListener('click', editarExcluir)


