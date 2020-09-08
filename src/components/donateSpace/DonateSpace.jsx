import React from 'react';

// chayns components
import { Button, Input, Checkbox, RadioButton } from 'chayns-components/lib';

// Styles
import './DonateSpace.scss';

const DonateSpace = () => (
    <div className="DonateContainer">
        <div className="DonateAmountContainer">
            <RadioButton name="donate" className="content">1€</RadioButton>
            <RadioButton name="donate" className="content">2€</RadioButton>
            <RadioButton name="donate" className="content">5€</RadioButton>
            <RadioButton name="donate" className="content">10€</RadioButton>
            <RadioButton name="donate" className="content"><Input placeholder="Eigener Betrag"/></RadioButton>
            <div className="content"/>
            <div className="content">Anonym spenden</div>
            <Checkbox toggleButton="true"/>
        </div>
        <div className="center">
            <Button className="center">Spenden</Button>
        </div>
    </div>
);

export default DonateSpace;
