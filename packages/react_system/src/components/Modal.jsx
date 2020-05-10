import React from 'react'

import styled from 'styled-components'

const StyledModal = styled.div`
position:fixed;
top:0;
left:0;
color:#000000;
height: 100%;
width: 100%;
background-color:rgba(255,255,255,.4);
display:flex;
justify-content:center;
align-items:center;


.modal-box{
    width:390px;
    height:200px;
    background-color:#fff;
    box-shadow:0 0 15 rgba(0,0,0,.2);
    padding:15px;
    border-radius:2px;
    flex-flow:column nowrap;
    justify-content:flex-start;
    align-items:center;
    align-content: center;
    display: flex;
    justify-content: center;

    animation-name:grow-box;
    animation-duration:0.4s;
    animation-timing-function:ease-in-out;

    @keyframes grow-box{
        0%{opacity:.2;}
        25%{opacity:.4;}
        50%{opacity:.6;}
        75%{opacity:.8;}
        100%{opacity:.9;
            width:410px;
            height:220px;
        }
    }
    h3{
        font-size:1.5rem;
        text-align:center;
        
    }
    button{
        width:100px;
    }
}
`
export function Modal(props) {
    console.log(props)
    function ClosedModal(){
        props.modal.setModalShowing(false)    
    }
    
    switch (props.modal.modalDisplay) {
        
        default:
            return (<ContentModal>
                <div className="modal-box">
                    <h3>React js Styled components animated modal</h3>
                    <button onClick={()=>ClosedModal()}>closed</button>
                </div>
            </ContentModal>
            )
            break;
    }
}
const ContentModal = ({ children }) => {
    return (<StyledModal>
        {children}
    </StyledModal>)
}