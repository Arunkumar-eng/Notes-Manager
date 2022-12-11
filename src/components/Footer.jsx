import React from "react";
function Footer(){
    const currentDate = new Date().getFullYear();
    return (
        <footer>
            <p>
                Made with ❤️ by <a className="link" href="https://github.com/Arunkumar-eng" target={"_blank"}>Arunkumar49r</a>
            </p>
        </footer>
    )
}

export default Footer;