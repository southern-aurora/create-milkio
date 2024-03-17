/**
 * ⚠️ This file is generated and modifications will be overwritten
 */
import type * as helloWorld$say from '../src/apps/hello-world/say';
declare const _default: {
    apiValidator: {
        generatedAt: number;
        validate: {
            'hello-world/say': () => Promise<typeof import("./products/apps/hello-world/say.ts")>;
        };
    };
    apiMethodsSchema: {
        'hello-world/say': () => {
            module: Promise<typeof helloWorld$say>;
        };
    };
    apiMethodsTypeSchema: {
        'hello-world/say': typeof helloWorld$say;
    };
    apiTestsSchema: {
        'hello-world/say': () => {
            module: Promise<typeof helloWorld$say>;
        };
    };
};
export default _default;
