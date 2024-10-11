let browserDetails = document.getElementById("browser-details");
let osDetails = document.getElementById("os-details");

// --------------------------------------------------------

let browserList = [
    {name: "Firefox", value:"Firefox"},
    {name: "Opera", value:"OPR"},
    {name: "Edge", value:"Edg"},
    {name: "Chrome", value:"Chrome"},
    {name: "Safari", value:"Safari"}
];

let os = [
    {name: "Android", value:"Android"},
    {name: "iPhone", value:"iPhone"},
    {name: "iPad", value:"Mac"},
    {name: "Macintosh", value:"Mac"},
    {name: "Linux", value:"Linux"},
    {name: "Windows", value:"Win"}
];

// -----------------------------------------------
let browserChecker = () => {
    let agent = navigator.userAgent;
    for (let i in browserList){
        if (agent.includes(browserList[i].value)){
            browserDetails.innerHTML = browserList[i].name || "Your Browser is Not Detected";
            break;
        }
    }

    for (let i in os){
        if (agent.includes(os[i].value)){
            osDetails.innerHTML = os[i].name || "Your OS is Not Detected";
            break;
        }
    }
};

window.onload = browserChecker();