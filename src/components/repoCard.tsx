import * as React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { QueryRepoQuery } from "../generated/graphql";

interface QueryProps {
  data: QueryRepoQuery;
}

const className = "LaunchList";

export const RepoCard: React.FC<QueryProps> = ({ data }) => {
  console.log(data);
  return (
    <div className={className}>
      <h3>Launches</h3>
      <ol className={`${className}__list`}>logic here</ol>
    </div>
  );
};
