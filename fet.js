const url = "https://restaurant-b-end.herokuapp.com/api/v1/foods"
const modalCont = document.querySelector('.modal-container')
const card = document.querySelector('.card-container')
const bton = document.querySelectorAll('.btn')
const modale = document.querySelector('.modal')
const oppa = document.querySelector('.content')
const closer = document.querySelector('.closer')

let contain = modale.classList

const modalFunc = ()=>{

for (let i = 0; i < bton.length; i++) {
    bton[i].addEventListener('click',()=>{
    

    
        contain.add('open-modal')
        oppa.classList.add('oppa')
    
    // modale.classList.add('open-modal')
    // console.log(hunt);
    let hunt = modale.classList
    console.log(hunt);
    })
}

closer.addEventListener('click',()=>{
    let bun = closer.classList
    console.log(bun);
    contain.remove('open-modal')
    oppa.classList.remove('oppa')
})
}


    const reg = axios.get(url)
    const gomma = ()=>{
    return reg
    .then((response)=>{
        const {data :{food}} = response
        
        
        


    })
    .catch((error)=>{
        console.log(error);
    })
}




const bat = food.map((item)=>{
    const {_id,dishName,time,image} = item;
    return `
<div class="card">
    <div class="upper">
        <img src="./img/${image}" alt="">
        <div class="label">
            <span class="tex f">
                ${dishName}
            </span>
            <span class="s tex">
                By tsukiyama kei
            </span>
        </div>
        <div class="timer">
            <span>${time} mins</span>                            
        </div>
    </div>
<div class="overlay">
    <button class="btn">Add to Cart</button>
</div>
</div>`
}).join("")



card.innerHTML += bat;

modalFunc()
