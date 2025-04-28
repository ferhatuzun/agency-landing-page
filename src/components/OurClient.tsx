const OurClient = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 mt-14 gap-y-8 font-inter">
      <div className="text-center px-10">
        <h4 className="text-5xl font-semibold text-text-main mb-4">
          Our Client
        </h4>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-5  px-10 place-items-center ">
        <img src="/images/brand_1.png" alt="" />
        <img src="/images/brand_2.png" alt="" />
        <img src="/images/brand_3.png" alt="" />
        <img src="/images/brand_4.png" alt="" />
        <img src="/images/brand_6.png" alt="" />
        <img src="/images/brand_7.png" alt="" />
      </div>
    </div>
  );
};

export default OurClient;
