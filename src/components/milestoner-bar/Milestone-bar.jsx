import React from 'react';

// chayns components
import { } from 'chayns-components/lib';

// Styles
import './milestone-bar.scss';

const MilestoneBar = () => (
    <div className="barContainer">
        <div className="loadbar"> </div>
        <div className="donationValue">
            <div className="barNow">50€</div>
            <div className="barMile">100€</div>
        </div>
    </div>
);

export default MilestoneBar;
