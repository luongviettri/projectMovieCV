/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../../Components/Buttons";
import Section from "../../../Components/Section/Section.styled";
import { Authorization } from "../../../Utils/Settings/config";
import { useDispatch } from "react-redux";
import { TicketSliceActions } from "../../../Redux/Slices/TicketSlice";

function Payment() {
  // require: maLichChieu, danhSachVe[ {maGhe,giaVe} ] trong state, bấm nút checkout sẽ call api đặt vé
  const dispatch = useDispatch();
  const handleCheckout = () => {
    dispatch(TicketSliceActions.DatVeAsyncAction());
  };
  return (
    <>
      <Section hasBG={{ small: "right", big: "top" }} final>
        {/* import NavPage */}
        <div className="flex h-full items-center justify-center">
          <form action="" className="my-10 rounded-lg  bg-gray-800 px-4 py-2">
            <div className="col-span-full space-y-2 text-center lg:col-span-1">
              <p className="py-2 text-2xl font-medium">Card Information</p>
              <p className="pb-4 text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!
              </p>
            </div>
            <fieldset className="grid grid-cols-2 gap-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">First name</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Last name</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">CardNUmber</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter cardnumber"
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">Secret</label>
                  <input
                    id="zip"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-sm">Address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full rounded-md focus:ring focus:ring-violet-400 focus:ring-opacity-75 dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
              </div>
            </fieldset>
            <Link to="/booking/success" onClick={handleCheckout}>
              <div className="flex justify-center">
                <Buttons.Glowing content="Checkout" className="mt-3" />
              </div>
            </Link>
          </form>
        </div>
      </Section>
    </>
  );
}

export default Payment;
