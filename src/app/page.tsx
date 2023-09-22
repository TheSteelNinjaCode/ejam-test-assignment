import Image from "next/image";
import {
  AmexCardIcon,
  AngleLeftIcon,
  AngleRightIcon,
  ApplePayCardIcon,
  ArrowRightIcon,
  CheckIcon,
  ClarifionIcon,
  DeliveryIcon,
  GooglePayCardIcon,
  HeartIcon,
  LockGreyIcon,
  LockWhiteIcon,
  MasterCardIcon,
  McAfreeIcon,
  NortonIcon,
  OutlinedNumber4Icon,
  OvalCheckIcon,
  PayCardIcon,
  PayPalCardIcon,
  RecursiveUpdateIcon,
  RoundedCheckIcon,
  RoundedNumber3Icon,
  RoundedPercentageIcon,
  StarsIcon,
  StartBurstIcon,
  VisaCardIcon,
} from "./assets/icons";
import OfferImage from "./assets/offer.png";
import DeviceImage from "./assets/device.png";
import GuaranteeImage from "./assets/guarantee.png";
import KenImage from "./assets/ken.png";

export default function Home() {
  return (
    <main className="max-w-[360px] mx-auto flex flex-col gap-8 text-base font-normal 2xl:max-w-full 2xl:gap-0">
      <header className="w-full gap-5 flex flex-col items-center justify-center pb-5">
        <div className="bg-[#252F3D] h-[42px] flex justify-between items-center py-[10px] px-5 w-full 2xl:hidden">
          <AngleLeftIcon />
          <div className="flex items-center gap-2">
            <StartBurstIcon />
            <span className="text-[#FFFFFF] font-medium text-xs">
              30-DAY SATISFACTION GUARANTEE
            </span>
          </div>
          <AngleRightIcon />
        </div>
        <div className="bg-[#252F3D] h-[50px] hidden 2xl:flex justify-between items-center py-[10px] px-32 w-full">
          <AngleLeftIcon className="2xl:hidden" />
          <div className="flex items-center gap-2">
            <StartBurstIcon />
            <span className="text-[#FFFFFF] font-medium text-xs">
              30-DAY SATISFACTION GUARANTEE
            </span>
          </div>
          <div className="hidden 2xl:flex items-center gap-2">
            <DeliveryIcon />
            <span className="text-[#FFFFFF] font-medium text-xs">
              Free delivery on orders over $40.00
            </span>
          </div>
          <div className="hidden 2xl:flex items-center gap-2">
            <HeartIcon />
            <span className="text-[#FFFFFF] font-medium text-xs">
              100% Money Back Guarantee
            </span>
          </div>
          <div className="hidden 2xl:flex items-center gap-2">
            <RecursiveUpdateIcon />
            <span className="text-[#FFFFFF] font-medium text-xs">
              30-DAY SATISFACTION GUARANTEE
            </span>
          </div>
          <AngleRightIcon className="2xl:hidden" />
        </div>
        <div className="flex justify-between w-[320px] 2xl:py-10 2xl:px-[127px] 2xl:w-full">
          <div>
            <ClarifionIcon className="w-[106.67px] 2xl:w-[192px]" />
          </div>
          <div className="flex gap-4 items-center 2xl:gap-8">
            <McAfreeIcon className="w-11 2xl:w-[88px]" />
            <NortonIcon className="w-[41px] 2xl:w-[88px]" />
          </div>
        </div>
      </header>
      <section className="flex flex-col gap-6 px-5 2xl:px-32 2xl:gap-0 2xl:w-[1245px] mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-[32px] leading-normal 2xl:text-5xl">
            Wait ! your order in progress.
          </h1>
          <h2 className="text-[#4D5254] 2xl:text-2xl">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
        </div>
        <ul className="grid grid-cols-4 text-xs 2xl:text-[20px] 2xl:mt-[60px]">
          <li className="flex flex-col gap-2 items-center 2xl:flex-row 2xl:gap-5">
            <RoundedCheckIcon className="w-5 2xl:w-10" />
            Cart Review
          </li>
          <li className="flex flex-col gap-2 items-center 2xl:flex-row 2xl:gap-5">
            <RoundedCheckIcon className="w-5 2xl:w-10" />
            Checkout
          </li>
          <li className="flex flex-col gap-2 items-center 2xl:flex-row 2xl:gap-5">
            <RoundedNumber3Icon className="w-5 2xl:w-10" />
            <strong>Special Offer</strong>
          </li>
          <li className="flex flex-col gap-2 items-center 2xl:flex-row 2xl:gap-5">
            <OutlinedNumber4Icon className="w-5 2xl:w-10" />
            Confirmation
          </li>
        </ul>
        <div className="2xl:bg-[#FAFAFA] 2xl:w-full 2xl:grid 2xl:grid-cols-2 2xl:mt-[60px] 2xl:rounded-[10px] 2xl:p-10 2xl:gap-x-10 2xl:gap-y-[32px]">
          <h2 className="text-2xl text-center col-start-2 row-start-1 mb-6 2xl:m-0">
            <span className="text-[#2C7EF8]">ONE TIME ONLY </span>special price
            for 6 extra Clarifion for only{" "}
            <span className="text-[#2C7EF8]">$14 each</span> ($84.00 total!)
          </h2>
          <figure className="col-start-1 row-start-1 row-span-5 mb-6 2xl:m-0">
            <Image
              priority={true}
              src={OfferImage}
              alt="offer image"
              className="rounded-xl object-cover object-center 2xl:w-[575px] 2xl:h-[591px]"
            />
          </figure>
          <div className="col-start-2 row-start-2 row-span-6 flex flex-col gap-[32px]">
            <div className="flex flex-col gap-4 justify-center w-full 2xl:justify-start">
              <div className="flex gap-4 h-[80px] 2xl:h-[135px] 2xl:w-full">
                <figure>
                  <Image
                    priority={true}
                    src={DeviceImage}
                    alt="offer image"
                    className="rounded-[10px] object-cover w-20 object-center h-full 2xl:w-[134px] 2xl:h-[134px]"
                  />
                </figure>
                <div className="flex flex-col w-full gap-[10px]">
                  <div className="flex justify-between">
                    <h3 className="text-sm 2xl:text-xl">
                      Clarifion Air Ionizer
                    </h3>
                    <div className="space-x-2 font-semibold flex items-center">
                      <span className="text-[#969696] text-[10px] 2xl:text-base">
                        $180
                      </span>
                      <span className="text-[#2C7EF8] text-sm 2xl:text-[22px]">
                        $84
                      </span>
                    </div>
                  </div>
                  <div>
                    <StarsIcon className="w-[68px] 2xl:w-[78.11px]" />
                  </div>
                  <label className="text-[#37465A] text-xs flex items-center 2xl:text-base">
                    <input
                      type="radio"
                      defaultChecked
                      className="me-4 accent-[#2C7EF8]"
                    />
                    12 left in Stock
                  </label>
                  <p className="hidden 2xl:text-xs 2xl:block">
                    Simply plug a Clarifion into any standard outlet and replace
                    bulky, expensive air purifiers with a simple.
                  </p>
                </div>
              </div>
              <p className="text-center text-xs 2xl:hidden">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
            <div className="h-20 flex flex-col gap-4 col-start-2 row-start-3 2xl:h-[98px]">
              <h4 className="text-xs flex items-center gap-3 2xl:text-base">
                <CheckIcon />
                Negative Ion Technology may <strong>help with allergens</strong>
              </h4>
              <h4 className="text-xs flex items-center gap-3 2xl:text-base">
                <CheckIcon />
                Designed for <strong>air rejuvenation</strong>
              </h4>
              <h4 className="text-xs flex items-center gap-3 2xl:text-base">
                <CheckIcon />
                <strong>Perfect for every room</strong> in all types of places.
              </h4>
            </div>
            <div className="bg-[#EDF3FD] h-16 rounded-[10px] flex items-center gap-[10px] py-3 px-4 col-start-2 row-start-4">
              <RoundedPercentageIcon />
              <h4 className="text-sm leading-normal w-[248px] 2xl:text-base 2xl:w-[393px]">
                Save <span className="text-[#2C7EF8]">53%</span> and get{" "}
                <span className="text-[#2C7EF8]">6 extra Clarifision</span> for
                only <span className="text-[#2C7EF8]">$14 Each</span>.
              </h4>
            </div>
            <div className="h-[162px] space-y-3 col-start-2 row-start-5">
              <button
                type="button"
                className="bg-[#59AE43] h-[51px] w-full justify-center rounded-full text-white flex items-center gap-4"
              >
                <span className="uppercase text-sm font-bold shrink-0">
                  Yes - Claim my discount
                </span>{" "}
                <ArrowRightIcon />
              </button>
              <div className="h-[71px] border-[1px] py-2 px-4 rounded-[4px] border-[#CFCFCF] flex flex-col gap-3">
                <div className="flex divide-x-2 gap-3 text-xs 2xl:justify-center">
                  <span className="flex-shrink-0">Free shipping</span>
                  <div className="ps-3 flex gap-2 items-center">
                    <LockGreyIcon />
                    <span className="flex-shrink-0">
                      Secure 256-bit SSL encryption
                    </span>
                  </div>
                </div>
                <div className="border"></div>
                <div className="flex justify-center gap-[2px]">
                  <VisaCardIcon />
                  <PayCardIcon />
                  <PayPalCardIcon />
                  <MasterCardIcon />
                  <GooglePayCardIcon />
                  <ApplePayCardIcon />
                  <AmexCardIcon />
                </div>
                <p className="text-center text-[#F82C2C] text-xs font-medium">
                  No thanks, I don’t want this.
                </p>
              </div>
            </div>
            <div className="h-[77px] flex gap-4 col-start-2 row-start-6">
              <figure>
                <Image
                  priority={true}
                  src={GuaranteeImage}
                  width={200}
                  alt="offer image"
                  className="rounded-[10px] object-cover object-center"
                />
              </figure>
              <p className="text-xs text-[#4D5254]">
                If you are not completely thrilled with your Clarifion - We have
                a <strong>30 day satisfaction guarantee</strong>. Please refer
                to our return policy at the bottom of the page for more details.
                Happy Shopping!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl hidden 2xl:block p-6 space-y-[18px] col-start-1 row-start-6">
            <div className="flex items-center gap-3">
              <figure>
                <Image
                  priority={true}
                  src={KenImage}
                  width={48}
                  alt="offer image"
                  className="rounded-xl object-cover object-center"
                />
              </figure>
              <div>
                <StarsIcon />
                <div className="flex gap-[10px] items-center">
                  <span className="text-sm font-bold">Ken T.</span>
                  <OvalCheckIcon />
                  <span className="text-[#5BB59A]">Verified Customer</span>
                </div>
              </div>
            </div>
            <p className="text-[#4D5254]">
              “As soon as the Clarifions arrived I put one in my bedroom. This
              was late in the afternoon. When I went to the bedroom in the
              evening it smelled clean. When I went to bed I felt I could
              breathe better. Wonderful.”
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-[#252F3D] h-[102px] p-5 text-white flex-col flex gap-4 text-xs 2xl:mt-20">
        <div className="flex divide-x-2 divide-white gap-3 h-[33px] py-2">
          <span>Copyright (c) 2023</span>
          <span className="ps-3">Clarifionsupport@clarifion.com</span>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <LockWhiteIcon />
          <span>Secure 256-bit SSL encryption.</span>
        </div>
      </footer>
    </main>
  );
}
