function AddCard() {
    return {
        canvas: [
            {
                type: 'rect',
                x: 20,
                y: 20,
                w: 800,
                h: 60,
                r: 4,
                color: '#b40000',
                lineWidth: 4
            },
            {
                type: 'rect',
                x: 20,
                y: 20,
                w: 800,
                h: 555,
                r: 4,
                lineColor: '#000',
                lineWidth: 4
            },
            {
                type: 'line',
                x1: 20,
                y1: 80,
                x2: 820,
                y2: 80,
                lineWidth: 5,
                lineColor: ''
            }
        ]
    }
}

export default AddCard;