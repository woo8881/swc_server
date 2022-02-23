

/**
 * @namespace
 */
var url = {};


/**
 * @param {string} urlStr
 * @param {boolean=} opt_parseQueryString
 * @param {boolean=} opt_slashesDenoteHost
 * @return {url.URL}
 */
url.parse = function(urlStr, opt_parseQueryString, opt_slashesDenoteHost) {};


/**
 * @typedef {{href: ?string, protocol: ?string, host: ?string, auth: ?string,
 *    hostname: ?string, port: ?string, pathname: ?string, search: ?string,
 *    path: ?string, query: ?string, hash: ?string}}
 */
url.URL;
