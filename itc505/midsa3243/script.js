const story = {
    start: {
        text: "You wake up on a mystical island. A wise old astrologer approaches you.",
        choices: [
            { choice: "Ask about your future", consequence: "future" },
            { choice: "Explore the island", consequence: "explore" }
        ],
        image: "askfuture.jpg"
    },
    future: {
        text: "The astrologer predicts a challenging journey ahead. What will you do?",
        choices: [
            { choice: "Accept the challenge", consequence: "challenge" },
            { choice: "Ignore the prediction", consequence: "ignore" }
        ],
        image: "acceptnot.jpg"
    },
    explore: {
        text: "While exploring, you find a hidden cave. Enter or continue exploring?",
        choices: [
            { choice: "Enter the cave", consequence: "cave" },
            { choice: "Continue exploring", consequence: "continue" }
        ],
        image: "willing.jpg"
    },
    challenge: {
        text: "You bravely accept the challenge and embark on a perilous adventure.",
        choices: [
            { choice: "Face the dragon", consequence: "faceDragon" },
            { choice: "Sneak past the dragon", consequence: "sneakDragon" }
        ],
        image: "sneak.jpg"
    },
    ignore: {
        text: "You choose to ignore the astrologer's prediction and lead a peaceful life.",
        choices: [
            { choice: "Become a farmer", consequence: "farmer" },
            { choice: "Join the circus", consequence: "circus" }
        ],
        image: "ignore.jpg"
    },
    cave: {
        text: "Upon entering the cave, you discover ancient treasures. What will you do?",
        choices: [
            { choice: "Take the treasures", consequence: "treasures" },
            { choice: "Leave the treasures", consequence: "leave" }
        ],
        image: "treasure.jpg"
    },
    continue: {
        text: "You decide to continue exploring the island and encounter magical creatures.",
        choices: [
            { choice: "Befriend the creatures", consequence: "befriendCreatures" },
            { choice: "Run away from the creatures", consequence: "runCreatures" }
        ],
        image: "creatures.jpg"
    },
    treasures: {
        text: "Congratulations! You become rich with the ancient treasures.",
        image: "rich.jpg"
    },
    leave: {
        text: "You leave the treasures untouched, valuing the journey more than the riches.",
        image: "leaving.jpg"
    },
    faceDragon: {
        text: "You face the dragon and emerge victorious, gaining respect and glory.",
        image: "face.jpg"
    },
    sneakDragon: {
        text: "You successfully sneak past the dragon and uncover hidden secrets.",
        image: "succ.jpg"
    },
    farmer: {
        text: "You become a successful farmer, living a peaceful and prosperous life.",
        image: "farm.jpg"
    },
    circus: {
        text: "You join the circus and travel the world, experiencing exciting adventures.",
        image: "cir.jpg"
    },
    befriendCreatures: {
        text: "You befriend the magical creatures, and together, you create a harmonious community.",
        image: "hor.jpg"
    },
    runCreatures: {
        text: "You run away from the magical creatures, missing out on the opportunity for a magical alliance.",
        image: "magical.jpg"
    }
};

function startGame() {
    document.getElementById("game-setup").style.display = "none";
    document.querySelector('.story').style.display = 'block';
    showStory("start");
}

function showStory(stage) {
    const currentStage = story[stage];
    const storyText = document.getElementById("story-text");
    const storyImage = document.getElementById("story-image");
    const choices = document.querySelector(".choices");

    storyText.textContent = currentStage.text;
    storyImage.src = currentStage.image;

    choices.innerHTML = "";

    if (currentStage.choices) {
        currentStage.choices.forEach((choice) => {
            const button = document.createElement("button");
            button.textContent = choice.choice;
            button.addEventListener("click", () => showStory(choice.consequence));
            button.style.backgroundColor = getRandomColor(); // Set a random background color
            choices.appendChild(button);
        });
    } else {
        endGame(currentStage);
    }
}

function endGame(result) {
    const storyText = document.getElementById("story-text");
    const choices = document.querySelector(".choices");
    const storyImage = document.getElementById("story-image");

    storyText.textContent = result.text;
    choices.innerHTML = "";
    storyImage.src = result.image;
}

function getRandomColor() {
    const colors = ["red", "green", "yellow", "purple", "orange"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

startGame();