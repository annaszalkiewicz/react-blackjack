import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers/rootReducer';

// CONFIGURE STORE WITH REDUX DEVTOOLS

/* If you would like to use app with Redux Dev Tools
   1) Install extension in your browser:
			For Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
			For Mozilla: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/?src=search
	 2) Uncomment variable enancers
	 3) Add compose to import from 'redux'
	 3) Uncomment configureStore() that includes enhancers
	 4) Comment configureStore() without enhancers
*/

// Configure with Redux Dev Tools

const configureStore = () => {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

// Configure store without Redux Dev Tools

// const configureStore = () => {
// 	return createStore(rootReducer, applyMiddleware(thunk));
// };

export default configureStore;
