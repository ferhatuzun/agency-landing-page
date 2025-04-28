const Customers = () => {
  return (
    <div className="bg-bg py-10">
      <div className="container mx-auto font-inter ">
        <div className="flex flex-col items-center xl:flex-row lf:items-start justify-center  gap-x-20">
          <div className="">
            <img src="/images/customers.png" alt="" className="w-[500px]" />
          </div>
          <div className="xl:w-1/2 flex flex-col gap-y-5 mt-3 text-text-main px-10">
            <p>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div>
              <h5 className="text-xl text-green font-bold">Tim Smith</h5>
              <p className="text-sm">British Dragon Boat Racing Association</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-8 items-center gap-y-5">
              <img src="/images/brand_1.png" alt="" />
              <img src="/images/brand_2.png" alt="" />
              <img src="/images/brand_3.png" alt="" />
              <img src="/images/brand_4.png" alt="" />
              <img src="/images/brand_5.png" alt="" />
              <img src="/images/brand_6.png" alt="" />
              <div className="col-start-1 col-end-4 md:col-start-7 md:col-end-9">
                <a href="#">
                  <h5 className="text-lg font-bold text-green">
                    Meet all customers
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
