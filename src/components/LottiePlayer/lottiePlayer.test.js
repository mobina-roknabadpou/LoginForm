import React from 'react';
import { render } from '@testing-library/react';
import LottiePlayer from './index.jsx';

// Mock the Player component
jest.mock('@lottiefiles/react-lottie-player', () => ({
  Player: jest.fn(({ src, ...props }) => <div data-testid="lottie-player" {...props}>{src}</div>)
}));

describe('LottiePlayer component', () => {
  test('Renders with correct props', () => {
    render(<LottiePlayer />);
    
    expect(Player).toHaveBeenCalledWith(
      expect.objectContaining({
        autoplay: true,
        loop: true,
        src: 'loading.json',
        style: { height: '30px', width: '30px' }
      }),
      {}
    );
  });

  test('Renders the correct lottie file', () => {
    const { getByTestId } = render(<LottiePlayer />);
    const lottiePlayer = getByTestId('lottie-player');

    expect(lottiePlayer.textContent).toBe('loading.json');
  });
});
