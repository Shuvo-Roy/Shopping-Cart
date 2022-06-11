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

let basket = JSON.parse(localStorage.getItem("data"))  || [];

let generateShop=()=>{
    return (shop.innerHTML= shopItemsData.map((x)=>{
        let {id,name,price,desc,img}=x;
        let search = basket.find((x)=> x.id === id) || []
        return `<div class="item">
        <img width="220" height="250" src=${img} alt="">
        <div id=product-id-${id} class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantitu">${search.item== undefined? 0: search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};

generateShop();

//increment function

let increment = (id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>x.id===selectedItem.id);

    if(search===undefined){
        basket.push({
        id:selectedItem.id,
        item:1,
    });
    }
    else{
        search.item+=1;
    }

    
    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};

//decrement function

let decrement = (id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>x.id===selectedItem.id);

    if(search === undefined) return;
    else if(search.item===0) return;
    else{
        search.item-=1;
    }

    update(selectedItem.id);
    basket= basket.filter((x)=>x.item!==0);
    //console.log(basket);
    
    localStorage.setItem("data", JSON.stringify(basket));
};

//update function

let update = (id)=>{
    let search = basket.find((x)=>x.id === id);
    console.log(search.item);

    document.getElementById(id).innerHTML=search.item;

    calculation();
};

//calculation

let calculation=()=>{
    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML= basket.map((x) =>x.item).reduce((x,y) =>x+y,0);
};

calculation();