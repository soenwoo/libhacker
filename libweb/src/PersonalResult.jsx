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


export default function Explorer() {

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
                    <Typography sx={{ mt: 3, 
                        fontSize: '25px', 
                        fontWeight:'600',
                        color: 'black', 
                        bgcolor: 'balck', 
                        align:'center'}}>개인 맞춤 추천 서비스</Typography> 
                </Box>
                
              
                <Typography variant="body2" 
                            sx={{mt: 1, fontSize:'15px'}}>
                AI가 추천한 OOO님 맞춤 도서 목록입니다.</Typography>
                <br></br>
                <br></br>
                <Box sx={{display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                       }}>
                    <Typography>도서 | XX 건</Typography>
                    <AddIcon sx={{alignItems: 'center'}}></AddIcon>
                </Box>
                
                <HorizonLine />
                
                {/* 카드 */}
                <Card sx={{ height: '20vh' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                            <img src={book1} alt="book1" style={{width:80, height:110}}></img>
                            <Box sx={{display: 'flex',
                                ml:2,
                                flexDirection: 'column'}}>
                                <Typography variant="h6" 
                                            sx={{ mb: 1.5 }}>
                                책 먹는 여우
                                </Typography>
                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                글쓴이 | 프란치스카 비어만 출판사 | 주니어김영사
                                </Typography>

                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                #동화 #여우 #이솝우화 #교훈
                                </Typography>
                            </Box>
                            
                            <Box sx={{ mr: 2,
                                    alignItem: 'center',
                                    justifyContent: 'center',
                                   }}>
                                

                                <Typography sx={{color:'#00462A',
                                            fontSize:'25px',
                                            fontWeight:'600',
                                            textAlign:'right'}}>
                                대출 가능
                                </Typography>
                                <Typography sx={{color:'#00462A',
                                            fontSize:'20px',
                                            fontWeight:'600',
                                            textAlign:'right', mr: 1.7}}>
                                [비치중]
                                </Typography>

                                <br></br>
                                
                                <Box sx={{display: 'flex',flexDirection: 'row'}}>
                                    <span className="book" onClick={handleBook}
                                        style={{ margin: 3}}>
                                        {book ? (<AddCircleIcon sx={{fontSize:'small', color:'black'}}/>) : (<AddCircleOutlineIcon sx={{fontSize:'small'}}></AddCircleOutlineIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>도서예약신청</Typography>
                                    <span className="book" onClick={handleWait}
                                        style={{ margin: 3}}>
                                        {wait ? (<AccessTimeIcon sx={{fontSize:'small', color:'black'}}/>) : (<AccessTimeFilledIcon sx={{fontSize:'small'}}></AccessTimeFilledIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>상호대차신청</Typography>
                                    <span className="like" onClick={handleLike}
                                        style={{ margin: 3}}>
                                        {like ? (<FavoriteIcon sx={{fontSize:'small', color:'red'}}/>) : (<FavoriteBorderIcon sx={{fontSize:'small'}}></FavoriteBorderIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>관심도서담기</Typography>

                                </Box>
                            </Box>
                        </Box>
                        
                    </CardContent>
                </Card>
                <br></br>
                <Card sx={{ height: '20vh' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                            <img src={book1} alt="book1" style={{width:80, height:110}}></img>
                            <Box sx={{display: 'flex',
                                ml:2,
                                flexDirection: 'column'}}>
                                <Typography variant="h6" 
                                            sx={{ mb: 1.5 }}>
                                책 먹는 여우
                                </Typography>
                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                글쓴이 | 프란치스카 비어만 출판사 | 주니어김영사
                                </Typography>

                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                #동화 #여우 #이솝우화 #교훈
                                </Typography>
                            </Box>
                            
                            <Box sx={{ mr: 2,
                                    alignItem: 'center',
                                    justifyContent: 'center',
                                   }}>
                                

                                <Typography sx={{color:'#00462A',
                                            fontSize:'25px',
                                            fontWeight:'600',
                                            textAlign:'right'}}>
                                대출 가능
                                </Typography>
                                <Typography sx={{color:'#00462A',
                                            fontSize:'20px',
                                            fontWeight:'600',
                                            textAlign:'right', mr: 1.7}}>
                                [비치중]
                                </Typography>

                                <br></br>
                                
                                <Box sx={{display: 'flex',flexDirection: 'row'}}>
                                    <span className="book" onClick={handleBook}
                                        style={{ margin: 3}}>
                                        {book ? (<AddCircleIcon sx={{fontSize:'small', color:'black'}}/>) : (<AddCircleOutlineIcon sx={{fontSize:'small'}}></AddCircleOutlineIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>도서예약신청</Typography>
                                    <span className="book" onClick={handleWait}
                                        style={{ margin: 3}}>
                                        {wait ? (<AccessTimeIcon sx={{fontSize:'small', color:'black'}}/>) : (<AccessTimeFilledIcon sx={{fontSize:'small'}}></AccessTimeFilledIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>상호대차신청</Typography>
                                    <span className="like" onClick={handleLike}
                                        style={{ margin: 3}}>
                                        {like ? (<FavoriteIcon sx={{fontSize:'small', color:'red'}}/>) : (<FavoriteBorderIcon sx={{fontSize:'small'}}></FavoriteBorderIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>관심도서담기</Typography>

                                </Box>
                            </Box>
                        </Box>
                        
                    </CardContent>
                </Card>
                <br></br>
                <Card sx={{ height: '20vh' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between'}}>
                            <img src={book1} alt="book1" style={{width:80, height:110}}></img>
                            <Box sx={{display: 'flex',
                                ml:2,
                                flexDirection: 'column'}}>
                                <Typography variant="h6" 
                                            sx={{ mb: 1.5 }}>
                                책 먹는 여우
                                </Typography>
                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                글쓴이 | 프란치스카 비어만 출판사 | 주니어김영사
                                </Typography>

                                <Typography variant="body1" 
                                            sx={{ mb: 1.5 }}>
                                #동화 #여우 #이솝우화 #교훈
                                </Typography>
                            </Box>
                            
                            <Box sx={{ mr: 2,
                                    alignItem: 'center',
                                    justifyContent: 'center',
                                   }}>
                                

                                <Typography sx={{color:'#00462A',
                                            fontSize:'25px',
                                            fontWeight:'600',
                                            textAlign:'right'}}>
                                대출 가능
                                </Typography>
                                <Typography sx={{color:'#00462A',
                                            fontSize:'20px',
                                            fontWeight:'600',
                                            textAlign:'right', mr: 1.7}}>
                                [비치중]
                                </Typography>

                                <br></br>
                                
                                <Box sx={{display: 'flex',flexDirection: 'row'}}>
                                    <span className="book" onClick={handleBook}
                                        style={{ margin: 3}}>
                                        {book ? (<AddCircleIcon sx={{fontSize:'small', color:'black'}}/>) : (<AddCircleOutlineIcon sx={{fontSize:'small'}}></AddCircleOutlineIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>도서예약신청</Typography>
                                    <span className="book" onClick={handleWait}
                                        style={{ margin: 3}}>
                                        {wait ? (<AccessTimeIcon sx={{fontSize:'small', color:'black'}}/>) : (<AccessTimeFilledIcon sx={{fontSize:'small'}}></AccessTimeFilledIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>상호대차신청</Typography>
                                    <span className="like" onClick={handleLike}
                                        style={{ margin: 3}}>
                                        {like ? (<FavoriteIcon sx={{fontSize:'small', color:'red'}}/>) : (<FavoriteBorderIcon sx={{fontSize:'small'}}></FavoriteBorderIcon>)}
                                    </span>
                                    <Typography sx={{fontSize: '15px'}}>관심도서담기</Typography>

                                </Box>
                            </Box>
                        </Box>
                        
                    </CardContent>
                </Card>
                
                <br></br>
                <br></br>
                <br></br>

                <Box sx={{display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                       }}>
                    <Typography>멀티미디어 | 0 건</Typography>
                    <AddIcon sx={{alignItems: 'center'}}></AddIcon>
                </Box>
                
                <HorizonLine />
                
            </Box>
            

        </Box>

        
       



    
    </Container>
  );
}