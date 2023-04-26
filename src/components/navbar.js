// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import './css/navbar.css';

// function NavigationBar() {
//   return (
//     <div>
//       <div>
//             <div className="logo-head">
            
//                 <link href="https://fonts.googleapis.com/css2?family=Alice&display=swap" rel="stylesheet"></link>

//                 <div className="logo-main">
//                     <div className="logo-img">
//                         <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1673664349/AGRICOL/Agricol_logo_xrjeam.png"
//                         alt="logo-images" height={70} width={100}></img>
//                     </div>
//                     <div className="name-of-logo">
//                         <img src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1673975592/AGRICOL/coollogo_com-11870614_u0qiqj.png"  alt="Logo " height="80"></img>
//                     </div>
//                 </div>
//             </div>
//         </div>
// 		<div className='nav-main'>
// 		<Navbar className='navbar-head' collapseOnSelect expand="lg" bg="white" variant="black">
//       <Container>
//         {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Community</Nav.Link>
//             <Nav.Link href="#pricing">Weather</Nav.Link>
//             <NavDropdown title="Market" id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Market price</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Market news
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Market</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Customer support
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets">Crop Demand</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Farmer media
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

// 		</div>
// 	</div>
// 	  );
// }

// export default NavigationBar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { Image } from '@mui/icons-material';

// const pages = ['Community', 'Market', 'Weather','Customer Support'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <img href='https://res.cloudinary.com/dkmm9khbp/image/upload/v1673975592/AGRICOL/coollogo_com-11870614_u0qiqj.png'
//           alt='logo'></img>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <Image src="https://res.cloudinary.com/dkmm9khbp/image/upload/v1673975592/AGRICOL/coollogo_com-11870614_u0qiqj.png"></Image>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2.5, color: 'white', display: 'block',fontWeight:'700' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

// import React from 'react';
// import { Container, Row, Col, Card, Tab, Nav } from 'react-bootstrap';

// function Dashboard() {
//   return (
//     <Container>
//       <Row>
//         <Col xs={12} md={3}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Card Title</Card.Title>
//               <Card.Text>
//                 Some quick example text to build on the card title and make up the bulk of the card's content.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col xs={12} md={9}>
//           <Tab.Container id="dashboard-tabs" defaultActiveKey="#tab1">
//             <Row>
//               <Col xs={12} md={3}>
//                 <Nav variant="pills" className="flex-column">
//                   <Nav.Item>
//                     <Nav.Link href="#tab1">Tab 1</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#tab2">Tab 2</Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link href="#tab3">Tab 3</Nav.Link>
//                   </Nav.Item>
//                 </Nav>
//               </Col>
//               <Col xs={12} md={9}>
//                 <Tab.Content>
//                   <Tab.Pane eventKey="#tab1">
//                     <p>Tab 1 content goes here.</p>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="#tab2">
//                     <p>Tab 2 content goes here.</p>
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="#tab3">
//                     <p>Tab 3 content goes here.</p>
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Col>
//             </Row>
//           </Tab.Container>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Dashboard;

// import React, { useState } from 'react';

// function MenuBar() {
//   const [activeMenu, setActiveMenu] = useState('home');

//   const handleClick = (menu) => {
//     setActiveMenu(menu);
//   }

//   return (
//     <div>
//       <ul className="menu-bar">
//         <li className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</li>
//         <li className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>About</li>
//         <li className={activeMenu === 'services' ? 'active' : ''} onClick={() => handleClick('services')}>Services</li>
//         <li className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Contact</li>
//       </ul>
//     </div>
//   );
// }

// export default MenuBar;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import CropPlan from './CropPlan';
import Crop from './Crop';
import GetPlan from './getplan';
import './css/navbar.css';
import Avatar from './avatar';
function Navbar(props) {
  // const menu = ["Home","About_us","Community","Customer_Support"]
  // const link = ["1","1","1","1"]
  const menuse = [
    {
      page:"Home",
      link:"/"
    },
    {
      page:"About_us",
      link:"/b"
    },
    {
      page : "Community",
      link : "/c"
    },
    {
      page : "Customer_Support",
      link : "/d"
    },
    // {
    //   page : "Get Plan",
    //   link : "/ad"
    // }
  ]
  const menumap = menuse.map((props) => 
    <li className='nav-ele'><a className='nav-ele' href={props.link}>{props.page}</a></li>
    // <a href={props.link} ><li className='nav-ele'>{props.page}</li></a>
  )
  const size = {
    height : 75,
    width:105,
    // paddingTop:10
  }
  return (
    <>
      <div className='navbar'>
        <nav className='nav-main'>
          <div className='nav-left'>
          <img className='nav-img-1' style={size} src='https://res.cloudinary.com/duc6xzza7/image/upload/v1682430249/logo_b0q0ba.png'  alt='img'/>
          {/* <img className='nav-img-2' style={size} src='https://res.cloudinary.com/dkmm9khbp/image/upload/v1673975592/AGRICOL/coollogo_com-11870614_u0qiqj.png'  alt='img'/> */}
           {/* <h2 className='heading'>Agricol</h2> */}
          </div>
          <div className='nav-right'>
            <ul className='nav-list'>
              <div className='nav-ele-link'>{menumap}
              </div>
             
          
            </ul>
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default Navbar;
