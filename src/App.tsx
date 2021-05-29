import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { ThemeProvider } from "styled-components";

// import history from './services/history'
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import ContextProvider from './contexts/index';

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <ContextProvider>
        <Router>
          <GlobalStyles />
          <Routes />
        </Router>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
