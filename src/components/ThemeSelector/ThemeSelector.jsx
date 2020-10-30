import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '../../Theme/Theme'


export const ThemeSelector = ({ children }) => {
    const [isDark, setDark] = useState(false);
    const handleCheckbox = () => {
        setDark(!isDark);
    }

    return (
        <>
            <input type="checkbox" id="theme" checked={isDark} onChange={handleCheckbox} ></input>
            Cambiar modo<ThemeProvider value={{ dark: isDark }}>
                {children}
            </ThemeProvider>
        </>
    )


};