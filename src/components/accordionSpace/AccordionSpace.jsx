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
                        title="Erika Mustermann"
                        image="https://images.generated.photos/5RFZayOBk2uIa_GlT_6aYWvQqE_lZh28BQRqNOvNlZM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzE4NDUuanBn.jpg"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Jon Doe"
                        image="https://images.generated.photos/-cShVbi7oWRVJruynZ0UkO6wXtLm5HDE_uhC3qlTV-A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4OTgyMjIuanBn.jpg"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Noah Dahlhaus"
                        image="https://sub60.tobit.com/u/2210833?size=300&nocache=true&returnDefault=false&ts=1599571638679"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Luzie Bauch"
                        image="https://sub60.tobit.com/u/2165503?size=90"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Anonym"
                        image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Anonym"
                        image="https://chayns.tobit.com/storage/60038-22141/Images/icon-72.png"
                        className="testItem"
                        circle
                    />
                </List>
            </div>
        </Accordion>

        <Accordion head="Meine Spenden">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Noah Dahlhaus"
                        subtitle="Du hast im Unbrexit 5€ für Max Mustermann gespendet"
                        image="https://sub60.tobit.com/u/2210833?size=300&nocache=true&returnDefault=false&ts=1599571638679"
                        className="testItem"
                        circle
                    />
                </List>
            </div>
        </Accordion>
    </div>
);

export default AccordionSpace;
