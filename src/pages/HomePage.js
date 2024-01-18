import {useState} from 'react';
import classes from './Home.module.css';
import {Link} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Home(props){
    const [autoplay, setAutoplay] = useState(true);
    const image1 = './images/first.jpg'

    setAutoplay(true)
    console.log(image1)
    const style={
        textAlign:"center",
        backgroundImage: "url('https://i02.appmifile.com/598_operator_in/12/06/2021/75578b17da839e81f4f9d4ccb046651b.jpg')",
        padding: "300px 0",
        fontSize: "30px"
    }
    const style1={
        textAlign:"center",
        backgroundImage: "url('https://i02.appmifile.com/7_operator_in/11/06/2021/98badab2edb2a09612eff6f46d017af0.jpg')",
        padding: "300px 0",
        fontSize: "30px"
    }
    const style2={
        textAlign:"center",
        backgroundImage: "url('https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg')",
        padding: "300px 0",
        fontSize: "30px"
    }
    const style3={
        textAlign:"center",
        backgroundImage: "url('https://oasis.opstatics.com/content/dam/oasis/page/nord-series/nord-ce/kv/in/carousel/TV-U1S-1440_350-M.jpg.transform/scale-50/image.jpg')",
        padding: "200px 0",
        fontSize: "30px"
    }
    const style4={
        textAlign:"center",
        backgroundImage: "url('https://oasis.opstatics.com/content/dam/oasis/page/homepage/in/top-banner/0607special_M.jpg.transform/scale-50/image.jpg')",
        padding: "170px 0",
        fontSize: "30px"
    }

    return(
        <div>
        <div>
            <div className={classes.slideContainer}>

            <Slide autoplay={autoplay}>
                <Link to="/phones">
                <div style={style}>
                </div>
                </Link>
                <Link to="/phones">
                <div style={style1}>
                </div>
                </Link>
                <Link to="/laptops">
                <div style={style2}>
                </div>
                </Link>
                <Link to="/tv">
                <div style={style3}>
                </div>
                </Link>
                <Link to="/phones">
                <div style={style4}>
                </div>
                </Link>
               </Slide>
            </div>
        </div>
        <div>
        </div>
        <div className={classes.sec}>
                <h1>Products</h1>
                <Link to='/audio'><img alt="oneplus earphones" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/in/tile/audio-M.jpg.transform/scale-50/image.jpg" ></img></Link>
                <Link to='/lifestyle'><img alt="oneplus watch" src="https://oasis.opstatics.com/content/dam/oasis/page/nord-series/nord-ce/kv/in/tile/watch-S.jpg.transform/scale-50/image.jpg" /></Link>
                <Link to='/lifestyle'><img alt="oneplus band" src="https://oasis.opstatics.com/content/dam/oasis/page/homepage/in/tile/band-M.jpg.transform/scale-50/image.jpg" /></Link>
                <h2>Audio</h2>
                <Link to='/audio'><img alt="redmi earbuds s" className={classes.au} src="https://i01.appmifile.com/webfile/globalimg/in/cms/BF2A4279-A6D5-B4F0-FE37-633256CDC9FC.jpg" />
                <h3>Redmi Earbuds S</h3>
                </Link>
                <Link to='/audio'><img alt="mi soundbar" className={classes.au} src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1547107203.76021206.png" />
                <h3>Mi Soundbar</h3>
                </Link>
                <Link to='/audio'><img alt="mi bass" className={classes.aud} src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1563264530.44121333.jpg?width=420&height=420" />
                <h3>Mi Bass Headphones</h3>
                </Link>
                <h2>Phones</h2>
                <Link to='/phones'><img  alt="oneplus nord ce" className={classes.aud} src="https://image01.oneplus.net/ebp/202105/24/1-m00-25-d4-rb8bwmcruwyarg44aaynxfflaji376_384_384.png" />
                <h3>OnePlus Nord CE</h3>
                </Link>
                <Link to='/phones'><img alt="mi 11 ultra" className={classes.pho} src="https://i02.appmifile.com/867_operator_in/23/04/2021/3849c44ac78d65621750a114811711f9.png?width=140&height=140" />
                <h3>Mi 11 Ultra 5G</h3>
                </Link>
                <Link to='/phones'><img alt="redmi note 10" className={classes.pho} src="https://i02.appmifile.com/45_operator_in/04/03/2021/890c4652df767017f4857c5e90647d2b.png?width=140&height=140" />
                <h3>Redmi Note 10 Pro Max</h3>
                </Link>
            </div>
            <footer>
                
            </footer>
        </div>
    );
}
export default Home;