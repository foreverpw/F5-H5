import util from './utils'
import config from '../config'

export default {
  squareImgUrl (url,size=100) {
    if(url.indexOf('https://wx.qlogo.cn')!==-1){
        return url
    }else{
        return url+`?x-oss-process=image/resize,m_fill,h_${size},w_${size}`
    }
  },
  textEllipsis(str,len=100){
    if(!str) return ''
    len = len*2
    var size = 0
    for (var i=0; i<str.length; i++) {
      var charCode = str.charCodeAt(i);  
      if (charCode >= 0 && charCode <= 128) len-=1;
      else len-=2
      if(len>=0){
        size++
      }
    }
    var result = ''
    if(size<str.length){
      result =  str.slice(0,size)+'...'
    }else{
      result = str
    }
    return result
  },
  date (date,fmt='YYYY/MM/DD HH:mm') {
    date = new Date(date)
    if(!date || date=='Invalid Date'){
      return ''
    }
    return util.formatDate(date,fmt);
  },
  imgDownloadUrl(url){
    let encodedUrl = encodeURIComponent(url)
    return config.serviceDomain+'/image/download?url='+encodedUrl
  }
}

