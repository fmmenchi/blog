import { render } from '@testing-library/react';

import BlogList from './blog-list';

describe('BlogList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogList />);
    expect(baseElement).toBeTruthy();
  });
});
