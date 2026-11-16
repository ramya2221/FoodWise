
function goToAssessment() {
    document.getElementById("assessment").scrollIntoView({
        behavior: "smooth"
    });
}

let currentLanguage = "en";

const translations = {
    en: {
        navHome: "Home",
        navProblems: "Problems & Solutions",
        navAI: "AI Algorithms",
        navHow: "How It Works",
        navAssessment: "Food Assistant",
        heading: "Build Better Food Habits with FoodWise",
        description: "Understand everyday eating patterns, identify unhealthy food habits and discover affordable healthy food choices.",
        startBtn: "Get Started →",
        problemTitle: "Food Habit Problems & Solutions",
        algorithmTitle: "AI Algorithms Used",
        formHeading: "Food Habit Assessment",
        formDescription: "Answer these questions to see your demonstration results.",
        snackLabel: "1. How often do you eat packaged snacks?",
        fruitLabel: "2. How often do you eat fruits and vegetables?",
        nutritionLabel: "3. How well do you understand balanced nutrition?",
        timingLabel: "4. Are your meal timings regular?",
        waterLabel: "5. How often do you remember to drink water?",
        analyseBtn: "Analyse My Food Habits",
        resultHeading: "Your Food Habit Analysis"
    },

    te: {
        navHome: "హోమ్",
        navProblems: "సమస్యలు మరియు పరిష్కారాలు",
        navAI: "AI అల్గారిథమ్స్",
        navHow: "ఇది ఎలా పనిచేస్తుంది",
        navAssessment: "ఆహార సహాయకుడు",
        heading: "FoodWise తో మంచి ఆహారపు అలవాట్లను పెంపొందించుకోండి",
        description: "మీ రోజువారీ ఆహారపు అలవాట్లను అర్థం చేసుకొని, ఆరోగ్యకరమైన ఆహార ఎంపికలను తెలుసుకోండి.",
        startBtn: "ప్రారంభించండి →",
        problemTitle: "ఆహారపు సమస్యలు మరియు పరిష్కారాలు",
        algorithmTitle: "ఉపయోగించిన AI అల్గారిథమ్స్",
        formHeading: "ఆహారపు అలవాట్ల విశ్లేషణ",
        formDescription: "మీ ఆహారపు అలవాట్ల గురించి సమాధానాలు ఇవ్వండి.",
        snackLabel: "1. మీరు ప్యాకేజ్డ్ స్నాక్స్ ఎంత తరచుగా తింటారు?",
        fruitLabel: "2. పండ్లు మరియు కూరగాయలు ఎంత తరచుగా తింటారు?",
        nutritionLabel: "3. సమతుల్య ఆహారం గురించి మీకు ఎంత అవగాహన ఉంది?",
        timingLabel: "4. మీ భోజన సమయాలు క్రమంగా ఉంటాయా?",
        waterLabel: "5. మీరు నీరు తాగడం ఎంత తరచుగా గుర్తుంచుకుంటారు?",
        analyseBtn: "నా ఆహారపు అలవాట్లను విశ్లేషించండి",
        resultHeading: "మీ ఆహారపు అలవాట్ల విశ్లేషణ"
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "te" : "en";

    const t = translations[currentLanguage];

    Object.keys(t).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = t[id];
        }
    });

    document.getElementById("languageBtn").textContent =
        currentLanguage === "en" ? "తెలుగు" : "English";

    updateOptions();
}

function updateOptions() {
    const telugu = currentLanguage === "te";

    const optionSets = {
        snacks: [
            ["Select answer", "Almost every day", "2–3 times a week", "Rarely"],
            ["సమాధానం ఎంచుకోండి", "దాదాపు ప్రతిరోజూ", "వారానికి 2–3 సార్లు", "అరుదుగా"]
        ],
        fruits: [
            ["Select answer", "Daily", "Sometimes", "Rarely"],
            ["సమాధానం ఎంచుకోండి", "ప్రతిరోజూ", "కొన్నిసార్లు", "అరుదుగా"]
        ],
        nutrition: [
            ["Select answer", "I understand it well", "I know a little", "I need more awareness"],
            ["సమాధానం ఎంచుకోండి", "నాకు బాగా తెలుసు", "కొంతవరకు తెలుసు", "మరింత అవగాహన కావాలి"]
        ],
        timings: [
            ["Select answer", "Usually regular", "Sometimes irregular", "Often irregular"],
            ["సమాధానం ఎంచుకోండి", "సాధారణంగా క్రమంగా", "కొన్నిసార్లు క్రమం తప్పుతాయి", "తరచుగా క్రమం తప్పుతాయి"]
        ],
        water: [
            ["Select answer", "Regularly", "Sometimes forget", "Often forget"],
            ["సమాధానం ఎంచుకోండి", "క్రమం తప్పకుండా", "కొన్నిసార్లు మర్చిపోతాను", "తరచుగా మర్చిపోతాను"]
        ]
    };

    for (const id in optionSets) {
        const select = document.getElementById(id);
        const oldValue = select.value;

        select.querySelectorAll("option").forEach((option, i) => {
            option.textContent = optionSets[id][telugu ? 1 : 0][i];
        });

        select.value = oldValue;
    }
}

document.getElementById("foodForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        snacks: document.getElementById("snacks").value,
        fruits: document.getElementById("fruits").value,
        nutrition: document.getElementById("nutrition").value,
        timings: document.getElementById("timings").value,
        water: document.getElementById("water").value
    };

    const te = currentLanguage === "te";
    const suggestions = [];

    if (answers.snacks === "often") {
        suggestions.push(te
            ? "ప్యాకేజ్డ్ స్నాక్స్ బదులుగా ఇంట్లో తయారుచేసిన స్నాక్స్ లేదా పండ్లను ఎంచుకోండి."
            : "Try replacing some packaged snacks with homemade snacks, roasted chana or seasonal fruits."
        );
    }

    if (answers.fruits === "rarely" || answers.fruits === "sometimes") {
        suggestions.push(te
            ? "మీ రోజువారీ ఆహారంలో కాలానుగుణ పండ్లు మరియు కూరగాయలను చేర్చుకోండి."
            : "Include seasonal fruits and vegetables more regularly in your meals."
        );
    }

    if (answers.nutrition === "low" || answers.nutrition === "some") {
        suggestions.push(te
            ? "సమతుల్య ఆహారం మరియు వివిధ ఆహార సమూహాల గురించి తెలుసుకోండి."
            : "Learn about balanced meals and include a variety of food groups."
        );
    }

    if (answers.timings === "irregular" || answers.timings === "sometimes") {
        suggestions.push(te
            ? "మీ భోజన సమయాలను ముందుగా ప్లాన్ చేసుకొని క్రమమైన దినచర్యను పాటించండి."
            : "Plan your meal times and try to maintain a regular daily routine."
        );
    }

    if (answers.water === "rarely" || answers.water === "sometimes") {
        suggestions.push(te
            ? "రోజంతా క్రమం తప్పకుండా నీరు తాగడం గుర్తుంచుకోండి."
            : "Keep water nearby and remember to drink regularly throughout the day."
        );
    }

    if (suggestions.length === 0) {
        suggestions.push(te
            ? "మీరు తెలిపిన అలవాట్లు ప్రోత్సాహకరంగా ఉన్నాయి. మంచి అలవాట్లను కొనసాగించండి."
            : "Your reported habits look encouraging. Continue maintaining a varied and regular eating routine."
        );
    }

    const heading = document.getElementById("resultHeading");
    heading.textContent = translations[currentLanguage].resultHeading;

    const result = document.getElementById("resultContent");
    result.replaceChildren();

    suggestions.forEach((suggestion, index) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = `${index + 1}. ${suggestion}`;
        result.appendChild(paragraph);
    });

    document.getElementById("results").hidden = false;

    document.getElementById("results").scrollIntoView({
        behavior: "smooth"
    });
});
