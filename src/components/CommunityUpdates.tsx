import CommunityUpdatesCard from "./ui/CommunityUpdatesCard";

const CommunityUpdates = () => {
  return (
    <div className="container mx-auto py-10 font-inter">
      <div className="text-text-main flex flex-col items-center gap-y-3">
        <h4 className="text-5xl font-semibold text-center">
          Caring is the new marketing
        </h4>
        <p className="md:w-1/2 text-center px-10">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 gap-x-10 mt-16 px-10">
        <CommunityUpdatesCard title="Creating Streamlined Safeguarding Processes with OneRen" />
        <CommunityUpdatesCard title="What are your safeguarding responsibilities and how can you manage them?" />
        <CommunityUpdatesCard title="Revamping the Membership Model with Triathlon Australia" />
      </div>
    </div>
  );
};

export default CommunityUpdates;
