// Components.
import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

// Styles.
import './EditPlayList.scss';

class EditPlayList extends Component {
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
        return (
            <div className='EditPlayList'>
                <Button onClick={this.showDrawer} className='button-edit-play-list' >
                    ...
                </Button>
                <Drawer
                    title="Editar listas de reproducción."
                    placement="top"
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

export default EditPlayList;