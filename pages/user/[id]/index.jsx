import { requestToBodyStream } from "next/dist/server/body-streams";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>index {id}</div>;
};

export default index;
