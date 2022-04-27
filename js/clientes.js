'use strict'

const url = 'https://testeleonid.herokuapp.com/clientes'

const lerClientes = async () => {
    const response = await fetch(url)
    return await response.json()

}

const criarCliente = async (cliente) => {
    
    const opcoes = {
        method: 'POST',
        body: JSON.stringify(cliente),
        headers: {
            'content-type':'application/json'
        }

    }

    const response = await fetch(url, opcoes)
    console.log(response.ok)

}

export{
    lerClientes,
    criarCliente
}