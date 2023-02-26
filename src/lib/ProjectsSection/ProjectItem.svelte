<script lang="ts">
  import IconButton from "atoms/IconButton/IconButton.svelte";
  import Typography from "atoms/Typography.svelte";

  import externalLinkBlackIcon from "assets/icons/externalLinkBlack.svg";
  import githubIcon from "assets/icons/github.svg";
  import pinIcon from "assets/icons/pin.svg";
  import type { Project } from "constants/projects";

  export let project: Project;
  const { url, githubUrl, title, description, image, techs, isPinned } = project;
</script>

<div class="group animate-hidden relative flex flex-col gap-[20px] pb-[10px]">
  {#if isPinned}
    <div
      class="absolute top-[-8px] left-[-8px] text-primary z-5 pointer-events-none w-[24px] h-[24px] rotate-[270deg]"
    >
      <img src={pinIcon} alt="GitHub Repository" />
    </div>
  {/if}
  <a class="group/imgLink relative w-full" href={url} target="_blank" rel="noopener noreferrer">
    <div
      class="relative max-w-full rounded-lg pb-[calc(100%+50px)] overflow-hidden duration-200 shadow-[0px_4px_7px_theme(colors.background2)] group-hover:opacity-50 group-focus-visible/imgLink:shadow-[0px_0px_0px_2px_theme(colors.primary)]"
    >
      <img
        class="absolute left-0 top-0 h-full w-full object-cover select-none duration-300 group-hover:scale-[1.015]"
        alt={title}
        src={image}
        loading="lazy"
        draggable="false"
      />
    </div>
    <button
      tabIndex={-1}
      aria-label="Visit project page"
      class="absolute top-[-12px] right-[-12px] grid place-items-center w-[30px] h-[30px] bg-[#fff] rounded-full z-2 text-background1 duration-200 shadow-[0px_1px_7px_theme(colors.background1)] opacity-0 pointer-events-none invisible translate-y-[10px] scale-[0.95] group-hover/imgLink:opacity-100 group-hover/imgLink:pointer-events-all group-hover/imgLink:transform-none group-hover/imgLink:visible group-focus-visible/imgLink:opacity-100 group-focus-visible/imgLink:pointer-events-all group-focus-visible/imgLink:transform-none group-focus-visible/imgLink:visible"
    >
      <img class="w-[20px] h-[20px]" src={externalLinkBlackIcon} alt="LinkedIn" />
    </button>
  </a>
  <div class="flex flex-col gap-[12px] whitespace-pre-line">
    {#if isPinned}
      <Typography class="text-primary text-l" weight="bold">Pinned</Typography>
    {/if}
    <Typography class="text-xl">{title}</Typography>
    <Typography class="text-color2">{description}</Typography>
    <div class="grid grid-cols-[1fr_auto] items-start gap-[12px] [&>a]:mt-[-5px]">
      <ul class="inline-flex flex-wrap align-center gap-[12px]">
        {#each techs as { tech, iconUrl }}
          <li
            class="flex gap-[6px] align-center min-w-0 bg-primary/50 py-[6px] px-[12px] rounded-[20px]"
          >
            <img class="w-[14px] h-[14px]" src={iconUrl} alt={tech} />
            <Typography class="text-xs truncate">{tech}</Typography>
          </li>
        {/each}
      </ul>
      {#if githubUrl}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
          <IconButton title="GitHub Repository" iconUrl={githubIcon} />
        </a>
      {/if}
    </div>
  </div>
</div>
