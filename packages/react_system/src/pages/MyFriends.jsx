import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #594b67 !important;
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;
  place-content: baseline;
  justify-content: center;
  overflow-y: scroll;
  height: 47rem;
  width: 98%;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 4px;
  }
  :-webkit-scrollbar-track:hover {
    background: #d4d4d4;
  }
  ::-webkit-scrollbar-track:active {
    background: #d4d4d4;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: blueviolet;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
  }
`;
const Card = styled.div`
  /* width: 10s0%; */
  /* flex: 25%; */

  padding: 5px;
`;

const CardBody = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  display: flex;
  border-radius: 4px;
  width: 100%;
  background: #292438;
  color: white;
  @media screen and (max-width: 554px) {
    /* width: 50%; */
    /* display: none; */
  }
`;
const CardContent = styled.div`
  background-color: transparent;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
  @media screen and (max-width: 554px) {
    /* width: 25%; */
    /* display: none; */
  }
`;
const CardImages = styled.div`
  background-image: url(${(props) => props.imageBackground});
  width: 100px;
  height: 100px;
  @media screen and (max-width: 554px) {
    /* width: 50%; */
    /* height: 100%; */
    /* display: none; */
  }
`;

const CardFooter = styled.footer`
  background-color: transparent;
  border-top: 1px solid #dbdbdb;
  align-items: stretch;
  display: flex;
  width: 100%;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  border-radius: 4px;
`;
const Agregar = styled.button`
  background: #301133;
  width: 50%;
  text-align: center;
  border: none;
  color: white;
  border-radius: 2px;
  padding: 2px;
  border: none;
  cursor: pointer;
`;
const EnviarMsg = styled.button`
  background: #332c11;
  width: 50%;
  text-align: center;
  border: none;
  color: white;
  padding: 2px;
  border: none;
  cursor: pointer;
`;
const Buscar = styled.section`
  height: 6.5rem;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: white;
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  display: flex;
  border-radius: 4px;
  width: 100%;
  background: #292438;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;
const InputBuscar = styled.input`
  background: 0 0;
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  font-size: 2rem;
  color: #fff;
  height: "min-content";
  width: 50%;
  margin-left: 1rem;
`;
export function MyFriends() {
  const nombre = "José Antonio Padre García";
  const amigosComun = "50 amigos en común";
  return (
    <>
      <Buscar>
        Buscar: <InputBuscar />
      </Buscar>

      <Section>
       
      {[1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,].map((index, value) => (
          <Card key={value}>
          <CardBody>
            <CardImages
              imageBackground={`/images/Avatar${Math.floor(
                Math.random() * 7 + 1
              )}.png`}
            />
            <CardContent>
              {nombre}
              <br />
              <br />
              {amigosComun}
            </CardContent>
          </CardBody>
          <CardFooter>
            <Agregar>Ver Perfil</Agregar>
            <EnviarMsg>Enviar mensaje</EnviarMsg>
          </CardFooter>
        </Card>
            ))}
          
       
      </Section>
    </>
  );
}
