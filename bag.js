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

let bagItemobj;
onload();
function onload(){
    loadBagItemobj();
    displayBagitem();
    displaybagSummary();
}
function loadBagItemobj(){
    console.log(bagitem);
    bagItemobj=bagitem.map(itemId=>{
        for(let i=0;i<items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemobj)
}
function displaybagSummary(){
    let bagsummaryElement=document.querySelector('.bag-summary');
    let totalItem=bagItemobj.length;
    let totalMRP=0;
    let totalDiscount=0;
    

    bagItemobj.forEach(bagItem=>{
        totalMRP+=(bagItem.orignal_price);
        totalDiscount+=bagItem.orignal_price - bagItem.current_price;
    })
    console.log(totalMRP)
    let finalPayment=totalMRP-totalDiscount+49;

    bagsummaryElement.innerHTML=` <div class="price-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Item)</div>
    <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Discount</span>
        <span class="price-item-value  discount-item-value">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹49</span>
    </div>
    <hr>
    <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹${finalPayment}</span>
    </div>


</div>
<button class="btn-place-order">
    <div class="css-xyz">PLACE ORDER</div>
</button>`;
}
function displayBagitem(){
    // console.log(bagitem);
    let containerElement=document.querySelector('.bag-items-conatiner');
    let innerHTML='';
    bagItemobj.forEach(bagitems=>{
        innerHTML+=generateItem(bagitems);
    });
    containerElement.innerHTML=innerHTML;
}
function removeFromBag(itemId){
    bagitem=bagitem.filter(bagItemId=> bagItemId!=itemId);
    localStorage.setItem('bagitem',JSON.stringify(bagitem));
    loadBagItemobj();
    displayBagIcon();
    displayBagitem();
    displaybagSummary();
}
function generateItem(item){
    return` <div class="bag-item-conatiner">
    <div class="item-left-part">
        <img class="bag-item-image" src="${item.item_image}" alt="">
    </div>

    <div class="item-right-part">
        <div class="item-company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">${item.current_price}</span>
            <span class="orignal-price">${item.orignal_price}</span>
            <span class="discount">${item.discount}</span>
        </div>
        <div class="return-period">
            <span class="return-period-day">14 day</span>
            <span class="return-text">return available</span>
        </div>
        <div class="dilivery-details">
            Dilivery by
            <span class="dilivery-details-day">10 jan 2024</span>
        </div>
    </div>
    <div class="remove-item" onclick="removeFromBag(${item.id})">X</div>
</div>`;

}

