import React from 'react';

// chayns components
import { Accordion, ListItem, List } from 'chayns-components/lib';

// Styles
import './AccordionSpace.scss';

const AccordionSpace = () => (
    <div>
        <Accordion head="Alle Spender" dataGroup="space">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Danke für die Spende Erika"
                        // eslint-disable-next-line max-len
                        image="https://images.generated.photos/5RFZayOBk2uIa_GlT_6aYWvQqE_lZh28BQRqNOvNlZM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxNzE4NDUuanBn.jpg"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Danke Anonymer Spender"
                        image="https://sub60.tobit.com/Content/unknown_user.png"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Vielen Dank an Noah"
                        image="https://sub60.tobit.com/u/2210833?size=300&nocache=true&returnDefault=false&ts=1599571638679"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Danke für die Spende Jon"
                        // eslint-disable-next-line max-len
                        image="https://images.generated.photos/-cShVbi7oWRVJruynZ0UkO6wXtLm5HDE_uhC3qlTV-A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4OTgyMjIuanBn.jpg"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Vielen Dank an Luzie"
                        image="https://sub60.tobit.com/u/2165503?size=90"
                        className="testItem"
                        circle
                    />
                    <ListItem
                        title="Danke Anonymer Spender"
                        image="https://sub60.tobit.com/Content/unknown_user.png"
                        className="testItem"
                        circle
                    />
                </List>
            </div>
        </Accordion>

        <Accordion head="Meine Spenden" dataGroup="space">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Olaf Schubert"
                        subtitle="Danke für deine 5€ Spende"
                        // eslint-disable-next-line max-len
                        image="https://tappqa.tobit.com/training/2020/nd/DonatePageLytfass/Olaf_Schubert.jpg"
                        className="testItemArtist"
                        circle
                    />
                </List>
            </div>
        </Accordion>

        <Accordion head="Meine Künstler" dataGroup="space">
            <div className="accordion__content">
                <List>
                    <ListItem
                        title="Olaf Schubert" // eslint-disable-next-line max-len
                        image="https://tappqa.tobit.com/training/2020/nd/DonatePageLytfass/Olaf_Schubert.jpg"
                        className="testItemArtist"
                        circle
                    >
                        Olaf Schubert (* 7. November 1967 in Plauen[1]) ist als Kunstfigur ein Alter Ego des Dresdner
                        Comedians, Kabarettisten und Musikers Michael Haubold.[2][3] Schubert tritt regelmäßig mit der
                        Formation „Olaf Schubert und seine Freunde“ zusammen mit Herrn Stephan (Bass, Trompete, Gesang)
                        und Jochen Barkas (Gitarre, Gesang) auf und musiziert mit ihr. Der Künstler Michael Haubold spielt
                        auch als Gabi Schubert (die Schwester von Olaf Schubert) Schlagzeug bei der Band Dekadance und bis 2013
                        als Michael Rock bei der Band „Die Rockys“
                    </ListItem>

                    <ListItem
                        title="Stefan Raab" // eslint-disable-next-line max-len
                        image="https://images.generated.photos/-cShVbi7oWRVJruynZ0UkO6wXtLm5HDE_uhC3qlTV-A/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4OTgyMjIuanBn.jpg"
                        className="testItemArtist"
                        circle
                    >
                        Stefan Konrad Raab (* 20. Oktober 1966 in Köln)[1] ist ein deutscher Fernseh- und Musikproduzent,
                        Komponist, Singer-Songwriter, Entertainer, Unternehmer sowie ehemaliger Fernsehmoderator und Komiker.
                        Er wurde vor allem durch die Shows TV total und Schlag den Raab bekannt. Zwischen 1998 und 2012 schrieb
                        und produzierte er mehrere deutsche Beiträge für den Eurovision Song Contest und trat dort im Jahr 2000
                        auch selbst als Sänger auf. 2015 beendete er seine aktive Fernsehkarriere.
                    </ListItem>
                </List>
            </div>
        </Accordion>
    </div>
);

export default AccordionSpace;
