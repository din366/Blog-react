import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
  className?: string,
}

const Loader = ({ className }:LoaderProps) => (
  <div className={classNames('lds-dual-ring', {}, [className])} />
);

export default Loader;
