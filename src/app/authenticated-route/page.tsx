import UserInfo from "./UserInfo";

const page = () => {
  return (
    <div className="section_padding py-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl py-10">This route is authenticated</h1>
      <br />
      <UserInfo />
    </div>
  );
};

export default page;
