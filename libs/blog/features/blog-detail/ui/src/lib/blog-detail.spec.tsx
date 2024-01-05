import { render } from '@testing-library/react';

import BlogDetail from './blog-detail';

describe('BlogDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogDetail />);
    expect(baseElement).toBeTruthy();
  });
});
