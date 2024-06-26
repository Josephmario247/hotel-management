"use client";

import { Dispatch, FC, SetStateAction } from "react";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  checkinDate: Date | null;
  checkoutDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setNoOfChildren: Dispatch<SetStateAction<number>>;
  calcminCheckOutDate: () => Date | null;
  price: number;
  discount: number;
  adults: number;
  noOfchildren: number;
  specialNote: string;
  isBooked: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calcminCheckOutDate,
    setAdults,
    setNoOfChildren,
    adults,
    noOfchildren,
    isBooked,
    handleBookNowClick,
  } = props;

  const discountPrice = price - (price / 100) * discount;

  const calcNoOfDays = () => {
    if(!checkinDate || !checkoutDate) return 0;

    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();

    const noOFDays = Math.ceil(timeDiff /(24 * 60 * 60 * 1000))
    return noOFDays;
  }

  return (
    <div className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} font-bold text-lg`}
        >
          &#8358; {price.toLocaleString()}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            {" "}
            | Discount {discount}%. Now{" "}
            <span className="text-tertiary-Dark">&#8358; {discountPrice.toLocaleString()}</span>{" "}
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="w-full border-b-2 border-b-secondary my-2" />
      <h2 className="my-8">{specialNote}</h2>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="check-in-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check in Date
          </label>
          <Datepicker
            selected={checkinDate}
            onChange={(date) => setCheckinDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="check-out-date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check out Date
          </label>
          <Datepicker
            selected={checkoutDate}
            onChange={(date) => setCheckoutDate(date)}
            dateFormat="dd/MM/yyyy"
            disabled={!checkinDate}
            minDate={calcminCheckOutDate()}
            id="check-out-date"
            className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="adults"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Adults
          </label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(+e.target.value)}
            min={1}
            max={5}
            className="w-full border border-gray-300 rounded-lg p-2.5"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label
            htmlFor="children"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Children
          </label>
          <input
            type="number"
            id="children"
            value={noOfchildren}
            onChange={(e) => setNoOfChildren(+e.target.value)}
            min={0}
            max={3}
            className="w-full border border-gray-300 rounded-lg p-2.5"
          />
        </div>
      </div>
      {calcNoOfDays() > 0 ? <p className="mt-3 ">
        Total Price: &#8358; {calcNoOfDays() * discountPrice}
      </p> : <>  </>}

      <button disabled={isBooked} onClick={handleBookNowClick} className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"> {isBooked ? "BOOKED" : "BOOKED Now"}</button>
    </div> 
  );
};

export default BookRoomCta;
