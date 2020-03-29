import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

// class Navbar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {authContext => (
//           <ThemeContext.Consumer>
//             {themeContext => {
//               const { isLightTheme, light, dark } = themeContext;
//               const theme = isLightTheme ? light : dark;
//               const { isAuthenticated, toggleAuth } = authContext;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context api</h1>
//                   <div onClick={toggleAuth}>
//                     {isAuthenticated ? "Logged in" : "Logged out"}
//                   </div>
//                   <ul>
//                     <li>HOME</li>
//                     <li>About</li>
//                     <li>contact</li>
//                   </ul>
//                 </nav>
//               );
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context api</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged in" : "Logged out"}
      </div>
      <ul>
        <li>HOME</li>
        <li>About</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
