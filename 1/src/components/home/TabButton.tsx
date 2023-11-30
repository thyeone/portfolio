import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type TabButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tab: Tab;
};

const TabButton = ({ children, tab, ...rest }: PropsWithChildren<TabButtonProps>) => {
  return (
    <button {...rest} className="text-[18px] mb-1.5 h-[21px] duration-300 hover:text-[rgba(255,255,255,0.5)]">
      <span className={`${tab !== children && 'opacity-50'}`}>{children}</span>
      {tab === children && <motion.div className="h-1 bg-cyan-300" layoutId="h-1 bg-cyan-300" />}
    </button>
  );
};

export default TabButton;
