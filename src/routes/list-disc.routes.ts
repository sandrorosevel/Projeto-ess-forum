import { Router, Request, Response} from "express";
import { listdiscController } from "../controllers/list-disc.controller";

const listdiscRouter = Router();
const ListdiscController = new listdiscController();


listdiscRouter.route("/")
    .get((req: Request, res: Response ) =>{
        let listdisc = ListdiscController.getAllDiscs();
        return res.json({ listdisc });
    })

    .post((req: Request, res: Response) =>{
        
        let titulo = req.body.titulo;
        let autor = req.body.autor;
        
        const newDisc = ListdiscController.createDisc(titulo, autor);
        if(newDisc == true){
            return res.json({Message: "Discussao criada com sucesso"});
         }
        
    })

    .put((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    }) 

    .delete((req: Request, res: Response) =>{
        return res.json({Warnig: "Método delete não suportado"});
    }) 


    listdiscRouter.route("/comentar")
    .get((req: Request, res: Response ) =>{
        var body = req.body

        const titulo = body.titulo;
        const disc = ListdiscController.getDiscByTitle(titulo);
        return res.json({disc});
        
        
    })

    .post((req: Request, res: Response) =>{
        let titulo = req.body.titulo;
        let comentario = req.body.comentario;
        
        const newDisc = ListdiscController.addComment(titulo, comentario);
        if(newDisc == true){
            return res.json({Message: "COMENTARIO ADICIONADO"});
         }
        return res.json({Warnig: "Método Post não suportado"});
    })

    .put((req: Request, res: Response) =>{
        return res.json({Warnig: "Método Post não suportado"});
    }) 

    .delete((req: Request, res: Response) =>{
        let titulo = req.body.titulo;
        let autor = req.body.autor;
        let index = req.body.index;

        ListdiscController.deleteComment(titulo, autor, index);
    
        return res.json({Warnig: "Comentario DELETADO"});
    }) 

    listdiscRouter.route("/comentar/deletar")
    .get((req: Request, res: Response ) =>{ 
        return res.json({Warnig: "Método get não suportado"});
     })

        .post((req: Request, res: Response) =>{
        let titulo = req.body.titulo;
        let autor = req.body.autor;
        let index = req.body.index;

        ListdiscController.deleteComment(titulo, autor, index);
    
        return res.json({Warnig: "Comentario DELETADO"});
     })

     .put((req: Request, res: Response) =>{
        return res.json({Warnig: "Método put não suportado"});
     }) 

     .delete((req: Request, res: Response) =>{
        return res.json({Warnig: "Método delete não suportado"});
     }) 



export default listdiscRouter;