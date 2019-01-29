/**
 * Adds a title to the top center of flash card
 * @param {string} title 
 */
function AddTitle(title) {
    return {
        text: title,
        style: 'title',
        absolutePosition: { x: 0, y: 40 },
    }
}

export default AddTitle;