// import React, { useEffect, useState} from 'react'

// function Tema() {
//   const [tema, setTema] = useState('light')

//   useEffect(() => {
//     document.body.className = tema
//   }, [tema])

//   return (
//     <div>
//       <h2>Dabartine tema: {tema === 'light' ? 'Sviesi' : 'Tamsi'}</h2>
//       <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>
//         Keisti tema
//       </button>
//     </div>
//   )
// }

// export default function App() {
//   return <Tema />
// }

// // // // // // // // // // // // // // // // // // // // //
// import React, { useEffect, useState } from 'react'

// function Pranesimas() {
//   const [rodyti, setRodyti] = useState(true)

//   useEffect(() => {
//     const timeris = setTimeout(() => {
//       setRodyti(false)
//     }, 10000)

//     return () => clearTimeout(timeris)
//   }, [])

//   return (
//     <div>
//       {rodyti ? <h2>Sis pranesimas dings po 5 sekundziu</h2> : <h2>Pranesymas isnyko</h2>}
//     </div>
//   )
// }

// export default function App() {
//   return <Pranesimas />
// }

// // // // // // // // // // // // // // // // // // // // //
// import React, { useState, useEffect } from "react"

// function SlinkimoStebejimas() {
//   const [pozicija, setPozicija] = useState(0)

//   useEffect(() => {
//     const handeScroll = () => {
//       setPozicija(window.scrollY)
//     }

//     window.addEventListener('scroll', handeScroll)
//     console.log('1')

//     return () => {
//       window.removeEventListener('scroll', handeScroll)
//       console.log('2')
//     }
//   }, [])

//   return (
//     <div style={{ heigh: "200vh", padding: "20 px"}}>
//       <h2>Slinkimo pozicija {pozicija}</h2>
//       <p>Slankite zemyn, kad pamatytumete pokycius.</p>
//     </div>
//   )
// }

// export default function App() {
//   return (
//       <SlinkimoStebejimas />
//   )
// }

// // // // // // // // // // // // // // // // // // // // //
// import React, { useEffect, useState } from "react";

// function PavadinimoKeitimas() {
//   const [skaicius, setSkaicius] = useState(0);

//   useEffect(() => {
//     document.title = `Paspaudimai ${skaicius}`
//   }, [skaicius])

//   return (
//     <div>
//       <h2>Pavadinimas keiciasi</h2>
//       <button onClick={() => setSkaicius(skaicius + 1)}>+1</button>
//     </div>
//   )
// }

// export default function App() {
//   return <PavadinimoKeitimas />
// }

// // // // // // // // // // // // // // // // // // // // // // //
// import React, {useEffect} from "react"

// function Montavimas() {
//   useEffect(() => {
//     console.log('Komponentas sumontuotas')
//   }, [])

//   return <h2>Komponentas umontuotas</h2>
// }

// export default function App() {
//   return (
//     <div>
//       <Montavimas />
//     </div>
//   )
// }
