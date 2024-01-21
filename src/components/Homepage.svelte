<script>
  import Preloader from "./Preloader.svelte";
  import Foodlist from "./Foodlist.svelte";
</script>

<Preloader />

<div class="container">
  <section id="hero">
    <div id="hero-background" class="home-anim">
      <nav id="hero-nav">
        <menu id="hero-nav-menu">
          <li>Menu</li>
          <li><a href="../reservation/index.html">Réservation</a></li>
          <li>Notre histoire</li>
        </menu>
      </nav>
      <div id="circle-sun" class="circle">
        <div id="circle-yellow" class="circle"></div>
      </div>
      <div id="circle-pink" class="circle"></div>
    </div>
    <div id="hero-text" class="home-anim">
      <h1>Sunset Restaurant</h1>
      <a id="go-to-content" onclick="scrollToContent()">
        <i class="ph ph-arrow-down"></i>
      </a>
    </div>
  </section>
  <section id="scroller">
    <div id="content-scroller-sticky">
      <div id="left-to-right">
        <div id="content-scroller-desc">
          <p>
            We’re home for creativity at the intersection between gastronomy and
            ecology. Bakery, café, eatery and creative space, Sunshine
            Restaurant offers a new take on simple food.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1554448326-fa887763def2?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img src="/src/img/inner-light.jpg" alt="" />

        <img src="/src/img/inner-shadow.jpg" alt="" />
        <img src="/src/img/outer.jpg" alt="" />
      </div>
    </div>
  </section>
  <Foodlist />
</div>
