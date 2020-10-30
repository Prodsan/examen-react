import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Four0Four } from './pages/Four0Four';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';
import { Index, IndexWithTheme } from './pages/Index';
import { Listado } from './components/Listado/Listado';
import { SectionWithTheme } from './pages/Section/Section';

export const ROOT_URLs = {
  api: 'https://breakingbadapi.com/api/'
}

const strings = { temporadas: 'temporadas', personajes: 'personajes', asesinos: 'asesinos' };
const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <IndexWithTheme />
      </Route>
      <Route path="/temporadas" exact>
        <SectionWithTheme type={strings.temporadas} />
      </Route>
      <Route path="/temporada/:id" exact>
        <></>
      </Route>
      <Route >
        <Four0Four />
      </Route>
    </Switch>
  </Router>
)


function App() {
  return (
    <ThemeSelector>
      <div className="App">
        {/*<Users></Users>*/}
        {/* <User></User>*/}
        <PageRouter />
      </div>
    </ThemeSelector>
  );
}

export default App;
