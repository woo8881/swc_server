

/**
 * @namespace
 */
var codec = {};


/**
 * @namespace
 */
codec.json = {};


/**
 * @namespace
 */
codec.form = {};


/**
 * @namespace
 */
codec.cookies = {};


/**
 * @namespace
 */
codec.base64 = {};


/**
 * @namespace
 */
codec.url = {};


/**
 * @param {string} string
 * @return {string}
 */
codec.base64.encode = function(string) {};


/**
 * @param {string} string
 * @return {string}
 */
codec.base64.decode = function(string) {};


/**
 * @enum {string}
 */
codec.cookies.AV = {
  'EXPIRES': 'expires',
  'MAX_AGE': 'max-age',
  'DOMAIN': 'domain',
  'PATH': 'path',
  'SECURE': 'secure',
  'HTTP_ONLY': 'httponly'
};



/**
 * @param {string} key
 * @param {string} value
 * @constructor
 */
codec.cookies.Cookie = function(key, value) {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getKey = function() {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getValue = function() {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getExpires = function() {};


/**
 * @param {string} expires
 */
codec.cookies.Cookie.prototype.setExpires = function(expires) {};


/**
 * @return {number}
 */
codec.cookies.Cookie.prototype.getMaxAge = function() {};


/**
 * @param {number} maxAge
 */
codec.cookies.Cookie.prototype.setMaxAge = function(maxAge) {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getDomain = function() {};


/**
 * @param {string} domain
 */
codec.cookies.Cookie.prototype.setDomain = function(domain) {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.getPath = function() {};


/**
 * @param {string} path
 */
codec.cookies.Cookie.prototype.setPath = function(path) {};


/**
 *
 */
codec.cookies.Cookie.prototype.makeSecure = function() {};


/**
 *
 */
codec.cookies.Cookie.prototype.makeHttpOnly = function() {};


/**
 * @return {string}
 */
codec.cookies.Cookie.prototype.toString = function() {};


/**
 * @param {!codec.cookies.Cookie} cookie
 * @return {string}
 */
codec.cookies.encode = function(cookie) {};


/**
 * @param {string} string
 * @return {?codec.cookies.Cookie}
 */
codec.cookies.decode = function(string) {};


/**
 * @param {!Object} data
 * @return {string}
 */
codec.form.encode = function(data) {};


/**
 * @param {string} string
 * @return {?Object}
 */
codec.form.decode = function(string) {};


/**
 * @param {*} data
 * @return {string}
 */
codec.json.encode = function(data) {};


/**
 * @param {string} string
 * @return {?Object}
 */
codec.json.decode = function(string) {};


/**
 * @param {string} urlString
 * @return {!url.URL}
 */
codec.url.decode = function(urlString) {};
