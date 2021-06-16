var express = require('express');
var router = express.Router();
// const axios = require("axios");
let urls = require('../dictionaries/urls');
let domSelecters = require('../dictionaries/domSelectors');
const { connection } = require("../config/db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/extensioncoupons/getStoreData', function(req, res, next) {
  console.log("req-----------> ---------",req.body);

  console.log("url=========",req.body.url);
  let stores = urls.module;
  let domSelects = domSelecters.module;
  console.log("indexOf---------",stores.indexOf(req.body.url));

  let fName = "";
    let hostName = req.body.url.split('.');
    let wIndex = hostName.indexOf("www");
    let cIndex = hostName.indexOf("com");
    if (wIndex != -1) {
      fName = hostName[wIndex + 1];
    } else if (cIndex != -1) {
      fName = hostName[cIndex - 1];
    } else if (hostName.length == 2) {
      fName = hostName[0];
    } else {
      fName = hostName[1];
    }

    // console.log("'storeData':storesData[fName]------->----","--------->---",fName);
    res.send({'message':'Response from server ','storeData':domSelects[fName] || []});
});

router.get('/extensioncoupons/getStores', function(req, res, next) {

  let stores = urls.module;
  
  res.send({'message':'Response from server ','stores':stores});
  // next()
})

router.get('/extensioncoupons/:region?/:host?', function(req,res){
  console.log("------req--url---",req.params);
  let region = req.params['region'];
  let host = req.params['host'];
  let query = `select store_details.store_url , store_details.affiliate_url as storeAffiliate, 
  coupon_details.title as couponTitle,coupon_details.id as couponId, coupon_details.description,
  coupon_details.affiliate_url,coupon_details.code,website_details.id,store_details.title from website_details 
  INNER JOIN store_details ON website_details.id=store_details.web_region_id INNER JOIN coupon_details ON 
  store_details.id = coupon_details.store_detail_id where website_details.website_id=1 and 
  website_details.country_code ='${region}' and store_details.name like '%${host}%' limit 10`;
  console.log("-----query-----",query);
  connection.query(query,
    (error, results, fields) => {
      console.log("------results----",JSON.stringify(results));
      res.send({"message":"Response from server","stores":results});
    }
  );
});

router.get('/extensioncoupons/extension-trending-store/:region', function(req,res){
  console.log("------req--url---",req.params);
  let region = req.params['region'];
  let query = `SELECT store_details.id as storeId, store_details.name,store_details.title,store_details.short_description,
  store_details.long_description FROM website_details INNER JOIN store_details on 
  website_details.id = store_details.web_region_id where website_details.country_code ='${region}' and store_details.featured=1 
  limit 10`;
  console.log("-----query-----",query);
  connection.query(query,
    (error, results, fields) => {
      console.log("------results----",JSON.stringify(results));
      res.send({"message":"Response from server","stores":results});
    }
  );
});

router.get('/extensioncoupons/extension-trending-store-details/:storeId', function(req,res){
  console.log("------req--url---",req.params);
  let storeId = req.params['storeId'];
  let query = `SELECT * FROM coupon_details where store_detail_id=${storeId} limit 10`;
  console.log("-----query-----",query);
  connection.query(query,
    (error, results, fields) => {
      console.log("------results----",JSON.stringify(results));
      res.send({"message":"Response from server","stores":results});
    }
  );
});

router.get('/extensioncoupons/extension-stores/:region', function(req,res){
  console.log("------req--url---",req.params);
  let region = req.params['region'];
  let query = `SELECT store_details.id as storeId, store_details.name,store_details.title FROM website_details INNER JOIN store_details on 
  website_details.id = store_details.web_region_id where website_details.country_code ='${region}'`;
  console.log("-----query-----",query);
  connection.query(query,
    (error, results, fields) => {
      console.log("------results----",JSON.stringify(results));
      res.send({"message":"Response from server","stores":results});
    }
  );
});

router.post('/extensioncoupons/couponupdate', function(req,res){
  
  console.log("req-----------> ---------",req.body);
  let coupons = req.body.coupons;
  let error = {};
  for (let coupon of coupons.entries()){
    let query = `UPDATE coupon_details SET verified =${coupon.status} where id=${coupon.couponId}`;
    console.log("-----query-----",query);
    connection.query(query,
      (error, results, fields) => {
        if (!error){
          console.log("------results----",JSON.stringify(results));
        } else {
          return res.send({"message":"Response from server","error":error});
        }
      }
    );
  }
  res.send({"message":"Response from server","success":'Coupons updated successfully'});
});


module.exports = router;
