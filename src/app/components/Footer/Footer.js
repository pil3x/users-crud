import React from 'react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="page-footer text-center">
                <div className="footer-copyright">
                    <div className="container">
                        &copy;{currentYear} Copyright Text
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;