<script lang="ts">
  import Section from "./Section.svelte";

  import { skills } from "constants/skills";
</script>

<Section id="skills" headingText="Skills">
  <div class="flex flex-col gap-[40px] w-full">
    <div class="flex flex-col gap-[30px]">
      <h3 class="animate-hidden text-xl font-semibold">Experienced with</h3>
      <div
        class="grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-2"
      >
        {#each skills.experiencedWith as { src, website, text }}
          <div class="animate-hidden flex flex-col gap-[10px]">
            <a
              class="group flex items-center gap-[8px]"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="block object-cover" width={22} height={22} {src} alt={text} />
              <span
                class="text-color2 group-hover:text-color1 group-focus-visible:text-color1 duration-200"
              >
                {text}
              </span>
            </a>
          </div>
        {/each}
      </div>
    </div>
    <div class="flex flex-col gap-[30px]">
      <h3 class="animate-hidden text-xl font-semibold">Want to learn</h3>
      <div class="grid grid-cols-2 w-full gap-[30px] sm:grid-cols-3 lg:grid-cols-2">
        {#each skills.wantToLearn as { src, website, text }}
          <a
            class="animate-hidden group flex items-center gap-[8px]"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="block w-[22px] h=[22px] object-cover" {src} alt={text} />
            <span
              class="text-color2 group-hover:text-color1 group-focus-visible:text-color1 duration-200"
            >
              {text}
            </span>
          </a>
        {/each}
      </div>
    </div>
  </div>
</Section>
