import * as React from 'react';
import './App.css';
import {useState} from 'react';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';


//mui-icons
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

//images
import book1 from './assets/images/foxBook.jpeg';
import PersonalImage from './assets/images/PersonalImage.png';
import { textAlign } from '@mui/system';
import libLogo from './assets/images/libLogo.png';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

  const HorizonLine = () => {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          borderBottom: "1px solid #aaa",
          lineHeight: "0.1em",
          margin: "10px 0 20px",
        }}
      >
      </div>
    );
  };


export default function Explorer() {

    const onClick = () => {
      window.open('../personalresult');
    }

    const onKeyPress = (e) => {
      if(e.key == 'Enter'){
        onClick();
      }
    }

    return (
    <Container sx="xl">

        <Box sx={{ flexGrow: 1, height: '18vh'}}>
            <Box  sx={{ display: 'flex', flexGrow: 1, bgcolor: '#DFDFDF',
                    height: '3vh', justifyContent: 'flex-end'}}>
                <Box sx={{ display: 'flex',
                    fileDirection: "row",
                    }}>
                    <Typography sx={{mr: 2,p: 0.5,fontSize: '10px', letterSpacing: 1, fontWeight: 300}}>login | 회원가입 | 내서재 | ENGLISH</Typography>
                </Box>
            </Box>
            <Link to="/" style={{ textDecoration: "none", color:'white' }}>
                <img src={libLogo} alt="logo" style={{width:300, height:100}}></img>
            </Link>
        </Box>

        <Box sx={{ flexGrow: 1,}}>
        <AppBar position="static" sx={{bgcolor: '#00462A',alignItems: 'center'}}>
            <Toolbar>
            <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>이용안내</Button>
              <Link to="../explorer" style={{ textDecoration: "none", color:'white' }}>
                <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>자료검색</Button>
              </Link>
                <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>문화행사</Button>
                <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>신청•참가</Button>
                <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>도서관소식</Button>
              <Link to="/personal" style={{ textDecoration: "none", color:'white' }}>
                <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>나만의 도서관</Button>
              </Link>
            </Toolbar>
        </AppBar>
        </Box>
        
        <br></br>
        <br></br>

        <Box display="flex"
            sx={{fileDirection: 'row'}}>
            <Box display="flex"
                alignItems="flex-start"
                sx={{ flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    bgcolor: '#00462A', 
                    width:'20vh', height: '15vh'}}>
                    <Typography sx={{ mt: 5, fontSize: '20px', 
                                fontWeight: 600,
                                color: 'white', 
                                bgcolor: 'balck',
                                textAlign:'center'}}>자료 검색</Typography>
                </Box>
                <Box sx={{ bgcolor:'#DFDFDF',
                        width:'20vh', height: '30vh', pt:2
                        }}>
                    <Typography sx={{p:1, fontSize:'15px',fontWeight: 600, textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                    <Typography sx={{p:0.5, fontSize:'15px', textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                    <Typography sx={{p:0.5, fontSize:'15px', textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                    <Typography sx={{p:0.5, fontSize:'15px', textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                    <Typography sx={{p:0.5, fontSize:'15px', textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                    <Typography sx={{p:0.5, fontSize:'15px', textAlign:'center'}}>
                        자료 검색 내 소메뉴</Typography>
                   
                </Box>
            </Box>

            <Box sx={{ flexGrow: 1,
                display: 'flex', 
                flexDirection: 'column', 
                m:4,
                }}>
                <Box display="flex" sx={{ height: '10vh'}} >
                    <Typography sx={{ mt:2, ml:1,
                        fontSize: '25px', 
                        fontWeight:'600',
                        color: 'black', 
                        bgcolor: 'balck', 
                        align:'center'}}>개인 맞춤 추천 서비스</Typography> 
                </Box>
                
              
                <Typography variant="body2" 
                            sx={{mt: 1, ml:1,fontSize:'15px'}}>
                AI 추천을 위해 회원카드의 바코드를 찍어주세요. </Typography>
                <br></br>
                <br></br>
                <Search sx={{border: '1px solid #00462A', width: '50vw', borderRadius: '30px'}}>
                        <SearchIconWrapper>
                        <QrCodeScannerIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Scan Your ID Card Barcode..."
                        inputProps={{ 'aria-label': 'search' }}
                        />
                        <input value='' onKeyPress={onKeyPress} style={{border: '4px solid white'}}/>
                        <button onClick={onClick} style={{color: 'white',backgroundColor: 'white', border: '4px solid white'}}>추가</button>
                </Search>
                
                
            </Box>

            <Box sx={{flexGrow: 1, display: 'flex', }}>
                 <img src={PersonalImage} alt="PersonalImage" style={{width:200, height:280}}></img>     
            </Box>
          </Box>

    </Container>
    );
   }