/** Browser window */
import type { IconProps } from '../../types';

export function Website({
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
      <g transform="translate(3 3)" fillRule="evenodd">
        <path d="m2.5.5h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
        <path
          d="m2.5 2.5h10c1.1045695 0 2 .8954305 2 2v-2c0-1-.8954305-2-2-2h-10c-1.1045695 0-2 1-2 2v2c0-1.1045695.8954305-2 2-2z"
          fill={color}
        />
      </g>
    </svg>
  );
}
