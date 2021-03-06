/**
 * @ Author: zao
 * @ Create Time: 2020-08-20 18:49:22
 * @ Modified by: zao
 * @ Description: 做表单校验
 */

import { isNull, isEmpty } from 'lodash'
const EMAIL = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const PHONE = /^1[3456789]\d{9}$/;

export const required = (value: string) => {
  if (isNull(value) || isEmpty(value)) {
    return false
  } else {
    return true
  }
}

export const checkLength = (value: string, length: number) => {
  if (value.length <= length) {
    return true
  } else {
    return false
  }
}

export const isEmail = (value: string) => {
  return EMAIL.test(value)
}

export const isPhoneNumber = (value: string) => {
  return PHONE.test(value)
}

class validate {
  static required = required  
  static checkLength = checkLength
  static isEmail = isEmail
  static isPhoneNumber=isPhoneNumber
}

export default validate




