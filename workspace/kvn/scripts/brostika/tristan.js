let tristanscene =  new Scene("brostika_tristan",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(tristan);
	brostika.bringCharacter(tristanDeathCG);
	brostika.display(0,1,0,function() {
		brostika.changeBackground('alley',1,800);
	});
}, function(){return null})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	tristan.setTextColor('white');
	tristan.changeName();
	tristan.setFontSize();
	tristan.changeBold();
	charles.preMove(10);
	tristan.preMove(-20);
	charles.animate();
	tristan.animate();
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	tristan.changeSprite('struggle');
	sophie.appear(500);
	charles.appear(500);
	tristan.appear(500);
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('T...thank you for your h-',function() {
			tristan.wait(100,function() {
				tristan.contSpeaking('help!',function() {
					tristan.wait(500,function() {
						tristan.changeSprite('painexclaim_speak');
						tristan.speak('Argghh!',function() {
							tristan.move(0,15,300);
							tristan.rotateAntiClockwise(10,300,function() {
								sophie.changeSprite('surprised_speak');
								charles.changeSprite('mildtakenaback');
							});
						});
					});
				},null,null,null,false);
			});
		},500);
	});
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle');
	sophie.changeSprite('worried_speak');
	charles.changeSprite('serious');
	sophie.preSpeak(function() {
		sophie.speak('Are you alright?',function() {
			sophie.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('I-',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('I must find the constable...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried');
	tristan.speak('Don\'t have',function() {
		tristan.wait(400,function() {
			tristan.speak('much time...',function() {
				tristan.changeSprite('struggle');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('What\'s going on?',function() {
			charles.wait(400,function() {
				charles.contSpeaking('You\'re looking awfully pale.',function() {
					charles.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('Winery...',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('poisoned...',function() {
					sophie.changeSprite('surprised_speak');
					charles.changeSprite('mildtakenaback');
					tristan.wait(600,function() {
						tristan.contSpeaking('Must save the others and boss...',function() {
							tristan.changeSprite('struggle');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('Pull yourself together!',function() {
			charles.wait(400,function() {
				charles.contSpeaking('What in the world happened?');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('Bandits,',function() {
			tristan.wait(300,function() {
				tristan.contSpeaking('with \'M\' tattoos.',function() {
					sophie.changeSprite('scared');
					charles.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('They\'ve kidnapped Mr. Broski-');
	tristan.changeSprite('painexclaim_speak');
	tristan.scale(1.02,1.02,80,function() {
		tristan.changeSprite('struggle');
		tristan.scale(null,null,80,function() {
			tristan.wait(200,function() {
				tristan.changeSprite('painexclaim_speak');
				tristan.scale(1.02,1.02,80,function() {
					tristan.changeSprite('struggle');
					tristan.scale(null,null,80,function() {
						tristan.wait(200,function() {
							tristan.changeSprite('painexclaim_speak');
							tristan.scale(1.02,1.02,80,function() {
								tristan.changeSprite('struggle');
								tristan.scale(null,null,80,function() {
									tristan.wait(200);
								},null,false);
							},null,false);
						});
					},null,false);
				},null,false);
			});
		},null,false);
	},null,false);
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.speak('They took over Brostikine winery and poisoned the wine!');
}, function(){return null})
,new Frame(function(){
	tristan.speak('They want to kill the village!');
	tristan.changeSprite('painexclaim_speak');
	tristan.scale(1.02,1.02,80,function() {
		tristan.changeSprite('struggle');
		tristan.scale(null,null,80,function() {
			tristan.wait(200,function() {
				tristan.changeSprite('painexclaim_speak');
				tristan.scale(1.02,1.02,80,function() {
					tristan.changeSprite('struggle');
					tristan.scale(null,null,80,function() {
						tristan.wait(200,function() {
							tristan.changeSprite('painexclaim_speak');
							tristan.scale(1.02,1.02,80,function() {
								tristan.changeSprite('struggle');
								tristan.scale(null,null,80,function() {
									tristan.wait(200);
								},null,false);
							},null,false);
						});
					},null,false);
				},null,false);
			});
		},null,false);
	},null,false);
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('scared_speak');
	sophie.preSpeak(function() {
		sophie.speak('That\'s terrible!',function() {
			charles.changeSprite('thinking');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('worried_speak');
	sophie.speak('Where\'s the constable?',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('We\'ll bring you there,',function() {
				sophie.wait(400,function() {
					sophie.contSpeaking('you\'re in no shape to walk alone.',function() {
						sophie.changeSprite('worried');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('I-',function() {
			tristan.wait(400,function() {
				tristan.contSpeaking('I\'m not...',function() {
					tristan.wait(300,function() {
						tristan.contSpeaking('sure.');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('My head hurts...');
}, function(){return null})
,new Frame(function(){
	tristanDeathCG.bringAboveOverlay(function() {
		tristanDeathCG.bringToFront(function() {
			tristanDeathCG.appear(500);
		});
	});
	tristan.speak('Ah!');
}, function(){return null})
,new Frame(function(){
	tristan.speak('...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('I-',function() {
		tristan.wait(400,function() {
			tristan.contSpeaking('I don\'t think I can make it...');
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('They fed me poison when they caught me escaping...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('...and wanted to hunt me for sport...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Too bad for them, I run fast...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Ahh,',function() {
		tristan.wait(300,function() {
			tristan.contSpeaking('it\'s gotten so dark...',null,1200,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('Tell the constable for me,',function() {
		tristan.wait(600,function() {
			tristan.contSpeaking('can\'t let those thugs have their way...',null,600);
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('(Looks at player) I spat out some of the poison into a vial...');
}, function(){return null})
,new Frame(function(){
	tristan.speak('Take it.',function() {
		tristan.wait(400,function() {
			tristan.contSpeaking('I hope it is useful...',function() {
				brostika.displayText('You have received a vial of poison.');
			},700);
		});
	},400);
}, function(){return null})
,new Frame(function(){
	tristan.speak('(eyes closed)...');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Tristan?',function() {
			sophie.wait(700,function() {
				sophie.speak('Tristan!');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('He\'s',function() {
			charles.wait(300,function() {
				charles.contSpeaking('stopped breathing...');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('I\'m sorry, I should have tried to do something for him.');
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Poor Tristan,',function() {
			sophie.wait(300,function() {
				sophie.contSpeaking('His eyes,',function() {
					sophie.wait(300,function() {
						sophie.contSpeaking('they were so angry and scared.');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.speak('Those thugs must have really tortured him to make him hate them like that.');
}, function(){return null})
,new Frame(function(){
	sophie.speak('I hope he is at peace now.');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('What are you doing, Sophie?');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('Brostikans believe that if you tie a thread to the pinky of someone who passes on,');
	});
}, function(){return null})
,new Frame(function(){
	sophie.contSpeaking('their spirit will not disappate and they will be able to watch over their loved ones.');
}, function(){return null})
,new Frame(function(){
	charles.speak('...');
}, function(){return null})
,new Frame(function(){
	charles.preSpeak(function() {
		charles.speak('You\'re as knowledgeable about local superstitions as always...');
	});
}, function(){return null})
,new Frame(function(){
	sophie.preSpeak(function() {
		sophie.speak('They\'re not superstitions, Charles!',function() {
			sophie.endSpeak();
		});
	});
}, function(){return null})
,new Frame(function(){
	tristanDeathCG.disappear(500,function() {
		sophie.changeSprite('hesitate_speak');
		charles.changeSprite('worried');
		sophie.preSpeak(function() {
			sophie.speak('Can you carry Tristan, Charles?');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('gazeindistance_speak');
	sophie.speak('We should hand his body to the constable so that he can be given a proper burial.');
}, function(){return null})
,new Frame(function(){
	sophie.speak('Besides,',function() {
		sophie.wait(300,function() {
			sophie.contSpeaking('we can\'t possibly leave him with the corpses of his pursuers here.',function() {
				sophie.changeSprite('sad');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.preSpeak(function() {
		charles.speak('Yes, of course.');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We\'ll make our way to Erithven after handing this issue over to the town guards.',function() {
		charles.changeSprite('serious');
	});
}, function(){return null})
]);