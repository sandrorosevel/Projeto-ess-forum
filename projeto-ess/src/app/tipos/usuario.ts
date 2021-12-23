export class User {
    
    nome: string;
    senha: string;
    email: string;
    adm: boolean;
    
    
    constructor(nome: string, senha: string, email: string) {
        this.nome=nome;
        this.senha=senha;
        this.email=email;
        this.adm=false;
    }
}