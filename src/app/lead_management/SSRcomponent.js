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


export const edit_from_title=[
  {
    title:"All Identifiers",
  },
  {
    title:"Business Identifiers",
  },
  {
    title:"Comment",
  },
  {
    title:"Contact Preference",
  },
  {
    title:"Followup",
  },
  {
    title:"Seller Address",
  },
  {
    title:"Service",
  },
  {
    title:"Website Store",
  },

]


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
    title:"Country",
    name:"country"
  },
  {
    title:"Marketplace",
    name:"marketplace"
  },
  {
    title:"Service Category",
    name:"service_category"
  },
  {
    title:"Requester name",
    name:"requester_name"
  },
  {
    title:"Phone number",
    name:"phone_number"
  },
  {
    title:"Email id",
    name:"email_id"
  },

]



// util.js

export const convertToSlug = (inputString) => {
  // Convert to lowercase and replace spaces with underscores
  const slug = inputString.toLowerCase().replace(/\s+/g, '_');
  return slug;
};


export const removeUnderscores = (inputString) => {
  // Remove underscores from the input string
  const resultString = inputString.replace(/_/g, ' ');
  return resultString;
};