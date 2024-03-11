import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD, TABLE_ROWS } from './SSRcomponent';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { removeUnderscores } from '../commen/commen_fun';
import Diloge from './diloge';
import DeleteBtn from './Delete_user';



export default function AllUserTable() {
  const[ TBLdata,setTBLdata ]=React.useState([]);
  const[ Load,setLoad ]=React.useState(true);
  const Search_data = useSelector((state) => state.SearchEmpReducer.data);
  const search_loading = useSelector((state) => state.SearchEmpReducer.loading);
  const table_coll = useSelector((state) => state.ViewAllEmpReducer.data);
  const loading = useSelector((state) => state.ViewAllEmpReducer.loading);
  const table_call=table_coll?table_coll.data:[];
  const table_data = Search_data ? Search_data : table_call;
   


  React.useEffect(()=>{
   setLoad(false)
   setTBLdata(table_data)
  },[table_data])
  
  return (
    <div className='bg-transparent'>
      <Index.Card className="h-full w-full overflow-scroll bg-transparent shadow-none scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-lg scrollbar-w-lg h-[55vh]">
        
        <table className="w-full min-w-max table-auto text-left bg-transparent">
          <thead>
            <tr className='border-b border-blue-gray-100'>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-transparent p-4"
                >
                  <Index.Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold leading-none opacity-70"
                  >
                    {head}
                  </Index.Typography>
                </th>
              ))}
            </tr>
          </thead>
            <tbody>
              {TBLdata.map(({ employee_id, name, designation, department, product ,email_id,employee_status }, index) => {
                const isLast = Index === TBLdata.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
          
                        {loading === "pending" || search_loading === "pending" || Load===true ? <Skeleton/>: employee_id}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
              
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: name}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: removeUnderscores(designation.designation)}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: removeUnderscores(department.department)}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} space-x-2`}>
                    {loading === "pending" || search_loading === "pending" ? <Skeleton/>:
                    <>
                    <Diloge btn={"table_edit"} Email_id={email_id} Employee_Status={employee_status} Emp_id={employee_id} Name={name} Department={department} Designation={designation} Product={product}  />
                    <DeleteBtn Emp_id={employee_id} user_name={name} />
                    </>
                   }
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
