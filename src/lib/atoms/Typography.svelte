<script lang="ts">
  type TypographyTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "a";
  type TypographyWeight = "light" | "normal" | "medium" | "semibold" | "bold";

  export let tag: TypographyTag = "span";
  export let weight: TypographyWeight = "normal";
  export let center = false;
</script>

<svelte:element this={tag} class="font-{weight} text-{center ? 'center' : 'left'} {$$props.class}">
  <slot /></svelte:element
>
