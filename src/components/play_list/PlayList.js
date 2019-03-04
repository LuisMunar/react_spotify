// Dependencies.
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// Constants urls.
import { urlPlayList, token } from '../../constants/apiUrl';

// Components.
import UniquePlayList from '../unique_play_list';
import EditPlayList from '../edit_play_list';

// Services.
import dataPlayList from '../../services/dataPlayList';

// Styles.
import './PlayList.scss';

class PlayList extends Component {
    constructor (){
        super();
        this.state = {
            lists : [],
        }
    }

    componentDidMount() {
        this.getPlayList();
    }

    getPlayList = () => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        fetch(urlPlayList, {
            method : 'GET',
            headers : myHeaders
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            const playLists = dataPlayList(data);
            //console.log(playLists);
            this.setState({ lists : playLists });
        });
    }

    uploadPlaylists = () => {
        return <CircularProgress className="colorPregress" />;
    }

    returnPlaylists = (lists) => (
        lists.map(
            list => <div key={ list.namePlayList } >
                <EditPlayList
                    namePlayList={ list.namePlayList }
                    idPlayList={ list.idPlayList }
                />
                <UniquePlayList
                    namePlayList={ list.namePlayList }
                    imagePlayList={ list.imagePLayList }
                    ownerPlayList={ list.ownerPlayList }
                    idPlayList={ list.idPlayList }
                />
            </div>
        )
    )

    render() {
        const { lists } = this.state;

        return (
            <div className='PlayList'>
                { lists.length === 0 ? this.uploadPlaylists() : this.returnPlaylists(lists) }
            </div>
        );
    }
}

export default PlayList;