let boriolsis_accepthelp =  new Scene("boriolsis_accepthelp",
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
	yusie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
	chief.setTextColor('white');
	halley.setTextColor('white');
	june.setTextColor('white');
	slane.setTextColor('white');
	slane.changeName('???');
	charles.preMove(-13);
	sophie.preMove(27);
	halley.preMove(-82);
	halley.setHorizontalFlip(true);
	june.preMove(-33);
	chief.preMove(-2);
	chief.setHorizontalFlip(true);
	boriolsis.display(0,null,500,function() {
		boriolsis.setAnchorY(0);
		boriolsis.setAnchorX(0);
		boriolsis.scaleBackground(2,1,0,function() {
			boriolsis.changeBackground('forest',1,500,null,null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	chief.changeSprite('serious');
	halley.changeSprite('serious');
	sophie.changeSprite('serious');
	charles.changeSprite('serious');
	sophie.appear(1000);
	charles.appear(1000);
	chief.appear(1000);
	june.appear(1000);
	halley.appear(1000,function() {
		june.preSpeak(function() {
			june.speak('Alright',function() {
				june.wait(300,function() {
					june.speak('Princess Sophie, I will need one strand of your hair',function() {
						june.changeSprite('serious');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('hesitate_speak');
	sophie.preSpeak(function() {
		sophie.speak('Err...',function() {
			sophie.wait(300,function() {
				sophie.changeSprite('serious_speak');
				sophie.contSpeaking('Okay!',function() {
					sophie.wait(300,function() {
						sophie.speak('No worries!',function() {
							halley.changeSprite('impressed');
						});
					});
				});
			});
		},800,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared');
	sophie.rotateClockwise(10,100,function() {
		sophie.rotateAntiClockwise(20,200,function() {
			sophie.rotateClockwise(10,100,function() {
				sophie.move(30,null,300,function() {
					sophie.changeSprite('serious_speak');
					sophie.speak('Here you go!',function() {
						sophie.wait(500,function() {
							sophie.move(-30,null,300,function() {
								sophie.changeSprite('serious');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.changeOverlay(1,'black',1000);
	boriolsis.displayText('June quickly got to work and applied several biochemicals onto the dead body as she let the hair drop within the plume of smoke that was forming',null,null,null,false,'1.4vw','white');
	deadBodyCG.bringAboveOverlay(function() {
		deadBodyCG.appear(1000);
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('The chemicals reacted vigorously with the body and the air surrounding you started to become very smoky.');
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('Very soon, the silhouette of the dead body started to morph before the smoke dispersed, revealing a dead body that resembled Princess Sophie.');
	deadsophie.preMove(20);
	deadsophie.setHorizontalFlip(true);
}, function(){return null})
,new Frame(function(){
	deadBodyCG.disappear(1000);
	deadsophie.appear();
	sophie.changeSprite('curious');
	charles.changeSprite('curious');
	halley.changeSprite('curious');
	chief.changeSprite('proud');
	june.changeSprite('tiredsmile_speak');
	boriolsis.changeOverlay(0,'black',1000,function() {
		june.preSpeak(function() {
			june.speak('It\'s done');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.speak('I\'l now make my way back to Boriolsis with this corpse',function() {
		sophie.changeSprite('serious');
		halley.changeSprite('serious');
		charles.changeSprite('serious');
		chief.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	june.speak('Take care of yourselves...',function() {
		june.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.preSpeak(function() {
		sophie.speak('Wait, how are you going to bring my corpse back...?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy_speak');
	sophie.speak('Err...',function() {
		sophie.wait(500,function() {
			sophie.speak('I may actually weigh heavier than what you expect',function() {
				sophie.changeSprite('shy');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile_speak');
	june.preSpeak(function() {
		june.speak('Who said that I would be carrying it back myself?');
	});
}, function(){return null})
,new Frame(function(){
	june.speak('Ruskoff\'s men are pretty strong, aren\'t they?',function() {
		june.changeSprite('smile');
		charles.changeSprite('smile');
		halley.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	june.disappear(1000);
	deadsophie.disappear(1000,function() {
		sophie.changeSprite('confused_speak');
		sophie.preSpeak(function() {
			sophie.speak('Huh...?',function() {
				sophie.wait(300,function() {
					sophie.contSpeaking('What was she trying to say?',function() {
						sophie.endSpeak();
						sophie.changeSprite('confused');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile');
	boriolsis.displayText('Other than the sound of the crickets, it was completely silent as everyone chose to walk and enjoy the momentary serenity.',null,function() {
		boriolsis.scaleBackground(1.4,1.4,8000,function() {
			sophie.changeBold(true);
			sophie.setFontSize('2vw');
			sophie.triggered(200,function() {
				sophie.changeSprite('smileexclaim_speak');
				charles.changeSprite('surprised');
				chief.changeSprite('surprised');
				halley.changeSprite('surprised');
				sophie.preSpeak(function() {
					sophie.speak('Got it!');
				});
			},null,0.5);
		},null,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('I finally got what June meant when she said that she could bring the minion back by herself!',function() {
		sophie.setNormalText();
		sophie.setFontSize('1.7vw');
		sophie.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('smile');
	chief.changeSprite('smile');
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('So how do you think she did it?',function() {
			charles.changeSprite('smile');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.flipHorizontally(null,200);
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('She probably told the first minion whom she saw to help her carry it');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('That way, the minion will tell the rest of them to stop chasing after us');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('proud_speak');
	sophie.speak('Isn\'t that very smart of me?',function() {
		sophie.changeSprite('proud');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('That\'s great!');
		sophie.changeSprite('overjoyed');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('It seems like June has managed to cheat Ruskoff and his minions',function() {
		charles.wait(300,function() {
			charles.speak('This will definitely save us a lot of trouble in the future',function() {
				charles.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	slane.preSpeak(function() {
		slane.speak('Oh is it?',function() {
			boriolsis.setAnchorX(20);
			boriolsis.setAnchorY(30);
			slane.wait(50,function() {
				boriolsis.scaleBackground(1.8,1.8,1000,null,null,false);
				slane.appear(1000);
				halley.move(0,80,800,null,null,false);
				sophie.move(0,80,800,null,null,false);
				charles.move(0,80,800,null,null,false);
				chief.move(0,80,800,null,null,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	slane.speak('I\'ve been waiting for you, Princess Sophie');
}, function(){return null})
]);