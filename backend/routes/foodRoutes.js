import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url"; // Fix for __dirname in ES Modules

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const foodRouter = express.Router();

// Ensure 'uploads' folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const safeName = file.originalname.replace(/[^a-zA-Z0-9.]/g, "_");
        cb(null, `${Date.now()}_${safeName}`);
    }
});

// File Filter for Image Files Only
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

// Multer Configuration
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Route to handle food addition
foodRouter.post("/add", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "Image upload failed!" });
    }

    // Call addFood function (make sure it's defined somewhere)
    addFood(req, res);
});
// import path from "path";
// import fs from "fs";

// const foodRouter = express.Router();
// // Ensure 'uploads' folder exists
// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

 


// // const storage = multer.diskStorage({
// //     destination: function (req, file, cb) {
// //         cb(null, 'uploads/');
// //     },
// //     filename:(req,file,cb)=>{
// //         return cb(null,`${Date.now()}${file.originalname}`)
// //     }
// // })

// // Storage Configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => cb(null, uploadDir),
//     filename: (req, file, cb) => {
//         const safeName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
//         cb(null, `${Date.now()}_${safeName}`);
//     }
// });

// // File Filter for Image Files Only
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(new Error('Only image files are allowed!'), false);
//     }
// };

// // Multer Configuration
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
// });
// // const upload = multer({storage:storage});

// foodRouter.post("/add", (req, res) => {
//     upload.single("image")(req, res, (err) => {
//         if (err) {
//             return res.status(400).json({ success: false, message: err.message });
//         }

//         // Continue with your logic
//         addFood(req, res);
//     });
// });
// foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);
export default foodRouter;