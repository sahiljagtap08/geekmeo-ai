import CreateCourseForm from "@/components/CreateCourseForm";
import { getAuthSession } from "@/lib/auth";
import { checkSubscription } from "@/lib/subscription";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

type Props = {};

const CreatePage = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/gallery");
  }
  const isPro = await checkSubscription();
  return (
    <div className="flex flex-col items-start max-w-xl px-8 mx-auto my-16 sm:px-0">
      <h1 className="self-center text-3xl font- mono font-bold text-center sm:text-6xl">
        Geekmeo.ai
      </h1>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
        Type in what you want to learn and list out the specific topics you're interested in. Our AI will create a course for you based on your input!

        </div>
      </div>

      <CreateCourseForm isPro={isPro} />
    </div>
  );
};

export default CreatePage;
