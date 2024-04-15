import CreateIssueForm from "../ui/createIssueForm/createIssueForm";
import { createIssue } from "@/app/(issues-app)/lib/data";

const Create = async () => {
  return (
    <div className="p-2 m-2 flex flex-col">
      <CreateIssueForm createIssue={createIssue} />
    </div>
  );
};

export default Create;
