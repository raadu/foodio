// Title: Header
// Details: Header components takes text, logo as props and render in Header area.
// Author: raadu
// Date: 17 March 2021, 11:54PM

const Header = ({text="Sample Header Text"}) => {
    return (  
        <header>
            <a href="/">{text}</a>
        </header>
    );
}
 
export default Header;