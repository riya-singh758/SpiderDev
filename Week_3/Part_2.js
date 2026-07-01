function generateBill() {
    let name = document.getElementById("customer").value;
    let n = Number(document.getElementById("count").value);

    let total = 0;
    let high = 0;
    let product = "";
    let bill = "";

    for (let i = 1; i <= n; i++) {
        let p = prompt("Enter Product Name");
        let q = Number(prompt("Enter Quantity"));
        let pr = Number(prompt("Enter Price"));

        let amt = q * pr;
        total += amt;

        bill += p + " - Qty: " + q + " - Amount: ₹" + amt + "<br>";

        if (pr > high) {
            high = pr;
            product = p;
        }
    }

    let dis = 0;

    if (total >= 5000)
        dis = total * 0.20;
    else if (total >= 3000)
        dis = total * 0.10;
    else if (total >= 1000)
        dis = total * 0.05;

    let gst = (total - dis) * 0.18;
    let final = total - dis + gst;

    let pay = document.getElementById("payment").value;
    let msg = "";

    switch (pay) {
        case "Cash":
            msg = "Cash Payment";
            break;
        case "UPI":
            msg = "Pay with UPI";
            break;
        case "Card":
            msg = "Pay by Card";
            break;
    }

    document.getElementById("output").innerHTML =
        "<h2>Bill Receipt</h2>" +
        "<b>Customer:</b> " + name +
        "<br><br>" + bill +
        "<b>Total:</b> ₹" + total +
        "<br><b>Discount:</b> ₹" + dis.toFixed(2) +
        "<br><b>GST:</b> ₹" + gst.toFixed(2) +
        "<br><b>Final Bill:</b> ₹" + final.toFixed(2) +
        "<br><b>Costliest Product:</b> " + product +
        "<br><b>Payment:</b> " + pay +
        "<br><b>Message:</b> " + msg;
}