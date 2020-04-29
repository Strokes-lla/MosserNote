import instance from '../config/index'
import qs from 'qs'

export default {
  getData(data) {
    return instance.post(instance.wapUrl + "", qs.stringify(data))
  },

  getHtml(data) {
    return instance.post("/getHtml", qs.stringify(data))
  },


  getWeather(str) {
    return instance.get("http://api.map.baidu.com/telematics/v3/weather?location=杭州&output=json&ak=EGgzZ22dsboWQEcPQ6KDQLknQd3YkkkP")
  },
}
