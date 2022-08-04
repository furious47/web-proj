const url = "https://restaurant-b-end.herokuapp.com/api/v1/foods"
const modalCont = document.querySelector('.modal-container')

const showFoods = async ()=>{
    try {
        const {data : {food}} = await axios.get(url)

        const bat = food.map((item)=>{
            const {_id} = item;
            return `<div><p>${_id}</p></div>`
            
        })
        modalCont.innerHTML += bat
    } catch (error) {
        console.log(error.response);
    }
}

showFoods()