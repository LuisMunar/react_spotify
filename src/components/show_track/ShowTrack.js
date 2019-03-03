// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Icon, Modal, Avatar } from 'antd';

// Styles.
import './ShowTrack.scss';

class ShowTrack extends Component {
    constructor() {
        super();
        this.state = {
            modalVisible: false
        }
    }

    modalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    render() {
        const { trackName, trackPicture, trackArtist, trackAlbum } = this.props;

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
                        <audio src="../../assets/audios/Aullando.mp3" controls autoplay type="audio/mpeg">
                        </audio>
                    </div>
                </Modal>
            </div>
        );
    }
}

ShowTrack.propTypes = {
    trackName : PropTypes.string.isRequired,
    trackId : PropTypes.string.isRequired,
    trackPicture : PropTypes.string.isRequired,
    trackArtist : PropTypes.string.isRequired,
    trackAlbum : PropTypes.string.isRequired
}

export default ShowTrack;