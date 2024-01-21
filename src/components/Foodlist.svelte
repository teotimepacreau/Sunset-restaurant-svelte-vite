<script>
    let displayImg = (e)=>{
        let aliment = e.target.firstElementChild.textContent

        const imgPath = `/src/img/${aliment}.webp`;
            const img = document.querySelector('#food-img')

            img.src = imgPath
            img.alt = `Picture of a plate containing ${aliment}`
    }
</script>

<section id="restaurant-food-list">
    <ul id="menu-flexer">
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Tomato</span>
        <span class="menu-text">Salad</span>
      </li>
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Courgette</span>
        <span class="menu-text"> Flowers</span>
      </li>
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Maquereau</span>
        <span class="menu-text"> Corail</span>
      </li>
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Clementine</span>
        <span class="menu-text"> Sugar</span>
      </li>
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Citron</span>
        <span class="menu-text">Pie</span>
      </li>
      <li on:mouseenter={displayImg} class="menu-items">
        <span class="menu-text">Passion</span>
        <span class="menu-text">Brownie</span>
      </li>
    </ul>
    <img id="food-img" src="" alt="" />
  </section>