<script>
  import gsap from "gsap";

  let counter = 0;

  const counterTo100 = async () => {
    return new Promise((resolve) => {
      const recursiveUpdate = () => {
        // Increment the counter
        counter += Math.floor(Math.random() * 10) + 1;
        counter = Math.min(counter, 100); // Ensure counter does not exceed 100
        console.log(counter);

        if (counter >= 100) {
          console.log("Counter reached 100");
          resolve(); // Resolve the promise when counter reaches 100
        } else {
          // Continue with the next iteration
          let delay = Math.floor(Math.random() * 200) + 50;
          setTimeout(recursiveUpdate, delay);
        }
      };

      // Start the recursive update
      recursiveUpdate();
    });
  };
  const preloaderAway = async () => {
    console.log("put the preloader away");
      await gsap.to(".loader", {
        y: "100dvh",
        duration: 0.8,
        ease: "power4.in",
        display: "none",
      });
  };

  const preloadAndRevealHomepage = async () => {
    await counterTo100();

    await preloaderAway();

    document.body.style.overflow = "unset";
    document.body.style.overflowX = "hidden";

    let homeElementsToAnim = document.querySelectorAll(".home-anim");

    homeElementsToAnim.forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: "-15dvh", opacity: 0, duration: 0.3, ease: "power4.out" },
        { y: "0dvh", opacity: 1, delay: index * 0.3 }
      );
    });

    gsap.fromTo('#hero-nav-menu',{ opacity: 0, duration: 0.7, ease: "power4.out"}, { opacity: 1, delay: .3})

    console.log("Animation complete");
  };

  preloadAndRevealHomepage();
</script>

<h1 class="counter loader">{counter}</h1>
<div class="overlay loader"></div>
