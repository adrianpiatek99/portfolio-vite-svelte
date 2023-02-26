<script lang="ts">
  import type { ButtonTextAlign } from "./types";

  export let textAlign: ButtonTextAlign = "center";
  export let fullWidth = false;
</script>

<button
  class="relative flex items-center bg-primary {textAlign === 'center'
    ? 'justify-center'
    : 'justify-start'} {fullWidth
    ? 'w-fill'
    : 'w-max'} h-[36px] px-4 rounded-md font-medium select-none overflow-hidden duration-200 text-m will-change-transform hover:bg-primary/50 active:bg-primary/70 focus-visible:bg-primary/40 focus-visible:shadow-[inset_0px_0px_0px_2px_theme('colors.primary')]"
  on:click
>
  <span class="z-1"> <slot /></span>
</button>
