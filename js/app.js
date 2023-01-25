

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns1 = document.getElementsByClassName("dropdown-content1");
      var j;
      for (j = 0; j < dropdowns1.length; j++) {
        var openDropdown1 = dropdowns1[j];
        if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }
      }
    }
  }


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
         
        }
      }
    }
  }




/*Slider */ 




  const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const productContainers2 = [...document.querySelectorAll('.product-container2')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

productContainers2.forEach((item, i) => {
    let containerDimensions2 = item.getBoundingClientRect();
    let containerWidth = containerDimensions2.width;

    nxtBtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})



const productContainers3 = [...document.querySelectorAll('.product-container3')];
const nxtBtn3 = [...document.querySelectorAll('.nxt-btn3')];
const preBtn3 = [...document.querySelectorAll('.pre-btn3')];

productContainers3.forEach((item, i) => {
    let containerDimensions3 = item.getBoundingClientRect();
    let containerWidth = containerDimensions3.width;

    nxtBtn3[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn3[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;

        
    })
    
})


/*Slider-ADP*/ 


const productContainers5 = [...document.querySelectorAll('.product-container5')];
const nxtBtn5 = [...document.querySelectorAll('.nxt-btn5')];
const preBtn5 = [...document.querySelectorAll('.pre-btn5')];

productContainers5.forEach((item, i) => {
    let containerDimensions5 = item.getBoundingClientRect();
    let containerWidth5 = containerDimensions5.width;

    nxtBtn5[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth5;
    })

    preBtn5[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth5;
    })
})








let modal=document.getElementById('myModal');
let btns=document.getElementById('myBtn');

let span=document.getElementsByClassName('close')[0];
let spanBtn=document.getElementsByClassName('span-button')[0];

btns.onclick = function(){
  modal.style.display="block";
}

span.onclick = function(){
  modal.style.display="none";
}

spanBtn.onclick = function(){
  modal.style.display="none";
}


/*2*/ 
let modal2=document.getElementById('myModal2');
let btns2=document.getElementById('myBtn2');

let span2=document.getElementsByClassName('close2')[0];
let spanBtn2=document.getElementsByClassName('span-button2')[0];

btns2.onclick = function(){
  modal2.style.display="block";
}

span2.onclick = function(){
  modal2.style.display="none";
}

spanBtn2.onclick = function(){
  modal2.style.display="none";
}

/*3*/ 
let modal3=document.getElementById('myModal2');
let btns3=document.getElementById('myBtn3');

let span3=document.getElementsByClassName('close2')[0];
let spanBtn3=document.getElementsByClassName('span-button2')[0];

btns3.onclick = function(){
  modal3.style.display="block";
}

span3.onclick = function(){
  modal3.style.display="none";
}

spanBtn3.onclick = function(){
  modal3.style.display="none";
}
/*4*/ 
let modal4=document.getElementById('myModal2');
let btns4=document.getElementById('myBtn4');

let span4=document.getElementsByClassName('close2')[0];
let spanBtn4=document.getElementsByClassName('span-button2')[0];

btns4.onclick = function(){
  modal4.style.display="block";
}

span4.onclick = function(){
  modal4.style.display="none";
}

spanBtn4.onclick = function(){
  modal4.style.display="none";
}
/*5*/ 
let modal5=document.getElementById('myModal2');
let btns5=document.getElementById('myBtn5');

let span5=document.getElementsByClassName('close2')[0];
let spanBtn5=document.getElementsByClassName('span-button2')[0];

btns5.onclick = function(){
  modal5.style.display="block";
}

span5.onclick = function(){
  modal5.style.display="none";
}

spanBtn5.onclick = function(){
  modal5.style.display="none";
}
/*6*/ 
let modal6=document.getElementById('myModal2');
let btns6=document.getElementById('myBtn6');

let span6=document.getElementsByClassName('close2')[0];
let spanBtn6=document.getElementsByClassName('span-button2')[0];

btns6.onclick = function(){
  modal6.style.display="block";
}

span6.onclick = function(){
  modal6.style.display="none";
}

spanBtn6.onclick = function(){
  modal6.style.display="none";
}
/*7*/ 
let modal7=document.getElementById('myModal2');
let btns7=document.getElementById('myBtn7');

let span7=document.getElementsByClassName('close2')[0];
let spanBtn7=document.getElementsByClassName('span-button2')[0];

btns7.onclick = function(){
  modal7.style.display="block";
}

span7.onclick = function(){
  modal7.style.display="none";
}

spanBtn7.onclick = function(){
  modal7.style.display="none";
}


/*NAV-ADP*/
let modal9=document.getElementById('myModal4');
let btns9=document.getElementById('myBtn10');
let img = document.createElement("IMG");
img.src = "../img/burger.jpg";

document.querySelector('.nav-btn').addEventListener('click',function(e){
  e.preventDefault();
  
  if(this.classList.contains('is-active')){
    this.classList.remove('is-active');
    modal9.style.display="none";
    btns9.textContent = "☰";
    
  }else{
    this.classList.add('is-active');
    modal9.style.display="block";
    btns9.textContent = "x";
  }
})
console.log(img);




/*memu-adp-list*/

document.addEventListener('DOMContentLoaded', () => {
	

	const menuBtns = document.querySelectorAll('.menu__btn');
	const drops = document.querySelectorAll('.dropdown-adp');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.dropdown-adp');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('menu__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('menu__btn--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('menu__btn--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});




/*SLIDER_SHOP*/ 


const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { 
	
	direction: 'vertical', 
	slidesPerView: 3, 
	spaceBetween: 24, 
	navigation: { 
		nextEl: '.slider__next', 
		prevEl: '.slider__prev' 
	},
	freeMode: true, 
	breakpoints: { 
		0: { 
			direction: 'horizontal', 
		},
		220: { 
			direction: 'vertical', 
		}
	}
});

const sliderImages = new Swiper('.slider__images .swiper-container', { 

	direction: 'vertical', 
	slidesPerView: 1, 
	spaceBetween: 32, 
	mousewheel: true, 
	navigation: {
		nextEl: '.slider__next', 
		prevEl: '.slider__prev' 
	},
	grabCursor: true, 
	thumbs: { 
		swiper: sliderThumbs 
	},
	breakpoints: { 
		0: { 
			direction: 'horizontal',
		},
		220: { 
			direction: 'vertical', 
		}
	}
});



/*counter*/ 

// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

  // Объявляем переменную для счетчика
  let counter;

  // Проверяем клик строго по кнопкам Плюс либо Минус
  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
  // Находим обертку счетчика
  const counterWrapper = event.target.closest('.counter-wrapper');
  // Находим див с числом счетчика
      counter = counterWrapper.querySelector('[data-counter]');
}

// Проверяем является ли элемент по которому был совершен клик кнопкой Плюс
if (event.target.dataset.action === 'plus') {
  counter.innerText = ++counter.innerText;
}

// Проверяем является ли элемент по которому был совершен клик кнопкой Минус
if (event.target.dataset.action === 'minus') {

  // Проверяем чтобы счетчик был больше 1
  if (parseInt(counter.innerText) > 1) {
    // Изменяем текст в счетчике уменьшая его на 1
    counter.innerText = --counter.innerText;
  } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
    // Проверка на товар который находится в корзине
    console.log('IN CART!!!!');
    // Удаляем товар из корзины
    event.target.closest('.cart-item').remove();

    // Отображение статуса корзины Пустая / Полная
    toggleCartStatus();

    // Пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }

}

// Проверяем клик на + или - внутри коризины
if (event.target.hasAttribute('data-action')) {
  // Пересчет общей стоимости товаров в корзине
  calcPrice();
}
});














/*SHOP*/


let modal8=document.getElementById('myModal3');
let btns8=document.getElementById('myBtn8');

let btns11=document.getElementById('myBtn11');

let span8=document.getElementsByClassName('close3')[0];
let spanBtn8=document.getElementsByClassName('span-button3')[0];

btns8.onclick = function(){
  modal8.style.display="block";
}

btns11.onclick = function(){
  modal8.style.display="block";
}

span8.onclick = function(){
  modal8.style.display="none";
}

spanBtn8.onclick = function(){
  modal8.style.display="none";
}

let shop1=document.getElementById('shop-c1');
let shop2=document.getElementById('shop-c2');
let shop3=document.getElementById('shop-c3');
let shop4=document.getElementById('shop-c4');
let shopClose1=document.getElementsByClassName('shop-close1')[0];
let shopClose2=document.getElementsByClassName('shop-close2')[0];
let shopClose3=document.getElementsByClassName('shop-close3')[0];
let shopClose4=document.getElementsByClassName('shop-close4')[0];

shopClose1.onclick = function(){
  shop1.style.display="none";
}

shopClose2.onclick = function(){
  shop2.style.display="none";
}

shopClose3.onclick = function(){
  shop3.style.display="none";
}

shopClose4.onclick = function(){
  shop4.style.display="none";
}



/*SEARCH*/ 

const button = document.querySelector('#btn');
const button2 = document.querySelector('#btn2');

const text = document.querySelector('.text');
const list = document.querySelector('.search-content2');


button.addEventListener("click",function(){


 if (text.classList.toggle('hidden')){
    
 } else{
    
 }

})

button2.addEventListener("click",function(){


  if (list.classList.toggle('hidden3')){
     
  } else{
     
  }
 
 })



/*SHOP-LIST */

 function calcPrice(){
  const cartItem = document.querySelectorAll('.shop-content');
  const totalPrice = document.querySelector('.price-subtotal');

let subTotal =0;


  cartItem.forEach( function (item){


    const amongL = item.querySelector('[data-counter]');
   
    const currentPrice = parseInt(amongL.innerText) * 487;
    subTotal += currentPrice;
    
  })

  totalPrice.innerText=subTotal;

  
 }










 /*ANIMATION */

AOS.init(
  {
  once:true
}
)
;


