import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Share } from './Share';

describe('Share', () => {
  it('renders without crashing', () => {
    const { container } = render(<Share />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom size', () => {
    const { container } = render(<Share size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('applies custom color', () => {
    const { container } = render(<Share color="#ff0000" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('stroke', '#ff0000');
  });

  it('applies custom className', () => {
    const { container } = render(<Share className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    const { container } = render(<Share style={{ opacity: 0.5 }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ opacity: '0.5' });
  });

  it('has correct viewBox', () => {
    const { container } = render(<Share />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('has aria-hidden', () => {
    const { container } = render(<Share />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
