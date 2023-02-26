<script lang="ts">
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
</script>

<button
  class="text-color1 font-bold text-2xl sm:text-3xl duration-200 sm:hover:text-primary focus-visible:text-primary"
  on:click={scrollToTop}
>
  <span>Portfolio</span>
</button>
