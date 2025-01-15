import { memo } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";


const Scrollbar = () => (
  <>
    <ScrollArea.Scrollbar
      className="z-20 flex touch-none select-none bg-gray-200 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
      orientation="vertical"
    >
      <ScrollArea.Thumb
        className="relative flex-1 rounded-[10px] bg-gray-900 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-1 before:min-w-1 before:-translate-x-1/2 before:-translate-y-1/2"/>
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      className="z-20 flex touch-none select-none bg-gray-200 transition-colors duration-[160ms] ease-out hover:bg-gray-200 data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1 data-[orientation=horizontal]:flex-col"
      orientation="horizontal"
    >
      <ScrollArea.Thumb
        className="relative flex-1 rounded-[10px] bg-gray-900 before:absolute before:left-1/2 before:top-1/2 before:size-full before:min-h-[44px] before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2"/>
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner className="bg-gray-200"/>
  </>
);

export default memo(Scrollbar);