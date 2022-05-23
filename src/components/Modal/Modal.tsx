import { motion } from "framer-motion";
import { Modal } from "@mantine/core";
import { Comment } from "../Comment/Comment";
import { modalDropIn } from "../../animations/animation";

export const RepoModal = ({ selectedModal, opened, setOpened }: any) => {
  return (
    <motion.div variants={modalDropIn} initial="hidden" animate="visible">
      <Modal
        overflow="inside"
        size="calc(100vw - 87px)"
        opened={opened}
        onClose={() => setOpened(false)}
        title={selectedModal ? selectedModal.node.title : "Github Issue"}
      >
        {selectedModal ? (
          <>
            <div>
              <Comment data={selectedModal.node} />
            </div>
            <div className="comments-wrapper">
              {selectedModal.node.comments.nodes.map((comment: any) => {
                return (
                  <div>
                    <Comment data={comment} />
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <h3>No content</h3>
        )}
      </Modal>
    </motion.div>
  );
};
