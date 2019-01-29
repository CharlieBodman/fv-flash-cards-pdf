
/**
 * Adds a word or phrase to the center of the flash card
 * @param {string} word 
 * @param {array} position - eg. ({ x: 40, y: 270 })
 */
function AddWord(word, position) {
    return {
        table: {
            widths: [750],
            body: [
                [word]
            ],
            borders: [0]
        },
        layout: 'noBorders',
        style: 'word',
        absolutePosition: position,
    };
}

export default AddWord;