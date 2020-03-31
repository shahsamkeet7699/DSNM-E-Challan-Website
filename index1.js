var db = firebase.firestore();

const list_div = document.querySelector("#list_div");

db.collection("challan").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            list_div.innerHTML += "<div class='list-item'><h3>" + doc.data().Name + " </h3><p>DL Number : " + doc.data().DL + " </p><p>Location : " + doc.data().Location + " </p><p>Timestamp : " + doc.data().Timestamp + " </p><h5>Total Fine : " + doc.data().Fine + " </h5></div> "
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });