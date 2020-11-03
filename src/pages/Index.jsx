import React from 'react';
import { withTheme } from './../Theme/Theme';
import { Link } from 'react-router-dom';
// icons
import { tableIcons } from '../components/icons';
import { tools } from '../components/Tools';

import { makeStyles } from '@material-ui/core/styles';



export const Index = ({ theme, ...props }) => {
    console.log(theme);
    console.log(props);


    const useStyles = makeStyles((them) => ({
        root: {
            border: '1px solid DodgerBlue',
            borderRadius: '5px',
            fontSize: '50px',
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.dark ? them.palette.info.dark : them.palette.background.paper, 'color': theme.dark ? 'white' : 'black',
        },
        textLink: {
            color: 'inherit',
            textDecoration: 'inherit',
            display: 'contents'
        }
    }));

    const classes = useStyles();

    return (
        <header className="App-header"
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <tools.list component="nav" className={classes.root} aria-label="Options" >
                <Link to="/temporadas" className={classes.textLink}>
                    <tools.ListItem button >
                        <tools.ListItemIcon>
                            <tableIcons.FormatListNumberedIcon style={{ 'color': 'SkyBlue' }} />
                        </tools.ListItemIcon>
                        <tools.ListItemText inset primary="Temporadas" />
                    </tools.ListItem>
                </Link>
                <tools.ListItem button>
                    <Link to="/personajes" className={classes.textLink}>
                        <tools.ListItemIcon>
                            <tableIcons.PeopleAltIcon style={{ 'color': 'SkyBlue' }} />
                        </tools.ListItemIcon>
                        <tools.ListItemText inset primary="Personajes" />
                    </Link>
                </tools.ListItem>
                <tools.ListItem button>
                    <Link to="/personajes" className={classes.textLink}>
                        <tools.ListItemIcon>
                            <tableIcons.EmojiPeopleIcon style={{ 'color': 'IndianRed' }} />
                        </tools.ListItemIcon>
                        <tools.ListItemText inset primary="Asesinos" />
                    </Link>
                </tools.ListItem>
            </tools.list>
        </header>
    );
};

Index.propTypes = {
}
Index.defaultProps = {
}

export const IndexWithTheme = withTheme(Index);