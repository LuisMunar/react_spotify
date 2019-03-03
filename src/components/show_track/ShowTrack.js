// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Icon, Modal, Avatar } from 'antd';

// Constants urls.
import { token } from '../../constants/apiUrl';

// Styles.
import './ShowTrack.scss';

class ShowTrack extends Component {
    constructor() {
        super();
        this.state = {
            trackPlay : '',
            modalVisible: false
        }
    }

    componentDidMount() {
        this.fetchPlay();
    }

    fetchPlay() {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        const { trackUri } = this.props;

        fetch('https://api.spotify.com/v1/me/player/play', {
            method : 'PUT',
            headers : myHeaders,
            body : {
                "uris": [
                    trackUri
                ]
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }

    modalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    functionErrorTrackPlay = () => (
        <div className='container-error'>
            <Icon type="close-circle" className='icon-error' />
            Error en la reproduccion.
        </div>
    )

    functionTrackPlay = (trackPlay) => (
        <div>
            <audio src={ trackPlay } controls autoPlay type="audio/mpeg">
            </audio>
        </div>
    )

    render() {
        const { trackName, trackPicture, trackArtist, trackAlbum } = this.props;
        const { trackPlay } = this.state;

        return (
            <div className='ShowTrack'>
                <Button onClick={() => this.modalVisible(true)} variant="contained" className='button-track'>
                    <Icon type="play-circle" className='icon-track' />
                    <span className='name-track'>{ trackName }</span>
                </Button>
                <Modal
                    title={ trackName }
                    centered
                    visible={this.state.modalVisible}
                    onOk={() => this.modalVisible(false)}
                    onCancel={() => this.modalVisible(false)}
                    footer={ null }
                >
                    <Avatar size={64} src={ trackPicture } alt='Track picture' />
                    <span className='content-subtitle content-subtitle-uno'>{ trackArtist }</span>
                    <span className='content-subtitle content-subtitle-dos'>{ trackAlbum }</span>
                    <div className='container-audio'>
                        { trackPlay === '' ? this.functionErrorTrackPlay() :  this.functionTrackPlay(trackPlay)}
                    </div>
                </Modal>
            </div>
        );
    }
}

ShowTrack.propTypes = {
    trackName : PropTypes.string.isRequired,
    trackId : PropTypes.string.isRequired,
    trackUri : PropTypes.string.isRequired,
    trackPicture : PropTypes.string.isRequired,
    trackArtist : PropTypes.string.isRequired,
    trackAlbum : PropTypes.string.isRequired
}

export default ShowTrack;