import cn from 'classnames';
export default function Container({ children, className }) {
  return <div className={cn('max-w-7xl w-full m-auto', className)}>{children}</div>;
}
