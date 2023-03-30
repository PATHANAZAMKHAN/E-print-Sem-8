const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 2456;
const URL = "mongodb://127.0.0.1:27017/e-print";
const cartRouter = require("./routers/CartRoutes");
const rolesRouter = require("./routers/RoleRoutes");
const userRouter = require("./routers/UserRoutes");
const productRouter = require("./routers/ProductRoutes");
const categoryRouter = require("./routers/CategoryRoutes");
const cityRouter = require("./routers/CityRoutes");
const customerAddressRouter = require("./routers/CustomerAddressRoutes");
const feedbackRouter = require("./routers/FeedbackRoutes");
const paymentRouter = require("./routers/PaymentRoutes");
const stateRouter = require("./routers/StateRoutes");
const vendorDetailRouter = require("./routers/VendorDetailRoutes");
const vendorProductImageRouter = require("./routers/VendorProductImageRoutes");
const vendorProductRouter = require("./routers/VendorProductRoutes");
const countryRouter = require("./routers/CountryRoutes");

app.use(express.json());
app.use(cors());
app.use("/carts", cartRouter);
app.use("/categories", categoryRouter);
app.use("/cities", cityRouter);
app.use("/custaddress", customerAddressRouter);
app.use("/feedbacks", feedbackRouter);
app.use("/payments", paymentRouter);
app.use("/products", productRouter);
app.use("/roles", rolesRouter);
app.use("/states", stateRouter);
app.use("/users", userRouter);
app.use("/vendordetails", vendorDetailRouter);
app.use("/vendorproductimages", vendorProductImageRouter);
app.use("/vendorproducts", vendorProductRouter);
app.use("/countries", countryRouter);

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(`Database connection unsuccessfull because of ${err}`);
    } else {
      console.log("Database connection successfull!");
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
