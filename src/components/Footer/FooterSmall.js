import React, { useState } from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGooglePlus, faGooglePlusSquare, faLinkedin, faLinkedinIn, faInstagram, faInstagramSquare, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function FooterSmall() {
    const [showFooter, setShowFooter] = useState(false);
    window.addEventListener('scroll', (e) => { myFunction() })
    function myFunction() {
       // console.log(window.pageYOffset);
        if (window.pageYOffset < 100) {
            setShowFooter(false);


        } else {
            setShowFooter(true);

        }
    }

    return (
        <div id="myfooter" className={`footerSmall m-0 ${(showFooter || window.pageYOffset === 0) ? "" : "hide"}`}>
            <div className="container-fluid p-4 m-0">

            </div>
        </div>
    )
}

export default FooterSmall;
