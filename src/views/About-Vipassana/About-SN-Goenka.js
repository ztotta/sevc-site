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
	},
	img: {
		maxWidth: "100%",
		maxHeight: "480px",
		height: "auto",
		margin: "auto",
		top: "0px"
	}
}

class AboutSNGoenka extends Component {
  render() {
    return (
			<StyleRoot>
				<Grid>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Mr. S.N. Goenka</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<img style={styles.img} src='http://www.dhamma.org/images/sng/sng.gif' alt='goenka' />
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>Background</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							Mr. Goenka is a householder teacher of Vipassana meditation in the tradition of the late Sayagyi U Ba Khin of Burma (Myanmar).

							<br/><br/>Although Indian by descent, Mr. Goenka was born and raised in Burma. While living in Burma he had the good fortune to come into contact with U Ba Khin, and to learn the technique of Vipassana from him. After receiving training from his teacher for fourteen years, Mr. Goenka settled in India and began teaching Vipassana in 1969. In a country still sharply divided by differences of caste and religion, the courses offered by Mr. Goenka have attracted thousands of people from every part of society. In addition, many people from countries around the world have come to join courses in Vipassana meditation.

							<br/><br/>Mr. Goenka has taught tens of thousands of people in more than 300 courses in India and in other countries, East and West. In 1982 he began to appoint assistant teachers to help him to meet the growing demand for courses. Meditation centres have been established under his guidance in India, Canada, the United States, Australia, New Zealand, France, the United Kingdom, Japan, Sri Lanka, Thailand, Burma, Nepal and other countries.

							The technique which S.N.Goenka teaches represents a tradition that is traced back to the Buddha. The Buddha never taught a sectarian religion; he taught Dhamma - the way to liberation - which is universal. In the same tradition, Mr. Goenka's approach is totally non-sectarian. For this reason, his teaching has a profound appeal to people of all backgrounds, of every religion and no religion, and from every part of the world.
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>U.N. Peace Summit</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<img style={styles.img} src="http://www.dhamma.org/images/sng/sng-un-speaking.jpg" alt="un-peace-summit"/>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							In the Summer of 2000, Mr. Goenka, the principal teacher of Vipassana Meditation visited the United States and spoke, along with other world spiritual leaders, at the "Millennium World Peace Summit" at the United Nations World Headquarters in New York.

							<br/><br/><h4 style={{textAlign: "center"}}>S.N. Goenka Addresses Peace Summit</h4>

							By Bill Higgins <br/>
							Date: August 29, 2000 <br/>
							NEW YORK — Vipassana Acharya S.N. Goenka addressed the delegates to the Millennium World Peace Summit as they gathered in the United Nations General Assembly Hall today - first ever gathering of religious and spiritual leaders in the UN.

							<br/><br/>Mr. Goenka's speech, in the session entitled Conflict Transformation, focussed on the themes of religious harmony, tolerance and peaceful coexistence.

							<br/><br/>"Rather than converting people from one organized religion to another organized religion," said Mr. Goenka, "we should try to convert people from misery to happiness, from bondage to liberationand from cruelty to compassion."

							<br/><br/>Mr. Goenka gave his speech during the Summit's afternoon session to a group that included roughly two thousand delegates and observers. Mr. Goenka spoke in the session that followed CNN founder Ted Turner's speech. Mr. Turner is one of the Summit's financial patrons.

							<br/><br/>In keeping with the Summit's theme of seeking world peace, Mr. Goenka stressed in his speech that peace in the world cannot be achieved unless there is peace within individuals. "There cannot be peace in the world when people have anger and hatred in their hearts. Only with love and compassion in the heart is world peace attainable."

							<br/><br/>An important aspect of the Summit is the effort to reduce sectarian conflict and tension. Regarding this Mr. Goenka said, "When there is anger and hatred within, one becomes miserable irrespective of whether one is a Christian or a Hindu or a Muslim."

							<br/><br/>Similarly he said to a thunderous applause, "One who has love and compassion with a pure heart experiences the Kingdom of Heaven within. This is the Law of Nature, or if one would rather, God's will."

							<br/><br/>Appropriately to a crowd that included major world religious leaders he said, "Let us focus on the commonalties of all religions, on the inner core of all religions which is purity of heart. We should all give importance to this aspect of religion and avoid conflict over the outer shell of the religions, which is various rites, rituals, festivals and dogmas."

							<br/><br/>In summing up Mr. Goenka quoted the Emperor Ashoka who in one of his Rock Edicts said, "One should not honor only one's own religion and condemn other religions. Instead, one should honor other religions for various reasons. By so doing one helps one's own religion to grow and also renders service to the religions of others. In acting otherwise one digs the grave of one's own religion and harms other religions as well. Someone who honors his own religion and condemns other religions may do so out of devotion to his religion, thinking, 'I will glorify my religion'; but his actions injure his own religion more gravely. Concord is good. Let all listen and be willing to listen to the doctrines professed by others."

							<br/><br/>U.N. Secretary-General Kofi Annan has called the Summit "a gathering of the world's pre-eminent religious and spiritual leaders in a united call for peace that will hopefully strengthen the prospect for peace as we enter the new millennium."

							<br/><br/>Spiritual leaders who've been invited to the U.N.'s first-ever conference of this kind include Pramukh Swami of Swami Narayana Movement, Swami Dayananda Saraswati, Swami Agniwesh, Mata Amritanandamayi Devi and Dada Wasvani as well as eminent scholars such as Dr Karan Singh and L. M. Singhvi.

							<br/><br/>In reference to the participants' religious and cultural diversity, Annan has said, "the United Nations is a tapestry, not only of suits and saris but of clerics' collars, nuns' habits and lamas' robes; of miters, skullcaps and yarmulkes."

							<br/><br/>Though Annan has been repeatedly questioned about the Tibetan leaders absence, he has attempted to steer questions back to the Summit's goal, which he says are "to restore religion to its rightful role as peacemaker and pacifier — the problem of conflict is never the Bible or the Torah or the Koran. Indeed, the problem is never the faith — it is the faithful and how we behave towards each other. You must, once again, teach your faithful the ways of peace and the ways of tolerance."

							<br/><br/>The U.N. leader's hope is that since 83% of the world's population adheres to a formal religious or spiritual belief system, these religious leaders can influence their followers towards peace.

							<br/><br/>The U.N. is hoping the conference will move the world community towards, in the words of one document, "to acknowledge its spiritual potential and recognize that it is within our power to eradicate the worst form of human brutality — war — as well as one of the root causes of war — poverty. The time is ripe for the world's spiritual leadership to work more closely with the United Nations in its effort to address the pressing needs of humankind."

							<br/><br/>The Summit will end this Thursday on 31 August when participants will sign a Declaration for World Peace and form an International Advisory Council of Religious and Spiritual Leaders, which will work with the United Nations and the U.N. Secretary-General in peacemaking and peacekeeping efforts.

							"The goal of the International Advisory Council of Religious and Spiritual Leaders is to enhance and strengthen the work of the United Nations," said Bawa Jain, the Secretary-General of the World Peace Summit. "It is our earnest hope that in times of conflict, the world's great religious and spiritual leaders can be parachuted into these hotspot to seek non-violent resolutions to the conflicts."
						</p>
					</Cell>
					<Cell 
						style={styles.cellHeader}
						verticalAlign="top"
						width="1"
					>
						<h3 style={styles.h3}>U.N. Address</h3>
					</Cell>
					<Cell 
						style={styles.cell}
						verticalAlign="top"
						width="1"
					>
						<p>
							<h4 style={{textAlign: "center"}}>Universal Spirituality for Peace By S.N. Goenka</h4>

							<h5 style={{textAlign: "center"}}>(also available as a <a href="">video</a>)</h5>

							<i>The following is the complete text of the address given by Mr. Goenka on Tuesday, 29 August 2000 in the United Nations General Assembly Hall to the participants of the Millennium World Peace Summit.</i>

							<br/><br/>When there is darkness, light is needed. Today, with so much agony caused by violent conflict, war and bloodshed, the world badly needs peace and harmony. This is a great challenge for religious and spiritual leaders. Let us accept this challenge.

							<br/><br/>Every religion has an outer form or shell, and an inner essence or core. The outer shell consists of rites, rituals, ceremonies, beliefs, myths and doctrines. These vary from one religion to another. But there is an inner core common to all religions: the universal teachings of morality and charity, of a disciplined and pure mind full of love, compassion, goodwill and tolerance. It is this common denominator that religious leaders ought to emphasize, and that religious adherents ought to practice. If proper importance is given to the essence of all religions and greater tolerance is shown for their superficial aspects, conflict can be minimized.

							<br/><br/>All persons must be free to profess and follow their faith. In doing so, however, they must be careful not to neglect the practice of the essence of their religion, not to disturb others by their own religious practices, and not to condemn or belittle other faiths.

							<br/><br/>Given the diversity of faiths, how do we surmount the differences and achieve a concrete plan for peace? The Buddha, the Enlightened One, was often approached by people of different views. To them he would say, "Let us set aside our differences. Let us give attention to what we can agree on, and let us put it into practice. Why quarrel?" That wise counsel still retains its worth today.

							<br/><br/>I come from an ancient land that has given rise to many different schools of philosophy and spirituality over the millennia. Despite isolated instances of violence, my country has been a model of peaceful co-existence. Some 2300 years ago it was ruled by Ashoka the Great, whose empire extended from present-day Afghanistan to Bangladesh. Throughout his realm, this compassionate ruler caused edicts to be inscribed on stone, proclaiming that all faiths should be respected; and as a result, followers of all spiritual traditions felt secure under his sway. He asked people to live a moral life, to respect parents and elders, and to abstain from killing. The words in which he exhorted his subjects are still relevant today:

							<br/><br/><i>One should not honor only one's own religion and condemn other religions. Instead, one should honor other religions for various reasons. By so doing one helps one's own religion to grow and also renders service to the religions of others. In acting otherwise one digs the grave of one's own religion and harms other religions as well. Someone who honors his own religion and condemns other religions may do so out of devotionto his religion, thinking, 'I will glorify my religion'; but his actions injure his own religion more gravely. Concord is good. Let all listen and be willing to listen to the doctrines professed by others. (Rock Edict12)</i>

							<br/><br/>Emperor Ashoka represents a glorious tradition of tolerant co-existence and peaceful synthesis. That tradition lives on among governments and rulers today. An example is the noble monarch of Oman, who has donated land for churches and temples of other faiths while practicing his own religion with all devotion and diligence. I am sure that such compassionate rulers and governments will continue to arise in future in many lands around the world. As it is said, "Blessed are the peacemakers, for they shall be called sons of God."

							<br/><br/>It is all too clear that the votaries of violence primarily hurt their own kith and kin. They may do so directly, through their intolerance, or indirectly, by provoking a violent response to their actions. On the other hand, it is said, "Blessed are the merciful, for they shall obtain mercy." This is the law of nature. It may equally be called the decree or way of God. The Buddha said, "Animosity can be eradicated not by animosity but only by its opposite. This is an eternal Dharma [spiritual law]." What is called Dharma in India has nothing to do with Hinduism, Buddhism, Jainism, Christianity, Islam, Judaism, Sikhism or any other "ism". It is this simple truth: before you harm others, you first harm yourself by generating mental negativity; and by removing the negativity, you can find peace within and strengthen peace in the world.

							<br/><br/><h4 style={{textAlign: "center"}}>Peace of Mind For World Peace</h4>

							Every religion worthy of the name calls on its followers to live a moral and ethical way of life, to attain mastery over the mind and to cultivate purity of heart. One tradition tells us, "Love thy neighbor"; another says, Salaam walekum - "May peace be with you"; still another says, Bhavatu sabbamangalam or Sarve bhavantu sukhinah - "May all beings be happy." Whether it is the Bible, the Koran or the Gita, the scriptures call for peace and amity. From Mahavir to Jesus, all great founders of religions have been ideals of tolerance and peace. Yet our world is often driven by religious and sectarian strife, or even war - because we give importance only to the outer shell of religion and neglect its essence. The result is a lack oflove and compassion in the mind.

							<br/><br/>Peace in the world cannot be achieved unless there is peace within individuals. Agitation and peace cannot co-exist. One way to achieve inner peace is Vipassana or insight meditation - a non-sectarian, scientific, results-oriented technique of self-observation and truth realization. Practice of this technique brings experiential understanding of how mind and body interact. Everytime negativity arises in the mind, such as hatred, it triggers unpleasant sensations within the body. Every time the mind generates selfless love, compassion and good will, the entire body is flooded with pleasant sensations. Practice of Vipassana also reveals that mental action precedes every physical and vocal action, determining whether that action will be wholesome or unwholesome. Mind matters most. That is why we must find practical methods to make the mind peaceful and pure. Such methods will amplify the effectiveness of the joint declaration emerging from this World Peace Summit.

							<br/><br/>Ancient India gave two practices to the world. One is the physical exercise of yoga postures (Asanas) and breath control (Pranayama) for keeping the body healthy. The other is the mental exercise of Vipassana for keeping the mind healthy. People of any faith can and do practice both these methods. At the same time, they may follow their own religions in peace and harmony; there is no necessity for conversion, a common source of tension and conflict.

							<br/><br/>For society to be peaceful, more and more members of society must be peaceful. As leaders, we have a responsibility to set an example, to be an inspiration. A sage once said, "A balanced mind is necessary to balance the unbalanced mind of others."

							<br/><br/>More broadly, a peaceful society will find a way to live in peace with its natural setting. We all understand the need to protect the environment, to stop polluting it. What prevents us from acting on this understanding is the stock of mental pollutants, such as ignorance, cruelty or greed. Removing such pollutants will promote peace among human beings, as well as a balanced, healthy relationship between human society and its natural environment. This is how religion can foster environmental protection.

							<br/><br/><h4 style={{textAlign: "center"}}>Non-Violence: the Key to a Definition of Religion</h4>

							There are bound to be differences between religions. However, by gathering at this World Peace Summit, leaders of all the major faiths have shown that they want to work for peace. Let peace then be the first principle of "universal religion". Let us declare together that we shall abstain from killing, that we condemn violence. I also urge political leaders to join in this declaration, given the key role they play in bringing either peace or war. Whether or not they join us, at least let us all make avow here and now: instead of condoning violence and killing, let us declare that we unconditionally condemn such deeds, especially violence perpetrated in the name of religion.

							<br/><br/>Certain spiritual leaders have had the sagacity and courage to condemn violence committed in the name of their own faith. There may be different philosophical and theological views of the act of seeking forgiveness or regretting past violence and killing; but the very acknowledgment of violence performed in the past implies that it was wrong and that it will not be condoned in future.

							<br/><br/>Under the aegis of the United Nations, let us try to formulate a definition of religion and spirituality highlighting non-violence, and refusing to countenance violence or killing. There would be no greater misfortune for humanity than a failure to define religion as synonymous with peace. This Summit could propose a concept of "universal religion" or "non-sectarian spirituality", for endorsement by the U.N.

							<br/><br/>I am sure that this Summit will help focus the world's attention on the true purpose of religion:

							<br/><br/><i>Religion sets us not apart;
							<br/>it teaches peace and purity of heart.</i>

							<br/><br/>I congratulate the organizers of this historic Summit for their vision and efforts. And I congratulate the religious and spiritual leaders who have had the maturity to work for reconciliation, giving hope to humanity that religion and spirituality will lead to a peaceful future.

							<br/><br/>May all beings be free from aversion and be happy.

							<br/><br/>May peace and harmony prevail.
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

export default AboutSNGoenka;