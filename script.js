/* =====================================================
   CRANSOCAAU WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {

    const open = nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

});

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =====================================================
   COURSE INFORMATION
===================================================== */

const courseInfo = {

    CREO:
        "Training focus: 3D product design, assembly, surface modelling, sheet metal and drafting.",

    SolidWorks:
        "Training focus: part modelling, assembly, simulation, engineering drawings and rendering.",

    CATIA:
        "Training focus: advanced surface modelling, product design and automotive applications.",

    AutoCAD:
        "Training focus: 2D drafting, 3D modelling, construction drawings and industrial design."

};


/* =====================================================
   COURSE DETAILS MODAL
===================================================== */

const modal =
    document.querySelector("#courseModal");

const modalTitle =
    document.querySelector("#modalTitle");

const modalText =
    document.querySelector("#modalText");


document.querySelectorAll(".course-btn").forEach(button => {

    button.addEventListener("click", () => {

        const course =
            button.dataset.course;

        modalTitle.textContent =
            course;

        modalText.textContent =
            courseInfo[course] ||
            "Please contact us for course details.";

        modal.classList.add("open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

    });

});


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

}


document
    .querySelector(".modal-close")
    ?.addEventListener(
        "click",
        closeModal
    );


modal?.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


document
    .querySelector("#modalContact")
    ?.addEventListener(
        "click",
        closeModal
    );


/* =====================================================
   ENQUIRY FORM
===================================================== */

const form =
    document.querySelector("#enquiryForm");

const status =
    document.querySelector("#formStatus");


form?.addEventListener("submit", event => {

    event.preventDefault();

    status.textContent =
        "Thank you! Your enquiry has been captured on this demo. Connect the form to the client's email/CRM before production launch.";

    form.reset();

});


/* =====================================================
   V2.0 COURSE-BASED SKILL ASSESSMENT
===================================================== */


/* =====================================================
   COURSE QUESTIONS
===================================================== */

const courseQuestions = {


    /* =================================================
       CREO
    ================================================= */

    creo: [

        {
            question:
                "What is commonly used to create a 3D solid from a sketch in CREO?",

            options: [
                "Extrude",
                "Trim",
                "Dimension",
                "Layer"
            ],

            answer: 0
        },

        {
            question:
                "Which feature is used to remove material from a solid?",

            options: [
                "Extrude",
                "Extrude Cut",
                "Pattern",
                "Datum"
            ],

            answer: 1
        },

        {
            question:
                "What is the purpose of a datum plane?",

            options: [
                "Create a reference plane",
                "Render a model",
                "Print a drawing",
                "Delete a feature"
            ],

            answer: 0
        },

        {
            question:
                "Which feature can create repeated geometry?",

            options: [
                "Pattern",
                "Sketch",
                "Measure",
                "Rename"
            ],

            answer: 0
        },

        {
            question:
                "What is an assembly used for?",

            options: [
                "Combining components",
                "Creating only sketches",
                "Changing colors",
                "Deleting models"
            ],

            answer: 0
        },

        {
            question:
                "Which environment is commonly used for creating individual parts?",

            options: [
                "Part Design",
                "Drawing",
                "Manufacturing",
                "Simulation"
            ],

            answer: 0
