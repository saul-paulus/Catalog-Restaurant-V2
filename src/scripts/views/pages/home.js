const { createHeader } = require('../template-creator');

const Home = {
  async render() {
    return `
    <!-- membuat header -->
    <header class="header">
        <div class="containt-header" id="containt-header">
        </div>
    </header>
    <!-- AKhir membuat header -->
      <main class="main-content">
        <div class="main-title">
          <h1>Explore Our Best Restaurant</h1>
          <span></span>
        </div>
        <div class="containt-card">
          <div class="main-card">
            <div class="container-img">
              <img src="./img/hero-header.jpg">
              <div class="tombol-detail">
                 <a class="text-detail" href="#" target="_blank">Details</a>
              </div>
            </div>
            <h1>Area of ambon</h1>
            <p class="ranting"><span class="fa fa-star checked"></span> rating</p>
            <p class="description">lorem5</p>
          </div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    const containHeader = document.querySelector('#containt-header');
    containHeader.innerHTML = createHeader();
  },
};

export default Home;
