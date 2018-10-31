window.joinTeam = new Options('Sure, why not?','joinTeam',function() {
	return false;
});
let brostika_intro =  new Scene("brostika_intro",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	sophie.preMove(-80);
	charles.preMove(-80);
	sophie.setTextColor('white');
	charles.setTextColor('white');
	sophie.changeName('???');
	brostika.display(0,null,null,function() {
		brostika.changeBackground('intro',1,1000);
		brostika.displayText('--Village of Kroigren--',400,null,null,true,'2.5vw','white',null,null,false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.appear(null,function() {
		sophie.move(80,null,1000,function() {
			sophie.speak('Hello...',function() {
				sophie.flipHorizontally(function() {
					sophie.wait(800,function() {
						sophie.contSpeaking('Anyone around here...?',function() {
							sophie.flipHorizontally(function() {
								sophie.wait(400,function() {
									sophie.move(30,null,500,function() {
										sophie.flipHorizontally(function() {
											sophie.wait(800,function() {
												sophie.flipHorizontally(function() {
													sophie.move(5,null,100,function() {
														sophie.setFontSize('2vw');
														sophie.changeBold(true);
														sophie.preSpeak(function() {
															sophie.changeSprite('surprised_speak');
															sophie.speak('Ahh...!');
														});
													});
												},200);
											});
										},200);
									});
								});
							},200);
						});
					});
				},200);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy_speak');
	sophie.setNormalText();
	sophie.setFontSize('1.7vw');
	sophie.speak('Erm...',function() {
		sophie.wait(400,function() {
			sophie.speak('Hi,',function() {
				sophie.wait(400,function() {
					sophie.contSpeaking('I\'m Sophie!');
				});
			});
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.changeName('Sophie');
	sophie.speak('I just got separated from my retainer...');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy_speak');
	sophie.speak('If it\'s not too much trouble,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('could you help me find him?',function() {
				brostika.displayOption([joinTeam]);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed');
	sophie.speak('Yay~!',function() {
		sophie.wait(400,function() {
			sophie.speak('I knew I could count on you!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	sophie.speak('Oh!',function() {
		sophie.wait(400,function() {
			sophie.speak('I just realized I forgot to introduce myself!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('shy_speak');
	sophie.speak('I\'m Sophie,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('the Princess of Novala!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak',function() {
		sophie.speak('But really,',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('you can just call me Sophie!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious_speak');
	sophie.speak('Hmm...',function() {
		sophie.wait(400,function() {
			sophie.speak('You don\'t look like you\'re from around here, do you?');
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('Let me just give you a quick intro on Novala then!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('You see,',function() {
		sophie.wait(400,function() {
			sophie.changeSprite('smileexclaim_speak');
			sophie.contSpeaking('Novala is a kingdom with incredible diversity');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Despite the diverse culture and economies within Novala,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('we\'re able to enjoy peace and prosperity under the governance of my parents');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('I\'m sure you\'ll also love Novala after you\'ve seen our majestic natural landscapes');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('gazeindistance_speak',function() {
		sophie.wait(null,function() {
			sophie.speak('But...',function() {
				sophie.wait(400,function() {
					sophie.speak('I don\'t know how long more can I still call it home...');
				});
			},1000,false);
		},false);
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('How I wish',function() {
		sophie.wait(600,function() {
			sophie.contSpeaking('I didn\'t have to run away...',null,1500,false);
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	sophie.speak('Not too long ago, Prime Minister Mistrassimo staged a coup');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('helpless_speak');
	sophie.speak('His treachery was so...',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('unexpected...',null,1000,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('My family and I fled away from the castle before his men could kill us');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.speak('The past few weeks have been crazy...',function() {
		sophie.wait(600,function() {
			sophie.speak('All the vicious disguised minions',function() {
				sophie.wait(400,function() {
					sophie.speak('And the fleeing');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('We tried so hard to shake off Mistrassimo\'s henchmen');
}, function(){return null})
,new Frame(function(){
	sophie.speak('It was such a mad rush',function() {
		sophie.wait(400,function() {
			sophie.speak('Charles, my guardian, and I were separated from my parents...');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('Just when I thought it couldn\'t get any worse,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('a pack of wild dogs separated Charles and me');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('They were so frightening',function() {
		sophie.wait(400,function() {
			sophie.speak('And I ran for my li-');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('pout_speak');
	sophie.speak('Hey!',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('I\'m serious!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('The dogs were really',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('really fierce!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('But yeah...',function() {
		sophie.wait(400,function() {
			sophie.speak('We\'ll need to find Charles first!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('serious_speak');
	sophie.speak('I know it won\'t be easy');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('But luckily for us,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('the Novalans are extremely helpful people!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('You can always recruit them to help you!');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Overlay and tutorial on recruit');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Now that we have some friends to help us,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('let\'s go and find Charles!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Transit to clicker scene with charles and slimes on fighting stage Sophie: That’s Charles! Sophie: We’ve got to save him before it’s too late',function() {
		sophie.disappear(1000);
	});
}, function(){return null})
,new Frame(function(){
	charles.move();
	sophie.move(null,null,null,function() {
		sophie.move(25);
		charles.move(30,null,null,function() {
			charles.changeSprite('tiredpanting');
			sophie.appear(1000);
			charles.appear(1000);
			sophie.changeSprite('smile_speak');
			sophie.speak('Thank you for saving Charles!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('amazed');
	sophie.speak('And wow!',function() {
		sophie.wait(400,function() {
			sophie.speak('You sure learn fast!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Cue panting noise');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	charles.changeSprite('tiredpanting_speak');
	charles.preSpeak(function() {
		charles.speak('T-Thank...',function() {
			charles.wait(600,function() {
				charles.contSpeaking('youu...');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I-I was really that close to dying...');
}, function(){return null})
,new Frame(function(){
	charles.speak('Thanks for saving me');
}, function(){return null})
,new Frame(function(){
	charles.speak('Anyways,',function() {
		charles.wait(400,function() {
			charles.changeSprite('smile_speak');
			charles.contSpeaking('I\'m Charles');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('The Royal Doctor of Novala',function() {
		charles.wait(400,function() {
			charles.changeSprite('serious_speak');
			charles.contSpeaking('And also the guardian of...',function() {
				sophie.move(5,null,100,function() {
					sophie.move(-5,null,100,function() {
						sophie.move(5,null,100,function() {
							sophie.move(-5,null,100,function() {
								charles.flipHorizontally(null,200);
							});
						});
					});
				});
			},1000,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	charles.changeSprite('upset');
	sophie.speak('Don\'t worry!',function() {
		sophie.wait(400,function() {
			sophie.speak('' + playName + ' can be trusted!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I\'ve already told him about the coup!');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward');
	charles.changeSprite('upset_speak');
	charles.preSpeak(function() {
		charles.speak('Didn\'t I tell you not to go around revealing your identity?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	charles.changeSprite('impatient');
	sophie.preSpeak(function() {
		sophie.speak('Well, I needed help to find you');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('And yes!',function() {
		sophie.wait(400,function() {
			sophie.speak('' + playName + ' has also agreed to help us find my parents!');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset_speak');
	sophie.changeSprite('smile');
	charles.preSpeak(function() {
		charles.speak('......',function() {
			charles.wait(400,function() {
				charles.speak('Okay...',function() {
					charles.wait(400,function() {
						charles.contSpeaking('I guess we can do with the additional help');
						sophie.changeSprite('overjoyed');
					});
				});
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious_speak');
	charles.preSpeak(function() {
		charles.speak('' + playName + ',',function() {
			charles.wait(400,function() {
				charles.contSpeaking('you\'re new to Novala,',function() {
					charles.wait(400,function() {
						charles.contSpeaking('aren\'t you?');
						sophie.changeSprite('smile');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I can tell it from your expression');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Let me see if what I can teach you');
}, function(){return null})
,new Frame(function(){
	charles.speak('I guess we can start with learning how to review our achievements');
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0.55,'black',0);
}, function(){return null})
,new Frame(function(){
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0,'black');
}, function(){return null})
,new Frame(function(){
	charles.speak('Achievements are important records of your heroic acts.');
}, function(){return null})
,new Frame(function(){
	charles.speak('Now that we’re done with the achievements',function() {
		charles.wait(400,function() {
			charles.contSpeaking('let’s run through an important rule that we should establish before we begin our journey.');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('serious');
	charles.speak('During our journey,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('you must not be uncontactable');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.speak('Hmm…',function() {
		charles.wait(400,function() {
			charles.changeSprite('explain');
			charles.speak('To put it simply,',function() {
				charles.wait(400,function() {
					charles.contSpeaking('don’t disconnect from the Internet');
				});
			});
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('Being uncontactable will result in you losing your consciousness,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('rendering us vulnerable to all kinds of threat');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	charles.changeSprite('serious');
	sophie.preSpeak(function() {
		sophie.speak('Yuuup!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('How about you go and give it a try?');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Try becoming uncontactable and see what happens');
}, function(){return null})
,new Frame(function(){
	charles.speak('Don’t worry!',function() {
		charles.wait(400,function() {
			charles.contSpeaking('We will stand guard over you',function() {
				charles.wait(400,function() {
					charles.speak('But only just this time!',function() {
						charles.changeSprite('serious');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('You can definitely trust us~!',function() {
			sophie.changeSprite('smile');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('And yes!',function() {
			charles.wait(400,function() {
				charles.speak('Do reconnect when you completely lose consciousness');
				charles.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.closeTextBox();
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(1,'black',8000,null,swing,false);
	charles.changeSprite('serious_speak');
	charles.speak('So you can see how you\'re slowly losing your vision?',function() {
		charles.wait(400,function() {
			charles.speak('And how your senses gradually becoming muted?');
			sophie.changeSprite('smileexclaim_speak',function() {
				sophie.speak('Hellooo?',function() {
					sophie.wait(400,function() {
						sophie.contSpeaking('Hello?',function() {
							sophie.wait(400,function() {
								sophie.speak('Can you heaaaar meeeee~?');
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Princess Sophie, you\'ve got to stop playing',function() {
		charles.wait(400,function() {
			charles.speak('We\'re dealing with a very serious issue here!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Awwww...',null,1500,false);
}, function(){return null})
,new Frame(function(){
	charles.speak('' + playName + ',',function() {
		charles.wait(400,function() {
			charles.contSpeaking('before you become completely uncontactable,',function() {
				charles.wait(400,function() {
					charles.speak('I need you to reconnect now');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.changeOverlay(0,'black',1000,function() {
		brostika.displayText('Quest Complete: Disconnect to the Internet',null,function() {
			brostika.displayText('Quest Complete: Reconnect to the Internet');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed');
	sophie.preSpeak(function() {
		sophie.speak('Welcome back~!');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.changeSprite('serious_speak',function() {
			charles.speak('I hope you now understand the importance of keeping contact with us');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile');
	charles.changeSprite('explain');
	charles.speak('Before we go on to the other fundamentals,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('there is something which I must emphasize');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('In the world of Novala,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('we can\'t make changes to decisions which we\'ve made in the past as we wish');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('serious');
	charles.speak('We have to take full responsibility for our decisions as there’s no return once we’ve decided on a certain action');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('comforting_speak');
	sophie.preSpeak(function() {
		sophie.speak('' + playName + ', don\'t worry too much about it,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('okay?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak',function() {
		sophie.speak('We\'ll help you out!');
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('For now,',function() {
			charles.wait(400,function() {
				charles.contSpeaking('just keep it at the back of your mind');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Now that we’re done with these,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('let’s start with learning how to manage the loot and resources we acquire after defeating our foes');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We\'ll need you to head into the forest around Kroigren and take down three mobs',function() {
		charles.wait(400,function() {
			charles.speak('Following which, we\'ll guide you on the allocation and optimization of the loot',function() {
				sophie.disappear(1000);
				charles.disappear(1000);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	brostika.displayText('Quest Complete: Take down three enemies');
}, function(){return null})
,new Frame(function(){
	brostika.displayText('Upon the completion of the Quest, you navigated back to reunite with Charles and Sophie.',null,function() {
		sophie.changeSprite('chewing');
		sophie.appear(1000);
		charles.appear(1000);
	});
}, function(){return null})
,new Frame(function(){
	brostika.displayText('Sophie was munching on something that looked rather peculiar as you returned.');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset');
	sophie.changeSprite('chewing_speak');
	sophie.preSpeak(function() {
		sophie.speak('Yeoue’re bhack!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Ahre yeou ohkhey-',function() {
		charles.changeSprite('upset_speak');
		charles.interupt(function() {
			charles.speak('Princess Sophie,',function() {
				charles.wait(400,function() {
					charles.contSpeaking('you shouldn’t talk when you’re chewing',function() {
						charles.changeSprite('upset');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.preSpeak(function() {
		sophie.speak('Ohkhey…');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('swallow',function() {
		sophie.wait(800,function() {
			sophie.changeSprite('smileexclaim_speak');
			sophie.speak('' + playName + ',',function() {
				sophie.wait(400,function() {
					sophie.contSpeaking('do you want to try one of these prasines?');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.speak('I’m telling you they’re really',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('really',function() {
				sophie.wait(400,function() {
					sophie.contSpeaking('reallyyyyyy',function() {
						sophie.wait(400,function() {
							sophie.contSpeaking('good!');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('It’s simply the best food in the entire of Novala!');
}, function(){return null})
,new Frame(function(){
	brostika.displayText('It had blackcurrants and a strange looking kind of berry all over its surface.');
}, function(){return null})
,new Frame(function(){
	brostika.displayText('Beneath the berry-coated surface, you could see a thin layer of crispy crust dotted by multi-grains.');
}, function(){return null})
,new Frame(function(){
	brostika.displayText('After taking a bite from the prasine, a smooth and sweet flavor wrapped itself around your tastebuds.');
}, function(){return null})
,new Frame(function(){
	brostika.displayText('You nodded your head as you finished the rest of the prasine.');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('overjoyed');
	sophie.preSpeak(function() {
		sophie.speak('It\'s really great,',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('isn\'t it?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	charles.changeSprite('impatient');
	sophie.speak('I used to eat it at least once per day');
}, function(){return null})
,new Frame(function(){
	sophie.speak('If I don\'t get to eat prasines,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('I would feel super uncomfortable!');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('helpless_speak');
	sophie.speak('That\'s why it was so tough when I was separated from Charles and my parents');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('sad_speak');
	sophie.speak('No one would buy prasines for me to eat...');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.speak('Oh yes!',function() {
		sophie.wait(400,function() {
			sophie.speak('Charles,',function() {
				sophie.wait(400,function() {
					sophie.changeSprite('shy_speak');
					sophie.contSpeaking('since ' + playName + ' seems to like prasines too,',function() {
						sophie.wait(400,function() {
							sophie.contSpeaking('why don\'t we get some more?');
							sophie.changeSprite('shy');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('Alright',function() {
			charles.wait(400,function() {
				charles.speak('Enough of that');
				sophie.changeSprite('relent');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('If you\'re going to continue eating like this,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('you\'re going to fall sick soon');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Let\'s carry on with our introduction');
}, function(){return null})
,new Frame(function(){
	charles.speak('Let’s see what you’ve got from those guys');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	sophie.changeSprite('smile');
	charles.speak('Good job!',function() {
		charles.wait(400,function() {
			charles.speak('At this rate,',function() {
				charles.wait(400,function() {
					charles.contSpeaking('we should be done with the introduction in no time');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Lastly,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('there is a particular group of individuals which I need to talk about.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('They are called Heroes');
}, function(){return null})
,new Frame(function(){
	charles.speak('Heroes are important characters like myself who possess special abilities which can help assist Princess Sophie to find her parents');
}, function(){return null})
,new Frame(function(){
	charles.speak('Transit to clicker scene and chibi charles will share about heroes');
}, function(){return null})
,new Frame(function(){
	charles.speak('As we make our way to find her parents and eventually wrest back the throne,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('we might forge powerful partnership with allies which can assist us in our revolution');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('On that note,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('when there are outsiders around,',function() {
				charles.wait(400,function() {
					charles.contSpeaking('we should address her as Sophie without her Princess title');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('After all,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('we\'ll never actually know who’s working for Mistrassimo');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('That’s why Princess Sophie is dressed in this commoner outfit');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('Charles,',function() {
			sophie.wait(400,function() {
				sophie.speak('Is that all for the introduction?',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.preSpeak(function() {
		charles.speak('I believe that\'s all for now',function() {
			charles.wait(null,function() {
				charles.preSpeak(function() {
					charles.changeSprite('surprised_speak');
					charles.speak('Oh before I forget,',function() {
						charles.wait(400,function() {
							charles.contSpeaking('while I was separated away from Princess Sophie,',function() {
								charles.wait(400,function() {
									charles.changeSprite('explain');
									charles.contSpeaking('I managed to catch hold of some important news',function() {
										sophie.changeSprite('surprised');
									});
								});
							});
						});
					});
				});
			},false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('It appears that the King and Queen have been sighted at the Village of Malidret');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious_speak');
	sophie.preSpeak(function() {
		sophie.changeSprite('curious_speak');
		sophie.speak('Malidret...?',function() {
			sophie.changeSprite('curious');
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('Yes, Malidret.');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('If you were to open up your map,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('you would find our current position at a village called brostika');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Go on now and take a look at the map',function() {
		charles.wait(400,function() {
			charles.speak('It would be good to familiarize with it');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.preSpeak(function() {
		sophie.speak('It seems like my parents aren\'t too far away');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('I\'m afraid we won\'t be able to take the route you have in mind...');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Phinark is now swarming with Mistrassimo\'s men',function() {
		charles.wait(400,function() {
			charles.speak('And we can\'t take the risk to make our way back');
			sophie.changeSprite('sad');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('The only way is to make one big round around Novala');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	sophie.preSpeak(function() {
		sophie.speak('It\'s okay!');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I am confident that we can pull it off!',function() {
		sophie.wait(400,function() {
			sophie.speak('Shall we make our move now?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('awkward_speak');
	sophie.speak('I meann,',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('it\'s a good chance for me to check out these foreign places~~');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('You see,',function() {
			charles.wait(400,function() {
				charles.contSpeaking('Princess Sophie,',function() {
					charles.wait(400,function() {
						charles.contSpeaking('we’re actually facing a little problem');
						sophie.changeSprite('curious');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('There is a dark magical object in Kroigren which is filling the entire village with a vicious and negative aura.');
}, function(){return null})
,new Frame(function(){
	charles.speak('The negative aura is extremely infectious and has made many of the villagers very uncooperative at the very least.',function() {
		sophie.changeSprite('scared');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('The ones who are affected worse would attack anyone whom they saw on the streets.',function() {
		charles.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.speak('That’s really…',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('scary',function() {
				sophie.changeSprite('scared');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('Indeed');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Without removing the dark magical object,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('leaving brostika might prove to be very difficult');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('That’s why I recommend that we find the magical object first before moving onto the next village');
}, function(){return null})
,new Frame(function(){
	charles.speak('To move to any area outside of the main town,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('you will need to know how to Scout');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.bringAboveOverlay();
	charles.bringAboveOverlay(function() {
		sophie.disappear(1000);
		charles.disappear(1000,function() {
			brostika.changeOverlay(1,'black',null,function() {
				sophie.appear(1000);
				charles.appear(1000,function() {
					brostika.displayText('Quest Completed: Locate the dark magical object');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried');
	sophie.preSpeak(function() {
		sophie.changeSprite('scared_speak');
		sophie.speak('Urgh…');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I...',function() {
		sophie.wait(400,function() {
			sophie.contSpeaking('I don’t like the look of this thing',function() {
				sophie.changeSprite('scared');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('Let me take a closer look at it');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.speak('Hmm…',function() {
		charles.wait(400,function() {
			charles.contSpeaking('I should be able to cast a seal on it');
		});
	},1000,false);
}, function(){return null})
,new Frame(function(){
	charles.speak('CG for charles sealing dark orb?');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('amazed');
	charles.changeSprite('serious_speak');
	charles.speak('This seal should be able to hold the aura in.',function() {
		charles.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('surprised_speak');
	sophie.preSpeak(function() {
		sophie.speak('Wow!',function() {
			sophie.wait(400,function() {
				sophie.contSpeaking('Charles, you’re really incredible!',function() {
					sophie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('It’s nothing much');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Anyways,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('his dark sphere is actually a Warp Gate');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Warp Gates are extremely useful equipment in combat when it comes to taking down many enemies at once');
}, function(){return null})
,new Frame(function(){
	charles.speak('' + playName + ',',function() {
		charles.wait(400,function() {
			charles.contSpeaking('since you were the one who found it',function() {
				charles.wait(400,function() {
					charles.contSpeaking('I think it should belong to you.');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Let me show you how to use the Warp Gate');
}, function(){return null})
,new Frame(function(){
	charles.speak('Transit to Warp Gate Tutorial');
}, function(){return null})
,new Frame(function(){
	charles.speak('You must always remember to close the Warp Gate after using it');
}, function(){return null})
,new Frame(function(){
	charles.speak('If not,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('you will be consumed by the ominous aura within the sphere and never to regain control over your body again');
		});
	});
}, function(){return null})
,new Frame(function(){
	playScene('brostika_outside',0);
}, function(){return null})
]);