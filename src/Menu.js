import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5vh"
  }}>
        <b style={{marginTop:"3vw"}}>Hi, I’m Tomas Smitas{" "}
        <span style={{ fontSize: "1.5em" }}>👋</span>

        <br /><br />I'm passionate about software development and data science. 
        
        <br/><br/>Please select an option below: </b>

        <Link to="/Portfolio" className="menu-button">
        My Portfolio
        </Link>

        <Link to="/TeamPlayAnalysis" className="menu-button">
        Team Play Analysis
        </Link>
    </div>
  );
}

export default Menu;