import { Header } from './components/Header/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Introduction } from './pages/Introduction';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#011126',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <Introduction/>
    </ThemeProvider>
  );
}

export default App;
