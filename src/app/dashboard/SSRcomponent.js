import teamleadIMG from '../../Image/Total_Leads.svg'
import AskDetIMG from '../../Image/Asked_for_Details.svg'
import AssoNotAssIMG from '../../Image/Associate_Not_Assigned.svg'
import ClosedLeadIMG from '../../Image/Closed_Leads.svg'
import FollUPIMG from '../../Image/Follow_Up.svg'
import NotInIMG from '../../Image/Not_Interested.svg'
import OpnLedIMG from '../../Image/Open_Leads.svg'
import PaymValIMG from '../../Image/Payment_Validation_Pending.svg'
import PendPayIMG from '../../Image/Pending_For_Payment.svg'
import UnResIMG from '../../Image/Unresponsive.svg'


export const AssociatePerHead=["Name","Team Leader","Department","Total Assigned Leads","Open Leads","Closed Leads","Unresponsive","Not Interested","Conversion Rate"]

export const ServicePerHead=["Country","Marketplace","Service","Total Leads","Open Leads","Closed Leads","Unresponsive","Not Interested"]



export const TotalHead=[
    {
        title:'Assigned Leads',
        total_no:'80',
        image:teamleadIMG,
    },
    {
        title:'Pitch In Progress',
        total_no:'80',
        image:OpnLedIMG,
    },
    {
        title:'Converted Leads',
        total_no:'80',
        image:ClosedLeadIMG,
    },
    {
        title:'Pending For Mou',
        total_no:'80',
        image:FollUPIMG,
    },
    {
        title:'Unresponsive',
        total_no:'80',
        image:UnResIMG,
    },
    {
        title:'Pending For Payment',
        total_no:'80',
        image:PendPayIMG,
    },
    {
        title:'Asked for Details',
        total_no:'80',
        image:AskDetIMG,
    },
    {
        title:'Payment Validation Pending',
        total_no:'80',
        image:PaymValIMG,
    },
    {
        title:'Associate Not Assigned',
        total_no:'80',
        image:AssoNotAssIMG,
    },
    {
        title:'Not Interested',
        total_no:'80',
        image:NotInIMG,
    },
]


export const updateTotalNoWithTitle = (title, newTotalNo) => {
  const updatedTotalHead = total_head.map(item => {
      if (item.title === title) {
          return {
              ...item,
              total_no: newTotalNo,
          };
      } else {
          return item;
      }
  });

  return updatedTotalHead;
};


export const TABLEHEAD = ["Name", "Conversion Rate", "Total Assigned Leads", "Open Leads","Closed Leads","Follow Up","Unresponsive","Not Interested"];
 
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