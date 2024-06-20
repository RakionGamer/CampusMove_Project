"use client";
import Image from 'next/image'
import avatar from '../temp/user.png'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'

const style = {
    loginButton: `flex items-center cursor-pointer rounded full hover:bg-[#333333] px-4 py-1`,
    loginText: `ml-2`,
    userImageContainer: `mr-2`,
    userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor pointer`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor pointer`,
    logo: `text-3xl text text-white flex cursor-pointer mr-16`,
    leftMenu: `flex gap-3`,
    rightMenu: `flex gap-3 items-center`,
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
}


const Navbar = () => {
    const {currentAccount, connectWallet, currentUser } = useContext(UberContext)
    const userName = currentUser?.name ? currentUser.name.split(' ')[0] : '';
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>CampusMove</div>
            </div>
            <div className={style.rightMenu}>
                
                <div className={style.menuItem}>{userName}</div>
                <div className={style.userImageContainer}>
            
                    <Image className={style.userImageContainer} src={avatar} width={40} height={40} />
                </div>
                {currentAccount ? (
                    <div>{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}</div>
                ) : (
                    <div className={style.loginButton} onClick={() => connectWallet()}>
                        <BsPerson/>
                        <span className={style.loginText}>Iniciar sesión</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar