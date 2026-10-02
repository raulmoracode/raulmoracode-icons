/** Envelope */
import type { IconProps } from '../../types';

export function Mail({
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
      viewBox="0 0 21 21"
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
      <g transform="translate(3.5 4.5)" fillRule="evenodd">
        <path d="m0 2v8c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-10c-1.1045695 0-2 .8954305-2 2z" />
        <path d="m2 3 5 3 5-3" />
      </g>
    </svg>
  );
}
