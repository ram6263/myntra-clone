let bagitem;
onload();
function onload(){
    let bagitemstr=localStorage.getItem('bagitem');
    bagitem=bagitemstr ? JSON.parse(bagitemstr):[];
    displayitemOnHome();
    displayBagIcon();
}


function addTobag(itemId) {
    bagitem.push(itemId);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    displayBagIcon();
}

function displayBagIcon(){
    let bagitemcountelement=document.querySelector('.bag-item-count');
    if(bagitem.length>0){
        bagitemcountelement.style.visibility='visible';
        bagitemcountelement.innerText=bagitem.length;
    }
    else{
        bagitemcountelement.style.visibility='hidden';
    }
    
}

function displayitemOnHome() {


    let itemsContainerElement = document.querySelector('.items-container');
    if(itemsContainerElement===undefined){
        return;
    }
    let items = [
        {
            id:'001',
            item_image: 'image/1.webp',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' puma ✔️',
            item_name: 'Round-nack t-shirt',
            current_price: 'Rs 399',
            orignal_price: 'Rs 599',
            discount: '(45% OFF)',
        },
        {
            id:'002',
            item_image: 'image/2.jpeg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' Gold',
            item_name: 'Earring for women',
            current_price: 'Rs 5999',
            orignal_price: 'Rs 7999',
            discount: '(45% OFF)',
        },
        {
            id:'003',
            item_image: 'image/3.jpg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' Highlender',
            item_name: 'Girls wear top',
            current_price: 'Rs 299',
            orignal_price: 'Rs 499',
            discount: '(45% OFF)',
        },
        {
            id:'004',
            item_image: 'image/4.jpg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' Rebook',
            item_name: 'slim-fit jeans',
            current_price: 'Rs 699',
            orignal_price: 'Rs 999',
            discount: '(45% OFF)',
        },
        {
            id:'005',
            item_image: 'image/6.webp',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' HIGHLENDER',
            item_name: 'Men Hoodies',
            current_price: 'Rs 799',
            orignal_price: 'Rs 1299',
            discount: '(45% OFF)',
        },
        {
            id:'006',
            item_image: 'image/7.jpeg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' BEN NEVI',
            item_name: 'Men watch',
            current_price: 'Rs 1599',
            orignal_price: 'Rs 1999',
            discount: '(45% OFF)',
        },
        {
            id:'007',
            item_image: 'image/5.avif',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' ADDIDAS',
            item_name: 'Men shose',
            current_price: 'Rs 1399',
            orignal_price: 'Rs 1599',
            discount: '(45% OFF)',
        },
        {
            id:'008',
            item_image: 'image/8.jpeg',
            rating: {
                stars: 4.5,
                noOfReviews: 1400,
            },
            company_name: ' G STAR RAW',
            item_name: 'Men Sorts',
            current_price: 'Rs 349',
            orignal_price: 'Rs 549',
            discount: '(45% OFF)',
        },


    ];
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += `<div class="item-contain">
    <img class="item-img" src="${item.item_image}" alt="item-image">
    <div class="rating">
        ${item.rating.stars}⭐ | ${item.rating.noOfReviews}
    </div>
    <div class="company-name">
        ${item.company_name}
    </div>
    <div class="item-name">${item.item_name}</div>
    <div class="pricing">
        <span class="current-price">${item.current_price}</span>
        <span class="orignal-price">${item.orignal_price}</span>
        <span class="discount">${item.discount}</span>
    </div>
    <button class="btn-add-bag" onclick="addTobag(${item.id})">Add to Bag</button>
    </div>`;
    });


    itemsContainerElement.innerHTML = innerHTML;
}