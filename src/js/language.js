import data from "./datas.js"; // Adjust the path as necessary


function lang(language) {
    const selectedLangData = data[language];
    // Check if language data exists
    if (!selectedLangData) {
        console.error(`Language data for "${language}" not found.`);
        return;
    }

    // Update the logo
    const logoElement = document.getElementById("logo");
    if (logoElement) {
        logoElement.innerText = selectedLangData.logo;
    }

    // Update the menu items
    const menuItems = ["menu1", "menu2", "menu3", "menu4", "menu5"];
    menuItems.forEach((menuItem) => {
        const element = document.getElementById(menuItem);
        if (element) {
            element.innerText = selectedLangData.menu[menuItem];
        }
    });

    // Update block 1
    const block1Header = document.getElementById("block1-header");
    const block1Selection = document.getElementById("block1-selection");
    if (block1Header) {
        block1Header.innerText = selectedLangData.block1.header;
    }
    if (block1Selection) {
        block1Selection.innerText = selectedLangData.block1.selection;
    }

    // Update list pages in block 1
    const block1Pages = ["page1", "page2", "page3"];
    block1Pages.forEach((page) => {
        const element = document.getElementById(`block1-${page}`);
        if (element) {
            element.innerText = selectedLangData.block1.listpages[page];
        }
    });

    // Update placeholders in block 1
    const inputPlaceholders = ["placeholder1", "placeholder2", "placeholder3"];
    inputPlaceholders.forEach((placeholder) => {
        const inputElement = document.getElementById(`input-${placeholder}`);
        if (inputElement) {
            inputElement.placeholder = selectedLangData.block1.placeholder[placeholder];
        }
    });


    // Update buttons in block 1
    const submitButtons = document.getElementsByClassName('submit-lang');
    Array.from(submitButtons).forEach((submitButton) => {
        if (submitButton) {
            submitButton.innerText = selectedLangData.block1.buttons.submit;
            
        }
    });

    // delete-lang

    // Update buttons in block 1
    const deleteButtons = document.getElementsByClassName('delete-lang');
    Array.from(deleteButtons).forEach((deleteButton) => {
        if (deleteButton) {
            deleteButton.innerText = selectedLangData.block1.buttons.delete;
            
        }
    });

    // Update block 2
    const block2Header = document.getElementById("block2-header");
    const block2Placeholder = document.getElementById("block2-placeholder");
    if (block2Header) {
        block2Header.innerText = selectedLangData.block2.header2;
    }
    if (block2Placeholder) {
        block2Placeholder.placeholder = selectedLangData.block2.placeholder;
    }

    // Update table headers
    const tableHeaders = ["tab1", "tab2", "tab3", "tab4", "tab5", "tab6"];
    tableHeaders.forEach((tab) => {
        const headerElement = document.getElementById(`table-${tab}`);
        if (headerElement) {
            headerElement.innerText = selectedLangData.block2.table[tab];
        }
    });



    // Update active button
    active(language);
}

// Function to set active button class
function active(app) {
    // Clear previous active states
    document.getElementById("english-btn").classList.remove("lang-ative");
    document.getElementById("khmer-btn").classList.remove("lang-ative");

    // Set the font family based on the language
    if (app === "english") {
        document.getElementById("english-btn").classList.add("lang-ative");
        document.body.style.fontFamily = "'Roboto Flex', system-ui";
    } else if (app === "khmer") {
        document.getElementById("khmer-btn").classList.add("lang-ative");
        document.body.style.fontFamily = "'Battambang', system-ui";
    }
}

// Attach event listeners after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Set the default language from localStorage or fallback to Khmer
    var app = localStorage.getItem("language") || "khmer";
    lang(app);

    // Attach event listeners to buttons
    document.getElementById("english-btn").addEventListener("click", function () {
        localStorage.setItem("language", "english");
        lang("english");
    });

    document.getElementById("khmer-btn").addEventListener("click", function () {
        localStorage.setItem("language", "khmer");
        lang("khmer");
    });
});
