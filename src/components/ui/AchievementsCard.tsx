interface AchievementsCardProps {
  icon: string;
  title: string;
  desc: string;
}

const AchievementsCard = ({ icon, title, desc }: AchievementsCardProps) => {
  return (
    <div className="flex items-center gap-x-6">
      <img src={`${icon}`} alt="" className="min-w-10 max-w-10" />
      <div className="text-text-main w-fit">
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default AchievementsCard;
