import { Route, Routes } from "react-router-dom";
import AddEmployee from "../Modules/ADMIN/AddEmployee";
import ViewEmployee from "../Modules/ADMIN/ViewEmployee";
import AddEnquiry from "../Modules/CRM/AddEnquiry";
import ViewEnquiry from "../Modules/CRM/ViewEnquiry";
import Profile from "./Profile";
import SideNav from "./SideNav";

function Dashboard() 
{
  
  const userJson = localStorage.getItem("user");
  const {usertype} = JSON.parse(userJson);

  console.log(usertype);

  const appRoute={
    ADMIN:[
      {path:'addemployee', component:<AddEmployee/>},
      {path:'viewemployee', component:<ViewEmployee/>}
    ],

    CRM:[
      {path:'addenquiry', component:<AddEnquiry/>},
      {path:'viewenquiry', component:<ViewEnquiry/>}
    ],
  }

  return (
    <div >
        {/* <h2>Dashboard</h2> */}

        <div style={{backgroundColor:"lightgrey"}}>
         <Profile/>
        </div>

        <div style={{display:"flex", height:"80vh"}}>
          <div style={{backgroundColor:'lightgreen', width:"30%", flexDirection:"column"}}>
            <SideNav/>
          </div>

      <div style={{backgroundColor:'lightblue', width:"70%"}}>
        <Routes>
          {
            appRoute[usertype].map((mapping,index)=><Route key={index} path={mapping.path} element={mapping.component}></Route>)
          }
        </Routes>
        </div>
        </div>
    </div>

  )
}

export default Dashboard;