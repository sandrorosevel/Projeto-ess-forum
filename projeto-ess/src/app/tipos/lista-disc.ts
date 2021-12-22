import { usuario } from "./usuario";

export class listadisc{

    titulo! : string;
    comentarios! : string[];
    autor! : usuario;

        constructor(titulo : string, autor : usuario){
            this.titulo=titulo;
            this.comentarios=[];
            this.autor=autor;
        }

    } 
