import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
const StyledHome = styled.div`
  display: flex;
  height: 100%;
  & div#Content {
    flex: 7;
    display: flex;
    align-content: center;
    align-items: center;
    align-self: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 22vh) {
      width: 18vh;
    }
  }
  & div#NewMessage {
    flex: 1;
    background-color: blue;
    @media screen and (max-width: 726px) {
      display: none;
    }
  }
`;
export function Home() {
  return (
    <StyledHome>
      <div id="Content">
        <MakePost />
        <div
          style={{
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "73vh",
          }}
        >
          {/* <QueueAnim type="left" delay={100}> */}
            {[1,2,3,4,5,6,7,].map((index, value) => (
              <CardHome key={value}/>
            ))}
          {/* </QueueAnim> */}
        </div>
      </div>
      <div id="NewMessage">Crear Nuevo Mensaje</div>
    </StyledHome>
  );
}

const StyledMakePost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(11, 7, 17, 0.8);
  align-items: center;

  & div#User {
    width: 1.5rem;
    height: 1.5rem;
    background: #ee2459;
    mask: ${(props) => `url(${props.svgUser}) no-repeat center;`};
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
function MakePost() {
  return (
    <StyledMakePost svgUser="/icons/16px/user.svg">
      <div style={{ display: "flex" }}>
        <div id="User" />
        <input placeholder="¿Que estas Pensando Antonio?"></input>
      </div>
      <div style={{ display: "flex", marginTop: "2rem" }}>
        <h2>Foto/Video</h2>
        <h2>Etiqueta a tus amigos</h2>
      </div>
    </StyledMakePost>
  );
}

const StyledCardHome = styled.div`
  background-color: rgb(44, 44, 49);
  width: 84%;
  border-radius: 35px;
  padding: 1.5rem;
  margin: auto;
  margin-bottom: 2rem;
  @media screen and (max-width: 720px) {
    /* justify-content: center;    */
  }
`;
const Img = styled.img`
  border-radius: 30px;
  width: 25rem;
  @media screen and (max-width: 720px) {
    width: 75%;
    height: 20rem;
    align-self: center !important;
    min-height: 25rem;
    min-width: 25rem;
  }
  @media screen and (min-width: 200px) {
    /* height: 10rem; */
    min-height: 10rem;
    min-width: 10rem;
  }
`;
const SeccionComentarios = styled.div``;
const Content = styled.div`
  display: flex;
  padding: 12px;
  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;

const CardHome = () => {
  return (
    <StyledCardHome>
      <div style={{ display: "flex" }}>
        <div id="User" />
        <h1>Antonio</h1>
        <h3>Hace 1 seg</h3>
        <h1>...</h1>
      </div>
      <div>
        Habrá beneficios y regalos a los usuarios registrados en mi plataforma
        (sin obligación de compra) te espero en https://itoo.dev
      </div>
      <Content>
        <Img
          src="https://cdn4.buysellads.net/uu/1/41369/1551199029-Adobe_Stock_260x200-2.jpg"
          alt="this is car image"
        />
        <SeccionComentarios>
          <div>Me gustan:64 No me gustan:34</div>
          <div>Comentarios:105</div>
          <div>
            <div id="User" />
            <p>as das dla sklaskl askd akl dklasdk</p>
          </div>
        </SeccionComentarios>
      </Content>
    </StyledCardHome>
  );
};
