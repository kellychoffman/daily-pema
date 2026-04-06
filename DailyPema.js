// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: sun;

const QUOTES = [
  "The sense of \"no big deal\" is very important. Think of \"no big deal\" not as a cynical statement but a statement of humor and flexibility. You've seen it all and seeing it all has caused you to love it all.",
  "The fixed identity is our false security. We maintain it by filtering all our experience through this perspective.",
  "We could say that the real cause of suffering is not being able to tolerate uncertainty \u2014 and thinking that it's perfectly sane, perfectly normal, to deny the fundamental groundlessness of being human.",
  "We are fundamentally good, not fundamentally flawed, and we can trust this.",
  "With a fixed identity, we have to busy ourselves with trying to rearrange reality, because reality doesn't always conform to our view.",
  "As individuals we, too, have plenty of fundamentalist tendencies. We use them to comfort ourselves. We grab on to a position or belief as a way of neatly explaining reality, unwilling to tolerate the uncertainty and discomfort of staying open to other possibilities.",
  "Chaos should be regarded as extremely good news.",
  "Sow positive seeds and make positive imprints in the unconscious. When someone harms you, you might replace the hateful thought, word, or deed with the thought of: 'May I and this bastard attain enlightenment together.'",
  "When you get angry, there's no point in beating yourself up. Just say, 'Right, this is what happens with me in these particular situations.'",
  "It's never too late to pause in the whole situation. Even after you've already blown it by your own evaluation of yourself.",
  "The more afraid you are, the more of a fundamentalist you become. The definition of fundamentalism is you have to have it be a certain way \u2014 and you get your security from that.",
  "I started saying, 'What's happening here? I don't like this.' Period. End of story.",
  "If you want a certain result \u2014 such as to be more happy \u2014 it's not going to happen later by wishing for it now; it's going to happen by how you work with what is occurring in your life right now.",
  "There's always going to be things arising in your life that are going to be difficult for you. There will be injustice in the world. There will be cruelty and violence.",
  "As long as there is this charge in our likes and dislikes, as long as we get hooked by our views and opinions, we are still strengthening habits of aggression.",
  "The instruction is to not underestimate the things in your life that bring you happiness. Conscientiously note throughout the day anything that is pleasing. Little tiny things.",
  "It's a nice feeling to just be.",
  "One can appreciate and celebrate each moment \u2014 there's nothing more sacred. There's nothing more vast or absolute.",
  "Whatever arises is fresh; the essence of realization.",
  "Everything that occurs is not only usable and workable but is actually the path itself. We can use everything that happens to us as the means for waking up.",
  "When you aspire to lighten up, you begin to have a sense of humor.",
  "Another basic support for a joyful mind is curiosity: paying attention \u2014 taking an interest in the world around you.",
  "Anything out of the ordinary will help. You can go to the window and look at the sky, you can splash cold water on your face, you can sing in the shower, you can go jogging \u2014 anything that's against your usual pattern.",
  "Since death is certain, but the time of death is uncertain, what is the most important thing?",
  "Although it is embarrassing and painful, it is very healing to stop hiding from yourself.",
  "By knowing yourself, you're coming to know humanness altogether.",
  "You want to stay in there because you are afraid of your feelings and the things that life is going to trigger.",
  "When we are training in the art of peace, we are not given any promises that because of our noble intentions, everything will be okay.",
  "To relate with others compassionately is a challenge.",
  "The dharma can heal our wounds, our very ancient wounds.",
  "The middle way is wide open, but it's tough going.",
  "Whether it's ourselves, our lovers, bosses, children, a local Scrooge, or the political situation, it's more daring and real not to shut anyone out of our hearts.",
  "There is often a discrepancy between our ideals and what we actually encounter.",
  "The big squeeze is one of the most productive places on the spiritual path.",
  "When the teachings tell us to 'make friends with our emotions,' they mean to become more attentive and get to know them better.",
  "Only then is it possible to stay steady, connect with the underlying energy, and discover their insubstantial nature.",
  "When we approach life as an experiment we are willing to approach it this way and that way because, either way, we have nothing to lose.",
  "The trick is not getting caught in hope and fear.",
  "We can put our whole heart into whatever we do; but if we freeze our attitude for or against, we're setting ourselves up for stress.",
  "The fixed idea that we have about ourselves as solid and separate from each other is painfully limiting.",
  "Self-importance hurts us, limiting us to the narrow world of our likes and dislikes.",
  "How do we learn to open that door and step through it again and again?",
  "In order to exist there, they have had to develop a zest for challenge and for life.",
  "Rather than persecuting yourself or feeling that something terribly wrong is happening, right there in the moment of sadness and longing, could you relax?",
  "Tigers above, tigers below. This is actually the predicament that we are always in.",
  "Could our minds and our hearts be big enough just to hang out in that space where we're not entirely certain?",
  "True communication can happen only in that open space.",
  "Fundamental richness is available in each moment. The key is to relax.",
  "As long as we're caught up in always looking for certainty and happiness, we will feel weaker and weaker.",
  "Being satisfied with what we already have is a magical golden key to being alive in a full, unrestricted, and inspired way.",
  "Meditation is a process of lightening up, of trusting the basic goodness of what we have and who we are.",
  "Whatever occurs in the confused mind is regarded as the path. Everything is workable.",
  "What seems undesirable in our lives doesn't have to put us to sleep.",
  "There's a common misunderstanding among all the human beings who have ever been born on the earth that the best way to live is to try to avoid pain and just try to get comfortable.",
  "A much more interesting, kind, adventurous, and joyful approach to life is to begin to develop our curiosity.",
  "The essence of bravery is being without self-deception.",
  "Usually we regard loneliness as an enemy.",
  "Shame is a loaded word for westerners. Like most things, it can be seen in a positive or negative light.",
  "Positive shame is recognizing when we've harmed ourselves or anyone else and feeling sorry for having done so.",
  "This path has one very distinct characteristic: it is not prefabricated.",
  "The path is uncharted. It comes into existence moment by moment and at the same time drops away behind us.",
  "Now is the time. If there's any possibility for enlightenment, it's right now, not at some future time.",
  "The breath is used as an object of meditation for many reasons, but one excellent reason is because it's impermanent.",
  "We can learn to rejoice in even the smallest blessings our life holds. It is easy to miss our own good fortune; often happiness comes in ways we don't even notice.",
  "When you hold a fixed idea of yourself, you have to leave out all the parts that you find boring, embarrassing, difficult, or sad.",
  "Everything is support in our awakening.",
  "By focusing on your breathing, you're feeling something rather than concentrating on something.",
  "This is a standard meditation instruction that you can embody in the entirety of your life: do not act out and do not repress.",
  "You could endlessly try to have suffering cease by dealing with outer circumstances \u2014 and that's usually what all of us do.",
  "The natural quality of mind is clear, awake, alert, and knowing. Free from fixation.",
  "No big deal.",
  "When we feel suffering, it doesn't mean that something is wrong.",
  "When your aspiration is to lighten up, you begin to have a sense of humor.",
  "We don't sit in meditation to become good meditators. We sit in meditation so that we'll be more awake in our lives.",
  "In meditation we discover our inherent restlessness.",
  "We are like children building a sand castle.",
  "We habitually erect a barrier called blame that keeps us from communicating genuinely with others.",
  "In the morning when you wake up, reflect on the day ahead and aspire to use it to keep a wide-open heart and mind.",
  "Space permeates everything, every moment of our lives.",
  "How are we going to spend this brief lifetime?",
  "Once we have the fixed idea 'this is me,' then we see everything as a threat or a promise.",
  "Ego is like a room of your own, a room with a view, with the temperature and the smells and the music that you like.",
  "Welcome the present moment as if you had invited it. It is all we ever have so we might as well work with it rather than struggling against it.",
  "I'd like to encourage us all to lighten up, to practice with a lot of gentleness.",
  "Let the hard things in life break you. Let them effect you. Let them change you.",
  "The process of experiencing laziness directly and nonverbally is transformative.",
  "What causes misery is always trying to get away from the facts of life, always trying to avoid pain and seek happiness.",
  "The truth you believe in and cling to makes you unavailable to hear anything new.",
  "Accepting something, by the way, isn't the same as liking it.",
  "Pain is not a punishment, pleasure is not a reward.",
  "We don't know what we're going to see. We are actually opening ourselves beyond our usual, habitual view of ourself and of reality.",
  "Without loving-kindness for ourselves it is difficult, if not impossible, to genuinely feel it for others.",
  "Each moment is just what it is. It might be the only moment of our life; it might be the only strawberry we'll ever eat.",
  "Letting there be room for not knowing is the most important thing of all.",
  "Inner peace begins the moment you choose not to allow another person or event to control your emotions.",
  "People get into a heavy-duty sin and guilt trip, feeling that if things are going wrong, that means that they did something bad and they are being punished.",
  "We can stop struggling with what occurs and see its true face without calling it the enemy.",
  "The nature of things is to change and fall apart and become something else, and you don't have to freak out about it.",
  "We move in that direction but don't have any big expectations of what time of day or what month or year in which we will arrive.",
  "If we commit ourselves to staying right where we are, then our experience becomes very vivid.",
  "This is the process of making friends with ourselves and with our world.",
  "Nobody else can really begin to sort out for you what to accept and what to reject in terms of what wakes you up and what makes you fall asleep.",
  "We see how beautiful and wonderful and amazing things are, and we see how caught up we are.",
  "Precision, gentleness, and the ability to let go are not something that we have to gain, but something that we could bring out, cultivate, rediscover in ourselves.",
  "The problem is that the desire to change is fundamentally a form of aggression toward yourself.",
  "If we see our so-called limitations with clarity, precision, gentleness, goodheartedness, and kindness and, having seen them fully, then let go, open further, we begin to find that our world is more vast and more refreshing and fascinating than we had realized before.",
  "We have a choice. We can spend our whole life suffering because we can't relax with how things really are, or we can relax and embrace the open-endedness of the human situation.",
  "The greatest obstacle to connecting with our joy is resentment.",
  "When we resist change, it's called suffering. But when we can completely let go and not struggle against it, when we can embrace the groundlessness of our situation and relax into its dynamic quality, that's called enlightenment.",
  "Only when we relate with ourselves without moralizing, without harshness, without deception, can we let go of harmful patterns.",
  "Here we are with so much wisdom and tenderness, and \u2014 without even knowing it \u2014 we cover it over to protect ourselves from insecurity.",
  "It's a transformative experience to simply pause instead of immediately fill up the space.",
  "We think that if we just meditated enough or jogged enough or ate perfect food, everything would be perfect. But from the point of view of someone who is awake, that's death.",
  "Seeking security or perfection, rejoicing in feeling confirmed and whole, self-contained and comfortable, is some kind of death. It doesn't have any fresh air.",
  "Running away from the immediacy of our experience is like preferring death to life.",
  "We insist on being Someone, with a capital S. We get security from defining ourselves as worthless or worthy, superior or inferior. Because of this misunderstanding, we suffer.",
  "Every day, at the moment when things get edgy, we can just ask ourselves, 'Am I going to practice peace or am I going to war?'",
  "You're never going to get it all together. There isn't going to be some precious future time when all the loose ends will be tied up.",
  "True compassion does not come from wanting to help out those less fortunate than ourselves but from realizing our kinship with all beings.",
  "As long as our orientation is toward perfection or success, we will never learn about unconditional friendship with ourselves, nor will we find compassion.",
  "When we protect ourselves so we won't feel pain, that protection becomes like armor, like armor that imprisons the softness of the heart.",
  "We already have everything we need. There is no need for self-improvement. We are one blink of an eye away from being fully awake.",
  "Do I prefer to grow up and relate to life directly, or do I choose to live and die in fear?",
  "We think that the point is to pass the test or to overcome the problem, but the truth is that things don't really get solved.",
  "If someone comes along and shoots an arrow into your heart, it's fruitless to stand there and yell at the person.",
  "The only reason that we don't open our hearts and minds to other people is that they trigger confusion in us.",
  "Remind yourself, in whatever way is personally meaningful, that it is not in your best interest to reinforce thoughts and feelings of unworthiness.",
  "As human beings we are as impermanent as everything else is. Every cell in the body is continuously changing.",
  "The most difficult times for many of us are the ones we give ourselves.",
  "Fear is a natural reaction to moving closer to the truth.",
  "Feelings like disappointment, embarrassment, irritation, resentment, anger, jealousy, and fear are actually very clear moments that teach us.",
  "Compassion is not a relationship between the healer and the wounded. It's a relationship between equals.",
  "If we learn to open our hearts, anyone, including the people who drive us crazy, can be our teacher.",
  "The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.",
  "You are the sky. Everything else \u2014 it's just the weather.",
  "To the degree that we look clearly and compassionately at ourselves, we feel confident and fearless about looking into someone else's eyes.",
  "In difficult times, it is only bodhichitta that heals. When inspiration has become hidden, when we feel ready to give up, this is the time when healing can be found in the tenderness of pain itself."
];

function quoteOfTheDay() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var dayOfYear = Math.floor((now - start) / 86400000);
  return QUOTES[dayOfYear % QUOTES.length];
}

function createWidget(quote, size) {
  var w = new ListWidget();
  w.backgroundColor = new Color("#1a1a1a");
  w.setPadding(16, 16, 16, 16);

  var maxLen = size === "small" ? 120 : size === "medium" ? 200 : 500;
  var displayQuote = quote;
  if (quote.length > maxLen) {
    displayQuote = quote.substring(0, maxLen - 1).trimEnd() + "\u2026";
  }

  var quoteText = w.addText("\u201C" + displayQuote + "\u201D");
  quoteText.textColor = new Color("#f5f5f5");
  quoteText.font = Font.lightSystemFont(size === "small" ? 12 : 14);
  quoteText.minimumScaleFactor = 0.7;

  w.addSpacer();

  var author = w.addText("\u2014 Pema Ch\u00F6dr\u00F6n");
  author.textColor = new Color("#bbbbbb");
  author.font = Font.italicSystemFont(size === "small" ? 10 : 12);
  author.rightAlignText();

  return w;
}

var quote = quoteOfTheDay();
var size = config.widgetFamily || "medium";
var widget = createWidget(quote, size);

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
