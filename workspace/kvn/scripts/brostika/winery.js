let brostikaWinery =  new Scene("brostika_winery",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(broski);
	brostika.bringCharacter(slime);
	brostika.bringCharacter(slime2);
	charles.setTextColor('white');
	broski.setTextColor('white');
	charles.preMove(-60);
	brostika.display(0,null,0,function() {
		brostika.setAnchorX(0);
		brostika.setAnchorY(0);
		brostika.setWidth(150);
		brostika.changeBackground('winery',1,800);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('mildtakenaback');
	charles.appear();
	slime.appear();
	slime2.appear(null,function() {
		charles.wait(700,function() {
			charles.rotateClockwise(23,300);
			charles.move(15,null,300);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.rotateClockwise(null,200);
	charles.move(-15,null,200);
}, function(){return null})
,new Frame(function(){
	brostika.pan(-30,null,500,null,swing);
	charles.move(-20,null,500);
	slime.move(-30,null,500);
	slime2.move(-30,null,500,function() {
		slime.wait(400,function() {
			slime.flipHorizontally(null,200);
			slime2.wait(400,function() {
				slime2.flipHorizontally(function() {
					slime.wait(600,function() {
						slime.flipHorizontally(function() {
							slime2.wait(500,function() {
								slime2.flipHorizontally(null,200);
								charles.changeItalic(true);
								charles.setFontSize('1.2vw');
							});
						},200);
					});
				},200);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.pan(30,null,500);
	slime.move(30,null,500);
	slime2.move(30,null,500,function() {
		charles.wait(400,function() {
			charles.move(60,null,500,function() {
				charles.changeSprite('worried_speak');
				charles.preSpeak(function() {
					charles.speak('That was close!',function() {
						charles.changeSprite('serious');
					});
				});
			},null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.move(30,null,500,function() {
		charles.flipHorizontally(null,200);
		charles.changeSprite('serious_speak');
		charles.speak('We should keep our eyes peeled for the slimes',function() {
			charles.flipHorizontally(null,200);
			charles.wait(400,function() {
				charles.contSpeaking('The security here seems to be really tight',function() {
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.endSpeak();
	charles.changeSprite('surprised');
	brostika.pan(-30,null,500,null,swing);
	charles.flipHorizontally(function() {
		charles.move(-90,null,500,function() {
			charles.wait(400,function() {
				slime.move(-30,null,500);
				slime2.move(-30,null,500,function() {
					slime.wait(null,function() {
						slime.flipHorizontally(null,200);
						slime2.flipHorizontally(function() {
							slime.move(70,null,700);
							slime2.move(70,null,700);
						},200);
					},false);
				});
			});
		});
	},100);
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(function() {
		brostika.pan(30,null,500);
		charles.move(90,null,500,function() {
			charles.changeSprite('worried_speak');
			charles.preSpeak(function() {
				charles.speak('Phew...',function() {
					charles.wait(400,function() {
						charles.contSpeaking('That was scary...');
					});
				});
			});
		},null,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('The slimes finally left.',function() {
		charles.wait(200,function() {
			charles.speak('It\'s our chance to find Mr Broski!',function() {
				charles.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(function() {
		brostika.pan(-40,null,700,function() {
			charles.wait(500,function() {
				charles.flipHorizontally(function() {
					brostika.pan(40,null,700,function() {
						charles.wait(500,function() {
							charles.changeSprite('mildtakenaback_speak');
							charles.speak('Wait!',function() {
								charles.wait(200,function() {
									brostika.pan(-30,null,700,function() {
										charles.wait(500,function() {
											charles.changeSprite('curious_speak');
											charles.speak('Could that be Mr Broski in the shed?',function() {
												charles.changeSprite('curious');
											});
										});
									},swing);
								});
							});
						});
					},swing);
				},200);
			});
		},swing);
	},200);
}, function(){return null})
,new Frame(function(){
	brostika.setAnchorX(80);
	brostika.setAnchorY(50);
	brostika.scaleBackground(2,2,500,function() {
		charles.wait(300,function() {
			broski.appear(1000);
			broski.changeSprite('impatient');
		});
	},swing,false);
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious_speak');
	charles.speak('Are you Mr Broski?',function() {
		charles.changeSprite('curious');
	});
}, function(){return null})
,new Frame(function(){
	broski.changeSprite('impatient_speak');
	broski.preSpeak(function() {
		broski.speak('Yes.',function() {
			broski.wait(200,function() {
				broski.contSpeaking('What do you want from me?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.speak('If you\'re one of those henchmen,',function() {
		broski.wait(400,function() {
			broski.contSpeaking('you can forget about it!',function() {
				charles.changeSprite('mildtakenaback');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.speak('I\'ll never help you to speed up the fermentation of the wine!',function() {
		broski.changeSprite('impatient');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.preSpeak(function() {
		charles.speak('Rest assure that I\'m not one of them');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('I\'m here to save you, Mr Broski.',function() {
		charles.wait(200,function() {
			charles.speak('Captain Yusie will help you get back the winery once I bring you back to the constable',function() {
				charles.changeSprite('serious');
				broski.changeSprite('mildtakenaback');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	broski.changeItalic(true);
	broski.setFontSize('1.2vw');
	broski.changeSprite('mildtakenaback_speak');
	broski.speak('If that\'s the case, let\'s hurry and leave before the slimes return!',function() {
		broski.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.preSpeak(function() {
		charles.speak('Come',function() {
			charles.wait(200,function() {
				charles.speak('Let me untie you',function() {
					charles.changeSprite('serious');
				});
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
		},false,null,150);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('Let\'s leave!',function() {
			charles.changeSprite('serious');
		});
	});
}, function(){return null})
]);