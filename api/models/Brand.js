import mongoose from "mongoose";

// schema
const brandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    photo: {
      type: String,
      default: null,
      trim: true
    },
    status: {
      type: Boolean,
      default: true
    },
    trash: {
      type: Boolean,
      default: false
    }
  },

  { timestamps: true }
);

// export model
export default mongoose.model("Brand", brandSchema);
