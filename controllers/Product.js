import Product from "../models/Product.js"
import { productValidator } from "../validation/Product.js";
import dotenv from "dotenv"



export const getAll = async (req,res) => {
    try {
        const products = await Product.find().populate("categoryId");
        if(products.length === 0) {
            return res.status(404).json({
                message: "Khong tim thay san pham",
            });
        }
        return res.status(200).json({
            message: "Lay danh sach san pham thanh cong",
            datas: products,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}
export const getDetail = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id).populate("categoryId");
        if(!product) {
            return res.status(404).json({
                message: "Khong tim thay san pham",
            });
        }
        return res.status(200).json({
            message: "Lay thong tin san pham thanh cong",
            datas: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}
export const create = async (req,res) => {
    try {
        const {error} = productValidator.validate(req.body);
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const product = await Product.create(req.body);
        if(!product){
            return res.status(404).json({
                message: "Tao san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Tao san pham thanh cong",
            datas: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
};



export const update = async (req,res) => {
    try {
        const { error } = productValidator.validate(req.body, {abortEarly: false});
        if(error){
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        
        const product =  await Product.findByIdAndUpdate(req.params.id, req.body, {new: true,}).populate("categoryId");
        if(!product){
            return res.status(404).json({
                message: "Cap nhat san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Cap nhat san pham thanh cong",
            datas: product,
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        })
    }
}
export const remove = async (req,res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id).populate("categoryId");
        if(!data){
            return res.status(400).json({
                message: "Xoa san pham khong thanh cong",
            });
        }
        return res.status(200).json({
            message: "Xoa san pham thanh cong",
            datas: data.name,
        })
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}