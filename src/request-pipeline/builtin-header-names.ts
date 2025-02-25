// -------------------------------------------------------------
// WARNING: this file is used by both the client and the server.
// Do not use any browser or node-specific API!
// -------------------------------------------------------------
/* eslint hammerhead/proto-methods: 2 */

export default {
    authorization:      'authorization',
    wwwAuthenticate:    'www-authenticate',
    proxyAuthorization: 'proxy-authorization',
    proxyAuthenticate:  'proxy-authenticate',
    host:               'host',
    referer:            'referer',
    origin:             'origin',
    contentLength:      'content-length',
    cookie:             'cookie',
    setCookie:          'set-cookie',
    ifModifiedSince:    'if-modified-since',
    ifNoneMatch:        'if-none-match',
    contentType:        'content-type',
    location:           'location',
    xFrameOptions:      'x-frame-options',
    sourceMap:          'sourcemap',
    referrerPolicy:     'referrer-policy',
    refresh:            'refresh',
    link:               'link',
    cacheControl:       'cache-control',
    pragma:             'pragma',
    eTag:               'etag',
    contentDisposition: 'content-disposition',
    accept:             'accept',
    contentEncoding:    'content-encoding',
    expires:            'expires',
    trailer:            'trailer',
    transferEncoding:   'transfer-encoding',

    serviceWorkerAllowed: 'service-worker-allowed',

    accessControlAllowOrigin:         'access-control-allow-origin',
    accessControlAllowCredentials:    'access-control-allow-credentials',
    contentSecurityPolicy:            'content-security-policy',
    contentSecurityPolicyReportOnly:  'content-security-policy-report-only',
    xContentSecurityPolicy:           'x-content-security-policy',
    xContentSecurityPolicyReportOnly: 'x-content-security-policy-report-only',
    xWebkitCsp:                       'x-webkit-csp',
    isApiRequest:                     'is-api-request',
};
