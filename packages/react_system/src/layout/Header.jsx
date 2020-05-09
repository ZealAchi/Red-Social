import React from 'react'
import styled from 'styled-components'

const StyledHeader=styled.div`
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
	}
    button{
    color: #fff;
    background-color: rgba(0,0,0,.7);
    padding: 0.5rem;
    border: 1px solid hsla(0,0%,100%,.7);
    }

`

export default function Header(){
    return (<StyledHeader svgIconChevronLeft="/icons/16px/chevron-left.svg" svgIconChevronRight="/icons/16px/chevron-right.svg">
    <div className="Left">
        <div id="chevron-right" style={{ background: '#fff' }} />
        <div id="chevron-left" style={{ background: 'yellow' }} />
        
    </div>
    <div className="Right">
        <button>PREMIUN</button>
        <button>Antonio Garcia</button>
    </div>

</StyledHeader>)
}