import Header from "./component/DashboardHeader";
import Tutor from "./tutor";

function page() {
  return (
    <div className="bg-[#101110] min-h-[100vh]">
      <Header />
      <Tutor />
    </div>
  );
}

export default page;
