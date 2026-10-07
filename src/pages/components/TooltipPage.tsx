import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip";
import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";

const usageCode = `import { Tooltip } from "@/components/Tooltip";

<Tooltip content="A little extra context" position="top" color="violet">
  <button type="button">Hover or focus me</button>
</Tooltip>`;

const propsData = [
  {
    prop: "content",
    type: "string",
    default: "-",
    description: "The message shown inside the tooltip.",
  },
  {
    prop: "position",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "Where the tooltip appears relative to its trigger.",
  },
  {
    prop: "color",
    type: '"violet" | "emerald" | "rose" | "amber" | "cyan"',
    default: '"violet"',
    description: "The tooltip color theme.",
  },
  {
    prop: "children",
    type: "ReactNode",
    default: "-",
    description: "The trigger element that reveals the tooltip.",
  },
];

const TooltipPage = () => (
  <div className="mx-auto max-w-4xl space-y-12 p-6">
    <header className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
      <p className="text-lg text-gray-600">
        Brief context, right where you need it.
      </p>
    </header>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Usage</h2>
      <ComponentDemo code={usageCode}>
        <div className="flex flex-wrap items-center justify-center gap-8 py-2">
          <Tooltip content="A little extra context" position="top" color="violet">
            <Button
              type="button"
              animation="none"
              hoverAnimation="none"
              className="bg-gradient-to-r from-fuchsia-600 via-rose-500 to-amber-400 text-white shadow-md hover:brightness-110"
            >
              Color pop
            </Button>
          </Tooltip>
          <Tooltip content="Saved to your workspace" position="bottom" color="emerald">
            <Button type="button" variant="ok" animation="none" hoverAnimation="none">
              Saved
            </Button>
          </Tooltip>
          <Tooltip content="This action cannot be undone" position="left" color="rose">
            <Button type="button" variant="destructive" animation="none" hoverAnimation="none">
              Delete
            </Button>
          </Tooltip>
          <Tooltip content="More information" position="right" color="cyan">
            <Button type="button" variant="secondary" animation="none" hoverAnimation="none">
              Details
            </Button>
          </Tooltip>
        </div>
      </ComponentDemo>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">API Reference</h2>
      <PropsTable data={propsData} />
    </section>
  </div>
);

export default TooltipPage;