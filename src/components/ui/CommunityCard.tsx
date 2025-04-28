interface CommunityCardProps {
  icon: string;
  title: string;
  desc: string;
}

const CommunityCard = ({ icon, title, desc }: CommunityCardProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5 text-center text-text-main rounded-lg shadow-lg py-12 px-6 w-full ">
      <img src={icon} alt="" />
      <h5 className="text-2xl xl:text-4xl font-bold px-5">{title}</h5>
      <p className="mt-auto">{desc}</p>
    </div>
  );
};

export default CommunityCard;
