import React from "react";
import Index from "@/material_component/client_component";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function Edit_User() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <div className="px-6" > 
      <Index.Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <Index.AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</Index.AccordionHeader>
        <Index.AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </Index.AccordionBody>
      </Index.Accordion>
      <Index.Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <Index.AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </Index.AccordionHeader>
        <Index.AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </Index.AccordionBody>
      </Index.Accordion>
      <Index.Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <Index.AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </Index.AccordionHeader>
        <Index.AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </Index.AccordionBody>
      </Index.Accordion>
      </div>
    </>
  );
}