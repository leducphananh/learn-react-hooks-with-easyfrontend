import PropTypes from 'prop-types';
import React, { memo } from 'react';

Hero.propTypes = {
    name: PropTypes.string,
};

Hero.defaultProps = {
    name: '',
}

function Hero(props) {

    const { name } = props;
    console.log(name);

    return (
        <div>
            Hero name: {name}
        </div>
    );
}

export default memo(Hero);