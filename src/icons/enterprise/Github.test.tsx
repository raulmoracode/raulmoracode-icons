import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Github } from './Github';

describe('Github', () => {
  it('renders without crashing', () => {
    const { container } = render(<Github />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies custom size', () => {
    const { container } = render(<Github size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('applies custom color', () => {
    const { container } = render(<Github color="#ff0000" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('fill', '#ff0000');
  });

  it('applies custom className', () => {
    const { container } = render(<Github className="custom-class" />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    const { container } = render(<Github style={{ opacity: 0.5 }} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveStyle({ opacity: '0.5' });
  });

  it('has correct viewBox', () => {
    const { container } = render(<Github />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 496 512');
  });

  it('has aria-hidden', () => {
    const { container } = render(<Github />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
  });
});
