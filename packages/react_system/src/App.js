import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';


import AppContainer from "./context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


library.add(fab, faFingerprint);


const StyledApp = styled.div`

`;

function App() {

	return (<StyledApp>
		    	<ToastContainer />
      			<AppContainer />
			</StyledApp>)
}

if (document.getElementById('react_root')) {
	ReactDOM.render(<App />, document.getElementById('react_root'));
}