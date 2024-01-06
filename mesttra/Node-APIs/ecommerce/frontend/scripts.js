//buscar o elemento que vai listar os meu produtos
const lista = document.querySelector('#lista');

const apiURL = 'http://localhost:3000/products'

//busco os meus inputs para pegar o que o usuario digitou
const nameInput = document.querySelector('#name')
const categoryInput = document.querySelector('#category')
const priceInput = document.querySelector('#price')


//GET
const getProducts = async () =>{
    lista.innerHTML = '';
    const respose = await fetch(apiURL)
    const products = await respose.json();

    products.map((product) => {
        lista.insertAdjacentHTML('beforeend',`
        <li>
        <h2>${product.name}</h2>
        <p>${product.category}</p>
        <P>${product.price}</P>
        </li>
        `)
    })
}

//POST
const submitForm = async (event) =>{
    event.preventDefault()
    //monto o objeto produto que irá para o backend
    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: priceInput.value
    }
    //console.log(product)

    //construir a requisição post
    const request = new Request(`${apiURL}/add`, {
        method: 'POST',
        body: JSON.stringify(product), // transforma o objeto em json
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    //mando a requisição para o backend
    const respose = await fetch(request);

    const data = await respose.json() //recebo a resposta do backend
    
    alert(`Produto ${data.data[0].name} cadastrado`); //mensagem de sucesso

    getProducts();
}

getProducts();

//TO DO 
// DELETE
// estilização com tailwind css
// PUT