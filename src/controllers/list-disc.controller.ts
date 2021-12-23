import { listdisc } from "../models/list-disc";
import { User } from "../models/user";

export class listdiscController {
    
    lists: listdisc[];

    constructor() {
        this.lists=[];
    }

    getAllDiscs(): listdisc[] {
        return this.lists;
    }

    getDiscByTitle(titulo : string): listdisc {
        const disc = this.lists.find(l => l.titulo == titulo);
        return disc;
    }

    createDisc(titulo : string, autor : string) : boolean {
        let disc = new listdisc(titulo, autor);
        this.lists.push(disc);
        return true;
    }

    addComment(titulo : string, comment : string): boolean {
        let disc = this.getDiscByTitle(titulo);

        if (typeof(disc) == "undefined") {
            return false;
        }
        let index = this.lists.indexOf(disc)
        this.lists[index].comentarios.push(comment);
        return true;
    }


    deleteComment (titulo : string, autor: string, index: number) : boolean {
        let disc = this.getDiscByTitle(titulo);
        //let user = this.getUser(user);

        if (/*user.adm || user.*/autor == disc.autor){        
            let listIndex = this.lists.indexOf(disc)
            this.lists[listIndex].comentarios.splice(index, 1);
        }
        
        return false;
    }

    

    

}