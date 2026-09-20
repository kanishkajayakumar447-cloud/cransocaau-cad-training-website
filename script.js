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
