//	HYPE.documents["jellyjellyjelly"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "jellyjellyjelly_Resources";
	var documentName = "jellyjellyjelly";
	var documentLoaderFilename = "jellyjellyjelly_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE == "undefined") {
		if(typeof window.HYPE_DocumentsToLoad == "undefined") {
			window.HYPE_DocumentsToLoad = new Array();
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var attributeTransformerMapping = {"BorderColorRight":"ColorValueTransformer","BackgroundColor":"ColorValueTransformer","BorderWidthBottom":"PixelValueTransformer","WordSpacing":"PixelValueTransformer","BoxShadowXOffset":"PixelValueTransformer","Opacity":"FractionalValueTransformer","BorderWidthRight":"PixelValueTransformer","BorderWidthTop":"PixelValueTransformer","BoxShadowColor":"ColorValueTransformer","BorderColorBottom":"ColorValueTransformer","FontSize":"PixelValueTransformer","BorderRadiusTopRight":"PixelValueTransformer","TextColor":"ColorValueTransformer","Rotate":"DegreeValueTransformer","Height":"PixelValueTransformer","PaddingLeft":"PixelValueTransformer","BorderColorTop":"ColorValueTransformer","Top":"PixelValueTransformer","BackgroundGradientStartColor":"ColorValueTransformer","TextShadowXOffset":"PixelValueTransformer","PaddingTop":"PixelValueTransformer","BackgroundGradientAngle":"DegreeValueTransformer","PaddingBottom":"PixelValueTransformer","PaddingRight":"PixelValueTransformer","Width":"PixelValueTransformer","TextShadowColor":"ColorValueTransformer","BorderColorLeft":"ColorValueTransformer","ReflectionOffset":"PixelValueTransformer","Left":"PixelValueTransformer","BorderRadiusBottomRight":"PixelValueTransformer","LineHeight":"PixelValueTransformer","BoxShadowYOffset":"PixelValueTransformer","ReflectionDepth":"FractionalValueTransformer","BorderRadiusTopLeft":"PixelValueTransformer","BorderRadiusBottomLeft":"PixelValueTransformer","TextShadowBlurRadius":"PixelValueTransformer","TextShadowYOffset":"PixelValueTransformer","BorderWidthLeft":"PixelValueTransformer","BackgroundGradientEndColor":"ColorValueTransformer","BoxShadowBlurRadius":"PixelValueTransformer","LetterSpacing":"PixelValueTransformer"};

var scenes = [{"timelines":{"kTimelineDefaultIdentifier":{"framesPerSecond":30,"animations":[{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"302E41F3-BD1F-41B5-B736-EF9D65BFD216-7189-000065D5AAF757BE","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD","startTime":0},{"startValue":"245px","isRelative":true,"endValue":"245px","identifier":"Left","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD","startTime":0},{"startValue":"519px","isRelative":true,"endValue":"519px","identifier":"Top","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD","startTime":0},{"startValue":"84px","isRelative":true,"endValue":"84px","identifier":"Height","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD","startTime":0},{"startValue":"108px","isRelative":true,"endValue":"108px","identifier":"Width","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD","startTime":0},{"startValue":"0.000000","isRelative":true,"endValue":"1.000000","identifier":"Opacity","duration":0.53333336114883423,"timingFunction":"easeinout","type":0,"oid":"018FB700-AA24-4F9A-85DD-D8585CA024AE-7189-000065D5AA751668","startTime":0},{"startValue":"128px","isRelative":true,"endValue":"128px","identifier":"Height","duration":1.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"018FB700-AA24-4F9A-85DD-D8585CA024AE-7189-000065D5AA751668","startTime":0},{"startValue":"128px","isRelative":true,"endValue":"128px","identifier":"Width","duration":1.0333333015441895,"timingFunction":"easeinout","type":0,"oid":"018FB700-AA24-4F9A-85DD-D8585CA024AE-7189-000065D5AA751668","startTime":0}],"identifier":"kTimelineDefaultIdentifier","name":"Main Timeline","duration":1.0333333015441895}},"id":"21A8A4FB-DFA5-4E26-B221-E8E3D2391E87-7189-000065D07F3B2369","sceneIndex":0,"perspective":"600px","oid":"21A8A4FB-DFA5-4E26-B221-E8E3D2391E87-7189-000065D07F3B2369","initialValues":{"703B18A1-A84D-4E18-BDA3-FD9094FE44EA-7189-000066722EF3F73E":{"FontFamily":"'Times New Roman',Times,Baskerville,Serif","LineHeight":"26px","TagName":"div","PaddingRight":"8px","FontSize":"14px","LetterSpacing":"1px","Display":"inline","WordWrap":"break-word","Top":"724px","PaddingBottom":"8px","WhiteSpaceCollapsing":"preserve","Position":"absolute","Height":"19px","Left":"166px","TextAlign":"center","InnerHTML":"<b>jellyjellyjelly.com</b>, coming soon.","ZIndex":"6","PaddingLeft":"8px","Width":"252px","PaddingTop":"8px","Overflow":"visible","TextColor":"#000000"},"5940B35D-E99B-4608-B84A-C02991EB134E-7189-000065D5A9E5FEAD":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"245px","Display":"inline","BackgroundImage":"CranberryMuffin.jpg","Height":"84px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"2","Top":"519px","Width":"108px","Opacity":"0.000000","TagName":"div"},"018FB700-AA24-4F9A-85DD-D8585CA024AE-7189-000065D5AA751668":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"235px","Display":"inline","BackgroundImage":"homemade-strawberry-jam-recipe-160-160-1.jpg","Height":"128px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"3","Top":"204px","Width":"128px","Opacity":"0.000000","TagName":"div"},"6BF4F6E1-66FC-4F30-96FA-2BADCFC97360-7189-000065E2480D5163":{"FontFamily":"'Times New Roman',Times,Baskerville,Serif","LineHeight":"30px","TagName":"div","PaddingRight":"8px","FontSize":"16px","WordSpacing":"3px","LetterSpacing":"1px","Display":"inline","WordWrap":"break-word","PaddingBottom":"8px","Top":"53px","WhiteSpaceCollapsing":"preserve","Position":"absolute","Height":"111px","Left":"111px","TextAlign":"center","InnerHTML":"<span class=\"Apple-style-span\" style=\"font-size: 64px; \">E</span><font class=\"Apple-style-span\" size=\"5\">ntia non sunt multiplicanda praeter necessitatem.</font>","ZIndex":"5","PaddingLeft":"8px","Width":"359px","PaddingTop":"8px","Overflow":"visible","TextColor":"#000000"},"72457E90-5EEA-44E7-B221-FFD3F13F98BD-7189-000066889CC33F2E":{"BorderWidthBottom":"0px","TagName":"div","BorderColorBottom":"#A0A0A0","BorderStyleRight":"None","BorderStyleBottom":"None","Top":"685px","BorderWidthRight":"0px","BorderStyleLeft":"None","BorderColorTop":"#A0A0A0","BorderColorLeft":"#A0A0A0","Position":"absolute","Height":"113px","Left":"0px","BorderColorRight":"#A0A0A0","TextAlign":"left","InnerHTML":"","BorderStyleTop":"None","Width":"598px","ZIndex":"1","BorderWidthTop":"0px","Overflow":"visible","BorderWidthLeft":"0px","BackgroundColor":"#EEF7EA"},"302E41F3-BD1F-41B5-B736-EF9D65BFD216-7189-000065D5AAF757BE":{"Position":"absolute","BackgroundOrigin":"content-box","Left":"219px","Display":"inline","BackgroundImage":"pizza-slice-01.jpg","Height":"120px","Overflow":"visible","BackgroundSize":"100% 100%","ZIndex":"4","Top":"367px","Width":"160px","Opacity":"0.000000","TagName":"div","InnerHTML":""}},"name":"Untitled Scene","backgroundColor":"#FFFFFF"}];

var javascriptMapping = {};


	
	var Custom = (function() {
	return {
	};
}());

	
	var hypeDoc = new HYPE();
	
	hypeDoc.attributeTransformerMapping = attributeTransformerMapping;
	hypeDoc.scenes = scenes;
	hypeDoc.javascriptMapping = javascriptMapping;
	hypeDoc.Custom = Custom;
	hypeDoc.currentSceneIndex = 0;
	hypeDoc.mainContentContainerID = "jellyjellyjelly_hype_container";
	hypeDoc.resourcesFolderName = resourcesFolderName;
	hypeDoc.showHypeBuiltWatermark = 0;
	hypeDoc.showLoadingPage = false;
	hypeDoc.drawSceneBackgrounds = true;
	hypeDoc.documentName = documentName;

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

