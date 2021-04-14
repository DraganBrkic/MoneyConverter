	var bamImg = document.getElementById("BamImg");
	var euroImg = document.getElementById("EuroImg");
	var poundImg = document.getElementById("PoundImg");
	var jenImg = document.getElementById("JenImg");
	var lbsGlobal = document.getElementById("lbsInput");


	///////////// Functions //////////////

	// push value in input field
	function inputValue() {
		lbsGlobal.value = '';
        document.getElementById("BamOutput").innerHTML = "";
		document.getElementById("EuroOutput").innerHTML = "";
		document.getElementById("PoundOutput").innerHTML = "";
		document.getElementById("JenOutput").innerHTML = "";
	};

	// hide and show images
	function bamImgFun() {
		document.getElementById("flagsOutput").innerHTML = "BAM";
		document.getElementById("SectionBAM").style.display = "none";
		document.getElementById("SectionEuro").style.display = "block";
		document.getElementById("SectionGBP").style.display = "block";
		document.getElementById("SectionJPY").style.display = "block";
	};

	function euroImgFun() {
		document.getElementById("flagsOutput").innerHTML = "EURO";
		document.getElementById("SectionEuro").style.display = "none";
		document.getElementById("SectionBAM").style.display = "block";
		document.getElementById("SectionJPY").style.display = "block";
		document.getElementById("SectionGBP").style.display = "block";
	};

	function poundImgFun() {
		document.getElementById("flagsOutput").innerHTML = "GBP";
		document.getElementById("SectionGBP").style.display = "none";
		document.getElementById("SectionBAM").style.display = "block";
		document.getElementById("SectionEuro").style.display = "block";
		document.getElementById("SectionJPY").style.display = "block";
	};

	function jenImgFun() {
		document.getElementById("flagsOutput").innerHTML = "JPY";
		document.getElementById("SectionJPY").style.display = "none";
		document.getElementById("SectionGBP").style.display = "block";
		document.getElementById("SectionBAM").style.display = "block";
		document.getElementById("SectionEuro").style.display = "block";
	};

	document.getElementById("wraper").style.display = "none";
	document.getElementById("Flags").addEventListener("click", function(e) {
		document.getElementById("wraper").style.display = "block";
		var x = e.target;
		switch(x) {
			case bamImg: 
			inputValue();
			bamImgFun();
			document.getElementById("lbsInput").addEventListener("input", function(e){
				var lbs = e.target.value;
				document.getElementById("BamOutput").innerHTML = lbs*1;
				document.getElementById("EuroOutput").innerHTML = lbs/1.95;
				document.getElementById("PoundOutput").innerHTML = lbs/2.24;
				document.getElementById("JenOutput").innerHTML = lbs*63.28;
			});
			break;

			case euroImg: 
			inputValue();
			euroImgFun();
			document.getElementById("lbsInput").addEventListener("input", function(e){
				var lbs = e.target.value;
				document.getElementById("BamOutput").innerHTML = lbs*1.95;
				document.getElementById("EuroOutput").innerHTML = lbs*1;
				document.getElementById("PoundOutput").innerHTML = lbs*0.88;
				document.getElementById("JenOutput").innerHTML = lbs*124.642;
			});
			break;

			case poundImg: 
			inputValue();
			poundImgFun();
			document.getElementById("lbsInput").addEventListener("input", function(e){
				var lbs = e.target.value;
				document.getElementById("BamOutput").innerHTML = lbs*2.24;
				document.getElementById("EuroOutput").innerHTML = lbs*1.13;
				document.getElementById("PoundOutput").innerHTML = lbs*1;
				document.getElementById("JenOutput").innerHTML = lbs*142.097;
			});
			break;

			case jenImg: 
			inputValue();
			jenImgFun();
			document.getElementById("lbsInput").addEventListener("input", function(e){
				var lbs = e.target.value;
				document.getElementById("BamOutput").innerHTML = lbs*0.0156915;
				document.getElementById("EuroOutput").innerHTML = lbs*0.00802296;
				document.getElementById("PoundOutput").innerHTML = lbs*0.00703668;
				document.getElementById("JenOutput").innerHTML = lbs*1;
			});
			break;
		}
	});