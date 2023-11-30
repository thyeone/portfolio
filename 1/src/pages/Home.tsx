import Layout from '@components/common/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import photo from '@assets/home/photo.png';
import TabButton from '@components/home/TabButton';
import TabContent from '@components/home/TabContent';
import { ABOUT, CHANNEL } from '@constants/home';
import { isEmail } from '@utils/index';

const Home = () => {
  const [tab, setTab] = useState<Tab>('Skills');

  return (
    <Layout>
      <div className="flex flex-wrap justify-around mt-[30px] gap-[50px]">
        <motion.img
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -50 }}
          style={{ opacity: 0.1 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          src={photo}
          className="w-[250px] h-[250px] rounded-full"
          alt="photo"
        />
        <div className="flex flex-col gap-y-[10px] w-full max-w-[400px]">
          <h2 className="text-[24px] font-bold">About Me</h2>
          <p className="whitespace-pre-wrap">{ABOUT}</p>
          <div className="flex mt-3 text-sm text-gray-400 gap-x-4">
            {CHANNEL.map(({ id, title, link }) => (
              <a target="_blank" href={isEmail(link) ? `mailto:${link}` : link}>
                <span key={id} className="duration-300 cursor-pointer hover:text-white">
                  {title}
                </span>
              </a>
            ))}
          </div>
          <div className="flex mt-10 mb-5 gap-x-5">
            <TabButton tab={tab} onClick={() => setTab('Skills')}>
              Skills
            </TabButton>
            <TabButton tab={tab} onClick={() => setTab('Education')}>
              Education
            </TabButton>
          </div>
          <TabContent tab={tab} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
