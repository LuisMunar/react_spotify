// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

// Constants urls.
import { urlPlayListId, token } from '../../constants/apiUrl';

// Services.
import tracksPlayList from '../../services/tracksPlayList';

// Components
import ShowTrack from '../show_track';

// Styles.
import './PlayListId.scss';

class PlayListId extends Component {
    constructor() {
        super();
        this.state = {
            tracks : []
        }
    }

    componentDidMount(){
        this.fetchPlayList();
    }

    fetchPlayList = () => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        const idPlayList = this.props;

        fetch(`${urlPlayListId}${idPlayList.idPlayList}`, {
            method : 'GET',
            headers : myHeaders
        })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            const tracks = tracksPlayList(data);
            //console.log(tracks);
            this.setState({ tracks });
        });
    }

    uploadTracks = () => (
        <CircularProgress className="colorPregress" />
    )

    showTracks = (tracks) => (
        tracks.map(
            track => <ShowTrack key={ track.trackName } trackName={ track.trackName } trackId={ track.trackId } trackUri={ track.trackUri } trackPicture={ track.trackPicture } trackArtist={ track.trackArtist } trackAlbum={ track.trackAlbum } />
        )
    )

    render() {
        const { tracks } = this.state;
        return (
            <div className='PlayListId'>
                <span className='subtitle-play-list'>Pistas:</span>
                { tracks.length === 0 ? this.uploadTracks() : this.showTracks(tracks) }
            </div>
        );
    }
}

PlayListId.propTypes = {
    idPlayList : PropTypes.string.isRequired
}

export default PlayListId;