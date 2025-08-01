// import { Link } from "react-router-dom";

// <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
//   <Link className="navbar-brand" to="/">Word Game App</Link>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarNav"
//     aria-controls="navbarNav"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav ms-auto">
//       <li className="nav-item">
//         <Link className="nav-link" to="/demoContext">DemoContext</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/Demostoragem">Demostoragem</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/ReactContextpage">ReactContextpage</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/sessionStorage">SessionStorage</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/useCon">useCon</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/StorageTypes">StorageTypes</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/cookies">Cookies</Link>
//       </li>
//     </ul>
//   </div>
// </nav>


import { Link } from "react-router-dom";
import "./Home.css";

const SemiBar = () => {
  return (
    <div className="home">
      <h2>These are the following types Browser-storage</h2>
      <ul>
        <li><Link to="/reactContext">ReactContextPage</Link></li>
        <li><Link to="/usecon">UseCon</Link></li>
        {/* <li><Link to="/demo-storage">Welcome</Link></li> */}
        <li><Link to="/session">Session</Link></li>
        <li><Link to="/cookie">CookieStorage</Link></li>
        <li><Link to="/browser-storage">BrowserStorage</Link></li>
        <li><Link to="/game">game</Link></li>
      </ul>
      
    </div>
  );
};

export default SemiBar;
 