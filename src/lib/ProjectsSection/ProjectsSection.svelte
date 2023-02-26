<script lang="ts">
  import ProjectItem from "./ProjectItem.svelte";

  import { projects } from "constants/projects";
</script>

<section id="projects" class="flex flex-col">
  <div class="grid grid-cols-1 gap-[30px] w-full my-[84px] mx-auto sm:my-[124px] sm:grid-cols-2">
    {#each projects as project}
      <ProjectItem {project} />
    {/each}
  </div>
</section>
