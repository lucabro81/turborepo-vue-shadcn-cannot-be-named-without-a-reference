<script setup lang="ts">
import { Primitive } from "radix-vue";
import { buttonVariants, type Props } from ".";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-vue-next";

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :disabled="disabled"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <span
      className="mr-2 w-4 h-4 icon"
      v-if="$slots.icon && size !== 'icon' && size !== 'iconSmall'"
    >
      <slot name="icon" />
    </span>
    <span :class="cn({ icon: size === 'icon' || size === 'iconSmall' })">
      <slot />
    </span>

    <span
      className="ml-2"
      v-if="loading && size !== 'icon' && size !== 'iconSmall'"
    >
      <LoaderCircle class="w-4 h-4 animate-spin" />
    </span>
  </Primitive>
</template>
<style lang="css">
.icon svg {
  @apply w-4 h-4;
}
</style>
