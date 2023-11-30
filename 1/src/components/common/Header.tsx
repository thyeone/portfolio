import { Link } from 'react-router-dom';

const NAVIGATE_LIST = [
  {
    id: 1,
    title: 'Home',
    path: '',
  },
  {
    id: 2,
    title: 'Project',
    path: 'project',
  },
  {
    id: 3,
    title: 'Portfolio',
    path: 'portfolio',
  },
];

const Header = () => {
  return (
    <header className="w-full h-[35px] bg-transparent flex items-center gap-x-6 select-none mb-16">
      {NAVIGATE_LIST.map(({ id, title, path }) => (
        <Link to={`/${path}`}>
          <span key={id} className="cursor-pointer duration-300 hover:text-[rgba(255,255,255,0.5)]">
            {title}
          </span>
        </Link>
      ))}
    </header>
  );
};

export default Header;
