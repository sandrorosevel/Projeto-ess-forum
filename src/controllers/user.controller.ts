import { User } from "../models/user";

export class UserController {
    
    Users: User[];
    
    constructor() {
        this.Users = [];
    }

    getUsers(): User[] {
        return this.Users;
    }

    getUser(nome: string): User {
        const user = this.Users.find(u => u.nome == nome)
        return user;
    }

    SingupUser(nome: string, senha:string, email: string): boolean{
        
        if(this.Users.find(u => u.email == email)){
            return false;
        }
        if(this.Users.find(u => u.nome == nome)){
            return false;
        }
        const newUser = new User(nome, senha, email);
        this.Users.push(newUser);
        return true;
        
    }

    AuthUser(nome: string, senha:string) : boolean{

        var user =-1;
        let valid = false;

        for(var i of this.Users){
            if(i.nome==nome && i.senha==senha){
                 user = 1;
               
            }
        }
    
        if(user == -1){
            valid= false;
            return valid;
        }
        valid= true
        return valid;

    }



}