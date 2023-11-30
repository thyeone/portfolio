import Layout from '@components/common/Layout';
import { motion } from 'framer-motion';
import { PORTFOLIO_LIST } from '@constants/portfolio';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Url from '@assets/project/url.svg';

const Portfolio = () => {
  return (
    <Layout>
      <h1 className="mb-12 text-4xl font-bold pb-5 border-b-[1px]">My Protfolio.</h1>
      {PORTFOLIO_LIST.map(({ id, title, image, problem, solution, url }) => (
        <Fragment key={id}>
          <h2 className="text-2xl font-semibold mt-7">{id + '. ' + title}</h2>
          <div
            className={`${
              !image && 'md:justify-start'
            } flex flex-col justify-center mt-8 md:flex-row gap-y-8 md:gap-x-10 md:items-center`}
          >
            {image && (
              <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -180 }}
                viewport={{ once: true }}
                style={{
                  opacity: 0.1,
                  background: `url(${image})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
                transition={{ ease: 'easeOut', duration: 0.8 }}
                className="relative w-full max-w-sm rounded-md h-80"
              >
                {url && (
                  <div className="absolute w-full h-full flex gap-x-2 justify-center items-center bg-[#191919] rounded-md opacity-0 hover:opacity-80 z-10 transition-all top-0 cursor-pointer">
                    <Link target="_blank" to={url}>
                      <div className="w-12 h-12 rounded-full border-solid border-[1px] flex justify-center items-center hover:border-opacity-20">
                        <Url width="32" height="32" />
                      </div>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: 'easeOut', duration: 1.5 }}
              className="flex flex-col gap-y-2"
            >
              {!image && url && (
                <Link
                  target="_blank"
                  to={url}
                  className="text-xs text-black bg-white rounded p-1 w-fit hover:bg-[rgba(255,255,255,0.5)] transition-all mb-2"
                >
                  Blog Post
                </Link>
              )}
              <h3 className="text-lg">{`[문제 상황]`}</h3>
              {problem}
              <h3 className="text-lg">{`[해결 과정]`}</h3>
              {solution}
            </motion.div>
          </div>
        </Fragment>
      ))}
    </Layout>
  );
};

export default Portfolio;
