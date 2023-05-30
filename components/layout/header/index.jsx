"use client";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
  return (
    <header>
      <Box
        sx={{
          backgroundImage: `url(https://media.karnaval.ir/uploads/2023/03/5e2bcb37-decd-4148-a616-2cff61fff026.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "90vh",
          minHeight:"750px"
        }}
      >
        <div className="container">
          <div className="flex justify-between px-6">
            <img src="https://cdn.karnaval.ir/img/logo2.svg" alt="" className="my-3 max-w-[190px]"/>
            <Box sx={{my:"20px"}}>
              <Tooltip title="جستجو در کارناوال">
              <Button variant="contained" sx={{height:"48px !important",width:"48px !important",background:"#444 !important",mr:"8px",borderRadius:"50%",}}>
               <SearchIcon/>
              </Button>
              </Tooltip>
              <Tooltip title="عکسخانه">
              <Button variant="contained" sx={{height:"48px",background:"#444 !important",mr:"8px",borderRadius:"50%",}}>
                <CameraAltIcon/>
              </Button>
              </Tooltip>
              <Tooltip title="سبد خرید">
              <Button variant="contained" sx={{height:"48px",background:"#444 !important",mr:"8px",borderRadius:"50%",}}>
                <ShoppingCartIcon/>
              </Button>
              </Tooltip>
              <Tooltip title="حساب کاربری">
              <Button variant="contained" sx={{height:"48px",width:"30px !important",background:"#444 !important",mr:"8px",borderRadius:"50%",}}>
                <span><PersonIcon/></span>
              </Button>
              </Tooltip>
            </Box>
          </div>
          <div className="grid grid-cols-7 gap-5">
            <div className="col-span-5 p-6 bg-[#00000087] rounded-[30px]">
              <div className="flex justify-center items-center flex-col w-full h-full">
                <div className="flex flex-col">
                <Typography sx={{pr:"4px", mb:"4px",fontSize:"32px",color:"#fff"}}>کجا می‌خوای بری؟</Typography>
                <div className="relative">
                    <input type="text" placeholder="جستجوی شهر، کشور، جاذبه‌ها و تفریحات، اقامتگاه و هتل ..." className="w-[560px] rounded-t-[30px] h-[52px] pr-4"/>
                    <div className="flex justify-center items-center absolute w-11 h-11 bg-[#ff6161] top-1 left-1 rounded-[50%]">
                      <SearchIcon sx={{color:"#fff",width:"32px",height:"32px"}}/>
                    </div>
                </div>
                <div className="py-[16px] px-[8px] bg-white rounded-b-[30px] border-l">
                    <div className="grid grid-cols-2">
                      <div className="border-l border-[#ccc]"> 
                          <Typography sx={{pr:"16px",mb:"8px",fontSize:"9px",color:"#0000008a"}}>شهرهای پرطرفدار داخلی</Typography>
                          <ul className="px-[8px]">
                            <div className="flex items-center">
                                <li className="py-[6px] h-9 w-full px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px] ">تهران</li>
                            </div>
                            <div className="flex">
                              <li className="py-[6px] px-[24px] w-full my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px]">اهواز</li>
                            </div>
                            <div className="flex">
                              <li className="py-[6px] px-[24px] w-full my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px]">شیراز</li>
                              </div>
                              <div className="flex">
                               <li className="py-[6px] px-[24px] w-full my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px]">مشهد</li>
                            </div>
                            <div className="flex">
                               <li className="py-[6px] px-[24px] w-full my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px]">کیش</li>
                              </div>
                              <div className="flex">
                               <li className="py-[6px] px-[24px] w-full my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px] text-[13px]">اصفهان</li>
                              </div>
                          </ul>
                      </div>
                    <div>
                    <Typography sx={{pr:"16px",mb:"8px",fontSize:"9px",color:"#0000008a"}}>شهرهای پرطرفدار خارجی</Typography>
                          <ul className="px-[8px]">
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">استانبول</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>ترکیه</Typography>
                            </div>
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">دبی</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>امارات متحده عربی</Typography>
                            </div>
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">تفلیس</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>گرجستان</Typography>
                            </div>
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">بانکوک</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>تایلند</Typography>
                            </div>
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">آنتالیا</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>ترکیه</Typography>
                            </div>
                            <div className="flex items-center py-[6px] px-[24px] my-1 hover:bg-[#0a0a0a12] cursor-pointer rounded-[30px]">
                                 <li className=" text-[13px]">باکو</li>
                                <ArrowBackIosIcon sx={{p:"8px", color:"#0000008a"}}/>
                                <Typography sx={{fontSize:"10px",color:"#0000008a"}}>جمهوری آذربایجان</Typography>
                            </div>
                          </ul>
                    </div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 p-6 bg-[#444] rounded-[30px]">
              <div className="flex pr-[4px] mb-3 text-base items-center">
                <div className="flex justify-center items-center text-white border-[2px] border-solid border-[#fff] rounded-[50%] bg-[#ff6161] w-[30px] h-[30px] ml-[4px]">1</div>
                <Typography sx={{fontSize:"16px",color:"#fff"}}>   
                کنترل سفر دست شماست!
              </Typography>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/icon.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>پرواز داخلی</Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/parvaz.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>پرواز خارجی</Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/hotel.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>هتل </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/villa.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>ویلا و اقامتگاه </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/didnani.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}> دیدنی و تفریح  </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white relative">
                    <div className="absolute px-[4px] bg-[#ff6161] text-[9px] rounded-md text-white top-[6px] right-[8px]">
                            بزودی   
                      </div>
                      <img src="images/totor.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}> تورِ تو  </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white relative">
                    <div className="absolute px-[4px] bg-[#ff6161] text-[9px] rounded-md text-white top-[6px] right-[8px]">
                            جدید   
                      </div>
                      <img src="images/tour.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}> تور مسافرتی  </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/blog.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>بلاگ</Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white relative">
                    
                      <img src="images/map.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}> نقشه و مسیر  </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/bus.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}> اتوبوس  </Typography>
                    </div>
                </div>
                <div className="p-[4px] ">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white">
                      <img src="images/viza.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>ویزا</Typography>
                    </div>
                </div>
                <div className="p-[4px]">
                    <div className="flex items-center justify-center flex-col p-[8px] h-20 rounded-2xl bg-white relative">
                      <div className="absolute px-[4px] bg-[#ff6161] text-[9px] rounded-md text-white top-[6px] right-[8px]">
                            بزودی   
                      </div>
                      <img src="images/bime.svg" alt="" className="w-[36px] mb-[6px]"/>
                      <Typography sx={{fontSize:"12px", color:"#000000de"}}>بیمه مسافرتی</Typography>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </header>
  );
};

export default Header;
