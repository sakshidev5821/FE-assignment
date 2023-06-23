import { render, screen, fireEvent } from '@testing-library/react';
import Calendar from './Calender';

describe('Calendar', () => {
  test('renders correct month name', () => {
    const specificDate = new Date(2023, 5, 1); // June 2023
    render(<Calendar specificDate={specificDate} />);
    
    const monthNameElement = screen.getByRole('heading');
    expect(monthNameElement.textContent).toBe('June 2023');
  });

  test('renders calendar cells correctly', () => {
    const specificDate = new Date(2023, 5, 1); // June 2023
    render(<Calendar specificDate={specificDate} />);
    
    const calendarCells = screen.getAllByRole('button');
    expect(calendarCells).toHaveLength(30); // Assuming a 5x7 calendar grid
    
    // Example: Check if the first day of the month is rendered correctly
    expect(calendarCells[0].textContent).toBe('1'); // May 30th, 2023
    
    // Example: Check if clicking on a cell updates the date state
    fireEvent.click(calendarCells[7]); 
    expect(calendarCells[7].classList).toContain('current-day');
  });
});
