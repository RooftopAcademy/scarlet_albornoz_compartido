let products = [
    {
        id: 1,
        img: '10-pcs-aluminium-rings.jpg',
        product: '10 pcs aluminium binding rings',
        description: 'Check out this super resistent aluminium binding rings for your brand new agenda! This awesome kit comes with 10 binding rings for A5 sheets and you can choose any of our available colors.'
    },
    {
        id: 2,
        img: '50-pcs-glitter-rings.jpg',
        product: '50 pcs transparent glitter binding rings',
        description: `Check out this beautiful binding rings for your brand new agenda! This awesome kit comes with 50 binding super glittery rings and you can choose any of our available colors.`
    },
    {
        id: 3,
        img: 'executive-aluminium-rings-agenda.jpg',
        product: 'Executive agenda with aluminium rings',
        description: `Need to go Executive? Why not do so with class?? This elegant agenda is everything you'll need from now on. It also comes with our super resistent aluminium binding rings.`
    },
    {
        id: 4,
        img: 'mushroom-hole-puncher.jpg',
        product: 'Mushroom hole puncher',
        description: `A must have for those who love DIY's. With this practical mushroom hole puncher, you can begin making your very own hand made planners, notebooks, agendas and more! Don't forget to buy our binding rings so you can have the full package!`
    },
    {
        id: 5,
        img: 'mushroom-punch-hole-agendas.jpg',
        product: 'Primary color agendas',
        description: `Back to basics. This A5 primary color agendas are easy to use and you'll get obsessed with them. They are equipped with 10 binding rings, 4 dividers, a beautiful bookmark and an envelope for all those loose papers you have around. Keep everything organized!`
    },
    {
        id: 6,
        img: 'primary-colors-binding-rings-10mm-15mm-20mm-25mm.jpg',
        product: 'Primary colors binding rings',
        description: 'Looking to replace your binding rings? Or maybe you just began making your own agenda with our awesome mushroom hole puncher. This primary colors binding rings are just what you need. Each package includes 10 binding rings, and you can select from different sizes.'
    }
]

let productsHTML = ``

products.forEach(product => {
    productsHTML +=//html 
        `<div class="col-card" id="product-${product.id}">
        <div class="card">
            <img src="img/${product.img}" alt="product image" class="card-img"/>
            <div class="card-body">
                <h5 class="card-title">${product.product}</h5>
                <a href="product-detail.html" class="btn">Go to product detail</a>
            </div>
        </div>
    </div>`
});

let productList = document.querySelector('.products');

productList.innerHTML = productsHTML;