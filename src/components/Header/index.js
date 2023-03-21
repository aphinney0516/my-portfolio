import React from "react";
import NavTabs from "../NavTabs";
function Header ({currentPage, handlePageChange}) {
    return (
        <div style={{backgroundColor:"black", color: "white", display: "flex", flexDirection: "column", border: "1px solid white", textAlign: "center"}}>
            <h1 style={{fontFamily:"'Bad Script', cursive"}}>Andrew Phinney</h1>
            <NavTabs currentPage={currentPage}handlePageChange={handlePageChange}/>
        </div>
    )
} 
export default Header;