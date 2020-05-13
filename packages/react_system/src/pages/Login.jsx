import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth.Context'
const StyledLogin=styled.div`
display:flex;
background-color:rgb(44,44,49);
padding:12px;
flex: 1;
input{
    border-radius: 3px;
    padding: 0.4rem;
    border-width: inherit;
    margin:0.3rem;
}
button#Registrate{
    border: 12px;
    padding: 12px;
    background: rgba(12,12,34,1);
    color: white;
    cursor: pointer;
    margin-top: 12px;
    :hover{
        background: rgba(66,53,73,12);
    }
}

button#IniciarSesion{
    border-radius: 24px;
    border: 12px;
    padding: 9px;
    background: rgba(12,12,34,1);
    color: white;
    cursor: pointer;
    :hover{
        background: rgba(66,53,73,12);
    }
}

`
export function Login(){
    const Context=useContext(AuthContext)
    
    return <StyledLogin>
        <div style={{flex:1,flexDirection:'row',display:'flex'}}>
            <div style={{flex:1,display:'flex',flexDirection:'column'}}>
                <div style={{flex:1}}><h1>Red Social</h1></div>
                <div style={{flex:1}}>
                <img src="/images/inicio.svg"  style={{height: '52rem'}}/>
                </div>
        </div>
        <div style={{flex:1}}>
        <div>
            <div style={{display:'flex',flexDirection:'row-reverse'}}>
                <div>
                <h1>Registrate</h1>
                <input placeholder="Usuario o Correo"/>
                <input type="password" placeholder="Contraseña"/>
                <button id='IniciarSesion' onClick={()=>Context.login()}>Iniciar Sesion</button>
                </div>
            </div>
            </div>
            <div style={{padding:20,display:'flex',flexDirection:'column',marginTop:'5rem'}}>
            <h1>Crea una cuenta</h1>
            <h3>Es rápido y fácil.</h3>
            <div style={{flex:1}}>
            <input placeholder="Nombre"/>
            <input placeholder="Apellidos"/>
            </div>
            
            <input placeholder="Nùmero de mòvil o correo electrònico"/>
            <input type="password" placeholder="Contraseña"/>
            <input type="password" placeholder="Confirmar Contraseña"/>
            <button id='Registrate'>Registrate</button>
            </div>
            </div>
        </div>
    </StyledLogin>
}