/**
 * string camel to snake
 * helloWorld --> hello_world
 */ 
export const camelToSnake = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)

/**
 * string snake to camel
 * hello_world --> helloWorld, hello_API --> helloAPI
 */ 
export const snakeToCamel = str => str.replace(/([-_]\w)/g, letter => letter[1].toUpperCase()) 

/**
 * string snake to camel
 * hello_world --> helloWorld, hello_API --> helloApi
 */
export const snakeToCamel2 = str => str.toLowerCase().replace(/([-_]\w)/g, letter => letter[1].toUpperCase()) 
