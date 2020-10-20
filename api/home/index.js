import instance from '../config/index'
import qs from 'qs'

export default {
  getData(data) {
    return instance.post(instance.wapUrl + "", qs.stringify(data))
  },

  getHtml(data) {
    return instance.post("/getHtml", qs.stringify(data))
  },

  //天气查询
  getWeather(str) {
    return instance("http://wthrcdn.etouch.cn/weather_mini?city=" + str, {
      method: 'GET',
    });
  },
  //名人名言
  getMinYan() {
    return instance('http://api.tianapi.com/txapi/mingyan/index?key=7e378d999857e3b0eaaf7abc2d594f9f', {
      method: 'GET',
    });
  },
}
