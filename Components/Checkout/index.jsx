import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardContent } from "@mui/material";
import { useRouter } from "next/router";

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

import useFetch from "../../hooks/useFetch";
import Icon from "../Icons/index";
import Modal from '../Modal'
import { toast } from "react-toastify";

const CheckoutComponent = () => {
    const router = useRouter()
   
    const createOrderDetails = useSelector((state) => state.order.createOrderData);
    const SSR = useSelector((state) => state.ssr.ssrData);
    const userData = useSelector(state => state.auth.user);
    const files = useSelector((state)=>state.order.uploads)
    
    const { access_token , user } = userData
    const { cat, subWithCat } = SSR;
    const { category_id, subject_id, deadline, number_of_pages, total , id } = createOrderDetails.data;
  
    const [couponShow, setCouponShow] = useState(false);
    const [ showModal , setShowModal ] = useState(false)
    const [ isCouponApplied , setIsCouponApplied ] = useState(false)
    const [ selectedCoupon , setSelectedCoupon ] = useState(null)
    const [ payMethod, setPayMethod ] = useState("");
    const [ transactionDetails , setTransactionDetails ] = useState(null)

    const Checkout = async() => {
      let finalPrice = isCouponApplied ? total - selectedCoupon.discount_price : total
      const form = new FormData()
      form.append('payment_gateway_type',payMethod)
      form.append('amount',finalPrice)
      form.append('paymentable_id' , id)
      const header = {
        "Accept" : "application/json",
        "Authorization" : `Bearer ${access_token}`
      }
      await useFetch('post' , 'order/generate-order-id' , form , header).then((res)=> {
        displayRazorpay(res.response.data.data)
      }).catch(err => {
        alert('Failed to generate orderid')
      })
    }

    const loadScript = (src)=> {
      return new Promise((resolve)=> {
        const script = document.createElement('script');
        script.src = src
        script.onload = ()=> {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
        document.body.appendChild(script)
      })
    }
    const displayRazorpay = async(order) => {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if(!res) {
        alert("RazorPay SDK failed!! Please check your Internet connection.");
        return
      }
      var options = {
        key: "rzp_test_GftRmSLKorTKdc",
        name: "Assignment Creator",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.payment_order_id, 
        handler: function (response){
          OrderCheckout(response)
          toast.success('Payment Successfull!!')
          router.push('/')
        }
      };
      var paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } 

    const OrderCheckout = async(razorpayResponse) => {
      let data = {
        transaction_id: razorpayResponse.razorpay_payment_id,
        payment_gateway_type: 'Razorpay',
        order_id: id,
        file: files
      }
      const header = {
        "Accept" : "application/json",
        "Authorization" : `Bearer ${access_token}`
      }
      await useFetch('post' , 'Order-Checkout' , data , header)
    }

  return (
    <div className="flex justify-center my-8 items-center">
        <Card className="w-[100%] lg:w-[50%] md:w-[80%] h-auto border shadow-2xl rounded-lg p-8">
          <CardContent>
            <div>
              <div className="flex flex-col justify-around gap-6 items-center text-2xl text-center">
                <span className="tracking-wider text-3xl">Order Summary</span>
                <ul className="flex flex-col justify-start items-center w-full gap-3">
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Service:
                    </span>
                    {cat.data.map(
                      (item, key) =>
                        item.id == category_id && (
                          <span key={key} className="text-base ">{item.name}</span>
                        )
                    )}
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Subject:
                    </span>
                    {subWithCat.data.map(
                      (item) =>
                        item.id == subject_id && (
                          <span className="text-base ">{item.name}</span>
                        )
                    )}
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Pages:
                    </span>
                    <span className="text-base">{number_of_pages}</span>
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Deadline:
                    </span>
                    <span className="text-base">{deadline}</span>
                  </li>
                 
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Subtotal:
                    </span>
                    <span className="text-base">${total/100}</span>
                  </li>
                </ul>
              </div>

              <div className="mb-4 mt-6">
                <Divider />
              </div>

              <div className="flex justify-between mt-6 mb-4">
                <div className="flex justify-between items-center gap-2 font-medium text-xl">
                  <Icon.Coupon /> Apply Coupon
                </div>
                <div>
                  <button className=" font-medium bg-slate-100  text-primary-dark rounded-md py-1.5 px-2 hover:scale-95 transition-all ease-linear hover:ring-2" onClick={() => {
                    setShowModal(true)
                  }}>
                    Get Coupons
                  </button>
                </div>
              </div>

              <div className="mt-3">
                {couponShow ? (
                  <p className="text-gray-400 font-bold text-lg">
                    Empty Coupons
                  </p>
                ) : (
                  <Modal.Coupon setShowModal={setShowModal} showModal={showModal} setSelectedCoupon={setSelectedCoupon} setIsCouponApplied={setIsCouponApplied}/>
                )}
              </div>
              <ul className="flex flex-col justify-start items-center w-full gap-3">
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Applied Coupon:
                    </span>
                    <span className="text-base tracking-tight">{selectedCoupon ? selectedCoupon.coupon_detail.code : 'No Coupon Applied'}</span>
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Discount:
                    </span>
                    <span className="text-base tracking-tight">{selectedCoupon ? selectedCoupon.discount_price : 'Select coupon to avail discount'}</span>
                  </li>
                  <li className="flex flex-row w-full justify-between items-center">
                    <span className="tracking-wide text-base font-bold">
                      Total:
                    </span>
                    <span className="text-base">{selectedCoupon ? <div>
                      <span>
                        ${total/100 - selectedCoupon.discount_price} <span className="line-through">${total/100}</span>
                      </span>
                    </div> : <span>${total/100}</span>}</span>
                  </li>
                </ul>
              
                <div className="mt-3 font-medium">
                Payment mothods:
                <div className="mt-3 flex items-center gap-4">
                  <div>
                    <input
                      type="radio"
                      name="paypal"
                      checked={payMethod == "Razorpay"}
                      onClick={() => setPayMethod("Razorpay")}
                    />
                    <label className="ml-2 font-normal"> Razor pay </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="razor"
                      checked={payMethod == "Paypal"}
                      onClick={() => setPayMethod("Paypal")}
                    />
                    <label className="ml-2 font-normal"> PayPal </label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button className="text-white bg-primary-dark border-2 p-4 w-full font-medium text-lg border-slate-700 rounded-md " onClick={()=>Checkout()}>
                  Check out
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}

export default CheckoutComponent 