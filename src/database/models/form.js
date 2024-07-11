import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    contact: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: false,
    },
    pin: {
      type: String,
      required: [true, "Pincode is required"],
    },
    city: {
      type: String,
      required: [true, "Enter your city"],
    },
    comment: {
      type: String,
      default: "Unchecked"
  },
  },
  { timestamps: true }
);

const Form = mongoose.models.forms || mongoose.model("forms", FormSchema);

export default Form;
