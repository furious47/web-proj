const url = "https://restaurant-b-end.herokuapp.com/api/v1/foods"
const modalCont = document.querySelector('.modal-container')
const card = document.querySelector('.card-container')


const showFoods = async ()=>{
    try {
        const {data : {food}} = await axios.get(url)

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
            console.log(image);
        }).join("")
        card.innerHTML += bat
    } catch (error) {
        console.log(error.response);
    }
}

showFoods()