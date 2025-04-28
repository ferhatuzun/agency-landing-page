import CustomButton from "./ui/CustomButton";

const Calender = () => {
  return (
    <div className="container mx-auto font-inter py-16">
      <div className="flex flex-col lg:flex-row gap-y-10 justify-center items-center place-items-center gap-x-16">
        <div>
          <img src="/images/pana.png" alt="" className="w-[500px]" />
        </div>
        <div className="flex flex-col gap-y-5 text-text-main lg:w-1/2 px-10">
          <h4 className="text-5xl font-semibold">
            How to design your site footer like we did
          </h4>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <CustomButton href="#" size="lg" color="colored">
            Learn More
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Calender;
