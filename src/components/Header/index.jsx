import './header.css';
import ContactInfo from '../ContactInfo';
import { LogoIcon, SearchIcon, AccIcon, ListIcon, CartIcon, ArrowIcon, SliderIcon } from '../../assets/icons';
import pic from './image1.png'
import pic2 from './image2.png'
import pic3 from './image3.png'
import pic4 from './image4.png'
import pic5 from './image5.png'
import pic6 from './image6.png'


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
                        <SearchIcon />
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
            <div className='mainHeader container'>
                <div className='nav'>
                    <p1>lightin haus</p1>
                    <p1>office</p1>
                    <p1>hotel</p1>
                    <p1>home</p1>
                    <p2>all product</p2>
                    <p2>pendant light</p2>
                    <p2>chandelier</p2>
                    <p2>switching & socket</p2>
                    <p2>ceiling lamp</p2>
                    <p2>wall lamp</p2>
                </div>
            </div>
            <div className="layer1">
                <img src={pic} alt="not found" />
                <div className='mainHeader container '>
                    <div className="box">
                        <div className="content">
                            <h3 style={{ marginBottom: '40px' }}>Explore our Showroom</h3>
                            <p style={{ marginBottom: '65px' }}>Not sure of what you’re looking for? <br />
                                No worries, use <span style={{
                                    color: '#F4811F'
                                }}>Lighting Xplorer</span> to see what you can get.</p>
                            <button>Proceed to Lighting Xplorer  <div className="arr" style={{ display: 'flex', textAlign: 'center', marginLeft: '7px' }}> <ArrowIcon /></div></button>
                        </div>
                    </div>
                    <div className="slider">
                        <SliderIcon />
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="layer2">
                <div className='mainHeader container '>
                    <div className="content">
                        <h4 style={{ marginTop: '40px', marginBottom: '15px' }}>Shop By Space <span style={{ color: '#F4811F', textDecorationLine: 'underline', marginLeft: '20px' }}>View All</span></h4>
                        <p style={{ marginBottom: '30px' }}>Select the type of apartment you want to light up.</p>
                    </div>
                    <div className="layer3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ position: 'relative' }}><img src={pic2} alt="not found" style={{ width: '360px', height: '272px', borderRadius: '5px' }} />
                            <label>home</label></div>
                        <div style={{ position: 'relative' }}><img src={pic3} alt="not found" style={{ width: '360px', height: '272px', borderRadius: '5px' }} />
                            <label>office</label></div>
                        <div style={{ position: 'relative' }}><img src={pic4} alt="not found" style={{ width: '360px', height: '272px', borderRadius: '5px' }} />
                            <label>hotel</label></div>

                    </div>
                    <div className="content">
                        <h4 style={{ marginTop: '25px', marginBottom: '10px' }}>Popular Categories <span style={{ color: '#F4811F', textDecorationLine: 'underline', marginLeft: '20px' }}>View All</span></h4>
                    </div>
                </div>
                <div className="layerslide">
                    <div className="layer3" style={{ display: 'flex' }}>
                        <div style={{ position: 'relative' }}><img src={pic5} alt="not found" style={{ width: '660px',marginLeft:'50px', height: '350px', borderRadius: '5px' }} />
                            <label>CEILING LAMPS</label></div>
                        <div style={{ position: 'relative' }}><img src={pic6} alt="not found" style={{ width: '568px', marginLeft:'20px', height: '350px', borderRadius: '5px' }} />
                            <label>CHANDELIERS</label></div>

                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header