import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Slider } from './slider';
export const Mainpage=()=>{
  let veg=["Mushroom Biryani","Veg Manchurian","Paneer Manchurian","Paneer 65","Paneer Chilli Dry"]
  let nonveg=[,"Kadai Paneer",
  "Dal Tadka","Jeera Fried Rice","Veg Fried Rice","Veg Mix Fried Rice"]
let price=[120,130,140,150,150,160,170,180,190,200]
     return(
        <div style={{"marginTop":"60px"}}>
        

    <React.Fragment>
      <CssBaseline />
      <Slider/>
      <Container sx={{width:"80%"}}>
        <Box sx={{ bgcolor: 'white', height: '70vh' }}>
         
            <h1>THE RESTAURANT</h1>
            <h2>A little about us and a breif history of how we started.</h2>
            <div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>
            <Box sx={{border:"1px solid transparent", height:"350px",width:"50%"}}>
            
               <img src="https://vegveganmeat.com/wp-content/uploads/2020/11/chicken-biryani-pressure-cooker-south-india-square.jpg" 
               style={{width:"100%",height:"350px",objectFit:"cover"}} 
               alt="" />
            </Box>
            <Box sx={{border:"1px solid transparent", height:"350px",width:"40%"}}>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
         </Box>
            </div>
            
        </Box>
      </Container>
      <Container maxWidth="xl" >
        <Box sx={{  height: '80vh',
        backgroundImage: `url("https://verdemedia.com/wp-content/uploads/2015/01/bigstock-Served-dinner-table-in-a-resta-84861479.jpg")`,
        objectFit:"cover" }}>
          
          <h1 style={{color:"white"}}>Today Special</h1>
          <h2 style={{color:"white"}}>Malai Kofta</h2>
          <div>
              <img src="https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2020/Healthy_non_fried_Malai_Kofta_recipe_Paneer_Aloo_Kofta_2_1600.jpg" style={{height:"400px"}} alt="" />
              
          </div>
          
          <Button sx={{background:"yellow",color:"black"}}>Order Now</Button>
          
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{  height: '100vh' }}>
          <h1>RESERVATIONS</h1>
          <h3>BOOK A TABLE ONLINE AND WE KEEP IT RESERVED FOR YOU</h3>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Pick a date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Your Name"
          type="string"
          
        />
        <TextField
          id="outlined-password-input"
          label="Pick a time"
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
        />
       <TextField
          
          id="outlined-required"
          label="Email Address"
          type="string"
          
        />
        <TextField
          id="outlined-number"
          label="Guests"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
       <TextField
          
          id="outlined-required"
          label="Phone no."
          type="number"
          
        />
       
      </div>
      <Button sx={{background:"yellow",color:"black"}}>Book Now</Button>
</Box>

<h1>Our Menu</h1>
<div style={{display:"flex",justifyContent:"space-evenly"}}>
<div>
  
  {veg.map((e,i)=>{
return <h2>{e}.........{price[i]}</h2>
  })}
</div>
<div>
{nonveg.map((e,i)=>{
return <h2>{e}.........{price[i]}</h2>
  })}
</div>
</div>
        </Box>
       

      </Container>

      {/* Footer */}
      <Grid container sx={{backgroundImage:`url("https://xpresslenses.com/wp-content/uploads/2016/11/footer-background-1600x513.jpg")`}}>

        <Grid xs={6}  sx={{color:"white",textAlign:"centre"}}>
          <h4>About Us</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown printer
           took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
        </Grid>
        <Grid xs={6} sx={{color:"white",textAlign:"centre"}} >
         <h4>Contact us</h4>
         <h4><LocationOnIcon />{" "} Himayat Nagar, Hyderabad</h4>
         <h4><LocalPhoneIcon />{" "} +91 900000000</h4>
         <h4><EmailIcon />{" "}suppert@restaro.com</h4>
        </Grid>
      </Grid>

    </React.Fragment>
  
        </div>
     )
}