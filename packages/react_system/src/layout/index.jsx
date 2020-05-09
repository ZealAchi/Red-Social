import React, { memo, useContext } from "react";
import Body from './Body'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import { Loader } from "../components/Loader";
import { LoadContext } from "./../context/Load.Context";
const StyledLayout = styled.div`
  /* height:calc(100vh - 13px); */
  bottom: 0;
  background-color:rgba(11,7,17,1);
  display:flex;
  flex-direction: column;
`

export default memo(function Layout({ children }) {
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  return (<><StyledLayout>
    <Header />
    <Body>{children}</Body>
    </StyledLayout>
    {loading === true && <Loader isPageLoad={true} /> }
    <Footer />
    </>);
});
