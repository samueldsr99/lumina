import type {
  GridValue,
  SpacingValues,
  SprinklesProperties,
} from "../../css/sprinkles.css";
import { Box } from "../box";

interface GridItemProps {
  container?: false;
  colSpan?: GridValue;
}

interface GridContainerProps {
  container: true;
  columns?: GridValue;
  children?: React.ReactNode;
  gap?: SpacingValues;
}

export type GridProps = GridItemProps | GridContainerProps;

const isContainer = (props: GridProps): props is GridContainerProps => {
  return (props as GridContainerProps).container;
};

export function Grid(props: GridProps) {
  if (isContainer(props)) {
    const { children, container: _, ...restProps } = props;
    return <Box sx={{ ...rootContainer, ...restProps }}>{children}</Box>;
  }

  return <Box sx={{ ...rootItem }} />;
}

export const rootContainer: SprinklesProperties = {
  display: "grid",
  gridTemplateColumns: "3",
};

export const rootItem: SprinklesProperties = {};
