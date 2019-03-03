// Dependencies.
import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

// Constants urls.
import { urlSearch, token } from '../../constants/apiUrl';

// Styles.
import './Search.scss';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.fetchSearch();
    }

    fetchSearch = () => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        const contentBody = '?q=Aullando&type=track';

        fetch(`${urlSearch}${contentBody}`, {
            method : 'GET',
            headers : myHeaders,
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
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
        return (
            <div className='Search'>
                <Button type="primary" onClick={this.showDrawer}>
                    Buscar canciones
                </Button>
                <Drawer
                    title="Buscar canciones"
                    placement="left"
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

export default Search;