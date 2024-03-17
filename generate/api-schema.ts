/**
 * ⚠️ This file is generated and modifications will be overwritten
 */

// api
import type * as helloWorld$say from '../src/apps/hello-world/say'

import _apiValidator from './products/api-validator.ts'

export default {
  apiValidator: _apiValidator,
  apiMethodsSchema: {
    'hello-world/say': () => ({ module: import('../src/apps/hello-world/say') }),
    
  },
  apiMethodsTypeSchema: {
    'hello-world/say': undefined as unknown as typeof helloWorld$say,
    
  },
  apiTestsSchema: {
    'hello-world/say': () => ({ module: import('../src/apps/hello-world/say') }),
    
  },
}