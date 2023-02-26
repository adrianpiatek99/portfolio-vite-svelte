<script lang="ts">
  import { Tooltip } from "flowbite-svelte";

  export let tooltip: string;
</script>

<Tooltip placement="bottom" class="bg-gray/30 py-[6px] px-[8px] rounded-md text-xs" arrow={false}>
  {tooltip}
</Tooltip>
