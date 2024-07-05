import { Suspense } from 'react';
import AppRouter from "@app/common/appRouter"
import { ThemeProvider } from "@mui/material";
import { THEME } from "@common/constants";
import LightTheme from './theme/lightTheme';
import DarkTheme from './theme/darkTheme';
import { useSelector } from 'react-redux';



function App() {
  const { theme } = useSelector((state: any) => state.appConfig);


  return (
    <ThemeProvider theme={() => { return theme == THEME.light ? LightTheme : DarkTheme }}>
      <Suspense fallback={<div></div>}>
        <AppRouter>
        </AppRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
