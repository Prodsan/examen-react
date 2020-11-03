import { tableIcons } from './icons';

export const generarDataListado = (type, id, data, history) => {
    // me quedo con las seasons
    const listadoTemporadas = () => {
        const seasonsList = data.reduce((newTempArr, el) => ((newTempArr.includes(el.season.trim())) ? newTempArr : [...newTempArr, el.season]), []);
        let datar = seasonsList.map((obj) => {
            return {
                season: 'Temporada ' + obj
            }
        });
        let actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ir a los episodios de la temporada",
                onClick: (event, rowData) => {
                    history.push('/temporada/' + parseInt(rowData.tableData.id + 1))
                }
            },
        ];
        let columns = [
            { title: 'Temporada', field: 'season' },
        ];

        return {
            data: datar,
            actions: actions,
            columns: columns
        }
    }

    const listadoEpisodios = () => {
        let datar = data.filter((obj) => {
            if (obj.season.trim() === id && obj.series === 'Breaking Bad') {
                return {
                    episode: obj.episode,
                    episode_num: obj.episode,
                    season: obj.season,
                    title: obj.title,
                    seasons: data.seasons
                }
            }
        });
        let actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ver detalles del episodio",
                onClick: (event, rowData) => {
                    console.log(rowData.episode_id);
                    history.push('/ep-detalle/' + parseInt(rowData.episode_id))
                }
            },
        ];
        let columns = [
            { title: 'Título', field: 'title', cellStyle: { wordBreak: 'break-all' }, width: 300, },
            { title: 'Num ep', field: 'episode' },
            { title: 'Estrenado', field: 'air_date' },
            { title: 'Temporada', field: 'season' },
        ];

        return {
            data: datar,
            actions: actions,
            columns: columns
        }
    }

    const listadoPersonajesEp = () => {
        // todo: cambiar let por const
        let datar = data.dataEpisode.map((obj) => {
            let characters = obj.characters
            return characters
        });
        let datar2 = datar.map((obj, i) => {
            return obj.map((el) => {
                let obj = data.dataCharacters.find(o => o.name.trim() == el.trim())
                let index = data.dataCharacters.indexOf(obj);
                console.log(index);
                return {
                    nombre: el,
                    id: data.dataCharacters[index]?.char_id
                }

            })
        })

        let actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ver detalles del personaje",
                onClick: (event, rowData) => {
                    console.log(rowData.id);
                    history.push('/personaje/' + parseInt(rowData.id)) // todo: poner ruta
                }
            },
        ];
        let columns = [
            { title: 'Nombre del personaje', field: 'nombre' },
        ];

        return {
            data: datar2[0],
            actions: actions,
            columns: columns
        }
    }

    const listadoPersonajes = () => {
        let actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ver detalles del personaje",
                onClick: (event, rowData) => {
                    console.log(rowData.char_id);
                    history.push('/personaje/' + parseInt(rowData.char_id)) // todo: poner ruta
                }
            },
        ];
        let columns = [
            {
                title: 'Foto', field: 'img',
                render: rowData => <img src={rowData.img} style={{ width: 40, borderRadius: '50%' }} />
            },
            { title: 'Nombre del personaje', field: 'name' },
            { title: 'Apodo', field: 'nickname' },
            { title: 'Nombre del actor', field: 'portrayed' },
            { title: 'Estado en la serie', field: 'status' },
        ];

        return {
            data: data,
            actions: actions,
            columns: columns
        }
    }
    const listadoEpisodiosPers = () => {

        let datar = data.dataEpisodiosPers.filter((obj) => {
            if (obj.characters.includes(data.dataPersonaje[0].name) && obj.series === 'Breaking Bad') {
                return {
                    episode: obj.episode,
                    season: obj.season,
                    title: obj.title,
                    air_date: data.air_date
                }
            }
        });
        console.log(datar);
        let actions = [
            {
                icon: tableIcons.VisibilityIcon,
                tooltip: "Ver detalles del episodio donde aparece este personaje",
                onClick: (event, rowData) => {
                    console.log(rowData.episode_id);
                    history.push('/ep-detalle/' + parseInt(rowData.episode_id)) // todo: poner ruta
                }
            },
        ];
        let columns = [
            { title: 'Nombre del episodio', field: 'title' },
            { title: 'Temporada', field: 'season' },
            { title: 'Nº episodio', field: 'episode' },
            { title: 'Lanzamiento del episodio', field: 'air_date' },
        ];

        return {
            data: datar,
            actions: actions,
            columns: columns
        }
    }



    switch (type) {
        case 'temporadas':
            return listadoTemporadas();
        case 'episodios':
            return listadoEpisodios();
        case 'personajesEp':
            return listadoPersonajesEp();
        case 'personajes':
            return listadoPersonajes();
        case 'episodiosPers':
            return listadoEpisodiosPers();
        default:
            history.push('/temporadas');
            break;
    }
}