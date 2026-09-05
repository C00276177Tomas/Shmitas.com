import './App.css';

function TeamPlayAnalysis() {
  return (
    <div style={{padding:50,paddingLeft:200,paddingRight:200}}>
      <section style={{ minHeight: "100vh" }}>
        <h1>Welcome to my Team Play Analysis project</h1>
        <h3>This project will see updates on a weekly basis. Project start is 30/08/2026.</h3>

        I will outline here some of the main tasks to begin the project. <br/><br/>

        <a
          href="#mvp"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("mvp")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          - A plan for Minimum Viable Product.
        </a> <br/>
        - Website layout <br/>
        - camera angle of sports field analysis<br/>
        - a tripod to hold up the mobile device for filming <br/>
        - streaming on youtube/twitch to get around storage costs? <br/>
        - sports analytics tools<br/><br/><br/><br/>


        <h3>A short description of the project.</h3> <br/>

        This project will be aimed at sports teams looking to enhance their team performance through video analysis. It will be delivered through
        a website where managers and players can use tools to interact with the raw footage by highlighting, cutting, noting, and utilising many 
        other functionalities. This will hopefully improve a team's performance, allowing the managers and players to communicate more efficiently 
        to make timely and needed improvements to the team. This project is aimed at amateur level teams. Initial testing will be based on a soccer 
        team due to having access.<br/><br/>

        Please note. The assistance of AI will be used to significantly speed up development.
      </section>
       
      <section id="mvp" style={{ paddingTop: 50, minHeight: "100vh" }}>
      <h1 style={{marginTop:50}}>Minimum Viable Product Description</h1>
        - Must be able to record on users phone (probably need some sort of tool to raise the camera for a big pitch like a soccer pitch)<br/>
        - Must be able to play 2 hour video for multiple users (youtube/twitch video or save video to cloud if required, cloud would include a charge) <br/>
        - Must have a tool to cut parts of the video and easily edit video<br/>
        - Must have a way to share to other users highlighted sections to review<br/>
        - Video must have real life time stamps so if a manager notes a time to review they are easily able to go to that section<br/>
      </section>
      <section
      id="layout"
      style={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#f5f5f5",
      }}
      >
      {/* Left menu */}
      <aside
        style={{
          width: "220px",
          backgroundColor: "#1f1f1f",
          color: "white",
          padding: "30px 20px",
          boxSizing: "border-box",
          minHeight: "100vh",
        }}
        >
        <h2 style={{ marginTop: 0, color:'white' }}>Menu</h2>

        <nav>
          <div style={{ padding: "15px 0", cursor: "pointer" }}>
            Matches
          </div>

          <div style={{ padding: "15px 0", cursor: "pointer" }}>
            Clips
          </div>

          <div style={{ padding: "15px 0", cursor: "pointer" }}>
            Analyse
          </div>

          <div style={{ padding: "15px 0", cursor: "pointer" }}>
            Team
          </div>
        </nav>
        </aside>

        {/* Main content */}
        <main
          style={{
            flex: 1,
            padding: "40px",
            boxSizing: "border-box",
          }}
        >
        <h1 style={{ marginTop: 0 }}>
          Full Matches
        </h1>

        {/* Video grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            marginTop: "30px",
          }}
        >
        {/* Video 1 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Celtic</h3>
          <h4>05/01/27</h4>
        </div>

        {/* Video 2 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Town</h3>
          <h4>15/10/26</h4>
        </div>

        {/* Video 3 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Town</h3>
          <h4>15/10/26</h4>
        </div>

        {/* Video 4 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Town</h3>
          <h4>15/10/26</h4>
        </div>

        {/* Video 5 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Town</h3>
          <h4>15/10/26</h4>
        </div>

        {/* Video 6 */}
        <div>
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              backgroundColor: "#ccc",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#666",
            }}
          >
            Video Preview
          </div>

          <h3>Rosbercon VS Town</h3>
          <h4>15/10/26</h4>
        </div>

        {/* Close video grid */}
        </div>

        {/* Close main content */}
        </main>

        {/* Close entire section */}
        </section>
      </div>
  );
}

export default TeamPlayAnalysis;