import SignIn from "./pages/SignIn";
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { ThemeProvider } from "styled-components";

function App() {
  const newTheme = theme.default

  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
