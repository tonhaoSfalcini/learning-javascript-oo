import {Cliente} from "./Cliente.js";
import {Funcionario} from "./Funcionario/Funcionario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SysAuth} from "./SysAuth.js";

const c1 = new Cliente("Cleitin", 564874135841, "654789123")

const gerente = new Gerente("Antonio", 1321351351, 10000);
gerente.cadastraSenha("789456123");

const diretor = new Diretor("Joao", 1321351351, 15000);
diretor.cadastraSenha("321654987");

let isLogged = SysAuth.login(diretor, "321654987");
console.log(isLogged);
isLogged = SysAuth.login(gerente, "789456123");
console.log(isLogged);
isLogged = SysAuth.login(c1, "654789123");
console.log(isLogged);