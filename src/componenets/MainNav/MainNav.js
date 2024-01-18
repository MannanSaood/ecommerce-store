import {Link} from 'react-router-dom';
import classes from  './MainNav.module.css';
import {useAuth} from '../../contexts/AuthContext';
import {useState} from 'react';
import ItemList from '../Items/ItemList';

function MainNav(){
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('');
    const [loadedItem,setLoadedItem] = useState([]);
    let itemName=[];
    let itemId=[];
    let result = []
    const {currentUser} = useAuth();
    function activateSearch(){
        let header = document.getElementById("header")
        header.style.display ="none"
        let search = document.getElementById("search")
        search.style.display="block"
    }
    function deactivateSearch(){
        let header = document.getElementById("header")
        header.style.display ="block"
        let search = document.getElementById("search")
        search.style.display="none"

    }
    function deactivateResult(){
        let result = document.getElementById("result")
        result.style.display="none"
    }
    function Search(){
            fetch(
                'https://ec-app-231a1-default-rtdb.firebaseio.com/items.json'
            ).then(response =>{
                return response.json()
                
            }).then(data =>{
                let items=[];
                for(const key in data){
                    const item={
                        id:key,
                        ...data[key]
                    };
                    itemName.push(item.name);
                    console.log(itemName);
                    itemId.push(item.id);
                    items.push(item);    
                }
                setLoading(false);
                result = items.filter(item => item.name.trim() === search.trim());
                setLoadedItem(result)
                console.log(result)
            })
            
    }
    if(loadedItem.length >=1){
        return(
            <div>
            <div id="result" className={classes.container}>
            <h1>Result</h1>
            <div className={classes.content}>
            <ul>
            <li>
            <ItemList items={loadedItem}/>
            <button className={classes.cancelR} onClick={deactivateResult}>X</button>
            </li>
            <br></br>
            </ul>
            </div>
        </div>
        <header id="search" className={classes.search}>
            <div></div>
            <nav>
                <input value={search} id='searchInp' placeholder="Search" type="text" onChange={event => setSearch(event.target.value)}></input>
                <button  className={classes.searchbtn} onClick={Search}>
                            <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="15" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
                            </button>
                <button className={classes.cancel} onClick={deactivateSearch}>X</button>
            </nav>
        </header>
        <header id="header" className={classes.header}>
            <div></div>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.home}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={classes.phones}>
                            <Link to="/phones">Phones</Link>
                        </li>
                        <li className={classes.tv}>
                            <Link to="/tv">TV</Link>
                        </li>
                        <li className={classes.laptop}>
                            <Link to="/laptops">Laptops</Link>
                        </li>
                        <li className={classes.lifestyle}>
                            <Link to="/lifestyle">Lifestyle</Link>
                        </li>
                        <li className={classes.audio}>
                            <Link to="/audio">Audio</Link>
                        </li>

                        <li className={classes.le}>
                            <button onClick={activateSearch}>
                            <svg  className={classes.cart} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
                            </button>
                        </li>

                        <li className={classes.le}>
                            {currentUser==null?<Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashfffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M12.09375,14.78125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h9.40625v99.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375h67.1875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125h-67.1875c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v-86h117.31042c1.74687,0 3.35833,0.8052 4.29895,2.28333c1.075,1.47812 1.34375,3.2271 0.67188,4.8396l-18.40833,55.36145c-2.01562,6.04688 -7.52552,10.07813 -13.97552,10.07813h-75.11615c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h75.11615c9.80937,0 18.54322,-6.3151 21.63385,-15.58697l18.40833,-55.36407c1.34375,-4.16562 0.67397,-8.6 -1.87915,-12.09375c-2.55312,-3.49375 -6.58647,-5.6427 -10.88647,-5.6427h-117.17395v-9.40625c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM34.9375,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM102.125,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM34.9375,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM102.125,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375z"></path></g></g></svg><span className={classes.badge}></span></Link>
                            :<Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M12.09375,14.78125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h9.40625v99.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375h67.1875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125h-67.1875c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v-86h117.31042c1.74687,0 3.35833,0.8052 4.29895,2.28333c1.075,1.47812 1.34375,3.2271 0.67188,4.8396l-18.40833,55.36145c-2.01562,6.04688 -7.52552,10.07813 -13.97552,10.07813h-75.11615c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h75.11615c9.80937,0 18.54322,-6.3151 21.63385,-15.58697l18.40833,-55.36407c1.34375,-4.16562 0.67397,-8.6 -1.87915,-12.09375c-2.55312,-3.49375 -6.58647,-5.6427 -10.88647,-5.6427h-117.17395v-9.40625c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM34.9375,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM102.125,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM34.9375,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM102.125,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375z"></path></g></g></svg><span className={classes.badge}></span></Link>}
                        </li>
                        <li className={classes.le}>
                            {currentUser=== null? <Link to="/login">Login</Link>:<Link to="/profile">Profile</Link>}
                        </li>

                    </ul>
                </nav>
        </header>
        </div>
        );
    }
    
    return(
        <div>
        <header id="search" className={classes.search}>
            <div></div>
            <nav>
                <input value={search} id='searchInp' placeholder="Search" type="text" onChange={event => setSearch(event.target.value)}></input>
                <button  className={classes.searchbtn} onClick={Search}>
                            <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="15" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
                            </button>
                <button className={classes.cancel} onClick={deactivateSearch}>X</button>
            </nav>
        </header>
        <header id="header" className={classes.header}>
            <div></div>
                <nav>
                    <ul className={classes.ul}>
                        <li className={classes.home}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={classes.phones}>
                            <Link to="/phones">Phones</Link>
                        </li>
                        <li className={classes.tv}>
                            <Link to="/tv">TV</Link>
                        </li>
                        <li className={classes.laptop}>
                            <Link to="/laptops">Laptops</Link>
                        </li>
                        <li className={classes.lifestyle}>
                            <Link to="/lifestyle">Lifestyle</Link>
                        </li>
                        <li className={classes.audio}>
                            <Link to="/audio">Audio</Link>
                        </li>

                        <li className={classes.le}>
                            <button onClick={activateSearch}>
                            <svg  className={classes.cart} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>
                            </button>
                        </li>

                        <li className={classes.le}>
                            {currentUser==null?<Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashfffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M12.09375,14.78125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h9.40625v99.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375h67.1875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125h-67.1875c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v-86h117.31042c1.74687,0 3.35833,0.8052 4.29895,2.28333c1.075,1.47812 1.34375,3.2271 0.67188,4.8396l-18.40833,55.36145c-2.01562,6.04688 -7.52552,10.07813 -13.97552,10.07813h-75.11615c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h75.11615c9.80937,0 18.54322,-6.3151 21.63385,-15.58697l18.40833,-55.36407c1.34375,-4.16562 0.67397,-8.6 -1.87915,-12.09375c-2.55312,-3.49375 -6.58647,-5.6427 -10.88647,-5.6427h-117.17395v-9.40625c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM34.9375,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM102.125,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM34.9375,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM102.125,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375z"></path></g></g></svg><span className={classes.badge}></span></Link>
                            :<Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M12.09375,14.78125c-2.28438,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h9.40625v99.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375h67.1875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125h-67.1875c-2.95625,0 -5.375,-2.41875 -5.375,-5.375v-86h117.31042c1.74687,0 3.35833,0.8052 4.29895,2.28333c1.075,1.47812 1.34375,3.2271 0.67188,4.8396l-18.40833,55.36145c-2.01562,6.04688 -7.52552,10.07813 -13.97552,10.07813h-75.11615c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28437 1.74688,4.03125 4.03125,4.03125h75.11615c9.80937,0 18.54322,-6.3151 21.63385,-15.58697l18.40833,-55.36407c1.34375,-4.16562 0.67397,-8.6 -1.87915,-12.09375c-2.55312,-3.49375 -6.58647,-5.6427 -10.88647,-5.6427h-117.17395v-9.40625c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM34.9375,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM102.125,143.78125c-7.39062,0 -13.4375,6.04688 -13.4375,13.4375c0,7.39063 6.04688,13.4375 13.4375,13.4375c7.39063,0 13.4375,-6.04687 13.4375,-13.4375c0,-7.39062 -6.04687,-13.4375 -13.4375,-13.4375zM34.9375,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375zM102.125,151.84375c2.95625,0 5.375,2.41875 5.375,5.375c0,2.95625 -2.41875,5.375 -5.375,5.375c-2.95625,0 -5.375,-2.41875 -5.375,-5.375c0,-2.95625 2.41875,-5.375 5.375,-5.375z"></path></g></g></svg><span className={classes.badge}></span></Link>}
                        </li>
                        <li className={classes.le}>
                            {currentUser=== null? <Link to="/login">Login</Link>:<Link to="/profile">Profile</Link>}
                        </li>

                    </ul>
                </nav>
        </header>
        </div>
    );
}
export default MainNav;