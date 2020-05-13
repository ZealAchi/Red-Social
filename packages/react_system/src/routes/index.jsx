import React, { memo, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./../layout";

import { AuthContext } from "./../context/Auth.Context";
import { LoadContext } from "./../context/Load.Context";
import { NotificationContext } from "./../context/Notification.Context";
import { Rutas, RenderComponent, RutasNoAuth } from "./DataRoute";
import { ModalContext } from "../context/Modal.Context";

const AuthValue = [];

export default function ({ modal }) {
  const { data: AuthInfo } = useContext(AuthContext);
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);
  const { MostarModal } = useContext(ModalContext);

  useEffect(() => {
    MostarModal(modal.modalShowing)
  }, [modal.modalShowing])

  return (
    <>
    <Router>
      {AuthInfo.token !== undefined ?
        
          <Layout>
            {/* <button onClick={()=>{
            modal.setModalShowing(true)
          }} >Mosatra Modal</button>
          <button
            className="btn btn-primary form"
            onClick={() => {
              changeLoad(!loading);
            }}
          >
            ChangeStatusLoad
          </button>
          <button
            className="btn btn-primary form"
            onClick={() => {
              toast(<Msg data={Notification} />);
            }}
          >
            Enviar Notificacion por default
          </button> */}
            {/* {!loading ? (
            <>Loading...</>
          ) 
          : ( */}
            <Switch>
              {
                Rutas.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
            </Switch>
            {/* )
          } */}
          </Layout>
        
        :
        RutasNoAuth.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))
      }
      </Router>
    </>
  );
}

const Msg = ({ data }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div>
          <h4>{data.type}</h4>
          <div>
            <h5>{data.message}</h5>
          </div>
        </div>
        <div />
      </div>
      <h6>{data.owner}</h6>
    </div>
  );
};
