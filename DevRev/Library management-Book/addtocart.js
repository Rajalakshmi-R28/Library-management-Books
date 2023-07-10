const product=[ 
    {
        id:0,
        img:'img/0degree.jpeg',
        title:'0 Degree',
        price:820,
    },
    {
        id:1,
        img:'img/amaravathi.jpeg',
        title:'Amaravathi',
        price:180,
    },
    {
        id:2,
        img:'img/thehateugive.png',
        title:'The Hate U Give',
        price:560,
    },
    {
        id:3,
        img:'img/breakingdawn.jpeg',
        title:'Breaking Dawn',
        price:450,
    },
    {
        id:4,
        img:'img/eclipse.jpeg',
        title:'ECLIPSE',
        price:750,
    },
    {
        id:5,
        img:'img/everythingeverything.jpeg',
        title:'Everything Everything',
        price:720,
    },
    {
        id:6,
        img:'img/godaan.jpeg',
        title:'Godaan',
        price:580,
    },
    {
        id:7,
        img:'img/kitnepakistan.jpeg',
        title:'Kitne Pakistan',
        price:350,
    },
    {
        id:8,
        img:'img/newmoon.jpeg',
        title:'New Moon',
        price:820,
    },
    {
        id:9,
        img:'img/ponniyinselvan.jpeg',
        title:'Ponniyin selvan',
        price:1200,
    },{
        id:10,
        img:'img/pride.jpeg',
        title:'Pride',
        price:550,
    },{
        id:11,
        img:'img/randamoozham.jpeg',
        title:'Randamoozham',
        price:980,
    },{
        id:12,
        img:'img/sunisalsoastar.jpeg',
        title:'Sun is also a star',
        price:300,
    },{
        id:13,
        img:'img/thebookthief.jpeg',
        title:'The book thief',
        price:960,
    },
    {
        id:14,
        img:'img/theinkblackheart.jpg',
        title:'The Ink Black heart',
        price:970,
    },
    {
        id:15,
        img:'img/thenameofthewind.jpeg',
        title:'The name of the wind',
        price:750,
    },
    {
        id:16,
        img:'img/twilight.jpeg',
        title:'Twilight',
        price:200,
    },
];
const categories=[...new Set(product.map((item)=>
    {return item}))]

    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var{img,title,price}=item;
    return(
        `  <div class='box'>
        <div class='img-box'>
            <img class='images' src=${img}></img>
        </div>
    </div >
    <div class='bottom'>
    <p>${title}</p>
    <h2>Rs. ${price}.00</h2>`+
    "<button onclick ='addtocart("+(i++)+")'>Add to cart</button>"+
    `</div>
    </div>`

    )
}).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a)
{
    cart.splice(a,1);
    displaycart();
}

function displaycart(a){
    let j=0,total=0;
    document.getElementById('count').innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your cart is empty";
        document.getElementById("total").innerHTML="Rs."+0+".00";

    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var {img,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="Rs. "+total+".00";

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${img}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>`+
                "<i class='fa-solid  fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}