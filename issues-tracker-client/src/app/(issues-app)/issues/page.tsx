import { issuesByUserAction } from "../lib/data";

const Issues = async () => {
  const issues = await issuesByUserAction(214);
  return (
    <div className="m-2 p-2 flex flex-col">
      {issues.map((issue) => {
        return (
          <div
            key={Math.floor(Math.random() + issue.id)}
            className="flex gap-4"
          >
            <div>{issue.id}</div>
            <div>{issue.title}</div>
            <div>{issue.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Issues;
