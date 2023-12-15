import Create_lead from "./Create_lead";
import Add_lead_manuall from "./Add_lead_manuall";

export const TABLE_HEAD = ["Lead I.D.", "Requester Name", "Service Category", "Assigned Status","Assigned To","Status","Upload Date","Deadline","Action"];
 
export const TABLE_ROWS = [
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




export const data = [
  {
    label: "Create Lead",
    value: "Create_Lead",
    desc: <Create_lead Btn={"Create Lead"}/>,
  },
  {
    label: "Create Lead Manually",
    value: "Create_Lead_Manually",
    desc: <Add_lead_manuall/>,
  },
];

export const Add_lead_manuinput=[
  {
    title:"Lead id",
    name:"Lead_id"
  },
  {
    title:"Requester name",
    name:"Requester_name"
  },
  {
    title:"Phone number",
    name:"Phone_number"
  },
  {
    title:"Phone number alternate",
    name:"Phone_number_alternate"
  },
  {
    title:"Email id",
    name:"Email_id"
  },
  {
    title:"Poc name",
    name:"Poc_name"
  },
]