import * as React from 'react';
import './App.css';
import {useState} from 'react';
import SingleComment from './SingleComment';
import Comments from './Comments';

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
import Paper from '@mui/material/Paper';
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

        <Box sx={{ flexGrow: 1, bgcolor: '#DFDFDF', height: '18vh'}}></Box>

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
              <Link to="../personal" style={{ textDecoration: "none", color:'white' }}>
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
                    <Typography sx={{ mt: 3, fontSize: '25px',
                                fontWeight:'600',
                                color: 'black', 
                                bgcolor: 'balck', 
                                align:'center'
                                }}>검색 서비스</Typography> 
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1,
                display: 'flex', 
                flexDirection: 'row'}}>
                    <img src={book1} alt="book1" style={{width:210, height:280}}></img>
                    <Box>
                        <Typography sx={{ml:3}}>표제/책임사항 아무도 모르니까 괜찮아/</Typography>
                        <Typography sx={{ml:3}}>길해연 글; 김미은 그림</Typography>
                        <Typography sx={{ml:3}}>발행사항 서울: 책먹는 여우, 2011</Typography>
                        <Typography sx={{ml:3}}>형태사항 33p; 삽화; 25cm</Typography>
                        <Typography sx={{ml:3}}>총서사항 문용린 교수님과 함께하는 정양용 책배소 이야기</Typography>
                        <Typography sx={{ml:3}}>주기사항 기획: 문용린</Typography>
                        <Typography sx={{ml:3}}>표준번호</Typography>
                        <Typography sx={{ml:3}}>분류기호 한국십진분류법: 199.4</Typography>
                        <Typography sx={{ml:3}}>도서관: 오도도서관</Typography>
                        <Typography sx={{ml:3}}>마크정보</Typography>

                        <br></br>
                        <Typography sx={{ml:3, fontWeight: 600,letterSpacing:2}}>키워드 #동화 #여우 #이솝우화 #교훈</Typography>
                    </Box>
                </Box>

                <Box display="flex" sx={{ height: '10vh'}} >
                    <Typography sx={{ mt: 5, fontSize: '20px',
                                fontWeight:'600',
                                color: 'black', 
                                bgcolor: 'balck', 
                                align:'center'
                                }}>상세정보</Typography> 
                   
                </Box>
                <Typography sx={{mt: 1}}>「정약용책배소 이야기」시리즈 '정직' 편 『아무도 모르니까 괜찮아』. 이 책은 ‘정직’에 대한 올바른 개념을 알려 주고, 일상생활
                에서 어떻게 정직을 실천할 수 있는지 알아보는 그림책이다. 아이들에게 흔하게 일어날 수 있는 도덕적 상황을 재미있는 그림과 이
                야기로 전개하고, 문용린 교수가 이야기 속 주인공들의 태도에 대해 설명하는 지도 내용이 포함되어 있어, 무엇이 진정한 ‘정직’이며,
                어떻게 해야 정직한 어른으로 성장할 수 있는지 쉽고 재미있게 알려... </Typography>

                <Box display="flex" sx={{ height: '10vh'}} >
                    <Typography sx={{ mt: 5, fontSize: '20px',
                                fontWeight:'600',
                                color: 'black', 
                                bgcolor: 'balck', 
                                align:'center'
                                }}>소장정보</Typography> 
                </Box>
                <Box display="flex" 
                    sx={{ border: '1px solid #DFDFDF',
                    borderRadius:'10px',
                    height: '20vh', mt:1}} >
                </Box>

                <Box display="flex" sx={{ height: '10vh'}} >
                    <Typography sx={{ mt: 5, fontSize: '20px',
                                fontWeight:'600',
                                color: 'black', 
                                bgcolor: 'balck', 
                                align:'center'
                                }}>댓글</Typography> 
                </Box>
                <Box display="flex" 
                    sx={{ border: '1px solid #DFDFDF',
                    borderRadius:'10px',
                    height: '20vh',
                    mt: 1}} >
                    <Comments/>
                </Box>

                <Box display="flex" sx={{ height: '10vh'}} >
                    <Typography sx={{ mt: 5, fontSize: '20px',
                                fontWeight:'600',
                                color: 'black', 
                                bgcolor: 'balck', 
                                align:'center'
                                }}>이 책과 비슷한 도서</Typography>
                </Box>
                <Box display="flex" 
                    sx={{ border: '1px solid #DFDFDF',
                    borderRadius:'10px',
                    height: '20vh', mt:1}} >
                </Box>
            
            </Box>
            
        </Box>

        
       

                            

    
    </Container>
  );
}