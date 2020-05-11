import React from 'react'
import { Home } from "./../pages";
import { MyPerfil } from '../pages/MyPerfil';
import { SaveElements } from '../pages/SaveElements';
import { Search } from '../pages/Search';
import { MyFriends } from '../pages/MyFriends';
export const Rutas = [
  {
    path: "/",
    exact: true,
    main: () => <Home />
  },
  {
    exact: true,
    path: "/search",
    main: () => <Search/>
  },
  {
    exact: true,
    path: "/My-Groups",
    main: () => <h2>My-Groups</h2>
  },
  {
    exact: true,
    path: "/My-Friends",
    main: () => <MyFriends/>
  },
  {
    exact: true,
    path: "/Save-Elements",
    main: () => <SaveElements/>
  },
  {
    path: "/My-Perfil",
    exact: false,
    main: () => <MyPerfil/>
  },

];


export const RutasPerfil = [
  {
    path: "/My-Perfil",
    exact: false,
    main: () => <h1>perfils </h1>
  },  {
    path: "/My-Perfil/Files",
    exact: false,
  main: () => <h1>Archivos {console.log("Archivos")}</h1>
  },  {
    path: "/My-Perfil/Save",
    exact: false,
    main: () => <h1>save </h1>
  },  {
    path: "/My-Perfil/tagged",
    exact: false,
    main: () => <h1>etiquetados </h1>
  },
]