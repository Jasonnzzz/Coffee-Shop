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
    ShoppingCart.classList.toggle('active')
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
