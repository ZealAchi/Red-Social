import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { RutasPerfil } from '../routes/DataRoute';
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
                <div id="dataPerfil">
                    <div style={{ margin: 8 }}>
                        <h2>
                            0 publicaciones
                </h2>
                    </div>
                    <div style={{ margin: 8 }}>
                        <h2>
                            30 amigos
                </h2>
                    </div>
                    <div style={{ margin: 8 }}>
                        <h2>
                            2 seguidores
                </h2>
                    </div>
                    <div style={{ margin: 8 }}>
                        <h2>
                            75 seguidos
                </h2>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ flex: 0 }}>
            <div style={{
                flex: 1, backgroundColor: 'rgba(11,7,17,1)', display: 'grid',
                gridTemplateColumns: 'auto auto auto auto'
            }}>
                <TabPerfil id="Publicaciones" label="Publicaciones" navigate={()=>alert("Cuack")}/>
                <TabPerfil id="Archivos" label="Archivos" navigate={RedirectFiles}/>
                <TabPerfil id="Guardado" label="Guardado" navigate={RedirectSave}/>
                <TabPerfil id="Etiquetados" label="Etiquetados"  navigate={Redirecttagged}/>
            </div>
        </div>
        <div style={{ flex: 1, backgroundColor: 'red' }}>
        <Router basename="/My-Perfil" >
        <Switch>
                {RutasPerfil.map((route, index) => {
                    console.log(route,index,"Ds")
                    return (<Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />)
                })}
            </Switch>
        </Router>
            
        </div>
    </StyledMyPerfil>)
}


const TabPerfil = ({ label, id,navigate }) => {
    return (<div id={id} onClick={()=>{navigate()}}>
        <h2 style={{ textAlign: 'center', boxShadow: '36px 22px 235px 2px', cursor: 'pointer' }}>
            {label}
        </h2>
    </div>)
}