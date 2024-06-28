import { Box, Container, Heading, Paragraph, Stack } from "@lumina/ui";

export function Welcome(): JSX.Element {
  return (
    <Container center maxWidth="medium">
      <Heading as="h1" center variant="jumbo">
        Welcome to Lumina!
      </Heading>
      <Stack marginTop="space-100">
        <Paragraph>
          This project was completed as fulfillment of the course Design Systems
          for Interactive Systems taught by Pablo Deeleman at Harbour.Space
          University (Barcelona).
        </Paragraph>

        <Paragraph>
          Lumina is a design system that provides a set of reusable components
          and guidelines for building consistent and accessible user interfaces
          heavily inspired by OpenAI
        </Paragraph>
      </Stack>

      <Box sx={{ height: "size-120" }} />
    </Container>
  );
}
