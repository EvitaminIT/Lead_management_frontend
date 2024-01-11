import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import Index from "@/material_component/client_component";
 

function Icon({ id, open }) {
  return (

    <Index.IconButton className={`${id === open ? "rotate-45" : ""} h-5 w-5 transition-transform bg-transparent shadow-none hover:shadow-none`} > <Index.AddCircleOutlineOutlinedIcon className={`text-black text-xl`} /> </Index.IconButton>
  );
}

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(false);
 
 
  return (
    <>
      <div className="flex">
      <Index.Input/>
      <Index.IconButton  onClick={() => setOpen((cur) => !cur)} className={`bg-transparent shadow-none hover:shadow-none ${open ? "rotate-45" : ""}`}> <Index.AddCircleOutlineOutlinedIcon className={`text-black `}/> </Index.IconButton>
      </div>
      <Index.Collapse open={open}>
        <Card className="my-4 mx-auto w-8/12">
          <CardBody>
            <Typography>
              Use our Tailwind CSS collapse for your website. You can use if for
              accordion, collapsible items and much more.
            </Typography>
          </CardBody>
        </Card>
      </Index.Collapse>
    </>
  );
}