import instance from '../config/index'
import qs from 'qs'

export default {
  getData(data) {
    return instance.post(instance.wapUrl + "", qs.stringify(data))
  },

  getHtml(data) {
    return instance.post(instance.wapUrl + "/getHtml", qs.stringify(data))
  },
}
