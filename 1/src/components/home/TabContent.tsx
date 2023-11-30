import { motion } from 'framer-motion';
import { EDUCATION, SKILL_LIST } from '@constants/home';

type TabContentProps = {
  tab: Tab;
};

const TabContent = ({ tab }: TabContentProps) => {
  return (
    <>
      {tab === 'Skills' && (
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="show"
          className="ml-4"
        >
          {SKILL_LIST.map(({ id, content }) => (
            <motion.li
              key={id}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              className="leading-relaxed list-disc"
            >
              {content}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {tab === 'Education' && (
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="ml-4"
        >
          <motion.li
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="leading-relaxed list-disc"
          >
            {EDUCATION.content}
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            className="leading-relaxed list-disc"
          >
            {EDUCATION.year}
          </motion.li>
        </motion.ul>
      )}
    </>
  );
};

export default TabContent;
