import mercadopago from "mercadopago";

mercadopago.configure({ access_token: process.env.MERCADOPAGO_KEY })

const controller = {
  create: (req, res) => {
    let data = req.body;

    // Verifica si data es un objeto o un array
    const items = Array.isArray(data) ? data : [data];

    const preference = {
      items: items.map((item) => ({
        id: item._id,
        title: item.title,
        currency_id: "ARS",
        picture_url: item.cover_photo,
        unit_price: parseFloat(item.price),
        description: item.description,
        quantity: 1,
      })),
      back_urls: {
        success: "http://localhost:3000",
        failure: "",
        pending: "",
      },
      auto_return: "approved",
      binary_mode: true,
    };

    mercadopago.preferences
      .create(preference)
      .then((response) => res.status(200).json({ response }))
      .catch((error) => res.status(400).json({ error: error.message }));
  },
};

export default controller;
