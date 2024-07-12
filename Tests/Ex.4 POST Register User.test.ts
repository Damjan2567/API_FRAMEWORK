import { describe, test, expect, beforeEach } from '@jest/globals';
import { MetergramClient } from '../http/MetergramClient';
import { AxiosResponse } from 'axios';
import { RegisterUserRequest } from '../model/post/RegisterUserRequest';
import { RegisterUserResponse } from '../model/post/RegisterUserResponse';

describe('MetergramClient Tests', () => {
    let metergramClient: MetergramClient;
    let token: string | undefined;

    beforeEach(() => {
        metergramClient = new MetergramClient();
    });

    test('RegisterUser', async () => {
        const request: RegisterUserRequest = {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        };

        const response: AxiosResponse<RegisterUserResponse> = await metergramClient.registerUser(request);
        const registerResponse: RegisterUserResponse = response.data;

        // Store the token
        token = registerResponse.token;

        // Assertions
        expect(registerResponse.id).toBeDefined();
        expect(registerResponse.token).toBeDefined();
        expect(token).toBe(registerResponse.token);
    });
});
