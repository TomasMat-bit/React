// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import UserProfile from "./UserProfile";
// import NotFound from "./NotFound";
// import Navbar from "./Navbar";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/user/:id" element={<UserProfile />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// Example 3
// import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

// function OrderDetails() {
//   let { userId, orderId } = useParams()

//   return <h2>Vartotojo ID: {userId}, Uzsakymo ID: {orderId}</h2>
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function NotFound() {
//   return (
//     <div>
//       <h2>404 - Puslapis nerastas</h2>
//       <Link to='/'>Grizti i pagrindini puslapi</Link>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/user/:userId/order/:orderId' element={<OrderDetails />}/>

//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// Example 3
// import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

// function UserProfile() {
//   let { id } = useParams()

//   return <h2>Vartotojo ID: { id }</h2>
// }

// function Home() {
//   return (
//     <div>
//       <h2>Pagrindinis puslapis</h2>
//       <Link to='/user/1'>Vartotojas 1</Link>
//       <br/>
//       <Link to='/user/2'>Vartotojas 2</Link>
//     </div>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/user/:id' element={<UserProfile />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// Example 2
// import { BrowserRouter, Routes,  Route, Link, NavLink } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav>
//       <Link to='/' style={{ margin: "0px 20px" }}>Pagrindinis</Link>
//       <Link to='/about'>Apie mus</Link>
//       <br/>

//       <NavLink to='/' className={({isActive}) => (isActive ? 'active-link': '')}>
//         Pagrindinis
//       </NavLink>

//       <NavLink to='/about' className={({isActive}) => (isActive ? 'active-link': '')}>
//         Apie mus
//       </NavLink>
//     </nav>
//   )
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// Example 1
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function Home() {
//   return <h2>Pagrindinis puslapis</h2>
// }

// function About() {
//   return <h2>Apie mus</h2>
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />}></Route>
//         <Route path='/about' element={<About />}></Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

// //  -----------------------------------------  38 day, 1st example -----------------------------------------------
// import React from "react";
// import { LanguageProvider } from "./context/LanguageContext";
// import Greeting from "./components/Greeting";
// import LanguageSelector from "./components/LanguageSelector";

// function App() {
//   return (
//     <LanguageProvider>
//       <div style={{ textAlign: "center", padding: "20px" }}>
//         <Greeting />
//         <LanguageSelector />
//       </div>
//     </LanguageProvider>
//   );
// }

// export default App;
// // -----------------------------------------------------------------------------------------------------------

// --------------------------------  UZDUOTIS 1 -----------------------------------

// import React, { useContext } from "react";
// import ThemeDisplay from "./components/ThemeDisplay";
// import UserProfile from "./components/UserProfile";
// import LoginButton from "./components/LoginButton";
// import { ThemeProvider } from "./context/ThemeContext";
// import { UserProvider } from "./context/UserContext";
// import { AuthProvider, AuthContext } from "./context/AuthContext";
// import ErrorBoundary from "./ErrorBoundary";

// const App = () => {
//   // Naudojame AuthContext, kad gautume vartotojo informaciją
//   const { user } = useContext(AuthContext) || {}; // Naudojame default {} jeigu kontekstas yra undefined

//   console.log("User from AuthContext:", user); // Patikrinimui, ką gauname iš AuthContext

//   return (
//     <ErrorBoundary>
//       <AuthProvider>
//         <ThemeProvider>
//           <UserProvider user={user}>
//             {" "}
//             {/* UserProvider gauna user iš AuthContext */}
//             <div>
//               <h1>React Context Demonstracija</h1>
//               <ThemeDisplay />
//               <UserProfile />
//               <LoginButton />
//             </div>
//           </UserProvider>
//         </ThemeProvider>
//       </AuthProvider>
//     </ErrorBoundary>
//   );
// };

// export default App;

// // -----------------------------------------------------------------------------------------------------------

// --------------------------------  TEORIJA -----------------------------

import React from "react";
import AnimatedBox from "./components/AnimatedBox";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "50px" }}>
      <AnimatedBox />
    </div>
  );
}

export default App;
