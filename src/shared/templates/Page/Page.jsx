import InnerHeader from "../InnerHeader/InnerHeader";
import { memo } from "react";

const Page = memo(({
  children,
  title
}) => {
  return (
    <div>
      <InnerHeader title={title} />
      {children}
    </div>
  );
});

export default Page;