import { Card, Text, Badge, Button, Group, Avatar } from "@mantine/core";
import { motion } from "framer-motion";
import { repoCardAnimationProps } from "../../animations/animation";
import { FilterOptions } from "../Filter/Types";

interface QueryDataProps {
  searchItems: any;
  className: string;
  styles: any;
}

export const RepoCardItem = (props: QueryDataProps) => {
  const { searchItems: data, className, styles } = props;
  const item = data.node;

  return (
    <motion.div
      variants={repoCardAnimationProps}
      initial="hidden"
      animate="visible"
      className={`${className} ${styles.classes.repoCard}`}
    >
      <Card
        className={styles.classes.repoCardContainer}
        data-testid="repo-item"
        shadow="sm"
        p="md"
      >
        <Card.Section style={{ marginTop: "5px" }}>
          {
            <Text weight={500} style={{ fontSize: "larger" }}>
              #{item.number}
            </Text>
          }
        </Card.Section>
        <Card.Section style={{ padding: "0 10px" }}>{item.title}</Card.Section>
        <Group
          position="apart"
          style={{
            backgroundColor: "rgb(59 68 87)",
            borderRadius: "10px",
            padding: "5px",
            bottom: "10px",
            color: "#fff",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              padding: "6px",
            }}
          >
            <Avatar
              radius="xl"
              src={item ? item.author.avatarUrl : "Author name"}
              alt="it's me"
            />
            <div style={{ marginLeft: "5px" }}>
              <Text>#{item.author.login}</Text>
            </div>
          </div>
          <Badge
            color={item.state === FilterOptions.OPEN ? "green" : "pink"}
            variant="light"
          >
            {item.state}
          </Badge>
        </Group>
      </Card>
      <Button value={123} className={styles.classes.repoButton}>
        View Issue
      </Button>
    </motion.div>
  );
};
