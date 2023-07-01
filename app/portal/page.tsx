type Props = {};
import { redirect } from "next/navigation";

const Page = (props: Props) => {
  return redirect("/portal/dashboard");
};

export default Page;
