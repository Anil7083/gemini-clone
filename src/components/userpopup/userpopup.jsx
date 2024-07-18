import { useContext, useState } from "react";
import './userpopup.css';
import { UserContext } from "../../UserContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase/firebase";
import { assets } from "../../assets/assets";
const auth = getAuth(app);

const UserPopUp=()=>{
    const [menuOpen, setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }

    const user=useContext(UserContext);
    return (
        <div className="nav">
            <p className="logo1">Gemini</p>
            {user ? (<img src={user.photoURL} alt="" onClick={toggleMenu} />):(<p>please log in</p>)}
            
            <div className={menuOpen ? "sub-menu-wrap open-menu":"sub-menu-wrap" } id="subMenu">
                <div className="sub-menu">
                    <div className="user-info">
                        <h3>{user.email}</h3>
                        <img src={user.photoURL} alt="" />
                        <h2>Hi, {user.displayName}</h2>
                        <button onClick={() => signOut(auth)} id="btn2" className="btn1">logout <img className="logout" src={assets.logout} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPopUp;