import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: [true, "Phone number is required"],
    },
    source: {
      type: String,
      default: "India",
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models.contacts || mongoose.model("contacts", ContactSchema);

export default Contact;
