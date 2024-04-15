"use client";

import { createIssue } from "@/app/(issues-app)/lib/data";
import SubmitBtn from "@/app/common/components/button/submitBtn";

const CreateIssueForm = ({}) => {
  const onFormAction = async (formData: FormData) => {
    const formSubmitData = {
      userId: 214,
      title: formData.get("title") as string,
      description: formData.get("description") as string,
    };
    await createIssue(formSubmitData);
  };
  return (
    <form action={onFormAction} id="create-issue">
      <div className="flex flex-col p-2 m-2">
        <label htmlFor="title">Title</label>
        <input
          className="text-black p-2 mt-2 mb-2 rounded"
          name="title"
          type="text"
        />
      </div>
      <div className="flex flex-col p-2 m-2">
        <label htmlFor="title">Description</label>
        <textarea
          name="description"
          className="text-black p-2 mt-2 mb-2 rounded"
        />
      </div>
      <div className="flex flex-col p-2 m-2">
        <SubmitBtn title="Create" />
      </div>
    </form>
  );
};

export default CreateIssueForm;
