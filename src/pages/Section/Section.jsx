import React/*,{ useContext }*/ from 'react';
import PropTypes from 'prop-types';
import { Listado } from '../../components/Listado/Listado';
//import useGetUsers from '../hooks/users/useGetUsers'
import { Switch, Route } from 'react-router';
import { /*themeContext, */withTheme } from '../../Theme/Theme';

export const Section = ({ type, theme }) => {

    console.log(theme, 'props');
    console.log(type);
    // const data = useGetUsers();

    // const context = useContext(themeContext) --> useo cuando está en contexto
    // console.log(context)
    return (
        <div>
            <header className="App-header" style={{ 'backgroundColor': theme.dark ? 'black' : 'white' }}>
                <Listado type={type}></Listado>

            </header>
        </div>);
};

export const SectionWithTheme = withTheme(Section);

Section.propTypes = {
    type: PropTypes.string.isRequired
}

Section.defaultProps = {

}



