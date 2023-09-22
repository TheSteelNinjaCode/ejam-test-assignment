import React from "react";
import {
  AngleLeftIcon,
  AngleRightIcon,
  ClarifionIcon,
  McAfreeIcon,
  NortonIcon,
  OutlinedNumber4Icon,
  RoundedCheckIcon,
  RoundedNumber3Icon,
  StartBurstIcon,
} from "../assets/icons";
import Image from "next/image";
import OfferImage from "../assets/offer.png";

export default function MobileV1() {
  return (
    <main className="min-w-[360px]">
      <header className="w-[360px] h-[102px] space-y-5 bg-[#FFFFFF] flex flex-col items-center pb-5">
        <div className="bg-[#252F3D] w-[360px] h-[42px] flex justify-between items-center py-[10px] px-5">
          <AngleLeftIcon />
          <StartBurstIcon />
          <p className="text-[#FFFFFF] font-medium text-xs">
            30-DAY SATISFACTION GUARANTEE
          </p>
          <AngleRightIcon />
        </div>
        <div className="flex justify-between w-[320px] h-[20px]">
          <div>
            <ClarifionIcon />
          </div>
          <div className="flex gap-4">
            <McAfreeIcon />
            <NortonIcon />
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-6">
        <div className="w-[320px] h-[104px] gap-6">
          <h1 className="text-[32px] text-center">
            Wait ! your order in progress.
          </h1>
          <h2 className="text-center">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 w-[320px] h-[37px]">
            <p className="flex flex-col text-xs gap-2 items-center">
              <RoundedCheckIcon />
              Cart Review
            </p>
            <p className="flex flex-col text-xs gap-2 items-center">
              <RoundedCheckIcon />
              Checkout
            </p>
            <p className="flex flex-col text-xs gap-2 items-center">
              <RoundedNumber3Icon />
              <span className="font-bold">Special Offer</span>
            </p>
            <p className="flex flex-col text-xs gap-2 items-center">
              <OutlinedNumber4Icon />
              Confirmation
            </p>
          </div>
        </div>
        <div className="w-[320px] h-[85px]">
          <h2 className="text-2xl">
            <span className="text-[#2C7EF8]">ONE TIME ONLY</span> special price
            for 6 extra Clarifion for only
            <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
          </h2>
        </div>
        <figure>
          <Image src={OfferImage} width={320} height={320} alt="offer image" />
        </figure>
      </div>
    </main>
  );
}
