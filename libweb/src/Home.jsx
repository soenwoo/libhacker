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
import Item from '@mui/material/Icon';



//mui-icons
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

//images
import book1 from './assets/images/foxBook.jpeg';
import { textAlign } from '@mui/system';

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
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const HorizonLine = ({ text }) => {
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

export default function BookInfo() {

    const [like, setLike] = useState(false);
    const handleLike = () => {
        setLike(!like)
    }

    const [book, setBook] = useState(false);
    const handleBook = () => {
        setBook(!book)
    }

    const [wait, setWait] = useState(false);
    const handleWait = () => {
        setWait(!wait)
    }

    return (
    <Container sx="xl">
        <Box sx={{ flexGrow: 1, bgcolor: '#DFDFDF', height: '3.5vh'}}></Box>

        <Box sx={{ flexGrow: 1, bgcolor: 'white', height: '18vh'}}></Box>

        <Box sx={{ flexGrow: 1,}}>
        <AppBar position="static" sx={{bgcolor: '#00462A',alignItems: 'center'}}>
            <Toolbar>
              
              <Button color="inherit" sx={{pl: 5,pr:5, fontSize:'15px'}}>이용안내</Button>
              <Link to="/explorer" style={{ textDecoration: "none", color:'white' }}>
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

        

        
       



    
    </Container>
  );
}