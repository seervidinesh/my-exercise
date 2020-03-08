const express = require("express");
const app = express();
const customers = require("./routes/customers");
const port = process.env.PORT || 3000;
app.use("/customers", customers);

app.listen(port, () => console.log(`App is running on port ${port}`));
