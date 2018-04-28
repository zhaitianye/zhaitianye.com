var containerDiv = document.getElementById("container");

setContainerTransparentOrDisplaynone();

function setContainerTransparentOrDisplaynone()
{
	if ((browserName == "internet explorer") && (browserVersion <= 8))
	{
		containerDiv.setAttribute("class", "displaynone");
		//alert("container displaynone");
	}
	else
	{
		containerDiv.setAttribute("class", "transparent");
		//alert("container transparent");
	}
}