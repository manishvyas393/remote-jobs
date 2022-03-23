import JobCard from "../../components/JobsCard/JobCard";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { getAllJobs } from "../../service/jobs";
import { Meta } from "../../components/Meta/Meta";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
            jobsCount: number,
            resultPerPage: number
      };
      params: {
            no: any;
      };
      pageNo: any,
}
export const getServerSideProps = async ({ params }: Props) => {
      const no = params.no;
      const { data } = await getAllJobs(no);

      return {
            props: {
                  data,
                  pageNo: no
            },
      };
};
const Home = ({ data, pageNo }: Props) => {
      let [nextPage, setNextPage] = useState(pageNo)
      let [prevPage, setPrevPage] = useState(pageNo)
      let [disabled, setDisabled] = useState(false)
      const router = useRouter()
      let lastPage = Math.ceil(data.jobsCount / data.resultPerPage)
      useEffect(() => {
            setNextPage(parseInt(pageNo) + 1)
            setPrevPage(parseInt(pageNo) - 1)
            if (lastPage < nextPage) {
                  setDisabled(true)
            }
            else {
                  setDisabled(false)
            }
            if (router.asPath === "/Page/1") {
                  router.push("/")
            }
      }, [pageNo, lastPage, nextPage, router])
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
                        <Box display="flex">
                              <Button mr={2}>
                                    <Link href={"/Page/" + prevPage}>
                                          Prev Page
                                    </Link>
                              </Button>
                              <Button disabled={disabled}>
                                    {
                                          disabled ? "Reached Last Page" : <Link href={"/Page/" + nextPage}>
                                                Next Page
                                          </Link>
                                    }

                              </Button>
                        </Box>
                  </Flex>
            </>
      );
};
export default Home;

