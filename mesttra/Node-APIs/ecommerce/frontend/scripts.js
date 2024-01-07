//buscar o elemento que vai listar os meu produtos
const lista = document.querySelector('#lista');

const apiURL = 'http://localhost:3000/products'

//busco os meus inputs para pegar o que o usuario digitou
const nameInput = document.querySelector('#name')
const categoryInput = document.querySelector('#category')
const priceInput = document.querySelector('#price')

const modal = document.getElementById('editModal');
const modalContent = modal.querySelector('.modal-content');

const nameModal = document.getElementById('editModal-name')
const categoryModal = document.getElementById('editModal-category')
const priceModal = document.getElementById('editModal-price')


//GET
const getProducts = async () =>{
    lista.innerHTML = '';
    const respose = await fetch(apiURL)
    const products = await respose.json();

    products.map((product) => {
        lista.insertAdjacentHTML('beforeend',`
        <li class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 mb-4">
            <div class="bg-white shadow-md rounded-md p-4">
                <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
                <p class="text-gray-600">Categoria: ${product.category}</p>
                <p class="text-gray-800 font-bold">Preço: R$ ${product.price}</p>
                <div class="flex justify-between mt-2">
                    <button onclick="editProduct('${product.id}')" class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button>
                    <button onclick="deleteProduct('${product.id}')" class="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Excluir</button>
                </div>
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

    clearFields();

    getProducts();
}

const deleteProduct = async(id) =>{

    //construir a requisição delete
    const request = new Request(`${apiURL}/delete/${id}`, {
        method: 'DELETE'
    })

    const respose = await fetch(request);

    const data = await respose.json()

    alert(`Produto ${data.data[0].name} excluido`);    

    getProducts();
}



getProducts();


function clearFields() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
}


const editProduct = async (idProduct) => {
    //consulta os dados do produto clicado
    let product = await getProductById(idProduct);
    // console.log(product)
    // console.log(product.name)

    // cria um atributo para o id do produto aberto no modal
    modal.setAttribute('data-product-id', idProduct);

    modal.classList.remove('hidden');
    modalContent.classList.add('z-20');

    nameModal.value = product.name;
    categoryModal.value = product.category;
    priceModal.value = product.price;
}

//PUT
const submitModal = async (event) =>{
    event.preventDefault()
    //monto o objeto produto que irá para o backend
    const product = {
        name: nameModal.value,
        category: categoryModal.value,
        price: priceModal.value
    }

    console.log(product)
    const currentProductId = modal.getAttribute('data-product-id');

    //construir a requisição put
    const request = new Request(`${apiURL}/edit/${currentProductId}`, {
        method: 'PUT',
        body: JSON.stringify(product), // transforma o objeto em json
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    //mando a requisição para o backend
    const respose = await fetch(request);
    console.log(request)

    const data = await respose.json() //recebo a resposta do backend
    console.log(data)
    
    alert(`Produto ${data.data[0].name} editado`); //mensagem de sucesso

    getProducts();
}


const getProductById = async (idProduct) => {
    const respose = await fetch(`${apiURL}/${idProduct}`)
    const product = await respose.json();
    return product[0]
}


// Função para fechar o modal
function closeModal() {
    document.getElementById('editModal').classList.add('hidden');
}