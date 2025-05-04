import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SideNav() 
{
    const navigate = useNavigate();
  const userJson = localStorage.getItem("user");
  const {usertype} = JSON.parse(userJson);
  

  const options={
    ADMIN:[
      {label:"Add Employee",  to:'/dashboard/addemployee'},
      {label:"View Employee",  to:'/dashboard/viewemployee'}
    ],
    CRM:[
      {label:"Add Enquiry",  to:'/dashboard/addenquiry'},
      {label:"View Enquiry",  to:'/dashboard/viewenquiry'}
    ]
  }

  return (
    <div>
        <h2>SideNav</h2>

        {
          /*options[usertype].map((btn,index)=> <Link key={index} to={btn.to}>{btn.label}</Link>)*/
          options[usertype].map((btn, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <button onClick={() => navigate(btn.to)}>{btn.label}</button>
            </div>
          ))
        }
    </div>
  )
}

export default SideNav;