const TOTAL = document.getElementById("total");
const Totalprice = parseFloat(TOTAL.innerText.replace("$", ""));

paypal
  .Buttons({
    style: {
      color: "blue",
      shape: "pill",
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: Totalprice,
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        console.log(details);
        window.location.replace("http://localhost/paypal/success.php");
      });
    },
    onCancel: function (data) {
      window.location.replace("http://localhost/paypal/Oncancel.php");
    },
  })
  .render("#paypal-payment-button");
