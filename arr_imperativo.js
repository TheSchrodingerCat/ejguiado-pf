var l1 = [1,2,3];
var l2 = [2,3,4];

function intersection(l1,l2){
	var l3 = [];
	var largeL1 = l1.length;
	var largeL2 = l2.length;
	for(i=0 ; i<largeL1 ; i++){
		for(j=0 ; j<largeL2 ; j++){
			if(l1[i]==l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}

intersection(l1,l2);