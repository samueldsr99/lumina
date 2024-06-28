import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
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
                  <Heading as="h2" margin={false} variant="h3">
                    {job.title}
                  </Heading>
                  <Paragraph variant="caption">{job.location}</Paragraph>
                  <Paragraph>{job.description}</Paragraph>
                  <Flex container gap="space-20" orientation="horizontal" wrap>
                    {job.skills.map((skill) => (
                      <Badge key={skill.name} variant="gray">
                        {skill.name}
                      </Badge>
                    ))}
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
