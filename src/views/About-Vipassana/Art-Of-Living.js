import React, {Component} from 'react';
import { Link } from 'react-router';
var Radium = require('radium');
var RadiumGrid = require('radium-grid');

const { StyleRoot } = Radium; 
const { Grid, Cell } = RadiumGrid;

const styles = {
  cell: {
    boxSizing: "border-box",
    color: "#045fb4",
    marginBottom: "1rem",
    padding: "1rem",
    height: "auto"
  }, 
	cellHeader: {
    boxSizing: "border-box",
    color: "#045fb4",
		textAlign: 'center',
    marginBottom: "0.2rem",
    padding: "1rem",
    height: "auto",
		border: "1px solid #045fb4",
		backgroundColor: "#ffffbe",
		borderRadius: '5px'
  },
	h3: {
		margin: "auto"
	}
}

class ArtOfLiving extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>The Art of Living: Vipassana Meditation</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Everyone seeks peace and harmony, because this is what we lack in our lives. From time to time we all experience agitation, irritation, disharmony. And when we suffer from these miseries, we don't keep them to ourselves; we often distribute them to others as well. Unhappiness permeates the atmosphere around someone who is miserable, and those who come in contact with such a person also become affected. Certainly this is not a skillful way to live.

							<br/><br/>We ought to live at peace with ourselves, and at peace with others. After all, human beings are social beings, having to live in society and deal with each other. But how are we to live peacefully? How are we to remain harmonious within, and maintain peace and harmony around us, so that others can also live peacefully and harmoniously?

							<br/><br/>In order to be relieved of our misery, we have to know the basic reason for it, the cause of the suffering. If we investigate the problem, it becomes clear that whenever we start generating any negativity or impurity in the mind, we are bound to become unhappy. A negativity in the mind, a mental defilement or impurity, cannot coexist with peace and harmony.

							<br/><br/>How do we start generating negativity? Again, by investigation, it becomes clear. We become unhappy when we find someone behaving in a way that we don't like, or when we find something happening which we don't like. Unwanted things happen and we create tension within. Wanted things do not happen, some obstacle comes in the way, and again we create tension within; we start tying knots within. And throughout life, unwanted things keep on happening, wanted things may or may not happen, and this process of reaction, of tying knots—Gordian knots—makes the entire mental and physical structure so tense, so full of negativity, that life becomes miserable.

							<br/><br/>Now, one way to solve this problem is to arrange that nothing unwanted happens in life, that everything keeps on happening exactly as we desire. Either we must develop the power, or somebody else who will come to our aid must have the power, to see that unwanted things do not happen and that everything we want happens. But this is impossible. There is no one in the world whose desires are always fulfilled, in whose life everything happens according to his or her wishes, without anything unwanted happening. Things constantly occur that are contrary to our desires and wishes. So the question arises: how can we stop reacting blindly when confronted with things that we don't like? How can we stop creating tension and remain peaceful and harmonious?

							<br/><br/>In India, as well as in other countries, wise saintly persons of the past studied this problem—the problem of human suffering—and found a solution: if something unwanted happens and you start to react by generating anger, fear or any negativity, then, as soon as possible, you should divert your attention to something else. For example, get up, take a glass of water, start drinking—your anger won't multiply; on the other hand, it'll begin to subside. Or start counting: one, two, three, four. Or start repeating a word, or a phrase, or some mantra, perhaps the name of a god or saintly person towards whom you have devotion; the mind is diverted, and to some extent you'll be free of the negativity, free of the anger.

							<br/><br/>This solution was helpful; it worked. It still works. Responding like this, the mind feels free from agitation. However, the solution works only at the conscious level. In fact, by diverting the attention you push the negativity deep into the unconscious, and there you continue to generate and multiply the same defilement. On the surface there is a layer of peace and harmony, but in the depths of the mind there is a sleeping volcano of suppressed negativity which sooner or later may erupt in a violent explosion.

							<br/><br/>Other explorers of inner truth went still further in their search and, by experiencing the reality of mind and matter within themselves, recognized that diverting the attention is only running away from the problem. Escape is no solution; you have to face the problem. Whenever negativity arises in the mind, just observe it, face it. As soon as you start to observe a mental impurity, it begins to lose its strength and slowly withers away.

							<br/><br/>A good solution; it avoids both extremes—suppression and expression. Burying the negativity in the unconscious will not eradicate it, and allowing it to manifest as unwholesome physical or vocal actions will only create more problems. But if you just observe, then the defilement passes away and you are free of it.

							<br/><br/>This sounds wonderful, but is it really practical? It's not easy to face one's own impurities. When anger arises, it so quickly overwhelms us that we don't even notice. Then, overpowered by anger, we perform physical or vocal actions which harm ourselves and others. Later, when the anger has passed, we start crying and repenting, begging pardon from this or that person or from God: “Oh, I made a mistake, please excuse me!” But the next time we are in a similar situation, we again react in the same way. This continual repenting doesn't help at all.

							<br/><br/>The difficulty is that we are not aware when negativity starts. It begins deep in the unconscious mind, and by the time it reaches the conscious level it has gained so much strength that it overwhelms us, and we cannot observe it.

							<br/><br/>Suppose that I employ a private secretary, so that whenever anger arises he says to me, “Look, anger is starting!” Since I cannot know when this anger will start, I'll need to hire three private secretaries for three shifts, around the clock! Let's say I can afford it, and anger begins to arise. At once my secretary tells me, “Oh look—anger has started!” The first thing I'll do is rebuke him: “You fool! You think you're paid to teach me?” I'm so overpowered by anger that good advice won't help.

							<br/><br/>Suppose wisdom does prevail and I don't scold him. Instead, I say, “Thank you very much. Now I must sit down and observe my anger.” Yet, is it possible? As soon as I close my eyes and try to observe anger, the object of the anger immediately comes into my mind—the person or incident which initiated the anger. Then I'm not observing the anger itself; I'm merely observing the external stimulus of that emotion. This will only serve to multiply the anger, and is therefore no solution. It is very difficult to observe any abstract negativity, abstract emotion, divorced from the external object which originally caused it to arise.

							<br/><br/>However, someone who reached the ultimate truth found a real solution. He discovered that whenever any impurity arises in the mind, physically two things start happening simultaneously. One is that the breath loses its normal rhythm. We start breathing harder whenever negativity comes into the mind. This is easy to observe. At a subtler level, a biochemical reaction starts in the body, resulting in some sensation. Every impurity will generate some sensation or the other within the body.

							<br/><br/>This presents a practical solution. An ordinary person cannot observe abstract defilements of the mind—abstract fear, anger or passion. But with proper training and practice it is very easy to observe respiration and body sensations, both of which are directly related to mental defilements.

							<br/><br/>Respiration and sensations will help in two ways. First, they will be like private secretaries. As soon as a negativity arises in the mind, the breath will lose its normality; it will start shouting, “Look, something has gone wrong!” And we cannot scold the breath; we have to accept the warning. Similarly, the sensations will tell us that something has gone wrong. Then, having been warned, we can start observing the respiration, start observing the sensations, and very quickly we find that the negativity passes away.

							<br/><br/>This mental-physical phenomenon is like a coin with two sides. On one side are the thoughts and emotions arising in the mind, on the other side are the respiration and sensations in the body. Any thoughts or emotions, any mental impurities that arise manifest themselves in the breath and the sensations of that moment. Thus, by observing the respiration or the sensations, we are in fact observing mental impurities. Instead of running away from the problem, we are facing reality as it is. As a result, we discover that these impurities lose their strength; they no longer overpower us as they did in the past. If we persist, they eventually disappear altogether and we begin to live a peaceful and happy life, a life increasingly free of negativities.

							<br/><br/>In this way the technique of self-observation shows us reality in its two aspects, inner and outer. Previously we only looked outward, missing the inner truth. We always looked outside for the cause of our unhappiness; we always blamed and tried to change the reality outside. Being ignorant of the inner reality, we never understood that the cause of suffering lies within, in our own blind reactions toward pleasant and unpleasant sensations.

							<br/><br/>Now, with training, we can see the other side of the coin. We can be aware of our breathing and also of what is happening inside. Whatever it is, breath or sensation, we learn just to observe it without losing our mental balance. We stop reacting and multiplying our misery. Instead, we allow the defilements to manifest and pass away.

							<br/><br/>The more one practices this technique, the more quickly negativities will dissolve. Gradually the mind becomes free of defilements, becomes pure. A pure mind is always full of love—selfless love for all others, full of compassion for the failings and sufferings of others, full of joy at their success and happiness, full of equanimity in the face of any situation.

							<br/><br/>When one reaches this stage, the entire pattern of one's life changes. It is no longer possible to do anything vocally or physically which will disturb the peace and happiness of others. Instead, a balanced mind not only becomes peaceful, but the surrounding atmosphere also becomes permeated with peace and harmony, and this will start affecting others, helping others too.

							<br/><br/>By learning to remain balanced in the face of everything experienced inside, one develops detachment towards all that one encounters in external situations as well. However, this detachment is not escapism or indifference to the problems of the world. Those who regularly practice Vipassana become more sensitive to the sufferings of others, and do their utmost to relieve suffering in whatever way they can—not with any agitation, but with a mind full of love, compassion and equanimity. They learn holy indifference—how to be fully committed, fully involved in helping others, while at the same time maintaining balance of mind. In this way they remain peaceful and happy, while working for the peace and happiness of others.

							<br/><br/>This is what the Buddha taught: an art of living. He never established or taught any religion, any “ism”. He never instructed those who came to him to practice any rites or rituals, any empty formalities. Instead, he taught them just to observe nature as it is, by observing the reality inside. Out of ignorance we keep reacting in ways which harm ourselves and others. But when wisdom arises—the wisdom of observing reality as it is—this habit of reacting falls away. When we cease to react blindly, then we are capable of real action—action proceeding from a balanced mind, a mind which sees and understands the truth. Such action can only be positive, creative, helpful to ourselves and to others.

							<br/><br/>What is necessary, then, is to “know thyself”—advice which every wise person has given. We must know ourselves, not just intellectually in the realm of ideas and theories, and not just emotionally or devotionally, simply accepting blindly what we have heard or read. Such knowledge is not enough. Rather, we must know reality experientially. We must experience directly the reality of this mental-physical phenomenon. This alone is what will help us be free of our suffering.

							<br/><br/>This direct experience of our own inner reality, this technique of self-observation, is what is called Vipassana meditation. In the language of India in the time of the Buddha, passana meant seeing in the ordinary way, with one's eyes open; but vipassana is observing things as they actually are, not just as they appear to be. Apparent truth has to be penetrated, until we reach the ultimate truth of the entire psycho-physical structure. When we experience this truth, then we learn to stop reacting blindly, to stop creating negativities—and naturally the old ones are gradually eradicated. We become liberated from misery and experience true happiness.

							<br/><br/>There are three steps to the training given in a meditation course. First, one must abstain from any action, physical or vocal, which disturbs the peace and harmony of others. One cannot work to liberate oneself from impurities of the mind while at the same time continuing to perform deeds of body and speech which only multiply them. Therefore, a code of morality is the essential first step of the practice. One undertakes not to kill, not to steal, not to commit sexual misconduct, not to tell lies, and not to use intoxicants. By abstaining from such actions, one allows the mind to quiet down sufficiently in order to proceed further.

							<br/><br/>The next step is to develop some mastery over this wild mind by training it to remain fixed on a single object, the breath. One tries to keep one's attention on the respiration for as long as possible. This is not a breathing exercise; one does not regulate the breath. Instead, one observes natural respiration as it is, as it comes in, as it goes out. In this way one further calms the mind so that it is no longer overpowered by intense negativities. At the same time, one is concentrating the mind, making it sharp and penetrating, capable of the work of insight.

							<br/><br/>These first two steps, living a moral life, and controlling the mind, are very necessary and beneficial in themselves, but they will lead to suppression of negativities unless one takes the third step: purifying the mind of defilements by developing insight into one's own nature. This is Vipassana: experiencing one's own reality by the systematic and dispassionate observation within oneself of the ever-changing mind-matter phenomenon manifesting itself as sensations. This is the culmination of the teaching of the Buddha: self-purification by self-observation.

							<br/><br/>It can be practiced by one and all. Everyone faces the problem of suffering. It is a universal malady which requires a universal remedy, not a sectarian one. When one suffers from anger, it's not Buddhist anger, Hindu anger, or Christian anger. Anger is anger. When one becomes agitated as a result of this anger, this agitation is not Christian, or Jewish, or Muslim. The malady is universal. The remedy must also be universal.

							<br/><br/>Vipassana is such a remedy. No one will object to a code of living which respects the peace and harmony of others. No one will object to developing control over the mind. No one will object to developing insight into one's own nature, by which it is possible to free the mind of negativities. Vipassana is a universal path.

							<br/><br/>Observing reality as it is by observing the truth inside—this is knowing oneself directly and experientially. As one practices, one keeps freeing oneself from the misery of mental impurities. From the gross, external, apparent truth, one penetrates to the ultimate truth of mind and matter. Then one transcends that, and experiences a truth which is beyond mind and matter, beyond time and space, beyond the conditioned field of relativity: the truth of total liberation from all defilements, all impurities, all suffering. Whatever name one gives this ultimate truth is irrelevant; it is the final goal of everyone.

							<br/><br/>May you all experience this ultimate truth. May all people be free from misery. May they enjoy real peace, real harmony, real happiness.

							<br/><br/>MAY ALL BEINGS BE HAPPY

							The above text is based upon a talk given by Mr. S.N. Goenka in Berne, Switzerland.
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}><Link to='/'>Home</Link></h3>
					</Cell>
				</Grid>
			</StyleRoot>
    );
  }
}

export default ArtOfLiving;