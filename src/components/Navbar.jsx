import React, { useState } from "react"
import {AppBar,Typography,Toolbar, Tabs, Tab, InputBase,useMediaQuery,useTheme, Button } from "@mui/material"
 import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
 import SearchIcon from '@mui/icons-material/Search';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalDiningIcon from '@mui/icons-material/LocalDining';

export const Navbar=()=>{
    const [value,setValue]=useState();
    const theme=useTheme(null);
   const isMatch=useMediaQuery(theme.breakpoints.down("md"));
   const [input,setInput]=useState("");

  
    return(
        <React.Fragment>
            <AppBar sx={{backgroundColor:"black"}}>
                <Toolbar>
            {isMatch?
            <>
            
            <Typography sx={{color: "#826F66",
            fontSize:"25px",
            fontWeight:"20px",
            marginLeft:"40%",
            fontFamily:"MonoLisa"}} >
                    Restaro
                </Typography>
                
                {/* <SearchIcon sx={{color:"black",marginLeft:"auto"}}/> */}
            </>
        :
        <>
        <div style={ {"marginLeft":"15%","display":"flex"}}>
        <LocalDiningIcon />
             <Typography sx={{color: "#826F66",
              fontFamily:"MonoLisa",
             marginLeft:"1%",
            fontSize:"25px",
            fontWeight:"20px"}}  >
                    Restaro
                </Typography>
        </div>
       
               
        
                <Tabs  value={value} onChange={(e,value)=>{setValue(value)}} indicatorColor="primary" sx={{marginLeft:"10%"}}>
                    <Tab label="HOME" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="MENU" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="RESERVATION" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="PAGES" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="RECIPIE" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="BLOG" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="SHOP" sx={{color:"white",fontSize:"10px"}}/>
                    <Tab label="CONTACT" sx={{color:"white",fontSize:"10px"}}/>
                </Tabs>
                {/* <NotificationsNoneIcon sx={{color:"black"}}/> if person Login only   */}
                <ShoppingCartIcon sx={{fontSize:"medium"}}/>
        </>    
        }


           
                </Toolbar>
                {/* <DrawerCoomponent/> */}
            </AppBar>
        </React.Fragment>
    )
}