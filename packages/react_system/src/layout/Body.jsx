import React from 'react'
import styled from 'styled-components'
import { NavBar } from './Navbar'

const StyledBody=styled.div`
display:flex;
flex:5;
flex-direction:column;
background-color:rgba(32,30,45,1);
`
const SyledGloBalBody=styled.div`
display:flex;
flex-direction:row;
height:100%;
`
export default function ({children}){
  return(
    <SyledGloBalBody>
    <NavBar/>
    <StyledBody>
    {children}
    </StyledBody>
    </SyledGloBalBody>
  )
}