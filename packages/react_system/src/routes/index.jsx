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
import { Rutas, RenderComponent } from "./DataRoute";

const AuthValue = [];

export default function() {
  const { data: AuthInfo } = useContext(AuthContext);
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  const { data: Notification = [] } = useContext(NotificationContext);

  return (
    <div>
      Hola
      <Router>
        <Layout>
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
          </button>
          {!loading ? (
            <>Loading...</>
          ) 
          : (
            <Switch>
              {Rutas.map((item, i) => {
                return (
                  <RenderComponent
                    key={i}
                    AuthInfo={AuthInfo}
                    component={item.component}
                  />
                );
              })}
            </Switch>
          )
          }
        </Layout>
      </Router>
      
    </div>
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
