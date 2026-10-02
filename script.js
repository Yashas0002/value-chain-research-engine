/* =====================================================
   VALUE CHAIN ENGINE
===================================================== */


/* ================= SAMPLE DATABASE ================= */

/*
   This is temporary data.

   Later we will replace this with Firebase Firestore.
*/

let listings = [

    {
        name: "Sri Lakshmi Traders",
        role: "wholesaler",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 28,
        maxPrice: 34,
        unit: "kg",
        contact: "9876543210"
    },

    {
        name: "Green Valley Farms",
        role: "farmer",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 25,
        maxPrice: 30,
        unit: "kg",
        contact: "9876543211"
    },

    {
        name: "FastTrack Logistics",
        role: "transport",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 1800,
        maxPrice: 2500,
        unit: "trip",
        contact: "9876543212"
    },

    {
        name: "Agro Tools Karnataka",
        role: "tools",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 500,
        maxPrice: 5000,
        unit: "day",
        contact: "9876543213"
    },

    {
        name: "FreshSort Centre",
        role: "sorting",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 1.5,
        maxPrice: 3,
        unit: "kg",
        contact: "9876543214"
    },

    {
        name: "South India Retail",
        role: "retailer",
        crop: "Coconut",
        state: "Karnataka",
        minPrice: 35,
        maxPrice: 45,
        unit: "kg",
        contact: "9876543215"
    },

    {
        name: "Kerala Coffee Farmers",
        role: "farmer",
        crop: "Coffee",
        state: "Kerala",
        minPrice: 120,
        maxPrice: 160,
        unit: "kg",
        contact: "9876543216"
    }

];


/* ================= ROLE INFORMATION ================= */

const roleInformation = {

    farmer: {

        title: "Farmer Dashboard",

        description:
            "Find services, suppliers and buyers for your farm.",

        actions: [

            {
                id: "harvester",
                icon: "🌴",
                title: "Find Harvesters",
                description:
                    "Find people providing harvesting services."
            },

            {
                id: "tools",
                icon: "🔧",
                title: "Find Farming Tools",
                description:
                    "Find tools, machinery and equipment."
            },

            {
                id: "sorting",
                icon: "📦",
                title: "Find Sorting & Grading",
                description:
                    "Find nearby sorting and grading services."
            },

            {
                id: "transport",
                icon: "🚚",
                title: "Find Transportation",
                description:
                    "Find transporters and see their charges."
            },

            {
                id: "wholesaler",
                icon: "🏢",
                title: "Find Wholesalers",
                description:
                    "Sell your crop directly to wholesalers."
            },

            {
                id: "retailer",
                icon: "🛒",
                title: "Find Retailers",
                description:
                    "Find retailers interested in your crop."
            },

            {
                id: "seedlings",
                icon: "🌱",
                title: "Find Seedlings",
                description:
                    "Find crop seedlings and planting material."
            }

        ]

    },


    harvester: {

        title: "Harvester Dashboard",

        description:
            "Connect with farmers who need harvesting services.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find farmers who need harvesting."
            },

            {
                id: "transport",
                icon: "🚚",
                title: "Find Transportation",
                description:
                    "Find transport after harvesting."
            },

            {
                id: "tools",
                icon: "🔧",
                title: "Find Equipment",
                description:
                    "Find harvesting equipment and tools."
            }

        ]

    },


    tools: {

        title: "Tools Distributor Dashboard",

        description:
            "Connect farming equipment with people who need it.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find farmers looking for equipment."
            },

            {
                id: "harvester",
                icon: "🌴",
                title: "Find Harvesters",
                description:
                    "Find harvesting professionals."
            }

        ]

    },


    sorting: {

        title: "Sorting & Grading Dashboard",

        description:
            "Find farmers and buyers for sorting and grading operations.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find farmers supplying crops."
            },

            {
                id: "transport",
                icon: "🚚",
                title: "Find Transporters",
                description:
                    "Find transport for collected products."
            },

            {
                id: "wholesaler",
                icon: "🏢",
                title: "Find Wholesalers",
                description:
                    "Find buyers for graded products."
            }

        ]

    },


    transport: {

        title: "Transportation & Logistics",

        description:
            "Find agricultural businesses that need transportation.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find farmers requiring transport."
            },

            {
                id: "sorting",
                icon: "📦",
                title: "Find Sorting Centres",
                description:
                    "Find sorting and collection locations."
            },

            {
                id: "wholesaler",
                icon: "🏢",
                title: "Find Wholesalers",
                description:
                    "Find wholesalers requiring logistics."
            }

        ]

    },


    marketer: {

        title: "Marketer Dashboard",

        description:
            "Connect products with buyers and markets.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find products directly from farmers."
            },

            {
                id: "wholesaler",
                icon: "🏢",
                title: "Find Wholesalers",
                description:
                    "Find wholesale suppliers."
            },

            {
                id: "retailer",
                icon: "🛒",
                title: "Find Retailers",
                description:
                    "Find retailers and market channels."
            }

        ]

    },


    wholesaler: {

        title: "Wholesaler Dashboard",

        description:
            "Find suppliers and retailers for your business.",

        actions: [

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Purchase crops directly from farmers."
            },

            {
                id: "retailer",
                icon: "🛒",
                title: "Find Retailers",
                description:
                    "Find retailers who need your products."
            },

            {
                id: "transport",
                icon: "🚚",
                title: "Find Transport",
                description:
                    "Find transport for your products."
            }

        ]

    },


    retailer: {

        title: "Retailer Dashboard",

        description:
            "Find suppliers and agricultural products.",

        actions: [

            {
                id: "wholesaler",
                icon: "🏢",
                title: "Find Wholesalers",
                description:
                    "Find wholesale suppliers."
            },

            {
                id: "farmer",
                icon: "🌾",
                title: "Find Farmers",
                description:
                    "Find direct farm suppliers."
            },

            {
                id: "transport",
                icon: "🚚",
                title: "Find Transportation",
                description:
                    "Find transport services."
            }

        ]

    }

};


let currentRole = null;



/* ================= NAVIGATION ================= */

function goToRoles() {

    document
        .getElementById("roles")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function backToRoles() {

    document
        .getElementById("dashboard")
        .classList
        .add("hidden");

    document
        .getElementById("roles")
        .classList
        .remove("hidden");

    document
        .getElementById("roles")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= ROLE SELECTION ================= */

function selectRole(role) {

    currentRole = role;

    const information =
        roleInformation[role];


    document
        .getElementById("roles")
        .classList
        .add("hidden");


    document
        .getElementById("dashboard")
        .classList
        .remove("hidden");


    document
        .getElementById("roleTitle")
        .textContent =
        information.title;


    document
        .getElementById("roleDescription")
        .textContent =
        information.description;


    renderActions(information.actions);


    document
        .getElementById("dashboard")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= ACTION CARDS ================= */

function renderActions(actions) {

    const grid =
        document.getElementById("actionGrid");


    grid.innerHTML = "";


    actions.forEach(action => {

        const card =
            document.createElement("div");


        card.className =
            "action-card";


        card.innerHTML = `

            <div class="action-icon">
                ${action.icon}
            </div>

            <h3>
                ${action.title}
            </h3>

            <p>
                ${action.description}
            </p>

        `;


        card.onclick = function () {

            openSearch(action);

        };


        grid.appendChild(card);

    });

}



/* ================= SEARCH AREA ================= */

function openSearch(action) {

    const area =
        document.getElementById("dynamicArea");


    area.classList.remove("hidden");


    area.innerHTML = `

        <h2>
            ${action.title}
        </h2>

        <p>
            Enter your requirements to find
            matching participants.
        </p>


        <div class="search-form">


            <div class="form-field">

                <label>
                    Crop
                </label>

                <select id="searchCrop">

                    <option>
                        Coconut
                    </option>

                    <option>
                        Tomato
                    </option>

                    <option>
                        Rice
                    </option>

                    <option>
                        Coffee
                    </option>

                    <option>
                        Arecanut
                    </option>

                    <option>
                        Banana
                    </option>

                </select>

            </div>



            <div class="form-field">

                <label>
                    State
                </label>

                <select id="searchState">

                    <option>
                        Karnataka
                    </option>

                    <option>
                        Kerala
                    </option>

                    <option>
                        Tamil Nadu
                    </option>

                    <option>
                        Andhra Pradesh
                    </option>

                    <option>
                        Maharashtra
                    </option>

                </select>

            </div>



            <div class="form-field">

                <label>
                    Quantity (kg)
                </label>

                <input
                    id="searchQuantity"
                    type="number"
                    placeholder="Example: 2000"
                >

            </div>


        </div>


        <button
            class="search-button"
            onclick="performSearch('${action.id}')">

            Find Available Options

        </button>


        <div id="searchResults"
             class="results">

        </div>

    `;

}



/* ================= SEARCH DATABASE ================= */

function performSearch(targetRole) {

    const crop =
        document.getElementById("searchCrop")
        .value;


    const state =
        document.getElementById("searchState")
        .value;


    const quantity =
        document.getElementById("searchQuantity")
        .value;


    const results =
        listings.filter(item =>

            item.role === targetRole &&

            item.crop === crop &&

            item.state === state

        );


    const resultArea =
        document.getElementById("searchResults");


    if (results.length === 0) {

        resultArea.innerHTML = `

            <div class="result-card">

                <div>

                    <h3>
                        No matching listings found
                    </h3>

                    <p>
                        Try another crop or location.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    resultArea.innerHTML = `

        <h3 style="margin-bottom:15px">

            ${results.length}
            matching options found

        </h3>

    `;


    results.forEach(item => {

        const card =
            document.createElement("div");


        card.className =
            "result-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ${item.role}
                    • ${item.crop}
                    • ${item.state}
                </p>

                <p>
                    Contact:
                    ${item.contact}
                </p>

            </div>


            <div>

                <div class="price">

                    ₹${item.minPrice}
                    –
                    ₹${item.maxPrice}

                    /${item.unit}

                </div>


                <button
                    class="contact-button"
                    onclick="contactPerson('${item.contact}')">

                    Contact

                </button>

            </div>

        `;


        resultArea.appendChild(card);

    });


    if (quantity) {

        const totalLow =
            results[0].minPrice *
            Number(quantity);


        const totalHigh =
            results[0].maxPrice *
            Number(quantity);


        resultArea.innerHTML += `

            <div class="result-card">

                <div>

                    <h3>
                        Estimated Value
                    </h3>

                    <p>
                        Based on ${quantity} kg
                        and the first matching
                        price range.
                    </p>

                </div>


                <div class="price">

                    ₹${totalLow.toLocaleString()}
                    –
                    ₹${totalHigh.toLocaleString()}

                </div>

            </div>

        `;

    }

}



/* ================= CONTACT ================= */

function contactPerson(number) {

    alert(
        "Contact number: " + number
    );

}



/* ================= ADMIN ================= */

function openAdmin() {

    document
        .getElementById("adminModal")
        .classList
        .remove("hidden");

}


function closeAdmin() {

    document
        .getElementById("adminModal")
        .classList
        .add("hidden");

}



/* ================= SAVE LISTING ================= */

document
    .getElementById("listingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const newListing = {

            name:
                document.getElementById("businessName").value,

            role:
                document.getElementById("businessRole").value,

            crop:
                document.getElementById("businessCrop").value,

            state:
                document.getElementById("businessState").value,

            minPrice:
                Number(
                    document.getElementById("minPrice").value
                ),

            maxPrice:
                Number(
                    document.getElementById("maxPrice").value
                ),

            unit:
                document.getElementById("priceUnit").value,

            contact:
                document.getElementById("contact").value

        };


        listings.push(newListing);


        document
            .getElementById("saveMessage")
            .textContent =
            "✓ Data added successfully.";


        document
            .getElementById("listingForm")
            .reset();


        console.log(
            "New listing:",
            newListing
        );

    });