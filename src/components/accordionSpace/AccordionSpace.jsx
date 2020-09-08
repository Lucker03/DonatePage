import React from 'react';

// chayns components
import { Accordion, ListItem, List } from 'chayns-components/lib';

// Styles
import './AccordionSpace.scss';

const AccordionSpace = () => (
    <div>
        <Accordion head="Alle Spender">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Hello World!"
                        image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                    />
                </List>
            </div>
        </Accordion>

        <Accordion head="Trophäen">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Hello World!"
                        image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                    />
                </List>
            </div>
        </Accordion>

        <Accordion head="Meine Spenden">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Hello World!"
                        image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                    />
                </List>
            </div>
        </Accordion>
    </div>
);

export default AccordionSpace;
