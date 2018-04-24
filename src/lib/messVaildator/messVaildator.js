/*
* @Author: Marte
* @Date:   2018-04-19 10:48:00
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-19 11:35:42
*/

let messVaildator = {
    normal: function() {
        return !0;
    },
   /* //看是不是空字符  空false
    anyCharacter: function(a) {
        return $.trim(a).length >= 1;
    },*/
    //是否是 字母数字 下划线 横杆 不是  false
    isSerialNumber: function(a) {
        return /^[a-zA-Z0-9_-]{1,100}$/.test(a);
    },
    //是英文名字
    isEnglishName: function(a) {
        return /^[a-zA-Z_-]{1,100}$/.test(a);
    },
    isEnglishAbbreviation: function(a) {
        return /^[A-Z]{3}$/.test(a);
    },
    isPrice: function(a) {
        return /(^[1-9]\d*(\.\d{1,2})?$)|(^[-+]?[0]{1}(\.\d{1,2})?$)/.test(a);
    },
    isLGZeroPrice: function(a) {
        return /(^[-+]?[1-9]\d*(\.\d{1,2})?$)|(^[-+]?[0]{1}(\.\d{1,2})?$)/.test(a) && a > 0;
    },
    isAmount: function(a) {
        return /^-?\d+\.{0,}\d{0,}$/.test(a);
    },
    isShipments: function(a) {
        return /^\d+\.*(\.\d{1,2})?$/.test(a);
    },
    isProfitRatio: function(a) {
        var b = /(^[-+]?[1-9]\d*(\.\d{1,2})?$)|(^[-+]?[0]{1}(\.\d{1,2})?$)/.test(a);
        if (b) {
            if (0 > a) return !1;
            if (a.indexOf(".") > -1) {
                if (a.substring(0, a.indexOf(".")).length > 2) return !1;
                if (a.length > 5) return !1;
            } else if (a.length > 2 && 100 != a) return !1;
            return !0;
        }
        return !1;
    },
    isLGZeroAmount: function(a) {
        return /^-?\d+\.{0,}\d{0,}$/.test(a) && a > 0;
    },
    //是否是邮箱
    isEmail: function(a) {
        return /^\s*\w+(?:\.{0,1}[\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/i.test(a);
    },
    //是否是QQ
    isQQNumber: function(a) {
        return /^[1-9]\d{4,10}$/.test(a);
    },
    isLoginName: function(a) {
        return /^[a-zA-Z0-9_-]{6,16}$/.test(a);
    },
    isPassword: function(a) {
        return /^(((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))|((?=.*[0-9])(?=.*[^a-zA-Z0-9]))).{6,20}$/.test(a);
    },
    isPassword20: function(a) {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(a);
    },
    isAnyTwoCharPassword: function(a) {
        return /^(((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))|((?=.*[0-9])(?=.*[^a-zA-Z0-9]))).{6,16}$/.test(a);
    },
    isAnyTwoCharPassword20: function(a) {
        return /^(((?=.*[a-zA-Z])(?=.*[0-9]))|((?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]))|((?=.*[0-9])(?=.*[^a-zA-Z0-9]))).{6,20}$/.test(a);
    },
    isMoblie: function(a) {
        return /^1[345678]\d{9}$/.test(a);
    },
    isPhone: function(a) {
        return /(^[0-9]{3,4}[\-|\s][0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}1[345678]\d{9}$)/.test(a);
    },
    isPostCode: function(a) {
        return /^[0-9]{6}$/.test(a);
    },
    isValidateCode4: function(a) {
        return /^[a-zA-Z0-9]{4,4}$/.test(a);
    },
    isValidateCode5: function(a) {
        return /^[a-zA-Z0-9]{5,5}$/.test(a);
    },
    isValidateNum4: function(a) {
        return /^[0-9]{4,4}$/.test(a);
    },
    isValidateNum5: function(a) {
        return /^[0-9]{5,5}$/.test(a);
    },
    isNumberlatterCcter: function(a) {
        return /^[\u0391-\uFFE5A-Za-z0-9]+$/.test(a);
    },
    isHanZiDouHao: function(a) {
        return /^[\u4e00-\u9fff,]+$/.test(a);
    },
    isDate: function(a) {
        return /((^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(10|12|0?[13578])([-\/\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(11|0?[469])([-\/\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))([-\/\._])(0?2)([-\/\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([3579][26]00)([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][0][48])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][2468][048])([-\/\._])(0?2)([-\/\._])(29)$)|(^([1][89][13579][26])([-\/\._])(0?2)([-\/\._])(29)$)|(^([2-9][0-9][13579][26])([-\/\._])(0?2)([-\/\._])(29)$))/.test(a);
    },
    isUrl: function(a) {
        return /^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i.test(a);
    },
    isNumber: function(a) {
        return /^\d+$/g.test(a);
    },
    isFloat: function(a) {
        return /^\d+(\.\d+)?$/.test(a);
    },
    isZeroOrInMultipleOf100: function(a) {
        return /(^0$)|^([1-9]\d*00$)/.test(a);
    },
    isGt0Number: function(a) {
        return /(?!0+$)^(?!0.0+$)^(\d|[1-9]\d+)(\.\d+)?$/.test(a);
    },
    isLGZeroNumber: function(a) {
        return /^([1-9]\d{0,15})$/g.test(a);
    },
  /*  isIdCard: function(a) {
        if (a = $.trim(a), 15 == a.length) return validateType.isValidityBrithBy15IdCard(a);
        if (18 == a.length) {
            var b = a.split("");
            return validateType.isValidityBrithBy18IdCard(a) && validateType.isTrueValidateCodeBy18IdCard(b) ? !0 : !1;
        }
        return !1;
    },*/
    isValidityBrithBy15IdCard: function() {
        var b = idCard15.substring(6, 8), c = idCard15.substring(8, 10), d = idCard15.substring(10, 12), e = new Date(b, parseFloat(c) - 1, parseFloat(d));
        return e.getYear() != parseFloat(b) || e.getMonth() != parseFloat(c) - 1 || e.getDate() != parseFloat(d) ? !1 : !0;
    },
    isValidityBrithBy18IdCard: function(a) {
        var b = a.substring(6, 10), c = a.substring(10, 12), d = a.substring(12, 14), e = new Date(b, parseFloat(c) - 1, parseFloat(d));
        return e.getFullYear() != parseFloat(b) || e.getMonth() != parseFloat(c) - 1 || e.getDate() != parseFloat(d) ? !1 : !0;
    },
    isTrueValidateCodeBy18IdCard: function(a) {
        var e, f, b = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ], c = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ], d = 0;
        for ("x" == a[17].toLowerCase() && (a[17] = 10), e = 0; 17 > e; e++) d += b[e] * a[e];
        return f = d % 11, a[17] == c[f] ? !0 : !1;
    },
   /* isBankCardNo: function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
        if (0 == $.trim(a).length) return !1;
        for (b = a.substr(a.length - 1, 1), c = a.substr(0, a.length - 1), d = new Array(),
        e = c.length - 1; e > -1; e--) d.push(c.substr(e, 1));
        for (f = new Array(), g = new Array(), h = new Array(), i = 0; i < d.length; i++) 1 == (i + 1) % 2 ? 2 * parseInt(d[i]) < 9 ? f.push(2 * parseInt(d[i])) : g.push(2 * parseInt(d[i])) : h.push(d[i]);
        for (j = new Array(), k = new Array(), l = 0; l < g.length; l++) j.push(parseInt(g[l]) % 10),
        k.push(parseInt(g[l]) / 10);
        for (m = 0, n = 0, o = 0, p = 0, q = 0, r = 0; r < f.length; r++) m += parseInt(f[r]);
        for (s = 0; s < h.length; s++) n += parseInt(h[s]);
        for (t = 0; t < j.length; t++) o += parseInt(j[t]), p += parseInt(k[t]);
        return q = parseInt(m) + parseInt(n) + parseInt(o) + parseInt(p), u = 0 == parseInt(q) % 10 ? 10 : parseInt(q) % 10,
        v = 10 - u, b == v ? !0 : !1;
    },*/
    isBusinessLicense: function(a) {
        var d, e, f, g, h, b = !1;
        if (15 == a.length) {
            for (d = [], e = [], f = [], g = 10, e[0] = g, h = 0; h < a.length; h++) f[h] = parseInt(a.substring(h, h + 1), g),
            d[h] = e[h] % (g + 1) + f[h], e[h + 1] = 0 == d[h] % g ? 20 : 2 * (d[h] % g);
            b = 1 == d[14] % g ? !0 : !1;
        } else b = !1;
        return b;
    },
    /*isRegister: function(a) {
        var b = !0;
        return $.ajax({
            type: "get",
            url: -1 == a.url.indexOf("?") ? a.url + "?m=" + Math.random() : a.url + "&m=" + Math.random(),
            data: a.data,
            async: !1,
            dataType: "json",
            success: function(a) {
                b = a;
            }
        }), b;
    }*/
};

export default messVaildator