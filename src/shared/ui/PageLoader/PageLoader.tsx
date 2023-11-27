import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string,
}

const PageLoader = ({ className }:PageLoaderProps) => (
  <div className={cls.PageLoader}>
    <Loader />
  </div>

);

export default PageLoader;
