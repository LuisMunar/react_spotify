// Dependencies.
import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

// Constants urls.
import { urlPlayList, token } from '../../constants/apiUrl';

// Services.
import dataPlayList from '../../services/dataPlayList';

// Styles.
import './PlayList.scss';

class PlayList extends Component {
    constructor (){
        super();
        this.state = {
            namePlayList : 'No name play list.',
            imagePlayList : 'No image play list.',
            visible: false
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
            console.log(data.items);
            const PlayList = dataPlayList(data);
            this.setState(PlayList);
        });
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
        const { namePlayList, imagePlayList } = this.state;
        
        return (
            <div className='PlayList'>
                <span className='text-h3'>{ namePlayList }</span>
                
                <Button onClick={this.showDrawer} className='button-image' >
                    <img src={ imagePlayList } alt='Icon play' className='image-play-list' />
                </Button>
                <Drawer
                    title={ namePlayList }
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}

export default PlayList;