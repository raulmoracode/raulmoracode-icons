import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Mail } from './Mail';

describe('Mail', () => {
  it('renders without crashing', () => {
    const { container } = render(<Mail />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom size', () => {
    const { container } = render(<Mail size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('applies custom color', () => {
    const { container } = render(<Mail color="#ff0000" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('stroke', '#ff0000');
  });

  it('applies custom className', () => {
    const { container } = render(<Mail className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    const { container } = render(<Mail style={{ opacity: 0.5 }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ opacity: '0.5' });
  });

  it('has correct viewBox', () => {
    const { container } = render(<Mail />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 21 21');
  });

  it('has aria-hidden', () => {
    const { container } = render(<Mail />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
