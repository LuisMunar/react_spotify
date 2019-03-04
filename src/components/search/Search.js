// Dependencies.
import React, { Component } from 'react';
import { Drawer, Input } from 'antd';
import Button from '@material-ui/core/Button';

// Components.
import ShowTrack from '../show_track';

// Constants urls.
import { urlSearch, token } from '../../constants/apiUrl';

// Services.
import searchTracks from '../../services/searchTracks';

// Styles.
import './Search.scss';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            searchResult : []
        }
    }

    fetchSearch = (textSearch) => {
        if ( textSearch === '' ) {
            return 'Realiza tu busqueda.';
        } else {
            const myHeaders = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            const contentBody = `?q=${textSearch}&type=track`;
    
            fetch(`${urlSearch}${contentBody}`, {
                method : 'GET',
                headers : myHeaders,
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const searchResult = searchTracks(data);
                this.setState({ searchResult });
            });
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

    noReaultSearch = () => (
        'Realiza tu busqueda.'
    )

    showSearch = (searchData) => (
        searchData.map(
            uniqueResult => <ShowTrack
                key={ uniqueResult.searchId }
                trackName={ uniqueResult.searchName }
                trackId={ uniqueResult.searchId }
                trackUri={ uniqueResult.searchUri }
                trackPicture={ uniqueResult.searchAlbumImage }
                trackArtist={ uniqueResult.searchArtist }
                trackAlbum={ uniqueResult.searchAlbum }
                trackPreview={ uniqueResult.searchPreview }
            />
        )
    )

    render() {
        const Search = Input.Search;
        const { searchResult } = this.state;

        return (
            <div className='Search'>
                <Button onClick={this.showDrawer} variant="contained" className='button-search' >
                    Buscar canciones
                </Button>
                <Drawer
                    title="Buscar canciones"
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Search
                        placeholder="Busca tu cancion"
                        onSearch={value => this.fetchSearch(value)}
                        enterButton
                        allowClear
                        className='input-button-search'
                    />
                    <div className='content-result-search'>
                        { searchResult.length === 0 ? this.noReaultSearch() : this.showSearch(searchResult) }
                    </div>
                </Drawer>
            </div>
        );
    }
}

export default Search;