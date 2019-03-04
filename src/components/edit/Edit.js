// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';

// Constants urls.
import { urlEdit, token } from '../../constants/apiUrl';

// Styles.
import './Edit.scss';

class Edit extends Component {
    constructor() {
        super();
        this.state = {
            newNamePlayList : '',
            UpdateResponse : '',
        }
    }

    onchangeNamePlayList = (e) => {
        const newNamePlayList = e.target.value;
        this.setState({
            newNamePlayList
        })
    }

    functionEditName = (newNamePlayList, idPlayList) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        const url = `${urlEdit}${idPlayList}`;

        fetch(url, {
            method : 'PUT',
            headers : myHeaders,
            body : {
                "name": newNamePlayList,
            }
        })
        .then(response => response.json())
        .then(data => {
            if ( data.error.status === 403 ) {
                this.setState(
                    {
                        UpdateResponse : 'Permisos insuficientes para el cliente.',
                    }
                );
            } else {
                this.setState(
                    { 
                        UpdateResponse : 'El cambio de nombre se realizo correctamente.',
                    }
                );
            }
            
        });
    }

    render() {
        const { idPlayList } = this.props;
        const { newNamePlayList, UpdateResponse } = this.state;
        const enabled = newNamePlayList.length > 0;

        return (
            <div className='Edit'>
                <span className='text-edit'>Cambiar el nombre de la lista de reproduccion.</span>
                <Input
                    name='editName'
                    placeholder="Editar Nombre"
                    className='input-edit'
                    onChange={this.onchangeNamePlayList.bind(this)}
                />
                <Button
                    disabled={ !enabled }
                    onClick={
                        (e) => {
                            e.preventDefault();
                            this.functionEditName(newNamePlayList, idPlayList);
                        }
                    }
                    type="primary"
                    className='button-edit'
                >
                    Editar
                </Button>
                { UpdateResponse === 'Permisos insuficientes para el cliente.' ? 
                    <span className='text-error'>{ UpdateResponse }</span> :
                    <span className='text-success'>{ UpdateResponse }</span>
                }
        </div>
        );
    }
}

Edit.propTypes = {
    idPlayList : PropTypes.string.isRequired,
}

export default Edit;