import React from 'react';
import BetterClock from '../../components/BetterClock';
import Clock from '../../components/Clock';

ClockPage.propTypes = {};

function ClockPage(props) {
    return (
        <>
            <Clock />
            <BetterClock />
        </>
    );
}

export default ClockPage;