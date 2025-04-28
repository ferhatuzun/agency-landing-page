import CustomButton from "./CustomButton";

interface CommunityUpdatesCardProps {
  title: string;
  link?: string;
}

const CommunityUpdatesCard = ({
  title,
  link = "#",
}: CommunityUpdatesCardProps) => {
  return (
    <div className="text-center text-text-main flex flex-col gap-y-10 justify-between items-center shadow-xl p-5 bg-bg rounded-2xl">
      <h5 className="text-xl font-semibold">{title}</h5>
      <CustomButton href={link} size="lg">
        <p className="text-xl font-semibold">Readmore</p>
      </CustomButton>
    </div>
  );
};

export default CommunityUpdatesCard;
