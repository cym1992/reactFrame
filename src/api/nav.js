import Mock from 'mockjs';

/**
 * 侧边栏菜单
 */
Mock.mock('/menuController.do?qx', function(options) {
	let params = options.body
	if (!params) {
		return {
			"data": [{
				"secondMenu": [{
					"path": "/account_xxgly",
					"title": "账号管理"
				}],
				"fistMenu": {
					"title": "账号管理"
				}
			}, {
				"secondMenu": [{
					"path": "/start_exp_list",
					"title": "发起实验"
				}, {
					"path": "/dsp_exp",
					"title": "待审批的实验"
				}, {
					"path": "/teaywc_exp",
					"title": "已完成的实验"
				}],
				"fistMenu": {
					"title": "实验管理"
				}
			}, {
				"secondMenu": [{
					"path": "/fqmsg_list",
					"title": "发起消息"
				}, {
					"path": "/mymsg_list",
					"title": "我的消息"
				}],
				"fistMenu": {
					"title": "消息管理"
				}
			}, {
				"secondMenu": [{
					"path": "/zdcggly",
					"title": "指定管理员"
				}, {
					"path": "/yqsh_list",
					"title": "仪器采购审核"
				}, {
					"path": "/hcsh_list",
					"title": "耗材采购审核"
				}, {
					"path": "/yqgl_list",
					"title": "仪器采购申请"
				}, {
					"path": "/hcgl_list",
					"title": "耗材采购申请"
				}],
				"fistMenu": {
					"title": "采购管理"
				}
			}, {
				"secondMenu": [{
					"path": "/account_info",
					"title": "人员档案"
				}, {
					"path": "/exptea_info",
					"title": "实验档案"
				}, {
					"path": "/cg_info",
					"title": "采购档案"
				}, {
					"path": "/other_da",
					"title": "文献档案"
				}],
				"fistMenu": {
					"title": "档案管理"
				}
			}],
			"status": true
		}
	} else {
		return {
			"data": [{
				"secondMenu": [{
					"path": "/stujxz_exp",
					"title": "进行中的实验"
				}, {
					"path": "/stuywc_exp",
					"title": "已完成的实验"
				}],
				"fistMenu": {
					"title": "实验管理"
				}
			}, {
				"secondMenu": [{
					"path": "/mymsg_list",
					"title": "我的消息"
				}],
				"fistMenu": {
					"title": "消息管理"
				}
			}, {
				"secondMenu": [{
					"path": "/yqgl_list",
					"title": "仪器采购申请"
				}, {
					"path": "/hcgl_list",
					"title": "耗材采购申请"
				}, {
					"path": "/lsyqsh_list",
					"title": "仪器采购审核"
				}],
				"fistMenu": {
					"title": "采购管理"
				}
			}, {
				"secondMenu": [{
					"path": "/expstu_info",
					"title": "实验档案"
				}, {
					"path": "/other_da",
					"title": "文献档案"
				}],
				"fistMenu": {
					"title": "档案管理"
				}
			}],
			"status": true
		}

	}
})

/**
 * 进行中实验列表
 * @param  {[type]} options) {	let        params [description]
 * @return {[type]}          [description]
 */
Mock.mock('/xssyController.do?listjxz', 'get', function(options) {
	let params = options.body
	if (params) {
		let paramsObj = JSON.parse(params)
		if (paramsObj.sybh) {
			return {
				"msg": "查询成功",
				"data": {
					"list": [{
						"name": "ddddddddddd",
						"id": "402881e85c72ac2e015c72ad80690000",
						"cjsj": "2017-06-04 18:36:32",
						"syrq": "2017-06-04 18:36:29",
						"sybh": "20170604001",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 3,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}],
					"totalRecords": 1
				},
				"status": true
			}
		}
		if (paramsObj.page) {
			return {
				"msg": "查询成功",
				"data": {
					"list": [{
						"name": "ddddddddddd",
						"id": "402881e85c72ac2e015c72ad80690000",
						"cjsj": "2017-06-04 18:36:32",
						"syrq": "2017-06-04 18:36:29",
						"sybh": "20170604001",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 3,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}, {
						"name": "dddd",
						"id": "402881e85c72ac2e015c72b0bbd30002",
						"cjsj": "2017-06-04 18:40:04",
						"syrq": "2017-06-04 18:39:54",
						"sybh": "20170604002",
						"fqr": "2c9330175c3a645a015c4e0df42e0035",
						"xsid": "2c9330175c3a645a015c4e0eb4810036",
						"xszt": 2,
						"lszt": 1,
						"lsname": "南农",
						"xsname": "小胖"
					}],
					"totalRecords": 20
				},
				"status": true
			}
		}
	}
	return {
		"msg": "查询成功",
		"data": {
			"list": [{
				"name": "ddddddddddd",
				"id": "402881e85c72ac2e015c72ad80690000",
				"cjsj": "2017-06-04 18:36:32",
				"syrq": "2017-06-04 18:36:29",
				"sybh": "20170604001",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 3,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "dddd",
				"id": "402881e85c72ac2e015c72b0bbd30002",
				"cjsj": "2017-06-04 18:40:04",
				"syrq": "2017-06-04 18:39:54",
				"sybh": "20170604002",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "xxx",
				"id": "402881e85c8d1a7e015c8d1c04560000",
				"cjsj": "2017-06-09 21:47:22",
				"syrq": "2017-06-09 21:47:14",
				"sybh": "20170609002",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}, {
				"name": "ddxx",
				"id": "402881e85c8d1a7e015c8d2ecdb60007",
				"cjsj": "2017-06-09 22:07:53",
				"syrq": "2017-06-09 22:07:45",
				"sybh": "20170609003",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 2,
				"lszt": 1,
				"lsname": "南农",
				"xsname": "小胖"
			}],
			"totalRecords": 20
		},
		"status": true
	}
})

/**
 * 个人信息
 */
Mock.mock('/userController.do?hqyhxx', {
	"data": {
		"qq": "",
		"wx": "",
		"phone": "13057633227",
		"bh": "xp",
		"schoolid": "2c9330175c3a645a015c4e0d35820034",
		"name": "小胖",
		"zt": 1,
		"id": "2c9330175c3a645a015c4e0eb4810036",
		"dqsj": "2017-07-17",
		"email": ""
	},
	"status": true
})

Mock.mock('/xssyController.do?syjlck', function(options) {
	let params = options.body
	if (params) {
		return {
			"fqsy": {
				"name": "ddddddddddd",
				"id": "402881e85c72ac2e015c72ad80690000",
				"zt": 1,
				"cjsj": "2017-06-04 18:36:32",
				"rwbh": "",
				"xmbh": "",
				"fzr": "",
				"yjlx": "",
				"ktz": "",
				"syrq": "2017-06-04 18:36:29",
				"sybh": "20170604001",
				"fqr": "南农",
				"ktfx": "",
				"pzr": "",
				"synr": "dddddddddddddd",
				"yqjg": "<p>（原标题：廿年不忘 习近平心系香江之同根篇）</p>\n\n<p>团结统一的中华民族是海内外中华儿女共同的根，博大精深的中华文化是海内外中华儿女共同的魂，实现中华民族伟大复兴是海内外中华儿女共同的梦。</p>\n\n<p>　　&mdash;&mdash;习近平</p>\n\n<p>1997年7月1日，一场酣畅淋漓的大雨，洗刷掉香港150多年的屈辱。五星红旗伴随着雄浑激昂的《义勇军进行曲》徐徐升起。</p>\n\n<p>几番风雨，几多磨难，内地与香港同根同源，短暂的分离抵不过浓浓的血脉情深。</p>\n\n<p>&ldquo;团结统一的中华民族是海内外中华儿女共同的根。&rdquo;在&ldquo;一国两制&rdquo;的基本国策下，二十年来，久别重聚的中华儿女始终坚守着民族团结统一之根本，香港这颗璀璨的东方明珠也愈加焕发出耀眼夺目的光彩。</p>\n\n<p><strong>　　一国：血脉相连　休戚与共</strong></p>\n\n<p>&ldquo;一样的血，一样的种，未来还有梦，我们一起开拓。&rdquo;这首1997年发行的歌曲《中国人》，唱出了无数香港同胞的认同与期盼。香港回归二十年，是&ldquo;一国两制&rdquo;成功实践的二十年。</p>\n\n<p>2012年11月，中国共产党第十八届全国代表大会胜利召开，海内外各界高度关注新时期中央对港澳的方针政策会不会发生改变。一个多月以后，习近平在中南海会见了来京述职的香港特别行政区行政长官梁振英。习近平明确表态：&ldquo;大家都很关心中央领导集体实现新老交替后，中央对香港、澳门的方针政策会不会发生变化。今天，我想借此机会重申：中央贯彻落实&lsquo;一国两制&rsquo;、严格按照基本法办事的方针不会变；支持行政长官和特别行政区政府依法施政、履行职责的决心不会变；支持香港、澳门两个特别行政区发展经济、改善民生、推进民主、促进和谐的政策也不会变。&rdquo;三个&ldquo;不会改变&rdquo;掷地有声，给港澳同胞吃下了一颗定心丸。</p>\n\n<p>面对近几年香港出现的新情况、新问题，2015年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时强调，中央贯彻&ldquo;一国两制&rdquo;方针坚持两点：一是坚定不移，不会变、不动摇。二是全面准确，确保&ldquo;一国两制&rdquo;在香港的实践不走样、不变形，始终沿着正确方向前进。</p>\n\n<p>2017年两会，首次在《政府工作报告》中强调&ldquo;一国两制&rdquo;的实践要&ldquo;不动摇、不走样、不变形&rdquo;。</p>\n\n<p>维多利亚港潮起潮退，太平山顶日出日落，紫荆花开春华秋实，东方之珠风采依旧，赤子之心从未改变。&ldquo;香港一直是一个中国城市，从未把北大西洋中的那几个潮湿岛屿当成祖国，她向来都有一个美好的祖国。&rdquo;香港回归十周年时，美国《时代》周刊这样写道。</p>\n\n<p>&ldquo;回归前拿的是英国国民海外护照，现在是中国的特区护照，拿着特区护照，我知道自己是中国人，很自豪。&rdquo;香港市民蓝国伦这样说。</p>\n\n<p>&ldquo;中华人民共和国公民&rdquo;，不单是回归后身份的变化，更是感情的认同，血缘的归属。</p>\n\n<p>的确，回归前的香港同胞只有&ldquo;城籍&rdquo;，没有&ldquo;国籍&rdquo;；只有专业教育，没有国民教育，缺乏对祖国的了解和认知。但是，两地人民血浓于水的感情从未割断。</p>\n\n<p>2003年，香港爆发&ldquo;非典&rdquo;疫情，对经济民生造成严重冲击。凭借港人的团结坚强和内地的大力援助，这场持续数月的疫情终被控制。</p>\n\n<p>天灾无情，人间有爱。2008年，四川汶川发生特大地震，香港同胞纷纷伸出援手，共投入100亿港元支援灾区重建。</p>\n\n<p>即使在回归以前，香港同胞亦时时心系祖国。从大兴安岭火灾、华东水灾、云南地震、广东风灾等救灾捐赠活动，到&ldquo;希望工程&rdquo;、&ldquo;苗圃行动&rdquo;、&ldquo;春蕾工程&rdquo;等扶贫助学活动，再到&ldquo;健康快车&rdquo;、&ldquo;光明行动&rdquo;、&ldquo;亮睛工程&rdquo;等医治病患同胞行动，广大香港同胞无不是在无私捐助。霍英东、李嘉诚、蒙民伟、邵逸夫、李兆基&hellip;&hellip;这些耳熟能详的名字几乎镌刻在全国各大城市的校园建筑上。</p>\n\n<p>&ldquo;高树靡阴，独木不林。&rdquo;香港同胞与祖国人民血脉相连，香港的前途与祖国休戚与共。正如习近平所说，香港、澳门与祖国内地的命运始终紧密相连。实现中华民族伟大复兴的中国梦，需要香港、澳门与祖国内地坚持优势互补、共同发展，需要港澳同胞与内地人民坚持守望相助、携手共进。</p>\n\n<p><strong>　　两制：港人治港　高度自治</strong></p>\n\n<p>湾仔会议展览中心新翼外的金紫荆广场，每天早上会迎着朝阳准时举行升旗仪式。这已成为香港人生活中的新元素。</p>\n\n<p>30多年前，当香港回归步入设计期的时候，总设计师邓小平就断言：&ldquo;要相信香港的中国人能治理好香港。&rdquo;&ldquo;港人治港&rdquo;是&ldquo;一国两制&rdquo;下的全新实践。这个实践既是繁荣富足香港的延续，又是回归新生香港的开端。</p>\n\n<p>2008年，习近平第一次以中共中央政治局常委、国家副主席以及中央港澳工作协调小组组长的身份赴香港特区考察，亲身感受香港回归祖国以来的深刻变化。他指出，实践已经并将不断证明，&ldquo;一国两制&rdquo;方针是完全正确的，是有强大生命力的；　广大香港同胞完全有智慧、有能力管理好、建设好香港。</p>\n\n<p>&ldquo;以基本法为基础的&lsquo;一国两制&rsquo;，是一项伟大的制度创新，它既维护了国家统一和领土完整，也充分照顾了香港的特殊情况和港人利益，有力地促进了香港的繁荣稳定。&rdquo;原香港基本法起草委员会委员谭耀宗说。</p>\n\n<p>回归二十年，香港同胞的权利和自由得到保障。在维护法治的前提下，香港市民可以就各种议题，包括劳工福利、文物古迹保护、教育改革等，表达意见、阐述立场。</p>\n\n<p>根据基本法，2017年3月26日，林郑月娥获得777张有效选票，当选为香港第五任行政长官，经中央人民政府任命后成为候任行政长官。这次选举结果与若干机构的民意调查相吻合，印证了选委会的广泛代表性，充分反映了香港民意。</p>\n\n<p>2014年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时，肯定了香港的法治环境。他进一步指出，希望香港各界从国家根本利益和香港整体利益出发，广泛凝聚共识，维护社会安定，推动经济发展，珍视法治环境，确保香港在&ldquo;一国两制&rdquo;方针和基本法规定的轨道上稳步前进。</p>\n\n<p>二十年探索，二十年实践，几经风雨，几多考验，共和国版图上这颗璀璨的东方明珠以其繁荣和稳定证明了这一基本国策的正确性和生命力。</p>\n\n<p>美国普林斯顿大学政治经济学教授邹至庄表示，香港回归之前，一些香港人不看好未来的经济发展，移民到其他国家和地区。然而，不久之后，很多人又返回香港。回归潮证明香港人对&ldquo;一国两制&rdquo;的认同。</p>\n\n<p><strong>　　东方明珠　续写香江传奇</strong></p>\n\n<p>驻足店铺林立、人头攒动的铜锣湾闹市，拖着长&ldquo;辫子&rdquo;叮叮车与豪华现代的小轿车并驾齐驱；简陋斑驳的小吃店与排场讲究的大商场毗邻而居；蜿蜒曲折的蛇形队伍，在烈日下井然有序地等候公共汽车&hellip;&hellip;</p>\n\n<p>这是一个缩影，这个缩影生动地告诉世人：&ldquo;一国两制&rdquo;下的香港是繁荣富足的香港，也是和谐文明的香港；是穿越了历史烟云的现代都会，也是多种文化交融的中国特区。</p>\n\n<p>数字是枯燥的，也是最直观的。得益于&ldquo;一国两制&rdquo;的制度优势和得天独厚的地缘优势，香港特别行政区成立20年来，尽管接连遭遇亚洲金融危机、非典疫情和国际金融危机等风浪的冲击，但经济社会大局始终保持稳定。从1997年到2016年，香港本地生产总值由1.37万亿港元增至2.49万亿港元，特区政府的财政储备由4575亿港元增至9083亿港元。</p>\n\n<p>瑞士洛桑管理学院(IMD)近日发布了《2017年世界竞争力年报》，香港连续第二年被评为全球最具竞争力经济体。香港舆论指出，这是&ldquo;一国两制&rdquo;在香港真正落实的明证，港人应保持对香港制度的信心，同时也要居安思危，避免固步自封。</p>\n\n<p>2017年，香港已连续23年被美国传统基金会评为全球最自由经济体。香港对本地企业实行低税率且操作简单的税制，对许多进口产品免税，是国际著名的自由港。香港健康的财政状况、自由的贸易和金融环境、廉洁的政府、高效的监管，都屡受国际评比机构的称道。</p>\n\n<p>&ldquo;我们比历史上任何时期都更接近中华民族伟大复兴的目标，比历史上任何时期都更有信心、有能力实现这个目标。&rdquo;中国当前正处于历史发展的最好时期，同时也是香港历史发展的最好时期。回归二十年，香港的魅力折服了许多悲观论者和怀疑论者。倾听历史跫音，回首来时历程，我们脚步坚定，充满自信。展望未来，我们对香港的明天充满信心，对祖国的前程充满信心。(文/林孔仕)</p>\n",
				"schoolid": "2c9330175c3a645a015c4e0d35820034"
			},
			"syzb": [{
				"id": "402881e85c8d1a7e015c8d2b08550002",
				"zt": 2,
				"syid": "402881e85c72ac2e015c72ad80690000",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"czff": "<p>（原标题：廿年不忘 习近平心系香江之同根篇）</p>\n\n<p>团结统一的中华民族是海内外中华儿女共同的根，博大精深的中华文化是海内外中华儿女共同的魂，实现中华民族伟大复兴是海内外中华儿女共同的梦。</p>\n\n<p>　　&mdash;&mdash;习近平</p>\n\n<p>1997年7月1日，一场酣畅淋漓的大雨，洗刷掉香港150多年的屈辱。五星红旗伴随着雄浑激昂的《义勇军进行曲》徐徐升起。</p>\n\n<p>几番风雨，几多磨难，内地与香港同根同源，短暂的分离抵不过浓浓的血脉情深。</p>\n\n<p>&ldquo;团结统一的中华民族是海内外中华儿女共同的根。&rdquo;在&ldquo;一国两制&rdquo;的基本国策下，二十年来，久别重聚的中华儿女始终坚守着民族团结统一之根本，香港这颗璀璨的东方明珠也愈加焕发出耀眼夺目的光彩。</p>\n\n<p><strong>　　一国：血脉相连　休戚与共</strong></p>\n\n<p>&ldquo;一样的血，一样的种，未来还有梦，我们一起开拓。&rdquo;这首1997年发行的歌曲《中国人》，唱出了无数香港同胞的认同与期盼。香港回归二十年，是&ldquo;一国两制&rdquo;成功实践的二十年。</p>\n\n<p>2012年11月，中国共产党第十八届全国代表大会胜利召开，海内外各界高度关注新时期中央对港澳的方针政策会不会发生改变。一个多月以后，习近平在中南海会见了来京述职的香港特别行政区行政长官梁振英。习近平明确表态：&ldquo;大家都很关心中央领导集体实现新老交替后，中央对香港、澳门的方针政策会不会发生变化。今天，我想借此机会重申：中央贯彻落实&lsquo;一国两制&rsquo;、严格按照基本法办事的方针不会变；支持行政长官和特别行政区政府依法施政、履行职责的决心不会变；支持香港、澳门两个特别行政区发展经济、改善民生、推进民主、促进和谐的政策也不会变。&rdquo;三个&ldquo;不会改变&rdquo;掷地有声，给港澳同胞吃下了一颗定心丸。</p>\n\n<p>面对近几年香港出现的新情况、新问题，2015年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时强调，中央贯彻&ldquo;一国两制&rdquo;方针坚持两点：一是坚定不移，不会变、不动摇。二是全面准确，确保&ldquo;一国两制&rdquo;在香港的实践不走样、不变形，始终沿着正确方向前进。</p>\n\n<p>2017年两会，首次在《政府工作报告》中强调&ldquo;一国两制&rdquo;的实践要&ldquo;不动摇、不走样、不变形&rdquo;。</p>\n\n<p>维多利亚港潮起潮退，太平山顶日出日落，紫荆花开春华秋实，东方之珠风采依旧，赤子之心从未改变。&ldquo;香港一直是一个中国城市，从未把北大西洋中的那几个潮湿岛屿当成祖国，她向来都有一个美好的祖国。&rdquo;香港回归十周年时，美国《时代》周刊这样写道。</p>\n\n<p>&ldquo;回归前拿的是英国国民海外护照，现在是中国的特区护照，拿着特区护照，我知道自己是中国人，很自豪。&rdquo;香港市民蓝国伦这样说。</p>\n\n<p>&ldquo;中华人民共和国公民&rdquo;，不单是回归后身份的变化，更是感情的认同，血缘的归属。</p>\n\n<p>的确，回归前的香港同胞只有&ldquo;城籍&rdquo;，没有&ldquo;国籍&rdquo;；只有专业教育，没有国民教育，缺乏对祖国的了解和认知。但是，两地人民血浓于水的感情从未割断。</p>\n\n<p>2003年，香港爆发&ldquo;非典&rdquo;疫情，对经济民生造成严重冲击。凭借港人的团结坚强和内地的大力援助，这场持续数月的疫情终被控制。</p>\n\n<p>天灾无情，人间有爱。2008年，四川汶川发生特大地震，香港同胞纷纷伸出援手，共投入100亿港元支援灾区重建。</p>\n\n<p>即使在回归以前，香港同胞亦时时心系祖国。从大兴安岭火灾、华东水灾、云南地震、广东风灾等救灾捐赠活动，到&ldquo;希望工程&rdquo;、&ldquo;苗圃行动&rdquo;、&ldquo;春蕾工程&rdquo;等扶贫助学活动，再到&ldquo;健康快车&rdquo;、&ldquo;光明行动&rdquo;、&ldquo;亮睛工程&rdquo;等医治病患同胞行动，广大香港同胞无不是在无私捐助。霍英东、李嘉诚、蒙民伟、邵逸夫、李兆基&hellip;&hellip;这些耳熟能详的名字几乎镌刻在全国各大城市的校园建筑上。</p>\n\n<p>&ldquo;高树靡阴，独木不林。&rdquo;香港同胞与祖国人民血脉相连，香港的前途与祖国休戚与共。正如习近平所说，香港、澳门与祖国内地的命运始终紧密相连。实现中华民族伟大复兴的中国梦，需要香港、澳门与祖国内地坚持优势互补、共同发展，需要港澳同胞与内地人民坚持守望相助、携手共进。</p>\n\n<p><strong>　　两制：港人治港　高度自治</strong></p>\n\n<p>湾仔会议展览中心新翼外的金紫荆广场，每天早上会迎着朝阳准时举行升旗仪式。这已成为香港人生活中的新元素。</p>\n\n<p>30多年前，当香港回归步入设计期的时候，总设计师邓小平就断言：&ldquo;要相信香港的中国人能治理好香港。&rdquo;&ldquo;港人治港&rdquo;是&ldquo;一国两制&rdquo;下的全新实践。这个实践既是繁荣富足香港的延续，又是回归新生香港的开端。</p>\n\n<p>2008年，习近平第一次以中共中央政治局常委、国家副主席以及中央港澳工作协调小组组长的身份赴香港特区考察，亲身感受香港回归祖国以来的深刻变化。他指出，实践已经并将不断证明，&ldquo;一国两制&rdquo;方针是完全正确的，是有强大生命力的；　广大香港同胞完全有智慧、有能力管理好、建设好香港。</p>\n\n<p>&ldquo;以基本法为基础的&lsquo;一国两制&rsquo;，是一项伟大的制度创新，它既维护了国家统一和领土完整，也充分照顾了香港的特殊情况和港人利益，有力地促进了香港的繁荣稳定。&rdquo;原香港基本法起草委员会委员谭耀宗说。</p>\n\n<p>回归二十年，香港同胞的权利和自由得到保障。在维护法治的前提下，香港市民可以就各种议题，包括劳工福利、文物古迹保护、教育改革等，表达意见、阐述立场。</p>\n\n<p>根据基本法，2017年3月26日，林郑月娥获得777张有效选票，当选为香港第五任行政长官，经中央人民政府任命后成为候任行政长官。这次选举结果与若干机构的民意调查相吻合，印证了选委会的广泛代表性，充分反映了香港民意。</p>\n\n<p>2014年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时，肯定了香港的法治环境。他进一步指出，希望香港各界从国家根本利益和香港整体利益出发，广泛凝聚共识，维护社会安定，推动经济发展，珍视法治环境，确保香港在&ldquo;一国两制&rdquo;方针和基本法规定的轨道上稳步前进。</p>\n\n<p>二十年探索，二十年实践，几经风雨，几多考验，共和国版图上这颗璀璨的东方明珠以其繁荣和稳定证明了这一基本国策的正确性和生命力。</p>\n\n<p>美国普林斯顿大学政治经济学教授邹至庄表示，香港回归之前，一些香港人不看好未来的经济发展，移民到其他国家和地区。然而，不久之后，很多人又返回香港。回归潮证明香港人对&ldquo;一国两制&rdquo;的认同。</p>\n\n<p><strong>　　东方明珠　续写香江传奇</strong></p>\n\n<p>驻足店铺林立、人头攒动的铜锣湾闹市，拖着长&ldquo;辫子&rdquo;叮叮车与豪华现代的小轿车并驾齐驱；简陋斑驳的小吃店与排场讲究的大商场毗邻而居；蜿蜒曲折的蛇形队伍，在烈日下井然有序地等候公共汽车&hellip;&hellip;</p>\n\n<p>这是一个缩影，这个缩影生动地告诉世人：&ldquo;一国两制&rdquo;下的香港是繁荣富足的香港，也是和谐文明的香港；是穿越了历史烟云的现代都会，也是多种文化交融的中国特区。</p>\n\n<p>数字是枯燥的，也是最直观的。得益于&ldquo;一国两制&rdquo;的制度优势和得天独厚的地缘优势，香港特别行政区成立20年来，尽管接连遭遇亚洲金融危机、非典疫情和国际金融危机等风浪的冲击，但经济社会大局始终保持稳定。从1997年到2016年，香港本地生产总值由1.37万亿港元增至2.49万亿港元，特区政府的财政储备由4575亿港元增至9083亿港元。</p>\n\n<p>瑞士洛桑管理学院(IMD)近日发布了《2017年世界竞争力年报》，香港连续第二年被评为全球最具竞争力经济体。香港舆论指出，这是&ldquo;一国两制&rdquo;在香港真正落实的明证，港人应保持对香港制度的信心，同时也要居安思危，避免固步自封。</p>\n\n<p>2017年，香港已连续23年被美国传统基金会评为全球最自由经济体。香港对本地企业实行低税率且操作简单的税制，对许多进口产品免税，是国际著名的自由港。香港健康的财政状况、自由的贸易和金融环境、廉洁的政府、高效的监管，都屡受国际评比机构的称道。</p>\n\n<p>&ldquo;我们比历史上任何时期都更接近中华民族伟大复兴的目标，比历史上任何时期都更有信心、有能力实现这个目标。&rdquo;中国当前正处于历史发展的最好时期，同时也是香港历史发展的最好时期。回归二十年，香港的魅力折服了许多悲观论者和怀疑论者。倾听历史跫音，回首来时历程，我们脚步坚定，充满自信。展望未来，我们对香港的明天充满信心，对祖国的前程充满信心。(文/林孔仕)</p>\n",
				"py": "ddd",
				"czsj": "2017-06-09 22:03:46",
				"syxxjfx": "<p>（原标题：廿年不忘 习近平心系香江之同根篇）</p>\n\n<p>团结统一的中华民族是海内外中华儿女共同的根，博大精深的中华文化是海内外中华儿女共同的魂，实现中华民族伟大复兴是海内外中华儿女共同的梦。</p>\n\n<p>　　&mdash;&mdash;习近平</p>\n\n<p>1997年7月1日，一场酣畅淋漓的大雨，洗刷掉香港150多年的屈辱。五星红旗伴随着雄浑激昂的《义勇军进行曲》徐徐升起。</p>\n\n<p>几番风雨，几多磨难，内地与香港同根同源，短暂的分离抵不过浓浓的血脉情深。</p>\n\n<p>&ldquo;团结统一的中华民族是海内外中华儿女共同的根。&rdquo;在&ldquo;一国两制&rdquo;的基本国策下，二十年来，久别重聚的中华儿女始终坚守着民族团结统一之根本，香港这颗璀璨的东方明珠也愈加焕发出耀眼夺目的光彩。</p>\n\n<p><strong>　　一国：血脉相连　休戚与共</strong></p>\n\n<p>&ldquo;一样的血，一样的种，未来还有梦，我们一起开拓。&rdquo;这首1997年发行的歌曲《中国人》，唱出了无数香港同胞的认同与期盼。香港回归二十年，是&ldquo;一国两制&rdquo;成功实践的二十年。</p>\n\n<p>2012年11月，中国共产党第十八届全国代表大会胜利召开，海内外各界高度关注新时期中央对港澳的方针政策会不会发生改变。一个多月以后，习近平在中南海会见了来京述职的香港特别行政区行政长官梁振英。习近平明确表态：&ldquo;大家都很关心中央领导集体实现新老交替后，中央对香港、澳门的方针政策会不会发生变化。今天，我想借此机会重申：中央贯彻落实&lsquo;一国两制&rsquo;、严格按照基本法办事的方针不会变；支持行政长官和特别行政区政府依法施政、履行职责的决心不会变；支持香港、澳门两个特别行政区发展经济、改善民生、推进民主、促进和谐的政策也不会变。&rdquo;三个&ldquo;不会改变&rdquo;掷地有声，给港澳同胞吃下了一颗定心丸。</p>\n\n<p>面对近几年香港出现的新情况、新问题，2015年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时强调，中央贯彻&ldquo;一国两制&rdquo;方针坚持两点：一是坚定不移，不会变、不动摇。二是全面准确，确保&ldquo;一国两制&rdquo;在香港的实践不走样、不变形，始终沿着正确方向前进。</p>\n\n<p>2017年两会，首次在《政府工作报告》中强调&ldquo;一国两制&rdquo;的实践要&ldquo;不动摇、不走样、不变形&rdquo;。</p>\n\n<p>维多利亚港潮起潮退，太平山顶日出日落，紫荆花开春华秋实，东方之珠风采依旧，赤子之心从未改变。&ldquo;香港一直是一个中国城市，从未把北大西洋中的那几个潮湿岛屿当成祖国，她向来都有一个美好的祖国。&rdquo;香港回归十周年时，美国《时代》周刊这样写道。</p>\n\n<p>&ldquo;回归前拿的是英国国民海外护照，现在是中国的特区护照，拿着特区护照，我知道自己是中国人，很自豪。&rdquo;香港市民蓝国伦这样说。</p>\n\n<p>&ldquo;中华人民共和国公民&rdquo;，不单是回归后身份的变化，更是感情的认同，血缘的归属。</p>\n\n<p>的确，回归前的香港同胞只有&ldquo;城籍&rdquo;，没有&ldquo;国籍&rdquo;；只有专业教育，没有国民教育，缺乏对祖国的了解和认知。但是，两地人民血浓于水的感情从未割断。</p>\n\n<p>2003年，香港爆发&ldquo;非典&rdquo;疫情，对经济民生造成严重冲击。凭借港人的团结坚强和内地的大力援助，这场持续数月的疫情终被控制。</p>\n\n<p>天灾无情，人间有爱。2008年，四川汶川发生特大地震，香港同胞纷纷伸出援手，共投入100亿港元支援灾区重建。</p>\n\n<p>即使在回归以前，香港同胞亦时时心系祖国。从大兴安岭火灾、华东水灾、云南地震、广东风灾等救灾捐赠活动，到&ldquo;希望工程&rdquo;、&ldquo;苗圃行动&rdquo;、&ldquo;春蕾工程&rdquo;等扶贫助学活动，再到&ldquo;健康快车&rdquo;、&ldquo;光明行动&rdquo;、&ldquo;亮睛工程&rdquo;等医治病患同胞行动，广大香港同胞无不是在无私捐助。霍英东、李嘉诚、蒙民伟、邵逸夫、李兆基&hellip;&hellip;这些耳熟能详的名字几乎镌刻在全国各大城市的校园建筑上。</p>\n\n<p>&ldquo;高树靡阴，独木不林。&rdquo;香港同胞与祖国人民血脉相连，香港的前途与祖国休戚与共。正如习近平所说，香港、澳门与祖国内地的命运始终紧密相连。实现中华民族伟大复兴的中国梦，需要香港、澳门与祖国内地坚持优势互补、共同发展，需要港澳同胞与内地人民坚持守望相助、携手共进。</p>\n\n<p><strong>　　两制：港人治港　高度自治</strong></p>\n\n<p>湾仔会议展览中心新翼外的金紫荆广场，每天早上会迎着朝阳准时举行升旗仪式。这已成为香港人生活中的新元素。</p>\n\n<p>30多年前，当香港回归步入设计期的时候，总设计师邓小平就断言：&ldquo;要相信香港的中国人能治理好香港。&rdquo;&ldquo;港人治港&rdquo;是&ldquo;一国两制&rdquo;下的全新实践。这个实践既是繁荣富足香港的延续，又是回归新生香港的开端。</p>\n\n<p>2008年，习近平第一次以中共中央政治局常委、国家副主席以及中央港澳工作协调小组组长的身份赴香港特区考察，亲身感受香港回归祖国以来的深刻变化。他指出，实践已经并将不断证明，&ldquo;一国两制&rdquo;方针是完全正确的，是有强大生命力的；　广大香港同胞完全有智慧、有能力管理好、建设好香港。</p>\n\n<p>&ldquo;以基本法为基础的&lsquo;一国两制&rsquo;，是一项伟大的制度创新，它既维护了国家统一和领土完整，也充分照顾了香港的特殊情况和港人利益，有力地促进了香港的繁荣稳定。&rdquo;原香港基本法起草委员会委员谭耀宗说。</p>\n\n<p>回归二十年，香港同胞的权利和自由得到保障。在维护法治的前提下，香港市民可以就各种议题，包括劳工福利、文物古迹保护、教育改革等，表达意见、阐述立场。</p>\n\n<p>根据基本法，2017年3月26日，林郑月娥获得777张有效选票，当选为香港第五任行政长官，经中央人民政府任命后成为候任行政长官。这次选举结果与若干机构的民意调查相吻合，印证了选委会的广泛代表性，充分反映了香港民意。</p>\n\n<p>2014年12月，习近平在会见来京述职的香港特别行政区行政长官梁振英时，肯定了香港的法治环境。他进一步指出，希望香港各界从国家根本利益和香港整体利益出发，广泛凝聚共识，维护社会安定，推动经济发展，珍视法治环境，确保香港在&ldquo;一国两制&rdquo;方针和基本法规定的轨道上稳步前进。</p>\n\n<p>二十年探索，二十年实践，几经风雨，几多考验，共和国版图上这颗璀璨的东方明珠以其繁荣和稳定证明了这一基本国策的正确性和生命力。</p>\n\n<p>美国普林斯顿大学政治经济学教授邹至庄表示，香港回归之前，一些香港人不看好未来的经济发展，移民到其他国家和地区。然而，不久之后，很多人又返回香港。回归潮证明香港人对&ldquo;一国两制&rdquo;的认同。</p>\n\n<p><strong>　　东方明珠　续写香江传奇</strong></p>\n\n<p>驻足店铺林立、人头攒动的铜锣湾闹市，拖着长&ldquo;辫子&rdquo;叮叮车与豪华现代的小轿车并驾齐驱；简陋斑驳的小吃店与排场讲究的大商场毗邻而居；蜿蜒曲折的蛇形队伍，在烈日下井然有序地等候公共汽车&hellip;&hellip;</p>\n\n<p>这是一个缩影，这个缩影生动地告诉世人：&ldquo;一国两制&rdquo;下的香港是繁荣富足的香港，也是和谐文明的香港；是穿越了历史烟云的现代都会，也是多种文化交融的中国特区。</p>\n\n<p>数字是枯燥的，也是最直观的。得益于&ldquo;一国两制&rdquo;的制度优势和得天独厚的地缘优势，香港特别行政区成立20年来，尽管接连遭遇亚洲金融危机、非典疫情和国际金融危机等风浪的冲击，但经济社会大局始终保持稳定。从1997年到2016年，香港本地生产总值由1.37万亿港元增至2.49万亿港元，特区政府的财政储备由4575亿港元增至9083亿港元。</p>\n\n<p>瑞士洛桑管理学院(IMD)近日发布了《2017年世界竞争力年报》，香港连续第二年被评为全球最具竞争力经济体。香港舆论指出，这是&ldquo;一国两制&rdquo;在香港真正落实的明证，港人应保持对香港制度的信心，同时也要居安思危，避免固步自封。</p>\n\n<p>2017年，香港已连续23年被美国传统基金会评为全球最自由经济体。香港对本地企业实行低税率且操作简单的税制，对许多进口产品免税，是国际著名的自由港。香港健康的财政状况、自由的贸易和金融环境、廉洁的政府、高效的监管，都屡受国际评比机构的称道。</p>\n\n<p>&ldquo;我们比历史上任何时期都更接近中华民族伟大复兴的目标，比历史上任何时期都更有信心、有能力实现这个目标。&rdquo;中国当前正处于历史发展的最好时期，同时也是香港历史发展的最好时期。回归二十年，香港的魅力折服了许多悲观论者和怀疑论者。倾听历史跫音，回首来时历程，我们脚步坚定，充满自信。展望未来，我们对香港的明天充满信心，对祖国的前程充满信心。(文/林孔仕)</p>\n"
			}],
			"syjl": [{
				"id": "2c9330175cbb7ad2015ce337454d003a",
				"zt": 0,
				"wjid": "",
				"syid": "402881e85c72ac2e015c72ad80690000",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"czff": "dd",
				"py": null,
				"czsj": "2017-06-26 15:04:29",
				"syxxjfx": "ddd"
			}],
			"status": true
		}
	} else {
		return {
			"status": false,
			"msg": '缺少实验id'
		}
	}
})

Mock.mock('/xssyController.do?listwc', function(options) {
	return {
		"msg": "查询成功",
		"data": {
			"list": [{
				"name": "ddddddddddd",
				"id": "402881e85c72ac2e015c72ad80690000",
				"cjsj": "2017-06-04 18:36:32",
				"syrq": "2017-06-04 18:36:29",
				"sybh": "20170604001",
				"fqr": "2c9330175c3a645a015c4e0df42e0035",
				"xsid": "2c9330175c3a645a015c4e0eb4810036",
				"xszt": 4,
				"lszt": 2,
				"lsname": "南农",
				"xsname": "小胖"
			}],
			"totalRecords": 1
		},
		"status": true
	}
})