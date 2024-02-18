const multer = require('multer');
const path = require('path');

const UploadFile = path.join(__dirname, '../UploadServerFile/');

const saveFile = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, UploadFile);
    },
    // making file name
    filename: (req, file, callback) => {
        const fileExt = path.extname(file.originalname);
        const fileName = `${file.originalname.replace(fileExt, '').toLowerCase().split(' ').join('-')}-${Date.now()}`;

        callback(null, fileName + fileExt);
    },
});

const upload = multer({
    storage: saveFile,
    limits: {
         fileSize: 1000000,
    }, // 1MB = 1000000 bytes

    fileFilter: (req, file, callback) => {
        if (
            file.mimetype === 'image/png'
            || file.mimetype === 'image/jpg'
            || file.mimetype === 'image/jpeg'
        ) {
            callback(null, true);
        } else {
            callback(new Error('Only .jpg .png or .jpeg format is accepted'));
        }
    },
});

const multerErrorHandler = (err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(501).send('Something Broke!');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.status(201).send('Data is Uploaded');
    }
};

module.exports = {
    upload,
    multerErrorHandler,
};

// import upload and milterErrorHandler to post route.
// upload.single('keyName') use for single image
