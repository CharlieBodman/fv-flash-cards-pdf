import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

/**
 * Font
 */
import aboriginalSerifBold from './fonts/aboriginal-serif-bold';

/**
 * Elements
 */
import A4FlashCard from './elements/A4-flash-card';
import Title from './elements/title';
import Logo from './elements/logo';
import Phrase from './elements/phrase';

/**
 * Fonts
 * In order to support aboriginal fonts. We need to embed them.
 */
pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.vfs['AboriginalSerifBold.ttf'] = aboriginalSerifBold;
pdfMake.fonts = {
    AboriginalSerifBold: {
        normal: 'AboriginalSerifBold.ttf',
        bold: 'AboriginalSerifBold.ttf',
        italics: 'AboriginalSerifBold.ttf',
        bolditalics: 'AboriginalSerifBold.ttf'
    }
}

/**
 * Create Flash Card
 * @param {string} title - Title at the top of the card 
 * @param {string} word - World or Phrase
 */
function CreateFlashCard(title, card) {

    const cardElements = [
        A4FlashCard(),
        Title(title),
        Logo(),
    ];

    if (card.top) {
        cardElements.push(Phrase(card.top, { x: 40, y: 200 }));
    }

    if (card.middle) {
        cardElements.push(Phrase(card.middle, { x: 40, y: 270 }));
    }

    if (card.bottom) {
        cardElements.push(Phrase(card.bottom, { x: 40, y: 360 }));
    }

    return cardElements;
}

/**
 * Generate Content
 * @param {{title:string , cards:[{ top, bottom, middle }]}} options 
 */
function GenerateContent(options) {

    const cards = options.cards;
    
    const title = options.title;

    var generatedCards = [];

    for (let card of cards) {
        generatedCards.push(CreateFlashCard(title, card));
    }

    return generatedCards;
}

class FVFlashCards {
    CreateFlashCards(options) {

        const FlashCardsDocumentDefinition = {
            pageMargins: [0, 0, 0, 0],
            pageSize: 'A4',
            pageOrientation: 'landscape',
            content: GenerateContent(options),
            defaultStyle: {
                font: 'AboriginalSerifBold'
            },
            styles: {
                word: {
                    fontSize: 30,
                    bold: true,
                    alignment: 'center',
                },
                title: {
                    fontSize: 20,
                    alignment: 'center',
                    bold: true,
                    color: 'white'
                }
            }
        }

        return pdfMake.createPdf(FlashCardsDocumentDefinition);
    }
}


export default new FVFlashCards();