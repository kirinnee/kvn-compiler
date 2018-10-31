let erithvenPharma =  new Scene("erithven_pharma",
[new Frame(function(){
	erithven.bringCharacter(sophie);
	erithven.bringCharacter(charles);
	erithven.bringCharacter(halley);
	erithven.bringCharacter(comet);
	erithven.bringCharacter(yusie);
	halley.setTextColor('white');
	yusie.setTextColor('white');
	comet.setTextColor('white');
	sophie.setTextColor('white');
	charles.setTextColor('white');
	erithven.display(0,null,0,function() {
		erithven.changeBackground('pharma',1,1000,function() {
			sophie.preMove(-50);
			yusie.preMove(-50);
			charles.preMove(-70);
			halley.appear(1000);
			comet.appear(1000);
			sophie.appear();
			charles.appear();
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.appear();
	charles.appear(null,function() {
		sophie.move(null,null,850);
		charles.move(null,null,850,function() {
			comet.changeSprite('speak');
			comet.preSpeak(function() {
				comet.speak('Hello how can I help you?',function() {
					comet.changeSprite('default');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('Good Morning!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('Can we purchase Rigorta and Meisumptum?',function() {
					sophie.wait(200,function() {
						sophie.speak('We\'re here to get the ingredients for a Brostikan sage to concoct an elixir for a sick boy down the road',function() {
							sophie.changeSprite('smile');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('speak');
	comet.preSpeak(function() {
		comet.speak('Give me a moment to check!',function() {
			comet.wait(200,function() {
				comet.flipHorizontally(null,150);
				comet.move(2,null,200,function() {
					comet.changeSprite('smile_speak');
					comet.speak('Halley, can you go to the back and check on our existing stock?',function() {
						comet.changeSprite('default');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('frustrated_speak');
	halley.preSpeak(function() {
		halley.speak('Alright,alright...',function() {
			halley.changeSprite('frustrated');
			comet.move(-2,null,200);
			comet.flipHorizontally(null,150);
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.endSpeak(function() {
		halley.disappear(1000,function() {
			sophie.bringAboveOverlay();
			charles.bringAboveOverlay(function() {
				erithven.changeOverlay(0.55,'black',0,function() {
					sophie.changeSprite('curious_speak');
					sophie.preSpeak(function() {
						sophie.changeItalic();
						sophie.setFontSize('1.2vw');
						sophie.speak('Pss...',function() {
							sophie.wait(600,function() {
								sophie.contSpeaking('Pss...');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(null,200);
	charles.move(10,null,200,function() {
		charles.changeSprite('mildtakenaback_speak');
		charles.preSpeak(function() {
			charles.changeItalic();
			charles.setFontSize('1.2vw');
			charles.speak('Huh?',function() {
				charles.changeSprite('curious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	sophie.preSpeak(function() {
		sophie.speak('Charles,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('how do people usually bargain?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious_speak');
	sophie.speak('I\'ve heard that people usually bargain when they go shopping for things',function() {
		sophie.wait(300,function() {
			sophie.speak('So I was wondering if I should keep my disguise up by bargaining');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('What is a good price for these ingredients?',function() {
		sophie.changeSprite('curious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.preSpeak(function() {
		charles.speak('......',function() {
			charles.changeSprite('awkward');
			charles.wait(300,function() {
				charles.speak('Normally, people don\'t bargain at the pharmacy...');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('And you should really stop worrying about your disguise',function() {
		charles.wait(300,function() {
			charles.speak('No one will guess that you\'re the Princess',function() {
				charles.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.appear(1000);
	erithven.changeOverlay(0,'black',0);
	charles.endSpeak();
	charles.changeSprite('default');
	sophie.changeSprite('smile');
	sophie.setFontSize('1.7vw');
	charles.setFontSize('1.7vw');
	sophie.setNormalText();
	charles.setNormalText();
	charles.bringBelowOverlay();
	charles.move(-10,null,200);
	charles.flipHorizontally(function() {
		halley.changeSprite('poorservice_speak');
		halley.preSpeak(function() {
			halley.speak('I\'m sorry.',function() {
				halley.wait(200,function() {
					halley.contSpeaking('But we\'re currently short of these two ingredients.');
					comet.changeSprite('awkward');
					sophie.changeSprite('sad');
					charles.changeSprite('thinking');
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	halley.speak('Our suppliers just informed us that it might take months before the new batch arrives',function() {
		halley.changeSprite('frustrated');
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('awkward_speak');
	comet.preSpeak(function() {
		comet.speak('We\'re really sorry for inconveniencing you!',function() {
			comet.wait(200,function() {
				comet.contSpeaking('You must understand that both Rigortas and Meisumptums are really rare herbs',function() {
					comet.changeSprite('awkward');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.preSpeak(function() {
		charles.speak('Indeed...',function() {
			charles.wait(200,function() {
				charles.contSpeaking('They are part of the Quinnsetas family after all',function() {
					charles.changeSprite('explain');
					comet.changeSprite('surprised');
					halley.changeSprite('impressed');
				});
			});
		},800,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('The rarity of these herbs is due to their tendency to thrive in the most trecherous of locations',function() {
		charles.changeSprite('default');
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('surprised_speak');
	comet.preSpeak(function() {
		comet.speak('Oh',function() {
			comet.wait(200,function() {
				comet.contSpeaking(', so you know about herbs?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.setFontSize('2vw');
	sophie.changeBold(true);
	sophie.preSpeak(function() {
		sophie.speak('Yesss!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('He is really good with medicine and herbs!!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	comet.changeSprite('default');
	halley.changeSprite('default');
	sophie.setNormalText();
	sophie.setFontSize('1.7vw');
	charles.preSpeak(function() {
		charles.speak('It\'s really nothing much...',function() {
			charles.wait(200,function() {
				charles.speak('Read them from a book somewhere before',function() {
					charles.changeSprite('default');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious_speak');
	sophie.preSpeak(function() {
		sophie.speak('Actually',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking(', is it possible for us to find these herbs out in the wild ourselves?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	sophie.speak('Well erm...erm',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('I-I have plenty of experience p-picking herbs in the wild!',function() {
				sophie.changeSprite('awkward');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('speak');
	comet.preSpeak(function() {
		comet.speak('Yes! Of cour-',function() {
			comet.changeSprite('surprised');
			halley.changeSprite('frustrated_speak');
			halley.interupt(function() {
				halley.speak('Duhh...!',function() {
					comet.changeSprite('angry');
					halley.wait(300,function() {
						halley.speak('It\'s common sense that all herbs originate in the wild...',function() {
							halley.changeSprite('frustrated');
							charles.changeSprite('upset');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.bringAboveOverlay();
	charles.bringAboveOverlay();
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('Then can we help you to find the herbs?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('We would love to hel-',function() {
					erithven.changeOverlay(0.55,'black',0,function() {
						sophie.changeSprite('surprised');
						charles.changeSprite('upset_speak');
						charles.interupt(function() {
							charles.changeItalic(true);
							charles.setFontSize('1.2vw');
							charles.flipHorizontally(null,200);
							charles.move(10,null,200,function() {
								charles.changeSprite('serious');
								charles.speak('Sophie!');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We cannot afford to help!',function() {
		sophie.changeSprite('sad');
		charles.wait(300,function() {
			charles.contSpeaking('To be honest, we can never be sure when the disease will break free from the Jakris\'s body');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('That\'s why we need to stop sticking our nose into everything and leave straight away',function() {
		charles.changeSprite('upset');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeItalic(true);
	sophie.setFontSize('1.2vw');
	sophie.changeSprite('sad_speak');
	sophie.preSpeak(function() {
		sophie.speak('B-But we promised to help!',function() {
			charles.changeSprite('upset');
			sophie.wait(200,function() {
				sophie.contSpeaking('We can\'t just leave Jakris here alone!',function() {
					sophie.changeSprite('sad');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset_speak');
	charles.preSpeak(function() {
		charles.speak('We only promised to check on the ingredients at the pharmacy',function() {
			charles.wait(200,function() {
				charles.speak('We didn\'t promise anything about providing the cure or anything along that line');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('Think about your parents and Novala.',function() {
		charles.wait(200,function() {
			charles.contSpeaking('There\'s no reason why we should take such risks when we\'ve so much more at stake',function() {
				charles.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('B-But what about Erithven?!',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('The entire village is at stake!',function() {
					charles.changeSprite('upset');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('If we don\'t help them, I\'ll definitely regret for the rest of my life!',function() {
		sophie.wait(200,function() {
			sophie.speak('How am I going to face the people of Novala in the future...',function() {
				sophie.changeSprite('sad');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset_speak');
	charles.preSpeak(function() {
		charles.speak('Bu-',function() {
			charles.changeSprite('mildtakenaback');
			sophie.changeSprite('sad_speak');
			sophie.interupt(function() {
				sophie.speak('Charles, please...',function() {
					sophie.changeSprite('sad');
				},800,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('angry_speak');
	charles.preSpeak(function() {
		charles.speak('No!',function() {
			sophie.changeSprite('scared');
			charles.wait(300,function() {
				charles.contSpeaking('I\'m not going to allow you to participate in this',function() {
					charles.wait(300,function() {
						charles.speak('And what was that lie about having experience picking herbs all about?',function() {
							charles.changeSprite('angry');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('relent_speak');
	sophie.preSpeak(function() {
		sophie.speak('......',function() {
			sophie.wait(300,function() {
				sophie.speak('Fine...',function() {
					sophie.changeSprite('relent');
					sophie.setNormalText();
					charles.setNormalText();
					sophie.setFontSize('1.7vw');
					charles.setFontSize('1.7vw');
				});
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	erithven.changeOverlay(0,'black',0);
	charles.flipHorizontally(null,200);
	charles.move(-10,null,200,function() {
		charles.changeSprite('serious_speak');
		charles.preSpeak(function() {
			charles.speak('I\'m sorry but I don\'t think we\'ll be needing your help to find the herbs anymore',function() {
				halley.changeSprite('default');
				comet.changeSprite('default');
				charles.wait(200,function() {
					charles.speak('We shall be taking our leave now',function() {
						charles.changeSprite('impatient');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('speak');
	comet.preSpeak(function() {
		comet.speak('No worries!',function() {
			comet.wait(200,function() {
				comet.contSpeaking('Don\'t hesitate to pop by our pharmacy if you need any medication!',function() {
					comet.changeSprite('default');
					sophie.changeSprite('sad');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.flipHorizontally(null,200);
	charles.flipHorizontally(function() {
		charles.move(-70,null,850);
		sophie.move(-5,null,1000,function() {
			sophie.wait(1000,function() {
				sophie.flipHorizontally(function() {
					sophie.wait(1000,function() {
						sophie.flipHorizontally(function() {
							sophie.move(-40,null,1000,null,null,false);
						},200);
					});
				},200);
			});
		},null,false);
	},200);
}, function(){return null})
,new Frame(function(){
	comet.disappear(1000);
	halley.disappear(1000,function() {
		erithven.closeTextBox();
		erithven.changeBackground('default',null,1000,function() {
			yusie.changeSprite('awkward');
			sophie.changeSprite('sad');
			charles.changeSprite('impatient');
			yusie.appear(null,function() {
				sophie.flipHorizontally();
				yusie.flipHorizontally();
				charles.flipHorizontally();
				yusie.move(null,null,1000);
				charles.move(null,null,1000,function() {
					sophie.wait(500,function() {
						sophie.move(40,null,1200);
					});
				});
			});
		},null,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('So where\'s the way that leads to Boriolsis?',function() {
			charles.wait(300,function() {
				charles.speak('We\'ve been going around in circles...',function() {
					yusie.changeSprite('angry');
					charles.changeSprite('impatient');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('angry_speak');
	yusie.flipHorizontally(function() {
		yusie.preSpeak(function() {
			yusie.speak('Can you stop being so impatient?',function() {
				yusie.wait(200,function() {
					yusie.changeSprite('angry');
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('Well, we\'ve wasted enough time finding our way around Erithven.',function() {
			yusie.changeSprite('awkward');
			charles.wait(200,function() {
				charles.speak('It\'s time we start heading in the right direction',function() {
					charles.changeSprite('impatient');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('serious_speak');
	yusie.preSpeak(function() {
		yusie.speak('Just give me a little more time...',function() {
			yusie.wait(700,function() {
				yusie.speak('I\'m sure it\'s just somewhere up ahead...',function() {
					yusie.wait(200,function() {
						yusie.endSpeak();
						yusie.changeSprite('serious');
						yusie.flipHorizontally(function() {
							yusie.wait(400,function() {
								yusie.flipHorizontally(null,200);
								charles.bringBelowOverlay();
							});
						},200);
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	erithven.changeOverlay(0.55,'black',0);
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.changeItalic();
		sophie.setFontSize('1.2vw');
		sophie.speak('Pss...',function() {
			sophie.wait(600,function() {
				sophie.contSpeaking('Pss...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('' + playName + '...');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Let\'s sneak back to the pharmacy and find out where we can collect those herbs...',function() {
		sophie.wait(300,function() {
			sophie.speak('We can\'t possibly leave Erithven in such a state!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('And I\'m sure you too can\'t bear to see that family suffer when a cure is so readily available');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('serious_speak');
	sophie.speak('Quickk! Let\'s move noww!',function() {
		sophie.wait(300,function() {
			sophie.flipHorizontally(function() {
				sophie.move(-40,null,800,function() {
					sophie.changeSprite('serious');
					sophie.setNormalText();
					sophie.setFontSize('1.7vw');
					erithven.changeOverlay(0,'black',0);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.disappear(1000);
	yusie.disappear(1000,function() {
		erithven.closeTextBox();
		erithven.changeBackground('pharma',1,1000,function() {
			sophie.changeSprite('worried');
			halley.appear(1000);
			comet.appear(1000);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.flipHorizontally();
	sophie.move(60,null,1000,function() {
		comet.changeSprite('surprised_speak');
		halley.changeSprite('sneer');
		comet.preSpeak(function() {
			comet.speak('You\'re back?',function() {
				comet.wait(200,function() {
					comet.contSpeaking('Didn\'t your friend say that you weren\'t interested in finding the ingredients?',function() {
						comet.changeSprite('surprised');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	sophie.preSpeak(function() {
		sophie.speak('Errr...',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('Well...',function() {
					sophie.wait(300,function() {
						sophie.contSpeaking('I thought it wouldn\'t hurt to try looking for the herbs myself',function() {
							sophie.changeSprite('awkward');
						});
					});
				},1000,false);
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('sneer_speak');
	halley.preSpeak(function() {
		halley.speak('Well well well',function() {
			halley.wait(200,function() {
				halley.contSpeaking('It seems like our beloved Princess Sophie is quite a rebellious kid, eh?',function() {
					halley.changeSprite('sneer');
					comet.changeSprite('surprised');
					sophie.changeSprite('surprised');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('relent_speak');
	sophie.preSpeak(function() {
		sophie.speak('......',function() {
			sophie.wait(300,function() {
				sophie.changeSprite('relent');
				sophie.speak('I knew you would find out eventually...',function() {
					halley.changeSprite('surprised');
					sophie.wait(300,function() {
						sophie.speak('I mean you were the Royal Ranger of Novala after all',function() {
							sophie.changeSprite('relent');
						});
					});
				},1000,false);
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('sneer_speak');
	halley.preSpeak(function() {
		halley.speak('It seems like the filthy royal blood does flow in you strongly, isn\'t it?',function() {
			halley.wait(400,function() {
				sophie.changeSprite('angry');
				halley.speak('I was wondering who you resembled and only figured out after you left');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('Your bespectacled friend who was with you earlier must be your retainer, right?',function() {
		halley.changeSprite('sneer');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('serious_speak');
	comet.changeSprite('scared');
	sophie.preSpeak(function() {
		sophie.speak('Yes',function() {
			sophie.wait(300,function() {
				sophie.speak('But that\'s enough questions asked from you, where do I find the herbs?',function() {
					sophie.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('sneer_speak');
	halley.preSpeak(function() {
		halley.speak('Well you must have learnt from my carofle that after the way your parents have treated my life and the lives of my comrades, I would never help you in any way',function() {
			halley.wait(300,function() {
				halley.speak('But there\'s always an exception, isn\'t it?',function() {
					halley.changeSprite('sneer');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('explain');
	halley.speak('You can find the herbs at the Cliffs of Kusuri',function() {
		halley.wait(300,function() {
			halley.speak('It\'s simply a short walk along the port and after a steep ascent, you should see the cliffs in no time!');
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('Rigortas are white in color while the Meisumptums are red.',function() {
		halley.wait(300,function() {
			halley.changeSprite('sneer_speak');
			halley.contSpeaking('They will be the only herbs of these two colors over there so don\'t worry about not being able to distinguish them',function() {
				halley.changeSprite('sneer');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('scared_speak');
	comet.preSpeak(function() {
		comet.speak('D-Do tread carefully over there!',function() {
			comet.wait(300,function() {
				comet.contSpeaking('The terrain there is extremely treacherous!',function() {
					comet.wait(300,function() {
						comet.speak('Many have fallen to their deaths over there!');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.speak('A young lady like you really shouldn\'t be going there...',function() {
		comet.changeSprite('scared');
	},1200,false);
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('frustrated_speak');
	halley.preSpeak(function() {
		halley.speak('Oh come on!',function() {
			halley.wait(200,function() {
				halley.contSpeaking('What\'s so hard about keeping balance on a cliff?',function() {
					halley.changeSprite('sneer');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('angry_speak');
	comet.preSpeak(function() {
		comet.speak('Sorry, just ignore Halley-',function() {
			comet.changeSprite('surprised');
			halley.changeSprite('sneer_speak');
			halley.interupt(function() {
				halley.speak('Wouldn\'t it be good if she just slips and falls to her death over there?',function() {
					sophie.changeSprite('angry');
					comet.changeSprite('angry');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('She can then join her parents whom I\'m betting should be dead by now',function() {
		halley.changeSprite('sneer');
	});
}, function(){return null})
,new Frame(function(){
	comet.changeSprite('angry_speak');
	comet.preSpeak(function() {
		comet.speak('HALLE-',function() {
			comet.changeSprite('angry');
			halley.changeSprite('angry_speak',function() {
				halley.interupt();
				halley.speak('Well I hate the Royal Family and I\'m not shy about that');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.speak('People like them go around putting on that facade and pretend to be all nice and good when deep inside them, they\'re nothing but heartless scumba-',function() {
		halley.changeSprite('surprised');
		sophie.interupt(function() {
			sophie.changeSprite('angry_speak');
			sophie.changeBold(true);
			sophie.setFontSize('2vw');
			sophie.speak('THAT\'S NOT TRUEE!',function() {
				sophie.changeSprite('angry');
				comet.changeSprite('awkward');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	halley.changeSprite('sneer_speak');
	halley.preSpeak(function() {
		halley.speak('Well, shout as much as you wish',function() {
			halley.wait(200,function() {
				sophie.setNormalText();
				sophie.setFontSize('1.7vw');
				halley.speak('But nothing\'s going to change what I feel about fake people like you!',function() {
					halley.changeSprite('angry');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('angry_speak');
	sophie.preSpeak(function() {
		sophie.speak('I-I\'m going to prove you wrongg!!',function() {
			sophie.wait(200,function() {
				sophie.speak('I\'m going to bring the herbs back and I\'m going to save that child!',function() {
					sophie.flipHorizontally();
					sophie.changeSprite('angry');
					halley.changeSprite('sneer_speak');
					halley.preSpeak(function() {
						halley.speak('Well let\'s see if the cliffs will deter you from that, tsk!');
						sophie.move(-50,null,800,function() {
							halley.changeSprite('sneer');
							halley.disappear(1000);
							comet.disappear(1000,function() {
								erithven.closeTextBox();
								erithven.changeBackground('default',1,1000);
								sophie.flipHorizontally();
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.move(65,null,1000,function() {
		sophie.changeSprite();
		sophie.preSpeak(function() {
			sophie.speak('I\'m so angry!',function() {
				sophie.wait(300,function() {
					sophie.changeSprite('sad');
					sophie.contSpeaking('I mean how can he say that after all that my parents have done and sacrificed for Novala?');
				});
			});
		},tearangry_speak);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I mean I do feel sorry for what has happened to him and his comrades...',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('But how could he miss out on the bigger picture...?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('angry_speak');
	sophie.speak('The worst part of it was how he questioned our intentions when we help others!',function() {
		sophie.wait(500,function() {
			erithven.displayText('......',1000,null,'none',null,null,'white',null,null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('Sighh...',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('But have I told you about this before?',function() {
				sophie.changeSprite('sad');
			});
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('Sometimes, I do ask myself why do we help others...',function() {
		sophie.wait(300,function() {
			sophie.speak('I mean I do know that there are plenty of motivations and incentives -some even biological - underlying every assistance which we dispense');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('But is there no way to achieve genuinity in helping others?');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Is there no value in helping others beyond those rewards?');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('gazeindistance_speak');
	sophie.speak('You know,',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('when I fled away from the castle with my family and Charles, a part of me was a little happy about it');
		});
	},600,false);
}, function(){return null})
,new Frame(function(){
	sophie.speak('I know it sounds very wrong but I was genuinely quite happy to be away from the political facade which everyone puts on in the castle',function() {
		sophie.wait(300,function() {
			sophie.speak('A part of me knew that it was finally my chance to experience some authenticity in human interactions',function() {
				sophie.wait(300,function() {
					sophie.contSpeaking('and to most importantly, see for myself if altruism exists');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('As of now, I can\'t conclude on anything for sure.',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('But I\'m determined to do my best to help as many people as possible');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Because that\'s the only way to bring myself closer to an answer');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('You know what, I really need to thank you for believing in me',function() {
		sophie.wait(300,function() {
			sophie.speak('It gives me confidence that I\'m doing something right');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Alright!',function() {
		sophie.wait(200,function() {
			sophie.contSpeaking('Shall we start heading to the Cliffs of Kusuri?');
		});
	});
}, function(){return null})
]);