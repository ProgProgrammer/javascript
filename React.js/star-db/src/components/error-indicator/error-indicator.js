import React from 'react';

import "./error-indicator.css";
import icon from './death-star.png';

const ErrorIndicator = () =>
{
    return(
        <div class="error-indicator">
            <img src={ icon } alt="icon error"/>
            <span class="boom">
                BOOM!
            </span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
}

export default ErrorIndicator;