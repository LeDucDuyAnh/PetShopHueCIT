import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        defaultValue: "UnCategory"
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        defaultValue: "UnCategory"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
},{
    versionKey: false, timeseries: true
})

export default mongoose.model("Category", categorySchema)