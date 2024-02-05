import React from 'react';
import axios from 'axios';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import ImageList from './ImageListAxios';

jest.mock('axios');

describe('ImageList', () => {
  it('should render no data prompt when no images', async () => {
    const mockedData = { products: [] };
    axios.get.mockResolvedValue({ data: mockedData });

    const wrapper = await act(async () => render(<ImageList />));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct image items when have data', async () => {
    const mockedData = {
      products: [
        {
          id: '1',
          title:
            '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
          images: ['https://bit.ly/4228IT0'],
        },
        {
          id: '2',
          title: '島波海道。單車跳島之旅',
          images: ['https://bit.ly/4b5nLPO'],
        },
      ],
    };
    axios.get.mockResolvedValue({ data: mockedData});

    const wrapper = await act(async () => render(<ImageList />));

    expect(wrapper).toMatchSnapshot();
  });
});
