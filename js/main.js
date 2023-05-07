// var itemUl = document.querySelector('.List');
// var itemForm = document.querySelector('.forn')
var itemSurapper = document.querySelector('.surapper')
var arr = ['red','blue','green','yellow'];


var arr = [
    {
        Img:'https://m.media-amazon.com/images/I/61xAWLC5aUL._AC_SX466_.jpg',
        marka: 'Samsung',
        Name: 'Samsung Galaxy S10 Lite',
        color:'rgb(0, 183, 255)',
        price: '1500$',
    },
    {
        Img:'https://m.media-amazon.com/images/I/812OLyEllsL._AC_SL1500_.jpg',
        marka: 'Iphone',
        Name: 'Samsung Galaxy A33',
        color:'rgb(0, 183, 255)',
        price: '1000$',
    },
    {
        Img:'https://www.pdevice.com/wp-content/uploads/2019/12/Samsung-Galaxy-A51-450x450.jpg',
        color:'rgb(0, 183, 255)',
        marka: 'Samsung',
        Name: 'Samsung Galaxy A51',
        price: '1500$',
    },
]

for(var i=0;i<arr.length; i++){
    var card = `    <div class="style" style="background: ${arr[i].color}">
<img class="img" src="${arr[i].Img}" alt="">
<div>
    <p>${arr[i].marka}</p>
    <p class="name">${arr[i].Name}</p>
    <p class="price">${arr[i].price}</p>
</div>
</div>`;

itemSurapper.innerHTML += card
}

