type SubmitBtnProps = {
  title: string;
};

const SubmitBtn = ({ title }: SubmitBtnProps) => {
  return (
    <div className="action p-2 m-4 flex flex-col">
      <button className="p-2 mb-2 rounded-sm bg-indigo-500">{title}</button>
    </div>
  );
};

export default SubmitBtn;
