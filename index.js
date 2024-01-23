function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.overflow = "hidden";
    document.body.style.paddingLeft = "250px";
    
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.overflow = "auto";
    document.body.style.paddingLeft = "0px";
}