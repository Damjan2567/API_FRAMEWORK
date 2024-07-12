import { describe, test, expect, beforeEach } from '@jest/globals';
import { MetergramClient } from '../http/MetergramClient';
import { AxiosResponse } from 'axios';
import { GetUsersResponseBody } from '../model/get/GetUserResponseBody';

describe('MetergramClient Tests', () => {
    let metergramClient: MetergramClient;

    beforeEach(() => {
        metergramClient = new MetergramClient();
    });

    test('GetUsers', async () => {
        const response: AxiosResponse<GetUsersResponseBody> | null = await metergramClient.getUsers(1, 10);
        if (response && response.data) {
            const users: GetUsersResponseBody = response.data;

            expect(users.total_pages).toBeDefined();
            expect(users.per_page).toEqual(10);
            expect(users.data.length).toBeGreaterThan(0);
            expect(users.data[4].id).toBeDefined();
            expect(users.data[4].email).toBeDefined();
            expect(users.data[4].first_name).toBeDefined();
            expect(users.data[4].avatar).toBeDefined();
        } else {
            throw new Error('Response is null or data is undefined');
        }
    });
});