let chief_house_1 =  new Scene("chief_house_1",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(halley);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(june);
	boriolsis.display(null,null,1000,function() {
		chief.changeSprite('smile_speak');
		charles.changeSprite('smile');
		sophie.changeSprite('smile');
		sophie.appear(500);
		charles.appear(500);
		chief.appear(500,function() {
			chief.preSpeak(function() {
				chief.speak('So this is the village of Boriolsis.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('And yes,',function() {
		chief.wait(300,function() {
			chief.contSpeaking('I haven\'t properly introduced myself yet.');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	chief.speak('My name is Helmuth, and I am the chief of Boriolsis.');
}, function(){return null})
,new Frame(function(){
	chief.speak('Back then during the Great War, I served under the King and Queen as one of the Knights of Novala');
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.speak('Your friend, Charles, used to stay at my house when he was young before moving to the Royal Academy');
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('laugh');
	chief.speak('I can still remember the old days when he messed up my house with all the funny experiments that he likes to do',function() {
		sophie.changeSprite('laugh');
		charles.changeSprite('awkward');
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	chief.speak('Anyways, Boriolsis is a poverty-stricken area because of our mountainous and heavily forested terrain',function() {
		chief.wait(300,function() {
			charles.changeSprite('serious');
			sophie.changeSprite('serious');
			chief.speak('This makes it near impossible to trade with the other regions or perform any kind of agricultural activity');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.wait(500,function() {
		chief.changeSprite('smile_speak');
		chief.speak('As the chief of our village,',function() {
			chief.wait(300,function() {
				chief.contSpeaking('it\'s an honour to have you.',function() {
					sophie.changeSprite('smile');
					charles.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('awkward_speak');
	chief.speak('But I must apologize for requesting all of you to put up with the conditions of our village!',function() {
		chief.changeSprite('awkward');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('It\'s no problem Helmuth!',function() {
			sophie.wait(500,function() {
				chief.changeSprite('smile');
				sophie.contSpeaking('Really!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.preSpeak(function() {
		chief.speak('Alright then,',function() {
			chief.wait(500,function() {
				chief.contSpeaking('my house is just up ahead.',function() {
					chief.endSpeak();
					chief.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.fadeOutBackground(800);
	boriolsis.closeTextBox();
	chief.disappear(800);
	sophie.disappear(800);
	charles.disappear(800,function() {
		boriolsis.setAnchorX(0);
		boriolsis.setAnchorY(0);
		boriolsis.scaleBackground(1.5,null,null,function() {
			boriolsis.changeBackground('house',0,null,function() {
				boriolsis.fadeInBackground(800,function() {
					sophie.changeSprite('shy_speak');
					sophie.speak('Excuse us for intruding...',function() {
						chief.move(10);
						sophie.changeSprite('smile');
						chief.appear(800);
						sophie.appear(800);
						charles.appear(800);
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('awkward_speak');
	chief.preSpeak(function() {
		chief.speak('Well, my house is a little messy',function() {
			chief.wait(300,function() {
				chief.speak('I hope you don\'t mind.');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.speak('And don\'t worry!',function() {
		chief.wait(300,function() {
			chief.contSpeaking('Just make yourself comfortable!',function() {
				chief.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed');
	sophie.preSpeak(function() {
		sophie.speak('Wowww!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('Your house is so different from the ones which we normally see!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('And you\'ve got so many interesting things in that glass cabinet over there!');
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('surprised_speak');
	chief.preSpeak(function() {
		chief.speak('Oh!',function() {
			chief.wait(200,function() {
				chief.changeSprite('proud_speak');
				chief.contSpeaking('That\'s the cabinet that contains all of the items treasured by myself and my deceased wife');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('You see that glowing spear over there?',function() {
		chief.wait(300,function() {
			chief.speak('That\'s the spear which I used to take down the great Kapitolian Knight, Arrastrus!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('amazed');
	chief.speak('Even till today, I can still remember vividly how proud I was to be the first and the last to defeat the Great Arrastrus!',function() {
		chief.wait(300,function() {
			chief.speak('It was a long time back even before you were born!');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('sad_speak');
	chief.speak('The books in the cabinet were my wife\'s favourite.',function() {
		charles.changeSprite('sad');
		chief.wait(300,function() {
			sophie.changeSprite('apologetic');
			charles.changeSprite('gazeindistance');
			chief.contSpeaking('She used to spend hours poring over these books as she looked to find inspiration and answer for her research work.',function() {
				chief.changeSprite('sad');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('apologetic_speak');
	sophie.preSpeak(function() {
		sophie.speak('I\'m so sorry...',function() {
			sophie.wait(500,function() {
				sophie.speak('I really shouldn\'t have talked about it...',function() {
					sophie.changeSprite('apologetic');
				});
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.preSpeak(function() {
		chief.speak('It\'s okay, Princess Sophie.',function() {
			chief.wait(300,function() {
				chief.contSpeaking('It\'s been so long and well,',function() {
					chief.wait(200,function() {
						chief.contSpeaking('we all have to move on and look ahead into the future, don\'t we?',function() {
							sophie.changeSprite('sad');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.wait(500,function() {
		chief.changeSprite('sad_speak');
		chief.speak('Well, my wife used to lead Charles\'s parents in weapon research back then during the war.',function() {
			chief.wait(300,function() {
				chief.contSpeaking('They were working on the development of a beast called the Chimera to assist them in the war');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('But then the research went wrong and my wife and Charles\'s parents got killed by the Chimera.',function() {
		chief.wait(300,function() {
			chief.speak('After that fateful incident, Charles moved in to stay in my house');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('laugh');
	chief.speak('It felt just like yesterday when Charles was still running around in my house and playing with my daughter.',function() {
		chief.wait(300,function() {
			sophie.changeSprite('smile');
			chief.speak('Look how tall and handsome he is now!');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	sophie.changeSprite('smile');
	chief.speak('I have always been hoping for him to come back to say hello or something',function() {
		chief.wait(300,function() {
			chief.contSpeaking('but I do understand how fast-paced things are at the castle and how busy everyone can get',function() {
				chief.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('awkward_speak');
	charles.preSpeak(function() {
		charles.speak('I\'m really sorry for not returning to Boriolsis all these years');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('sad_speak');
	charles.speak('I\'ve always felt quite bad about it',function() {
		charles.wait(300,function() {
			charles.contSpeaking('but like what you said, a lot of things have been happening in the castle and I just can\'t seem to find time for everything');
		});
		charles.wait(300,function() {
			charles.changeSprite('surprised_speak');
			charles.speak('By the way, where\'s June?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious');
	charles.changeSprite('curious_speak');
	charles.speak('Is she still staying with you in Boriolsis?',function() {
		charles.wait(300,function() {
			charles.speak('Or did she follow her dream and begin work at Malidret as an alchemist?',function() {
				charles.changeSprite('curious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.preSpeak(function() {
		chief.speak('She\'s still with me in Boriolsis');
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('scowl');
	chief.speak('I don\'t know what\'s wrong with that brat, you know!',function() {
		chief.wait(300,function() {
			chief.speak('She received so many job offers in Malidret from the top alchemy laboratories over there',function() {
				chief.wait(300,function() {
					chief.speak('Yet she insists to stay in Boriolsis to continue in her research in the local flora and fauna');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('As her father, I admit I\'m quite happy to see my daughter with me every day',function() {
		chief.wait(300,function() {
			chief.speak('But it\'s an entirely different matter to waste one\'s youth and talent on these relatively trivial matters.');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('awkward_speak');
	chief.speak('Then again, I must say that she has been quite helpful recently',function() {
		chief.wait(400,function() {
			chief.changeSprite('smile_speak');
			chief.speak('She is helping me to research on the identity of a monster which has been lurking in the Boriolsis forests',function() {
				chief.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	sophie.changeSprite('curious_speak');
	sophie.preSpeak(function() {
		sophie.speak('Huh?',function() {
			sophie.wait(200,function() {
				sophie.contSpeaking('What is this monster that you\'re talking about?',function() {
					sophie.changeSprite('curious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	chief.preSpeak(function() {
		chief.speak('Remember how I told all of you to leave the forest quickly just now,',function() {
			chief.wait(300,function() {
				chief.contSpeaking('it\'s because of the existence of a strange beast which has been lurking around the woods here',function() {
					chief.wait(300,function() {
						chief.changeSprite('angry_speak');
						charles.changeSprite('serious');
						chief.speak('This strange beast started terrorizing our town recently and preyed on many of our local hunters who hunt in our forests for a living');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared');
	chief.speak('Because of this, many hunters dare not to enter the forest anymore.');
}, function(){return null})
,new Frame(function(){
	chief.speak('This strange beast seems to frequent the path that leads to Malidret',function() {
		chief.wait(300,function() {
			chief.changeSprite('worried_speak');
			chief.speak('Hence, I had no choice but to cordon off that area to protect all of my villagers as well as to ensure the safety of all travellers',function() {
				charles.changeSprite('worried');
				chief.changeSprite('worried');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('Oh dear!',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('We were planning to head to Malidret to find my parents!',function() {
					sophie.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking');
	chief.changeSprite('worried_speak');
	chief.preSpeak(function() {
		chief.speak('Well, since the beast came to our attention, no one from Boriolsis has made it alive to Malidret and vice versa.',function() {
			chief.wait(300,function() {
				chief.speak('Because of this, trade has gone down between Malidret and Boriolsis, reducing our trading volume to virtually zero');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('To understand how bad this is, you must know that Boriolsis sustains itself by either hunting or lumbering',function() {
		chief.wait(300,function() {
			chief.speak('And without trading or selling the manashards, meat or fur looted from the animals in the forests, we cannot acquire any other materials or resources to sustain our living');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	charles.changeSprite('serious');
	chief.speak('That\'s why there\'s this urgent need to kill the beast in the woods');
}, function(){return null})
,new Frame(function(){
	chief.speak('Well, I\'ve been leading expeditionary trips into the forest with a bunch of hunters',function() {
		chief.wait(300,function() {
			chief.speak('We try to locate and collect items back for June to research on in hope of identifying this monster',function() {
				chief.wait(200);
			});
			chief.contSpeaking('and also to devise a way to track it down before killing it');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('That was why we were roaming around in the forest before we bumped into you this morning');
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('scowl');
	chief.speak('As of now, we\'ve only bumped into this strange beast once',function() {
		chief.wait(900,function() {
			chief.speak('But I was the only one from the team to make it out of the woods alive');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	sophie.changeSprite('scared');
	chief.speak('This monster\'s hides are so powerful and tough that neither physical or magical attacks can penetrate them .');
}, function(){return null})
,new Frame(function(){
	chief.speak('On top of that, it\'s also extremely agile',function() {
		chief.wait(300,function() {
			chief.speak('Many of my team members were paralyzed after getting a hit from its tail',function() {
				chief.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.preSpeak(function() {
		sophie.setFontSize('1.4vw');
		sophie.speak('Ohh myyyy...',function() {
			sophie.wait(500,function() {
				sophie.speak('T-That\'s really scary...',function() {
					sophie.changeSprite('scared');
				});
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('worried_speak');
	chief.preSpeak(function() {
		chief.speak('Indeed...',function() {
			chief.wait(300,function() {
				chief.speak('I can\'t describe the fear in my heart when I was running out of the woods and escaping from the beast back then',function() {
					charles.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('scared_speak');
	sophie.setFontSize('1.7vw');
	chief.speak('I\'ve never felt so humiliated in my life...',function() {
		chief.wait(300,function() {
			chief.speak('Imagine a former Knight running for his life...');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('worried_speak');
	charles.changeSprite('worried');
	sophie.changeSprite('worried');
	chief.speak('As you know, our village is scarce in resource.',function() {
		chief.wait(200,function() {
			chief.speak('We have neither the fertility to grow crops nor place to mine any useful minerals.');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.contSpeaking('We are left to ration on whatever food we have kept.');
}, function(){return null})
,new Frame(function(){
	june.preMove(10);
	chief.changeSprite('smile_speak');
	chief.speak('However,',function() {
		chief.wait(500,function() {
			chief.contSpeaking('I manage to find some of-',function() {
				chief.changeSprite('surprised');
				sophie.changeSprite('surprised');
				charles.changeSprite('surprised');
				june.interupt(function() {
					june.speak('Dad!',function() {
						june.wait(500,function() {
							june.changeSprite('smile_speak');
							june.appear();
							june.contSpeaking('I\'m back!',function() {
								chief.changeSprite('smile');
								sophie.changeSprite('smile');
								charles.changeSprite('smile');
								june.wait(500,function() {
									june.setDefaultSkippable(false);
									june.speak('I heard you talking to somebody, do we have gues-',null,1600);
									june.move(-45,null,1500,function() {
										june.changeSprite('surprised_speak');
										june.move(2.5,-2,80,function() {
											june.move(2.5,2,80,function() {
												june.wait(300,function() {
													june.speak('C-',function() {
														june.wait(200,function() {
															june.contSpeaking('C-',function() {
																june.wait(200,function() {
																	june.contSpeaking('Charles?',function() {
																		june.wait(500,function() {
																			june.contSpeaking('I-Is that really you?',function() {
																				june.changeSprite('surprised');
																			});
																		});
																	},null,null,null,false);
																});
															},null,null,null,false);
															june.move(3,null,200);
														});
													});
												});
											});
										});
									},swing);
								});
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.bringAboveOverlay(function() {
		boriolsis.changeOverlay(0.7,'black',null,function() {
			sophie.changeSprite('playful_speak');
			sophie.preSpeak(function() {
				sophie.speak('Hehe~');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.contSpeaking('' + playName + ',',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('this is going to be interesting!',function() {
				sophie.changeSprite('playful');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.changeOverlay(0,'black');
	june.changeSprite('shy');
	charles.changeSprite('smile_speak');
	chief.changeSprite('smile');
	sophie.changeSprite('smile');
	charles.preSpeak(function() {
		june.changeSprite('overjoyed');
		charles.speak('Of course it\'s me',function() {
			charles.wait(300,function() {
				charles.speak('It\'s really been a long time since we met, hasn\'t it?',function() {
					charles.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	june.preSpeak(function() {
		june.speak('Y-Ya',function() {
			june.wait(300,function() {
				june.contSpeaking('R-Really long');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised_speak');
	june.speak('You\'ve grown a lot taller, haven\'t you?',function() {
		june.changeSprite('surprised');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('Of course!',function() {
			charles.wait(300,function() {
				charles.changeSprite('thinking_speak');
				charles.contSpeaking('It\'s been what',function() {
					charles.wait(200,function() {
						charles.speak('15 years already?',function() {
							charles.changeSprite('smile');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	june.preSpeak(function() {
		june.speak('Hehe!',function() {
			june.wait(200,function() {
				june.contSpeaking('You\'re right!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised_speak');
	june.speak('Who\'s that girl behind you?',function() {
		june.wait(300,function() {
			june.changeSprite('worried_speak');
			june.speak('Is she your sweetheart?',function() {
				sophie.changeSprite('surprised_speak');
				june.changeSprite('worried');
				sophie.interupt(function() {
					sophie.setFontSize('2vw');
					sophie.speak('No!',function() {
						sophie.wait(200,function() {
							sophie.changeSprite('worried_speak');
							sophie.contSpeaking('No!',function() {
								sophie.wait(200,function() {
									sophie.contSpeaking('No!',function() {
										sophie.wait(200,function() {
											sophie.changeSprite('smileexclaim_speak');
											sophie.speak('I\'m Princess Sophie and Charles is my retainer',function() {
												sophie.setFontSize('1.7vw');
												sophie.changeSprite('smile');
											});
										});
									});
								});
							});
						});
					});
				});
			},2300,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile');
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('And we\'ve got a few friends with us at the back as well',function() {
			charles.changeSprite('smile');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	june.preSpeak(function() {
		june.speak('I see!',function() {
			june.wait(300,function() {
				june.contSpeaking('I\'m sorry Princess for mistaking you as Charles\'s sweetheart!!!',function() {
					june.changeSprite('shy');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('laugh');
	sophie.preSpeak(function() {
		sophie.speak('Don\'t worry about it!',function() {
			june.changeSprite('smile');
			sophie.wait(300,function() {
				sophie.changeItalic(true);
				sophie.setFontSize('1.3vw');
				boriolsis.changeOverlay(0.55,'black',null,function() {
					sophie.changeSprite('playful_speak');
					sophie.speak('I\'ll never snatch him away from you...');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	sophie.setNormalText();
	sophie.setFontSize('1.7vw');
	boriolsis.changeOverlay(0,'black',null,function() {
		charles.changeSprite('smile_speak');
		charles.preSpeak(function() {
			charles.speak('So Miss Genius Alchemist, what have you been working on all these while?',function() {
				charles.wait(300,function() {
					charles.speak('I heard you turned down numerous offers from Malidret to stay in Boriolsis',function() {
						charles.changeSprite('smile');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	june.preSpeak(function() {
		june.speak('Can you not say such things?',function() {
			june.wait(300,function() {
				june.contSpeaking('How can I be considered a genius compared to you?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile_speak');
	june.speak('Well, I have been trying to devise a way to increase the purity of nutritional minerals within the fruits which can be found in Boriolsis',function() {
		june.wait(300,function() {
			june.contSpeaking('until my father told me to help him out with the investigation',function() {
				june.changeSprite('smile');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('surprised_speak');
	charles.preSpeak(function() {
		charles.speak('Wow! That sounds pretty impressive!',function() {
			charles.wait(300,function() {
				charles.changeSprite('smile_speak');
				charles.speak('I can still remember those days when we ran about in your house trying to experiment and replicate the chemical excretions made by the Slimes using plant extracts',function() {
					chief.changeSprite('scowl');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('And now you\'re already miles ahead in the research of plants and chemica-',function() {
		charles.changeSprite('mildtakenaback');
		chief.interupt(function() {
			chief.speak('Alright! The both of you can catch up later!',function() {
				charles.changeSprite('serious');
				sophie.changeSprite('serious');
				june.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('serious_speak');
	chief.speak('June, here\'s a tuft of long fur from the beast which I manage to find this morning',function() {
		chief.wait(300,function() {
			chief.speak('The fur was caught onto an overhanging branch ten meters above the ground');
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('Hopefully, it will give us more clues about the beast',function() {
		chief.changeSprite('serious');
		chief.flipHorizontally(function() {
			chief.wait(500,function() {
				chief.flipHorizontally(null,200);
			});
		},200);
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('Okay Dad!',function() {
			june.wait(300,function() {
				june.speak('You can catch up with Charles and Princess Sophie!',function() {
					june.wait(300,function() {
						june.speak('I\'ll get to work right away!',function() {
							june.changeSprite('serious');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.flipHorizontally(function() {
		charles.changeSprite('awkward_speak');
		charles.preSpeak(function() {
			charles.speak('June, is it okay if I join you?',function() {
				june.flipHorizontally(null,200);
				june.changeSprite('surprised');
				charles.changeSprite('serious_speak');
				charles.wait(300,function() {
					charles.contSpeaking('I\'m not really a conversationalist and would prefer to help out with the research',function() {
						charles.changeSprite('serious');
					});
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised_speak');
	june.preSpeak(function() {
		june.speak('...',function() {
			june.wait(200,function() {
				june.speak('O-Of course!',function() {
					june.wait(700,function() {
						june.changeSprite('overjoyed');
						june.contSpeaking('It will just be like old time again, won\'t it?');
					});
				});
			});
		},500,false);
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile_speak');
	june.speak('Both of us playing around in the laboratory',function() {
		june.changeSprite('smile');
		sophie.changeSprite('playful');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('I guess so...?',function() {
			charles.changeSprite('smile');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('I think I will just stay here and talk to Helmuth',function() {
			sophie.wait(300,function() {
				sophie.speak('There\'re so much things about the past which I want to ask him!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('smile_speak');
	chief.preSpeak(function() {
		chief.speak('No problem, Princess Sophie!',function() {
			chief.wait(300,function() {
				chief.changeSprite('serious_speak');
				chief.speak('Then I guess Charles and June,',function() {
					chief.wait(300,function() {
						chief.contSpeaking('both of you can run along and start on the research');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.speak('We need to figure out a way to stop the monster soon',function() {
		chief.changeSprite('serious');
	});
}, function(){return null})
]);window.why = new Options('Why?','why',function() {
	sophie.changeSprite('playful_speak',function() {
		sophie.speak('Because~');
	});
	return false;
});
window.dont = new Options('Don\'t mess with them...','dont',function() {
	sophie.changeSprite('pout_speak',function() {
		sophie.speak('Awww...');
	});
	return false;
});