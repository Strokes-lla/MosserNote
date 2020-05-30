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
    return instance.get("http://wthrcdn.etouch.cn/weather_mini?city=" + str)
  },
}
