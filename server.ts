import express from 'express';
import userrouter from './src/routes/user.routes';
import listdiscRouter from './src/routes/list-disc.routes';

const server = express();

server.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});



server.use(express.json());

server.use("/user", userrouter)
server.use("/list-disc", listdiscRouter)

server.listen(8080, () =>{
    console.log('Servidor executando na porta 8080');
})
