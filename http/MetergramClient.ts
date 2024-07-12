import BaseClient from "./BaseClient"
import { ResponseEntity } from "express"; // Assuming ResponseEntity is similar to express's Response

import { HOSTNAME } from "../util/HostnameConfig";
import {GetUsersResponseBody} from "../model/get/GetUserResponseBody";
import {AxiosResponse} from "axios";
import {CreateUserRequest} from "../model/post/CreateUserRequest";
import {CreateUserResponse} from "../model/post/CreateUserResponse";
import {RegisterUserRequest} from "../model/post/RegisterUserRequest";
import {RegisterUserResponse} from "../model/post/RegisterUserResponse";

export class MetergramClient extends BaseClient {
    // private static readonly authenticate = "/login";
    // private Token: string;

    // private postAuthRequestBody: PostAuthRequestBody = {
    //     email: "nikola_nikolik@hotmail.com",
    //     password: ""
    // };

    constructor() {
        super();
        this.baseUrl = HOSTNAME;
        // this.authenticateOnTheSite(this.postAuthRequestBody);
        // const responseEntity: ResponseEntity<PostAuthResponseBody> = this.authenticateOnTheSite(this.postAuthRequestBody);
        // this.Token = responseEntity.body.token;
        this.addHeader("Content-Type", "application/json");
        // this.addHeader("Authorization", `Bearer ${this.Token}`);
    }

    // public authenticateOnTheSite(postAuthRequestBody: PostAuthRequestBody): ResponseEntity<PostAuthResponseBody> {
    //     return this.post(MetergramClient.authenticate, postAuthRequestBody);
    // }

    public getUserById(id: number): ResponseEntity<GetUsersResponseBody> {
        return this.get( "users/" + id);
    }

    async getUsers(page: number, perPage: number): Promise<AxiosResponse<GetUsersResponseBody>> {
        return await this.get<GetUsersResponseBody>(`users?page=${page}&per_page=${perPage}`);
    }

    async createUser(request: CreateUserRequest): Promise<AxiosResponse<CreateUserResponse>> {
        return await this.post<CreateUserResponse>('users', request);
    }

    async deleteUser(userId: number): Promise<AxiosResponse<void>> {
        return await this.delete<void>(`users/${userId}`);
    }

    async registerUser(request: RegisterUserRequest): Promise<AxiosResponse<RegisterUserResponse>> {
        return await this.post<RegisterUserResponse>('register', request);
    }
}