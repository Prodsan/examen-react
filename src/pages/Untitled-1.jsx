// import React, { Fragment/*, useState*/ } from "react";
// import PropTypes from "prop-types";
// import MaterialTable from "material-table";
// //import ReactDOM from "react-dom";
// import { useHistory, useParams } from "react-router-dom";
// // icons
// import { tableIcons } from '../icons';

// import { ROOT_URLs } from '../../App'
// import { useGetData } from "../../hooks/useHookData";


// export const Listado = ({ type }) => {

//     const history = useHistory();
//     let paramGet = '';
//     if (id && type === 'det-ep') {
//         paramGet = ROOT_URLs.api + 'episodes/' + id;
//     } else {
//         paramGet = ROOT_URLs.api + 'episodes';
//     }
//     console.log(paramGet);
//     let data = useGetData(paramGet)

//     console.log(data);

//     let dataObj = {};
//     let actions = [];
//     let columns = [];



//     // me quedo con las seasons
//     const seasonsList = data.reduce((newTempArr, el) => ((newTempArr.includes(el.season.trim())) ? newTempArr : [...newTempArr, el.season]), []);

//     if (type === 'temporadas') {
//         console.log(seasonsList);
//         data = seasonsList.map((obj) => {
//             return {
//                 season: 'Temporada ' + obj
//             }
//         })

//         actions = [
//             {
//                 icon: tableIcons.VisibilityIcon,
//                 tooltip: "Ir a los episodios de la temporada",
//                 onClick: (event, rowData) => {
//                     history.push('/temporada/' + parseInt(rowData.tableData.id + 1))
//                 }
//             },
//         ];

//         columns = [
//             { title: 'Temporada', field: 'season' },
//         ]

//     } else if (type === 'episodios' && seasonsList.includes(id)) {
//         console.log(id);
//         data = { seasons: seasonsList, data: [...data] }
//         console.log(data);

//         dataObj = data.data.filter((obj) => {
//             if (obj.season.trim() === id && obj.series === 'Breaking Bad') {
//                 return {
//                     episode: obj.episode,
//                     episode_num: obj.episode,
//                     season: obj.season,
//                     title: obj.title,
//                     seasons: data.seasons

//                 }
//             }
//         })
//         console.log(dataObj);
//         data = Array.from(dataObj);

//         actions = [
//             {
//                 icon: tableIcons.VisibilityIcon,
//                 tooltip: "Ver detalles del episodio",
//                 onClick: (event, rowData) => {
//                     console.log(rowData.episode_id);
//                     history.push('/ep-detalle/' + parseInt(rowData.episode_id))
//                 }
//             },
//         ];
//         columns = [
//             { title: 'Título', field: 'title', cellStyle: { wordBreak: 'break-all' }, width: 300, },
//             { title: 'Num ep', field: 'episode' },
//             { title: 'Estrenado', field: 'air_date' },
//             { title: 'Temporada', field: 'season' },

//         ]
//     } else if (seasonsList.length > 0 && seasonsList.includes(id) === false) {
//         //retornamos a '/temporadas' si el id como param no coincide en la lista de temporadas
//         history.push('/id-no-encontrado');
//     }







//     return (
//         <Fragment>
//             <MaterialTable
//                 icons={tableIcons}
//                 columns={columns}
//                 data={data}
//                 actions={actions}
//                 title={type[0].toUpperCase() + type.slice(1) + ' list'}
//             />
//         </Fragment>
//     );
// };

// Listado.propTypes = {
//     type: PropTypes.string.isRequired
// };

// Listado.defaultProps = {
// }
