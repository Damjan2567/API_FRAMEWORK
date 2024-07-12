import { describe, test, expect, beforeEach } from '@jest/globals';
import { MetergramClient } from '../http/MetergramClient';
import { AxiosResponse } from 'axios';
import { CreateUserRequest } from '../model/post/CreateUserRequest';
import { CreateUserResponse } from '../model/post/CreateUserResponse';

describe('MetergramClient Tests', () => {
    let metergramClient: MetergramClient;

    beforeEach(() => {
        metergramClient = new MetergramClient();
    });

    test('CreateUser', async () => {
        const request: CreateUserRequest = {
            name: 'John Doe',
            job: 'Software Developer'
        };

        const response: AxiosResponse<CreateUserResponse> = await metergramClient.createUser(request);
        const user: CreateUserResponse = response.data;

        expect(user.name).toBe(request.name);
        expect(user.job).toBe(request.job);
        expect(user.id).toBeDefined();
        expect(user.createdAt).toBeDefined();
    });
});