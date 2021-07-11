
/**
 * 在线校验：https://www.regexpal.com/ 
 */


/**
 * 邮箱email
 */
export const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z0-9-]{2,63}$/i

/**
 * 密码
 * 长度在8~32之间
 */
 export const PASSWORD_REGEXP = /^(?=.*[a-zA-Z])(?=.*\d)[^]{8,32}$/


 /**
  * 强秘密
  * 必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-32之间)
  */
  export const PASSWORD_HIGH_SECURITY_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/

/**
 * 中国手机号码
 * https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md
 */
export const CHINA_MOBILE_PHONE_NUMBER_REGEXP = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/

/**
 * 中国电话号码（座机）
 * 0511-4405222、021-87888822
 */
export const CHINA_PHONE_NUMBER_REGEXP = /\d{3}-\d{8}|\d{4}-\d{7}/

/**
 * 中国大陆身份证号
 * 一代身份证（15位）： ^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$
 * 二代身份证（18位）： ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$
 */
 export const CHINA_ID_CARD_REGEXP = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/

/**
 * 非零开头的最多带两位小数的数字
 * 金额校验
 */
 export const NUMBER_PRICE_REGEXP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/

/**
 * 数字
 */
 export const NUMBER_REGEXP = /^[0-9]*$/

/**
 * 汉字
 */
 export const CHINESE_CHARACTER_REGEXP = /^[\u4e00-\u9fa5]{0,}$/


/**
 * url is http(s) url or ip 
 */
 export const URL_REGEXP = /(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/i

/**
 * url start with http(s)
 */
 export const URL_START_WITH_HTTPS_REGEXP = /(http|https):\/\/([\w.]+\/?)\S*/　

/**
 * 匹配符合 i18n.t()格式的字符串
 * i18n.t('prototype_default_name')   -->    /i18n\.t\('[\w]+')/
 * i18n.t('prototype_default_name', {count: Math.max(myCount,1)})  --> /i18n\.t\(('[\w]+'){1}(\s*,\s*\{([^{}]+)\})+\)/
 * i18n.t('prototype_default_name', {name: `name is ${me.name}`})
 * 在一段长篇幅的文本中进行检索，常配合 match 方法一起使用，如 string.match(I18N_REGEXP)
 * 此处需要带 /g ，表示全文搜索
 */
 export const I18N_REGEXP = /i18n\.t\(('[\w]+'){1}(\s*,\s*\{(([^{}]+)|(`[\w]*\$\{[^{}']+[\w]*\}`))\})*\)/g


/**
 * 匹配HTML标签，如<body>、<body class="red" value="<"> 等
 * 只能匹配单个标签
 */
 export const HTML_TAG_REGEXP = / <("[^"]*"|'[^']*'|[^'">])*>/　


 
 