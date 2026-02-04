// Data for the 10 Impactful Categories
const fundingCauses = [
    { id: 1, name: "Elderly Healthcare", desc: "Providing medication and physical therapy for elders.", age: "65+", img: "images/elderlyhealthcare.jpg" },
    { id: 2, name: "Student Supplies", desc: "Uniforms and textbooks for rural school children.", age: "6-14", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600" },
    { id: 3, name: "Clean Water Wells", desc: "Drilling safe water wells for dry regions.", age: "All", img: "images/cleanwater.jpg" },
    { id: 4, name: "Shelter Rebuild", desc: "Building sturdy houses for families in disaster zones.", age: "Family", img: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600" },
    { id: 5, name: "Vision Surgery", desc: "Cataract surgeries for the visually impaired.", age: "Adults", img: "images/surgery.jpg" },
    { id: 6, name: "Wheelchair Fund", desc: "Providing electric and manual mobility chairs.", age: "All", img: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=600" },
    { id: 7, name: "Micro-Agri Loans", desc: "Giving farmers seeds and low-cost tools.", age: "20-50", img: "images/agri.jpg" },
    { id: 8, name: "Mother Support", desc: "Nutrition kits for single mothers in low income.", age: "20-40", img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600" },
    { id: 9, name: "Mobile Clinics", desc: "Reaching remote areas with diagnostic vans.", age: "All", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600" },
    { id: 10, name: "Daily Feeding", desc: "Operating soup kitchens in poverty-dense city zones.", age: "Children", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600" }
];

// Load Causes into the Grid
const gridElement = document.getElementById('category-grid');
if (gridElement) {
    fundingCauses.forEach(cause => {
        gridElement.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                    <div class="img-container-fix">
                        <img src="${cause.img}" alt="${cause.name}">
                    </div>
                    <div class="card-body p-4">
                        <h4 class="fw-bold text-navy">${cause.name}</h4>
                        <p class="text-muted small">Target Age: ${cause.age}</p>
                        <p>${cause.desc}</p>
                        <button class="btn btn-navy w-100 py-2" onclick="toggleModal('${cause.name}')">Fund Money</button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Modal Toggle Logic
function toggleModal(name = "") {
    const modal = document.getElementById('payment-modal');
    const causeTitle = document.getElementById('selected-cause');
    if (name) causeTitle.innerText = name;
    modal.classList.toggle('d-none');
}

// Payment Simulation Logic
function confirmDonation() {
    const amount = document.getElementById('pay-amount').value;
    if (amount > 0) {
        alert(`Connecting to Payment Gateway...\n\nThank you! ${amount} ETB successfully donated to ሰጪው Charity.`);
        toggleModal();
    } else {
        alert("Please enter a valid amount.");
    }
}

// Contact Logic
const cForm = document.getElementById('contact-form');
if(cForm) {
    cForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Thank you! Your inquiry has been transmitted to our office.");
        cForm.reset();
    });
}