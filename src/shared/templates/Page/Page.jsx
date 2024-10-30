import InnerHeader from "../InnerHeader/InnerHeader";

const Page = ({
  children,
  title
}) => {
  return (
    <div>
      <InnerHeader title={title} />
      {children}
    </div>
  );
};

export default Page;