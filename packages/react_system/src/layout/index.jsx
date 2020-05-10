import React, { memo, useContext } from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { Loader } from "../components/Loader";
import { LoadContext } from "./../context/Load.Context";
const StyledLayout = styled.div`
  /* height:calc(100vh - 13px); */
  height: 100%;
  bottom: 0;
  background-color: rgba(11, 7, 17, 1);
  display: flex;
  flex-direction: column; 
  display: flex;
`;

export default memo(function Layout({ children }) {
  const { loading, changeState: changeLoad } = useContext(LoadContext);
  return (
    <>
      <StyledLayout>
        <Header />
        <Body>{children}</Body>
        <Footer />
      </StyledLayout>
      
     
      {loading === true && <Loader isPageLoad={true} />}
      
    </>
  );
});
