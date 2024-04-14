import { issuesByUser } from "../lib/data";

export default async function Issues() {
  const issues = await issuesByUser(214);

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
}
