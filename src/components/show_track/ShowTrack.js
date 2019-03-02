// Dependencies.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Icon } from 'antd';

// Styles.
import './ShowTrack.scss';

class ShowTrack extends Component {
    render() {
        const { trackName } = this.props;

        return (
            <div className='ShowTrack'>
                <Button variant="contained" color="primary" className='button-track'>
                    <Icon type="play-circle" className='icon-track' />
                    { trackName }
                </Button>
            </div>
        );
    }
}

ShowTrack.propTypes = {
    trackName : PropTypes.string.isRequired
}

export default ShowTrack;