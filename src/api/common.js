import request from "@/utils/request";
export function getFBData(param) {
  let encryptParam = {};
  encryptParam = param;
  return request({
    url: param.url,
    method: "post",
    //传递参数
    data: encryptParam,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    transformRequest: function (obj) {
      var str = [];
      for (var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      return str.join("&");
    },
  });
}
