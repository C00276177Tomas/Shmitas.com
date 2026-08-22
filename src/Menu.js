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
        <Link to="/Portfolio" className="menu-button" style={{marginTop:"5vw"}}>
        My Portfolio
        </Link>

        <Link to="/TeamPlayAnalysis" className="menu-button">
        Team Play Analysis
        </Link>
    </div>
  );
}

export default Menu;