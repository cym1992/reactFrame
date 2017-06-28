import Mock from 'mockjs';
Mock.mock('/msgController.do?listjs', function(options) {
	return {
		"msg": "查询成功",
		"data": {
			"list": [{
				"id": "2c9330175cbb7ad2015ce9d0cc0a0046",
				"text": "实验名称: ddddddddddd",
				"zt": 1,
				"main": "您有一条实验已审批",
				"wjid": null,
				"cjsj": "2017-06-27 21:49:54",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "南农",
				"dqsj": "2017-06-27 21:49:54"
			}, {
				"id": "402831815c82db59015c82ddbb6e0005",
				"text": "白底同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条耗材采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 22:03:08",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "白底",
				"dqsj": "2017-06-07 22:03:08"
			}, {
				"id": "402831815c82b1f3015c82d632af0026",
				"text": "白底同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条耗材采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 21:54:54",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "白底",
				"dqsj": "2017-06-07 21:54:54"
			}, {
				"id": "402831815c82b1f3015c82c38404000d",
				"text": "南农同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 21:34:30",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "南农",
				"dqsj": "2017-06-07 21:34:30"
			}, {
				"id": "402831815c82b1f3015c82c371780009",
				"text": "南农同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 21:34:25",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "南农",
				"dqsj": "2017-06-07 21:34:25"
			}, {
				"id": "402831815c82b1f3015c82c28c100005",
				"text": "白底提交了一条仪器采购,请审批",
				"zt": 1,
				"main": "您有一条仪器采购待审批",
				"wjid": null,
				"cjsj": "2017-06-07 21:33:26",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "白底",
				"dqsj": "2017-06-07 21:33:26"
			}, {
				"id": "402881e85c82869c015c82b8d4750005",
				"text": "小胖同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 21:22:50",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "小胖",
				"dqsj": "2017-06-07 21:22:50"
			}, {
				"id": "402881e85c82869c015c829f5ea00003",
				"text": "白底同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 20:55:01",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "白底",
				"dqsj": "2017-06-07 20:55:01"
			}, {
				"id": "2c9330175c7ddf73015c8019de520005",
				"text": "白底同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条耗材采购已审批",
				"wjid": null,
				"cjsj": "2017-06-07 09:09:57",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "白底",
				"dqsj": "2017-06-07 09:09:57"
			}, {
				"id": "402831815c7dd8c3015c7dda7a900002",
				"text": "南农同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-06 22:41:29",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "南农",
				"dqsj": "2017-06-06 22:41:29"
			}, {
				"id": "402831815c7dd8c3015c7dd9c1430000",
				"text": "小胖同意了您的仪器采购",
				"zt": 1,
				"main": "您有一条仪器采购已审批",
				"wjid": null,
				"cjsj": "2017-06-06 22:40:41",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "小胖",
				"dqsj": "2017-06-06 22:40:41"
			}, {
				"id": "402881e85c7dc45c015c7dcfde270007",
				"text": "小胖提交了一条仪器采购,请审批",
				"zt": 1,
				"main": "您有一条仪器采购待审批",
				"wjid": null,
				"cjsj": "2017-06-06 22:29:53",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "小胖",
				"dqsj": "2017-06-06 22:29:53"
			}, {
				"id": "402881e85c7dc45c015c7dcbdb760004",
				"text": "小胖提交了一条仪器采购,请审批",
				"zt": 1,
				"main": "您有一条仪器采购待审批",
				"wjid": null,
				"cjsj": "2017-06-06 22:25:30",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "小胖",
				"dqsj": "2017-06-06 22:25:31"
			}, {
				"id": "402881e85c7dc45c015c7dcad5270001",
				"text": "小胖提交了一条仪器采购,请审批",
				"zt": 1,
				"main": "您有一条仪器采购待审批",
				"wjid": null,
				"cjsj": "2017-06-06 22:24:23",
				"jsrid": "2c9330175c3a645a015c4e0eb4810036",
				"fqr": "小胖",
				"dqsj": "2017-06-06 22:24:23"
			}],
			"totalRecords": 14
		},
		"status": true
	}
})