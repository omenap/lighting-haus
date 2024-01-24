import './header.css';
import ContactInfo from '../ContactInfo';
import { LogoIcon, SearchIcon, AccIcon, ListIcon, CartIcon } from '../../assets/icons';

function Header() {
    return (
        <header>
            <ContactInfo />
            <div className='mainHeader container'>
                <div className='headerContent'>
                    <div className='logo'>
                        <LogoIcon />
                    </div>
                    <div className="searchBar">
                        <SearchIcon/>
                        <input className='f-12px' type="text" name="" placeholder='Search for a product, category or space.' id="" />
                    </div>
                    <div className="menu">
                        <div className='menuItem'>
                            <AccIcon />
                            <p className='f-12px'>MY ACCOUNT</p>
                        </div>
                        <div className='menuItem'>
                            <ListIcon />
                            <p className='f-12px'>LIST</p>
                        </div>
                        <div className='menuItem'>
                            <CartIcon />
                            <p className='f-12px'>CART</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

        </header>
    )
}

export default Header