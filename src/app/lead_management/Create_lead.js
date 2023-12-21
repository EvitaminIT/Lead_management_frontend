import React,{ useRef } from 'react'
import Index from '@/material_component/client_component'
import { useSelector, useDispatch } from "react-redux";
import { Upload_File_BL_api } from '../redux/Slice/Bussness_leads/upload_file_blreducer';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { viewall_Leads_api } from '../redux/Slice/Bussness_leads/view_all_LedSlice';

export default function Create_lead({
  Btn
}) {
 const datePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const token = useSelector((state) => state.myReducer.token);
  const loading = useSelector((state) => state.upload_file_bl_Reducer.loading);
  const dispatch = useDispatch();
  const handleOpenDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.click(); 
    }
  };
  
   
  const dispatch_file_for_create_lead=()=>{
    dispatch(Upload_File_BL_api({accessToken:token.access,fileup:{file:selectedFile}}))
    setSelectedFile(null)
    dispatch(viewall_Leads_api({accessToken:token.access,pages:1}))
  }



  const get_file =(e)=>{
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  }

  return (
    <>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover
    theme="light" 
    transition={Flip}
    />
    <div>
     <div className='py-32 pb-24 flex justify-center'>
      <div className='text-center'>
        <Index.Typography className='p-4'>Upload a file from your computer</Index.Typography>
      <div>
      <div className='flex items-center bg-[#F0F0F0] rounded-full w-fit'>
      <Index.Button className='rounded-full bg-[#E0E0E0] text-[#777777]' onClick={handleOpenDatePicker}>
        Choose File
      </Index.Button>
      <Index.Typography className='px-6'>{selectedFile ?  selectedFile.name : "No File Chosen" }</Index.Typography>
      </div>
      </div>
      <label className='hidden' htmlFor="upload-photo">Browse...</label>
      <input className='hidden' onChange={get_file} type="file" name="photo" id="upload-photo" ref={datePickerRef} />
      </div>
    </div>
    <div className='text-center'>
      <Index.Button onClick={Btn ==="Create Lead"? dispatch_file_for_create_lead:""} disabled={loading==="pending"?true:false} className='rounded-full bg-[#67B037]'>
      <div className={loading==="pending"? "px-4":""}>
      {loading==="pending"? <Index.Spinner className="h-4 w-4" color='white' /> : "Submit"}   
      </div> 
        </Index.Button>
    </div>
    </div>
    </>
  )
}
