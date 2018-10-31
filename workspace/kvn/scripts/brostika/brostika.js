let brostika_scene =  new Scene("brostika_outside",
[new Frame(function(){
	var a = '5';
	brostikaM.play();
		brostika.bringCharacter(charles);
		brostika.bringCharacter(sophie);
		brostika.bringCharacter(chelsea);
		sophie.preMove(20);
		charles.preMove(20);
		chelsea.preMove(40);
		brostika.display(1,null,500,function() {
			brostika.displayText('--Village of Brostika--',400,null,null,true,'2.5vw','white',null,null,false);
		});
}, function(){return null})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	chelsea.setTextColor('white');
	sophie.appear(500);
	charles.appear(500);
	sophie.changeSprite('surprised');
	charles.changeSprite('surprised',function() {
		chelsea.changeName('???');
		chelsea.preSpeak(function() {
			chelsea.speak('Welcome to Brostika, travellers!');
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.speak('Come, give our locally-produced Brostikine wine a try!',function() {
		chelsea.appear();
		chelsea.changeSprite('smile',function() {
			chelsea.move(-40,null,250);
			charles.move(-20,null,250,function() {
				sophie.wait(100,function() {
					sophie.move(-20,null,300);
					sophie.changeSprite('curious');
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak',function() {
		charles.preSpeak(function() {
			charles.speak('And who might you be?',function() {
				sophie.changeSprite('smile');
				charles.wait(400);
				charles.contSpeaking('Isn’t it a bit unusual to be drinking wine in the middle of the day?',function() {
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0.55,'black',0,function() {
		sophie.bringAboveOverlay();
		charles.bringAboveOverlay(function() {
			sophie.setItalic();
			sophie.setFontSize('1.2vw');
			sophie.changeSprite();
			sophie.preSpeak(function() {
				sophie.speak('Don’t be so mean! She’s offering it out of goodwill!',function() {
					charles.changeSprite('upset');
				});
			},angry_speak);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.move(10,null,300,function() {
			charles.wait(100,function() {
				charles.flipHorizontally(function() {
					charles.changeSprite('upset_speak');
					charles.setItalic();
					charles.setFontSize('1.2vw');
					charles.speak('And how can you be so sure of that?',function() {
						charles.wait(400,function() {
							charles.contSpeaking('What if the wine is poisoned?',function() {
								charles.changeSprite('upset');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('proud_speak');
	sophie.preSpeak(function() {
		sophie.changeBold();
		sophie.setFontSize('1.8vw');
		sophie.speak('AHEM');
	});
}, function(){return null})
,new Frame(function(){
	sophie.setFontSize('1.5vw');
	sophie.setNormalText();
	sophie.speak('I am Princess Sophie of the Kingdom of Novala.',function() {
		sophie.wait(200,function() {
			sophie.speak('And ~');
		});
	},null,false);
}, function(){return null})
,new Frame(function(){
	sophie.contSpeaking('I can read the Carofle of any -',function() {
		sophie.changeSprite('surprised');
		charles.changeSprite('mildtakenaback_speak');
		charles.interupt(function() {
			charles.speak('Shh! You’re not supposed to say that!',function() {
				charles.changeSprite('mildtakenaback');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('relieved_speak');
	sophie.preSpeak(function() {
		sophie.speak('She\'s a nice person!',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('I can see it~!',function() {
					charles.changeSprite('awkward');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak',function() {
		sophie.speak('Oh!',function() {
			sophie.wait(700,function() {
				sophie.speak('Her name is Chelsea by the way!',function() {
					sophie.changeSprite('smile');
					charles.changeSprite('speechless');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0,'black',0,function() {
		sophie.bringBelowOverlay();
		charles.bringBelowOverlay(function() {
			chelsea.changeName('Chelsea');
			chelsea.changeSprite('smile_speak');
			chelsea.preSpeak(function() {
				chelsea.speak('Ah, where are my manners? I\'m Chelsea!',function() {
					chelsea.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('speechless',function() {
		charles.preSpeak(function() {
			charles.speak('...',null,1000,false);
			sophie.changeSprite('laugh');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('awkward_speak',function() {
		charles.speak('Alright...',function() {
			charles.wait(400,function() {
				charles.flipHorizontally();
				charles.move(-10,null,150,function() {
					charles.changeSprite('awkward');
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.setNormalText();
	charles.setFontSize('1.5vw');
	brostika.displayText('You took a sip of this expensive-looking wine and found the flavour to be extremely rich!',500,null,null,false,'1.5vw',null,null,true,false);
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed');
	sophie.preSpeak(function() {
		sophie.speak('I want to try it!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.contSpeaking('Can I have a sip too?');
	charles.changeSprite('upset',function() {
		sophie.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(null,150);
	charles.changeSprite('upset_speak');
	charles.move(10,null,150);
	charles.preSpeak(function() {
		charles.speak('I would suggest otherwise.');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('apologetic');
	charles.speak('Imagine what your father would say!');
}, function(){return null})
,new Frame(function(){
	charles.speak('You’re much too young to be drinking such things!',function() {
		charles.changeSprite('upset');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Sorry...');
		sophie.changeSprite('sad');
	},apologetic_speak);
}, function(){return null})
,new Frame(function(){
	chelsea.preSpeak(function() {
		chelsea.changeSprite('smile_speak');
		chelsea.speak('Don’t worry young miss,',function() {
			chelsea.wait(400,function() {
				chelsea.contSpeaking('in a few years, you’ll be able to,');
				sophie.changeSprite('smile');
				charles.flipHorizontally(null,400);
				charles.move(-10,null,150);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.contSpeaking('and~',function() {
		chelsea.wait(400,function() {
			chelsea.contSpeaking('we always appreciate return visitors!');
		});
	},450,false);
}, function(){return null})
,new Frame(function(){
	chelsea.speak('Travellers are always welcomed with wine and bread!',function() {
		chelsea.changeSprite('default');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.preSpeak(function() {
		sophie.speak('Oh!',function() {
			sophie.wait(400,function() {
				sophie.changeSprite('curious_speak',function() {
					sophie.speak('You wouldn’t happen to have any prasines,',function() {
						sophie.wait(400,function() {
							sophie.contSpeaking('would you?',function() {
								sophie.changeSprite('curious');
								charles.changeSprite('thinking');
							});
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
		charles.speak('Prasines again',function() {
			charles.wait(300,function() {
				charles.contSpeaking(', Sophie?');
				sophie.changeSprite('awkward');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('smile_speak');
	chelsea.preSpeak(function() {
		chelsea.speak('No,',function() {
			chelsea.wait(300,function() {
				sophie.changeSprite('sad');
				charles.changeSprite('serious');
				chelsea.contSpeaking('prasines are much too sweet to go along with wine.',function() {
					chelsea.wait(400,function() {
						chelsea.speak('They would dull your tastebuds.',function() {
							chelsea.changeSprite('default');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('pout_speak');
	sophie.preSpeak(function() {
		sophie.speak('Aww...',null,1000,false);
		sophie.move(null,2,700,function() {
			sophie.changeName('pout');
			chelsea.changeSprite();
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.move(null,-2);
	charles.preSpeak(function() {
		charles.speak('Yes,',function() {
			charles.wait(300,function() {
				charles.contSpeaking('that would be a waste of such great wine!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('The liquor has so much depth and texture!',function() {
		sophie.changeSprite('curious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('surprised_speak');
	charles.speak('Wait, this taste…,',function() {
		charles.wait(500,function() {
			charles.changeSprite('thinking_speak');
			charles.contSpeaking('Is this Crème de Cassis?',function() {
				chelsea.changeSprite('surprised');
				charles.changeSprite('thinking');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('surprised_speak');
	chelsea.preSpeak(function() {
		chelsea.speak('Indeed,',function() {
			chelsea.wait(300,function() {
				chelsea.contSpeaking('this is Crème de Cassis',function() {
					charles.changeSprite('smile');
					chelsea.wait(300,function() {
						chelsea.contSpeaking('made from the freshest blackcurrants!',function() {
							sophie.changeSprite('pout');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('smile_speak');
	chelsea.speak('I’m glad you enjoyed it!',function() {
		chelsea.changeSprite('default');
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0.55,'black',0);
	sophie.bringAboveOverlay();
	sophie.preSpeak(function() {
		sophie.changeSprite('pout_speak',function() {
			sophie.changeItalic(true);
			sophie.setFontSize('1.2vw');
			sophie.speak('All those blackcurrants and not a single prasine?!',function() {
				sophie.wait(400,function() {
					sophie.speak('What kind of town doesn’t have prasines?',function() {
						sophie.changeSprite('pout');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0,'black',0,function() {
		sophie.bringBelowOverlay();
		sophie.setNormalText();
		sophie.setFontSize('1.5vw');
		charles.bringToFront();
		chelsea.changeSprite('smile_speak');
		chelsea.preSpeak(function() {
			chelsea.speak('We Brostikans really take pride in our wines',function() {
				chelsea.wait(400,function() {
					chelsea.contSpeaking('so it is always a joy to find travellers capable of appreciating good wine.',function() {
						sophie.changeSprite('smile');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.backgroundSepia(0.1,400);
	brostika.changeOverlay(0.05,'' + FD5E53 + '',400,function() {
		chelsea.speak('Here in Brostika, wine is very deeply ingrained into our culture and dining habits',function() {
			chelsea.changeSprite(def);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('surprised_speak');
	charles.preSpeak(function() {
		charles.speak('Ah, of course!');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.speak('I recall reading that wine actually originated from Brostika,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('where villagers first collected alcohol produced from berries.',function() {
				charles.changeSprite('curious');
				sophie.changeSprite('curious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('surprised_speak',function() {
		chelsea.speak('I see you’re rather well informed!');
	});
}, function(){return null})
,new Frame(function(){
	brostika.backgroundSepia(0.2,400);
	brostika.changeOverlay(0.1,'' + FD5E53 + '',400,function() {
		sophie.bringAboveOverlay();
		charles.bringAboveOverlay();
		chelsea.bringAboveOverlay();
		chelsea.changeSprite('smile_speak');
		chelsea.speak('Yes,',function() {
			chelsea.wait(300,function() {
				chelsea.contSpeaking('wine originated from this humble village.',function() {
					chelsea.wait(400,function() {
						chelsea.speak('It’s been a major part of our culture ever since!',function() {
							sophie.changeSprite('smile');
							charles.changeSprite('smile');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.speak('In fact,',function() {
		chelsea.wait(300,function() {
			chelsea.contSpeaking('Brostika is home to some of the world’s best vineyards,',function() {
				chelsea.wait(300,function() {
					chelsea.contSpeaking('including the Brostikine Winery!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('sad_speak');
	chelsea.speak('Unfortunately, despite having nearly a century of history, Brostikine wine isn’t really famous throughout the kingdom...');
}, function(){return null})
,new Frame(function(){
	chelsea.speak('The density of our neighbouring forests and the presence of bandits makes it very hard to export our precious wine.',function() {
		sophie.changeSprite('sad');
		charles.changeSprite('thinking');
		chelsea.changeSprite('sad');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.preSpeak(function() {
		sophie.speak('That’s terrible...,',function() {
			sophie.wait(300,function() {
				sophie.changeSprite('worried_speak');
				sophie.contSpeaking('Can’t the law enforcement do anything about it?',function() {
					charles.changeSprite('worried');
					sophie.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('sad_speak',function() {
		chelsea.speak('If only the law enforcement here was that capable…');
	});
}, function(){return null})
,new Frame(function(){
	brostika.backgroundSepia(0.3,400);
	brostika.changeOverlay(0.15,'' + FD5E53 + '',400,function() {
		chelsea.speak('Nonetheless,',function() {
			chelsea.wait(400,function() {
				chelsea.contSpeaking('we try to support our vineyards and sell as much of our wine as possible to armed merchants that pass through our village.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.speak('They sell quite well in large towns like Erithven,',function() {
		chelsea.wait(300,function() {
			chelsea.contSpeaking('but most of the merchants rebrand our wine.',function() {
				charles.changeSprite('serious');
				chelsea.changeSprite('sad');
				sophie.changeSprite('angry');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('angry_speak');
	sophie.preSpeak(function() {
		sophie.speak('That’s unfair!,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('Brostika deserves to be recognised for its wine!',function() {
					sophie.changeSprite('angry');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('Indeed,',function() {
			charles.wait(400,function() {
				charles.contSpeaking('I can imagine many tourists flocking to these parts if they learnt that the wine was produced here.',function() {
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('sad_speak');
	chelsea.preSpeak(function() {
		chelsea.speak('As of now,',function() {
			chelsea.wait(300,function() {
				chelsea.contSpeaking('the wine we sell to the merchants is more than enough to keep our wineries afloat.',function() {
					sophie.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('smile_speak',function() {
		chelsea.speak('Besides,',function() {
			chelsea.wait(300,function() {
				chelsea.contSpeaking('we do enjoy the peace we get in Brostika.',function() {
					chelsea.changeSprite('default');
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.backgroundSepia(0.4,400);
	brostika.changeOverlay(0.2,'' + FD5E53 + '',400,function() {
		charles.changeSprite('curious_speak');
		charles.preSpeak(function() {
			charles.speak('By the way,',function() {
				charles.wait(300,function() {
					charles.contSpeaking('do you know how to get to Brostika from here?',function() {
						sophie.changeSprite('curious');
						chelsea.changeSprite('surprised');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('According to the map we should have reached Brostika by now...',function() {
		charles.changeSprite('curious');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('tired_speak');
	sophie.speak('Yupp, we\'ve been walking for quite a while',function() {
		charles.changeSprite('speechless');
		chelsea.changeSprite('default');
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('smile_speak');
	chelsea.speak('You\'re almost there!',function() {
		chelsea.wait(400,function() {
			chelsea.contSpeaking('It\'s just up ahead!',function() {
				chelsea.changeSprite('default');
				charles.changeSprite('smile');
				sophie.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('That\'s great!',function() {
			charles.wait(400,function() {
				charles.changeSprite('thinking_speak');
				charles.speak('Also,',function() {
					charles.wait(300,function() {
						charles.contSpeaking('I\'ve heard that there\'s path from Brostika that leads to Erithven.',function() {
							sophie.changeSprite('curious');
							chelsea.changeSprite('surprised');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious_speak');
	charles.speak('Would you know anything about it?',function() {
		charles.changeSprite('curious');
	});
}, function(){return null})
,new Frame(function(){
	chelsea.changeSprite('smile_speak');
	chelsea.speak('Once you reach Brostika,',function() {
		chelsea.wait(300,function() {
			chelsea.contSpeaking('make a turn at the first alley you see!');
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.speak('The path that leads to Erithven will be clear from there',function() {
		chelsea.changeSprite(def);
		sophie.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('Alright,',function() {
			charles.wait(300,function() {
				charles.contSpeaking('thank you for your help.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We should make our way before the sun sets',function() {
		charles.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	brostika.backgroundSepia(0.5,400);
	brostika.changeOverlay(0.25,'' + FD5E53 + '',400,function() {
		chelsea.changeSprite('smile_speak');
		chelsea.preSpeak(function() {
			chelsea.speak('You\'re welcome!',function() {
				chelsea.wait(300,function() {
					chelsea.contSpeaking('It\'s my pleasure to assist travellers like you!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chelsea.speak('I’ve got to get going and prepare dinner for the kids!',function() {
		chelsea.wait(300,function() {
			chelsea.speak('Take care!',function() {
				chelsea.wait(400,function() {
					chelsea.flipHorizontally(function() {
						chelsea.move(40,null,600,null,null,false);
					},200);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.displayText('...',500,null,null,null,'1.5vw',null,null,null,false);
}, function(){return null})
,new Frame(function(){
	brostika.removeCharacter(chelsea);
	charles.bringToFront();
	charles.move(30,null,400,function() {
		charles.flipHorizontally(null,200);
		charles.wait(400,function() {
			charles.changeSprite('smile_speak');
			charles.preSpeak(function() {
				charles.speak('Well,',function() {
					charles.wait(300,function() {
						charles.contSpeaking('I suppose you were right,',function() {
							charles.wait(300,function() {
								charles.contSpeaking('I was too suspicious',function() {
									sophie.changeSprite('proud');
								});
							});
						});
					});
				});
			});
		});
	},null,false);
}, function(){return null})
,new Frame(function(){
	charles.speak('It was nice meeting Chelsea',function() {
		charles.changeSprite('smile');
	});
}, function(){return null})
,new Frame(function(){
	sophie.bringToFront();
	sophie.changeSprite('proud_speak');
	sophie.preSpeak(function() {
		sophie.speak('See?!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('You should rely on me when it comes to judging people!',function() {
					charles.changeSprite('speechless');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.speak('And poisoned wine?!',function() {
		sophie.wait(500,function() {
			sophie.contSpeaking('Where did you get that idea from?',function() {
				sophie.changeSprite('surprised');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('Well,',function() {
			charles.wait(300,function() {
				charles.contSpeaking('it isn’t totally out of the question now,',function() {
					charles.wait(300,function() {
						charles.contSpeaking('is it?');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Plenty of people are out to get you after all',function() {
		sophie.changeSprite('awkward');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I suppose we should get going.',function() {
		charles.wait(400,function() {
			charles.contSpeaking('We don’t have much time left to buy supplies before it gets dark',function() {
				sophie.bringBelowOverlay();
				charles.bringBelowOverlay(function() {
					brostika.changeOverlay(1,'black',1000);
				});
			});
		});
	});
}, function(){return null})
]);