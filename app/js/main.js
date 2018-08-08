"use strict";

var BASE_URL = "http://120.76.45.115:9029/MiService/api";
var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      msg: "hello word",
      shareP: false,
      currentPage: -1,
      isShowRule: false,
      showAddressBtn: false,
      rank: "0%",
      part1: {
        chose: 0,
        correct: 9
      },
      part2: {
        isShake: false,
        chose: 0,
        correct: 1
      },
      part3: {
        choseList: [],
        correctList: [1, 3, 5, 6, 7, 8, 10]
      },
      part4: {
        choseList: [],
        correctList: [6, 5, 2, 0]
      },

      form: {
        province: "广东省",
        city: "广州市",
        name: "",
        phone: "",
        address: ""
      },
      showTwo: false,
      provinces: [{ label: "北京市", value: "北京市" }, { label: "天津市", value: "天津市" }, { label: "河北省", value: "河北省" }, { label: "山西省", value: "山西省" }, { label: "内蒙古自治区", value: "内蒙古自治区" }, { label: "辽宁省", value: "辽宁省" }, { label: "吉林省", value: "吉林省" }, { label: "黑龙江省", value: "黑龙江省" }, { label: "上海市", value: "上海市" }, { label: "江苏省", value: "江苏省" }, { label: "浙江省", value: "浙江省" }, { label: "安徽省", value: "安徽省" }, { label: "福建省", value: "福建省" }, { label: "江西省", value: "江西省" }, { label: "山东省", value: "山东省" }, { label: "河南省", value: "河南省" }, { label: "湖北省", value: "湖北省" }, { label: "湖南省", value: "湖南省" }, { label: "广东省", value: "广东省" }, { label: "广西壮族自治区", value: "广西壮族自治区" }, { label: "海南省", value: "海南省" }, { label: "重庆市", value: "重庆市" }, { label: "四川省", value: "四川省" }, { label: "贵州省", value: "贵州省" }, { label: "云南省", value: "云南省" }, { label: "西藏自治区", value: "西藏自治区" }, { label: "陕西省", value: "陕西省" }, { label: "甘肃省", value: "甘肃省" }, { label: "青海省", value: "青海省" }, { label: "宁夏回族自治区", value: "宁夏回族自治区" }, { label: "新疆维吾尔自治区", value: "新疆维吾尔自治区" }, { label: "台湾省", value: "台湾省" }, { label: "香港特别行政区", value: "香港特别行政区" }, { label: "澳门特别行政区", value: "澳门特别行政区" }],
      citys: [{
        prov: "北京市",
        label: "北京市"
      }, {
        prov: "天津市",
        label: "天津市"
      }, {
        prov: "河北省",
        label: "石家庄市"
      }, {
        prov: "河北省",
        label: "唐山市"
      }, {
        prov: "河北省",
        label: "秦皇岛市"
      }, {
        prov: "河北省",
        label: "邯郸市"
      }, {
        prov: "河北省",
        label: "邢台市"
      }, {
        prov: "河北省",
        label: "保定市"
      }, {
        prov: "河北省",
        label: "张家口市"
      }, {
        prov: "河北省",
        label: "承德市"
      }, {
        prov: "河北省",
        label: "沧州市"
      }, {
        prov: "河北省",
        label: "廊坊市"
      }, {
        prov: "河北省",
        label: "衡水市"
      }, {
        prov: "山西省",
        label: "太原市"
      }, {
        prov: "山西省",
        label: "大同市"
      }, {
        prov: "山西省",
        label: "阳泉市"
      }, {
        prov: "山西省",
        label: "长治市"
      }, {
        prov: "山西省",
        label: "晋城市"
      }, {
        prov: "山西省",
        label: "朔州市"
      }, {
        prov: "山西省",
        label: "晋中市"
      }, {
        prov: "山西省",
        label: "运城市"
      }, {
        prov: "山西省",
        label: "忻州市"
      }, {
        prov: "山西省",
        label: "临汾市"
      }, {
        prov: "山西省",
        label: "吕梁市"
      }, {
        prov: "内蒙古自治区",
        label: "呼和浩特市"
      }, {
        prov: "内蒙古自治区",
        label: "包头市"
      }, {
        prov: "内蒙古自治区",
        label: "乌海市"
      }, {
        prov: "内蒙古自治区",
        label: "赤峰市"
      }, {
        prov: "内蒙古自治区",
        label: "通辽市"
      }, {
        prov: "内蒙古自治区",
        label: "鄂尔多斯市"
      }, {
        prov: "内蒙古自治区",
        label: "呼伦贝尔市"
      }, {
        prov: "内蒙古自治区",
        label: "巴彦淖尔市"
      }, {
        prov: "内蒙古自治区",
        label: "乌兰察布市"
      }, {
        prov: "内蒙古自治区",
        label: "兴安盟"
      }, {
        prov: "内蒙古自治区",
        label: "锡林郭勒盟"
      }, {
        prov: "内蒙古自治区",
        label: "阿拉善盟"
      }, {
        prov: "辽宁省",
        label: "沈阳市"
      }, {
        prov: "辽宁省",
        label: "大连市"
      }, {
        prov: "辽宁省",
        label: "鞍山市"
      }, {
        prov: "辽宁省",
        label: "抚顺市"
      }, {
        prov: "辽宁省",
        label: "本溪市"
      }, {
        prov: "辽宁省",
        label: "丹东市"
      }, {
        prov: "辽宁省",
        label: "锦州市"
      }, {
        prov: "辽宁省",
        label: "营口市"
      }, {
        prov: "辽宁省",
        label: "阜新市"
      }, {
        prov: "辽宁省",
        label: "辽阳市"
      }, {
        prov: "辽宁省",
        label: "盘锦市"
      }, {
        prov: "辽宁省",
        label: "铁岭市"
      }, {
        prov: "辽宁省",
        label: "朝阳市"
      }, {
        prov: "辽宁省",
        label: "葫芦岛市"
      }, {
        prov: "吉林省",
        label: "长春市"
      }, {
        prov: "吉林省",
        label: "吉林市"
      }, {
        prov: "吉林省",
        label: "四平市"
      }, {
        prov: "吉林省",
        label: "辽源市"
      }, {
        prov: "吉林省",
        label: "通化市"
      }, {
        prov: "吉林省",
        label: "白山市"
      }, {
        prov: "吉林省",
        label: "松原市"
      }, {
        prov: "吉林省",
        label: "白城市"
      }, {
        prov: "吉林省",
        label: "延边朝鲜族自治州"
      }, {
        prov: "黑龙江省",
        label: "哈尔滨市"
      }, {
        prov: "黑龙江省",
        label: "齐齐哈尔市"
      }, {
        prov: "黑龙江省",
        label: "鸡西市"
      }, {
        prov: "黑龙江省",
        label: "鹤岗市"
      }, {
        prov: "黑龙江省",
        label: "双鸭山市"
      }, {
        prov: "黑龙江省",
        label: "大庆市"
      }, {
        prov: "黑龙江省",
        label: "伊春市"
      }, {
        prov: "黑龙江省",
        label: "佳木斯市"
      }, {
        prov: "黑龙江省",
        label: "七台河市"
      }, {
        prov: "黑龙江省",
        label: "牡丹江市"
      }, {
        prov: "黑龙江省",
        label: "黑河市"
      }, {
        prov: "黑龙江省",
        label: "绥化市"
      }, {
        prov: "黑龙江省",
        label: "大兴安岭地区"
      }, {
        prov: "上海市",
        label: "上海市"
      }, {
        prov: "江苏省",
        label: "南京市"
      }, {
        prov: "江苏省",
        label: "无锡市"
      }, {
        prov: "江苏省",
        label: "徐州市"
      }, {
        prov: "江苏省",
        label: "常州市"
      }, {
        prov: "江苏省",
        label: "苏州市"
      }, {
        prov: "江苏省",
        label: "南通市"
      }, {
        prov: "江苏省",
        label: "连云港市"
      }, {
        prov: "江苏省",
        label: "淮安市"
      }, {
        prov: "江苏省",
        label: "盐城市"
      }, {
        prov: "江苏省",
        label: "扬州市"
      }, {
        prov: "江苏省",
        label: "镇江市"
      }, {
        prov: "江苏省",
        label: "泰州市"
      }, {
        prov: "江苏省",
        label: "宿迁市"
      }, {
        prov: "浙江省",
        label: "杭州市"
      }, {
        prov: "浙江省",
        label: "宁波市"
      }, {
        prov: "浙江省",
        label: "温州市"
      }, {
        prov: "浙江省",
        label: "嘉兴市"
      }, {
        prov: "浙江省",
        label: "湖州市"
      }, {
        prov: "浙江省",
        label: "绍兴市"
      }, {
        prov: "浙江省",
        label: "金华市"
      }, {
        prov: "浙江省",
        label: "衢州市"
      }, {
        prov: "浙江省",
        label: "舟山市"
      }, {
        prov: "浙江省",
        label: "台州市"
      }, {
        prov: "浙江省",
        label: "丽水市"
      }, {
        prov: "安徽省",
        label: "合肥市"
      }, {
        prov: "安徽省",
        label: "芜湖市"
      }, {
        prov: "安徽省",
        label: "蚌埠市"
      }, {
        prov: "安徽省",
        label: "淮南市"
      }, {
        prov: "安徽省",
        label: "马鞍山市"
      }, {
        prov: "安徽省",
        label: "淮北市"
      }, {
        prov: "安徽省",
        label: "铜陵市"
      }, {
        prov: "安徽省",
        label: "安庆市"
      }, {
        prov: "安徽省",
        label: "黄山市"
      }, {
        prov: "安徽省",
        label: "滁州市"
      }, {
        prov: "安徽省",
        label: "阜阳市"
      }, {
        prov: "安徽省",
        label: "宿州市"
      }, {
        prov: "安徽省",
        label: "六安市"
      }, {
        prov: "安徽省",
        label: "亳州市"
      }, {
        prov: "安徽省",
        label: "池州市"
      }, {
        prov: "安徽省",
        label: "宣城市"
      }, {
        prov: "福建省",
        label: "福州市"
      }, {
        prov: "福建省",
        label: "厦门市"
      }, {
        prov: "福建省",
        label: "莆田市"
      }, {
        prov: "福建省",
        label: "三明市"
      }, {
        prov: "福建省",
        label: "泉州市"
      }, {
        prov: "福建省",
        label: "漳州市"
      }, {
        prov: "福建省",
        label: "南平市"
      }, {
        prov: "福建省",
        label: "龙岩市"
      }, {
        prov: "福建省",
        label: "宁德市"
      }, {
        prov: "江西省",
        label: "南昌市"
      }, {
        prov: "江西省",
        label: "景德镇市"
      }, {
        prov: "江西省",
        label: "萍乡市"
      }, {
        prov: "江西省",
        label: "九江市"
      }, {
        prov: "江西省",
        label: "新余市"
      }, {
        prov: "江西省",
        label: "鹰潭市"
      }, {
        prov: "江西省",
        label: "赣州市"
      }, {
        prov: "江西省",
        label: "吉安市"
      }, {
        prov: "江西省",
        label: "宜春市"
      }, {
        prov: "江西省",
        label: "抚州市"
      }, {
        prov: "江西省",
        label: "上饶市"
      }, {
        prov: "山东省",
        label: "济南市"
      }, {
        prov: "山东省",
        label: "青岛市"
      }, {
        prov: "山东省",
        label: "淄博市"
      }, {
        prov: "山东省",
        label: "枣庄市"
      }, {
        prov: "山东省",
        label: "东营市"
      }, {
        prov: "山东省",
        label: "烟台市"
      }, {
        prov: "山东省",
        label: "潍坊市"
      }, {
        prov: "山东省",
        label: "济宁市"
      }, {
        prov: "山东省",
        label: "泰安市"
      }, {
        prov: "山东省",
        label: "威海市"
      }, {
        prov: "山东省",
        label: "日照市"
      }, {
        prov: "山东省",
        label: "莱芜市"
      }, {
        prov: "山东省",
        label: "临沂市"
      }, {
        prov: "山东省",
        label: "德州市"
      }, {
        prov: "山东省",
        label: "聊城市"
      }, {
        prov: "山东省",
        label: "滨州市"
      }, {
        prov: "山东省",
        label: "菏泽市"
      }, {
        prov: "河南省",
        label: "郑州市"
      }, {
        prov: "河南省",
        label: "开封市"
      }, {
        prov: "河南省",
        label: "洛阳市"
      }, {
        prov: "河南省",
        label: "平顶山市"
      }, {
        prov: "河南省",
        label: "安阳市"
      }, {
        prov: "河南省",
        label: "鹤壁市"
      }, {
        prov: "河南省",
        label: "新乡市"
      }, {
        prov: "河南省",
        label: "焦作市"
      }, {
        prov: "河南省",
        label: "濮阳市"
      }, {
        prov: "河南省",
        label: "许昌市"
      }, {
        prov: "河南省",
        label: "漯河市"
      }, {
        prov: "河南省",
        label: "三门峡市"
      }, {
        prov: "河南省",
        label: "南阳市"
      }, {
        prov: "河南省",
        label: "商丘市"
      }, {
        prov: "河南省",
        label: "信阳市"
      }, {
        prov: "河南省",
        label: "周口市"
      }, {
        prov: "河南省",
        label: "驻马店市"
      }, {
        prov: "河南省",
        label: "省直辖县级行政区划"
      }, {
        prov: "湖北省",
        label: "武汉市"
      }, {
        prov: "湖北省",
        label: "黄石市"
      }, {
        prov: "湖北省",
        label: "十堰市"
      }, {
        prov: "湖北省",
        label: "宜昌市"
      }, {
        prov: "湖北省",
        label: "襄阳市"
      }, {
        prov: "湖北省",
        label: "鄂州市"
      }, {
        prov: "湖北省",
        label: "荆门市"
      }, {
        prov: "湖北省",
        label: "孝感市"
      }, {
        prov: "湖北省",
        label: "荆州市"
      }, {
        prov: "湖北省",
        label: "黄冈市"
      }, {
        prov: "湖北省",
        label: "咸宁市"
      }, {
        prov: "湖北省",
        label: "随州市"
      }, {
        prov: "湖北省",
        label: "恩施土家族苗族自治州"
      }, {
        prov: "湖北省",
        label: "省直辖县级行政区划"
      }, {
        prov: "湖北省",
        label: "仙桃市"
      }, {
        prov: "湖北省",
        label: "潜江市"
      }, {
        prov: "湖北省",
        label: "天门市"
      }, {
        prov: "湖北省",
        label: "神农架林区"
      }, {
        prov: "湖南省",
        label: "长沙市"
      }, {
        prov: "湖南省",
        label: "株洲市"
      }, {
        prov: "湖南省",
        label: "湘潭市"
      }, {
        prov: "湖南省",
        label: "衡阳市"
      }, {
        prov: "湖南省",
        label: "邵阳市"
      }, {
        prov: "湖南省",
        label: "岳阳市"
      }, {
        prov: "湖南省",
        label: "常德市"
      }, {
        prov: "湖南省",
        label: "张家界市"
      }, {
        prov: "湖南省",
        label: "益阳市"
      }, {
        prov: "湖南省",
        label: "郴州市"
      }, {
        prov: "湖南省",
        label: "永州市"
      }, {
        prov: "湖南省",
        label: "怀化市"
      }, {
        prov: "湖南省",
        label: "娄底市"
      }, {
        prov: "湖南省",
        label: "湘西土家族苗族自治州"
      }, {
        prov: "广东省",
        label: "广州市"
      }, {
        prov: "广东省",
        label: "韶关市"
      }, {
        prov: "广东省",
        label: "深圳市"
      }, {
        prov: "广东省",
        label: "珠海市"
      }, {
        prov: "广东省",
        label: "汕头市"
      }, {
        prov: "广东省",
        label: "佛山市"
      }, {
        prov: "广东省",
        label: "江门市"
      }, {
        prov: "广东省",
        label: "湛江市"
      }, {
        prov: "广东省",
        label: "茂名市"
      }, {
        prov: "广东省",
        label: "肇庆市"
      }, {
        prov: "广东省",
        label: "惠州市"
      }, {
        prov: "广东省",
        label: "梅州市"
      }, {
        prov: "广东省",
        label: "汕尾市"
      }, {
        prov: "广东省",
        label: "河源市"
      }, {
        prov: "广东省",
        label: "阳江市"
      }, {
        prov: "广东省",
        label: "清远市"
      }, {
        prov: "广东省",
        label: "东莞市"
      }, {
        prov: "广东省",
        label: "中山市"
      }, {
        prov: "广东省",
        label: "潮州市"
      }, {
        prov: "广东省",
        label: "揭阳市"
      }, {
        prov: "广东省",
        label: "云浮市"
      }, {
        prov: "广西壮族自治区",
        label: "南宁市"
      }, {
        prov: "广西壮族自治区",
        label: "柳州市"
      }, {
        prov: "广西壮族自治区",
        label: "桂林市"
      }, {
        prov: "广西壮族自治区",
        label: "梧州市"
      }, {
        prov: "广西壮族自治区",
        label: "北海市"
      }, {
        prov: "广西壮族自治区",
        label: "防城港市"
      }, {
        prov: "广西壮族自治区",
        label: "钦州市"
      }, {
        prov: "广西壮族自治区",
        label: "贵港市"
      }, {
        prov: "广西壮族自治区",
        label: "玉林市"
      }, {
        prov: "广西壮族自治区",
        label: "百色市"
      }, {
        prov: "广西壮族自治区",
        label: "贺州市"
      }, {
        prov: "广西壮族自治区",
        label: "河池市"
      }, {
        prov: "广西壮族自治区",
        label: "来宾市"
      }, {
        prov: "广西壮族自治区",
        label: "崇左市"
      }, {
        prov: "海南省",
        label: "海口市"
      }, {
        prov: "海南省",
        label: "三亚市"
      }, {
        prov: "海南省",
        label: "三沙市"
      }, {
        prov: "海南省",
        label: "省直辖县级行政区划"
      }, {
        prov: "海南省",
        label: "五指山市"
      }, {
        prov: "海南省",
        label: "琼海市"
      }, {
        prov: "海南省",
        label: "儋州市"
      }, {
        prov: "海南省",
        label: "文昌市"
      }, {
        prov: "海南省",
        label: "万宁市"
      }, {
        prov: "海南省",
        label: "东方市"
      }, {
        prov: "海南省",
        label: "定安县"
      }, {
        prov: "海南省",
        label: "屯昌县"
      }, {
        prov: "海南省",
        label: "澄迈县"
      }, {
        prov: "海南省",
        label: "临高县"
      }, {
        prov: "海南省",
        label: "白沙黎族自治县"
      }, {
        prov: "海南省",
        label: "昌江黎族自治县"
      }, {
        prov: "海南省",
        label: "乐东黎族自治县"
      }, {
        prov: "海南省",
        label: "陵水黎族自治县"
      }, {
        prov: "海南省",
        label: "保亭黎族苗族自治县"
      }, {
        prov: "海南省",
        label: "琼中黎族苗族自治县"
      }, {
        prov: "重庆市",
        label: "重庆市"
      }, {
        prov: "四川省",
        label: "成都市"
      }, {
        prov: "四川省",
        label: "自贡市"
      }, {
        prov: "四川省",
        label: "攀枝花市"
      }, {
        prov: "四川省",
        label: "泸州市"
      }, {
        prov: "四川省",
        label: "德阳市"
      }, {
        prov: "四川省",
        label: "绵阳市"
      }, {
        prov: "四川省",
        label: "广元市"
      }, {
        prov: "四川省",
        label: "遂宁市"
      }, {
        prov: "四川省",
        label: "内江市"
      }, {
        prov: "四川省",
        label: "乐山市"
      }, {
        prov: "四川省",
        label: "南充市"
      }, {
        prov: "四川省",
        label: "眉山市"
      }, {
        prov: "四川省",
        label: "宜宾市"
      }, {
        prov: "四川省",
        label: "广安市"
      }, {
        prov: "四川省",
        label: "达州市"
      }, {
        prov: "四川省",
        label: "雅安市"
      }, {
        prov: "四川省",
        label: "巴中市"
      }, {
        prov: "四川省",
        label: "资阳市"
      }, {
        prov: "四川省",
        label: "阿坝藏族羌族自治州"
      }, {
        prov: "四川省",
        label: "甘孜藏族自治州"
      }, {
        prov: "四川省",
        label: "凉山彝族自治州"
      }, {
        prov: "贵州省",
        label: "贵阳市"
      }, {
        prov: "贵州省",
        label: "六盘水市"
      }, {
        prov: "贵州省",
        label: "遵义市"
      }, {
        prov: "贵州省",
        label: "安顺市"
      }, {
        prov: "贵州省",
        label: "毕节市"
      }, {
        prov: "贵州省",
        label: "铜仁市"
      }, {
        prov: "贵州省",
        label: "黔西南布依族苗族自治州"
      }, {
        prov: "贵州省",
        label: "黔东南苗族侗族自治州"
      }, {
        prov: "贵州省",
        label: "黔南布依族苗族自治州"
      }, {
        prov: "云南省",
        label: "昆明市"
      }, {
        prov: "云南省",
        label: "曲靖市"
      }, {
        prov: "云南省",
        label: "玉溪市"
      }, {
        prov: "云南省",
        label: "保山市"
      }, {
        prov: "云南省",
        label: "昭通市"
      }, {
        prov: "云南省",
        label: "丽江市"
      }, {
        prov: "云南省",
        label: "普洱市"
      }, {
        prov: "云南省",
        label: "临沧市"
      }, {
        prov: "云南省",
        label: "楚雄彝族自治州"
      }, {
        prov: "云南省",
        label: "红河哈尼族彝族自治州"
      }, {
        prov: "云南省",
        label: "文山壮族苗族自治州"
      }, {
        prov: "云南省",
        label: "西双版纳傣族自治州"
      }, {
        prov: "云南省",
        label: "大理白族自治州"
      }, {
        prov: "云南省",
        label: "德宏傣族景颇族自治州"
      }, {
        prov: "云南省",
        label: "怒江傈僳族自治州"
      }, {
        prov: "云南省",
        label: "迪庆藏族自治州"
      }, {
        prov: "西藏自治区",
        label: "拉萨市"
      }, {
        prov: "西藏自治区",
        label: "昌都地区"
      }, {
        prov: "西藏自治区",
        label: "山南地区"
      }, {
        prov: "西藏自治区",
        label: "日喀则地区"
      }, {
        prov: "西藏自治区",
        label: "那曲地区"
      }, {
        prov: "西藏自治区",
        label: "阿里地区"
      }, {
        prov: "西藏自治区",
        label: "林芝地区"
      }, {
        prov: "陕西省",
        label: "西安市"
      }, {
        prov: "陕西省",
        label: "铜川市"
      }, {
        prov: "陕西省",
        label: "宝鸡市"
      }, {
        prov: "陕西省",
        label: "咸阳市"
      }, {
        prov: "陕西省",
        label: "渭南市"
      }, {
        prov: "陕西省",
        label: "延安市"
      }, {
        prov: "陕西省",
        label: "汉中市"
      }, {
        prov: "陕西省",
        label: "榆林市"
      }, {
        prov: "陕西省",
        label: "安康市"
      }, {
        prov: "陕西省",
        label: "商洛市"
      }, {
        prov: "甘肃省",
        label: "兰州市"
      }, {
        prov: "甘肃省",
        label: "嘉峪关市"
      }, {
        prov: "甘肃省",
        label: "金昌市"
      }, {
        prov: "甘肃省",
        label: "白银市"
      }, {
        prov: "甘肃省",
        label: "天水市"
      }, {
        prov: "甘肃省",
        label: "武威市"
      }, {
        prov: "甘肃省",
        label: "张掖市"
      }, {
        prov: "甘肃省",
        label: "平凉市"
      }, {
        prov: "甘肃省",
        label: "酒泉市"
      }, {
        prov: "甘肃省",
        label: "庆阳市"
      }, {
        prov: "甘肃省",
        label: "定西市"
      }, {
        prov: "甘肃省",
        label: "陇南市"
      }, {
        prov: "甘肃省",
        label: "临夏回族自治州"
      }, {
        prov: "甘肃省",
        label: "甘南藏族自治州"
      }, {
        prov: "青海省",
        label: "西宁市"
      }, {
        prov: "青海省",
        label: "海东市"
      }, {
        prov: "青海省",
        label: "海北藏族自治州"
      }, {
        prov: "青海省",
        label: "黄南藏族自治州"
      }, {
        prov: "青海省",
        label: "海南藏族自治州"
      }, {
        prov: "青海省",
        label: "果洛藏族自治州"
      }, {
        prov: "青海省",
        label: "玉树藏族自治州"
      }, {
        prov: "青海省",
        label: "海西蒙古族藏族自治州"
      }, {
        prov: "宁夏回族自治区",
        label: "银川市"
      }, {
        prov: "宁夏回族自治区",
        label: "石嘴山市"
      }, {
        prov: "宁夏回族自治区",
        label: "吴忠市"
      }, {
        prov: "宁夏回族自治区",
        label: "固原市"
      }, {
        prov: "宁夏回族自治区",
        label: "中卫市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "乌鲁木齐市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "克拉玛依市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "吐鲁番地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "哈密地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "昌吉回族自治州"
      }, {
        prov: "新疆维吾尔自治区",
        label: "博尔塔拉蒙古自治州"
      }, {
        prov: "新疆维吾尔自治区",
        label: "巴音郭楞蒙古自治州"
      }, {
        prov: "新疆维吾尔自治区",
        label: "阿克苏地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "克孜勒苏柯尔克孜自治州"
      }, {
        prov: "新疆维吾尔自治区",
        label: "喀什地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "和田地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "伊犁哈萨克自治州"
      }, {
        prov: "新疆维吾尔自治区",
        label: "塔城地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "阿勒泰地区"
      }, {
        prov: "新疆维吾尔自治区",
        label: "自治区直辖县级行政区划"
      }, {
        prov: "新疆维吾尔自治区",
        label: "石河子市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "阿拉尔市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "图木舒克市"
      }, {
        prov: "新疆维吾尔自治区",
        label: "五家渠市"
      }, {
        prov: "台湾省",
        label: "台北市"
      }, {
        prov: "台湾省",
        label: "高雄市"
      }, {
        prov: "台湾省",
        label: "基隆市"
      }, {
        prov: "台湾省",
        label: "台中市"
      }, {
        prov: "台湾省",
        label: "台南市"
      }, {
        prov: "台湾省",
        label: "新竹市"
      }, {
        prov: "台湾省",
        label: "嘉义市"
      }, {
        prov: "台湾省",
        label: "省直辖"
      }, {
        prov: "香港特别行政区",
        label: "香港岛"
      }, {
        prov: "香港特别行政区",
        label: "九龙"
      }, {
        prov: "香港特别行政区",
        label: "新界"
      }, {
        prov: "澳门特别行政区",
        label: "澳门半岛"
      }, {
        prov: "澳门特别行政区",
        label: "澳门离岛"
      }, {
        prov: "澳门特别行政区",
        label: "无堂区划分区域"
      }],
      part5: {
        one: {
          x: "5%",
          y: "5%",
          x1: "-1%",
          y1: "65%",
          startX: 0,
          startY: 0
        },
        two: {
          x: "40%",
          y: "12%",
          x1: "40%",
          y1: "72%",
          startX: 0,
          startY: 0
        },
        three: {
          x: "70%",
          y: "12%",
          x1: "70%",
          y1: "72%",
          startX: 0,
          startY: 0
        }
      },
      timeStart: 0,
      timeEnd: 0,
      isCorrect: false,
      isShowTip: false,
      tipInfo: "",
      isSubmit: false,
      isAddAddress: false,
      userInfo: {
        openid: document.getElementById("openId").value,
        name: document.getElementById("nickname").value,
        img: document.getElementById("headimg").value
      }
    };
  },
  created: function created() {
    this.initUser();
  },
  mounted: function mounted() {
    var _this = this;

    // window.onresize();
    document.ontouchmove = function (e) {
      e.preventDefault();
    };
    //   document.querySelector('body').addEventListener('touchstart', function (ev) {
    //     event.preventDefault();
    // });
    setTimeout(function () {
      _this.currentPage = 0;
    }, 2000);
    this.doShake();
  },

  computed: {
    currentCity: function currentCity() {
      var currentProvince = this.form.province;

      var new_city = this.citys.filter(function (v) {
        return v.prov == currentProvince;
      });
      this.form.city = new_city[0].label;
      return new_city;
    }
  },
  methods: {
    goLast: function goLast() {
      this.currentPage = 6;
    },
    goHome: function goHome() {
      this.currentPage = 0;
      this.showTwo = false;
      this.part1 = {
        chose: 0,
        correct: 9
      };
      this.part2 = {
        isShake: false,
        chose: 0,
        correct: 1
      };
      this.part3 = {
        choseList: [],
        correctList: [1, 3, 5, 6, 7, 8, 10]
      };
      this.part4 = {
        choseList: [],
        correctList: [6, 5, 2, 0]
      };
    },
    doShareTo: function doShareTo() {
      this.shareP = true;
    },
    initUser: function initUser() {
      Api.doJavaPost(BASE_URL + "/user/saveJiongGameUserInfo", "JiongGame", this.userInfo).then(function (data) {
        console.log(data);
      }).catch(function (error) {
        console.log(error);
      });
    },
    showRule: function showRule() {
      this.isShowRule = true;
      this.$refs["mp3reset"].play();
      console.log(this.$refs["mp3start"]);
    },
    doChoseItem: function doChoseItem(item) {
      this.$refs["mp3reset"].play();
      if (this.part1.chose == item) {
        this.part1.chose = 0;
      } else {
        this.part1.chose = item;
      }
    },
    startGame: function startGame() {
      this.$refs["mp3start"].play();
      this.showTwo = true;
      this.currentPage = 1;
      this.timeStart = new Date().valueOf();
    },
    doGet: function doGet() {
      var _this2 = this;

      var that = this;

      console.log(this.form.phone);

      if (this.form.province == "" || this.form.name == "" || this.form.phone.length < 5 || this.form.address == "") {
        this.isShowTip = true;
        this.isCorrect = false;
        this.tipInfo = "请先完善信息";
        setTimeout(function () {
          _this2.isShowTip = false;
        }, 1600);

        return false;
      }

      if (this.isAddAddress) {
        return false;
      }

      Api.doJavaPost(BASE_URL + "/user/saveJiongGameUserReceipt", "JiongGame", {
        openid: this.userInfo.openid,
        phone: this.form.phone,
        address: this.form.province + this.form.city + this.form.address
      }).then(function (data) {
        if (data.code == 200) {
          that.isShowTip = true;
          that.isCorrect = true;
          that.tipInfo = "保存成功";
          setTimeout(function () {
            that.isShowTip = false;
            that.currentPage = 0;
          }, 1600);

          that.isAddAddress = true;
        } else {
          alert(data.msg);
        }
        console.log(data);
      }).catch(function (error) {
        alert("网络错误");
        console.log(error);
      });
    },
    doPhoneCheck: function doPhoneCheck() {
      this.form.phone = this.form.phone.replace(/[^0-9-]+/, "");
      if (this.form.phone.length > 11) {
        this.form.phone = this.form.phone.substr(0, 11);
      }
    },
    doChoseItem4: function doChoseItem4(item) {
      this.$refs["mp3reset"].play();
      if (this.part4.choseList.indexOf(item) >= 0) {
        return false;
      }

      if (item == 6) {
        if (this.part4.choseList[0] == 7) {
          this.part4.choseList.shift();
        }
        this.part4.choseList.unshift(6);
      } else {
        this.part4.choseList.push(item);
        if (this.part4.choseList[0] != 6 && this.part4.choseList[0] != 7) {
          this.part4.choseList.unshift(7);
        } else {
          // this.part4.choseList[0] = 6
        }
      }

      console.log(this.part4.choseList);
    },
    doClickSign: function doClickSign() {
      this.$refs["mp3reset"].play();
      this.currentPage = 7;
    },
    reloadPart4: function reloadPart4() {
      this.$refs["mp3reset"].play();
      this.part4.choseList = [];
    },
    doChoseItem3: function doChoseItem3(item) {
      this.$refs["mp3reset"].play();
      var index = this.part3.choseList.indexOf(item);

      console.log(index);
      if (index >= 0) {
        this.part3.choseList.splice(index, 1);
      } else {
        this.part3.choseList.push(item);
      }
      this.part3.choseList.sort(function (a, b) {
        return a - b;
      });
      console.log(this.part3.choseList);
    },
    doChoseItem2: function doChoseItem2(item) {
      this.$refs["mp3reset"].play();
      if (this.part2.chose == item) {
        this.part1.chose = 0;
      } else {
        this.part2.chose = item;
      }
    },
    touchStart: function touchStart(item, event) {
      console.log(event.targetTouches[0]);
      this.part5[item].startX = event.targetTouches[0].clientX - this.$refs[item].offsetLeft;
      this.part5[item].startY = event.targetTouches[0].clientY - this.$refs[item].offsetTop;
    },
    touchMove: function touchMove(item, event) {
      this.part5[item].x = event.targetTouches[0].clientX - this.part5[item].startX + "px";
      this.part5[item].y = event.targetTouches[0].clientY - this.part5[item].startY + "px";
    },
    doShake: function doShake() {
      var that = this;

      //运动事件监听
      if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", deviceMotionHandler, false);
      }

      //获取加速度信息
      //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
      //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
      var SHAKE_THRESHOLD = 16000;
      var last_update = 0;
      var x,
          y,
          z,
          last_x = 0,
          last_y = 0,
          last_z = 0;
      function deviceMotionHandler(eventData) {
        if (that.currentPage !== 2 || that.part2.isShake) {
          return false;
        }
        var acceleration = eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if (curTime - last_update > 10) {
          var diffTime = curTime - last_update;
          last_update = curTime;
          x = acceleration.x;
          y = acceleration.y;
          z = acceleration.z;
          var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 16000;
          if (speed > SHAKE_THRESHOLD) {
            document.getElementById("mp3drink").play();
            that.part2.isShake = true;
          }
          last_x = x;
          last_y = y;
          last_z = z;
        }
      }
    },
    showGameRes: function showGameRes() {
      var _this3 = this;

      var useTime = parseInt((this.timeEnd - this.timeStart) / 1000);
      var that = this;
      Api.doJavaPost(BASE_URL + "/user/saveJiongGameUserScore", "JiongGame", {
        openid: this.userInfo.openid,
        score: 0,
        useTime: parseInt(this.timeEnd - this.timeStart)
      }).then(function (data) {
        if (data.code == 200) {
          console.log(data);

          if (data.score.cion == 0) {
            that.showAddressBtn = false;
          } else {
            that.showAddressBtn = true;
          }
          console.log(data.score.msgStatus);
          that.rank = data.score.msgStatus;

          window.share({
            useTime: useTime,
            rank: data.score.msgStatus
          }, function () {
            _this3.shareP = false;
          });
        } else {
          alert("网络错误");
        }
        console.log(data);
      }).catch(function (error) {
        alert("网络错误");
        console.log(error);
      });
    },
    doSubmit: function doSubmit(part) {
      var _this4 = this;

      this.$refs["mp3reset"].play();
      if (this.isSubmit) {
        return false;
      }
      this.isSubmit = true;
      // 提交第一关
      if (part == 1) {
        if (this.part1.chose == this.part1.correct) {
          this.isShowTip = true;
          this.isCorrect = true;
          this.$refs["mp3ok"].play();
          this.tipInfo = "真聪明";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
            _this4.currentPage = 2;
          }, 1600);
        } else {
          this.isShowTip = true;
          this.isCorrect = false;
          this.$refs["mp3fail"].play();
          this.tipInfo = "再想想看哪个字最大";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
          }, 1600);
        }
        // 提交第二关
      } else if (part == 2) {
        if (this.part2.isShake && this.part2.chose == 1) {
          this.isShowTip = true;
          this.isCorrect = true;
          this.$refs["mp3ok"].play();
          this.tipInfo = "机智如你";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;

            _this4.currentPage = 3;
          }, 1600);
        } else {
          this.isShowTip = true;
          this.isCorrect = false;
          this.$refs["mp3fail"].play();
          // this.tipInfo = "听说雪碧摇一下很多气泡喔";
          this.tipInfo = "请按实际操作思路去找";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
          }, 1600);
        }
        // 提交第三关
      } else if (part == 3) {
        console.log(this.part3.choseList);
        console.log(this.part3.correctList);
        var flag = true;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.part3.correctList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (this.part3.choseList.indexOf(item) == -1) {
              flag = false;
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (flag) {
          this.isShowTip = true;
          this.isCorrect = true;
          this.$refs["mp3ok"].play();
          this.tipInfo = "嗯你很细心";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;

            _this4.currentPage = 4;
          }, 1600);
        } else {
          this.isShowTip = true;
          this.isCorrect = false;
          this.$refs["mp3fail"].play();
          this.tipInfo = "再想想有没错漏的 ";
          // this.tipInfo = "再想想有没错漏的(笑脸) ";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
          }, 1600);
        }
      } else if (part == 4) {
        console.log("23232");
        if (this.part4.choseList[0] == 6 && this.part4.choseList[1] == 5 && this.part4.choseList[2] == 2 && this.part4.choseList[3] == 0) {
          this.isShowTip = true;
          this.isCorrect = true;
          this.$refs["mp3ok"].play();
          this.tipInfo = "你很棒";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;

            _this4.currentPage = 5;
          }, 1600);
        } else {
          this.isShowTip = true;
          this.isCorrect = false;
          this.$refs["mp3fail"].play();
          this.tipInfo = "看看是否有些资源没用上";
          // this.tipInfo = "看看是否有些资源(-)没用上";

          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
          }, 1600);
        }
      } else if (part == 5) {
        console.log(Math.abs(this.$refs["three"].offsetLeft - this.$refs["three1"].offsetLeft));
        console.log(Math.abs(this.$refs["three"].offsetTop - this.$refs["three1"].offsetTop));

        if (Math.abs(this.$refs["one"].offsetLeft - this.$refs["one1"].offsetLeft) < 20 && Math.abs(this.$refs["one"].offsetTop - this.$refs["one1"].offsetTop) < 20 && Math.abs(this.$refs["two"].offsetLeft - this.$refs["three1"].offsetLeft) < 20 && Math.abs(this.$refs["two"].offsetTop - this.$refs["three1"].offsetTop) < 20 && Math.abs(this.$refs["three"].offsetLeft - this.$refs["three1"].offsetLeft) < 20 && Math.abs(this.$refs["three"].offsetTop - this.$refs["three1"].offsetTop) < 20) {
          this.isShowTip = true;
          this.isCorrect = true;
          this.$refs["mp3ok"].play();
          this.tipInfo = "进入挑战成功页";
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;

            _this4.currentPage = 6;
            _this4.timeEnd = new Date().valueOf();
            _this4.showGameRes();
          }, 1600);
        } else {
          this.isShowTip = true;
          this.isCorrect = false;
          this.tipInfo = "不要用惯性思维解答喔";
          this.$refs["mp3fail"].play();
          setTimeout(function () {
            _this4.isShowTip = false;
            _this4.isCorrect = false;
            _this4.isSubmit = false;
          }, 1600);
        }
      }
    }
  }
});