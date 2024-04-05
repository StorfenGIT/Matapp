import { Link } from "react-router-dom";

function NavCategory() {
  return (
    <nav className="topnav">
    <ul>
      <Link to={"/"}>
     <h4 className="landing">Home</h4> 
     </Link>
      
</ul>
</nav>
   
  )
}

export default NavCategory;