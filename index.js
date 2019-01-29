import FVFlashCards from './src/index';

/**
 * Cards
 */
const Cards = {
    title: 'ᒪᐢᑿᒋᐢ ᓀᐦᐃᔭᐍᐏᐣ / Maskwacis Cree',
    cards: [
        {
            top: 'I love my brothers and sisters.',
            bottom: 'ᓂᓵᑭᐦᐊᐘᐠ ᓃᑏᓴᓈᐠ / (ni)[sa](kiha)(wak) [niti](sa)[nak]'
        },
        {
            middle: 'I love my brothers and sisters.'
        },
        {
            middle: 'ᓂᓵᑭᐦᐊᐘᐠ ᓃᑏᓴᓈᐠ / (ni)[sa](kiha)(wak) [niti](sa)[nak]',
        }
    ]
}


FVFlashCards.CreateFlashCards(Cards).open({}, window);