function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  		var rankedLists = document.getElementsByClassName('ranked-list');
		
		for (var nodeNumber = 0; nodeNumber < rankedLists.length; nodeNumber++) {
			
			for (var childNumber = 0; childNumber < rankedLists[nodeNumber].childElementCount; childNumber++) { 
				rankedLists[nodeNumber].children[childNumber].innerHTML = parseInt(rankedLists[nodeNumber].children[childNumber].innerHTML) + n;

			}
		}

}

function deepestChild() {
  var depth = document.getElementById("grand-node");
		var deepestChild = "";
		if (depth.childElementCount > 0) {
			// console.log(depth.children[0]);
			deepestChild = "Base node element has children"; 
			console.log(deepestChild);
			if (depth.children[0].childElementCount > 0) {
				// console.log(depth.children[0].children[0]);
				deepestChild = "There is decendants at level 1";
				console.log(deepestChild);
				if (depth.children[0].children[0].childElementCount > 0){
					// console.log(depth.children[0].children[0].children[0]);
					deepestChild = "There is decendants at level 2";
					console.log(deepestChild);
					if (depth.children[0].children[0].children[0].childElementCount > 0) {
						// console.log(depth.children[0].children[0].children[0].children[0]);
						deepestChild = "There is decendants at level 4";
						console.log(deepestChild);
						if (depth.children[0].children[0].children[0].children[0].childElementCount > 0) {
							// console.log(depth.children[0].children[0].children[0].children[0].firstChild);
							deepestChild = "There is decendants at level 5";
							console.log(deepestChild);
						}	else {
							deepestChild = depth.children[0].children[0].children[0].children[0];
						}
					} else {
						deepestChild = depth.children[0].children[0].children[0];
					}
				} else {
					deepestChild = depth.children[0].children[0];
				}
			} else {
				deepestChild = depth.children[0];
			}
		} else {
			deepestChild = depth;
		}
		return deepestChild;
  
}