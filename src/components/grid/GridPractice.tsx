import React from "react";

const GridExample = ({
  title,
  containerClass,
  children,
}: {
  title: string;
  containerClass: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div
      className={`grid gap-4 p-4 border border-gray-300 rounded-lg ${containerClass}`}
    >
      {children}
    </div>
  </div>
);

const GridItem = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-primary text-primary-foreground p-4 rounded-md flex items-center justify-center font-bold ${className}`}
  >
    {children}
  </div>
);

export default function GridPractice() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">15 Grid Layout Examples</h1>

      <GridExample title="1. Basic 3x3 Grid" containerClass="grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>

      <GridExample
        title="2. Responsive Grid"
        containerClass="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {[...Array(8)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>

      <GridExample
        title="3. Grid with Different Column Sizes"
        containerClass="grid-cols-4"
      >
        <GridItem className="col-span-2">1 (Span 2)</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
        <GridItem className="col-span-3">5 (Span 3)</GridItem>
        <GridItem>6</GridItem>
      </GridExample>

      <GridExample
        title="4. Grid with Auto-fit and Minmax"
        containerClass="grid-cols-[repeat(auto-fit,minmax(100px,1fr))]"
      >
        {[...Array(8)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>

      <GridExample
        title="5. Grid with Template Areas"
        containerClass="grid-cols-[1fr_2fr_1fr] grid-rows-[auto_1fr_auto] h-[300px]"
      >
        <GridItem className="col-span-3">Header</GridItem>
        <GridItem>Sidebar</GridItem>
        <GridItem>Main Content</GridItem>
        <GridItem>Right Panel</GridItem>
        <GridItem className="col-span-3">Footer</GridItem>
      </GridExample>

      <GridExample
        title="6. Asymmetrical Grid"
        containerClass="grid-cols-[2fr_1fr_1fr]"
      >
        {[...Array(6)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>

      <GridExample
        title="7. Grid with Gap Variation"
        containerClass="grid-cols-3 gap-x-8 gap-y-4"
      >
        {[...Array(9)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>

      <GridExample
        title="8. Grid with Auto-flow Dense"
        containerClass="grid-cols-4 auto-rows-[100px] grid-flow-dense"
      >
        <GridItem className="col-span-2 row-span-2">1 (2x2)</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem className="col-span-2">4 (2x1)</GridItem>
        <GridItem>5</GridItem>
        <GridItem>6</GridItem>
        <GridItem className="row-span-2">7 (1x2)</GridItem>
        <GridItem>8</GridItem>
      </GridExample>

      <GridExample
        title="9. Masonry-like Grid"
        containerClass="grid-cols-[repeat(auto-fill,minmax(150px,1fr))]"
      >
        {[...Array(10)].map((_, i) => (
          <GridItem
            key={i}
            className={`h-[${Math.floor(Math.random() * 3 + 1) * 100}px]`}
          >
            Item {i + 1}
          </GridItem>
        ))}
      </GridExample>

      <GridExample
        title="10. Grid with Named Lines"
        containerClass="grid-cols-[[start]1fr[content-start]2fr[content-end]1fr[end]] grid-rows-[auto_1fr_auto]"
      >
        <GridItem className="col-[start/end]">Header</GridItem>
        <GridItem className="col-[start/content-start]">Left Sidebar</GridItem>
        <GridItem className="col-[content-start/content-end]">
          Main Content
        </GridItem>
        <GridItem className="col-[content-end/end]">Right Sidebar</GridItem>
        <GridItem className="col-[start/end]">Footer</GridItem>
      </GridExample>

      <GridExample title="11. Nested Grid" containerClass="grid-cols-2 gap-8">
        <GridItem className="!p-0">
          <div className="grid grid-cols-2 gap-2 p-4">
            <GridItem>Nested 1</GridItem>
            <GridItem>Nested 2</GridItem>
            <GridItem>Nested 3</GridItem>
            <GridItem>Nested 4</GridItem>
          </div>
        </GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
      </GridExample>

      <GridExample
        title="12. Grid with Auto Placement"
        containerClass="grid-cols-4 auto-rows-[100px]"
      >
        <GridItem className="col-start-2 col-span-2">1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem className="col-start-3">4</GridItem>
        <GridItem>5</GridItem>
      </GridExample>

      <GridExample
        title="13. Responsive Grid with Different Layouts"
        containerClass="grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
      >
        <GridItem className="md:col-span-3 lg:col-span-2">1</GridItem>
        <GridItem className="md:col-span-2 lg:col-span-1">2</GridItem>
        <GridItem className="md:col-span-1 lg:col-span-1">3</GridItem>
        <GridItem className="md:col-span-3 lg:col-span-4">4</GridItem>
      </GridExample>

      <GridExample
        title="14. Grid with Overlapping Items"
        containerClass="grid-cols-3 grid-rows-3 h-[300px]"
      >
        <GridItem className="col-span-2 row-span-2 z-10">1</GridItem>
        <GridItem className="col-start-2 col-span-2 row-start-2 row-span-2">
          2
        </GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
      </GridExample>

      <GridExample
        title="15. Grid with Auto-fill and Fixed Column Width"
        containerClass="grid-cols-[repeat(auto-fill,minmax(100px,1fr))]"
      >
        {[...Array(12)].map((_, i) => (
          <GridItem key={i}>Item {i + 1}</GridItem>
        ))}
      </GridExample>
    </div>
  );
}
