import AchievementsCard from "./ui/AchievementsCard";

const Achievements = () => {
  return (
    <div className="bg-bg py-20 font-inter">
      <div
        className="container mx-auto flex flex-col gap-y-10
      lg:flex-row items-center justify-evenly  px-10"
      >
        <div className="flex flex-col gap-y-4">
          <div className="text-5xl font-semibold">
            <h4 className="text-text-main">Helping a local</h4>
            <span className="text-green">Business reinvent itelf</span>
          </div>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 self-start sm:self-center gap-y-6 gap-x-16">
          <AchievementsCard
            icon="/images/icon_4.png"
            title="2,245,341"
            desc="Members"
          />
          <AchievementsCard
            icon="/images/icon_7.png"
            title="46,328"
            desc="Clubs"
          />
          <AchievementsCard
            icon="/images/icon_6.png"
            title="828,867"
            desc="Event Booking"
          />
          <AchievementsCard
            icon="/images/icon_5.png"
            title="1,926,436"
            desc="Payments"
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
