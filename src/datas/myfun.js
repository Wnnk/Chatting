import { i } from "@dcloudio/vue-cli-plugin-uni/packages/postcss/tags"

export default{
  dateTime(d){
    let old = new Date(d)
    let now = new Date()
    
    let day = old.getTime()
    let h = old.getHours()
    let m = old.getMinutes()
    let Y = old.getFullYear()
    let M = old.getMonth()+1
    let D  = old.getDate()

    let nday = now.getTime()
    let nh = now.getHours()
    let nm = now.getMinutes()
    let nY = now.getFullYear()
    let nM = now.getMonth()+1
    let nD  = now.getDate()

    if (D === nD && M ===nM && Y ===nY) {
      if (h<10) {
        h = "0"+h
      }else if(m<10){
        m = "0"+m
      }
      return  h+":"+m
    }

    if (D+1 === nD && M ===nM && Y ===nY) {
      if (h<10) {
        h = "0"+h
      }else if(m<10){
        m = "0"+m
      }
      return  "前天"+h+":"+m
    }else{
      return Y+"/"+M+"/"+D
    }

    

    
  }
  
 
}