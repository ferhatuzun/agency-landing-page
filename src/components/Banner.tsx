import CustomButton from "./ui/CustomButton";

const Banner = () => {
  return (
    <div className="bg-bg font-inter py-8 text-text-main mt-10 px-10">
      <div className="container mx-auto flex flex-col items-center gap-y-5">
        <h1 className="text-4xl md:text-7xl mb-5 font-bold text-center">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>
        <CustomButton href="" size="lg" color="colored">
          Get a Demo
        </CustomButton>
      </div>
    </div>
  );
};

export default Banner;
