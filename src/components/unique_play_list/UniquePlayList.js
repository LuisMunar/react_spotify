// Dependencies.
import React, { Component } from 'react';
import { Drawer, Button, Avatar } from 'antd';
import PropTypes from 'prop-types';

// Components
import PlayListId from '../play_list_id';

// Styles
import './UniquePlayList.scss';

class UniquePlayList extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { namePlayList, imagePlayList, ownerPlayList, idPlayList } = this.props;
        
        return (
            <div className='UniquePlayList'>
                <Button onClick={this.showDrawer} className='button-image' >
                    <span className='title-play-list'>{ namePlayList }</span>
                    <img src={ imagePlayList } alt='Icon play' className='image-play-list' />
                </Button>
                <Drawer
                    title={ namePlayList }
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    className='content-info-play-list'
                >
                    <div className='picture-play-list'>
                        <Avatar size={64} src={imagePlayList} alt='Play list picture' />
                    </div>
                    <span className='subtitle-play-list'>Informacion de la lista:</span>
                    <span className='text-play-list'>{ `Propietario: ${ownerPlayList}` }</span>
                    <hr />
                    <PlayListId idPlayList={ idPlayList } />
                </Drawer>
            </div>
        );
    }
}

UniquePlayList.propTypes = {
    namePlayList : PropTypes.string.isRequired,
    imagePlayList : PropTypes.string.isRequired,
    ownerPlayList : PropTypes.string.isRequired,
    idPlayList : PropTypes.string.isRequired
}

export default UniquePlayList;