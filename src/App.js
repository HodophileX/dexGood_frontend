import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Provider } from 'react-redux';
import Router from './Router';
import 'react-toastify/dist/ReactToastify.css';
import { apolloClient } from './services/apolloClient';
import { configureReducer } from './_redux';
const store = configureReducer();

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <div className="App">
          <Router />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
