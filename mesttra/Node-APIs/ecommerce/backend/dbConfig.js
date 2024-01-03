// importo o Pool do postgress-node

/*Um pool de conexões é uma coleção de conexões de banco de dados reutilizáveis
que podem ser compartilhadas por várias partes de seu aplicativo.*/

const { Pool } = require('pg')

//inicio a minha classe de configuração do pool de conexao
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecommercemesttra',
    password: 'root',
    port: 5432
});


// teste de conexão usa essa função e executa só esse arquivo com o comando 'node dbConfig.js'
// const teste = async() => {
//     const result = await pool.query('select * from products')
//     console.log(result.rows[0])
// }

// teste()

//exporto a constante pool
module.exports = pool;