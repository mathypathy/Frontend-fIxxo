import React from 'react'
import ExternalLinkIcon from '../Components/ExternalLinkIcon';


const FooterSection = () => {
  return (
    <footer>
        <div className="socialmedia">
            <div className="socia-media-links">
                <ExternalLinkIcon link="https://www.facebook.com" icon="fa-brands fa-facebook-f"/>
                <ExternalLinkIcon link="https://www.instagram.com" icon="fa-brands fa-instagram"/>
                <ExternalLinkIcon link="https://www.twitter.com" icon="fa-brands fa-twitter"/>
                <ExternalLinkIcon link="https://www.google.com" icon="fa-brands fa-google"/>
                <ExternalLinkIcon link="https://www.linkedin.com" icon="fa-brands fa-linkedin"/>
            </div>
            <div className="copyright">
                <p>
                <i className="fa-regular fa-copyright"></i>&nbsp;2022 fixxo. All Rights Reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default FooterSection