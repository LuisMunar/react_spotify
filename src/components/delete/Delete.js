// Dependencies.
import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// Constants urls.
import { urlDelete, token } from '../../constants/apiUrl';

// Styles.
import './Delete.scss';

class Delete extends Component {
    constructor() {
        super();
        this.state = {
            responseFetch : ''
        }
    }

    functionDelete = (idPlayList) => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        const url = `${urlDelete}?ids=${idPlayList}`;

        fetch(url, {
            method : 'DELETE',
            headers : myHeaders
        })
        .then(response => response.json())
        .then(data => {
            if ( data.error.status === 403 ) {
                this.setState(
                    {
                        responseFetch : 'Permisos insuficientes para el cliente.',
                    }
                );
            } else {
                this.setState(
                    { 
                        responseFetch : 'La lista de reproduccion actual se elimino correctamente.',
                    }
                );
            }
        });
    }

    render() {
        const { idPlayList } = this.props;
        const { responseFetch } = this.state;

        return (
            <div className='Delete'>
                <span className='text'>Eliminar la actual lista de reproduccion.</span>
                <Button
                    onClick={
                        (e) => {
                            e.preventDefault();
                            this.functionDelete(idPlayList);
                        }
                    }
                    className='button'
                    type="primary"
                >
                    Eliminar
                </Button>
                { responseFetch === 'Permisos insuficientes para el cliente.' ? 
                    <span className='text-error'>{ responseFetch }</span> :
                    <span className='text-success'>{ responseFetch }</span>
                } 
            </div>
        );
    }
}

Delete.propTypes = {
    idPlayList : PropTypes.string.isRequired,
}

export default Delete;