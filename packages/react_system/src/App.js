import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons';


import AppContainer from "./context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Modal } from './components/Modal';
import { useModal } from './Hooks/useModal';

library.add(fab, faFingerprint);


const StyledApp = styled.div`
	background-color:grey;
	/* height: 100%; */
	/* display: flex; */
	/* display: contents; */
	/* width: 100%; */
	flex: 1;
    display: flex;
`;

function App() {
	const modal = useModal()
	useEffect(() => {
		// modal.setModalShowing(false);
	}, [/*ws.toggleModal*/]);

	useEffect(() => {
		// ws.setValidCredentials(null);
	}, [modal.modalShowing])


	return (<StyledApp>
		    	<ToastContainer />
				  <AppContainer modal={modal} />
		{modal.modalShowing && <Modal modal={modal} />}
					</StyledApp>)
}

if (document.getElementById('react_root')) {
	ReactDOM.render(<App />, document.getElementById('react_root'));
}

