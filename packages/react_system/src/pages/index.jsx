import React from 'react'
import styled from 'styled-components'

const StyledHome = styled.div`
display:flex;
& div#Content{
    flex:7;
    display:flex;
    align-content:center;
    align-items:center;
    align-self:center;
    justify-content:center;
    flex-direction:column;
}
& div#NewMessage{
    flex:1;
    background-color:blue;
}
`
export function Home() {
    return <StyledHome>
        <div id="Content">
            <MakePost />
            <div style={{overflowY: 'scroll',
    display:'flex',
    flexDirection: 'column',
    width: '100%',
height: '62.8vh'}}>
                <CardHome />
                <CardHome />
                <CardHome />
                <CardHome />
            </div>
        </div>
        <div id="NewMessage">
            Crear Nuevo Mensaje
        </div>
    </StyledHome>
}

const StyledMakePost = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
width:60%;
padding:10px;
border-radius:10px;
background-color:rgba(11,7,17,0.8);
align-items:center;

& div#User{
		width: 1.5rem;
		height: 1.5rem;
		background:#ee2459;
		mask: ${props => `url(${props.svgUser}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
`
function MakePost() {
    return (<StyledMakePost svgUser="/icons/16px/user.svg">
        <div style={{ display: 'flex' }}>
            <div id="User" />
            <input placeholder="¿Que estas Pensando Antonio?"></input>
        </div>
        <div style={{ display: 'flex', marginTop: '2rem' }}>
            <h2>Foto/Video</h2>
            <h2>Etiqueta a tus amigos</h2>
        </div>
    </StyledMakePost>)
}

const StyledCardHome = styled.div`
background-color:red;
width: 84%;
border-radius:35px;
padding:1.5rem;
margin: auto;
margin-bottom: 2rem;
`
const CardHome = () => {
    return <StyledCardHome>
        <div style={{ display: 'flex'}}>
            <div id="User" />
            <h1>Antonio></h1>
            <h3>Hace 1 seg</h3>
            <h1>...</h1>
        </div>
        <div>Habrá beneficios y regalos a los usuarios registrados en mi  plataforma (sin obligación de compra)
        te espero en https://itoo.dev</div>
        <div style={{display:'flex',padding:12}}>
        <img style={{borderRadius:30}} src="https://cdn4.buysellads.net/uu/1/41369/1551199029-Adobe_Stock_260x200-2.jpg" alt="this is car image" />
        <div>
        <div>Me gustan:64 No me gustan:34</div>
        <div>Comentarios:105</div>
        <div>
        <div id="User" />
        <p>as das dla sklaskl askd akl dklasdk</p>
        </div>
        </div>
        </div>
    </StyledCardHome>
}