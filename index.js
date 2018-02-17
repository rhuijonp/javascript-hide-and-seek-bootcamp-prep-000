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
 
				
  
}