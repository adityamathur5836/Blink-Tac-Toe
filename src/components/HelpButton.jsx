import { HelpCircle } from "lucide-react";
import React from "react";
import '../styles/globals.css'

export default function HelpButton({onClick}){
    return (
        <button className="help-button" onClick={onClick}>
            <HelpCircle size={20}/>
            How To Play
        </button>
    )
}