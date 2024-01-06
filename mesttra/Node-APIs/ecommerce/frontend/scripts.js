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
        <li class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 mb-4">
        <div class="bg-white shadow-md rounded-md p-4">
          <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
          <p class="text-gray-600">Categoria: ${product.category}</p>
          <p class="text-gray-800 font-bold">Preço: R$ ${product.price}</p>
          <button>Excluir</button>
        </div>
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
// PUT