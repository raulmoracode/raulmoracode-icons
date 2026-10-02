/** Upload arrow with tray */
import type { IconProps } from '../../types';

export function Share({
  size = 24,
  color = 'currentColor',
  className,
  style,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || 'size-4'}
      style={style}
      {...props}
      aria-hidden="true"
    >
      <path d="M18 22A2 2 0 0 0 20 20" />
      <path d="M4 20A2 2 0 0 0 6 22" />
      <path d="M6 22 18 22" />
      <path d="M12 6 12 18" />
      <path d="M12 6 8 10" />
      <path d="M16 10 12 6" />
      <path d="M20 20 20 14" />
      <path d="M4 14 4 20" />
    </svg>
  );
}
