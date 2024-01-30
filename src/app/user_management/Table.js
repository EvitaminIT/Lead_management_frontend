import React from 'react'
import Index from '@/material_component/client_component'
import { TABLE_HEAD, TABLE_ROWS } from './SSRcomponent';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { removeUnderscores } from '../commen/commen_fun';
import Diloge from './diloge';
import DeleteBtn from './Delete_user';
import { MoonLoader } from 'react-spinners';


export default function Table() {
  const dispatch = useDispatch()
  const[ TBLdata,setTBLdata ]=React.useState([])
  const token = useSelector((state) => state.myReducer.token);
  const Search_data = useSelector((state) => state.Search_EmpReducer.data);
  const search_loading = useSelector((state) => state.Search_EmpReducer.loading);
  const table_coll = useSelector((state) => state.View_all_Emp_Reducer.data);
  const loading = useSelector((state) => state.View_all_Emp_Reducer.loading);
  const table_call=table_coll?table_coll.data:[]
  const table_data = Search_data ? Search_data : table_call;
  React.useEffect(()=>{
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
          {/* {loading === "pending" || search_loading === "pending" ? "" : */}
            <tbody>
              {TBLdata.map(({ employee_id, name, user_role, designation, department, product }, index) => {
                const isLast = Index === TBLdata.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                return (
                  <tr>
                    <td className={classes}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {/* {employee_id} */}
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: employee_id}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {/* {name} */}
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: name}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {/* {removeUnderscores(user_role)} */}
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: removeUnderscores(user_role)}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {/* {removeUnderscores(designation)} */}
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: removeUnderscores(designation)}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} capitalize`}>
                      <Index.Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {/* {removeUnderscores(department)} */}
                        {loading === "pending" || search_loading === "pending" ? <Skeleton/>: removeUnderscores(department)}
                      </Index.Typography>
                    </td>
                    <td className={`${classes} space-x-2`}>
                    {loading === "pending" || search_loading === "pending" ? <Skeleton/>:
                    <>
                    <Diloge btn={"table_edit"} />
                    <DeleteBtn Emp_id={employee_id} user_name={name} />
                    </>
                   }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          {/* } */}
        </table>
        {/* {loading === "pending" || search_loading === "pending" ?
          <div className='h-full flex justify-center items-center'>
            <MoonLoader color="#2F3642" />
          </div>
          : ""} */}
      </Index.Card>
    </div>
  )
}
