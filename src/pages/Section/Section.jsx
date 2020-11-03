import React from 'react';
import PropTypes from 'prop-types';
import { Listado } from '../../components/Listado/Listado';
import { withTheme } from '../../Theme/Theme';

export const Section = ({ type, theme }) => {

    console.log(theme, 'props');
    console.log(type);
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



