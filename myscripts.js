const iAmAffirmations = [
  "I am pleased with my work.",
  "I am brave and strong.",
  "I am focused and concentrated.",
  "I am a good thinker.",
  "I am intuitive.",
  "I am expressive of my knowledge.",
  "I am safe and secure.",
  "I am filled with peace and calm.",
  "I am confident in myself.",
  "I am courageous and brave.",
  "I am filled with positive energy.",
  "I am thinking clearly.",
  "I am relaxed and alert.",
  "I am patient with myself.",
  "I am worthy of goodness.",
  "I am accepting of the outcome.",
  "I am expanding my knowledge every day.",
  "I am doing my best, and my best is good enough.",
];

function generate() {
  console.log("clicked");
  let randomNumber = Math.floor(Math.random() * iAmAffirmations.length);
  document.getElementById("quotes").innerHTML = iAmAffirmations[randomNumber];
}
