import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicBox.scss';

MagicBox.propTypes = {};

function MagicBox(props) {

    const color = useMagicColor();

    return (
        <div
            className="magic-box"
            style={{ backgroundColor: color }}
        >
            MAGIC BOX
        </div>
    );
}

export default MagicBox;