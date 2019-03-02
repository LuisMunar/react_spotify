// Dependencies.
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// Constants urls.
import { urlUserProfile, token } from '../../constants/apiUrl';

// Services.
import dataUserProfile from '../../services/dataUserProfile';

// Components.
import UserData from '../user_data';
import PlayList from '../play_list';

// Styles.
import './Home.scss';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            profilePicture : 'No image.',
            userName : 'No name.',
            email : 'No email',
            followers : 0,
            country : 'No country.'
        }
    }

    componentDidMount() {
        this.fetchUserProfile();
    }

    fetchUserProfile = () => {
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });

        fetch(urlUserProfile, {
            method : 'GET',
            headers : myHeaders
        })
        .then(response => response.json())
        .then(data => {
            const dataUser = dataUserProfile(data);
            this.setState(dataUser);
        });
    }

    uploadComponents = () => {
        return <CircularProgress className="colorPregress" />;
    }

    returnComponents = ( profilePicture, userName, email, followers, country ) => (
        <div className='general-container'>
            <UserData
                profilePicture = { profilePicture }
                userName = { userName }
                email = { email }
                followers = { followers }
                country = { country }
            />
            <PlayList />
        </div>
    )

    render() {
        const { profilePicture, userName, email, followers, country } = this.state;

        return (
            <div className='Home'>
                { userName === 'No name.' ? this.uploadComponents() : this.returnComponents(profilePicture, userName, email, followers, country) }
            </div>
        );
    }
}

export default Home;