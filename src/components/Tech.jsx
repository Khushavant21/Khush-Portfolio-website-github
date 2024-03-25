// import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../style';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I know</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-12">
        {technologies.map((tech, index) => (
          <motion.div
            variants={fadeIn('up', 'spring', index * 0.07, 0.75)}
            className="w-28 h-28"
            key={tech.name}>
            <img src={tech.icon} alt={tech.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
