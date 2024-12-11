import { LayoutDashboard } from "lucide-vue-next";
import { Button, type Props } from ".";

const sizes = [
  { value: "lg", label: "Large" },
  { value: "default", label: "Default" },
  { value: "sm", label: "Small" },
  { value: "xs", label: "Extra Small" },
  { value: "icon", label: "@" },
  { value: "iconSmall", label: "#" },
];

export function setTemplate(
  args: Props,
  { argTypes }: { argTypes: Record<string, unknown> }
) {
  return {
    props: Object.keys(argTypes),
    components: { Button },
    setup: () => ({
      args,
      sizes,
    }),
    template: `
      <div class="space-x-2">
        <Button v-for="size in sizes" v-bind="$args" :variant="args.variant" :size="size.value" :disabled="args.disabled" :loading="args.loading">{{size.label}}</Button>
      </div>
    `,
  };
}

export function setTemplateWithIcon(
  args: (typeof Button)["Props"],
  { argTypes }: { argTypes: Record<string, unknown> }
) {
  return {
    props: Object.keys(argTypes),
    components: { Button, LayoutDashboard },
    setup: () => ({
      args,
      sizes,
    }),
    template: `
      <div class="space-x-2">
        <Button v-for="size in sizes" v-bind="$args" :variant="args.variant" :size="size.value" :loading="args.loading" :disabled="args.disabled"><template #icon><LayoutDashboard /></template>{{size.label}}</Button>
      </div>
    `,
  };
}
