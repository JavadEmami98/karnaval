'use client'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import { Button, Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

const Footer = () => {
  return (
    <div>
      <div className='container rounded-[30px] h-[500px] border-[#00000014] bg-white border-[1px] pr-12 pl-12 pt-12'>
        <div className='grid grid-cols-5'>
          <div className='col-span-1 border-l border-l-[#0000001f] px-3 pt-3'>
            <img src="https://cdn.karnaval.ir/img/logo-footer.svg" alt="" className='pr-9 max-h-[165px] max-w-[160px]'/>
            <ul className='mt-4 pr-[20px]'>
              <li className='flex'>
                <CircleIcon sx={{p:"9px",color:"#0000008A"}}/>
                <Typography sx={{color:"#0000008A",fontSize:"15px"}}>معرفی کسب و کارها</Typography>
              </li>
              <li className='flex'>
                <CircleIcon sx={{p:"9px",color:"#0000008A"}}/>
                <Typography sx={{color:"#0000008A",fontSize:"15px"}}>شــــرایط و ضـــوابط</Typography>
              </li>
              <li className='flex'>
                <CircleIcon sx={{p:"9px",color:"#0000008A"}}/>
                <Typography sx={{color:"#0000008A",fontSize:"15px"}}>دربــــــــــــــاره مــا</Typography>
              </li>
              <li className='flex'>
                <CircleIcon sx={{p:"9px",color:"#0000008A"}}/>
                <Typography sx={{color:"#0000008A",fontSize:"15px"}}>تـــــمــــاس بــا مــا</Typography>
              </li>
            </ul>
          </div>
          <div className='col-span-2 border-l border-l-[#0000001f] px-3 pt-3'>
            <Typography sx={{fontSize:"20px",mb:"8px"}}>اپلیکیشن کارناوال</Typography>
            <Typography sx={{px:"16px",mb:"8px"}}>با وب اپلیکیشن (PWA) کارناوال، کنترل سفر دست شماست.<br/>در این اپلیکیشن شما دنیایی از امکانات و خدمات را همیشه و همه جا در جیب خود دارید؛ آشنایی با 
            جاذبه‌های گردشگری، رزرو آنلاین بلیط هواپیما، رزرو هتل، ویلا و اقامتگاه بوم‌گردی، رزرو آنلاین تورهای داخلی و 
            خارجی و سایر خدمات توریستی گردشگری همه در اپلیکیشن کارناوال .</Typography>
            <div className="grid grid-cols-2">
              <div className='p-2'>
                  <Button sx={{height:"48px",p:"6px 16px",background:"#35b995 !important",color:"#fff",borderRadius:"30px",fontSize:"18px",width:"100% !important"}}>نصب اپلیکیشن</Button>
              </div>
              <div className='p-2'>
                  <Button sx={{height:"48px",p:"6px 16px",background:"#fff !important",color:"",border:"1px solid #0000001f",borderRadius:"30px",fontSize:"18px",width:"100% !important",}}>
                    <AppleIcon sx={{color:"black"}}/>IOS
                     </Button>
              </div>
          
            </div>
          </div>
          <div className='col-span-2'></div>
        </div>
      </div>
    </div>
  )
}

export default Footer