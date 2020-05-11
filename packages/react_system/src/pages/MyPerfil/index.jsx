import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { withRouter } from "react-router";

import { RutasPerfil } from '../../routes/DataRoute';

const StyledMyPerfil = styled.div`
color:#fff;
flex:1;
/* margin-left: auto; */
margin-left: 0;
overflow-y: scroll;
display:flex;
flex-direction:column;
& div#Profile{
    height: 50%;
    width: 80%;
    background-color:rgb(44,44,49);
    padding: 3rem;
    display:flex;
    flex:1;
}
& div#dataPerfil{
    flex:1;
    margin: 10;
    display: flex;
    @media screen and (max-width: 726px) {
    flex-direction:column;
  }
}

`

export function MyPerfil() {
    let history = useHistory();

    function RedirectPerfil() {
        history.push('/My-Perfil')
    }
    function RedirectFiles() {
        history.push('/My-Perfil/Files')
    }
    function RedirectSave() {
        history.push('/My-Perfil/Save')
    }
    function Redirecttagged() {
        history.push('/My-Perfil/tagged')
    }
    return (<StyledMyPerfil>
        <div style={{ flex: 0, backgroundColor: 'rgb(37,41,43)', alignSelf: 'center', display: 'flex', textAlign: 'center' }}>
            <div id="Profile"><div style={{ flex: 1 }}>
                <img
                    style={{ borderRadius: 50 }}
                    src="/images/Avatar3.png"
                    alt="this is car image"
                />
                <h2>
                    Kiritor Garcia
            </h2>
            </div>
                <div>
                    <div id="dataPerfil">
                        <div style={{ margin: 8 }}><h2>0 publicaciones</h2></div>
                        <div style={{ margin: 8 }}><h2>30 amigos</h2></div>
                        <div style={{ margin: 8 }}><h2>2 seguidores</h2></div>
                        <div style={{ margin: 8 }}><h2>75 seguidos</h2></div>
                    </div>
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>
                        <button style={{
                            backgroundColor: 'rgba(34,50,99,1)',
                            color: '#fff', borderRadius: 5, padding: '0.8rem',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Configurar Perfil
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ flex: 0 }}>
            <div style={{
                flex: 1, backgroundColor: 'rgba(11,7,17,1)', display: 'grid',
                gridTemplateColumns: 'auto auto auto auto'
            }}>
                <TabPerfil id="Publicaciones" label="Publicaciones" navigate={RedirectPerfil}></TabPerfil>
                <TabPerfil id="Archivos" label="Multimedia" navigate={RedirectFiles} ></TabPerfil>
                <TabPerfil id="Guardado" label="Guardado" navigate={RedirectSave} ></TabPerfil>
                <TabPerfil id="Etiquetados" label="Etiquetados" navigate={Redirecttagged}>
                </TabPerfil>
            </div>
        </div>
        <div style={{ flex: 1, display: 'flex' }}>
            <Route basename="/My-Perfil" >
                {RutasPerfil.map((route, index) => {
                    // console.log(route,index,"Ds")
                    return (<Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />)
                })}
            </Route>
        </div>
    </StyledMyPerfil>)
}


const H2Tab = styled.h2`
text-align: center;
 box-shadow: 36px 22px 235px 2px;
 cursor: pointer;
 background-color:${props => {console.log(props.className); return props.className === 'active' ? ' rgba(1,3,61,12)':''}}}
`
const TabPerfilContainer = ({ label, id, navigate, children, location }) => {

    let path = null
    if (location.pathname === '/My-Perfil/tagged' && label === 'Etiquetados') {
        path = true;
        console.log(location.pathname, 'location')
    } 
     if (location.pathname === '/My-Perfil/Save' && label === 'Guardado') {
        path = true;
        console.log(location.pathname, 'location')
    } 
     if (location.pathname === '/My-Perfil/Files' && label === 'Multimedia') {
        path = true;
        console.log(location.pathname, 'location')
    } 
    if (location.pathname === '/My-Perfil' && label === 'Publicaciones') {
        path = true;
        console.log(location.pathname, 'location')
    }
    return (<div id={id}>
        <H2Tab className={path ? 'active' : null} onClick={() => { navigate() }}>
            {label}
        </H2Tab>
        {children}
    </div>)
}
const TabPerfil = withRouter(TabPerfilContainer);
