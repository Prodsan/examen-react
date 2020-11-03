import React/*,{ useContext }*/ from 'react';
import PropTypes from 'prop-types';
import { Listado } from '../components/Listado/Listado';
//import useGetUsers from '../hooks/users/useGetUsers'
import { Switch, Route } from 'react-router';
import { useHistory, useParams } from "react-router-dom";
import { /*themeContext, */withTheme } from '../Theme/Theme';
import { ROOT_URLs } from '../App';
import { useGetData } from '../hooks/useHookData';

export const DetPers = ({ theme }) => {

    console.log(theme, 'props');
    const history = useHistory();
    const { id } = useParams();

    const paramGet1 = ROOT_URLs.api + 'characters/' + id;
    const paramGet2 = ROOT_URLs.api + 'episodes';
    let dataPersonajes = useGetData(paramGet1);
    let dataEpisodiosPers = useGetData(paramGet2);
    let data = {
        dataPersonaje: [...dataPersonajes],
        dataEpisodiosPers: [...dataEpisodiosPers]
    }

    let info = data.dataPersonaje.map((el) => {
        return <div key={el}>
            <div class="card-header text-center">
                Featured
            </div>
            <div class="card-body text-center">
                <h3 class="badge badge-success" style={{ 'fontSize': '20px' }}>{el.category}</h3>
                <div><img src={el.img} alt="50" width="150" class="img-thumbnail"></img></div>
                <p class="text-secondary">Nombre:
                        <span class="badge badge-info p-2 mr-3"> {el.name}</span>
                        Apodo:
                        <span class="badge badge-light p-2 mr-3"> {el.nickname}</span></p>
                <p class="text-secondary">Actor: <span class="badge badge-primary p-2 mr-3"> {el.portrayed}</span>
                Temporadas en las que aparece: <span class="badge badge-secundary p-2 mr-3"> {el.appearance}</span>
                </p>
                <p class="text-secondary">Ocupación en la serie: <span class="badge badge-warning p-2 mr-3"> {el.occupation}</span></p>
            </div>
            <div class="card-footer text-muted text-center">
                <p class="text-secondary">Cumpleaños: <span class="badge badge-dark p-2 mr-3">{el.birthday}</span></p>
                <p class="text-secondary">Estado: <span class="badge badge-dark p-2 mr-3">{el.status}</span></p>
            </div>
        </div>
    });


    return (
        <div>
            <header className="App-header" style={{ 'backgroundColor': theme.dark ? 'black' : 'white' }}>
                {info}
                <Listado type='episodiosPers' dataParam={data}></Listado>
            </header>
        </div>);
};

export const DetPersWithTheme = withTheme(DetPers);

DetPers.propTypes = {
}

DetPers.defaultProps = {

}



