const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick =()=>{
    navbarNav.classList.toggle('active');
};

const ShoppingCart = document.querySelector('.shopping-cart');
const menu = document.querySelector('#menu');
const sb = document.querySelector('#search');
const sc = document.querySelector('#shopping-cart-button')
document.addEventListener('click',function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchform.contains(e.target)){
        searchform.classList.remove('active');
    }

    if(!sc.contains(e.target) && !ShoppingCart.contains(e.target)){
        ShoppingCart.classList.remove('active');
    }
});

const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box')
document.querySelector('#search').onclick =(e)=>{
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventDefault();
};
document.querySelector('#shopping-cart-button').onclick=()=>{
    ShoppingCart.classList.toggle('active');
    e.preventDefault();
}

const itemdetail = document.querySelector('#item-detail-modal');
const itemdetailbutton = document.querySelectorAll('.item-detail-button');

itemdetailbutton.forEach((btn) => {
    btn.onclick =(e) => {
        itemdetail.style.display = 'flex';
        e.preventDefault();
    };
})

document.querySelector('.modal .close').onclick = (e) => {
    itemdetail.style.display = 'none';
    e.preventDefault();
}

const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
        { id: 1, name: 'Robusta Brazil', img: '1.jpg', price: 20000 },
        { id: 2, name: 'Arabica Blend', img: '1.jpg', price: 25000 },
        { id: 3, name: 'Primo Passo', img: '1.jpg', price: 30000 },
        { id: 4, name: 'Cappuchino', img: '1.jpg', price: 40000 },
        { id: 5, name: 'Chocolatte', img: '1.jpg', price: 10000 },
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            const cartItem = this.items.find((item) => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, quantity: 1, total: newItem.price });
                this.quantity++;
                this.total += newItem.price;

            } else {
                this.items = this.items.map((item) => {
                    if(item.id !== newItem.id) {
                        return item;
                    } else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                })            
            }
        },
        remove(id) {
            const cartItem = this.items.find((item) => item.id === id);
            if(cartItem.quantity > 1) {
                this.items = this.items.map((item) => {
                    if(item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity
                        this.quantity--;
                        this.total -= item.price;
                        return item
                    }
                })
            } else if (cartItem.quantity === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price
            }
        }
    })
});

// mata uang

const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
}).format(number);

};
