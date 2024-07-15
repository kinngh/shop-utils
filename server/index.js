import Express from "express";
import fs from "fs";

const app = Express();

app.use(Express.json());

app.post("/webhooks/:topic", async (req, res) => {
  try {
    const topic = req.params.topic;
    fs.writeFile(
      `${process.cwd()}/_developer/${topic}.json`,
      JSON.stringify(req.body, null, 2),
      (err) => {
        if (err) {
          console.log("Error happened writing to file", topic);
          return;
        }
        console.log(`File ${topic}.json written successfully`);
      }
    );

    return res.status(200).send({ message: "ok" });
  } catch (e) {
    console.error(`---> ERROR: ${req.params.topic}`);
    return res.status(500).send({ error: true });
  }
});

app.listen(3000, () => {
  console.log("Express running on port 3000");
});
