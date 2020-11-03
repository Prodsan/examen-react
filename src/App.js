import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Four0Four } from './pages/Four0Four';
import { ThemeSelector } from './components/ThemeSelector/ThemeSelector';
import { IndexWithTheme } from './pages/Index';
import { SectionWithTheme } from './pages/Section/Section';
import { DetEpWithTheme } from './pages/det-ep.jsx';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetPersWithTheme } from './pages/det-pers';

export const ROOT_URLs = {
  api: 'https://breakingbadapi.com/api/'
}

const strings = {
  temporadas: {
    name: 'temporadas',
    episodios: {
      name: 'episodios',
      detalle: {
        name: 'ep-detalle'
      }
    }
  },
  personajes: {
    name: 'personajes'
  },
  asesinos: {
    name: 'asesinos'
  },
};
const PageRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <IndexWithTheme />
      </Route>
      <Route path="/temporadas" exact>
        <SectionWithTheme type={strings.temporadas.name} />
      </Route>
      <Route path="/personajes" exact>
        <SectionWithTheme type={strings.personajes.name} />
      </Route>
      <Route path="/asesinos" exact>
        <SectionWithTheme type={strings.asesinos.name} />
      </Route>
      <Route path="/temporada/:id" exact>
        <SectionWithTheme type={strings.temporadas.episodios.name} />
      </Route>
      <Route path="/personaje/:id" exact>
        <DetPersWithTheme />
      </Route>
      <Route path="/ep-detalle/:id" exact>
        <DetEpWithTheme />
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
        <PageRouter />
      </div>
    </ThemeSelector>
  );
}

export default App;
