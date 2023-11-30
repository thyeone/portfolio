import { ProjectType } from '@constants/project';
import { motion } from 'framer-motion';
import GitHub from '@assets/project/github.svg';
import Url from '@assets/project/url.svg';
import { Link } from 'react-router-dom';

const ProjectItem = (props: ProjectType) => {
  const { id, icon, title, period, github, service, description, stack, detail } = props;

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: 'easeOut', duration: 1.5 }}>
      <li className="flex flex-col md:flex-row">
        <div className="flex items-center md:flex-col md:items-start">
          <div className="flex items-center justify-center w-24 h-24 p-2 mr-4 overflow-hidden bg-white rounded-lg">
            <img src={icon} />
          </div>
          <div className="w-48">
            <h2 className="text-2xl font-semibold md:mt-6">{title}</h2>
            <p className="text-gray-400">{period}</p>
            <div className="flex mt-2 gap-x-1">
              <Link target="_blank" to={github}>
                <GitHub width="24" height="24" />
              </Link>
              {service && (
                <Link target="_blank" to={service}>
                  <Url width="24" height="24" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="md:border-solid md:border-l-[1px] md:pl-6 max-md:mt-10">
          <h3 className="mb-4 text-lg font-semibold">서비스 소개</h3>
          <div className="w-fit p-4 rounded-md bg-[#262626]">
            <p className="text-sm">{description}</p>
          </div>
          <h3 className="mt-5 mb-4 text-lg font-semibold">기술 스택</h3>
          <div className="w-fit p-4 rounded-md bg-[#262626]">
            {id === 3 ? <span>{stack}</span> : <img src={stack} />}
          </div>
          {detail}
        </div>
      </li>
    </motion.div>
  );
};

export default ProjectItem;
