//import { TableFooter } from '@mui/material';
import React from  'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
       <footer>
       <p>Created By Jyoti: Copyright © {year}</p>
       </footer>
        </>

    );
}
export default Footer;