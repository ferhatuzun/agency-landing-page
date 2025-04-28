import CustomButton from "./ui/CustomButton";

const Introduction = () => {
  return (
    <div className="container mx-auto flex flex-col gap-y-10 lg:flex-row justify-center  items-center text-text-main py-16 lg:py-44 px-10">
      <div>
        <img src="/images/rafiki.png" alt="" className="w-[500px]" />
      </div>
      <div className="flex flex-col gap-y-10 lg:w-1/2">
        <h4 className="text-3xl md:text-5xl font-bold">
          The unseen of spending three years at Pixelgrade
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <CustomButton href="#" size="lg" color="colored">
          Learn More
        </CustomButton>
      </div>
    </div>
  );
};

export default Introduction;
