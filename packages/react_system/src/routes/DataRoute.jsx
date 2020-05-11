import React from 'react'
import { Home } from "./../pages";
import { SaveElements } from '../pages/SaveElements';
import { Search } from '../pages/Search';
import { MyFriends } from '../pages/MyFriends';
import { MyPerfil } from '../pages/MyPerfil';
import { Publications } from '../pages/MyPerfil/Publications';
import { Files } from '../pages/MyPerfil/files';
import {SaveElementsProfile} from '../pages/MyPerfil/SaveElements'
import { Tagged } from '../pages/MyPerfil/Tagged';
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
    exact: true,
    main: () => <Publications/>
  },  {
    path: "/My-Perfil/Files",
    exact: false,
  main: () => <Files/>
  },  {
    path: "/My-Perfil/Save",
    exact: false,
    main: () => <SaveElementsProfile/>
  },  {
    path: "/My-Perfil/tagged",
    exact: false,
    main: () => <Tagged/>
  },
]