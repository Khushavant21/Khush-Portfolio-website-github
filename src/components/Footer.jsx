import { motion } from 'framer-motion';
import { profileLinks } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { styles } from '../style';

const Footer = () => {
  return (
    <>
      <motion.div className="w-full flex justify-between max-w-7xl mx-auto sm:px-16 px-6 pb-5">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {profileLinks.map((profile) => (
            <a
              key={profile.id}
              className="text-secondary hover:text-white text-[35px] font-medium cursor-pointer"
              href={profile.url}
              target="_blank"
              rel="noreferrer">
              <ion-icon name={profile.icon}></ion-icon>
            </a>
          ))}
        </ul>
        <p className="sm:text-[20px] text-[14px] sm:mx-0 mx-auto text-secondary tracking-wider"> Love from Khushavant, Thank you for Visit 🙏</p>
      </motion.div>
    </>
  );
};

export default Footer;
