import Layout from '@components/common/Layout';
import { PROJECT_LIST } from '@constants/project';
import ProjectItem from '@components/project/ProjectItem';

const Project = () => {
  return (
    <Layout>
      <h1 className="mb-20 text-4xl font-bold pb-5 border-b-[1px]">My Projects.</h1>
      <ul className="flex flex-col gap-y-20">
        {PROJECT_LIST.map((item) => (
          <ProjectItem key={item.id} {...item} />
        ))}
      </ul>
    </Layout>
  );
};

export default Project;
