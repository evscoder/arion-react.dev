import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from '../data/data';
import dashboardData from '../data/dashboard';

const useMockAdapter = () => {
    const mock = new MockAdapter(axios, {delayResponse: 1000});

    mock.onGet('/api/data').reply(200, data);
    mock.onGet('/api/dashboard').reply(200, dashboardData);
};

export default useMockAdapter;
