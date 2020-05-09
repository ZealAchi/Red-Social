import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.footer`
background-color:rgba(23,21,32,1);
/* height:100%; */
flex:1;
`
export default function (){
  return(
        <StyledFooter>
          <div>© 2020 Copyright:
            <a> Luis Antonio Padre Garcia</a>
          </div>
        </StyledFooter>
        
  )
}