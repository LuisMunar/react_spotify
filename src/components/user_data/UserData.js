// Dependencies.
import React, { Component } from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';

// Styles.
import './UserData.scss';

class UserData extends Component {
    render() {
        const { profilePicture, userName, email, followers, country } = this.props;

        return (
            <div className='UserData'>
                <Avatar size={64} src={profilePicture} alt='Profile picture' />
                <span className='text-h1'>{ userName }</span>
                <span className='text-h2'>{ email }</span>
                <span className='text-h2'>{`Seguidore ${followers}`}</span>
                <span className='text-h2'>{ country }</span>
            </div>
        );
    }
}

UserData.propTypes = {
    profilePicture :PropTypes.string.isRequired,
    userName : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    followers : PropTypes.number.isRequired
}

export default UserData;