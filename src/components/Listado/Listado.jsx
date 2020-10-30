import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import MaterialTable from "material-table";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
// icons
import { tableIcons } from '../icons';

import { ROOT_URLs } from '../../App'
import { useGetData } from "../../hooks/useHookData";


export const Listado = ({ type }) => {

    const history = useHistory();

    let data = useGetData(ROOT_URLs.api + 'episodes')

    console.log(data);

    let dataObj = {};
    let actions = [];

    if (type === 'temporadas') {
        let dataGet = data.reduce((newTempArr, el) => ((newTempArr.includes(el.season.trim())) ? newTempArr : [...newTempArr, el.season]), [])
        console.log(dataGet);
        // data = { seasons: dataGet, data: [...data] }
        // console.log(data);

        // dataObj = data.data.map((obj, i) => {
        // return {
        // episode: obj.episode,
        // episode_id: obj.episode_id,
        // season: obj.season,
        // title: obj.title,
        // seasons: data.seasons

        // }
        // })
        // console.log(dataObj);
        // data = Array.from(dataObj);
        data = dataGet.map((obj) => {
            return {
                season: 'Temporada ' + obj
            }
        })

        actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ir a los episodios de la temporada",
                onClick: (event, rowData) => {
                    history.push('/temporada/' + parseInt(rowData.tableData.id + 1))
                }
            },
        ];
    }






    return (
        <Fragment>
            <MaterialTable
                icons={tableIcons}
                columns={[
                    { title: 'Temporada', field: 'season' },

                ]}
                data={data}
                actions={actions}
                title={type + ' list'}
            />
        </Fragment>
        //<></>
    );
};

Listado.propTypes = {
    type: PropTypes.string.isRequired
};

Listado.defaultProps = {
}
