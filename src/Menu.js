import './Menu.css';

function Menu() {
  return (
    <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5vh"
  }}>
        <a href="/TeamPlayAnalysis" className="menu-button" style={{marginTop: "100px"}}>
            Team Play Analysis
        </a>

        <a href="/Portfolio" className="menu-button">
            My Portfolio
        </a>
    </div>
  );
}

export default Menu;