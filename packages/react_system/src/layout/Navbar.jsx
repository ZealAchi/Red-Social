import React from 'react'
import styled from 'styled-components'
import {
    Link
} from "react-router-dom";
const StyledNavbar=styled.div`
/* width:228px; */
height:100%;
flex:1;
/* @media screen and (max-width: 600px) {
    width:108px;
} */
background-color:rgba(11,7,17,1);
padding:10px;
display:flex;
flex-direction:column;
& div#styled-navbar-content-icon {
            padding:1.5rem 0.8rem;
            color: aliceblue;
         
}

& div#Icon{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgIcon}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
a{
    text-decoration: none;
}
ul{
    margin:0;
    padding:0;
    li{
        display:flex;
        color:#fff;
        list-style-type:none;
        border-radius:5px;
        padding:0.8rem;
        font-size:0.9rem;
        cursor:pointer;
        transition:all 0.3s ease-in-out;
        display:flex;
            align-items:center;
        a{
            color:inherit;
            text-decoration:none;
            &:visited{
                color:inherit;
                text-decoration:none;
            }
        }
        &.active{
            background-color:rgba(34,50,99,1);
            /* color:; */

        };
        &:hover{
            background-color:white;
            color:#000;
        }
    }
}
& div#Home{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgIconHome}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
    & div#Search{
		width: 1.5rem;
		height: 1.5rem;
		background:#ee2459;
		mask: ${props => `url(${props.svgIconSearch}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
    & div#Library{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgIconLibrary}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
    }
    & div#MyFriends{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgMyFriends}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
    & div#Perfil{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgPerfil}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
    }
    & div#ElementsSave{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgElementosSave}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
    }
    & div#MyGroups{
		width: 1.5rem;
		height: 1.5rem;
		background: #ee2459;
		mask: ${props => `url(${props.svgMyGroups}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
    }
`
export function NavBar(){
    return (<><StyledNavbar svgMyGroups='/icons/16px/heatmap.svg' 
                            svgElementosSave='/icons/16px/floppy-disk.svg'
                            svgPerfil='/icons/16px/eye-open.svg'
                            svgMyFriends='/icons/16px/people.svg'
                            svgIcon='/icons/16px/social.svg'
                            svgIconHome="/icons/16px/home.svg"
                            svgIconSearch="/icons/16px/search.svg"
                            svgIconLibrary='/icons/16px/vertical-bar-chart-asc.svg'>
    <div id="styled-navbar-content-icon">
        SocialNetwork
        <div id="Icon"/>
    </div>
    <ul>
        <Link to="/">
            <li className="active"><div id="Home" />Home</li>
        </Link>
        <Link to="/search">
            <li><div id="Search" />Buscar...</li>
        </Link>
        <Link to="/My-Groups">
            <li><div id="MyGroups" />Mis Grupos</li>
        </Link>
        <Link to="/My-Friends">
            <li><div id="MyFriends"/>Mis Amigos</li>
        </Link>
        <Link to="/Save-Elements">
            <li><div id="ElementsSave" />Elementos Guardados</li>
        </Link>
        <Link to="/My-Perfil">
            <li><div id="Perfil" />Mi perfil</li>
        </Link>
    </ul>
</StyledNavbar>

</>)
}