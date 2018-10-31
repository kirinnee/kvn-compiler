let boriolsis_rejecthelp_2 =  new Scene("boriolsis_rejecthelp_2",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(slane);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(halley);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(june);
	boriolsis.bringCharacter(deadBodyCG);
	boriolsis.bringCharacter(deadsophie);
	boriolsis.bringCharacter(wizard);
	yusie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
	chief.setTextColor('white');
	halley.setTextColor('white');
	june.setTextColor('white');
	slane.setTextColor('white');
	slane.changeName('???');
	yusie.preMove(-70);
	yusie.setHorizontalFlip(true);
	charles.preMove(-13);
	sophie.preMove(27);
	june.preMove(-63);
	wizard.preMove(10);
	june.setHorizontalFlip(true);
	boriolsis.display(0,null,500,function() {
		boriolsis.setAnchorY(0);
		boriolsis.setAnchorX(0);
		boriolsis.scaleBackground(2,1,0,function() {
			boriolsis.changeBackground('forest',1,500,null,null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	yusie.changeSprite('curious');
	june.changeSprite('serious');
	sophie.appear(1000);
	wizard.appear(1000);
	charles.appear(1000);
	june.appear(1000);
	yusie.appear(1000);
	wizard.changeSprite('serious_speak',function() {
		wizard.preSpeak(function() {
			wizard.speak('I need a rubicram and two dendricorns');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Rubicrams are bright red in color with a clam-like exterior');
	charles.changeSprite('serious',function() {
		wizard.wait(500,function() {
			wizard.speak('Dendricorns are yellow in color and have long tentacles which are very likely to trip you');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('Don\'t worry!',function() {
			sophie.wait(300,function() {
				sophie.speak('We\'ll start looking for them right away!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.disappear(1000);
	charles.disappear(1000);
	june.disappear(1000);
	wizard.disappear(1000);
	boriolsis.closeTextBox();
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised');
	charles.changeSprite('surprised');
	june.changeSprite('surprised');
	wizard.changeSprite('surprised');
	yusie.changeSprite('surprised');
	sophie.appear(1000);
	charles.appear(1000);
	june.appear(1000);
	wizard.appear(1000,function() {
		wizard.changeSprite('surprised_speak');
		wizard.preSpeak(function() {
			wizard.speak('That was quick!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	yusie.changeSprite('smile');
	june.changeSprite('smile');
	charles.changeSprite('impatient');
	wizard.changeSprite('awkward_speak');
	wizard.speak('Having more eyes on the job really does make a huge difference,',function() {
		wizard.wait(400,function() {
			wizard.contSpeaking('doesn’t it?');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Now that I have everything that I need, I shall take my leave',function() {
		charles.changeSprite('speechless');
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.speak('Just follow this path and it will lead you back to the path that goes to Malidret',function() {
		wizard.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('Thank you for helping us earlier!',function() {
			sophie.wait(300,function() {
				sophie.speak('I hope your ritual will be successful!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.preSpeak(function() {
		wizard.speak('My pleasure',function() {
			wizard.changeSprite('smile');
			wizard.flipHorizontally(function() {
				wizard.move(50,null,500,function() {
					wizard.disappear();
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	charles.changeSprite('smile');
	june.flipHorizontally(function() {
		june.preSpeak(function() {
			june.speak('Since you\'re already close to Malidret, I think I should take my leave as well');
		});
	},200);
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile_speak');
	june.speak('Take care Father and my dear friends!',function() {
		june.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('Goodbye June!',function() {
			sophie.changeSprite('smile');
			june.flipHorizontally(function() {
				june.move(100,null,1000);
			});
		});
	});
}, function(){return null})
]);