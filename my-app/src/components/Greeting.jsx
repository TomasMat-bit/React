import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

function Greeting() {
    const { language } = useContext(LanguageContext)

    return (
        <h2>
            { language === 'lt' ? 'Labas, Sveiki atvyke!' : 'Hello, welcome!' }
        </h2>
    )
}

export default Greeting