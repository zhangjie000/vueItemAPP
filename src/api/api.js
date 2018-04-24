/**
 * Created by jerry on 2017/4/13.
 */
import axios from 'axios'
import qs from 'qs';


let sh_url,fz_url,hyft_url,hyft,baifu;
//使用document.domain，实现跨域,axios.create({'content-type': 'application/x-www-form-urlencoded'})实现代理
let url=document.domain;
console.log(url);
if(url=="check.account.czytest.colourlife.com"){


  //fz_url='http://account.allot.test.colourlife.com'
}else if(url=="check.account.colourlife.com"){


  //fz_url="http://fzsvr-czytest.colourlife.com";
}else if(url=="localhost"){
  sh_url='http://check.account.czytest.colourlife.com';
  fz_url="http://fzsvr-czytest.colourlife.com";
  hyft_url="http://www.hyft88.com"
  hyft="http://hyft.www.hyft88.com"
  /*baifu="http://jspang.com"*/
  console.log(baifu)
  //fz_url='http://account.allot.test.colourlife.com'
}else{


}

let instance = axios.create({
  headers: {'content-type': 'application/x-www-form-urlencoded'}
});
//订单搜索~~
export const backendOrderOrg = params => { return instance.get(`${sh_url}/backend/order/org`,params).then(res => res.data) };

var backendOrderOrg=function (params) {
  instance.get(`${sh_url}/backend/order/org`,params).then(res => res.data)

  

}
//投资列表
export const urlList = params => { return instance.get(`${hyft_url}/Home/LoadPrizes`,params).then(res => res.data) };
export const prize = params => {return instance.post(`${hyft}/Home/LoadPrizes`,params).then(res => res.data) }
/*export const baidu = params => {return instance.post(`${baidu}/wp-content/uploads/2018/04/vuekoa2.jpg`,params).then(res => res.data) }
*/
//列表导出
export const backendOrderExcel = params => { return instance.get(`${sh_url}/backend/order/excel`,params).then(res => res.data) };
//用户登录
export const SH_Login = params => { return instance.post(`${sh_url}/employee/login`, qs.stringify(params)).then(res => res.data) };


