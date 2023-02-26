<script lang="ts">
  import { fly } from "svelte/transition";

  import ButtonScrollTo from "atoms/Button/ButtonScrollTo.svelte";
  import IconButton from "atoms/IconButton/IconButton.svelte";

  import closeIcon from "assets/icons/close.svg";
  import { trapFocus } from "trap-focus-svelte";

  export let isPinned: boolean;
  export let onClose: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed inset-0 z-50" on:click={onClose} use:trapFocus>
  <div
    class="fixed {isPinned
      ? 'top-[10px]'
      : 'top-[60px]'} right-[17px] left-[17px] flex sm:hidden flex-col gap-[2px] p-[12px] rounded-md bg-background2 border border-border1 z-100 shadow-[0px_4px_7px_theme('colors.background1')] ease-out duration-100"
    transition:fly={{ y: 30, duration: 200 }}
    on:click|stopPropagation
  >
    <div class="flex align-center justify-end">
      <IconButton title="Close" on:click={onClose} iconUrl={closeIcon} />
    </div>
    <ul class="flex flex-col w-full gap-[2px]">
      <li class="w-full [&>button]:w-full">
        <ButtonScrollTo onClick={onClose} elementId="about-me" textAlign="left"
          >About me</ButtonScrollTo
        >
      </li>
      <li class="w-full [&>button]:w-full">
        <ButtonScrollTo onClick={onClose} elementId="skills" textAlign="left">
          Skills
        </ButtonScrollTo>
      </li>
      <li class="w-full [&>button]:w-full">
        <ButtonScrollTo onClick={onClose} elementId="projects" textAlign="left">
          Projects
        </ButtonScrollTo>
      </li>
      <li class="w-full [&>button]:w-full">
        <ButtonScrollTo onClick={onClose} elementId="contact" textAlign="left">
          Contact
        </ButtonScrollTo>
      </li>
    </ul>
  </div>
</div>
