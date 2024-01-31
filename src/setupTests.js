import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import { configure as configureTestingLibrary } from '@testing-library/react';

import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
configureTestingLibrary({ testIdAttribute: 'data-test-id' });
