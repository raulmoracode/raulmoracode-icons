import type { IconProps } from '../../types';

export function Windows({
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
      <path d="M3 5.3 10.8 4.2v7.3H3V5.3Zm8.8-1.2L21 2.8v8.7h-9.2V4.1ZM3 12.5h7.8v7.3L3 18.7v-6.2Zm8.8 0H21v8.7l-9.2-1.3v-7.4Z" />
    </svg>
  );
}
