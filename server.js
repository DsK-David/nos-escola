const express = require("express")
const app = express()
const sqlite3 = require('sqlite3');
const path = require('path');
const bcrypt = require('bcrypt')

const server = require('http').createServer(app)
const port = 5500
app.use(express.static('public'))
const dbPath = path.resolve(__dirname, 'nos_escola.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            idade INTEGER,
            email TEXT,
            senha TEXT,
            escola TEXT,
            avatar TEXT
        )
    `);
});

// Configuração do Express para lidar com formulários
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/view/index.html")
})
app.get('/auth/login',(req,res) => {
    res.sendFile(__dirname+"/view/index.html")
})
app.get('/auth/cadastro',(req,res) => {
    res.sendFile(__dirname+"/view/cadastro.html")
})
app.get('/home',(req,res) => {
    res.sendFile(__dirname+"/view/home.html")
})
app.get('/new/posts/',(req,res) => {
    res.sendFile(__dirname+"/view/post.html")
})
app.post('/new/user/',(req,res) => {
    const { nome, idade, email,senha, escola } = req.body;
    const avatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${nome}`


    // Inserir dados no banco de dados
    const stmt = db.prepare('INSERT INTO usuarios (nome, idade, email,senha, escola,avatar) VALUES (?, ?, ?, ?, ?,?)');
    stmt.run(nome, idade, email,senha, escola,avatar);
    stmt.finalize();

    res.redirect('/auth/login');
})
app.post('/log/user/', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    try {
        // Buscar usuário no banco de dados pelo email
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.get(query, [email], (err, row) => {
            if (err) {
                console.error('Erro ao buscar usuário:', err);
                return res.status(500).json({ error: 'Erro interno do servidor.' });
            }

            if (!row) {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }

            // Comparar a senha fornecida com a senha armazenada
            if (senha === row.senha) {
                return res.redirect('/home');
            } else {
                return res.status(401).json({ error: 'Credenciais inválidas.' });
            }
        });
    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
});

app.get('/dados', (req, res) => {
    db.all('SELECT * FROM usuarios', (err, rows) => {
       if (err) {
          res.status(500).send(err.message);
          return;
       }
 
       res.json(rows);
    });
 });
 app.get('/delete', (req, res) => {
    db.run('DELETE FROM usuarios', function(err) {
      if (err) {
        return res.status(500).send('Erro ao apagar os dados.');
      }
      return res.status(200).send('Todos os dados foram apagados com sucesso.');
    });
  });
  

app.listen(port,()=>{
    console.log('server rodando na porta 3000')
})