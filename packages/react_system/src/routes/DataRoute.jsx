import React from 'react'
import {Home} from "./../pages";
export const Rutas = [
  {
    exact: false,
    path: "/",
    component: <Home />
  }
];

export const RenderComponent = props => {
  const { AuthInfo, component } = props;
  if (AuthInfo.token !== undefined) {
    return component
  }
  return <>NO as iniciado sesion</>;
};