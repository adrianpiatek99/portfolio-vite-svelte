<script lang="ts">
  import Section from "./Section.svelte";
  import Button from "atoms/Button/Button.svelte";
  import Typography from "atoms/Typography.svelte";
  import CopyClipboard from "utils/copyClipboard.svelte";

  import emailIcon from "assets/icons/email.svg";
  import externalLink from "assets/icons/externalLink.svg";
  import githubIcon from "assets/icons/github.svg";
  import linkedinIcon from "assets/icons/linkedin.svg";
  import { EMAIL_ADDRESS, LINKEDIN_URL } from "constants/links";

  const copy = (value: string) => {
    const app = new CopyClipboard({
      target: document.getElementById("clipboard")!,
      props: { value }
    });

    app.$destroy();
  };
</script>

<Section id="contact" headingText="Contact">
  <div class="flex flex-col w-full gap-[60px] mt-[7px]">
    <div class="animate-hidden flex gap-[30px] sm:gap-[40px]">
      <img class="h-[35px] w-[35px]" src={emailIcon} alt="Email" />
      <div class="flex flex-col gap-[20px]">
        <Typography class="text-xl sm:text-2xl" weight="medium">Email address</Typography>
        <Typography class="text-m sm:text-l text-color2" color="secondary">
          {EMAIL_ADDRESS}
        </Typography>
        <Button on:click={() => copy(EMAIL_ADDRESS)}>Copy to clipboard</Button>
      </div>
    </div>
    <div class="animate-hidden flex gap-[30px] sm:gap-[40px]">
      <img class="h-[35px] w-[35px]" src={linkedinIcon} alt="LinkedIn" />
      <div class="flex flex-col gap-[20px]">
        <Typography class="text-xl sm:text-2xl" weight="medium">LinkedIn</Typography>
        <a
          class="relative flex align-center text-primary font-semibold text-l duration-200 hover:opacity-70 active:brightness-125 focus-visible:shadow-[0px_1px_0px_theme('colors.current')] sm:text-xl"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="self-center w-[20px] h-[20px] mr-[10px]">
            <img src={externalLink} alt="LinkedIn" />
          </div>
          Visit page
        </a>
      </div>
    </div>
    <div class="animate-hidden flex gap-[30px] sm:gap-[40px]">
      <img class="h-[35px] w-[35px]" src={githubIcon} alt="GitHub" />
      <div class="flex flex-col gap-[20px]">
        <Typography class="text-xl sm:text-2xl" weight="medium">GitHub</Typography>
        <a
          class="relative flex align-center text-primary font-semibold text-l duration-200 hover:opacity-70 active:brightness-125 focus-visible:shadow-[0px_1px_0px_theme('colors.current')] sm:text-xl"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="self-center w-[20px] h-[20px] mr-[10px]">
            <img src={externalLink} alt="GitHub" />
          </div>
          Visit page
        </a>
      </div>
    </div>
  </div>
</Section>
<div id="clipboard" />
