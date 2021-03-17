// Title: Footer Component
// Details: Footer component to display info at the bottom of page.
// Author: raadu
// Date: 18 March, 12:09AM

const Footer = ({text="Human", link="/"}) => {
    return (
        <footer>
            Created by &nbsp;
            <a href={link}>{text}</a>
        </footer>
    );
}
 
export default Footer;