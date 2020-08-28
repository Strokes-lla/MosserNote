export const dateFormat = function (dateValue, string) {          //格式化日期
  let dateObj = dateValue === 'now' ? new Date() : new Date(dateValue);
  let json_inf = {
    'Y+': dateObj.getFullYear(),
    'M+': dateObj.getMonth() + 1 > 9 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1),
    'D+': dateObj.getDate() > 9 ? dateObj.getDate() : '0' + dateObj.getDate(),
    'h+': dateObj.getHours() > 9 ? dateObj.getHours() : '0' + dateObj.getHours(),
    'm+': dateObj.getMinutes() > 9 ? dateObj.getMinutes() : '0' + dateObj.getMinutes(),
    's+': dateObj.getSeconds() > 9 ? dateObj.getSeconds() : '0' + dateObj.getSeconds(),
    'q+': Math.floor((dateObj.getMonth() + 3) / 3),
    'w+': dateObj.getDay(),
    'S+': function () {
      if (dateObj.getMilliseconds() < 10) {
        return '00' + dateObj.getMilliseconds();
      } else if (dateObj.getMilliseconds() > 9 && dateObj.getMilliseconds() < 100) {
        return '0' + dateObj.getMilliseconds();
      } else {
        return dateObj.getMilliseconds();
      }
    }
  };
  for (let key in json_inf) {
    let re = new RegExp(key);
    if (re.test(string)) {
      string = string.replace(re, (json_inf[key]));
    }
  }
  return string;
};
