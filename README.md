![logo](https://github.com/CharlieBodman/fv-games-boilerplate/blob/master/www/assets/images/logo.png?raw=true)

---

**Utility to create flash card pdf for printing or saving**

This uses [PDF Make](http://pdfmake.org) under the hood

####Example
```javascript
import FVFlashCards from 'fv-flash-cards-pdf';

const Cards = {
    title: 'ᒪᐢᑿᒋᐢ ᓀᐦᐃᔭᐍᐏᐣ / Maskwacis Cree',
    cards: [
        {
            top: 'I love my brothers and sisters.',
            bottom: 'ᓂᓵᑭᐦᐊᐘᐠ ᓃᑏᓴᓈᐠ / (ni)[sa](kiha)(wak) [niti](sa)[nak]'
        }
    ]
}

const flashCardsPdf = FVFlashCards.CreateFlashCards(Cards);
```
![logo](https://github.com/CharlieBodman/fv-games-boilerplate/blob/master/www/assets/images/logo.png?raw=true)

**Download the PDF**
```javascript
flashCardsPdf.download();
```

**Open PDF**
```javascript
flashCardsPdf.open();
```

**Open in same window**
```javascript
flashCardsPdf.open({}, window);
```

**Get Base64 Encoded**
```javascript
flashCardsPdf.getBase64((data) => {
alert(data);
});
```