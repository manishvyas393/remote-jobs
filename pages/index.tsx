import JobCard from "../components/JobsCard/JobCard";
import { Flex, Heading } from "@chakra-ui/react";
import { getAllJobs } from "../service/jobs";
interface Props {
  data: {
    jobs: [
      {
        _id: string;
        company: string;
        role: string;
        contract: string;
        location: string;
        updatedOn: string;
        salary: string;
      }
    ];
  };
}
const Home = ({ data }: Props) => {
  return (
    <>
      <Flex
        justifyItems="center"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        px={{ sm: 52, xs: 72 }}
      >
        <Heading
          as="h1"
          fontSize={{ lg: 40, md: 30, sm: 20, xs: 30 }}
          color="gray.800"
          mb={5}
          width={{ sm: 250, lg: 450, xs: 550 }}
          textAlign="center"
        >
          All Remote Jobs
        </Heading>
        {data.jobs.map((job: any) => (
          <JobCard job={job} key={job._id} />
        ))}
      </Flex>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await getAllJobs();

  return {
    props: {
      data,
    },
    revalidate: 3600,
  };
}
