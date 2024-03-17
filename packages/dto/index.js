// packages/dto/generate/src/fail-code.ts
var failCode = {
  NETWORK_ERROR: () => "Network Error",
  INTERNAL_SERVER_ERROR: () => "Internal Server Error",
  NOT_FOUND: () => "Not Found",
  NOT_ALLOW_METHOD: () => "Not Allow Method",
  TYPE_SAFE_ERROR: (params) => `Parameter Error: The current value is '${params.value}', which does not meet '${params.expected}' requirements`,
  BUSINESS_FAIL: (message) => `${message}`
};

// packages/dto/index.ts
var FailCode = failCode;
export {
  FailCode
};
