// Dependencies.
import React, { Component } from 'react';
import { Drawer, Button, Icon } from 'antd';
import PropTypes from 'prop-types';

// Components.
import Edit from '../edit';
import Delete from '../delete';

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
        const { namePlayList, idPlayList } = this.props;

        return (
            <div className='EditPlayList'>
                <Button onClick={this.showDrawer} className='button-edit-play-list' >
                    <Icon type="arrows-alt" />
                </Button>
                <Drawer
                    title={`Editar ${namePlayList}`}
                    placement="top"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <div className='container-edit-play-list'>
                        <div className='container-edit'>
                            <Edit idPlayList={ idPlayList } />
                        </div>
                        <div className='container-edit'>
                            <Delete idPlayList={ idPlayList } />
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

EditPlayList.propTypes = {
    namePlayList : PropTypes.string.isRequired,
    idPlayList : PropTypes.string.isRequired
}

export default EditPlayList;