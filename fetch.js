const url = "https://restaurant-b-end.herokuapp.com/api/v1/foods"
const modalCont = document.querySelector('.modal-container')
const card = document.querySelector('.card-container')
const btn = document.querySelectorAll('.btn')
const modal = document.querySelector('.modal')
const oppa = document.querySelector('.content')
const closer = document.querySelector('.closer')

let contain = modal.classList

const modalFunc = ()=>{


    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',()=>{
        
    
        
            contain.add('open-modal')
            oppa.classList.add('oppa')
        
        // modale.classList.add('open-modal')
        // console.log(hunt);
        let hunt = modal.classList
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

function gotha (){
    const prom = axios.get(url)
    const promis = prom.then((response)=>{
        console.log(response.data.food);
    

        return response.data
        
    })
    .catch(()=>{
        console.log(error.response)
    })
    return promis
}

const insert = (otha)=>{
    const bat = otha.map((item)=>{
                    const {_id,dishName,time,image} = item
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
                card.innerHTML += bat
        }


const funcy = async ()=>{
    try {
        const gomma = await gotha()
        console.log(gomma);
        insert(gomma.food)
        modalFunc()
    } catch (error) {
        console.log(error);
    }
    



}

funcy()



