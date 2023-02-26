<script lang="ts">
  export let id: string;
  export let headingText: string;
</script>

<section class="flex flex-col" {id}>
  <div class="flex flex-col gap-[40px] w-full my-[84px] mx-auto sm:my-[124px] lg:flex-row">
    <div class="animate-hidden flex flex-col w-full h-full lg:sticky lg:top-[70px]">
      <h2 class="flex font-semibold text-5xl sm:text-7xl">
        {headingText}
      </h2>
    </div>
    <div class="flex flex-col w-full gap-[30px] mt-[7px]">
      <slot />
    </div>
  </div>
</section>
