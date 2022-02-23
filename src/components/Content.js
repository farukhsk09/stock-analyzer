import './Content.css';
import logo from '../apple-logo.png';
import tesla from '../tesla-logo.png';
import shopify from '../shopify.png';
import adidas from '../adidas.jpeg';
import airbnb from '../airbnb.jpg';
import dropbox from '../dropbox.png';

function Content() {
    return (
        <div className="content">
            <div className='heading'>
                <div className='search'>Fancy Searchbar</div>
                <div className='date'>Timestamp.now()</div>
                <div className='profile'>Samsuk Vangdu</div>
            </div>
            <div className='tabs'>
                <div className='stock-market-tab'>
                    <h1>Stock Market</h1>
                    <h5>Trending market group</h5>
                    <div className='cards'>
                        <div className='big card'>
                            <div className='first'>
                                <div className='company-logo'><img src={logo}></img></div>
                                <div className='Info'>
                                    <h4>AAPL</h4>
                                    <h6>Apple</h6>
                                </div>
                                <div className='button'>.</div>
                            </div>
                            <div className='second'>
                                <div className='green-trend'>&nbsp;</div>
                                <div className='amount'>$10,390.00</div>
                            </div>
                            <div className='third'>
                                +20
                            </div>
                        </div>
                        <div className='big card'>
                            <div className='first'>
                                <div className='company-logo'><img src={tesla}></img></div>
                                <div className='Info'>
                                    <h4>TSLA</h4>
                                    <h6>Tesla</h6>
                                </div>
                                <div className='button'>.</div>
                            </div>
                            <div className='second'>
                                <div className='green-trend'></div>
                                <div className='amount'>$7,390.00</div>
                            </div>
                            <div className='third'>
                                +12
                            </div>
                        </div>
                    </div>
                </div>
                <div className='popular-tab'>
                    <h2>Most Popular Week</h2>
                    <div className='cards'>
                        <div className='card small'>
                            <div className='company-logo'><img src={adidas}></img></div>
                            <div className='Info'>
                                <h4>ADS</h4>
                                <h6>Adidas</h6>
                            </div>
                            <h4 className='current-price'>$12,000.00</h4>
                            <h6 className='change'>20% this week</h6>
                        </div>
                        <div className='card small'>
                            <div className='company-logo'><img src={shopify}></img></div>
                            <div className='Info'>
                                <h4>SHOP</h4>
                                <h6>Shopify</h6>
                            </div>
                            <h4 className='current-price'>$1620.00</h4>
                            <h6 className='change'>55% this week</h6>
                        </div>
                        <div className='card small'>
                            <div className='company-logo'><img src={dropbox}></img></div>
                            <div className='Info'>
                                <h4>DBX</h4>
                                <h6>Dropbox</h6>
                            </div>
                            <h4 className='current-price'>$620.00</h4>
                            <h6 className='change'>5.5% this week</h6>
                        </div>
                        <div className='card small'>
                            <div className='company-logo'><img src={airbnb}></img></div>
                            <div className='Info'>
                                <h4>ABNB</h4>
                                <h6>Airbnb</h6>
                            </div>
                            <h4 className='current-price'>$1740.00</h4>
                            <h6 className='change'>56% this week</h6>
                        </div>
                    </div>
                </div>
                <div className='Transactions'>
                    <h1>Transaction</h1>
                    <div className='transaction'>
                        <img src={logo}></img>
                        <div className='buy'>
                            <h4>Buy apple Stock</h4>
                            <h6>stock investment</h6>
                        </div>
                        <div className='interest'>
                            <h4>Interest rate 2%</h4>
                        </div>
                        <div className='interest'>
                            <h4>$20,000.54</h4>
                        </div>
                    </div>
                    <div className='transaction'>
                        <img src={adidas}></img>
                        <div className='buy'>
                            <h4>Buy adidas Stock</h4>
                            <h6>stock investment</h6>
                        </div>
                        <div className='interest'>
                            <h4>Interest rate 15%</h4>
                        </div>
                        <div className='interest'>
                            <h4>$11,000.54</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
