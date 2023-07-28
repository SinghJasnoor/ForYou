const text = `❤️ My Heartfelt Apologies To My Best Friend ❤️
✨ I hope this letter finds you well ✨. I wanted to take a moment to tell you how special you are to me.
Your presence in my life brings immense joy and happiness, and I cherish our friendship deeply.
I also want to apologize for any mistakes I may have made that might have hurt or upset you. Please know
that I never intended to cause any pain, and I sincerely regret my actions. You mean the world to me, and
I never want anything to come between us. You are a true friend, and I am grateful for your understanding
and forgiveness. I promise to be more mindful and considerate in the future. Let's continue to cherish
this beautiful bond we share.

💗 With love and heartfelt apologies 💗`;

const typingEffectElement = document.getElementById("typingEffect");
let index = 0;

function typeMessage() {
  if (index < text.length) {
    typingEffectElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeMessage, 30); // Adjust the typing speed here (lower value means faster typing)
  }
}

typeMessage();