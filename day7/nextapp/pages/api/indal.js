import { NextApiRequest, NextApiResponse } from "next";

export default function (req, res) {
  console.log(req.body);
  res.json({
    message: "success",
    data: [
      {
        name: null,
      },
    ],
  });
}
