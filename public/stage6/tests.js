'use strict';

describe('ステージ6（意図通りにモジュールを書ける）', function() {
  it('あなたの満足のいく Web アプリケーションがここにある', function() {
    // ボタンはサービスです。
    // 自由に使ってください。


    var qualityOfYourAppliation = true;

    expect(qualityOfYourAppliation).to.be.ok;
  });
});

var sum =0;
var itemlist = ["りんご", "みかん", "もも"];
var pricelist = {"りんご":500, "みかん":300, "もも":200};

function add() {
	var itm = myform.items.value;
	var num = myform.num.value;

	var table = document.getElementById("table");

	var tr = document.createElement("tr");

	var td = document.createElement("td");
	var txt = document.createTextNode(itm);
	td.appendChild(txt);
	tr.appendChild(td);

	var td = document.createElement("td");
	var txt = document.createTextNode(pricelist[itm]);
	td.appendChild(txt);
	tr.appendChild(td);

	var td = document.createElement("td");
	var txt = document.createTextNode(num);
	td.appendChild(txt);
	tr.appendChild(td);

	var subtotal = pricelist[itm]*num;
	sum = sum + subtotal;
	var td = document.createElement("td");
	var txt = document.createTextNode(subtotal);
	td.appendChild(txt);
	tr.appendChild(td);

	table.appendChild(tr);
}

function clearData() {
	var table = document.getElementById("table");
	for(var i=table.childNodes.length-1; i>1; i--) {
		table.removeChild(table.childNodes[i]);
	}
	sum = 0;
}

function sumAlert() {
	window.alert("合計:" + sum + "円");
}