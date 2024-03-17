import { failCode } from "./generate/src/fail-code";
import type _ApiSchema from "./generate/generate/api-schema.d.ts";
export type ApiSchema = typeof _ApiSchema;
export declare const FailCode: {
    NETWORK_ERROR: () => string;
    INTERNAL_SERVER_ERROR: () => string;
    NOT_FOUND: () => string;
    NOT_ALLOW_METHOD: () => string;
    TYPE_SAFE_ERROR: (params: {
        path: string;
        expected: string;
        value: string;
    }) => string;
    BUSINESS_FAIL: (message: string) => string;
};
export type ExecutePath = keyof ApiSchema["apiMethodsSchema"];
export type ExecuteParams<Path extends keyof ApiSchema["apiMethodsSchema"]> = Awaited<Parameters<ApiSchema["apiMethodsTypeSchema"][Path]["api"]["action"]>[0]>;
export type ExecuteResult<Path extends keyof ApiSchema["apiMethodsTypeSchema"]> = {
    success: true;
    data: Awaited<ReturnType<ApiSchema["apiMethodsTypeSchema"][Path]["api"]["action"]>>;
} | {
    success: false;
    fail: Fail<keyof typeof failCode>;
};
export type ExecuteMethodResult<Path extends keyof ApiSchema["apiMethodsTypeSchema"]> = Awaited<ReturnType<ApiSchema["apiMethodsTypeSchema"][Path]["api"]["action"]>>;
export type Fail<FailCode extends keyof typeof failCode> = {
    code: FailCode;
    message: string;
    data: Parameters<(typeof failCode)[FailCode]>[0];
};
