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
]
const categories=[...new Set(product.map((item)=>
    {return item}))]
document.getElementById('searchBar').addEventListener('keyup',(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return(
            item.title.toLocaleLowerCase().includes (searchData)
        )
    })
    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{img,title,price}=item;
        return(
            `<div class='box'>
                 <div class='img-box'>
                    <img class='images' src=${img}></img>
                </div>
            
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>Rs. ${price}.00</h2>
                    <button onclick="window.location.href = 'addtocart.html';">Add to cart</button>
                </div>
            </div>`
    
        )
    }).join('')
    
};
displayItem(categories) ;