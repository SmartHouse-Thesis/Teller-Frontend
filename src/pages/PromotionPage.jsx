import { Icon } from '@iconify/react';
import productImg from '../../public/image/clother.png';
import user from '../../public/image/user.png';
import { Pagination } from '../components/Pagination';
import { BreadCrumb } from '../components/BreadCrumb';
import { SearchInput } from '../components/SearchInput';

export function PromotionPage() {
  const productArray = [
    {
      productName: 'X312378AVC',
      price: '30%',
      order: '62',
      amount: '510',
      status: 'Active',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      productName: 'X312378AVC',
      price: '30%',
      order: '62',
      amount: '510',
      status: 'Active',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      productName: 'X312378AVC',
      price: '30%',
      order: '62',
      amount: '510',
      status: 'Active',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      productName: 'X312378AVC',
      price: '30%',
      order: '62',
      amount: '510',
      status: 'Active',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
      productName: 'X312378AVC',
      price: '30%',
      order: '62',
      amount: '510',
      status: 'Active',
      published: '06 Jan, 2021, 01:31 PM',
    },
    {
        productName: 'X312378AVC',
        price: '30%',
        order: '62',
        amount: '510',
        status: 'Active',
        published: '06 Jan, 2021, 01:31 PM',
      },
      {
        productName: 'X312378AVC',
        price: '30%',
        order: '62',
        amount: '510',
        status: 'Active',
        published: '06 Jan, 2021, 01:31 PM',
      },
      {
        productName: 'X312378AVC',
        price: '30%',
        order: '62',
        amount: '510',
        status: 'Active',
        published: '06 Jan, 2021, 01:31 PM',
      },
      {
        productName: 'X312378AVC',
        price: '30%',
        order: '62',
        amount: '510',
        status: 'Active',
        published: '06 Jan, 2021, 01:31 PM',
      },
      {
        productName: 'X312378AVC',
        price: '30%',
        order: '62',
        amount: '510',
        status: 'Active',
        published: '06 Jan, 2021, 01:31 PM',
      },
      
  ];
  return (
    <>
      <BreadCrumb />
      <div className='px-[24px] pt-[24px]'>
        <div className='bg-[white]  pt-[13px] pb-[16px] '>
          <div className='flex items-center justify-between mx-[20px] mb-[20px] '>
            <span className='flex items-center justify-between bg-[#0AB39C] w-[131px] px-[15px] py-[10px] rounded-[4px]'>
              <Icon icon='ic:baseline-plus' style={{ color: 'white' }} />
              <button className='text-white font-poppin font-normal text-[13px]'>
                Add Product
              </button>
            </span>
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
                Promotion ID
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Percent
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Product
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Amount
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Vendor
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Status
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Rating
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Published
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Update
              </th>
              <th className='font-poppin font-semibold text-[13px] text-[#9599AD]'>
                Delete
              </th>
            </tr>
            {productArray.map((item) => (
              <tr className='border-t border-b border-[#E9EBEC]'>
                <td className='px-[41px] flex gap-[8px] pl-[14px] py-[20px] items-center'>
                  <div className='flex flex-col'>
                    <span className='font-poppin text-[14px] font-medium text-[#495057]'>
                      {item.productName}
                    </span>
                  </div>
                </td>
                <td className='px-[41px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.price}
                    </span>
                  </div>
                </td>
                <td className='px-[30px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.order}
                    </span>
                  </div>
                </td>
                <td className='px-[47px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.amount}
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
                    <span className='font-poppin text-[13px] font-normal text-[#9599AD]'>
                      Amount
                    </span>
                  </div>
                </td>
                <td className='px-[61px]'>
                  <div className=''>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.status}
                    </span>
                  </div>
                </td>
                <td className='pr-[41px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      {item.published}
                    </span>
                  </div>
                </td>
                <td className='px-[21px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      <Icon
                        icon='material-symbols:edit-outline'
                        className='w-[20px] h-[20px]'
                        style={{ color: '#405189' }}
                      />
                    </span>
                  </div>
                </td>
                <td className='px-[20px]'>
                  <div className='flex flex-col items-start'>
                    <span className='font-poppin text-[14px] font-medium'>
                      <Icon
                        icon='material-symbols:delete-outline'
                        className='w-[20px] h-[20px]'
                        style={{ color: '#F06548' }}
                      />
                    </span>
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
