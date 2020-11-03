import React/*,{ useContext }*/ from 'react';
import PropTypes from 'prop-types';
import { Listado } from '../components/Listado/Listado';
//import useGetUsers from '../hooks/users/useGetUsers'
import { Switch, Route } from 'react-router';
import { useHistory, useParams } from "react-router-dom";
import { /*themeContext, */withTheme } from '../Theme/Theme';
import { ROOT_URLs } from '../App';
import { useGetData } from '../hooks/useHookData';

export const DetEp = ({ theme }) => {

    console.log(theme, 'props');
    const history = useHistory();
    const { id } = useParams();

    const paramGet1 = ROOT_URLs.api + 'episodes/' + id;
    const paramGet2 = ROOT_URLs.api + 'characters';
    let dataEpisode = useGetData(paramGet1);
    let dataCharacters = useGetData(paramGet2);
    let data = {
        dataEpisode: [...dataEpisode],
        dataCharacters: [...dataCharacters]
    }
    console.log(data);
    let info = data.dataEpisode.map((el) => {
        return <div key={el}>
            <div class="card-body text-center">
                <h3 class="badge badge-success" style={{ 'fontSize': '20px' }}>{el.series}</h3>
                <p class="text-secondary">Episodio:
                        <span class="badge badge-info p-2 mr-3">{el.episode}</span>
                        Temporada:
                        <span class="badge badge-warning p-2 mr-3">{el.season}</span></p>
                <p class="text-secondary">Título: </p> <h5 class="card-title h3">{el.title}</h5>
            </div>
            <div class="card-footer text-muted text-center">
                <p class="text-secondary">Fecha estreno: <span class="badge badge-dark p-2 mr-3">{el.air_date}</span></p>
            </div>
        </div>
    });


    return (
        <div>
            <header className="App-header" style={{ 'backgroundColor': theme.dark ? 'black' : 'white' }}>
                {info}
                <Listado type='personajesEp' dataParam={data}></Listado>
            </header>
        </div>);
};

export const DetEpWithTheme = withTheme(DetEp);

DetEp.propTypes = {
}

DetEp.defaultProps = {

}



