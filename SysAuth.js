export class SysAuth{

static login(funcionario, senha){
    return (funcionario.senha == senha);
}
}