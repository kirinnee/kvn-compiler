let boriolsis_rejecthelp_1 =  new Scene("boriolsis_rejecthelp_1",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(slane);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(wizard);
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
	yusie.preMove(-70);
	yusie.setHorizontalFlip(true);
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
	charles.changeSprite('serious');
	chief.changeSprite('serious');
	halley.changeSprite('serious');
	sophie.changeSprite('worried');
	june.changeSprite('worried');
	sophie.appear(1000);
	charles.appear(1000);
	chief.appear(1000);
	june.appear(1000);
	halley.appear(1000,function() {
		charles.changeSprite('serious_speak');
		charles.preSpeak(function() {
			charles.speak('No worries!',function() {
				charles.wait(300,function() {
					charles.speak('We\'ll trust your judgment',function() {
						charles.changeSprite('serious');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('' + playName + ', just don\'t overexert yourself',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('I’ll just tag along to see how I can help you all get to Malidret safely',function() {
			june.wait(300,function() {
				june.speak('In the event that you change your mind, you can just let me know',function() {
					june.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	chief.changeSprite('worried_speak');
	chief.preSpeak(function() {
		chief.speak('You can just send us to the end of this path',function() {
			chief.wait(300,function() {
				chief.speak('You shouldn\'t leave the village for too long',function() {
					chief.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.preSpeak(function() {
		sophie.speak('It seems that the minions are increasingly difficult to kill',function() {
			sophie.changeSprite('scared');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('Are you sure you don’t want to just create a dead body that resembles Princess Sophie?',function() {
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.speak('Alright',function() {
		june.endSpeak();
		june.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('' + playName + ', are you okay?',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('There\'s really no need to put yourself through this',function() {
			june.wait(300,function() {
				june.speak('Do you want to use the dead body method instead?',function() {
					june.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.speak('Alright',function() {
		june.endSpeak(function() {
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient');
	halley.changeSprite('frustrated');
	chief.changeSprite('angry');
	sophie.changeSprite('angry');
	sophie.changeSprite('angry_speak');
	sophie.preSpeak(function() {
		sophie.speak('It’s getting really annoying how they keep stopping us in our tracks',function() {
			sophie.changeSprite('angry');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('I’m always ready to perform the alchemy skill required to make the dead body',function() {
			june.wait(300,function() {
				june.speak('Just let me know if you decide to use it',function() {
					june.endSpeak(function() {
						june.changeSprite('worried');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('As you carried on with your journey, it didn’t take long before you bumped into another of Ruskoff’s minion.',null,null,null,false,'1.4vw','white');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('I really hope these delays won’t affect our search for my parents',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('The alchemy method is really safe',function() {
			june.wait(300,function() {
				june.speak('Do you want to just go for that?',function() {
					june.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.speak('Just let me know if you need my help',function() {
		june.endSpeak(function() {
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('relent_speak');
	sophie.preSpeak(function() {
		sophie.speak('The ambushes seem to be almost predestined',function() {
			sophie.changeSprite('relent');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('I really do believe that it will be much more effective to just create a dead body which looks like Princess Sophie.',function() {
			june.endSpeak(function() {
				june.changeSprite('worried');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('As you carried on with your journey, it didn’t take long before you bumped into another of Ruskoff’s minion.');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('It feels like there\'s just so many tribulations on the way',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('This journey is getting quite dangerous, isn\'t it?');
	});
}, function(){return null})
,new Frame(function(){
	june.speak('Do you really not want to use the dead body method?',function() {
		june.endSpeak();
		june.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('Don\'t push yourself too hard',function() {
			charles.wait(300,function() {
				charles.speak('We\'ve still got a long way',function() {
					charles.endSpeak(function() {
						charles.changeSprite('worried');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared');
	june.changeSprite('scared');
	chief.changeSprite('scared');
	sophie.changeSprite('scared_speak');
	sophie.preSpeak(function() {
		sophie.speak('Oh my…',function() {
			sophie.wait(500,function() {
				sophie.contSpeaking('' + playName + ', the minion almost killed you...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('I really think we should go with the other method',function() {
		sophie.changeSprite('scared');
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('For your safety, I really recommend the alchemy method',function() {
			june.endSpeak();
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('As you carried on with your journey, it didn’t take long before you bumped into another of Ruskoff’s minion.');
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried');
	june.changeSprite('worried');
	chief.changeSprite('worried');
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('It really feels as though everything is working against us',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('Do you want to use the dead body trick instead?',function() {
			june.changeSprite('serious');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('Watch your body, ' + playName + '',function() {
			charles.endSpeak();
			charles.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.preSpeak(function() {
		sophie.speak('I guess that’s what they mean when they say against all odds',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('You might want to use the dead body method instead?',function() {
			june.endSpeak();
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.displayText('As you carried on with your journey, a strange man appeared from the depths of the forest.');
	wizard.changeSprite('agitated');
	charles.changeSprite('surprised');
	sophie.changeSprite('surprised');
	june.changeSprite('surprised');
	halley.changeSprite('surprised');
	chief.changeSprite('surprised');
	wizard.appear(1000);
	wizard.bringToFront();
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('agitated_speak');
	wizard.preSpeak(function() {
		wizard.speak('Quick!',function() {
			wizard.wait(300,function() {
				wizard.speak('I am bringing you all on a secret route that not even the locals know of');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious');
	sophie.changeSprite('serious');
	june.changeSprite('serious');
	halley.changeSprite('serious');
	chief.changeSprite('serious');
	wizard.speak('Before you know it, you’ll be out of danger',function() {
		wizard.wait(500,function() {
			wizard.flipHorizontally(function() {
				june.flipHorizontally();
				wizard.changeSprite('agitated');
				wizard.move(160,null,1600);
				charles.move(160,null,1600);
				sophie.move(160,null,1600);
				chief.move(160,null,1600);
				june.move(160,null,1600);
				halley.move(160,null,1600,function() {
					wizard.disappear();
					charles.disappear();
					sophie.disappear();
					chief.disappear();
					june.disappear();
					halley.disappear();
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	boriolsis.closeTextBox();
	boriolsis.changeBackground('valley',1,1000,function() {
		sophie.wait(500,function() {
			wizard.move(-160);
			charles.move(-160);
			sophie.move(-160);
			june.move(-160);
			wizard.flipHorizontally();
			wizard.move(10);
			june.move(-30);
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.changeSprite('worried');
	june.changeSprite('tired');
	wizard.appear(1000);
	charles.appear(1000);
	sophie.appear(1000);
	yusie.appear(1000);
	june.appear(1000);
	wizard.changeSprite('serious_speak');
	wizard.preSpeak(function() {
		wizard.speak('We should be safe now',function() {
			wizard.wait(300,function() {
				wizard.speak('All that’s left is that straight road out of the valley',function() {
					wizard.wait(300,function() {
						wizard.contSpeaking('which would bring you straight to Malidret.');
						wizard.changeSprite('serious');
						sophie.changeSprite('relieved');
						june.changeSprite('smile');
						yusie.changeSprite('overjoyed');
						charles.changeSprite('smile');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	yusie.preSpeak(function() {
		yusie.speak('This valley is very beautiful...',function() {
			yusie.wait(300,function() {
				sophie.changeSprite('overjoyed');
				june.changeSprite('smile');
				yusie.speak('Who would have imagined that tehre would be such a place beneath the path we were treading on?',function() {
					yusie.changeSprite('smile');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smile_speak');
	sophie.preSpeak(function() {
		sophie.speak('And it feels very windy here as well',function() {
			sophie.wait(300,function() {
				sophie.changeSprite('surprised_speak');
				sophie.speak('Can you hear the sound of the wind?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('awkward_speak');
	wizard.wait(500,function() {
		wizard.preSpeak(function() {
			wizard.speak('Erm...',function() {
				wizard.wait(500,function() {
					wizard.contSpeaking('I know it sounds very bad when I put it this way…');
					sophie.changeSprite('curious');
					charles.changeSprite('curious');
					yusie.changeSprite('curious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('But could you all lend me some help as a way of thanking me for saving your lives?',function() {
		wizard.changeSprite('awkward');
		charles.changeSprite('speechless');
		june.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('smileexclaim_speak');
	yusie.changeSprite('smile');
	sophie.preSpeak(function() {
		sophie.speak('Of course!',function() {
			wizard.changeSprite('smile');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('After all, without your help, we might have been trapped there!',function() {
		charles.changeSprite('upset');
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('As long as it’s within our means, we will definitely help you',function() {
		sophie.changeSprite('smile');
		charles.interupt(function() {
			charles.endSpeak(function() {
				charles.changeSprite('speechless');
				charles.flipHorizontally();
				yusie.bringToFront();
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.preSpeak(function() {
		wizard.speak('Thank you for not taking my words the wrong way');
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.speak('You see...',function() {
		wizard.wait(400,function() {
			wizard.speak('I’m actually a Theurgist Mage who belongs to a family lineage with an extremely rich history in wizardry');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('There is this ancient ritual that has been passed down to me from my parents, which I really want to try out');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	june.changeSprite('surprised');
	yusie.changeSprite('curious');
	wizard.speak('However, this ritual can only be done once every ten years');
}, function(){return null})
,new Frame(function(){
	wizard.speak('This means that if anyone casts it, I will have to wait a good ten years before I can cast it again');
}, function(){return null})
,new Frame(function(){
	wizard.speak('Besides, there are certain requirements before the ritual can be performed',function() {
		wizard.wait(400,function() {
			wizard.speak('It can only be performed in a special kind of temple built centuries ago');
			charles.changeSprite('thinking');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('As of now, only two such temples exist in Novala');
}, function(){return null})
,new Frame(function(){
	wizard.speak('One of them is at Brostika while the other is over here in Boriolsis',function() {
		yusie.changeSprite('stone');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Other than the time and location requirement, there is also a fixed list of ingredients that\'s required for the ritual');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	wizard.speak('And I’m currently lacking a few final ingredients before I can begin the ritual',function() {
		wizard.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('curious_speak');
	sophie.preSpeak(function() {
		sophie.speak('Ooh...',function() {
			sophie.wait(400,function() {
				sophie.speak('What are you lacking?',function() {
					sophie.changeSprite('curious');
					yusie.changeSprite('curious');
					june.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.preSpeak(function() {
		wizard.speak('I’m just lacking a rubicram and two dendricorns');
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('awkward_speak');
	wizard.speak('I’m pretty sure they’re somewhere around here…',function() {
		charles.changeSprite('speechless');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('My charm indicated that they are very near already',function() {
		wizard.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.flipHorizontally(function() {
		charles.preSpeak(function() {
			charles.speak('Then, why didn’t you continue to use your charm to find them?');
			sophie.changeSprite('awkward');
			yusie.changeSprite('awkward');
			charles.changeSprite('impatient');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('awkward_speak');
	wizard.preSpeak(function() {
		wizard.speak('These ingredients have the ability to shield themselves from any magical prying eyes');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('That’s why I need to search for them physically after confirming that they’re just around this vicinity',function() {
		wizard.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('impatient_speak');
	charles.preSpeak(function() {
		charles.speak('Isn’t it a little too coincidental that we’ve stopped our run at this specific area?');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset_speak');
	charles.wait(300,function() {
		charles.speak('You do have a motive for saving us after all, don\'t you?',function() {
			yusie.changeSprite('angry');
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('Besides, why can\'t you just get these ingredients at the pharmacy?',function() {
		charles.changeSprite('upset');
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('awkward_speak');
	wizard.preSpeak(function() {
		wizard.speak('Err......',function() {
			wizard.wait(500,function() {
				wizard.speak('I\'m sure what I should say...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('I guess I really need more eyes around to help me...');
}, function(){return null})
,new Frame(function(){
	wizard.wait(400,function() {
		wizard.speak('And well, a poor mage like me living in the mountains doesn\'t have money to buy herbs or any other ingredients');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('That\'s why I\'ve to resort to such measures...');
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.speak('Hmm...',function() {
		wizard.wait(400,function() {
			wizard.contSpeaking('It seems that you’re not very convinced…');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('surprised_speak');
	wizard.speak('Oh!',function() {
		wizard.wait(400,function() {
			wizard.changeSprite('smile_speak');
			wizard.contSpeaking('How about this?');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	yusie.changeSprite('curious');
	june.changeSprite('surprised');
	wizard.speak('Before all of you start finding the ingredients, I will answer any question that you have about this ritual',function() {
		wizard.changeSprite('smile');
	});
}, function(){return null})
]);