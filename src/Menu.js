import './Menu.css';
import { Link } from 'react-router-dom';
import TomasCV from "./docs/CVTomasSmitasAug26.pdf";

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

        <a
          href={TomasCV}
          download
          className="menu-button"
        >
          Download My CV (PDF)
        </a>

        <Link to="/Portfolio" className="menu-button">
        Portfolio Website
        </Link>

        <Link to="/TeamPlayAnalysis" className="menu-button">
        Team Play Analysis
        </Link>

        <b>
        <br /><br />This is a list of my deployed projects.
        
        <br/><br/>To see projects that havn't reached deployment stage, please go to my Portfolio Website.</b>
    </div>
  );
}

export default Menu;