import { Card, Text, Badge, Button, Group } from "@mantine/core";
import { motion } from "framer-motion";
import { repoCardAnimationProps } from "../../animations/animation";

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
      <Card className={styles.classes.repoCardContainer} shadow="sm" p="lg">
        <Card.Section>{item.title}</Card.Section>
        <Group position="apart">
          <Text weight={500}>{item.title}</Text>
          <Text weight={500}>#{item.number}</Text>
          <Badge color="pink" variant="light">
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
