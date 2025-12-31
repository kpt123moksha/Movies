// import { Link } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";


// function Navbar() {
//   const { dark, setDark } = useTheme(); // ✅ use theme

//   return (
//     <nav style={navStyle}>
//       <Link to="/" style={logo}>🎬 MovieApp</Link>

//       <div style={right}>
//         <Link to="/" style={link}>Home</Link>
//         <Link to="/favorites" style={link}>❤️ Favorites</Link>

//         <button onClick={() => setDark(!dark)} style={btn}>
//           {dark ? "☀️ Light" : "🌙 Dark"}
//         </button>
//       </div>
//     </nav>
//   );
// }
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme(); // ✅ FIXED

  return (
    <nav
      style={{
        ...navStyle,
        background: darkMode ? "#020617" : "#f8fafc",
      }}
    >
      <Link
        to="/"
        style={{
          ...logo,
          color: darkMode ? "white" : "#020617",
        }}
      >
        🎬 MovieApp
      </Link>

      <div style={right}>
        <Link
          to="/"
          style={{ ...link, color: darkMode ? "white" : "#020617" }}
        >
          Home
        </Link>

        <Link
          to="/favorites"
          style={{ ...link, color: darkMode ? "white" : "#020617" }}
        >
          ❤️ Favorites
        </Link>

        <button onClick={toggleTheme} style={btn}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "#020617",
  padding: "15px 25px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  color: "white",
  fontSize: "22px",
  textDecoration: "none",
  fontWeight: "bold",
};

const right = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

const btn = {
  background: "#6366f1",
  color: "white",
  border: "none",
  padding: "6px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Navbar;
