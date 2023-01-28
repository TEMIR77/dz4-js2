let menu = document.querySelector('#menu')
let row = document.querySelector('.row')

const getProducts = (category) => {



    fetch(`https://api.escuelajs.co/api/v1/products/${category === 'all' ? '' : 'category/' + category}`)
        .then((res) => res.json())
        .then((res) => res.forEach((item) => {
            row.innerHTML +=
                `   
    <div class='card'>
    <img src='${item.images}' alt=''/>
    <h2 class='card__title'>${item.title}</h2>
    <p class='card__price'>${item.price}</p>
    <p class='card__desc'>${item.description}</p>
    </div>
    `
        }))

}
getProducts('all')




const getCategory = () => {


    fetch(`https://api.escuelajs.co/api/v1/categories`)
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                menu.innerHTML +=
                    `<li class='menu-items'>${item.name}</li>`
            })
        })

        let menuItems = document.querySelectorAll('.menu')

        console.log(menuItems);

}
getCategory()




