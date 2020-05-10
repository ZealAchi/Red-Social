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
    exact: false,
    path: "/search",
    main: () => <Search/>
  },
  {
    exact: false,
    path: "/My-Groups",
    main: () => <h2>My-Groups</h2>
  },
  {
    exact: false,
    path: "/My-Friends",
    main: () => <MyFriends/>
  },
  {
    exact: false,
    path: "/Save-Elements",
    main: () => <SaveElements/>
  },
  {
    path: "/My-Perfil",
    exact: true,
    main: () => <MyPerfil/>
  },

];

