var preloaderDiv = document.getElementById("preloader");

setPreloaderTransparentOrDisplaynone();

function setPreloaderTransparentOrDisplaynone()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		preloaderDiv.setAttribute("class", "displaynone");
		//alert("preloader displaynone");
	}
	else
	{
		preloaderDiv.setAttribute("class", "transparent");
		//alert("preloader transparent");
	}
}