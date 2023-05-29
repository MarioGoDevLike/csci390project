const Data = [{
    id:1,
    imgSrc:"assets/images/img.jpg",
    desTitle:'Bora Bora',
    location:'New Zealand',
    grade:"CULTURAL RELAX",
    fees:'1700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxuious stays and adventurous activities.'
},
{
    id:2,
    imgSrc:"assets/images/img2.jpg",
    desTitle:'Machu Picchu',
    location:'Peru',
    grade:"CULTURAL RELAX",
    fees:'1600',
    description:'Huyana Picchu is a mountain in Peru, rising over Machu Picchu, the so called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
},
{
    id:3,
    imgSrc:"assets/images/img3.jpg",
    desTitle:'Great Barrier Reef',
    location:'Australia',
    grade:"CULTURAL RELAX",
    fees:'1700',
    description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place.'
},
{
    id:4,
    imgSrc:"assets/images/img4.jpg",
    desTitle:'Cappadocia',
    location:'Turkey',
    grade:"CULTURAL RELAX",
    fees:'1800',
    description:'According to the World Tourism Ranking, 45 Millions people visit Turkey each year, and from that about 2 Millions visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
},
{
    id:5,
    imgSrc:"assets/images/img5.jpg",
    desTitle:'Guanajuato',
    location:'Mexico',
    grade:"CULTURAL RELAX",
    fees:'1100',
    description:'A city in central Mexico, Guanajuato is known for its history silver mining and colonial archtecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
},
{
    id:6,
    imgSrc:"assets/images/img6.jpg",
    desTitle:'Cinque Terre',
    location:'Italy',
    grade:"CULTURAL RELAX",
    fees:'2840',
    description:'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and you love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food.'
},
{
    id:7,
    imgSrc:"assets/images/img7.jpg",
    desTitle:'Angkor wat',
    location:'Cambodia',
    grade:"CULTURAL RELAX",
    fees:'3790',
    description:'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
},
{
    id:8,
    imgSrc:"assets/images/img8.jpg",
    desTitle:'Taj Mahal',
    location:'India',
    grade:"CULTURAL RELAX",
    fees:'1900',
    description:'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
},
{
    id:9,
    imgSrc:"assets/images/img9.jpg",
    desTitle:'Bali Island',
    location:'Indonesia',
    grade:"CULTURAL RELAX",
    fees:'4500',
    description:'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known fir uts volcantic mountains, history, art, culture, food, temples and beautiful sandy beaches.'
  }
]

// Burger Menu
const showNavbar = () => {
    const burgerMenu = document.querySelector('.navBar-contain');
    burgerMenu.classList.add('navLinks');
  };
  const hideNavbar = () => {
    const burgerMenu = document.querySelector('.navBar-contain');
    burgerMenu.classList.remove('navLinks');
  };
  

// price Change
const storeInputValue = () => {
    const rangeInput = document.querySelector('.priceData');
    const value = rangeInput.value;
    
    const labelValue = document.querySelector('.priceLabel');
    labelValue.innerHTML = "Price: " + `${value}`;
  };


// Map over array to display the destinations 
const container = document.querySelector('.singleDestination');

const html = Data.map((destination) => `
  <div class="place-container">
    <div class="place">
      <div class="imgDiv">
        <img src="${destination.imgSrc}" alt="">
      </div>
      <div class="cardInfo">
        <div class="cardInfo-div">
          <h4 class="desTitle">${destination.desTitle}</h4>
          <i class="bi bi-geo-alt">
            <span class="continent">${destination.location}</span>
          </i>
        </div>
        <div class="fees">
          <div class="grade">
            <span>${destination.grade}<small>+1</small></span>
          </div>
          <div class="price"><h5>${destination.fees}$</h5></div>
        </div>
        <div class="desc">
          <p>${destination.description}</p>
        </div>
        <button class="btn">
          DETAILS
          <i class="bi bi-file-plus-fill"></i>
        </button>
      </div>
    </div>
  </div>
`).join('');
container.innerHTML = html;

// Filter the location on button press


const filterDestinations = () => { 
  const rangeInput = document.querySelector('.priceData');
  const value = rangeInput.value;
  
  const filteredData = Data.filter(item =>
    (item.fees <= value));
    const container = document.querySelector('.singleDestination');

    const html = filteredData.map((destination) => `
  <div class="place-container">
    <div class="place">
      <div class="imgDiv">
        <img src="${destination.imgSrc}" alt="">
      </div>
      <div class="cardInfo">
        <div class="cardInfo-div">
          <h4 class="desTitle">${destination.desTitle}</h4>
          <i class="bi bi-geo-alt">
            <span class="continent">${destination.location}</span>
          </i>
        </div>
        <div class="fees">
          <div class="grade">
            <span>${destination.grade}<small>+1</small></span>
          </div>
          <div class="price"><h5>${destination.fees}$</h5></div>
        </div>
        <div class="desc">
          <p>${destination.description}</p>
        </div>
        <button class="btn">
          DETAILS
          <i class="bi bi-file-plus-fill"></i>
        </button>
      </div>
    </div>
  </div>
`).join('');
container.innerHTML = html;

console.log(filteredData);
}
