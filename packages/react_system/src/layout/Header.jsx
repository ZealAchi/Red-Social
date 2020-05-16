import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
const StyledHeader = styled.div`
background-color:rgba(11,7,17,1);
height:56px;
flex:0.1;
display:flex;
align-items:center;
padding:0.5rem 0.2rem;
top:0;
.Left{
    display:flex;
    flex:1;
}
.Right{
    flex:1;
    flex-direction:row-reverse;
    display:flex;
}
& div#chevron-left{
		width: 2.5rem;
		height: 2.5rem;
		background: rgb(236, 82, 82);
		mask: ${props => `url(${props.svgIconChevronRight}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
	}
    & div#chevron-right{
		width: 2.5rem;
		height: 2.5rem;
		background: rgb(236, 82, 82);
		mask: ${props => `url(${props.svgIconChevronLeft}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
        :hover{
            cursor:pointer;
            background: aqua;
        }
	}
    & div#mensajes{
		width: 2.5rem;
		height: 2.5rem;
		background: rgb(35,77,87);
		mask: ${props => `url(${props.pngMessageIcon}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 4px;
        :hover{
            cursor:pointer;
            background: aqua;
        }
	}
    & div#Notificaciones{
		width: 2.5rem;
		height: 2.5rem;
		background: rgb(35,77,87);
		mask: ${props => `url(${props.svgNotificaciones}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 4px;
        :hover{
            cursor:pointer;
            background: aqua;
        }
	}
    & div#masOpciones{        
        & div#imagen{
        margin-top: 4px;
		width: 3rem;
		height: 3rem;
		background: rgb(35,77,87);
            mask: ${props => `url(${props.svgIconMoreOption}) no-repeat center;`};
        margin-left: 1rem;
        margin-right: 1rem;
        :hover{
            cursor:pointer;
            background: aqua;
        }
        }
	}
    & div#perfil{
        display:flex;
        align-items:center;
        :hover{
            cursor:pointer;
            color: aqua;
            border-radius: 12px;
            padding: 3px;
            background: #222f3e;
        } 
    }


`

export default function Header() {
    const [openMoreOption, setOpenMoreOption] = useState(false)
    
    function functionHandleChangeMoreOption(value) {
        setOpenMoreOption(value)
    }
    return (<StyledHeader pngMessageIcon="/images/message_icon.png" svgNotificaciones="/icons/16px/notifications.svg" svgIconMoreOption="/icons/16px/chevron-down.svg" svgIconChevronLeft="/images/micro_prev_icon.png" svgIconChevronRight="/images/micro_next_icon.png">
        <div className="Left">
            <div id="chevron-right" style={{ background: '#fff' }} />
            <div id="chevron-left" style={{ background: 'yellow' }} />

        </div>
        <div className="Right">
            <div id="masOpciones">
                <div id="imagen" onClick={() => functionHandleChangeMoreOption(!openMoreOption)}/>
                <DropdownMenu openMoreOption={openMoreOption} />
            </div>
            <div id="Notificaciones"></div>
            <div id="mensajes"></div>
            <div id="new"></div>
            <div id="perfil">
                <img width={28} height={28} src={`/images/Avatar2.png`} />
                <h4 style={{ marginLeft: 2 }}>
                    Antonio
                </h4>
            </div>
        </div>
    </StyledHeader>)
}
const StyledDropdownMenu = styled.div`
position:absolute;
background-color: rgba(11,7,17,1);
width:300px;
transform: translateX(-84%);
border:#fff;
padding:${({openMoreOption})=>{return openMoreOption?'1rem':'0'}};

overflow:hidden;
transition: height 123 ease;
/* .menu{
    width: 100%;
} */

`
const StyledDropdownItem = styled.a`
    height: 33px;
    border-radius: 12px;
    padding: 0px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    cursor:pointer;
  :hover{
    background: rgba(32,30,45,1);
  }
    
  
/* :hover{
    background-color:#ddd
} */
`
function DropdownMenu(props) {
    const { openMoreOption } = props
    const [menuHeight, setMenuHeight] = useState(null);
    function DropdownItem(props) {
        return (<StyledDropdownItem>
            {/* <span className="icon-button">{props.leftIcon}</span> */}
            <h2>{props.children}</h2>
            {/* <span className="icon-right">{props.leftIcon}</span> */}
        </StyledDropdownItem>)
    }
    return (<StyledDropdownMenu openMoreOption={openMoreOption}>
        <CSSTransition
            in={openMoreOption === true}
            // timeout={500}
            classNames="menu-primary"
            unmountOnExit
            // onEnter={calcHeight}
            >
            <div className="menu">
            <DropdownItem>Configuraciòn y privacidad</DropdownItem>
            <DropdownItem>Modo oscuro</DropdownItem>
            <DropdownItem>Salir</DropdownItem>
                
            </div>
        </CSSTransition>
    </StyledDropdownMenu>)
}