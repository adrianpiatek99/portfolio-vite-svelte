<script lang="ts">
  import { onMount } from "svelte";

  import HeaderMobileMenu from "./HeaderMobileMenu.svelte";
  import ButtonScrollTo from "atoms/Button/ButtonScrollTo.svelte";
  import IconButton from "atoms/IconButton/IconButton.svelte";
  import Logo from "lib/Logo.svelte";

  import hamburgerIcon from "assets/icons/hamburger.svg";

  let isPinned = false;
  let isMenuOpen = false;
  let headerElement: HTMLHeadElement;

  const closeMenu = () => (isMenuOpen = false);

  onMount(() => {
    const observerFnc = () => {
      const observer = new IntersectionObserver(
        ([entries]) => {
          isPinned = entries.intersectionRatio < 1;
        },
        { threshold: [1] }
      );

      observer.observe(headerElement);

      return () => observer.unobserve(headerElement);
    };

    observerFnc();

    window.addEventListener("scroll", observerFnc);
    window.addEventListener("resize", observerFnc);

    return () => {
      window.removeEventListener("scroll", observerFnc);
      window.removeEventListener("resize", observerFnc);
    };
  });
</script>

<div class="h-[50px] duration-200 {isPinned && 'bg-background2/75 backdrop-blur-md '}" />
<header
  class="sticky top-[-1px] right-0 left-0 w-full z-50 duration-200 after:content-[''] after:absolute after:left-[50%] after:bottom-0 after:w-full after:translate-x-[-50%] after:h-px after:bg-border1 after:duration-200 after:z-[-1] {isPinned
    ? 'bg-background2/75 backdrop-blur-md after:scale-x-100'
    : 'after:scale-x-0'}"
  bind:this={headerElement}
>
  <nav
    class="flex align-center gap-[16px] flex-wrap max-w-[1240px] w-full mx-auto px-[30px] py-[12px]"
  >
    <div class="flex grow">
      <Logo />
    </div>
    <div class="hidden sm:flex sm:align-center sm:gap-[4px] sm:mx-auto">
      <ButtonScrollTo elementId="about-me">About me</ButtonScrollTo>
      <ButtonScrollTo elementId="skills">Skills</ButtonScrollTo>
      <ButtonScrollTo elementId="projects">Projects</ButtonScrollTo>
      <ButtonScrollTo elementId="contact">Contact</ButtonScrollTo>
    </div>
    <div class="flex sm:hidden">
      <IconButton
        title="Menu"
        on:click={() => (isMenuOpen = !isMenuOpen)}
        iconUrl={hamburgerIcon}
      />
    </div>
  </nav>
</header>
{#if isMenuOpen}
  <HeaderMobileMenu onClose={closeMenu} {isPinned} />
{/if}
