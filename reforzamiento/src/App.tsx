import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterals } from "./typescript/ObjetosLiterals";
import TiposBasicos from "./typescript/TiposBasicos";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from './components/Login';
import { Usuarios } from './components/Usuarios';
import { Formularios } from './components/Formularios';


const App = () => {
    return (
        <div className="mt-2">
            <h1>Introducción a Typescrpt & React</h1>
            <hr/>
            <TiposBasicos/>
            <hr/>
            <ObjetosLiterals/>
            <hr/>
            <Funciones/>
            <hr/>
            <Contador/>
            <hr/>
            <ContadorConHook/>
            <hr/>
            <Login/>
            <hr/>
            <Usuarios/>
            <hr/>
            <Formularios/>
        </div>
    )
}

export default App;