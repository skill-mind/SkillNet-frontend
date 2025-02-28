import DashboardCard from "@/components/DashboardCard";
import PercentIcon from "@/svg/PercentIcon";
import BriefcaseIcon from "@/svg/BriefcaseIcon";
import MessageIcon from "@/svg/MessageIcon";

function page() {
  return (
    <div className=" p-5 pr-[100px]">
      <div className="grid grid-cols-3 gap-4 mb-[37px]">
        <DashboardCard
          background="#3498DB33"
          color="#3498DB"
          value="13"
          item="Total Exams Hosted"
          icon=<PercentIcon />
        />
        <DashboardCard
          background="#BB6BD933"
          color="#BB6BD9"
          value="150"
          item="Total Candidates"
          icon=<BriefcaseIcon />
        />
        <DashboardCard
          background="#BB6BD933"
          color="#BB6BD9"
          value="111"
          item="Certificates Issued"
          icon=<BriefcaseIcon />
        />
        <DashboardCard
          background="#F2994A33"
          color="#F39C12"
          value="17"
          item="Verification Requests"
          icon=<MessageIcon />
        />
      </div>
      <div>
        <h4 className="text-sm leading-6 text-[#FCFCFC] mb-4">Quick Actions</h4>
        <div className="flex items-center gap-x-5 text-sm leading-6 text-white font-bold">
          <button className="py-3 w-[190px] text-center rounded-lg border border-[#2D2E2D]">
            Create Exams
          </button>
          <button className="py-3 w-[190px] text-center rounded-lg border border-[#2D2E2D]">
            View Candidates
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
