exports.addData = function (params, callback){
	$fh.db({
		"act": "create",
		"type": "contact",
		"fields":[{
			"firstName": "Joe",
			"lastName": "Bloggs",
			"address1": "22 Blogger Lane",
			"address2": "Bloggsville",
			"country": "Bloggland",
			"phone": "555-123456"
		},{
			"firstName": "JoeB",
			"lastName": "BloggsY",
			"address1": "22 Blogger Lane",
			"address2": "Bloggsville",
			"country": "Bloggland",
			"phone": "555-123456"
		}]
	}, callback);
};


exports.getData = function (params, callback){
	$fh.db({
		"act": "read",
		"type": "contact",
		"guid": params["guid"]
	}, callback);
};

