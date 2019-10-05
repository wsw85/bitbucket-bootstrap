function openText(idTitle, idSpoiler, idTitleQuestion){

	let title = document.getElementById(idTitle);
	title.classList.toggle('open-text');

	let titleQuestion = document.getElementById(idTitleQuestion);
	titleQuestion.classList.toggle('spoiler-title-change');
	
	let spoiler = document.getElementById(idSpoiler);
	if(spoiler.classList.contains("fa-angle-down")){
		spoiler.classList.remove("fa-angle-down");
		spoiler.classList.add("fa-angle-up");
		spoiler.classList.add("spoiler-symbol-change");
	}
	else {
		spoiler.classList.remove("fa-angle-up");
		spoiler.classList.remove("spoiler-symbol-change");
		spoiler.classList.add("fa-angle-down");
	}
 
 }