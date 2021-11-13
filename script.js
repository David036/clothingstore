let womanSection = document.querySelector('.woman')

let woman1 = {
    image: "./Images/2016-Spring-new-thin-coat-jacket-Women-coat-Blazer-the-spot-Black-Blue-spring-coat-female.webp",
    name: " Women's JIL SANDER + Navy Pure New Wool Peak Lapel Casual Blazer Jacket Size 38",
    price: "90",
    btn: 'Add to Cart',
}
let woman2 = {
    image: "./Images/12196196_brown_0.jpg",
    name: "Women's Vintage MCM SPORTS LEGERE Brown Varnished Coat Jacket Size ~ 2XL",
    price: "120",
    btn: 'Add to Cart',
}
let woman3 = {
    image: "./Images/whistles-trench-coat-1620638868.jpeg",
    name: "Women's Vintage BURBERRYS Navy Cotton Belted Long Casual Trench Coat Size 8",
    price: "180",
    btn: 'Add to Cart',
}
let woman4 = {
    image: "./Images/41oCtxp1FQL._AC_SX466_.jpg",
    name: "Women's Vintage BURBERRYS London Navy Cotton Belted Trench Coa Size 14 Long",
    price: "150",
    btn: 'Add to Cart',
}
let womens = [woman1,woman2,woman3,woman4]
let cartWomanSrc = ''
let l = 0
for (let i = 0; i < womens.length; i++) {
    let womanBlock = document.createElement('div')
    womanSection.append(womanBlock)
    womanBlock.classList.add('woman-block')
    let womanBlockImg = document.createElement('img')
    womanBlock.append(womanBlockImg)
    womanBlockImg.classList.add('woman-img')
    womanBlockImg.setAttribute('src',`${womens[i].image}`)
    let womanBlockTitle = document.createElement('h3')
    womanBlock.append(womanBlockTitle)
    womanBlockTitle.classList.add('woman-title')
    womanBlockTitle.innerHTML = womens[i].name
    let womanBlockPrice = document.createElement('p')
    womanBlock.append(womanBlockPrice)
    womanBlockPrice.innerHTML =  ` $ ${womens[i].price} `
    womanBlockPrice.classList.add('woman-title')
    let womanBlockBtn = document.createElement('button')
    womanBlock.append(womanBlockBtn)
    womanBlockBtn.classList.add('btn')
    womanBlockBtn.innerHTML = womens[i].btn
    womanBlockBtn.addEventListener('click',()=> {
        bigModal.style.display = 'flex'
        cartWomanSrc = womens[i].image
        
        bigModal.addEventListener('click',(ev) => {
            ev.stopImmediatePropagation()
            if (ev.target == bigModal && ev.target != smallModal) {
                bigModal.style.display = 'none'
            }    
        })
    })
}
let bigCartBlock = document.createElement('div')
document.body.append(bigCartBlock)
bigCartBlock.classList.add('big-cart-block')
let cartBlock = document.createElement('div')
cartBlock.classList.add('cart-block')
bigCartBlock.append(cartBlock)


let bigModal = document.createElement('div')
        bigModal.classList.add('big-modal')
        document.body.append(bigModal)
        let smallModal = document.createElement('div')
        bigModal.append(smallModal)
        smallModal.classList.add('small-modal')
        let btnXs = {
            size: "XS",
        }
        let btnS = {
            size: "S",
        }
        let btnM = {
            size: "M",
        }
        let btnL = {
            size: "L",
        }
        let btnXl = {
            size: "XL",
        }
        let btnXxl = {
            size: "XXL",
        }
        let btnSize = [btnXs,btnS,btnM,btnL,btnXl,btnXxl]

        for (let k = 0; k < btnSize.length; k++) {
            let btn2 = document.createElement('button')
            smallModal.append(btn2)
            btn2.classList.add('size-btn')
            btn2.innerHTML = btnSize[k].size
            btn2.addEventListener('click',()=> {
                bigModal.style.display = 'none'
               let cart = document.querySelector('.cart')
               cart.style.display = 'flex'
               let cartPrice = document.querySelector('.cart-price')
            
            l++
            cartPrice.innerHTML = l
            let cartWomanBlock = document.createElement('div')
            cartWomanBlock.classList.add('cart-woman-block')
            cartBlock.append(cartWomanBlock)
                let cartWoman = document.createElement('img')
                cartWoman.classList.add('cart-woman')
                cartWomanBlock.append(cartWoman)
                cartWoman.setAttribute('src',`${cartWomanSrc}`)
                let cartWomanRemove = document.createElement('button')
                cartWomanRemove.classList.add('btn')
                cartWomanRemove.innerHTML = 'Remove'
                cartWomanBlock.append(cartWomanRemove)
                cartWomanRemove.addEventListener('click',()=> {
                    cartWomanBlock.remove()
                    
                    l--
                    cartPrice.innerHTML = l
                })

                cart.addEventListener('click',()=> {
                   bigCartBlock.style.display = 'block'  


                   bigCartBlock.addEventListener('click',(ev) => {
                    ev.stopImmediatePropagation()
                    if (ev.target == bigCartBlock && ev.target != cartBlock) {
                        bigCartBlock.style.display = 'none'
                    }    
                })
                  
                
                })
            })
        }


