import JobCard from "../components/JobsCard/JobCard";
import { Flex, Heading } from "@chakra-ui/react";
import { getAllJobs } from "../service/jobs";
import { Meta } from "../components/Meta/Meta";
import Footer from "../components/Footer/Footer";
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
  console.log(data)
  return (
    <>
      <Meta title="Home" description="Remote-Jobs" canonical="https://remote-jobs-three.vercel.app/" openGraph={
        {
          title: 'Remote-Jobs',
          description: 'Repository To Apply Jobs All Over The World',
          images: [
            {
              url: "https://bit.ly/2jYM25F",
              width: 800,
              height: 600,
              alt: 'Remote-Job',
              type: 'image/*',
            },
          ],
          site_name: 'Remote-Jobs',
        }
      } />
      <Flex
        justifyItems="center"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        px={{ sm: 52, xs: 72 }}
        mb={12}
        pt="150px"
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
