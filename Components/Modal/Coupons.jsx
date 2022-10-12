import { Fragment, useRef, useEffect , useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import Divider from "@mui/material/Divider";

import useFetch from "../../hooks/useFetch";
import { http } from "../../public/utils/Http";
import styles from "../../styles/Home.module.css";

export default function Coupon({ showModal, setShowModal , setSelectedCoupon , setIsCouponApplied }) {
  const createOrderDetails = useSelector((state) => state.order.createOrderData);
  const userData = useSelector(state => state.auth.user)
  
  const cancelButtonRef = useRef(null);
  
  const { access_token , user } = userData
  const { id } = createOrderDetails.data;

  const [ coupons , setCoupons ] = useState([])
  const [ isLoading , setIsLoading ] = useState(false)
  const [ appliedCoupon , setAppliedCoupon ] = useState(null)

  const GetCoupons = async() => {
      await http.get('coupons').then(response => {
        setCoupons(response.data)
      })
  }

  const ApplyCoupon = async(coupon) => {
    setIsLoading(true)
    const data = {
      coupon_id: coupon.id,
      order_id: id
    }
    try{
      const res = await http.post('Apply-Coupon', data)
      setIsCouponApplied(true)
      setIsLoading(false)
      setSelectedCoupon(res.data.data)
      setShowModal(false)
    } catch(error) {
      setIsLoading(false)
      toast.error('Coupon not applied')
      setShowModal(false)
    }
  }

  useEffect(() => {
    GetCoupons()
  },[])

  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto w-full">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className={`relative md:top-10 transform overflow-hidden rounded-lg bg-gray-50 text-left shadow-xl transition-all sm:my-8 w-[80vw] md:max-w-xl max-h-[50vh] overflow-y-auto ${styles.customScroll}`}>
                <div className="p-2">
                  <div className="font-medium text-center text-lg flex justify-center items-center h-full w-full">
                    <span>Select Coupon</span>
                  </div>
                  <div className="my-4">
                    <Divider />
                  </div>
                  <ul className={`flex flex-col justify-start items-center p-3 gap-y-3 `}>
                    {coupons.map((item, index) => (
                      <li className="flex flex-col justify-between w-full shadow-md rounded-md p-3 gap-3 bg-white" key={index}>
                        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center p-2 gap-3 h-full">
                          <div className="col-span-2 h-full flex justify-center items-center">
                            {item.type == 'Amount' ? <div>
                              <span className="text-lg text-gray-600">Flat <strong>${item.amount}</strong> off on Minimum purchase of {item.min_purchase_amount}</span>                            
                            </div> : <div>
                              <span className="text-lg text-gray-600 ">Discount of <strong>{item.amount}</strong>% on Minimum purchase of {item.min_purchase_amount} upto {item.min_purchase_amount}</span>                            
                            </div>}
                          </div>
                          <div className="flex justify-start md:justify-end">
                            <span className="font-medium text-primary tracking-wide">{item.code}</span>
                          </div>
                        </div>
                        <div className="w-full flex justify-between items-center p-2">
                          <div className="flex flex-row items-center justify-center gap-1">
                            <span className="text-primary font-medium">Expires: </span>
                            <span className="text-normal text-gray-600">{item.ended_at}</span>
                          </div>
                          <button className="shadow hover:text-dark font-medium py-1.5 px-3 text-sm rounded-md bg-primary-dark text-white hover:bg-gray-200 transition-all ease-linear hover:scale-95 duration-300" onClick={()=>{
                            ApplyCoupon(item)
                            setAppliedCoupon(index)
                          }}>
                            {isLoading && appliedCoupon == index ? 'Applying' : 'Apply'}
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
