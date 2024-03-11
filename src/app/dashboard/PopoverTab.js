import React from 'react'
import Index from '@/material_component/client_component';

const TABLE_HEAD = ["Employee I.D.", "Client Name",];
 
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];


export default function PopoverTab({
    Title,
    Img,
    TotalNo,
    user_roll,
}) {
    
  return (
    <div>
        <Index.Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Index.Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Index.Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Index.Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Index.Typography>
                </td>
                <td className={`${classes} bg-blue-gray-50/50`}>
                  <Index.Typography variant="small" color="blue-gray" className="font-normal">
                    {job}
                  </Index.Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Index.Card>
    </div>
  )
}
