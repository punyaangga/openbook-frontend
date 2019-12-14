import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
 
    <div className={style.menu}>
      <button className={style.button}>Daftar</button>
      <h6 className={style.buttonText}>Tentang</h6>
      <h6 className={style.buttonText}>Masuk</h6>
      <form method="#" action="#">
      <input type="text" name="#" className={style.search} placeholder="cari buku disini"></input>
      </form>
    </div>

   
    
  )
}


export default Navbar
