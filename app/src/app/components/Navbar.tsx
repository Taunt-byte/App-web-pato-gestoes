import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="navbar">
            <Link href="/pages/Contato" legacyBehavior>
                <a title="contato">Contato</a>
            </Link>
        </div>
    )
}