var express = require('express');
var router = express.Router();

const urls =  [
  "www.smilefloral.com.sg",
  "www.tracyeinny.com.sg",
  "www.coffeebean.com.sg",
  "shop.timberland.com.sg",
  "rosesonly.com.sg",
  "contactlens.sg",
  "www.photojaanic.sg",
  "www.kiehls.com.sg",
  "www.robinsons.com.sg",
  "www.metro.com.sg",
  "www.whathewants.com.sg",
  "www.vistaprint.sg",
  "www.tumi.sg",
  "anticlockwise.sg",
  "www.hermo.sg",
  "www.perfumestore.sg",
  "www.furnituresg.com.sg",
  "giant.sg",
  "opentrolley.com.sg",
  "www.thevelvetdolls.sg",
  "jiji.sg",
  "www.mothercare.com.sg",
  "www.beechenghiang.com.sg",
  "www.lookfantastic.com.sg",
  "www.guardian.com.sg",
  "www.partywholesale.com.sg",
  "www.gnc.com.sg",
  "www.samsonite.com.sg",
  "www.expedia.com.sg",
  "www.flowerchimp.sg",
  "www.zalora.sg",
  "www.vaniday.com.sg",
  "www.sephora.sg",
  "www.smartbuyglasses.com.sg",
  "www.lazada.sg",
  "www.adidas.com.sg",
  "www.airasiago.com.sg",
  "www.allianztravel.com.sg",
  "www.caterspot.sg",
  "giftflowers.com.sg",
  "www.mamahood.com.sg",
  "paulaschoice.sg",
  "www.kohepets.com.sg",
  "www.euyansang.com.sg",
  "www.crocs.com.sg",
  "shop.enfagrow.com.sg",
  "aladdinstreet.com.sg",
  "wihardja.com.sg",
  "melissa.com.sg",
  "www.fairprice.com.sg",
  "bubblepets.com.sg",
  "www.underarmour.com.sg",
  "www.alcoholdelivery.com.sg",
  "au.myprotein.com",
  "sg.zaful.com",
  "www.foodsterr.com",
  "www.beautyexpert.com",
  "www.chanbrothersflexi.com",
  "ohvola.com",
  "saturdayclub.com",
  "lelo.com",
  "sg.godaddy.com",
  "styletribute.com",
  "nomnomby.com",
  "www.shein.com",
  "www.udemy.com",
  "shop.mango.com",
  "www.millenniumhotels.com",
  "sg.pandora.net",
  "www.rebeccaminkoff.com",
  "www1.ap.dell.com",
  "www.headout.com",
  "www2.hm.com",
  "secure.farfetch.com",
  "www.fossil.com",
  "www.rwsentosa.com",
  "www.perkbykate.com",
  "www.marksandspencer.com",
  "www.qantas.com",
  "poplook.com",
  "www.angelflorist.com",
  "www.lovebonito.com",
  "shop.circles.life",
  "www.reebonz.com*",
  "www.iherb.com",
  "www.pegipegi.com",
  "www.strawberrynet.com",
  "carrislabelle.com",
  "estore.crystaljade.com",
  "www.shopsassydream.com",
  "www.urbanoutfitters.com",
  "www.pazzion.com",
  "singapore.kinokuniya.com",
  "www.neonmello.com",
  "www.aforarcade.com",
  "www.fairebelle.com",
  "www.loveandbravery.com",
  "www.theclosetlover.com",
  "www.uniqlo.com",
  "www.topazette.com",
  "www.eamart.com",
  "www.mdscollections.com",
  "www.thetinselrack.com",
  "www.chope.co",
  "www.shopfashmob.com",
  "giftslessordinary.com",
  "www.charleskeith.com",
  "fayth.com",
  "www.fareastflora.com",
  "us.cosme-de.com",
  "www.veronikamaine.com.au",
  "www.bloomingdales.com",
  "www.luisaviaroma.com",
  "www.abercrombie.com",
  "www.matchesfashion.com",
  "www.contactsdaily.com",
  "www.tangs.com",
  "www.rewardlaundry.com",
  "www.hipvan.com",
  "www.ishopchangi.com",
  "www.ellanacosmetics.com",
  "www.klook.com",
  "sg.althea.kr",
  "www.foreo.com",
  "www.zalora.com.my",
  "www.trip.com",
  "myfave.com",
  "www.sephora.com",
  "www.senheng.com.my",
  "www.looksi.com",
  "www.abetterflorist.com",
  "www.aesop.com",
  "booking.airasia.com",
  "www.airasiago.com.my",
  "my.althea.kr",
  "www.banggood.com",
  "www.busonlineticket.com",
  "www.chope.co",
  "cottonon.com",
  "sg.creative.com",
  "www.danielwellington.com",
  "zilingoshopping.com",
  "www.yoox.com",
  "www.unit.com",
  "www.tiqets.com",
  "sg.kinohimitsu.com",
  "www.otel.com",
  "www.pomelofashion.com",
  "sg.hotels.com",
  "sg.sleepsonno.com",
  "tomaz.my",
  "jeoel.com",
  "www.modaoperandi.com",
  "younghungryfree.com",
  "naiise.com",
  "www.axtrosports.com",
  "www.osmose-stores.com",
  "slickcaseofficial.com",
  "misterzimi.com",
  "golfgreedy.com",
  "cart.tomtop.com",
  "www.moschino.com",
  "uk.coach.com",
  "www.getyourguide.com",
  "www.dresslily.com",
  "www.newchic.com",
  "www.saksfifthavenue.com",
  "www.abebooks.com",
  "www.melia.com",
  "www.ux.forzieri.com",
  "drgl.com",
  "www.ebags.com",
  "www.hqhair.com",
  "www.bossini.com",
  "www.runwaybandits.com",
  "www.thestagewalk.com",
  "hbx.com",
  "www.mobvoi.com",
  "nordvpn.com",
  "www.hotwire.com",
  "www.stylebop.com",
  "www.istockphoto.com",
  "www.chichiclothing.com",
  "fragrancehub.co",
  "www.macys.com",
  "www.competitivecyclist.com",
  "www.hottopic.com",
  "www.miniinthebox.com",
  "www.fwrd.com",
  "www.designcrowd.com",
  "www.govoyagin.com",
  "www.theoutnet.com",
  "www.dreamcruiseline.com",
  "luxuryescapes.com",
  "www.lelo.com",
  "www.wish.com",
  "www.romwe.com",
  "www.castlery.com",
  "www.boxgreen.co",
  "www.forever21.com",
  "mgplabel.com",
  "www.fashionvalet.com",
  "store.hp.com",
  "www.katespade.com"
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/getStoreData', function(req, res, next) {
  console.log("req-----------> ---------",req.body);

  console.log("url=========",req.body.url);
  console.log("indexOf---------",urls.indexOf(req.body.url));

  const storesData = {
    anticlockwise : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    shopsassydream : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    pazzion : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    aforarcade : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    fairebelle : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    loveandbravery : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    theclosetlover : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    thetinselrack : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    shopfashmob : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    runwaybandits : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    thestagewalk : {
      inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
      inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
      errorHideSelector : '.uc-discounts-messages',
      successFieldSelector : '.uc-discounts-messages',
      checkoutPage:'checkout',
      pageMethod:1
    },
    carrislabelle : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'spurit-global-multitabs.cart'
    },
    neonmello : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'spurit-global-multitabs.cart'
    },
    topazette : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'spurit-global-multitabs.cart'
    },
    thevelvetdolls : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    althea : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    ellanacosmetics : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'ins-cart-product-list'
    },
    flowerchimp : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    kinohimitsu : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    unit : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'pushowl_synced_cart_json'
    },
    sleepsonno : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'spurit-global-multitabs.cart'
    },
    tomaz : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'pushowl_synced_cart_json'
    },
    jeoel : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    kohepets : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    younghungryfree : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'_ssw_cart_data'
    },
    naiise : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    axtrosports : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'pushowl_synced_cart_json'
    },
    osmose : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    paulaschoice : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    slickcaseofficial : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    misterzimi : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'pushowl_synced_cart_json'
    },
    enfagrow : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    aladdinstreet : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    perkbykate : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'_ssw_cart_data'
    },
    robinsons : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:'ins-cart-product-list'
    },
    rebeccaminkoff : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    rosesonly : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2
    },
    ohvola : {
      inputfield : '#checkout_reduction_code',
      inputBtnExecution:`document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('blur'));document.querySelector('.field__input-btn-wrapper button').dispatchEvent(new Event('focus'));document.querySelector('.field__input-btn-wrapper button').click()`,
      errorSelector : '.order-summary__sections .field',
      errorClass : 'field--error',
      errorHideSelector : '#error-for-reduction_code',
      inputFieldAttribute : '.field__input-btn',
      inputFieldAttributeAction : 'disabled',
      inputBtnClass : 'button.field__input-btn',
      inputBtnClassActiion: 'btn--disabled',
      checkoutPage:'checkouts',
      pageMethod:2,
      cartKey1:'localStorage',
      cartKey2:''
    },
    pegipegi : {
      inputfield : '#voucherCd',
      inputBtn : '.formDiskon button',
      errorHideSelector1 : '.formDiskon .errorMessage',
      errorHideSelector2 : '.fail.statusKuponIcon',
      errorHideClass : '.formDiskon',
      errorHideRemove : 'errorForm',
      successFieldSelector : '.formDiskon .errorMessage',
      checkoutPage:'uo',
      pageMethod:3
    },
    fairprice : {
      inputfield : '#promoCode',
      inputBtn : '#WC_PromotionCodeDisplay_links_1',
      errorHideSelector : '.btn-coupon-code ~ .error',
      successFieldSelector : '#ErrorMessageText',
      failureHideBtn : ".CouponForm .mt2",
      successHideBtn : "#WC_PromotionCodeDisplay_links_1",
      couponHideBtn : "#clickableErrorMessageImg",
      checkoutPage:'OrderItemDisplay',
      pageMethod:4
    },
    melia : {
      inputfield : '#mbe-coupon-input',
      inputBtn : '.mbe-button button',
      errorHideSelector : '.btn-coupon-code ~ .error',
      couponStartBtn:'.link-mbe-coupon a',
      successFieldSelector : '#main_error_txt',
      successHideBtn : ".mbe-button button",
      checkoutPage:'en',
      pageMethod:5
    },
    myfave : {
      couponInitializeBtn : '#buy_now',
      inputfield : '.left .field input',
      inputBtn : '.checkout .right a',
      successFieldSelector : '.right strong.black',
      successHideBtn : ".right .promo a",
      failureHideBtn : '.checkout .center a',
      checkoutPage:'',
      pageMethod:6
    },
    sephora_sg : {
      inputfield : '#cart_coupon_code',
      inputBtn : '#coupon_code_submit',
      couponStartBtn:'#dc_placeholder button',
      successFieldSelector : '.codeLabel b',
      successHideBtn : "#yooxcoderemove",
      failureHideBtn : '#errorYooxCode',
      checkoutPage:'cart',
      pageMethod:7
    },
    sephora : {
      inputfield : 'promoInput',
      inputBtn : 'button[data-at:"apply_btn"]',
      inputBtnExecution:`document.querySelector('#promoInput').dispatchEvent(new Event('input', { bubbles: true }));document.querySelector('#promoInput').dispatchEvent(new Event('blur'));document.querySelector('#promoInput').dispatchEvent(new Event('focus'));document.querySelector('[data-at="apply_btn"]').click()`,
      successFieldSelector : '[data-at="applied_promo"]',
      successHideBtn : "button.css-1qlkeyl",
      checkoutPage:'basket',
      cartKey1:'localStorage',
      cartKey2:'basket',
      pageMethod:8
    },
    trip : {
      couponInitializeBtn : '.c-checkboxGroup__radio__title span.book-coupon_toggle_text',
      inputfield : '.book-promo_input',
      inputBtn : '.book-promo_use_code',
      errorHideSelector1 : '.book-promo_input_wrap .c-input',
      errorHideSelector2 : '.book-promo_input_wrap .m-ipt-animation',
      errorHideRemove : 'is-error',
      beforeSuucess : '.j_dialog_ok',
      successFieldSelector : '.book-promo_code_input .u-error-txt',
      checkoutPage:'book',
      pageMethod:9
    },
    vaniday : {
      couponInitializeBtn : "span:contains('Add a promo code/gift card')",
      inputfield : '#voucher',
      inputBtn : 'button',
      successFieldSelector : '#voucher-code ~ label',
      successHideBtn:'.vaniday-components-voucher__selector__option__remove-voucher',
      failureHideBtn : '.close',
      checkoutPage:'cart',
      pageMethod:10
    },
    klook : {
      inputfield : '#promo_code',
      inputBtn : '#redeem_btn',
      beforeCouponStart:'.promo_drop_down',
      beforeCouponApply:'.j_dialog_ok',
      successFieldSelector : '.coupon_app .coupon .disc_code',
      checkoutPage:'shoppingcart_id',
      pageMethod:11
    },
    expedia : {
      inputfield : '#couponId',
      inputBtn : '#apply_coupon_button',
      couponInitializeBtn:'#coupon-code',
      successFieldSelector : "span[data-price-update='total']",
      failureHideBtn:'#remove-coupon-link',
      checkoutPage:'Checkout',
      pageMethod:12
    },
    smartbuyglasses : {
      inputfield : '#promo-code',
      inputBtn : '.update-total',
      couponInitializeBtn:'.radio-icon.left',
      successFieldSelector : '#promo-code',
      beforeProcessEnd:'.cart-error',
      checkoutPage:'',
      pageMethod:13
    },
    abetterflorist : {
      inputfield : '#coupon_code',
      inputBtn : '#button_coupon_code',
      beforeProcessEnd:'#sociallogin-close1',
      couponInitializeBtn:'.rectangle-promo-code',
      successFieldSelector : '#discount',
      failureHideBtn:'.wrong-promo',
      successHideBtn:'#remove-coupon',
      checkoutPage:'checkout',
      pageMethod:14
    },
    adidas : {
      inputfield : '#couponinput',
      inputBtn : '#dwfrm_cart_addCoupon',
      beforeProcessEnd:'.collapsed',
      successFieldSelector : '#couponinput',
      checkoutPage:'Cart-Show',
      pageMethod:15
    },
    aesop : {
      inputfield : '.FormText-input',
      inputBtn : '.PromoCodeCardModal-actionBtn',
      beforeProcessEnd:'.Modal-closeBtn',
      couponInitializeBtn:'.Nav-cart',
      beforeCouponEnter:'.CartSummary-promoBtnIconWrapper',
      successFieldSelector : '#couponinput',
      checkoutPage:'aesop',
      pageMethod:16
    },
    airasia : {
      inputfield : '#side-voucher-number-heatmap',
      inputBtn : '.waves-effect',
      beforeProcessEnd:'#cancel-partial-payment-VO-heatmap',
      couponInitializeBtn:'#apply-voucher-VO-heatmap',
      successFieldSelector : '#side-voucher-number-heatmap',
      checkoutPage:'payment',
      pageMethod:17
    },
    airasiago : {
      inputfield : '#couponId',
      inputBtn : '#apply_coupon_button',
      couponInitializeBtn:'#coupon-code',
      successFieldSelector : '.coupon-discount',
      successHideBtn:'#remove-coupon-link',
      checkoutPage:'HotelCheckout',
      pageMethod:18
    },
    allianztravel : {
      inputfield : '#promotionCode',
      inputBtn : '#promotionCode',
      successFieldSelector : '#promotionCode',
      checkoutPage:'get-a-quote',
      pageMethod:19
    },
    banggood : {
      inputfield : '.code',
      inputBtn : '.apply',
      successFieldSelector : '.successbox b',
      failureHideBtn:'.tips',
      successHideBtn:'.cancelCoupon',
      checkoutPage:'shopping_cart',
      pageMethod:20
    },
    chope : {
      inputfield : '#promo_code',
      inputBtn : '#applybutton',
      couponStartBtn:'.ues_pro',
      successFieldSelector : '#promo_code',
      failureHideBtn:'#pro_message',
      checkoutPage:'booking',
      pageMethod:21
    },
    cottonon : {
      inputfield : '#promo-code',
      inputBtn : '#add-coupon',
      successFieldSelector : '.promo-code-item',
      failureHideBtn:'.error-message',
      successHideBtn:'.remove-promo-code',
      checkoutPage:'bag',
      pageMethod:22
    },
    creative : {
      inputfield : '.md-input',
      inputBtn : '.md-button',
      couponStartBtn:'.text-right a',
      successFieldSelector : '.md-input',
      checkoutPage:'shoppingcart',
      pageMethod:23
    },
    crocs : {
      inputfield : '#couponFld',
      inputBtn : '#addcoup',
      couponStartBtn:'promo-accordion-link',
      successFieldSelector : '#couponFld',
      successHideBtn:'.removecoup',
      failureHideBtn:'#couponErrorMsg',
      checkoutPage:'on',
      pageMethod:24
    },
    danielwellington : {
      inputfield : '#js-checkout-coupon-input',
      inputBtn : '.coupon-toggle',
      couponStartBtn:'.coupon-toggle',
      successFieldSelector : '.a-right',
      successHideBtn:'.js-checkout-coupon-cancel',
      failureHideBtn:'#coupon-validation-advice',
      checkoutPage:'streamcheckout',
      pageMethod:25
    },
    euyansang : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : '#add-coupon',
      successFieldSelector : '#dwfrm_cart_couponCode',
      checkoutPage:'en',
      pageMethod:26
    },
    zilingo : {
      inputfield : '.m-offers-block__modal-input',
      inputBtn : '.m-offers-block__apply-coupon',
      beforeProcessEnd:'.m-offers-block__apply-cancel',
      couponStartBtn:'.m-offers-block__offer i',
      successFieldSelector : '.m-offers-block__selected-offer',
      successHideBtn:'.m-offers-block__remove-offer--coupon',
      checkoutPage:'checkout',
      pageMethod:27
    },
    yoox : {
      inputfield : '#CouponId',
      inputBtn : '#yooxcodeapply',
      successFieldSelector : '.codeLabel b',
      successHideBtn:'#yooxcoderemove',
      failureHideBtn:'#errorYooxCode',
      checkoutPage:'Checkout',
      pageMethod:28
    },
    tiqets : {
      inputfield : '.CouponForm div input',
      inputBtn : '.CouponForm div button',
      successFieldSelector : '.CouponForm__code',
      successHideBtn:'.TextButton',
      checkoutPage:'checkout',
      pageMethod:29
    },
    pomelofashion : {
      inputfield : '#promo-code-reset',
      inputBtn : '.cart-discount__promo-wrapper button canvas',
      successFieldSelector : '.CouponForm__code',
      successHideBtn:'.TextButton',
      checkoutPage:'sg',
      pageMethod:30
    },
    hotels : {
      inputfield : '#coupon-code-field',
      inputBtn : '#coupon-code-apply-btn',
      couponStartBtn:'#deals-and-discounts div button',
      successFieldSelector : '.CouponForm__code',
      successHideBtn:'.TextButton',
      checkoutPage:'sg',
      pageMethod:31
    },
    modaoperandi : {
      inputfield : '.promo-code-option-link',
      inputBtn : '.apply-promo-btn',
      successFieldSelector : '.codeLabel b',
      checkoutPage:'shopping-bag',
      pageMethod:32
    },
    golfgreedy : {
      inputfield : '.voucher_value',
      inputBtn : '#finalVoucher_btn',
      beforeProcessEnd:'#voucher-message',
      couponStartBtn:'.book-button',
      successFieldSelector : '.voucher-error',
      successHideBtn:'#finalVoucher_btn',
      checkoutPage:'sg',
      pageMethod:33
    },
    tomtop : {
      inputfield : '#checkout_promo_input',
      inputBtn : '#checkout_promo_apply',
      couponStartBtn:'.have_code p',
      successFieldSelector : '.error_p',
      successHideBtn:'#checkout_promo_apply',
      checkoutPage:'sg',
      pageMethod:34
    },
    coach : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : '#add-coupon',
      beforeProcessEnd:'.btn-coupon-code ~ .error',
      successFieldSelector : '.btn-coupon-code ~ .error',
      successHideBtn:'#add-coupon',
      checkoutPage:'checkout',
      pageMethod:35
    },
    getyourguide : {
      inputfield : '#coupon_code',
      inputBtn : '.btn-redeem',
      beforeProcessEnd:'.coupon-redeem-error',
      couponStartBtn:'.coupon-redeem-open',
      successFieldSelector : '.coupon-redeem-error',
      successHideBtn:'.btn-redeem',
      checkoutPage:'cart',
      pageMethod:36
    },
    dresslily : {
      inputfield : '#cart_summary_promotion_code',
      inputBtn : '#apply_cart_coupon',
      beforeProcessEnd:'.cart-summary-coupon-msg',
      successFieldSelector : '.cart-summary-coupon-msg',
      successHideBtn:'#apply_cart_coupon',
      checkoutPage:'cart',
      pageMethod:37
    },
    newchic : {
      inputfield : '#coupon_val #couponText',
      inputBtn : '#apply_btn button',
      beforeProcessEnd:'.cart-summary-coupon-msg',
      successFieldSelector : '.coupon_used span',
      successHideBtn:'#apply_btn button',
      checkoutPage:'shopping_cart',
      pageMethod:38
    },
    saksfifthavenue : {
      inputfield : '#promo-code-number',
      inputBtn : '.hbc-promo-code__submit-btn',
      beforeProcessEnd:'.text-field__error-message',
      beforeCouponStart:'.promo-panel a',
      btnAttributeRemove:'disabled',
      btnClassRemove:'hbc-button--disabled',
      successFieldSelector : '.text-field__error-message',
      successHideBtn:'.hbc-promo-code__submit-btn',
      checkoutPage:'checkout',
      pageMethod:39
    },
    ishopchangi : {
      inputfield : '#bag-inputCoupon',
      inputBtn : '.bag-coupon__btn',
      beforeProcessEnd:'.bag-coupon__removed',
      successFieldSelector : '.bag-coupon__btn',
      successHideBtn:'.bag-coupon__btn',
      failureHideBtn:'.bag-coupon__invalid-text',
      checkoutPage:'bag',
      pageMethod:40
    },
    hipvan : {
      inputfield : '.discount__input',
      inputBtn : '.discount__button',
      beforeCouponStart:".js-show-discount-code",
      successFieldSelector : '.discount-amount-section .code',
      successHideBtn:'.js-remove-discount-code',
      failureHideBtn:'.js-discount__remove',
      checkoutPage:'checkouts',
      pageMethod:41
    },
    tangs : {
      inputfield : '#cphMain_txtPromoCode',
      inputBtn : '#cphMain_btnUsePromoCode',
      beforeProcessEnd:".woocommerce-notices-wrapper",
      beforeCouponResult:'.bootstrap-dialog-footer-buttons button',
      successFieldSelector : '#cphMain_spnpromocode',
      successHideBtn:'.js-remove-discount-code',
      failureHideBtn:'.js-discount__remove',
      checkoutPage:'cart',
      pageMethod:42
    },
    contactsdaily : {
      inputfield : '#coupon_code',
      inputBtn : '.checkout_coupon .button',
      beforeProcessEnd:".woocommerce-notices-wrapper",
      beforeCouponResult:'.showcoupon',
      successFieldSelector : '.woocommerce-message',
      successHideBtn1:'.woocommerce-remove-coupon',
      successHideBtn2:'.woocommerce-message',
      failureHideBtn:'.woocommerce-error',
      checkoutPage:'checkout',
      pageMethod:43
    },
    partywholesale : {
      inputfield : '#coupon_field',
      inputBtn : '.ty-discount-coupon__control-group button',
      successFieldSelector : '#coupon_field',
      successHideBtn:'.remove-coupon a',
      checkoutPage:'checkout',
      pageMethod:44
    },
    abercrombie : {
      inputfield : '.right-rail-promos input',
      inputBtn : '.right-rail-promos button',
      successFieldSelector : '.right-rail-promos p',
      checkoutPage:'OrderCheckoutDisplayView',
      pageMethod:45
    },
    luisaviaroma : {
      inputfield : '.promo-input input',
      inputBtn : '.promo-input button',
      successFieldSelector : '.promo-button-icon span',
      failureHideBtn:'.msg-content__button a',
      checkoutPage:'myCart',
      pageMethod:46
    },
    bloomingdales : {
      inputfield : '#promo-apply-input',
      inputBtn : '#promo-apply-button',
      successFieldSelector : '#promo-error-close-button',
      failureHideBtn:'#promo-error-close-button',
      checkoutPage:'my-bag',
      pageMethod:47
    },
    cosmede : {
      inputfield : '#coupon-code',
      inputBtn : '.input-group-btn button',
      successFieldSelector : '.btn-coupon',
      successHideBtn:'.btn-coupon',
      checkoutPage:'checkout',
      pageMethod:48
    },
    mdscollections : {
      inputfield : '#discount-coupon-field',
      inputBtn : '#discount-coupon-form a',
      processStart:'#couponapply',
      beforeProcessEnd:'.discount-result',
      successFieldSelector : '.discount-result h3',
      checkoutPage:'checkout1',
      pageMethod:49
    },
    crystaljade : {
      inputfield : '#cphMain_txtVoucher',
      inputBtn : '#cphMain_btnApplyVoucher',
      beforeProcessEnd:'.uc-discounts-messages',
      successFieldSelector : '.bootstrap-dialog-message',
      beforeSuccess:'.bootstrap-dialog-close-button',
      checkoutPage:'checkout',
      pageMethod:50
    },
     urbanoutfitters : {
      inputfield : '#promo-code',
      inputBtn : '.c-cart-add-promo__button',
      processStart:'.c-cart-add-promo__inner',
      beforeProcessEnd:'.c-cart-add-promo__error',
      successFieldSelector : '.c-cart-add-promo__error',
      checkoutPage:'checkout',
      pageMethod:51
    },
    caterspot : {
      inputfield : '.cart-discount form fieldset input',
      inputBtn : '.cart-discount form fieldset button',
      beforeProcessEnd:'.btn-coupon-code ~ .error',
      successFieldSelector : '.cart-discount form fieldset div',
      successHideBtn:'.cart-discount form fieldset button',
      checkoutPage:'cart',
      pageMethod:52
    },
    nordvpn : {
      inputfield : '#order_processout-form_coupon_field',
      inputBtn : '.TextField__button button',
      beforeProcessEnd:'.btn-coupon-code ~ .error',
      couponStartBtn:'.Link--underline span',
      successFieldSelector : '.status-message .vertical-middle span',
      checkoutPage:'order',
      pageMethod:53
    },
    hotwire : {
      inputfield : '.promo-code__input-container input',
      inputBtn : '.promo-code__apply',
      beforeProcessEnd:'.btn-coupon-code ~ .error',
      couponStartBtn:'.promo-code__text',
      successFieldSelector : '.promo-code__error-message',
      checkoutPage:'checkout',
      pageMethod:54
    },
    istockphoto : {
      inputfield : '#promo_code_form div input',
      inputBtn : '#promo_code_form div button',
      beforeProcessEnd:'#promo_code_error',
      couponStartBtn:'#apply_promo_code',
      successFieldSelector : '#promo_code_error',
      checkoutPage:'checkout',
      pageMethod:55
    },
    fragrancehub : {
      inputfield : '#ec-cart-sidebar-discount-coupon-input',
      inputBtn : '.ec-cart-coupon__buttons div button',
      beforeProcessEnd:'.message-error div',
      couponStartBtn:'.ec-cart-coupon label a',
      successFieldSelector : '.form__msg--error',
      checkoutPage:'cart',
      pageMethod:56
    },
    veronikamaine : {
      inputfield : '#coupon-code-right',
      inputBtn : '.ec-cart-coupon__buttons div button',
      beforeProcessEnd:'.message-error div',
      couponStartBtn:'.promo-code a',
      successFieldSelector : '.form__msg--error',
      checkoutPage:'checkout',
      pageMethod:57
    },
    competitivecyclist : {
      inputfield : '#promo-code',
      inputBtn : '#redeem-code',
      beforeProcessEnd:'.qa-ui-dialog-title-coupon-container button',
      couponStartBtn:'#coupon-redemption-link',
      successFieldSelector : '.qa-ui-dialog-title-coupon-container',
      successFieldSelectorCss:'display',
      checkoutPage:'checkout',
      pageMethod:58
    },
    reebonz : {
      inputfield : '.js-manual-coupon',
      inputBtn : '.js-apply-coupon',
      couponStartBtn:'.js-addPromoCode',
      successFieldSelector : '.js-remove-promo',
      successHideBtn:'.js-remove-promo',
      failureHideBtn1:'.js-alertClose',
      failureHideBtn2:'#couponsModal .iconClose',
      checkoutPage:'checkout',
      pageMethod:59
    },
    vistaprint : {
      inputfield : '#promoCodeEntry',
      inputBtn : '.input-with-button-beside span',
      processStart:'.drawer-handle-center',
      beforeProcessEnd:'.promo-entry-error',
      couponClassRemover:'textbutton-disabled',
      successFieldSelector : '#promoCodeEntry',
      checkoutPage:'cart',
      pageMethod:60
    },
    miniinthebox : {
      inputfield : '#couponCode',
      inputBtn : '#couponApply',
      beforeProcessEnd:'.noCtrTrack',
      couponStartBtn:'#to-use-coupon',
      successFieldSelector : '.invalid',
      successHideBtn:'.invalid',
      checkoutPage:'checkout_payment_process',
      pageMethod:61
    },
    fwrd : {
      inputfield : '#coupon_code',
      inputBtn : '#coupon_code_button',
      beforeProcessEnd:'.js-modal-close',
      couponStartBtn:'#editPromoCode',
      successFieldSelector : '#text_info',
      successHideBtn:'#couponApply',
      checkoutPage:'fw',
      pageMethod:62
    },
    designcrowd : {
      inputfield : '.discount-box label input',
      inputBtn : '.discount-box button',
      beforeProcessEnd:'.form-error',
      successFieldSelector : '.form-error',
      successHideBtn:'#couponApply',
      checkoutPage:'start',
      pageMethod:63
    },
    bubblepets : {
      inputfield : '#discount-code',
      inputBtn : '.action-apply',
      beforeProcessEnd:'.message-error div',
      couponStartBtn:'#block-discount-heading',
      successFieldSelector : '.message-error div',
      checkoutPage:'payment',
      pageMethod:64
    },
    govoyagin : {
      inputfield : '#payment ~ div input',
      inputBtn : '#track-coupon-apply',
      couponStartBtn:'#track-coupon-expand',
      successFieldSelector : '.errorMessage',
      checkoutPage:'checkout',
      pageMethod:65
    },
    theoutnet : {
      inputfield : '#code',
      inputBtn : '.PromotionForm4__submit',
      couponStartBtn:'.ToggleSection5__button',
      successFieldSelector : '.Notification9__message--field-error',
      checkoutPage:'checkout',
      pageMethod:66
    },
    dreamcruiseline : {
      inputfield : '#ModalContent_PromotionCode_txtPromoCode',
      inputBtn : '#ModalContent_PromotionCode_lnkApplyPromotion',
      beforeProcessEnd:'.giftmsg-error-basket',
      couponStartBtn:'#btnPromotion',
      successFieldSelector : '#ModalContent_PromotionCode_cvPromoCodeValidation',
      checkoutPage:'Default',
      pageMethod:67
    },
    luxuryescapes : {
      inputfield : '.sc-1ozyhae-3',
      inputBtn : '.T-promo-button',
      couponStartBtn:'.T-PromoCodeToggle',
      successFieldSelector : '.wytc63-0',
      checkoutPage:'payment',
      pageMethod:68
    },
    wish : {
      inputfield : ".app input[type='text']",
      inputBtn : '.WishButtons__WishButton-sc-13cvktr-0',
      beforeProcessEnd:'.OrderSummary__ResponseMessage-dcq9z3-6',
      couponStartBtn:'.kKMoSC',
      successFieldSelector : '.OrderSummary__ResponseMessage-dcq9z3-6',
      checkoutPage:'cart',
      pageMethod:69
    },
    castlery : {
      inputfield : "input[name='coupon_code']",
      inputBtn : "input[type='submit']",
      couponStartBtn:'._1E7CbK',
      successFieldSelector : '.is-shown .btn',
      successHideBtn:'.is-shown .btn',
      checkoutPage:'checkout',
      pageMethod:70
    },
    forever21 : {
      inputfield : "#txt_promoCode",
      inputBtn : "#btnPromoApply",
      couponStartBtn:'#divPromoArea span',
      successFieldSelector : '#err_promoCode',
      checkoutPage:'checkout',
      pageMethod:71
    },
    fossil : {
      inputfield : "#discount_code_applied",
      inputBtn : "#applyDiscountCode",
      processStart:'#applyDiscount button',
      beforeProcessEnd:'#promoError',
      successFieldSelector : '.btn-remove-promo',
      successHideBtn:'.order-summary-item .btn-remove',
      checkoutPage:'shopping-bag',
      pageMethod:72
    },
    farfetch : {
      inputfield : "#PromoCode",
      inputBtn : "#SummaryGoAddPromocode",
      beforeProcessEnd:'.form-validator_error',
      successFieldSelector : '.summary__added--promocode',
      successFieldSelectorClass:'hide',
      successHideBtn:'.summaryBox__promocode--buttonRemove',
      checkoutPage:'ShippingAddress',
      pageMethod:73
    },
    whathewants : {
      inputfield : "#coupon_code",
      inputBtn : ".form-row-last .button",
      beforeProcessEnd:'.woocommerce-error',
      couponStartBtn:'.showcoupon',
      successFieldSelector : '.woocommerce-error',
      checkoutPage:'checkout',
      pageMethod:74
    },
    millenniumhotels : {
      inputfield : ".discount-code-input input",
      inputBtn : ".wgt-sqbutton-blue",
      processStart:'.payment-information .nightly-breakdown span',
      beforeProcessEnd1:'.code-block .error-message',
      beforeProcessEnd2:'.payment-information .nightly-breakdown span',
      successFieldSelector : '.code-block .error-message',
      checkoutPage:'checkout',
      pageMethod:75
    },
    contactlens : {
      inputfield : "#coupon_code",
      inputBtn : ".coupon button",
      beforeProcessEnd:'.woocommerce-notices-wrapper',
      successFieldSelector : '.woocommerce-remove-coupon',
      successHideBtn:'.woocommerce-remove-coupon',
      checkoutPage:'cart',
      pageMethod:76
    },
    udemy : {
      inputfield : "#coupon-input",
      inputBtn : ".ud-component--clp--redeem-coupon button",
      processStart:'.ud-component--clp--redeem-coupon button',
      beforeProcessEnd1:'.ud-component--clp--redeem-coupon form div',
      beforeProcessEnd1Class:'has-error',
      beforeProcessEnd2:'.help-block',
      successFieldSelector : '.ud-component--clp--redeem-coupon p',
      successHideBtn:'.ud-component--clp--redeem-coupon form ~ div button',
      checkoutPage:'course',
      pageMethod:77
    },
    shein : {
      inputfield : "#coupon-input",
      inputBtn : ".ud-component--clp--redeem-coupon button",
      processStart:'.ud-component--clp--redeem-coupon button',
      beforeProcessEnd1:'#coupon-input',
      beforeProcessEnd1Class:'input-error-bg',
      beforeProcessEnd2:'.error-tip',
      successFieldSelector : '.apply-box span',
      successHideBtn:'.apply-box span',
      checkoutPage:'checkout',
      pageMethod:78
    },
    nomnomby : {
      inputfield : ".discount-modal input",
      inputBtn : ".discount-modal button",
      beforeProcessEnd1:'.discount-modal__close',
      beforeProcessEnd2:'.discount-modal__errors',
      couponStartBtn:'.signup-plans-plan__discount',
      successFieldSelector : '.signup-plans-plan__discount',
      checkoutPage:'checkout',
      pageMethod:79
    },
    timberland : {
      inputfield : "#id_couponcode",
      inputBtn : "#onepagecheckout-coupon-add",
      processStart:'.step-coupon',
      beforeProcessEnd:'#coupon-notice',
      successFieldSelector : '#onepagecheckout-coupon-remove',
      successFieldSelectorCss:'display',
      successHideBtn:'#onepagecheckout-coupon-remove',
      checkoutPage:'checkout',
      pageMethod:80
    },
    godaddy : {
      inputfield : "#enterPromoCode",
      inputBtn : ".modal-body button",
      couponStartBtn:'.promo-add-link button',
      errorAttributeRemove:'disabled',
      errorClassRemove:'btn--disabled',
      successFieldSelector : '#Haveapromocode-modal-dialog',
      failureHideBtn:'#Haveapromocode-modal-dialog .close',
      successHideBtn:'.promo-code div',
      checkoutPage:'checkout',
      pageMethod:81
    },
    zaful : {
      inputfield : "#promotion_code",
      inputBtn : "#applybtn",
      beforeProcessEnd:'#apply_msg',
      successFieldSelector : '#promotion_code',
      successHideBtn:'#applybtn',
      checkoutPage:'cart',
      pageMethod:82
    },
    samsonite : {
      inputfield : "#couponCode",
      inputBtn : ".promo-code-btn",
      beforeProcessEnd:'.coupon-error-message',
      successFieldSelector : '.coupon-error-message',
      successHideBtn:'#applybtn',
      checkoutPage:'cart',
      pageMethod:83
    },
    gnc : {
      inputfield : "#couponCode",
      inputBtn : ".promo-code-btn",
      beforeProcessEnd:'.coupon-error-message',
      successFieldSelector : '.coupon-error-message',
      successHideBtn:'#applybtn',
      checkoutPage:'cart',
      pageMethod:84
    },
    eamart : {
      inputfield : ".promo-code-cont input",
      inputBtn : ".input-group-btn button",
      beforeProcessEnd:'.promo-error',
      successFieldSelector : '.cart-promo-amount',
      checkoutPage:'cart',
      pageMethod:85
    },
    qantas : {
      inputfield : "#voucher-code",
      inputBtn : "#apply-voucher",
      processStart:'#toggle-voucher',
      beforeProcessEnd:'.voucher-section',
      beforeProcessEndAttribute:'has-error',
      successFieldSelector : '.voucher-success',
      successFieldSelectorCss:'display',
      successFieldSelectorFilter:'none',
      checkoutPage:'checkOut',
      pageMethod:86
    },
    fashionvalet : {
      inputfield : 'input[name="fvcoupon"]',
      inputBtn : ".btn-apply",
      successFieldSelector : '.btn-remove',
      successFieldSelectorCss:'display',
      successFieldSelectorFilter:'none',
      checkoutPage:'checkout',
      pageMethod:87
    },
    hm : {
      inputfield : '#txt-discount-code',
      inputBtn : "#btn-discount-code",
      error : '#txt-discount-code-unknown-error-type-error',
      discount:'#txt-discount-code-unknown-error-type-error',
      condition:false,
      removeErrorSelector:'#txt-discount-code',
      removeErrorClass:'invalid',
      checkoutPage:'cart',
      pageMethod:88
    },
    mango : {
      inputfield : '#discount-voucher-code-data input',
      inputBtn : "#discount-voucher-code-data button",
      error : '.errorValidation',
      discount:'.errorValidation',
      condition:false,
      removeErrorSelector:'#discount-voucher-code-data div',
      removeErrorClass:'error',
      checkoutPage:'checkout',
      pageMethod:89
    },
    lazada : {
      inputfield : '#automation-voucher-input',
      inputBtn : "#automation-voucher-input-button",
      error : null,
      discount:'#automation-voucher-input',
      condition:false,
      checkoutPage:'shipping',
      pageMethod:90
    },
    busonlineticket : {
      inputfield : '#ContentPlaceHolder1_txtDiscountCode',
      inputBtn : "#ContentPlaceHolder1_btnApply",
      error : null,
      discount:'#ContentPlaceHolder1_txtDiscountCode',
      condition:false,
      checkoutPage:'booking',
      pageMethod:91
    },
    moschino : {
      processStart:'.discount h2',
      inputfield : '#coupon_code',
      inputBtn : ".buttons-set button",
      error : null,
      discount:'.discount h2',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:92
    },
    circles : {
      inputfield : '.st-content input',
      inputBtn : ".ladda-button",
      error : null,
      discount:'.st-content input ~ div span',
      condition:false,
      checkoutPage:'pre_checkout',
      pageMethod:93
    },
    lovebonito : {
      processStart:'#block-discount-heading',
      inputfield : '#discount-code',
      inputBtn : ".action-apply",
      error : null,
      discount:'#discount-code',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:94
    },
    metro : {
      inputfield : '#cphMain_txtPromoCode',
      inputBtn : "#cphMain_btnApplyPromoCode",
      error : null,
      discount:'#cphMain_txtPromoCode',
      condition:false,
      checkoutPage:'cart',
      pageMethod:95
    },
    lelo : {
      inputfield : '#dummy-input',
      inputBtn : "#dummy-submit",
      error : null,
      discount:'#dummy-input',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:96
    },
    rewardlaundry : {
      inputfield : '#avada_coupon_code',
      inputBtn : ".fusion-apply-coupon",
      error : '.woocommerce-notices-wrapper',
      discount:'#avada_coupon_code',
      condition:false,
      checkoutPage:'cart',
      pageMethod:97
    },
    chopeStatic : {
      inputfield : '#discountCode',
      inputBtn : "#applybtnId",
      error : '#discountCodetips',
      discount:'#discountCodetips',
      condition:false,
      checkoutPage:'payLah',
      pageMethod:98
    },
    opentrolley : {
      inputfield : '.input-box input',
      inputBtn : ".submit input",
      error : '#ctl00_ContentPlaceHolder1_errormessage',
      discount:'#ctl00_ContentPlaceHolder1_errormessage',
      condition:false,
      checkoutPage:'ShoppingCart',
      pageMethod:99
    },
    uniqlo : {
      inputfield : '#id_couponcode',
      inputBtn : "#onestepcheckout-coupon-add",
      error : '#coupon-notice',
      discount:'.error-msg',
      condition:false,
      checkoutPage:'onestepcheckout',
      pageMethod:100
    },
    furnituresg : {
      inputfield : '#coupon',
      inputBtn : "#confirm_coupon",
      error : '.qc-checkout-product .error',
      discount:'.qc-checkout-product .error',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:101
    },
    strawberrynet : {
      inputfield : '#discCode',
      inputBtn : ".btnCouponApply",
      error : '#coupontErrorsMsg',
      discount:'#coupontErrorsMsg',
      condition:false,
      checkoutPage:'expresscheckout',
      pageMethod:102
    },
    hermo : {
      inputfield : '.voucher-code-textfield input',
      inputBtn : ".voucher-code-textfield ~ td a",
      error : '.voucher-error-display-row',
      discount:'.voucher-error-display-row',
      condition:false,
      checkoutPage:'cart',
      pageMethod:103
    },
    perfumestore : {
      inputfield : '#coupon_code',
      inputBtn : ".coupon .button",
      error : '.woocommerce-error',
      discount:'.woocommerce-error',
      condition:false,
      checkoutPage:'cart',
      pageMethod:104
    },
    kinokuniya : {
      inputfield : '#order_coupon_id',
      inputBtn : "#coupon_code_check_button",
      error : '.coupon_note_area',
      discount:'#coupon_note_rate',
      condition:true,
      checkoutPage:'cart',
      pageMethod:105
    },
    giant : {
      inputfield : '#input-voucher-code',
      inputBtn : "#btn-voucher-code",
      error : '.form-coupon ~ .error',
      discount:'.form-coupon ~ .error',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:106
    },
    mobvoi : {
      inputfield : '.order-discount .codeinput-without-login .input-wrapper input',
      inputBtn : ".order-discount .codeinput-without-login .input-wrapper .discount-btn",
      error : '.btn-coupon-code ~ .error',
      discount:'._err-tips',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:107
    },
    chichiclothing : {
      inputfield : '#discount-code',
      inputBtn : "#discount-form button",
      error : '.message-error div',
      discount:'.message-error div',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:108
    },
    macys : {
      inputfield : '#promo-apply-input',
      inputBtn : ".promo-apply-button",
      error : '.message-error div',
      discount:'.notification-body',
      condition:false,
      checkoutPage:'my-bag',
      pageMethod:109
    },
    iherb : {
      inputfield : '#coupon-input',
      inputBtn : "#coupon-apply",
      error : '#invalid-coupon-msg',
      discount:'#coupon-apply',
      condition:false,
      checkoutPage:'cart',
      pageMethod:110
    },
    tumi : {
      inputfield : '#VoucherCode',
      inputBtn : "#ApplyVoucher",
      error : '.smallmsg_info',
      discount:'#ApplyVoucher',
      condition:true,
      checkoutPage:'singlepagecheckout',
      pageMethod:111
    },
    angelflorist : {
      inputfield : '#promCode',
      inputBtn : "#promCode ~ input",
      error : '#promCodeErrMsg',
      discount:'#promCodeErrMsg',
      condition:false,
      checkoutPage:'checkout_login',
      pageMethod:112
    },
    poplook : {
      inputfield : '#voucher_code',
      inputBtn : "#verifyvoucher",
      error : '#voucher_code-error',
      discount:'#verifyvoucher',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:113
    },
    marksandspencer : {
      inputfield : '.form__input--uppercase',
      inputBtn : "#promocode",
      error : '.promo-error',
      discount:'.giftmsg-error-basket',
      condition:false,
      checkoutPage:'MSBasketView_ShoppingCartURL',
      pageMethod:114
    },
    romwe : {
      inputfield : '.j-input-icon-coupon input',
      inputBtn : ".j-apply-coupon-btn",
      error : '.OrderSummary__ResponseMessage-dcq9z3-6',
      discount:'.text-error-l',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:115
    },
    boxgreen : {
      inputfield : '#code',
      inputBtn : ".continue",
      error : '.OrderSummary__ResponseMessage-dcq9z3-6',
      discount:'.error.message',
      condition:false,
      checkoutPage:'redeem',
      pageMethod:116
    },
    alcoholdelivery : {
      inputfield : '.checkboxtotaldiv-top input',
      inputBtn : ".checkboxtotaldiv-top div div span button",
      error : '.checkboxtotaldiv-top .error',
      discount:'.error.message',
      condition:false,
      checkoutPage:'cart',
      pageMethod:117
    },
    rwsentosa : {
      inputfield : '.voucher-item__code input',
      inputBtn : ".voucher-item__link a",
      error : '.voucher-item__error',
      discount:'.voucher-item__error',
      condition:false,
      checkoutPage:'cart',
      pageMethod:118
    },
    headout : {
      processStart:'.promo-code-header span',
      inputfield : '.promo-code-form-row input',
      inputBtn : ".promo-code-submit-button span",
      error : '.promo-code-fail-message',
      discount:'.promo-code-success-message',
      condition:true,
      checkoutPage:'checkout',
      pageMethod:119
    },
    kiehls : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : "#add-coupon",
      error : '.error_message',
      discount:'#dwfrm_cart_couponCode',
      condition:false,
      checkoutPage:'cart',
      pageMethod:120
    },
    photojaanic : {
      inputfield : '#edit-panes-uc-discounts-codes',
      inputBtn : "#edit-panes-uc-discounts-button",
      error : '#uc-discounts-messages-container',
      discount:'#uc-discounts-messages-container .messages.status',
      condition:true,
      checkoutPage:'checkout',
      pageMethod:121
    },
    dell : {
      inputfield : '#appendedInputButton',
      inputBtn : "#applyCouponButton",
      error : '.stp-apply-coupon-error-wrap',
      discount:'#appendedInputButton',
      condition:false,
      checkoutPage:'cart',
      pageMethod:122
    },
    pandora : {
      inputfield : '#dwfrm_mcouponcode_couponCode',
      inputBtn : ".add-coupon-checkout",
      error : '.error-coupon-checkout',
      discount:'.error-coupon-checkout',
      condition:false,
      checkoutPage:'MCart',
      pageMethod:123
    },
    styletribute : {
      inputfield : '#promocode',
      inputBtn : ".right button",
      error : '.right .field p',
      discount:'#promocode',
      condition:false,
      checkoutPage:'checkout',
      pageMethod:124
    },
    underarmour : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : "#add-coupon",
      processEnd : '.error',
      discount:'.error',
      checkoutPage:'checkout-cart',
      pageMethod:125
    },
    hp : {
      inputfield : '#coupon_code',
      inputBtn : ".apply",
      processStart:"#block-discount-heading",
      processEnd : '.message-error div',
      discount:'.message-error div',
      successHideBtn:'.primary .cancel',
      checkoutPage:'checkout',
      pageMethod:126
    },
    katespade : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : "#add-coupon",
      processStart:".cart-coupon-toggle",
      processEnd : '.error',
      discount:'.error',
      successHideBtn:'#couponcode-submit',
      checkoutPage:'shopping-bag',
      pageMethod:127
    },
    mgplabel : {
      inputfield : '#discount_name',
      inputBtn : ".discount_name_block input.btn",
      processEnd : '#opc_cart_wrap',
      discount:'.error li',
      successHideBtn:'#couponcode-submit',
      checkoutPage:'order',
      pageMethod:128
    },
    saturdayclub : {
      inputfield : '#discount_name',
      inputBtn : ".voucher_nav .button",
      processEnd : '#opc_cart_wrap',
      discount:'#opc_cart_wrap .error li',
      checkoutPage:'quick-order',
      pageMethod:129
    },
    abebooks : {
      inputfield : '#couponcode',
      inputBtn : "#couponcode-submit",
      errorClassRemove:'error',
      discount:'#couponcode',
      successHideBtn:'#couponcode-submit',
      checkoutPage:'checkout',
      pageMethod:130
    },
    myprotein : {
      inputfield : '#discountcode',
      inputBtn : "#add-discount-code",
      processEnd:'.athenaBasket_errorAlert',
      discount:'#discountcode',
      checkoutPage:'my.basket',
      pageMethod:131
    },
    forzieri : {
      inputfield : '#BasketDiscountCode',
      inputBtn : ".btn--submit",
      processEnd:'.js-dismiss_itm',
      errorClassRemove:'error',
      discount:'#BasketDiscountCode',
      successHideBtn:'.btn--submit',
      checkoutPage:'usa',
      pageMethod:132
    },
    giftflowers : {
      inputfield : '#coupon_code',
      inputBtn : ".apply",
      processEnd:'.message-error div',
      discount:'#coupon_code',
      beforeCouponEnter:'#block-discount-heading',
      checkoutPage:'checkout',
      pageMethod:133
    },
    drgl : {
      inputfield : '#coupon_code',
      inputBtn : ".button-wrapper button",
      processEnd:'.message-error div',
      discount:'#coupon_code',
      checkoutPage:'checkout',
      pageMethod:134
    },
    wihardja : {
      inputfield : '#coupon_code',
      inputBtn : ".coupon .is-form",
      processEnd:'.message-container',
      beforeCouponEnter:'.coupon .is-form',
      discount:'#coupon_code',
      checkoutPage:'cart',
      pageMethod:135
    },
    ebags : {
      inputfield : '#enterMeCode',
      inputBtn : "#Submit2",
      processEnd:'.message-error div',
      beforeCouponEnter:'#Submit2',
      discount:'#enterMeCode',
      checkoutPage:'cart',
      pageMethod:136
    },
    hqhair : {
      inputfield : '#discountcode',
      inputBtn : "#add-discount-code",
      processEnd:'.responsiveBasket_errorAlert',
      beforeCouponEnter:'#add-discount-code',
      discount:'#discountcode',
      checkoutPage:'my.basket',
      pageMethod:137
    },
    bossini : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : ".code_shopping",
      processEnd:'.error-form',
      discount:'#dwfrm_cart_couponCode',
      checkoutPage:'en',
      pageMethod:138
    },
    mdreams : {
      inputfield : '.promocodes',
      inputBtn : ".oc-promocode",
      processEnd:'.cart-list-summary .alert-danger',
      discount:'.promocodes',
      checkoutPage:'cart',
      pageMethod:139
    },
    senheng : {
      inputfield : '#coupon_code',
      inputBtn : ".primary .apply",
      processEnd:'div [role=alert]',
      discount:'div.message-error div',
      checkoutPage:'checkout',
      pageMethod:140
    },
    hottopic : {
      inputfield : '#dwfrm_cart_couponCode',
      inputBtn : "#apply-coupon",
      processEnd:'.coupon-form .error',
      discount:'.coupon-error form .error',
      checkoutPage:'cart',
      pageMethod:141
    },
    stylebop : {
      inputfield : '#coupon_code',
      inputBtn : ".button-wrapper button",
      processEnd:'.error-msg',
      discount:'#discount_name',
      checkoutPage:'checkout',
      pageMethod:142
    },
    hbx : {
      inputfield : '.content .input-group input',
      inputBtn : ".content .input-group .input-group-btn button",
      processEnd:'.message-error.error',
      beforeCouponEnter:'#promo',
      discount:'.list-unstyled',
      failureHideBtn:'#error',
      checkoutPage:'cart',
      pageMethod:143
    },
    jiji : {
      inputfield : '#discount_name',
      inputBtn : "#voucher button",
      processEnd:'.alert.alert-danger',
      discount:'#discount_name',
      checkoutPage:'order',
      pageMethod:144
    },
    mothercare : {
      inputfield : '#coupon_code',
      inputBtn : "#discount-coupon-form button",
      processEnd:'.messages',
      discount:'#coupon_code',
      checkoutPage:'checkout',
      pageMethod:145
    },
    beechenghiang : {
      inputfield : '#coupon_code',
      inputBtn : ".primary .apply",
      processEnd:'.message-error.error',
      beforeCouponEnter:'#block-discount-heading',
      discount:'.message-error.error',
      failureHideBtn:'#error',
      checkoutPage:'cart',
      pageMethod:146
    },
    giftslessordinary : {
      inputfield : '#coupon_code',
      inputBtn : ".button2",
      discount:'#coupon_code',
      failureHideBtn:'#error',
      checkoutPage:'cart',
      pageMethod:147
    },
    lookfantastic : {
      inputfield : '#discountcode',
      inputBtn : "#add-discount-code",
      processEnd:'#coupon_code',
      errorClassRemove:'error',
      discount:'.responsiveBasket_removeItem-discount',
      successHideBtn:'.responsiveBasket_removeItem-discount',
      failureHideBtn:'#error',
      checkoutPage:'basket',
      pageMethod:148
    },
    samplestore : {
      inputfield : '#coupon_code',
      inputBtn : "#discount-coupon-form button",
      processEnd:'.messages',
      discount:'.error_text',
      checkoutPage:'checkout',
      pageMethod:149
    },
    guardian : {
      inputfield : '#promo_inp',
      inputBtn : "#applyButton",
      processEnd:'#coupon_code',
      errorClassRemove:'error',
      beforeCouponEnter:'#promo_title',
      discount:'#coupon_remove',
      successHideBtn:'#coupon_remove',
      failureHideBtn:'#error',
      checkoutPage:'cart',
      pageMethod:150
    },
    charleskeith : {
      inputfield : '#coupon_code',
      inputBtn : ".discount-form button",
      processEnd:'#coupon_code',
      errorClassRemove:'error',
      discount:'#coupon_code',
      successHideBtn:'.discount-form button',
      checkoutPage:'checkout',
      pageMethod:151
    },
    fayth : {
      inputfield : '#discount_name',
      inputBtn : "#voucher button",
      processEnd:'#discount_name',
      errorClassRemove:'error',
      discount:'#discount_name',
      failureHideBtn:'.alert-danger',
      checkoutPage:'order',
      pageMethod:152
    },
    fareastflora : {
      inputfield : '#coupon_code',
      inputBtn : "#discount-coupon-form .button2",
      processEnd:'.js-dismiss_itm',
      errorClassRemove:'error',
      discount:'#coupon_code',
      failureHideBtn:'.error-msg',
      successHideBtn:'#discount-coupon-form .button2',
      checkoutPage:'checkout',
      pageMethod:153
    },
    mamahood : {
      inputfield : '#discount_name',
      inputBtn : ".button-small",
      processEnd:'.js-dismiss_itm',
      errorClassRemove:'error',
      discount:'.cart__total__promotion-text',
      successHideBtn:'.btn-input-group__btn a',
      checkoutPage:'quick-order',
      pageMethod:154
    },
    looksi : {
      inputfield : '#couponCode',
      inputBtn : "#cart-coupon",
      discount:'#couponCode"',
      checkoutPage:'cart',
      pageMethod:155
    },
    foreo : {
      inputfield : '#edit-coupon-redemption-code',
      inputBtn : "form",
      beforeCouponEnter:'.js-form-item-coupon-redemption-code .label',
      discount:'.amount .rule-amount',
      checkoutPage:'cart',
      pageMethod:156
    },
    zalora : {
      inputfield : '#couponCode',
      inputBtn : "#cart-coupon",
      processEnd:'.js-dismiss_itm',
      errorClassRemove:'error',
      discount:'.cart__total__promotion-text',
      successHideBtn:'.btn-input-group__btn a',
      checkoutPage:'cart',
      pageMethod:157
    },
    coffeebean : {
      inputfield : '#coupon_code',
      inputBtn : ".discount-form button",
      processEnd:'.error-msg',
      discount:'.error-msg li',
      checkoutPage:'checkout',
      pageMethod:158
    },
    ohvolaR : {
      inputfield : '#coupon_code',
      inputBtn : "#submitVoucher",
      processEnd:'.alert.alert-danger',
      discount:'.alert.alert-danger',
      checkoutPage:'order',
      pageMethod:159
    },
    chanbrothersflexi : {
      inputfield : '#promocode_code',
      inputBtn : ".btn--promocode",
      processEnd:'.redbox',
      discount:'.redbox',
      checkoutPage:'sessionkey',
      pageMethod:160
    },
    beautyexpert : {
      inputfield : '#discountcode',
      inputBtn : "#add-discount-code",
      processEnd:'.responsiveBasket_errorAlert',
      discount:'.responsiveBasket_errorAlert',
      checkoutPage:'my.basket',
      pageMethod:161
    },
    tracyeinny : {
      inputfield : '#coupon_code',
      inputBtn : ".discount-form button",
      processEnd:'.error-msg',
      discount:'.error-msg li',
      checkoutPage:'checkout',
      pageMethod:162
    },
    smilefloral : {
      inputfield : '#coupon_code',
      inputBtn : ".discount-form button",
      processEnd:'.error-msg',
      discount:'.error-msg li',
      checkoutPage:'checkout',
      pageMethod:163
    },
    foodsterr : {
      inputfield : '#coupon_code',
      inputBtn : ".button2",
      discount:'#coupon_code',
      failureHideBtn:'#error',
      checkoutPage:'cart',
      pageMethod:164
    }
  }

  if (urls.indexOf(req.body.url) != -1){
    console.log("sending sephora url----------235-");
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
    console.log("'storeData':storesData[fName]------->----",fName,"--------->---",storesData[fName]);
    res.send({'message':'Response from server ','storeData':storesData[fName]});
  } else {
    console.log("not sending sephora url-----------238")
  }
  // res.render('index', { title: 'Express' });
});

router.get('/getStores', function(req, res, next) {
  console.log("---line---217----req------- : ",req.body);
  res.send({'message':'Response from server ','stores':urls});
  // next()
})

module.exports = router;
