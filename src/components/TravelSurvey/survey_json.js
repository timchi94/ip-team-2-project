export const surveyData = [
    {
        section: "What can we customize for you today?",
        questions: [
            { name: "romanticGetaway", label: "Romantic Getaway", type: "rating" },
            { name: "familyVacation", label: "Family Vacation", type: "rating" },
            { name: "businessTrip", label: "Business Trip", type: "rating" },
            { name: "exploringHobbies", label: "Exploring Specific Hobbies", type: "rating" },
        ],
    },
    {
        section: "What’s your travel style for this trip?",
        questions: [
            { name: "laidBackTraveler", label: "Laid-back Traveler", type: "rating" },
            { name: "adrenalineJunkie", label: "Adrenaline Junkie", type: "rating" },
            { name: "culturalNerd", label: "Cultural Nerd", type: "rating" },
            { name: "allOutFoodie", label: "All Out Foodie", type: "rating" },
            { name: "natureEnthusiast", label: "Nature Enthusiast", type: "rating" },
            { name: "allOutNightlife", label: "All Out Nightlife", type: "rating" },
        ],
    },
    {
        section: "What is the budget for this trip?",
        questions: [
            { name: "tightBudget", label: "Tight on Budget", type: "rating" },
            { name: "flexibleBudget", label: "Flexible", type: "rating" },
            { name: "wantToSplurge", label: "Want to Splurge", type: "rating" },
        ],
    },
    {
        section: "Which of the following do you prefer for this trip?",
        questions: [
            { name: "cityCenter", label: "City Center", type: "rating" },
            { name: "beachfront", label: "Beachfront", type: "rating" },
            { name: "ruralLocation", label: "Rural Location", type: "rating" },
        ],
    },
    {
        section: "Additional Preferences",
        questions: [
            {
                name: "connectSocialMedia",
                label: "Would you be interested in connecting your social media for further recommendations?",
                type: "radio",
                options: ["Yes", "No"],
            },
            {
                name: "explorePackages",
                label: "Would you like to explore experience packages?",
                type: "radio",
                options: ["Yes", "No"],
            },
        ],
    },
];