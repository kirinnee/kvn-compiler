let boriolsis_lab =  new Scene("boriolsis_lab",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(halley);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(june);
	boriolsis.display(0,null,0,function() {
		june.preMove(-50);
		boriolsis.changeBackground('lab',1,1000);
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('shy_speak');
	charles.changeSprite('smile');
	charles.appear(1000);
	june.appear(1000,function() {
		june.preSpeak(function() {
			june.speak('As you can see, the laboratory has gotten a lot more cluttered over the years...',function() {
				june.changeSprite('shy');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('No worries!',function() {
			charles.wait(300,function() {
				charles.changeSprite('serious_speak');
				charles.speak('Well,',function() {
					charles.wait(400,function() {
						charles.contSpeaking('shall we begin?',function() {
							charles.changeSprite('serious');
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('Okay!');
	});
}, function(){return null})
,new Frame(function(){
	june.move(-10,null,300,function() {
		june.speak('Before my father passed me the fur just now, he has also previously collected some of the scales which the beast had shedded in the forest');
	});
}, function(){return null})
,new Frame(function(){
	june.speak('I tried to identify the beast using the scales collected but it doesn\'t seemed to tally with any of the creatures documented in the Beast Lore');
}, function(){return null})
,new Frame(function(){
	june.speak('In fact, it seemed to be an animal of an entirely new species.',function() {
		june.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious_speak');
	charles.preSpeak(function() {
		charles.speak('Does Helmuth remember the structure of the monster?',function() {
			charles.changeSprite('curious');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('Not really...');
	});
}, function(){return null})
,new Frame(function(){
	june.speak('The monster sneaked up on them from the back',function() {
		june.wait(300,function() {
			june.speak('He could only recall how they were unable to penetrate the scaly hide of the beast as well and the existence of a long, scaly and pointy tail',function() {
				june.changeSprite('worried');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('That\'s not a lot of information for us to work with',function() {
			charles.changeSprite('thinking');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('That\'s why I\'ve yet to arrive at any meaningful conclusion...',function() {
			june.wait(300,function() {
				june.speak('If it\'s both an undocumented species and a monster which we don\'t know how it looks like, it\'s going to be quite hard to decode it',function() {
					june.changeSprite('worried');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('Why not we try working with this in a different way?',function() {
			charles.wait(300,function() {
				charles.speak('Instead of trying to identify the beast and using the lore to find out its weakness, let\'s try to do some materials testing on the scale');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('If we\'re able to find the right material which would allow us to penetrate through the scale, it would be considerable progress for us',function() {
		charles.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('You\'re right',function() {
			june.wait(300,function() {
				june.changeSprite('worried_speak');
				june.speak('I have been too reliant on established knowledge');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.speak('We need to perform this research at a more fundamental level',function() {
		june.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking');
	charles.speak('......',function() {
		charles.wait(300,function() {
			charles.changeSprite('surprised');
			charles.preSpeak(function() {
				charles.scale(1.1,1.1,150,function() {
					charles.scale(1/1.1,1/1.1,150,function() {
						charles.changeSprite('surprised_speak');
						charles.speak('Quick!',function() {
							charles.wait(300,function() {
								charles.contSpeaking('Pass me the fur and the scale!',function() {
									charles.changeSprite('serious');
								});
							});
						});
					});
				});
			});
		});
	},2000,false);
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised_speak');
	june.preSpeak(function() {
		june.speak('You\'ve got an idea?',function() {
			june.wait(300,function() {
				june.move(10,null,100,function() {
					june.changeSprite('serious_speak');
					june.speak('Okay! Here you go!',function() {
						june.move(-10,null,100);
						june.changeSprite('serious');
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.preSpeak(function() {
		charles.speak('If you take a look at these scales, they are all tessellatable',function() {
			charles.wait(300,function() {
				charles.speak('Since Helmuth had mentioned that both the hide and the tail is scaly, this means that the entire hide and the tail has a largely uniform exterior');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('From this, we can roughly ascertain that at least the lower half of the body should be covered in scales',function() {
		charles.wait(300,function() {
			charles.changeSprite('thinking_speak');
			charles.speak('But then again, are we able to conclude roughly where the scales end on its body?');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('If I remember correctly, Helmuth did comment on its incredible agility',function() {
		charles.wait(300,function() {
			charles.contSpeaking('and he did mention how he found the fur at a height of roughly ten meters');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('Right now, we can eliminate both possibilities of it either being a two legged animal or a legless creature');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	june.changeSprite('serious');
	charles.speak('Two legged animals would not be able to display incredible agility because it would be harder for them to accelerate or decelerate',function() {
		charles.wait(300,function() {
			charles.speak('It can\'t be a legless animal either because it would mean that it has to be humongous to get its fur caught up on a branch ten meters high',function() {
				charles.wait(200,function() {
					charles.speak('It would be near impossible for something so huge to sneak up on Helmuth');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile');
	charles.speak('Hence, the animal should be something similar to a four legged animal, granting it agility and the ability to leap to a height of ten meters');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.speak('If we were to continue and dig at the concept of agility,',function() {
		charles.wait(200,function() {
			charles.contSpeaking('it would also usually require a rather flexible midbody in order for a Knight to deem its agility as a threat');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('This would mean that the hard scales on its rear would be unlikely to extend beyond the midbody region');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	june.changeSprite('serious');
	charles.speak('Lastly, it doesn\'t make sense for the fur to be on the paws, especially when they are so long',function() {
		charles.wait(300,function() {
			charles.speak('This means that the fur probably came from the upperbody region');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('The monster which we are dealing is probably not too humongous and it should be covered in fur from the head to the midbody region and then scales from the midbody region to the tail',function() {
		charles.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('And if we try to assemble a rough shape of the animal using the fur and scales which we have over here,',function() {
			june.wait(300,function() {
				june.contSpeaking('this is what we get...',null,1000,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	charles.changeSprite('smile');
	june.speak('Doesn\'t this look like the...',function() {
		june.changeSprite('overjoyed');
		june.interupt(function() {
			june.speak('Charles, you\'re really a genius!');
		});
	},3000,false);
}, function(){return null})
,new Frame(function(){
	june.speak('Wait!',function() {
		june.wait(300,function() {
			june.speak('Let me go and get something!');
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('smile_speak');
	june.flipHorizontally(function() {
		june.move(40,null,500,function() {
			june.flipHorizontally(function() {
				june.move(-40,null,500,function() {
					june.speak('Doesn\'t it look like this the-',function() {
						june.changeSprite('worried');
						charles.changeSprite('curious_speak');
						charles.interupt(function() {
							charles.wait(400,function() {
								charles.speak('Chimeras...?',function() {
									charles.changeSprite('curious');
								},1500,false);
							});
						});
					});
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('It looks exactly like the Chimeras in my mother\'s notebook, isn\'t it?',function() {
			june.changeSprite('worried');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset_speak');
	charles.preSpeak(function() {
		charles.speak('But the chimeras don\'t exist, right?');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.speak('They only exist in our parents\' research sketches...',function() {
		charles.wait(300,function() {
			june.changeSprite('serious');
			charles.speak('Then...',function() {
				charles.wait(300,function() {
					charles.speak('Could it be',function() {
						charles.wait(400,function() {
							charles.contSpeaking('the failed experiment which broke free and killed our parents?');
							charles.changeSprite('worried');
							june.changeSprite('worried');
						});
					});
				});
			},1000,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.speak('But',function() {
		charles.wait(500,function() {
			charles.contSpeaking('it\'s been so long...',function() {
				charles.wait(300,function() {
					charles.changeSprite('curious_speak');
					charles.speak('Why did it wait until now to start attacking humans?',function() {
						june.changeSprite('curious');
						charles.changeSprite('curious');
					});
				});
			});
		});
	},1000);
}, function(){return null})
,new Frame(function(){
	june.changeSprite('curious_speak');
	june.preSpeak(function() {
		june.speak('If it really were the same beast, it should have been in our woods for a good fifteen years or so',function() {
			june.changeSprite('curious');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('thinking_speak');
	charles.preSpeak(function() {
		charles.speak('There must be some changes in the forest environment which resulted in a change in its behavior',function() {
			charles.wait(400,function() {
				charles.changeSprite('curious_speak');
				charles.speak('Did anything change in the hunters\' practices recently?',function() {
					charles.changeSprite('curious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.preSpeak(function() {
		june.speak('......',function() {
			june.wait(300,function() {
				june.speak('Now that you mention it, my father did introduce a new hunting device to improve the hunting efficiency for our local hunters');
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	june.speak('Before the attacks began, our hunters have been bringing a lot more of the animal carcasses back home',function() {
		june.changeSprite('worried');
		charles.changeSprite('thinking_speak');
		charles.interupt(function() {
			charles.speak('Could it be that the monster has started to venture out of its previous territory to find food after the hunters had begun to explete its food source?');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	june.changeSprite('scared');
	charles.wait(700,function() {
		charles.speak('It seems like this matter is more urgent than I have expected');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('If we don\'t find a way to stop it soon, it might discover the existence of the entire village, putting all the lives here at risk',function() {
		charles.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised_speak');
	june.preSpeak(function() {
		june.speak('I think I read something from my mother\'s notes about the methods which can be employed to subjugate the monster');
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('serious_speak');
	june.speak('Let me take a look......',function() {
		june.wait(1000,function() {
			june.speak('It seems like wiping the tip of a metallic object with Sacremental extract would allow one to inflict some sort of pain that can be used to control the beast',function() {
				june.changeSprite('serious');
			});
		});
	},1500,false);
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('smile_speak');
	charles.preSpeak(function() {
		charles.speak('Then the problem is solved, isn\'t it?');
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('We\'d just have to condense the Sacremental extract to a sufficiently high density such that it can penetrate the skin of the monster',function() {
		charles.wait(300,function() {
			charles.speak('We should then be able to slay this wretched monster',function() {
				june.changeSprite('overjoyed');
				charles.wait(800,function() {
					charles.changeSprite('sad_speak');
					charles.contSpeaking('and finally avenge our parents...',null,3000,false);
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('sad_speak');
	june.preSpeak(function() {
		june.speak('I\'m really sorry Charles...',function() {
			june.wait(300,function() {
				june.speak('I-I don-',function() {
					june.changeSprite('sad');
					charles.changeSprite('explain');
					charles.interupt(function() {
						charles.speak('You don\'t have to apologize for anything');
					});
				});
			});
		},1500,false);
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('It\'s not your fault or anyone\'s');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('sad_speak');
	charles.speak('I\'ve just been feeling a little dizzy and disoriented after returning to Boriolsis',function() {
		charles.wait(300,function() {
			charles.speak('Everything here reminds me of the pain which I felt after I lost my parents');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('gazeindistance_speak');
	charles.flipHorizontally(function() {
		charles.speak('But somehow, I don\'t feel that connected to the pain anymore',function() {
			charles.wait(300,function() {
				charles.speak('This intermittent connection to the past and the painful memories caused my head to ache a little',function() {
					charles.changeSprite('sad');
				});
			});
		});
	},200);
}, function(){return null})
,new Frame(function(){
	june.changeSprite('worried_speak');
	june.preSpeak(function() {
		june.speak('......',function() {
			june.wait(400,function() {
				june.speak('Charles, look here',function() {
					charles.changeSprite('surprised');
					charles.flipHorizontally(null,500);
				});
			});
		},1000,false);
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('comforting_speak');
	june.speak('It will all come to a close once we take down that monster',function() {
		june.wait(300,function() {
			june.changeSprite('smile');
			june.speak('The nightmare will finally be over',function() {
				june.changeSprite('comforting');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('worried_speak');
	charles.preSpeak(function() {
		charles.speak('I don\'t know...',function() {
			june.changeSprite('sad');
			charles.wait(300,function() {
				charles.speak('But regardless of anything, let\'s get to work on the Sacremental Weapon',function() {
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
]);