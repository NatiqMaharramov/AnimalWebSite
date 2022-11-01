let basketList = document.querySelector(".basket_list");
let baskett = document.querySelector(".baskett");
let gridContainer2 = document.querySelector(".grid_container2");
let count = document.querySelector(".count");
let countin = 0;
count.innerHTML = countin;



let products = [
  {
    id: 1,
    price: 42,
    img: "./images/closeup-shot-ginger-cat-wicker-basket-isolated-white-wall 1.png",
    name: "Pişik evi",
  },
  {
    id: 2,
    price: 60,
    img: "./images/street-fashioned-brown-white-dog-cool-black-hoodie-trucker-cap-with-mesh-back-rustic-wooden-table 1.png",
    name: "İt üçün köynək",
  },
  {
    id: 3,
    price: 35,
    img: "./images/pets-food-wooden-floor 1.png",
    name: "Yemək qabları",
  },
  {
    id: 4,
    price: 22,
    img: "./images/image 1.png",
    name: "Müxtəlif tasmalar",
  },
];

let products1 = [
  {
    id: 5,
    price: 43,
    img: "./images/Me-O Cat Food - Pets - Package Inspiration 1.png",
    name: "Pişiklər üçün quru və nəm lasos",
    filter: "satılan",
  },
  {
    id: 6,
    price: 9.9,
    img: "./images/Natures Nuts 00029 8 Lbs Premium Safflower Seed (Pack of 4) 1.png",
    name: "Quşlar üçün çərəz",
    filter: "yeni",
  },
  {
    id: 7,
    price: 19,
    img: "./images/image 5.png",
    name: "Balıqlar üçün quru toyuq",
    filter: "secilen",
  },
  {
    id: 8,
    price: 33,
    img: "./images/Dog Friendly Kennebunk, Maine - Daily Dog Tag 1.png",
    name: " İtlər üçün sümüklər",
    filter: "yeni",
  },
  {
    id: 9,
    price: 40,
    img: "./images/JINX_ Premium Dog Food Made for Modern Dogs 1.png",
    name: "İtlər üçün quru yemək və ət",
    filter: "secilen",
  },
  {
    id: 10,
    price: 13.9,
    img: "./images/Wagg Sets Tails Going With a Rebrand by Robot Food 1.png",
    name: "Pişiklər üçün çubuq",
    filter: "yeni",
  },
  {
    id: 11,
    price: 10,
    img: "./images/Kasper Faunafood Caviakorrel - Caviavoer - 4 kg 1.png",
    name: "Dovşanlar üçün dəri ət",
    filter: "satılan",
  },
  {
    id: 12,
    price: 25,
    img: "./images/image 4.png",
    name: "Balıqlar üçün quru çörək",
    filter: "satılan",
  },
];
let sebet = [];

products.forEach((data) => {
  gridContainer2.innerHTML += `
    <div class="grid_card2">

  <div class="grid_card_content">

  <img src="${data.img}" alt="">
    <button onclick="button(event,${data.id})"> Indi al <img src="images/vectorlar.png" alt=""></button>
    <i class="fa-regular fa-heart heart"></i>
    
  </div>

  <p>${data.name}: <b>${data.price}₼</b></p>
  </div>`;
});

let totaPrice = document.querySelector(".total_price");

let trendContainer = document.querySelector(".trend_container");
products1.forEach((data) => {
  trendContainer.innerHTML += `
  
  <div class="trend_card" data-name="${data.filter}">
  <img
    src="${data.img}"
  />

  <p>${data.name}</p>
  <span>${data.price} ₼</span>

  <div class="trend_end">
    <button onclick="button1(event,${data.id})">
      Indi al <img src="images/vectorlar.png" alt="" />
    </button>

    <h6>
      <i class="fa-regular fa-heart"></i>
    </h6>
  </div>
</div>

  `;
});

function showBasket(sebet) {
  // let arr = [];
  let arr2 = [];

  basketList.innerHTML = "";
  sebet.forEach((data) => {
    basketList.innerHTML += `
 <div class="basket_card">
<img src="${data.img}" alt="">
 <p>${data.name} -count(${data.count} )-price(${data.price * data.count} )  </p>

 <div class="btn_content">
   <button name="azalt" onclick="azCox(event,${data.id})">-</button>
   <button name="artir" onclick="azCox(event,${data.id})">+</button>
   <svg class="delete" onclick="deleteAll(event,${
     data.id
   })"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
   </div>
   
</div>
`;

    localStorage.setItem("set", JSON.stringify(sebet));

    // arr.push(data.count);
    arr2.push(data.count * data.price);
  });

  // let cem = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   cem += arr[i];
  // }
  count.innerHTML = sebet.length;

  let cem2 = 0;
  for (let i = 0; i < arr2.length; i++) {
    cem2 += arr2[i];
  }
  totaPrice.innerHTML = `${cem2}₼`;
}

function button(e, id) {
  let checkCard = sebet.find((data) => data.id === +id);
  if (checkCard) {
    checkCard.count += 1;
  } else {
    let pr = products.find((data) => data.id === +id);
    pr.count = 1;
    sebet.push(pr);
  }
  showBasket(sebet);
}
function button1(e, id) {
  let checkCard = sebet.find((data) => data.id === +id);
  if (checkCard) {
    checkCard.count += 1;
  } else {
    let pr1 = products1.find((data) => data.id === +id);
    pr1.count = 1;
    sebet.push(pr1);
  }
  showBasket(sebet);
}

function azCox(e, id) {
  let checkCard = sebet.find((data) => data.id === +id);

  if (e.target.name === "artir") {
    checkCard.count += 1;
  } else {
    checkCard.count -= 1;
  }

  if (checkCard.count === 0) {
    let delet = sebet.findIndex((data) => data.id === +id);
    sebet.splice(delet, 1);
  }

  showBasket(sebet);
}

function deleteAll(e, id) {
  let deleteAll = sebet.findIndex((data) => data.id === +id);
  sebet.splice(deleteAll, 1);
  showBasket(sebet);
}

if (localStorage.getItem("set")) {
  sebet = JSON.parse(localStorage.getItem("set"));
}
window.addEventListener("load", () => {
  showBasket(sebet);
});





let item = document.querySelectorAll(".item");
let trendCard = document.querySelectorAll(".trend_card");
let gridContianer3Buttons = document.querySelector(".grid_contianer3_buttons");

let basketContainer = document.querySelector(".basket_container");
for (let i = 0; i < item.length; i++) {

  // item[i].addEventListener('click',()=>{

  //   for(let y=0;y<item.length;y++){

  //     item[y].classList.remove('active')

  //   }

  //   item[i].classList.add('active')


  // })

  //or

  item[i].addEventListener("click", () => {
    gridContianer3Buttons.querySelector(".active").classList.remove("active");
    item[i].classList.add("active");
    let filterName = item[i].getAttribute("data-name");


    

    for (let i = 0; i < trendCard.length; i++) {
      let filterImage = trendCard[i].getAttribute("data-name");

      if (filterName === filterImage || filterName === "All") {
        trendCard[i].classList.add("show");
        trendCard[i].classList.remove("hide");
      } else {
        trendCard[i].classList.add("hide");
      }
    }
  });
}

const x = document.querySelector("body");
let y = 0;
baskett.addEventListener("click", () => {
  // y++
  basketContainer.classList.toggle("toggle"); 
  // if(y == 1){
  //   x.style.overflow = 'hidden'
  // }else if(y == 2){
  //   x.style.overflow = 'auto'
  // y = 0
  // }
});










//event gondermeden click elediyimiz meslen i indexe click eden zaman nie islemir?

let fa_toggle = document.querySelectorAll(".fa-chevron-down");



let check = 0;
for (let i = 0; i < fa_toggle.length; i++) {
  fa_toggle[i].addEventListener("click", () => {
    check++;

    if(check%2==0){
      fa_toggle[i].style.transform = "rotate(360deg)";
      fa_toggle[i].style.transition = "1s";
    }else{
      fa_toggle[i].style.transform = "rotate(180deg)";
      fa_toggle[i].style.transition = "1s";
    }

  });
}




// for(let i=0;i<fa_toggle.length;i++){
//   let toggleclick=0
//   fa_toggle[i].addEventListener('click',(event)=>{
//   toggleclick++;
//   if(toggleclick%2==0){
//     event.target.style.transform ='rotate(360deg)';
//     event.target.style.transition ='1s';
//   }else{
//     console.log(event.target);

//     event.target.style.transform ='rotate(180deg)';
//     event.target.style.transition ='1s';

//   }
//   })

// }

let leftBtn = document.querySelector('.left')
let rightBtn = document.querySelector('.right')
let grid_container1 = document.querySelector('.grid_container1')
let grid_card = document.querySelectorAll('.grid_card')
let m = 0;
let mesafeL = Math.floor((830 - grid_container1.clientWidth) / 100)
let mesafeR = Math.floor((830 - grid_container1.clientWidth) / 100)
let sayL = 0;
let sayR = 0;
function changeSlider(type) {

  if (type == 'left') {
    if (sayL < mesafeL) {
      sayL++;
    }
    m -= 50;
    mesafeL += sayR;
    mesafeL--;
    if (mesafeL > 0) {
      for (let i = 0; i < grid_card.length; i++) {
        grid_card[i].style.transform = `translateX(${m}px)`
      }
      if (sayR > 0) {
        sayR--;
      }
    }
  } else if (type == 'right') {
    if (sayR < mesafeR) {
      sayR++;
    }
    m += 50;
    mesafeR += sayL;
    mesafeR--;
    if (mesafeR > 0) {
      for (let i = 0; i < grid_card.length; i++) {
        grid_card[i].style.transform = `translateX(${m}px)`
      }
      if (sayL > 0) {
        sayL--;
      }

    }
  }


}