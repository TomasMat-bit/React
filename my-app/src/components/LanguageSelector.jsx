import React, { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"

function LanguageSelector() {
    const { toggleLanguage, language } = useContext(LanguageContext)

    return (
        <button onClick={toggleLanguage} style={{ padding: "10px", marginTop: "10px" }}>
            { language === 'lt' ? 'Switch to English' : 'Perjungti i Lietuviu'}
        </button>
    )
}

export default LanguageSelector
