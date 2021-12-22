import { Router, Request, Response} from "express";
import { UserController } from "../controllers/user.controller";

const userrouter = Router();
const userController = new UserController();

userrouter.route("/")
    .get((req: Request, res: Response) =>{
        let users = userController.getUsers();
        return res.json({ users });
    })    

    .post((req: Request, res: Response) =>{
        
        let nome = req.body.nome;
        let senha = req.body.senha;
        let email = req.body.email;
        
        const newUser = userController.SingupUser(nome, senha, email);
        if(newUser== true){
            return res.json({Message: "Usuário criado com sucesso"});
         }
         return res.status(409).json({err: "Já existe um usuário com o mesmo email ou nome"});
    })

    .put((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    }) 

    .delete((req: Request, res: Response) =>{
        return res.json({Warnig: "Método delete não suportado"});
    }) 

userrouter.route("/:nome")
    .get((req: Request, res: Response) =>{
    
        var body = req.body

        const nome = body.nome;
        const senha = body.senha;
        
        const auth = userController.AuthUser(nome, senha);

        if(auth){
            return res.json({Message: "Usuário autenticado com sucesso"});
        }
        return res.status(409).json({err: "Usuário ou senha incorretos"});
    }) 
    
    .post((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    })

    .put((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    })

    .delete((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    })

 export  default userrouter; 