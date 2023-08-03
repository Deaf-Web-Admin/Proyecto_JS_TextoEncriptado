const HTMLdeMain = () => {
	return `<textarea class="Edicion" Required autocomplete="off" autofocus></textarea ><textarea class="Encriptado1" >`;
};

const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
	const Area1 = document.querySelector(".Edicion");
	const Area2 = document.querySelector(".Encriptado1");

	Area1.addEventListener("input", () => {
		truco1 = btoa(Area1.value);
		Area2.value = truco1;
	});
};

Main();
