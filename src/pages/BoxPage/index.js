import React from 'react';
import ColorBox from '../../components/ColorBox';
import MagicBox from '../../components/MagicBox';

BoxPage.propTypes = {};

function BoxPage(props) {
    return (
        <>
            <ColorBox />
            <MagicBox />
        </>
    );
}

export default BoxPage;