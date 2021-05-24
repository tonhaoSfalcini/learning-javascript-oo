export class SysAuth{

static login(usuario, senha){

    if(SysAuth.hasAuth(usuario)){
        return (usuario.senha == senha);
    }
    return false;
}

static hasAuth(object){
    return (("autenticar" in object) && (object.autenticar instanceof Function));
}

}