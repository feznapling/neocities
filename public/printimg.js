
// window.onload = function() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var site_data = JSON.parse(this.responseText);
//             let hits = site_data.info.views;
        
//             hits = String(hits).padStart(7, '0');
        
//             var hitsArr = hits.split("").map(Number);
        
//             for (let i = 0; i < hitsArr.length; i++) {
//                 document.getElementById("num"+(7-i)).src = `./rsc/img/num${hitsArr[i]}.gif`;
//             }
//         }
//     };
//     xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=sebfez", true);
//     xhttp.send();
// }

window.onload = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var site_data = JSON.parse(this.responseText);
            let hits = site_data.info.views;
        
            hits = String(hits).padStart(7, '0');
        
            var hitsArr = hits.split("").map(Number);
        
            for (let i = 0; i < hitsArr.length; i++) {
                document.getElementById("num"+(7-i)).src = `./rsc/img/num${hitsArr[i]}.gif`;
            }
        }
    };
    xhttp.open("GET", "https://neocities.org/api/info?sitename=sebfez", true);
    xhttp.send();
}
