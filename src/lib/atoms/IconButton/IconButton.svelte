<script lang="ts">
  import Tooltip from "atoms/Tooltip.svelte";

  type IconButtonSize = "medium" | "large";

  export let title: string;
  export let iconUrl: string;
  export let size: IconButtonSize = "medium";

  let isLarge = size === "large";
</script>

<button
  class="iconButton relative flex justify-center align-center {isLarge
    ? 'p-[8px] w-[48px] h-[48px]'
    : 'p-[7px] w-[36px] h-[36px]'} text-color1 rounded-full overflow-hidden duration-200 hover:bg-primary/50 active:bg-primary/70 focus-visible:bg-primary/40 focus-visible:shadow-[0px_0px_0px_2px_theme('colors.primary')]"
  data-tooltip={title}
  type="button"
  aria-label={title}
  on:click
>
  <img draggable="false" src={iconUrl} alt={title} />
</button>
<Tooltip tooltip={title} />
