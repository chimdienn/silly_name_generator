import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const sillyName = randomAdj + " " + randomNoun;
  res.render("index.ejs", {
    name: sillyName,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adjectives = [
  "Wobbly", "Goofy", "Bouncy", "Zany", "Loopy", "Squishy", "Squeaky", "Jolly", "Clumsy", "Jiggly",
  "Wacky", "Dizzy", "Sassy", "Quirky", "Grumpy", "Giggly", "Chubby", "Bubbly", "Nutty", "Spunky",
  "Zesty", "Nifty", "Dorky", "Peppy", "Jumpy", "Giddy", "Snappy", "Tizzy", "Mushy", "Fuzzy",
  "Gooey", "Wiggly", "Peculiar", "Snoozy", "Cuddly", "Bashful", "Cheeky", "Drowsy", "Funky", "Perky",
  "Witty", "Jazzy", "Silly", "Looney", "Jolly", "Noodle-brained", "Goofball", "Zigzaggy", "Quacky", "Twitchy",
  "Dopey", "Wobblesome", "Zippy", "Gargly", "Bloopity", "Gobbly", "Rambunctious", "Bamboozled", "Wonky", "Frothy",
  "Plumpish", "Eccentric", "Kooky", "Lanky", "Dorkish", "Dandy", "Frisky", "Hokey", "Wiggly", "Noodle-y",
  "Barmy", "Bonkers", "Squeamish", "Wheezy", "Gleeful", "Jingly", "Topsy-turvy", "Haphazard", "Mischievous", "Quibbly",
  "Gobsmacked", "Zonky", "Scrawny", "Cockeyed", "Gargantuan", "Ludicrous", "Scurrilous", "Boisterous", "Flimsy", "Bloopish",
  "Fidgety", "Wistful", "Toothy", "Sproingy", "Higgledy-piggledy", "Chirpy", "Tingly", "Doodly", "Snazzy", "Jumbly"
];

const nouns = [
  "Banana", "Pancake", "Penguin", "Pickle", "Unicorn", "Dinosaur", "Octopus", "Sausage", "Burrito", "Squirrel",
  "Cabbage", "Marshmallow", "Muffin", "Spaghetti", "Taco", "Llama", "Waffle", "Cactus", "Bubble", "Giraffe",
  "Pudding", "Spoon", "Pumpkin", "Noodle", "Cupcake", "Toaster", "Lobster", "Jellybean", "Snail", "Mushroom",
  "Meatball", "Sock", "Toadstool", "Butterfly", "Walrus", "Toothpick", "Chicken", "Flamingo", "Parrot", "Zebra",
  "Gummybear", "Popsicle", "Caterpillar", "Donut", "Coconut", "Sloth", "Gnome", "Hamster", "Hedgehog", "Goblin",
  "Peanut", "Sardine", "Chihuahua", "Seahorse", "Bubblegum", "Dragon", "Frodo", "Leprechaun", "Squid", "Turtle",
  "Koala", "Sasquatch", "Butterball", "Wombat", "Sneeze", "Booger", "Lemur", "Worm", "Goose", "Sasquatch",
  "Fuzzball", "Tofu", "Pineapple", "Porcupine", "Blimp", "Bouncyball", "Slinky", "Bagel", "Chimichanga", "Plunger",
  "Ostrich", "Moth", "Blobfish", "Doughnut", "Gobstopper", "Platypus", "Fiddlesticks", "Gong", "Kazoo", "Yeti",
  "Jellyfish", "Hiccup", "Fleabag", "Lollipop", "Gorgonzola", "Trampoline", "Turnip", "Velociraptor", "Wig", "Yogurt"
];
