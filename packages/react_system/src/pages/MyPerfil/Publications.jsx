import React from 'react'
import styled from 'styled-components'

const StyledPublications = styled.div`
display:flex;
flex:1;
& div#NoElements{
    background-color:rgb(11,7,17,1);
    padding:15px;
    border-radius:5px;  
    display:flex;
    flex-direction:column;
    align-items:center; 
    margin:auto;
}
`
export function Publications() {
    return <StyledPublications>
        <div id="NoElements">
            <h2>
                Todavía no tienes una Publicaciòn.
        </h2>
            <h3>Cuando lo hagas, aparecerán aquí.</h3>
        </div>
    </StyledPublications>
}