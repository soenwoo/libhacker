import * as React from 'react';
import './App.css';
import {useState} from 'react';
import BasicMenu from './BasicMenu';
import BasicList from './BasicList';
import MenuListComposition from './MenuListComposition';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {Link} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendTheme,
  } from '@mui/material/styles';


//mui-icons
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//images
import announce from './assets/images/Home/announce.png';
import calender from './assets/images/Home/calender.png'
import book_1 from './assets/images/Home/book_1.jpg';
import book_2 from './assets/images/Home/book_2.jpg';
import book_3 from './assets/images/Home/book_3.jpg';
import culture_1 from './assets/images/Home/culture_1.png';
import culture_2 from './assets/images/Home/culture_2.png';
import culture_3 from './assets/images/Home/culture_3.png';
import participate_1 from './assets/images/Home/participate_1.png';
import participate_2 from './assets/images/Home/participate_2.png';
import photonews_1 from './assets/images/Home/photonews_1.png';
import photonews_2 from './assets/images/Home/photonews_2.png';
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
      paddingLeft: `calc(1em + ${theme.spacing(13)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const theme = extendTheme({
    colorSchemes: {
        light: {
          palette: {
            // The best part is that you can refer to the variables wherever you like 🤩
            gradient:
              'linear-gradient(to left, var(--mui-palete-primary-main), var(--mui-palette-primary-dark))',
            border: {
              subtle: 'var(--mui-palette-neutral-200)',
            },
          },
        },
        dark: {
          palette: {
            gradient:
              'linear-gradient(to left, var(--mui-palete-primary-light), var(--mui-palette-primary-main))',
            border: {
              subtle: 'var(--mui-palette-neutral-600)',
            },
          },
        },
      },
  });

export default function Home2(){

    return (
    <Container sx="xl">
        <Box sx={{ flexGrow: 1, height: '18vh'}}>
            <Box  sx={{ display: 'flex', flexGrow: 1, bgcolor: '#EFEFEF',
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
            
        <Box sx={{ flexGrow: 1, height:'25vh',bgcolor: '#C5F3E1'}}>

            <Box theme={theme} sx={{ display: 'flex', flexGrow: 1, fileDirextion: 'row', justifyContent:'center' }}>
                <Box sx={{display: 'flex',  mr:  5, mt: 5, mb:2, fileDirection: "row", alignItems:'center'}}>
                    <Typography sx={{fontSize: 18}}>나만의 도서를 추천받고 싶다면?</Typography>
                    <Button variant="contained" size="small" sx={{backgroundColor: '#00462A',ml:2}}>
                    Go →</Button>
                </Box>
            </Box>
            {/* 추후 수정,,, */}
            <Search sx={{border: '1px solid #00462A', width: '50vw', 
                    borderRadius: '30px', bgcolor: 'white'}}>
                        <SearchIconWrapper>
                            <BasicMenu></BasicMenu>
                        </SearchIconWrapper>
                        
                        <StyledInputBase
                            placeholder="Search..."
                            inputProps={{ 'aria-label': 'search' }}>
                        </StyledInputBase>
            </Search>

            <Box sx={{ display: 'flex', flexGrow: 1, fileDirextion: 'row', mt:1 }}>
            <Typography sx={{letterSpacing: 1, ml: 4, mr:4, fontSize:13, fontWeight:600}}>
              인기 검색어 
            </Typography>
            <Typography sx={{letterSpacing: 1, mr:3, fontSize:13}}>
              흔한남매  
            </Typography>
            <Typography sx={{letterSpacing: 1, mr:3, fontSize:13}}>
              #로맨스소설 
            </Typography>
            <Typography sx={{letterSpacing: 1, mr:3, fontSize:13}}>
              수학도둑
            </Typography>
            <Typography sx={{letterSpacing: 1, mr:3, fontSize:13}}>
              불편한 편의점
            </Typography>
            </Box>

        </Box>

        {/* 두번째 단락 */}
        <Box sx={{ flexGrow: 1, bgcolor:'white', height:'25vh'}}>

          <Typography sx={{letterSpacing: 3, ml:15,mt:3, mb: 5}}>
              <Typography sx={{fontSize:20}}>자주 이용하는 메뉴</Typography>
            </Typography>

          <Box sx={{ display: 'flex', flexGrow: 1 , mt: 6}}>
            <Grid container>
              <Grid item xs="2">
                <Box></Box>
              </Grid>
              <Grid item xs="1.6">
                <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                <MenuBookIcon/> 
                <Typography>대출/예약안내</Typography>
                </Box>
              </Grid>
              <Grid item xs="1.6">
                <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center', size:'large'}}>
                    <LocalShippingIcon/>
                    <Typography>상호대차</Typography>
                </Box>
              </Grid>
              <Grid item xs="1.6">
                <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                    <AccountBalanceIcon/>
                    <Typography>도서관 방문 예약</Typography>
                </Box>
              </Grid>
              <Grid item xs="1.6">
                <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                    <BookmarkAddedIcon/>
                    <Typography>희망도서 선택</Typography>
                </Box>
              </Grid>
              <Grid item xs="1.6">
                <Box sx={{ display:'flex', flexDirection: 'column', alignItems:'center' }}>
                    <DateRangeIcon/>
                    <Typography>문화행사신청</Typography>
                </Box>
              </Grid>
              <Grid item xs="2">
                <Box></Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* /세 번째 단락 */}
        <Box sx={{ display: 'flex', flexGrow: 1, bgcolor:'#EFEFEF', 
            height:'56vh',flexDirection: 'row', justifyContent: 'center'  }}>
            
            <Box sx={{ ml:5,mt:7,display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{mb:2,display:'flex', flexDirection:'row',fontSize: 20}}> 도서관 일정
              <AddIcon sx={{ml:25}}/></Typography>
              <img src={calender} alt="calender" style={{width:300, height:250}}/>     
            </Box>
            
            <Box sx={{ ml:5,mt:4,display:'flex', flexDirection:'column'}}>
                <Typography sx={{display:'flex', flexDirection:'row', fontSize: 20}}> 참여신청
                <AddIcon sx={{ml:50}}/></Typography>
                <Box sx={{ml:5,mt:2, display: 'flex', fileDirection: 'row', mb:3}}>
                <img src={participate_1} alt="p1" style={{width:190, height:80 }}/>
                <Box sx={{width:10,}}></Box>
                <img src={participate_2} alt="p2" style={{width:190, height:80}}/>
                </Box>

                <Typography sx={{display:'flex', flexDirection:'row', fontSize: 20}}> 문화행사
                  <AddIcon sx={{ml:50}}/></Typography>
                  <Box sx={{ mt:2,display: 'flex', flexDirection: 'row'}}>
                  <img src={culture_1} alt="c1" style={{width:150, height:130}}/>
                  <Box sx={{width:10,}}></Box>
                  <img src={culture_2} alt="c2" style={{width:150, height:130}}/>
                  <Box sx={{width:10,}}></Box>
                  <img src={culture_3} alt="c3" style={{width:150, height:130}}/>
                  </Box>
            </Box>         
        </Box>

        {/* /네 번째 단락 */}
        <Box sx={{ flexGrow: 1, bgcolor:'white', height:'25vh', bgcolor:'yellow'}}>

          <Typography sx={{letterSpacing: 3, ml:15, mt:5, mb:3, fontSize:20}}>추천 도서</Typography>
          <MenuListComposition />

          <Box sx={{ display: 'flex', flexGrow: 1, fileDirextion: 'row' , ml: 50, mt:20}}>
            <img src={book_1} alt="b1" style={{width:200, height:300}}/>
            <img src={book_2} alt="b2" style={{width:200, height:300}}/>
            <img src={book_3} alt="b3" style={{width:200, height:300}}/>
          </Box>
        </Box>

        {/* 다섯번째 단락 */}
         {/* <Box sx={{ flexGrow: 1, bgcolor:'#F0F0F0', height:'25vh'}}>

          <Box sx={{ display: 'flex', flexGrow: 1, fileDirextion: 'row' }}>
            <Typography sx={{letterSpacing: 3, ml:25, mr: 30, mt:5}}>
              <h1>공지사항</h1>
            </Typography>
            <AddIcon/>
            <Typography sx={{letterSpacing: 3, ml:7, mr: 30, mt:5}}>
              <h1>포토 뉴스</h1>
            </Typography>
            <AddIcon/>
          </Box>

          <Box sx={{ display: 'flex', flexGrow: 1, fileDirextion: 'row' }}>
            <img src={announce} alt="a"/>
            <img src={photonews_1} alt="p1"/>
            <img src={photonews_2} alt="p2"/>
          </Box>
          
        </Box> */}
    </Container>
    
                    
    );
}