// Dependencies.
import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import PropTypes from 'prop-types';

// Styles
import './UniquePlayList.scss';

class UniquePlayList extends Component {
    constructor (){
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
        const { namePlayList, imagePlayList } = this.props;
        
        return (
            <div className='UniquePlayList'>
                <span className='title-play-list'>{ namePlayList }</span>
                
                <Button onClick={this.showDrawer} className='button-image' >
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
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

UniquePlayList.propTypes = {
    namePlayList : PropTypes.string.isRequired,
    imagePlayList : PropTypes.string.isRequired
}

export default UniquePlayList;