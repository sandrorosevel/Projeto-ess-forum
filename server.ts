import express from 'express';
import userrouter from './src/routes/user.routes';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/user", userrouter)

app.listen(port, () =>{
    console.log('Servidor executando na porta 3000');
})
