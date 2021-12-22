import { User } from "./user";


export class listdisc {
    
    titulo: string;
    comentarios: string[];
    autor: User;
    
    constructor(titulo: string,  autor: User) {
        this.titulo=titulo;
        this.comentarios=[];
        this.autor=autor;
    }
}