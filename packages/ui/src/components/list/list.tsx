import { Stack } from "../stack";

export interface ListProps {
  children: React.ReactNode;
  margin?: boolean;
}

export function List(props: ListProps) {
  return (
    <Stack as="ul" gap="space-20">
      {props.children}
    </Stack>
  );
}
List.displayName = "List";
