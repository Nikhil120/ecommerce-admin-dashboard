import ImageReader from "../utils/ImageReader";
import Image from "next/image";
import Banner from "../public/business-banner.jpg";
function MyBusiness() {
  const LoadImage = (e, img) => {
    ImageReader(e.target.files[0], img);
  };
  return (
    <div className="w-full flex flex-col justify-between text-black">
      <h2 className="text-black text-2xl p-5 text-center md:text-left">
        Edit Business Details
      </h2>
      <div className="relative mb-28">
        <label
          htmlFor="business-banner-input"
          className="h-40 md:h-60 block cursor-pointer"
        >
          <Image
            fill
            id="business-banner"
            className="w-full object-cover"
            src={Banner}
            alt="Business banner"
          />
          <input
            type="file"
            onChange={(e) => LoadImage(e, "business-banner")}
            className="hidden"
            id="business-banner-input"
          />
        </label>
        <label
          htmlFor="business-logo-input"
          className="absolute top-[60%] left-[10%] cursor-pointer h-36 w-36 md:h-48 md:w-48 block"
        >
          <Image
            fill
            id="business-logo"
            className="h-36 w-36 md:h-48 md:w-48 object-cover rounded-full"
            src={Banner}
            alt="Business Logo"
          />
          <input
            type="file"
            onChange={(e) => LoadImage(e, "business-logo")}
            className="hidden"
            id="business-logo-input"
          />
        </label>
      </div>
      <div className="h-full flex flex-col gap-y-10 px-5 pt-5">
        <div className={`flex flex-col gap-y-5`}>
          <div className="text-lg font-medium">Business Information</div>
          <div className="flex flex-col gap-y-3">
            <label
              htmlFor="business-name"
              className="font-medium cursor-pointer"
            >
              Name
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="Business Name"
              required
              id="business-name"
            />
          </div>
          <div className={`flex flex-col gap-y-3`}>
            <label
              className="font-medium cursor-pointer"
              htmlFor="business-description"
            >
              Business Description
            </label>
            <textarea
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="Business Description"
              required
              rows={3}
              id="business-description"
            />
          </div>
          <div className={`flex flex-col gap-y-3`}>
            <label htmlFor="email" className="font-medium cursor-pointer">
              Email
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="email"
              placeholder="Email"
              required
              id="email"
            />
          </div>
          <div className={`flex flex-col gap-y-3`}>
            <label htmlFor="Phone" className="font-medium cursor-pointer">
              Phone Number
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="tel"
              placeholder="Phone"
              required
              id="Phone"
            />
          </div>

          <div className={`flex flex-col gap-y-3`}>
            <label htmlFor="Phone2" className="font-medium cursor-pointer">
              Alternate Phone Number
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="tel"
              placeholder="Alternate Phone Number"
              required
              id="Phone2"
            />
          </div>
        </div>

        <hr className="border border-strokes" />

        <div className={`flex flex-col gap-y-5`}>
          <div className="text-lg font-medium">Addresses</div>
          <div className="flex flex-col gap-y-3">
            <label
              htmlFor="business-address"
              className="font-medium cursor-pointer"
            >
              Address
            </label>
            <textarea
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="Address"
              required
              id="business-address"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="pincode" className="font-medium cursor-pointer">
              Pincode
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="number"
              placeholder="Pincode"
              required
              id="pincode"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="city" className="font-medium cursor-pointer">
              City
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="City"
              required
              id="city"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="state" className="font-medium cursor-pointer">
              State
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="State"
              required
              id="state"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="country" className="font-medium cursor-pointer">
              Country
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="Country"
              required
              id="country"
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <label
              htmlFor="google-map-url"
              className="font-medium cursor-pointer"
            >
              Google Map URL
            </label>
            <input
              className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
              type="text"
              placeholder="Google Map URL"
              required
              id="google-map-url"
            />
          </div>
        </div>
      </div>

      <div className="h-28 flex justify-center md:justify-end items-center md:pr-10 gap-x-5 border-t border-strokes">
        <button className="font-medium px-14 py-2 bg-btn-black-bg font-lg rounded-full text-white hover:bg-slate-800">
          Save
        </button>
        <button
          className="font-medium px-14 py-2 border border-input-stroke font-lg rounded-full hover:shadow-md"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default MyBusiness;
