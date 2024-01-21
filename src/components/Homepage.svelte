<script>
    import Preloader from "./Preloader.svelte";
</script>

<Preloader />

<div class="container">
      <section id="homepage">
        <div id="background" class="home-anim">
          <nav id="index-nav">
            <ul id="index-nav-menu">
              <li>Menu</li>
              <li><a href="./reservation/index.html">Réservation</a></li>
              <li>Notre histoire</li>
            </ul>
          </nav>
          <div id="circle-sun" class="circle">
            <div id="circle-yellow" class="circle"></div>
          </div>
          <div id="circle-pink" class="circle"></div>
        </div>
        <div id="index-bottom" class="home-anim">
          <h1>Sunset Restaurant</h1>
          <a id="go-to-content" onclick="scrollToContent()">
            <i class="ph ph-arrow-down"></i>
          </a>
        </div>
      </section>
      <section id="content">
        <div id="content-scroller-sticky">
          <div id="left-to-right">
            <div id="content-scroller-desc">
              <p>
                We’re home for creativity at the intersection between gastronomy
                and ecology. Bakery, café, eatery and creative space, Sunshine
                Restaurant offers a new take on simple food.
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1554448326-fa887763def2?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="/src/img/inner-light.jpg" alt="" />

            <img src="/src/img/inner-shadow.jpg" alt="" />
            <img src="/src/img/outer.jpg" alt="" />
          </div>
        </div>
      </section>
      <section id="restaurant-food-list">
        <ul id="menu-flexer">
          <li class="menu-items">
            <span class="menu-text">Tomato</span>
            <span class="menu-text">Salad</span>
          </li>
          <li class="menu-items">
            <span class="menu-text">Courgette</span>
            <span class="menu-text"> Flowers</span>
          </li>
          <li class="menu-items">
            <span class="menu-text">Maquereau</span>
            <span class="menu-text"> Corail</span>
          </li>
          <li class="menu-items">
            <span class="menu-text">Clementine</span>
            <span class="menu-text"> Sugar</span>
          </li>
          <li class="menu-items">
            <span class="menu-text">Citron</span>
            <span class="menu-text">Pie</span>
          </li>
          <li class="menu-items">
            <span class="menu-text">Passion</span>
            <span class="menu-text">Brownie</span>
          </li>
        </ul>
        <img id="food-img" src="" alt="" />
      </section>

    </div>
