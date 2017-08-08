const sysmsg = require('tera-data-parser').sysmsg;
module.exports = function pcCoffee(dispatch) {
	var cid = null;
	dispatch.hook("S_LOGIN", 1, event => {
		({cid} = event)
	});

	dispatch.hook("S_ACCOUNT_BENEFIT_LIST", 1, event => {
		var pc_coffee = [{ packageId: 1000,
					    unk1: 53373,
					    unk2: 0,
					    timeRemaining: 1500901401,
					    unk3: 0,
					    unk4: 0,
					    unk5: 0 } ]
		event.accountBenefits[event.accountBenefits.length] = pc_coffee[0];
		return true;
	});

	dispatch.hook("C_LOAD_TOPO_FIN", 1, event => {
		dispatch.toClient('S_SHOW_PCBANG_ICON', 1, {
			uid: cid,
			active: 1
		});
	})
}