<script>
  import Section from "./Section.svelte";
  import IconButton from "atoms/IconButton/IconButton.svelte";
  import Typography from "atoms/Typography.svelte";

  import githubIcon from "assets/icons/github.svg";
  import { GITHUB_URL } from "constants/links";
</script>

<Section id="about-me" headingText="Adrian Piątek">
  <div class="animate-hidden flex flex-col w-full gap-[30px]">
    <Typography tag="p" class="text-primary text-xl sm:text-2xl" weight="semibold"
      >Junior React Developer</Typography
    >
    <Typography tag="p" class="text-color2 text-l sm:text-xl whitespace-pre-line"
      >{"Hello and welcome to my portfolio!\n Passionate about web development and a bit of design. My journey with web dev development started at the turn of 2020 and 2021."}</Typography
    >
    <div class="flex gap-[12px]">
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        <IconButton title="GitHub" size="large">
          <img draggable="false" src={githubIcon} alt="GitHub" />
        </IconButton>
      </a>
    </div>
  </div>
</Section>
