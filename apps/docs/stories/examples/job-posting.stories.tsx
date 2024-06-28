import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  Container,
  Flex,
  Form,
  Grid,
  Heading,
  Input,
  Paragraph,
  Stack,
} from "@lumina/ui";
import { useState } from "react";
import { jobs } from "./data";

const meta: Meta = {
  title: "Examples/Job Posting",
};

export default meta;

type Story = StoryObj<typeof Container>;

function Icon(): JSX.Element {
  return (
    <svg
      fill="none"
      height="10"
      viewBox="0 0 10 10"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_338_1024)">
        <path d="M1 9L9 1L1 9ZM9 1H2.5H9ZM9 1V7.22222V1Z" fill="#353740" />
        <path
          d="M1 9L9 1M9 1H2.5M9 1V7.22222"
          stroke="#353740"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.25"
        />
      </g>
      <defs>
        <clipPath id="clip0_338_1024">
          <rect fill="white" height="10" width="10" />
        </clipPath>
      </defs>
    </svg>
  );
}

function JobPostingPage(): JSX.Element {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) => {
    // title or some skill
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    const formData = new FormData(e.currentTarget);
    const currentSearch = formData.get("search") as string;
    setSearch(currentSearch);
    e.preventDefault();
  };

  return (
    <Container center maxWidth="xlarge" paddingY="space-40">
      <Stack gap="space-40">
        <Heading variant="h1">Jobs</Heading>

        <Container center={false} maxWidth="xsmall" paddingY="space-40">
          <Form onSubmit={handleSubmit}>
            <Flex container gap="space-20" orientation="horizontal">
              <Flex grow>
                <Input
                  autoComplete="off"
                  name="search"
                  placeholder="Search jobs..."
                  type="search"
                />
              </Flex>
              <Button type="submit" variant="primary">
                Search
              </Button>
            </Flex>
          </Form>
        </Container>

        {filteredJobs.length > 0 ? (
          <>
            <Heading as="h2" margin={false} variant="h3">
              {filteredJobs.length} jobs found{" "}
              {search ? <>for: {search}</> : null}
            </Heading>
            <Grid container gap="space-20">
              {filteredJobs.map((job) => (
                <Card key={job.id}>
                  <Flex
                    container
                    gap="space-60"
                    justifyContent="space-between"
                    orientation="vertical"
                  >
                    <Stack>
                      <Heading as="h2" margin={false} variant="h3">
                        {job.title}
                      </Heading>
                      <Paragraph variant="caption">{job.location}</Paragraph>
                      <Paragraph>{job.description}</Paragraph>
                    </Stack>

                    <Flex
                      alignItems="flex-end"
                      container
                      justifyContent="flex-end"
                    >
                      <Button>
                        Apply
                        <Icon />
                      </Button>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </>
        ) : (
          <Heading center variant="h3">
            No jobs found with the search term: {search}
          </Heading>
        )}
      </Stack>
    </Container>
  );
}

export const Default: Story = {
  render: () => <JobPostingPage />,
};
