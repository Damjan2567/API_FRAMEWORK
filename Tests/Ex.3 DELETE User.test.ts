import { describe, test, expect, beforeEach } from '@jest/globals';
import { MetergramClient } from '../http/MetergramClient';
import { AxiosResponse } from 'axios';

describe('MetergramClient Tests', () => {
    let metergramClient: MetergramClient;

    beforeEach(() => {
        metergramClient = new MetergramClient();
    });

    test('DeleteUser', async () => {
        const userId = 10;

        const response: AxiosResponse<void> = await metergramClient.deleteUser(userId);

        expect(response.status).toBe(204);
    });
});
