const validators = {
  checkNumber: function(rule, value, callback) {
    if (null != value && ''!=value && !/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value )) {
      callback(new Error('请输入数字'));
    }else{
      callback();
    }
  },
  checkInteger: function(rule, value, callback) {
    if (null != value && ''!=value && !/^-?\d+$/.test( value )) {
      callback(new Error('请输入整数'));
    }else{
      callback();
    }
  },
  checkMobile: function(rule, value, callback) {
    if (null != value && ''!=value && !(value.length == 11 && /^(1[3|4|5|7|8][0-9]\d{8})$/.test(value))) {
      callback(new Error('请输入正确的手机号码'));
    }else{
      callback();
    }
  },
  checkEmail: function(rule, value, callback) {
    if (null != value && ''!=value && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)) {
      callback(new Error('请输入正确的邮箱地址'));
    }else{
      callback();
    }
  },
  checkSpace: function(rule, value, callback) {
    if (null != value && ''!=value && !/^\S+$/.test(value)) {
      callback(new Error('不能带有空格'));
    }else{
      callback();
    }
  },
  checkPassword :function (rule, value, callback) {
    // let reg = /^(?!([a-zA-Z\d]*|[\d!@#\$%_\.]*|[a-zA-Z!@#\$%_\.]*)$)[a-zA-Z\d!@#\$%_\.]{8,20}$/;
    let reg = /^(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![0-9\W]+$)(?![a-z\W]+$)(?![a-zA-Z]+$)(?![A-Z\W]+$)[a-zA-Z0-9\W_]+$/;
    // let reg =/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{8,20}$/;
    if (!reg.test(value)) {
      callback(new Error('密码必须由8-12位数字,大小写字母和特殊字符其中三种组成'));
    } else {
      if(value.length<8||value.length>12){
        callback(new Error('密码必须由8-12位数字,大小写字母和特殊字符其中三种组成'));
      }else{
        callback();
      }
    }
  }
}

export default validators
