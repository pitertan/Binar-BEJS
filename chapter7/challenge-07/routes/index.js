var express = require('express');
var router = express.Router();
const product = require('../controller/product.js');
const component = require('../controller/component.js');
const supplier = require('../controller/supplier.js');
const user = require('../controllers/user');
const media = require('../controllers/media');
const storage = require('../utils/strorage');
const multer = require('multer')();
const nodemailer = require('../utils/nodemailer');
const middlewares = require('../utils/middlewares');

router.get('/api/product', product.show)
router.post('/api/product', product.create)
router.get('/api/product/:id', product.showOne)
router.put('/api/product/:id', product.update)
router.delete('/api/product/:id', product.destroy)

router.get('/api/component', component.show)
router.post('/api/component', component.create)
router.get('/api/component/:id', component.showOne)
router.put('/api/component/:id', component.update)
router.delete('/api/component/:id', component.destroy)

router.get('/api/supplier', supplier.show)
router.post('/api/supplier', supplier.create)
router.get('/api/supplier/:id', supplier.showOne)
router.put('/api/supplier/:id', supplier.update)
router.delete('/api/supplier/:id', supplier.destroy)

router.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'welcome to auth api!',
        data: null
    });
});

router.post('/auth/register', user.register);
router.post('/auth/login', user.login);
router.get('/auth/oauth', user.googleOauth2);
router.get('/auth/whoami', middlewares.auth, user.whoami);
router.get('/reset-password', user.resetPasswordPage);
router.post('/auth/forgot-password', user.forgotPassword);
router.post('/auth/reset-password', user.resetPassword);

router.post('/storage/images', storage.image.single('media'), media.strogeSingle);
router.post('/storage/multi/images', storage.image.array('media'), media.storageArray);
router.post('/imagekit/upload', multer.single('media'), media.imagekitUpload);

router.get('/test/mailer', async (req, res) => {
    try {
        // send email
        const html = await nodemailer.getHtml('welcome.ejs', {user: {name: 'Joko'}});
        nodemailer.sendMail('romadhonatatang@gmail.com', 'Ini Judul 3', html);

        return res.status(200).json({
            status: true,
            message: 'success',
            data: null
        });
    } catch (error) {
        throw error;
    }
});


module.exports = router;
