import db from './setup-firebase';

export default async (req, res) => {
  const { name, email, phone} = JSON.parse(req.body);

  db.collection("users")
    .add({
      name,
      email,
      phone
    })
    .then(() => {
      res.status(200).send({ message: "Saved successfully!"})
    })
    .catch(() => {
      res.status(500).send({ message: "Something went wrong"})
    });
}