/*
 * @description: 格式化时间
 * @author: huxianghe
 * @lastEditors: huxianghe
 * @Date: 2019-03-27 13:27:26
 * @LastEditTime: 2019-03-27 16:05:15
 */

 export interface timeFormat {
   year?: number | string
   months?: number | string
   days?: number | string
   hours?: number | string
   minutes?: number | string
   seconds?: number | string
 }

/**
 * 返回 YYYY-MM-DD HH:MM:SS 的格式
 */
export function timestampsToDate (t: Date = new Date()): string {
  const date = new Date(t)
  const year = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const min = date.getMinutes()
  const sec = date.getSeconds()
  const month = m < 10 ? ('0' + m) : m
  const days = d < 10 ? ('0' + d) : d
  const hours = h < 10 ? ('0' + h) : h
  const minutes = min < 10 ? ('0' + min) : min
  const seconds = sec < 10 ? ('0' + sec) : sec
  return `${year}-${month}-${days} ${hours}:${minutes}:${seconds}`
}

/**
 * 天/时/分/秒
 * start   开始时间
 * end     结束时间
 */
export function timeIntervalToDate (start: number, end: number): timeFormat {
  const interval = end - start
  const d = parseInt((interval / 3600 / 24) + '')
  const h = parseInt((interval / 3600 % 24) + '')
  const m = parseInt((interval % 3600 / 60) + '')
  const s = parseInt((interval % 3600 % 60) + '')
  const days = d < 10 ? ('0' + d) : d
  const hours = h < 10 ? ('0' + h) : h
  const minutes = m < 10 ? ('0' + m) : m
  const seconds = s < 10 ? ('0' + s) : s
  if (interval < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  } else {
    return { days, hours, minutes, seconds }
  }
  
}
