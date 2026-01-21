let aadhaarVerified = false;


let usedAadhaar = {};             
let partyVoteCount = { A: 0, B: 0 };

function registerAadhaar() {
    const aadhaar = document.getElementById("aadhaar").value;

    if (!aadhaar || aadhaar.length !== 12 || isNaN(aadhaar)) {
        document.getElementById("aadhaarStatus").innerText =
            "Invalid Aadhaar number (must be 12 digits)";
        return;
    }

    if (usedAadhaar[aadhaar]) {
        document.getElementById("aadhaarStatus").innerText =
            "Aadhaar already used for voting";
        return;
    }

    aadhaarVerified = true;
    usedAadhaar[aadhaar] = true;

    document.getElementById("aadhaarStatus").innerText =
        "Aadhaar verified successfully";

    
    document.getElementById("votingBox")
        .classList.remove("disabled");

    document.getElementById("voteStatus").innerText =
        "You may now cast your vote";
}

function vote(candidate) {
    if (!aadhaarVerified) return;

    partyVoteCount[candidate]++;

    document.getElementById("receiptBox").style.display = "block";

    if (candidate === "A") {
        document.getElementById("receiptLogo").src = "images/partyA.png";
        document.getElementById("receiptParty").innerText =
            "Bharatiya Janata Party";
    } else {
        document.getElementById("receiptLogo").src = "images/partyB.png";
        document.getElementById("receiptParty").innerText =
            "Shiv Sena (Uddhav Balasaheb Thackeray Group)";
    }

    document.getElementById("receiptTime").innerText =
        new Date().toLocaleString();

    document.getElementById("voteStatus").innerText =
        "Vote recorded successfully";

    aadhaarVerified = false;
}

function downloadReceipt() {
    window.print();
}

