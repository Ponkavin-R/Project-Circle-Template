function create() {
    document.getElementById("Create").style = "display:block";
    document.getElementById("Distribute").style = "display:none";
    document.getElementById("Collect").style = "display:none";
    document.getElementById("Analyze").style = "display:none";
    document.getElementById("1").style = "color:#1CBBC7;border-bottom: 6px solid";
    document.getElementById("2").style = "color:none";

}
window.addEventListener('load', function () {
    document.getElementById("Create").style = "display:block";
    document.getElementById("Distribute").style = "display:none";
    document.getElementById("Collect").style = "display:none";
    document.getElementById("Analyze").style = "display:none";
});

function Distribute() {
    document.getElementById("Create").style = "display:none";
    document.getElementById("Distribute").style = "display:block";
    document.getElementById("Collect").style = "display:none";
    document.getElementById("Analyze").style = "display:none";
    document.getElementById("1").style = "color:none";
    document.getElementById("2").style = "color:#1CBBC7;border-bottom: 6px solid"
}