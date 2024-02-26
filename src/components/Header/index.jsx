import { Icon } from '@iconify/react';
import usa_flag from '../../../public/image/flag_usa.png'
import avatar from '../../../public/image/user.png'
import { BreadCrumb } from '../BreadCrumb';
import { SearchInput } from '../SearchInput';
export function MainHeader() {
  return (
    <>
      <div className='h-[70px] bg-white border-b border-[#F3F3F9] flex items-center justify-between'>
        <div className='pl-[27px] pr-[24px] flex items-center justify-between w-full'>
        <SearchInput />
          <div className='flex items-center gap-[24px]'>
            <img src={usa_flag} alt="" />
            <div className='flex gap-[13px] bg-[#F3F3F9] py-[16px] px-[15px]'>
                <img src={avatar} alt="" className='w-[32px] h-[32px] rounded-[100%]'/>
                <div className='flex flex-col'>
                    <span className='font-poppin font-normal text-[13px] text-[#212529]'>Anna Adame</span>
                    <span className='font-poppin font-normal text-[12px] text-[#9599AD]'>Founder</span>
                </div>
            </div>
          </div>
        </div>
        
      </div>
  
    </>
  );
}
