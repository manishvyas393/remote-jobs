import React from "react";
import JobsDetails from "../../components/JobsDetails/JobsDetails";
import { Meta } from "../../components/Meta/Meta";
import { getJobById } from "../../service/jobs";
interface Props {
  params: {
    id: string;
  };
}


export const getServerSideProps = async ({ params }: Props) => {
  const id = params.id;
  const { data } = await getJobById(id);
  return {
    props: {
      data,
    },
  };
};
interface props {
  data: {
    job: {
      _id: string;
      company: string;
      role: string;
      contract: string;
      location: string;
      updatedOn: string;
      salary: string;
      details: any;
      source: string;
    };
  };
}
const jobDescription = ({ data }: props) => {
  return (
    <>
      <Meta title={data.job.role} description={`${data.job.company} is hiring ${data.job.role}`} openGraph={null} canonical={""}/>
      <JobsDetails detail={data.job} />
    </>
  );
};

export default jobDescription;
