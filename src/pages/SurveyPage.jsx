import { Icon } from '@iconify/react';
import productImg from '../../public/image/clother.png';
import user from '../../public/image/user.png';
import { Pagination } from '../components/Pagination';
import { BreadCrumb } from '../components/BreadCrumb';
import { SearchInput } from '../components/SearchInput';
import { Link } from 'react-router-dom';

export function SurveyPage() {
    const productArray = [
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
        {
          constructionId: 'CT1239718245',
          customer: 'Elvin Dang',
          order: '62',
          amount: '510',
          status: 'Paid',
          published: '06 Jan, 2021, 01:31 PM',
        },
      ];
  return (
    <>
      <BreadCrumb />
      <div className='px-[24px] pt-[24px]'>
        <div className='bg-[white]  pt-[13px] pb-[16px] '>
          <div className='flex items-center justify-between mx-[20px] mb-[20px] '>
            <SearchInput />
          </div>
          <div className='flex items-center justify-between px-[14px] mb-[15px]'>
            <span className='text-[#495057] font-poppin font-medium text-[16px]'>
              Product
            </span>
          </div>
          <table>
            <tr>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Mã
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Tên khách hàng
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Tên gói
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Ngày
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Người thi công
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Thành tiền
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Trạng thái
              </th>
            </tr>
            {productArray.map((item) => (
              <tr className='border-t border-b border-[#E9EBEC] '>
                <td className='px-[40px] flex gap-[8px] py-[20px] items-center'>
                  <div className='flex flex-col'>
                    <span className='font-poppin text-[14px] font-medium text-[#495057]'>
                      {item.constructionId}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'></span>
                  </div>
                </td>
                <td className='px-[20px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.customer}
                    </span>
                  </div>
                </td>
                <td className='px-[36px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      Gói sửa chữa nhà cửa
                    </span>
                  </div>
                </td>
                <td className='px-[47px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      January 3th , 2014
                    </span>
                  </div>
                </td>
                <td className='px-[36px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      Trần Ninh Bình An
                    </span>
                  </div>
                </td>
                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      Amount
                    </span>
                  </div>
                </td>

                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                    <Link to="/survey/create-survey" className='font-poppin text-[13px] font-normal text-emerald-800 inline-block py-[10px] px-[20px] bg-green-500'>
                      Tạo hợp đồng
                    </Link >
                  </div>
                </td>
              </tr>
            ))}
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
}
