const btn = document.querySelectorAll('.btn')
const modal = document.querySelector('.modal')
const oppa = document.querySelector('.content')
const closer = document.querySelector('.closer')

let contain = modal.classList

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',()=>{
    
        contain.add('open-modal')
        oppa.classList.add('oppa')
    
    // modal.classList.add('open-modal')
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
