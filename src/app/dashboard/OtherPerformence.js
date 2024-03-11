import React from 'react'
import Index from '@/material_component/client_component';
import { total_head, TABLE_HEAD, TABLE_ROWS,updateTotalNoWithTitle } from './SSRcomponent';

export default function OtherPerformence({
    Head
}) {
  return (
    <table className="w-full min-w-max table-auto text-left">
    <thead>
      <tr>
        {Head.map((head,index) => (
          <th
            key={index}
            className="p-4"
          >
            <Index.Typography
              variant="small"
              color="blue-gray"
              className="font-bold leading-none"
            >
              {head}
            </Index.Typography>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {TABLE_ROWS.map(({ name, job, date },index) => {
        const isLast = Index === TABLE_ROWS.length - 1;
        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

        return (
          <tr key={index}>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {name}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {job}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
            <td className={classes}>
              <Index.Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {date}
              </Index.Typography>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
