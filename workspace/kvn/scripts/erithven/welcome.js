let erithvenWelcome =  new Scene("erithven_welcome",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(yusie);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	yusie.setTextColor('white');
	erithven.display(1,null,1000);
}, function(){return null})
,new Frame(function(){
	sophie.preMove(-50);
	charles.preMove(-50);
	yusie.preMove(-80);
	yusie.changeSprite('overjoyed');
	sophie.changeSprite('overjoyed');
	charles.changeSprite('speechless');
	yusie.flipHorizontally();
	sophie.appear();
	yusie.appear();
	charles.appear(null,function() {
		sophie.move(null,null,850);
		charles.move(null,null,650);
		yusie.move(80,null,750);
	});
}, function(){return null})
,new Frame(function(){
	yusie.move(20,null,800,function() {
		yusie.flipHorizontally(function() {
			yusie.preSpeak(function() {
				yusie.speak('Wow!',function() {
					yusie.wait(200,function() {
						yusie.contSpeaking('So this is Erithven!');
						charles.changeSprite('speechless');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.speak('Look at the huge boats, the fluffy white clouds',function() {
		yusie.contSpeaking('and the BOOOOUNNNDDDLEESSSS OCEAN!',null,1000);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('disgusted_speak');
	charles.preSpeak(function() {
		charles.setFontSize('1.2vw');
		charles.speak('Ughh somehow I have the feeling that she\'s just finding an excuse to visit Erith-',function() {
			charles.setFontSize('1.7vw');
			charles.changeSprite('disgusted');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('angry_speak');
	yusie.preSpeak(function() {
		yusie.speak('Hey! I\'m on official duty right now!',function() {
			yusie.changeSprite('awkward_speak');
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('awkward');
	yusie.speak('W-Who says I\'m on a holiday!!');
}, function(){return null})
,new Frame(function(){
	yusie.speak('I-I\'m just admiring the secnery while at work!',function() {
		yusie.changeSprite('awkward');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('speechless');
	sophie.changeSprite('overjoyed');
	sophie.preSpeak(function() {
		sophie.speak('But oh myy, the this place is really beautif-');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised');
	yusie.changeSprite('overjoyed');
	yusie.preSpeak(function() {
		yusie.speak('I KNOW, RIGHT?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	yusie.speak('At this rate, I think I am really going to fall in love with this place!',function() {
		yusie.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('It would be so great to stay here and experience the fishermen lifestyle');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.speak('Huh?',function() {
		sophie.wait(300,function() {
			sophie.changeSprite('curious_speak');
			charles.changeSprite('curious');
			yusie.changeSprite('surprised');
			sophie.contSpeaking('What are those glowing colored rings in the sea?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.speak('They look really pretty!',function() {
		yusie.changeSprite('curious');
		sophie.changeSprite('smile');
		charles.wait(300,function() {
			charles.changeSprite('explain');
			charles.preSpeak(function() {
				charles.speak('Those rings are called Septras.',function() {
					sophie.changeSprite('curious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Septras are rings which the fishermen build from manacytes to demarcate their fishing zone.',function() {
		charles.wait(300,function() {
			charles.speak('These rings will not only help to prevent conflict of interest between fishermen but also facilitate the entire fishing process.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	yusie.changeSprite('smile');
	sophie.preSpeak(function() {
		sophie.speak('These rings and the sea look really good together!',function() {
			sophie.wait(300,function() {
				sophie.speak('Imagine waking up every morning to the sun rising up from the ocean...',function() {
					sophie.wait(500,function() {
						sophie.changeSprite('smile');
						sophie.speak('Ahhh~~~',null,1000,false);
					});
				},1200,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('Alright, alrigh-',function() {
			yusie.changeSprite('angry_speak');
			charles.changeSprite('mildtakenaback');
			yusie.interupt(function() {
				yusie.speak('Hey Charles!',function() {
					yusie.wait(300,function() {
						yusie.contSpeaking('Stop delaying our movement!',function() {
							yusie.changeSprite('angry');
							sophie.changeSprite('playful');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('speechless');
	charles.preSpeak(function() {
		charles.speak('......',function() {
			charles.endSpeak();
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	erithven.closeTextBox();
	sophie.flipHorizontally();
	charles.flipHorizontally();
	sophie.move(-50,null,850);
	charles.move(-80,null,650);
	yusie.move(-20,null,2000,function() {
		yusie.changeSprite('overjoyed');
		yusie.flipHorizontally();
		yusie.move(10,null,1000);
		charles.flipHorizontally();
	});
}, function(){return null})
,new Frame(function(){
	yusie.setFontSize('1.2vw');
	yusie.preSpeak(function() {
		yusie.speak('But before that, just one more look at the vast ocea-');
		charles.move(90,null,1500,function() {
			charles.changeSprite('angry_speak');
			charles.preSpeak(function() {
				charles.speak('Come on! Hurry!',function() {
					charles.changeSprite('angry');
					yusie.changeSprite('surprised');
				});
			});
		},swing);
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('crysmile_speak');
	yusie.preSpeak(function() {
		charles.flipHorizontally();
		charles.move(-80,null,2000,null,linear);
		yusie.move(-90,null,2000,null,stepped);
		yusie.setFontSize('2vw');
		yusie.speak('Noooooooooo~',function() {
			yusie.changeSprite('crysmile');
		});
	});
}, function(){return null})
]);