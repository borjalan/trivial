import React from 'react';

// Styles
import "styles/NotFound.styles.css";

// Constants
import { TEXTS } from 'constants/NotFound.constants';

const NotFoundPage: React.FC = () => {
    return (
        <div id="not-found">
            {TEXTS.MAIN}
        </div>
    );
};

export default NotFoundPage;
