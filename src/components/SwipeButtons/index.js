import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcom from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

import './styles.css';

function SwipeButtons(){
    return(
        <div className="swipe-buttons">
            <IconButton className="swipe-button-repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-button-left">
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipe-button-star">
                <StarRateIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipe-button-right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-button-lightning">
                <FlashOnIcom fontSize="large" />
            </IconButton>
        </div>
    );
}

export default SwipeButtons;