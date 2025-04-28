import CommunityCard from "./ui/CommunityCard";

const Community = () => {
  return (
    <div className="container mx-auto font-inter mt-20">
      <div className="text-center text-text-main">
        <h4 className="text-5xl font-semibold mb-4">
          Manage your entire community <br />
          in a single system
        </h4>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className="flex flex-col items-center gap-y-10 lg:flex-row md:items-stretch justify-center gap-x-20 mt-5 px-10">
        <CommunityCard
          icon="/images/icon_1.png"
          title="Membership Organisations"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
        <CommunityCard
          icon="/images/icon_2.png"
          title="National Associations"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
        <CommunityCard
          icon="/images/icon_3.png"
          title="Clubs And Groups"
          desc="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
    </div>
  );
};

export default Community;
