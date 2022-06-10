let shop = document.getElementById("shop");

let shopItemsData=[{
    id:"item1",
    name:"Blue T-shirt",
    price:45,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img:"images/tshirt1.jpg",
},
{
    id:"item2",
    name:"Black T-shirt",
    price:40,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img:"images/tshirt2.jpg",
},
{
    id:"item3",
    name:"Casual Shirt",
    price:50,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img:"images/tshirt3.jpg",
},
{
    id:"item4",
    name:"Design T-shirt",
    price:55,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img:"images/tshirt4.jpg",
},];


let generateShop=()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x;
        return `<div class="item">
        <img width="220" height="250" src=${img} alt="">
        <div id=product-id-${id} class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantitu">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};

generateShop();