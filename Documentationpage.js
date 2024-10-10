// Scroll-based active navigation
const sections = document.querySelectorAll('.main-section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top > offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`nav a[href*="${id}"]`).classList.add('active');
        }
    });
});

// Text copying using Clipboard API
function copyTextById(elementId) {
    const divElement = document.getElementById(elementId);
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(divElement.textContent)
            .then(() => {
                alert("Text has been copied");
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    } else {
        // Fallback for older browsers
        let range = document.createRange();
        window.getSelection().removeAllRanges();
        range.selectNode(divElement);
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Text has been copied (using fallback)");
    }
}

// Example of usage for specific elements
function copyText1() { copyTextById('copytextid1'); }
function copyText2() { copyTextById('copytextid2'); }
function copyText3() { copyTextById('copytextid3'); }
function copyText4() { copyTextById('copytextid4'); }
function copyText5() { copyTextById('copytextid5'); }
function copyText6() { copyTextById('copytextid6'); }
function copyText7() { copyTextById('copytextid7'); }
function copyText8() { copyTextById('copytextid8'); }
function copyText9() { copyTextById('copytextid9'); }
function copyText10() { copyTextById('copytextid10'); }
function copyText11() { copyTextById('copytextid11'); }
function copyText12() { copyTextById('copytextid12'); }
//... repeat for other elements as needed

