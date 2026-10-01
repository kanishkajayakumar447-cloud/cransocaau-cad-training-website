const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const courseInfo = {
  CREO: "Training focus: 3D product design, assembly, surface modelling, sheet metal and drafting.",
  SolidWorks: "Training focus: part modelling, assembly, simulation, engineering drawings and rendering.",
  CATIA: "Training focus: advanced surface modelling, product design and automotive applications.",
  AutoCAD: "Training focus: 2D drafting, 3D modelling, construction drawings and industrial design."
};

const modal = document.querySelector("#courseModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");

document.querySelectorAll(".course-btn").forEach(button => {
  button.addEventListener("click", () => {
    const course = button.dataset.course;
    modalTitle.textContent = course;
    modalText.textContent = courseInfo[course] || "Please contact us for course details.";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}
document.querySelector(".modal-close")?.addEventListener("click", closeModal);
modal?.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.querySelector("#modalContact")?.addEventListener("click", closeModal);

const form = document.querySelector("#enquiryForm");
const status = document.querySelector("#formStatus");

form?.addEventListener("submit", e => {
  e.preventDefault();
  status.textContent = "Thank you! Your enquiry has been captured on this demo. Connect the form to the client's email/CRM before production launch.";
  form.reset();
});

/* =====================================================
   V2.0 COURSE-BASED SKILL ASSESSMENT
===================================================== */


/* ================= COURSE QUESTIONS ================= */

const courseQuestions = {

    /* ================= CREO ================= */

    creo: [

        {
            question: "What is commonly used to create a 3D solid from a sketch in CREO?",
            options: [
                "Extrude",
                "Trim",
                "Dimension",
                "Layer"
            ],
            answer: 0
        },

        {
            question: "Which feature is used to remove material from a solid?",
            options: [
                "Extrude",
                "Extrude Cut",
                "Pattern",
                "Datum"
            ],
            answer: 1
        },

        {
            question: "What is the purpose of a datum plane?",
            options: [
                "Create a reference plane",
                "Render a model",
                "Print a drawing",
                "Delete a feature"
            ],
            answer: 0
        },

        {
            question: "Which feature can create repeated geometry?",
            options: [
                "Pattern",
                "Sketch",
                "Measure",
                "Rename"
            ],
            answer: 0
        },

        {
            question: "What is an assembly used for?",
            options: [
                "Combining components",
                "Creating only sketches",
                "Changing colors",
                "Deleting models"
            ],
            answer: 0
        },

        {
            question: "Which environment is commonly used for creating individual parts?",
            options: [
                "Part Design",
                "Drawing",
                "Manufacturing",
                "Simulation"
            ],
            answer: 0
        },

        {
            question: "What does a fully constrained sketch indicate?",
            options: [
                "Geometry is properly constrained",
                "Model is deleted",
                "Drawing is printed",
                "Assembly is complete"
            ],
            answer: 0
        },

        {
            question: "What is a drawing used for?",
            options: [
                "Communicating manufacturing information",
                "Deleting parts",
                "Installing CREO",
                "Changing computer settings"
            ],
            answer: 0
        },

        {
            question: "Which feature creates a rounded edge?",
            options: [
                "Fillet",
                "Extrude",
                "Pattern",
                "Datum"
            ],
            answer: 0
        },

        {
            question: "Which feature creates a beveled edge?",
            options: [
                "Chamfer",
                "Fillet",
                "Shell",
                "Pattern"
            ],
            answer: 0
        }

    ],


    /* ================= SOLIDWORKS ================= */

    solidworks: [

        {
            question: "Which feature is commonly used to create a 3D solid from a sketch?",
            options: [
                "Extruded Boss/Base",
                "Fillet",
                "Chamfer",
                "Shell"
            ],
            answer: 0
        },

        {
            question: "Which feature removes material?",
            options: [
                "Extruded Cut",
                "Boss",
                "Fillet",
                "Mirror"
            ],
            answer: 0
        },

        {
            question: "What is a sketch used for?",
            options: [
                "Creating 2D geometry",
                "Printing a model",
                "Opening an assembly",
                "Rendering only"
            ],
            answer: 0
        },

        {
            question: "What is an assembly used for?",
            options: [
                "Combining components",
                "Creating only sketches",
                "Creating dimensions only",
                "Editing photographs"
            ],
            answer: 0
        },

        {
            question: "Which feature rounds an edge?",
            options: [
                "Fillet",
                "Chamfer",
                "Shell",
                "Pattern"
            ],
            answer: 0
        },

        {
            question: "Which feature creates a slanted edge?",
            options: [
                "Chamfer",
                "Fillet",
                "Mirror",
                "Sweep"
            ],
            answer: 0
        },

        {
            question: "What does the Shell feature do?",
            options: [
                "Creates a hollow part",
                "Creates a sketch",
                "Creates an assembly",
                "Adds a dimension"
            ],
            answer: 0
        },

        {
            question: "What is the purpose of mates in an assembly?",
            options: [
                "Define relationships between components",
                "Change screen brightness",
                "Create drawings",
                "Delete components"
            ],
            answer: 0
        },

        {
            question: "What is a drawing used for?",
            options: [
                "Communicating design and manufacturing information",
                "Creating animations only",
                "Deleting models",
                "Changing file names"
            ],
            answer: 0
        },

        {
            question: "Which feature can duplicate geometry?",
            options: [
                "Pattern",
                "Fillet",
                "Shell",
                "Sketch"
            ],
            answer: 0
        }

    ],


    /* ================= CATIA ================= */

    catia: [

        {
            question: "What is CATIA widely used for?",
            options: [
                "Product and mechanical design",
                "Video editing",
                "Web development",
                "Database management"
            ],
            answer: 0
        },

        {
            question: "Which workbench is used for creating solid parts?",
            options: [
                "Part Design",
                "Drafting",
                "Generative Shape Design",
                "Assembly"
            ],
            answer: 0
        },

        {
            question: "What is Generative Shape Design mainly associated with?",
            options: [
                "Surface modelling",
                "Text editing",
                "Database design",
                "Programming"
            ],
            answer: 0
        },

        {
            question: "What is an assembly used for?",
            options: [
                "Combining components",
                "Creating only surfaces",
                "Creating text",
                "Printing documents"
            ],
            answer: 0
        },

        {
            question: "What is a sketch?",
            options: [
                "2D geometry used as a design reference",
                "A finished assembly",
                "A drawing sheet only",
                "A rendering"
            ],
            answer: 0
        },

        {
            question: "What is the purpose of constraints?",
            options: [
                "Control geometry",
                "Delete geometry",
                "Render models",
                "Open files"
            ],
            answer: 0
        },

        {
            question: "Which operation can create a solid by extending a sketch?",
            options: [
                "Pad",
                "Fillet",
                "Mirror",
                "Draft"
            ],
            answer: 0
        },

        {
            question: "Which operation removes material?",
            options: [
                "Pocket",
                "Pad",
                "Pattern",
                "Fillet"
            ],
            answer: 0
        },

        {
            question: "What is drafting used for?",
            options: [
                "Creating engineering drawings",
                "Creating databases",
                "Writing code",
                "Editing images"
            ],
            answer: 0
        },

        {
            question: "What is a fillet used for?",
            options: [
                "Creating a rounded edge",
                "Creating a hole",
                "Creating a sketch",
                "Creating a drawing"
            ],
            answer: 0
        }

    ],


    /* ================= AUTOCAD ================= */

    autocad: [

        {
            question: "What is AutoCAD commonly used for?",
            options: [
                "2D drafting and 3D modelling",
                "Video editing",
                "Database programming",
                "Audio production"
            ],
            answer: 0
        },

        {
            question: "Which command is commonly used to draw a straight line?",
            options: [
                "LINE",
                "CIRCLE",
                "TRIM",
                "OFFSET"
            ],
            answer: 0
        },

        {
            question: "Which command creates a circle?",
            options: [
                "CIRCLE",
                "LINE",
                "MOVE",
                "TRIM"
            ],
            answer: 0
        },

        {
            question: "Which command removes unwanted portions of objects?",
            options: [
                "TRIM",
                "MOVE",
                "COPY",
                "OFFSET"
            ],
            answer: 0
        },

        {
            question: "Which command creates a parallel copy?",
            options: [
                "OFFSET",
                "TRIM",
                "MOVE",
                "ROTATE"
            ],
            answer: 0
        },

        {
            question: "What are layers used for?",
            options: [
                "Organizing drawing objects",
                "Installing AutoCAD",
                "Rendering videos",
                "Creating databases"
            ],
            answer: 0
        },

        {
            question: "Which command duplicates an object?",
            options: [
                "COPY",
                "TRIM",
                "EXTEND",
                "FILLET"
            ],
            answer: 0
        },

        {
            question: "Which command moves an object?",
            options: [
                "MOVE",
                "COPY",
                "TRIM",
                "OFFSET"
            ],
            answer: 0
        },

        {
            question: "What are dimensions used for?",
            options: [
                "Showing measurements",
                "Deleting objects",
                "Changing layers",
                "Creating animations"
            ],
            answer: 0
        },

        {
            question: "Which command can create a rounded corner?",
            options: [
                "FILLET",
                "TRIM",
                "COPY",
                "OFFSET"
            ],
            answer: 0
        }

    ],


    /* ================= NX CAD ================= */

    nxcad: [

        {
            question: "NX CAD is commonly used for?",
            options: [
                "Product design and manufacturing",
                "Video editing",
                "Web design",
                "Music production"
            ],
            answer: 0
        },

        {
            question: "What is sketching used for?",
            options: [
                "Creating 2D design geometry",
                "Rendering videos",
                "Managing emails",
                "Creating databases"
            ],
            answer: 0
        },

        {
            question: "What is an assembly?",
            options: [
                "A collection of components",
                "A drawing command",
                "A text document",
                "A database"
            ],
            answer: 0
        },

        {
            question: "What is a feature used for?",
            options: [
                "Building model geometry",
                "Sending emails",
                "Editing text",
                "Creating spreadsheets"
            ],
            answer: 0
        },

        {
            question: "What is drafting used for?",
            options: [
                "Engineering drawings",
                "Video editing",
                "Web development",
                "Audio editing"
            ],
            answer: 0
        },

        {
            question: "What does a pattern feature do?",
            options: [
                "Repeats geometry",
                "Deletes geometry",
                "Opens files",
                "Changes the computer"
            ],
            answer: 0
        },

        {
            question: "What is a datum plane?",
            options: [
                "A reference plane",
                "A finished part",
                "A drawing sheet",
                "An assembly"
            ],
            answer: 0
        },

        {
            question: "What is a fillet used for?",
            options: [
                "Rounding an edge",
                "Creating a drawing",
                "Creating text",
                "Deleting a component"
            ],
            answer: 0
        },

        {
            question: "What is an engineering drawing used for?",
            options: [
                "Communicating design information",
                "Playing videos",
                "Writing programs",
                "Managing accounts"
            ],
            answer: 0
        },

        {
            question: "Why are constraints used in sketches?",
            options: [
                "To control geometric relationships",
                "To delete models",
                "To print documents",
                "To close the software"
            ],
            answer: 0
        }

    ]

};


/* ================= VARIABLES ================= */

let selectedCourse = "";

let currentQuestion = 0;

let score = 0;

let userAnswers = [];


/* ================= COURSE SELECTION ================= */

function selectCourse(course) {

    selectedCourse = course;

    document.getElementById("courseSelection")
        .classList.add("hidden");

    document.getElementById("startAssessment")
        .classList.remove("hidden");

    const courseNames = {

        creo: "CREO",

        solidworks: "SolidWorks",

        catia: "CATIA",

        autocad: "AutoCAD",

        nxcad: "NX CAD"

    };

    const courseIcons = {

        creo: "⚙️",

        solidworks: "🔧",

        catia: "🚗",

        autocad: "📐",

        nxcad: "🏭"

    };

    document.getElementById("selectedCourseTitle")
        .textContent =
        courseNames[course] + " Skill Assessment";

    document.getElementById("selectedCourseIcon")
        .textContent =
        courseIcons[course];

}


/* ================= START ================= */

function startAssessment() {

    currentQuestion = 0;

    score = 0;

    userAnswers = [];

    document.getElementById("startAssessment")
        .classList.add("hidden");

    document.getElementById("questionContainer")
        .classList.remove("hidden");

    showQuestion();

}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

    const questions =
        courseQuestions[selectedCourse];

    const question =
        questions[currentQuestion];

    document.getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("scoreDisplay")
        .textContent =
        `Score: ${score}`;

    document.getElementById("questionText")
        .textContent =
        question.question;

    document.getElementById("progressBar")
        .style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;


    const optionsContainer =
        document.getElementById("optionsContainer");

    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.className = "option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = function() {

            selectAnswer(index);

        };

        optionsContainer.appendChild(button);

    });


    document.getElementById("previousBtn")
        .style.visibility =
        currentQuestion === 0
            ? "hidden"
            : "visible";


    document.getElementById("nextBtn")
        .textContent =
        currentQuestion === questions.length - 1
            ? "Submit Assessment"
            : "Next →";


    /* Restore previous answer */

    if (userAnswers[currentQuestion] !== undefined) {

        const buttons =
            document.querySelectorAll(".option");

        buttons[userAnswers[currentQuestion]]
            .classList.add("selected");

    }

}


/* ================= SELECT ANSWER ================= */

function selectAnswer(answer) {

    userAnswers[currentQuestion] =
        answer;

    const buttons =
        document.querySelectorAll(".option");

    buttons.forEach(button => {

        button.classList.remove("selected");

    });

    buttons[answer]
        .classList.add("selected");

}


/* ================= NEXT ================= */

function nextQuestion() {

    const questions =
        courseQuestions[selectedCourse];


    if (userAnswers[currentQuestion] === undefined) {

        alert("Please select an answer.");

        return;

    }


    if (currentQuestion <
        questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        calculateResult();

    }

}


/* ================= PREVIOUS ================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

}


/* ================= CALCULATE RESULT ================= */

function calculateResult() {

    const questions =
        courseQuestions[selectedCourse];

    score = 0;


    questions.forEach((question, index) => {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });


    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    let level = "";

    let message = "";

    if (score <= 4) {

        level = "Beginner";

        message =
            "You are building your fundamentals. This course can help you develop a strong foundation.";

    }

    else if (score <= 7) {

        level = "Intermediate";

        message =
            "You have a good understanding of the basics. Intermediate training can help strengthen your practical skills.";

    }

    else {

        level = "Advanced";

        message =
            "You demonstrated strong knowledge in this assessment. Advanced training can help you improve further.";

    }


    const courseNames = {

        creo: "CREO",

        solidworks: "SolidWorks",

        catia: "CATIA",

        autocad: "AutoCAD",

        nxcad: "NX CAD"

    };


    document.getElementById("questionContainer")
        .classList.add("hidden");

    document.getElementById("resultContainer")
        .classList.remove("hidden");


    document.getElementById("resultCourse")
        .textContent =
        courseNames[selectedCourse] +
        " Skill Assessment";


    document.getElementById("finalScore")
        .textContent =
        `${score}/10`;


    document.getElementById("percentage")
        .textContent =
        `${percentage}%`;


    document.getElementById("skillLevel")
        .textContent =
        level;


    document.getElementById("resultMessage")
        .textContent =
        message;


    document.getElementById("recommendedCourse")
        .textContent =
        courseNames[selectedCourse] +
        " " +
        level +
        " Training";

}


/* ================= RETAKE ================= */

function retakeAssessment() {

    currentQuestion = 0;

    score = 0;

    userAnswers = [];


    document.getElementById("resultContainer")
        .classList.add("hidden");

    document.getElementById("questionContainer")
        .classList.remove("hidden");

    showQuestion();

}


/* ================= BACK TO COURSES ================= */

function backToCourses() {

    document.getElementById("startAssessment")
        .classList.add("hidden");

    document.getElementById("questionContainer")
        .classList.add("hidden");

    document.getElementById("resultContainer")
        .classList.add("hidden");

    document.getElementById("courseSelection")
        .classList.remove("hidden");

}
