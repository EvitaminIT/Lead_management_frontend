"use client"
import { HashLoader } from "react-spinners"

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-[80vh]">
        <HashLoader
        color="#2F3642"
        size={200}
       />
    </div>
  )
}
