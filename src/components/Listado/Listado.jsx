import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import { useHistory, useParams } from "react-router-dom";
// icons
import { tableIcons } from '../icons';

import { ROOT_URLs } from '../../App'
import { useGetData } from "../../hooks/useHookData";
import { generarDataListado } from "../functions";


export const Listado = ({ type, dataParam }) => {

    const history = useHistory();
    const { id } = useParams();

    let paramGet = '';
    switch (type) {
        case 'personajes':
            paramGet = ROOT_URLs.api + 'characters';
            break;
        case 'asesinos':
            paramGet = ROOT_URLs.api + 'characters';
            break;
        case 'dataPasada':
            break;

        default:
            paramGet = ROOT_URLs.api + 'episodes';
    }
    console.log(paramGet);
    let data = useGetData(paramGet)


    console.log(id);
    console.log(data);
    // devuelve objeto para poner en listado
    const obj = generarDataListado(type, id, dataParam || data, history);

    return (
        <Fragment>
            <MaterialTable
                icons={tableIcons}
                columns={obj.columns}
                data={obj.data}
                actions={obj.actions}
                title={type[0].toUpperCase() + type.slice(1) + ' list'}
            />
        </Fragment>
    );
}
    ;

Listado.propTypes = {
    type: PropTypes.string.isRequired
};

Listado.defaultProps = {
}
