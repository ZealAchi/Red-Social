import React from "react";
import Routes from "./../routes";
import AuthContext from "./Auth.Context";
import LoadContext from "./Load.Context";
import NotificationContext from "./Notification.Context";
import ModalContext  from "./Modal.Context";

export default function({modal}) {
  return (
    <LoadContext>
      <NotificationContext>
        <AuthContext>
          <ModalContext>
          <Routes modal={modal}/>
          </ModalContext>
        </AuthContext>
      </NotificationContext>
    </LoadContext>
  );
}
