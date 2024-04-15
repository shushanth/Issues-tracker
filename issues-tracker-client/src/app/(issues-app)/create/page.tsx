import CreateIssueForm from "../ui/createIssueForm/createIssueForm";
import { createIssueAction } from "@/app/(issues-app)/lib/data";

const Create = async () => {
  return (
    <div className="p-2 m-2 flex flex-col">
      <CreateIssueForm createIssueAction={createIssueAction} />
    </div>
  );
};

export default Create;
