import React from "react";

export default function FooterLast(){
    const currentYear = new Date().getFullYear()
    return(
        <div className="last-footer">&copy; CopyRight {currentYear} Emran </div>
    )
} 