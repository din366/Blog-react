import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
