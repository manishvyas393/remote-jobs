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
      image:string
    };
  };
}
const jobDescription = ({ data }: props) => {

  let image=data.job.image
  return (
    <>
      <Meta title={data.job.role} description={data.job.company +" is hiring " + data.job.role} openGraph={
        {
          title: 'Remote-Jobs',
          description: data.job.company+" is hiring "+data.job.role,
          images: [
            {
              url:image,
              width: 800,
              height: 600,
              alt: 'Remote-Job',
              type: 'image/*',
            },
          ],
          site_name: 'Remote-Jobs',
        }
      } canonical={""}/>
      <JobsDetails detail={data.job} />
    </>
  );
};

export default jobDescription;
