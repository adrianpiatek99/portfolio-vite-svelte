<script lang="ts">
  import type { ButtonTextAlign } from "./types";

  export let elementId: string;
  export let textAlign: ButtonTextAlign = "center";
  export let onClick: () => void = () => null;

  const handleClick = () => {
    const element = document.getElementById(elementId);

    if (element) element.scrollIntoView({ behavior: "smooth" });

    onClick();
  };
</script>

<button
  class="relative flex items-center w-max {textAlign === 'center'
    ? 'justify-center'
    : 'justify-start'} h-[36px] px-4 rounded-md
font-medium select-none overflow-hidden duration-200 text-m will-change-transform hover:bg-primary/50 active:bg-primary/70 focus-visible:bg-primary/40 focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.primary')]"
  on:click|preventDefault={handleClick}
>
  <span class="z-1"> <slot /></span>
</button>
