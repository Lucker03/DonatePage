import React from 'react';

// chayns components
import { Button, Input, Checkbox, RadioButton } from 'chayns-components/lib';

// Styles
import './DonateSpace.scss';

const DonateSpace = () => {
    const thanks = () => {
        chayns.dialog.alert('', 'Danke für die Spende');
    };

    return (
        <div className="DonateContainer">
            <div className="DonateAmountContainer">
                <RadioButton name="donate" className="content">1€</RadioButton>
                <RadioButton name="donate" className="content">2€</RadioButton>
                <RadioButton name="donate" className="content">5€</RadioButton>
                <RadioButton name="donate" className="content">10€</RadioButton>
                <RadioButton name="donate" className="content"><Input type="number" dynamic placeholder="Eigener Betrag"/></RadioButton>
                <div className="content"/>
                <div className="content">Anonym spenden</div>
                <Checkbox toggleButton="true"/>
            </div>
            <div className="center">
                <Button className="center" onClick={thanks}>Spenden</Button>
            </div>
        </div>
    );
};

export default DonateSpace;
