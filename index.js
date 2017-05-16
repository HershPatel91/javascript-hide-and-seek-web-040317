function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n) {
var list = document.querySelectorAll('ul.ranked-list li')
for (var i = 0; i < list.length; i++) {
	var rank = parseInt(list[i].innerHTML, 10) + n
	list[i].innerHTML = rank.toString()
}
}

function deepestChild() {
	return document.getElementById('grand-node').querySelector('div div div div div')
}