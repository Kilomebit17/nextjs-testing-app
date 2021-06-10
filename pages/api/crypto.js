export default function crypto(req, res) {
  res.status(200).json({
    crypto: [
      {
        id: 1,
        name: "Bitcoin",
        price: 19840,
        percent: "-3.2%",
        description: "Don’t Forget About Small Devices",
      },
      {
        id: 2,
        name: "Ethereum",
        price: 12380,
        percent: "+8.5%",
        description: "You’ll Learn A Lot From This Task",
      },
    ],
  });
}
