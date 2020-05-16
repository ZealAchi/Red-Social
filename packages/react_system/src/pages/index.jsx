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
    flex: 2.8;
    display:flex;
    flex-direction:column;
    @media screen and (max-width: 726px) {
      display: none;
    }
    & div#chatFriend{
      display: flex;
      align-items: center;
      cursor:pointer;
      :hover{
        background: #636e72;
        color: #000;
        border-radius: 14px;
        padding: 4px;
      }
    }
  }
`;
export function Home() {
  return (
    <StyledHome>
      <div id="Content">
        <div
          style={{
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "90vh",
          }}
        >
          <MakePost />
          {/* <QueueAnim type="left" delay={100}> */}
          {[1, 2, 3, 4, 5, 6, 7,].map((index, value) => (
            <CardHome key={value} />
          ))}
          {/* </QueueAnim> */}
        </div>
      </div>
      <div id="NewMessage">
        <div style={{ flex: 6, margin: 5, backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <h2>Mis Historias</h2>
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            <h2>Conversaciones de grupos</h2>
            <div>
              <img src={`/images/settings_icon.png`} />
            </div>
          </div>
        </div>
        <div style={{ flex: 5, margin: 5, overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Mis Contactos</h2>
            <div style={{ justifyContent: 'flex-end' }}>
              <img width={25} height={25} src={`/images/search_icon.png`} />
              <img width={25} height={25} src={`/images/settings_icon.png`} />
            </div>
          </div>
          {[1, 2, 3, 4, 5, 6].map(() => {
            return (
              <div id="chatFriend" >
                <ImgFriends
                  src={`/images/Avatar${Math.floor(Math.random() * 6 + 1)}.png`}
                  friendsChat
                />
                <div style={{ marginLeft: 3 }}>
                  <h3>Luis Antonio Padre Garcìa</h3>
                </div>
                <div>
                  <img src={`/images/message_indicator_circle.png`} />
                </div>

              </div>)
          })}
        </div>
        <div style={{ flex: 0, display: 'flex' }}>
          <input placeholder="Buscar Amigos..." style={{
            flex: 1,
            margin: 6,
            borderRadius: 6,
            borderWidth: 0,
            padding: 4
          }} />
        </div>
      </div>
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
      <div style={{ display: "flex", justifyContent: 'center', alignContent: 'center' }}>
        <div id="User" />
        <input placeholder="¿Que estas Pensando Antonio?" style={{
          flex: 1,
          margin: 6,
          borderRadius: 6,
          borderWidth: 0,
          padding: 4
        }} />
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
const ImgFriends = styled.img`
 border-radius: 30px;
  width: 5rem;
  @media screen and (max-width: 720px) {
    width: 75%;
    height: 2rem;
    align-self: center !important;
    min-height: 2rem;
    min-width: 2rem;
  }
  @media screen and (min-width: 200px) {
    /* height: 10rem; */
    min-height: 1rem;
    min-width: 1rem;
  }
`;
const SeccionComentarios = styled.div`
    padding: 10px 20px 20px 20px;
`;
const Content = styled.div`
  display: flex;
  padding: 12px;

  @media screen and (max-width: 720px) {
    flex-direction: column;
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



const CardHome = () => {
  return (
    <StyledCardHome>
      <div style={{ display: "flex" }}>
        <div id="User" >
          <h1>Antonio</h1>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <h3 >Hace 1 seg</h3>
        </div>
        <h3 style={{ marginTop: '-2.5rem' }}>
          <span style={{ fontSize: '4rem' }}>{'  '}...</span>
        </h3>
      </div>
      <h3>
        Habrá beneficios y regalos a los usuarios registrados en mi plataforma
        (sin obligación de compra) te espero en https://itoo.dev
      </h3>
      <Content>
        <Img
          src="https://cdn4.buysellads.net/uu/1/41369/1551199029-Adobe_Stock_260x200-2.jpg"
          alt="this is car image"
        />
        <SeccionComentarios>
          <h3>
            <div>Me gustan:64 No me gustan:34</div><br />
            <div>Comentarios:105</div>
            <br />
            <div>
              <div id="User" />
              <p>as das dla sklaskl askd akl dklasdk</p>
            </div>
          </h3>
        </SeccionComentarios>
      </Content>
    </StyledCardHome>
  );
};
