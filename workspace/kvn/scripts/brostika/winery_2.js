let wineryscene2 =  new Scene("brostika_winery2",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(yusie);
	brostika.bringCharacter(broski);
	charles.preMove(-80);
	sophie.preMove(-50);
	brostika.display(0,1,0,function() {
		brostika.setAnchorX(0);
		brostika.setAnchorY(0);
		brostika.setWidth(150);
		brostika.changeBackground('winery',1,800);
	});
}, function(){return null})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
	sophie.changeSprite('default',function() {
		sophie.appear();
		charles.appear();
		slime.appear();
		slime2.appear(null,function() {
			sophie.move(32,null,1000,null,easeOut);
			sophie.wait(700,function() {
				sophie.rotateClockwise(23,300);
			});
			charles.appear(null,function() {
				charles.wait(200);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.rotateClockwise(null,200);
}, function(){return null})
,new Frame(function(){
	brostika.pan(-30,null,500,null,swing);
	sophie.move(-20,null,500);
	charles.move(-20,null,500);
	slime.move(-30,null,500);
	slime2.move(-30,null,500);
	sophie.changeItalic(true);
	charles.changeItalic(true);
	sophie.setFontSize('1.2vw');
	charles.setFontSize('1.2vw');
}, function(){return null})
,new Frame(function(){
	brostika.pan(30,null,500,null,swing);
	sophie.move(null,0,500);
	charles.move(null,0,500);
	sophie.preSpeak(function() {
		sophie.speak('Phew...',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('That was close!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.scale(null,null,200,function() {
		charles.preSpeak(function() {
			charles.speak('We should keep our eyes peeled for the slimes,',function() {
				charles.wait(400,function() {
					charles.contSpeaking('The security here seems to be really tight');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	slime.disappear(10);
	slime2.disappear(10);
	charles.scale(null,null,200,function() {
		sophie.preSpeak(function() {
			sophie.speak('The slimes finally left.,',function() {
				sophie.wait(200,function() {
					sophie.contSpeaking('It\'s our chance to find Mr Broski!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.pan(-40,null,500,function() {
		sophie.move(-30,null,500,null,swing);
		charles.move(-30,null,500,null,swing);
		brostika.pan(30,null,500,function() {
			brostika.pan(-20,null,100,function() {
				sophie.speak('Isn\'t that Mr Broski in the shed?');
			});
		},swing);
	},swing);
}, function(){return null})
,new Frame(function(){
	brostika.setAnchorX(80);
	brostika.setAnchorY(50);
	brostika.scaleBackground(2,2,500,function() {
		broski.appear(1000);
	},swing,false);
}, function(){return null})
,new Frame(function(){
	sophie.move(30,0,500);
	charles.move(30,0,500,function() {
		sophie.speak('Are you Mr Broski?');
	});
}, function(){return null})
,new Frame(function(){
	broski.preSpeak(function() {
		broski.speak('Yes.',function() {
			broski.wait(200,function() {
				broski.contSpeaking('What do you want from me?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('We\'re here to save you Mr Broski',function() {
			charles.wait(200,function() {
				charles.contSpeaking('We will help you get back the winery after bringing you back to the constable');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.preSpeak(function() {
		broski.speak('If that\'s the case, I think we should get moving now while the slimes are away.');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('You\'re right.',function() {
			charles.wait(200,function() {
				charles.contSpeaking('Let me untie you.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.move(30,null,200,function() {
		charles.triggered(601,function() {
			charles.wait(500,function() {
				charles.move(-30,null,200);
			});
		},null,null,150);
	});
}, function(){return null})
,new Frame(function(){
	charles.scale(null,null,200,function() {
		sophie.preSpeak(function() {
			sophie.speak('Let\'s leave!');
		});
	});
}, function(){return null})
]);