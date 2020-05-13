var express = require('express');
var router = express.Router();

const ursl =  [
  "au.myprotein.com*",
  "sg.zaful.com",
  "www.foodsterr.com",
  "www.smilefloral.com.sg",
  "www.tracyeinny.com.sg",
  "www.beautyexpert.com",
  "www.chanbrothersflexi.com",
  "www.coffeebean.com.sg",
  "ohvola.com",
  "saturdayclub.com",
  "lelo.com",
  "sg.godaddy.com",
  "www.timberland.com.sg",
  "styletribute.com",
  "nomnomby.com",
  "www.shein.com",
  "www.udemy.com",
  "contactlens.sg",
  "shop.mango.com",
  "rosesonly.com.sg",
  "www.millenniumhotels.com",
  "sg.pandora.net",
  "www.rebeccaminkoff.com",
  "www1.ap.dell.com",
  "www.photojaanic.sg",
  "www.kiehls.com.sg",
  "www.metro.com.sg",
  "www.headout.com",
  "www.whathewants.com.sg",
  "www.robinsons.com.sg",
  "www2.hm.com",
  "secure.farfetch.com",
  "www.fossil.com",
  "www.rwsentosa.com",
  "www.perkbykate.com",
  "www.marksandspencer.com",
  "www.qantas.com",
  "www.vistaprint.sg",
  "poplook.com",
  "www.angelflorist.com",
  "www.tumi.sg",
  "www.lovebonito.com",
  "shop.circles.life",
  "www.reebonz.com*",
  "www.iherb.com",
  "www.pegipegi.com",
  "anticlockwise.sg",
  "www.hermo.sg",
  "www.strawberrynet.com",
  "carrislabelle.com",
  "www.perfumestore.sg",
  "www.furnituresg.com.sg",
  "estore.crystaljade.com",
  "www.shopsassydream.com",
  "www.urbanoutfitters.com",
  "www.pazzion.com",
  "singapore.kinokuniya.com",
  "www.neonmello.com",
  "www.aforarcade.com",
  "www.fairebelle.com",
  "giant.sg",
  "www.loveandbravery.com",
  "www.theclosetlover.com",
  "www.uniqlo.com",
  "www.topazette.com",
  "www.thevelvetdolls.sg",
  "www.eamart.com",
  "opentrolley.com.sg",
  "www.mdscollections.com",
  "www.thetinselrack.com",
  "www.chope.co",
  "www.shopfashmob.com",
  "jiji.sg",
  "www.mothercare.com.sg",
  "www.beechenghiang.com.sg",
  "giftslessordinary.com",
  "www.lookfantastic.com.sg",
  "www.guardian.com.sg",
  "www.charleskeith.com",
  "fayth.com",
  "www.fareastflora.com",
  "us.cosme-de.com",
  "www.veronikamaine.com.au",
  "www.bloomingdales.com",
  "www.luisaviaroma.com",
  "www.abercrombie.com",
  "www.partywholesale.com.sg",
  "www.matchesfashion.com",
  "www.contactsdaily.com",
  "www.tangs.com",
  "www.rewardlaundry.com",
  "www.gnc.com.sg",
  "www.samsonite.com.sg",
  "www.hipvan.com",
  "www.ishopchangi.com",
  "www.flowerchimp.sg",
  "www.ellanacosmetics.com",
  "www.expedia.com.sg",
  "www.klook.com",
  "sg.althea.kr",
  "www.foreo.com",
  "www.zalora.com.my",
  "www.zalora.sg",
  "www.trip.com",
  "myfave.com",
  "www.vaniday.com.sg",
  "www.sephora.com",
  "www.sephora.sg",
  "www.senheng.com.my",
  "www.smartbuyglasses.com.sg",
  "www.looksi.com",
  "www.lazada.sg",
  "www.abetterflorist.com",
  "www.adidas.com.sg",
  "www.aesop.com",
  "booking.airasia.com",
  "www.airasiago.com.sg",
  "www.airasiago.com.my",
  "www.allianztravel.com.sg",
  "my.althea.kr",
  "www.banggood.com",
  "www.busonlineticket.com",
  "www.chope.co",
  "cottonon.com",
  "sg.creative.com",
  "www.crocs.com.sg",
  "www.danielwellington.com",
  "www.euyansang.com.sg",
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
  "www.mamahood.com.sg",
  "www.kohepets.com.sg",
  "younghungryfree.com",
  "naiise.com",
  "www.axtrosports.com",
  "www.osmose-stores.com",
  "paulaschoice.sg",
  "slickcaseofficial.com",
  "misterzimi.com",
  "shop.enfagrow.com.sg",
  "aladdinstreet.com.sg",
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
  "giftflowers.com.sg",
  "drgl.com",
  "wihardja.com.sg",
  "www.ebags.com",
  "www.hqhair.com",
  "www.bossini.com",
  "melissa.com.sg",
  "www.fairprice.com.sg",
  "www.runwaybandits.com",
  "www.thestagewalk.com",
  "hbx.com",
  "www.caterspot.sg",
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
  "bubblepets.com.sg",
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
  "www.alcoholdelivery.com.sg",
  "mgplabel.com",
  "www.underarmour.com.sg",
  "www.fashionvalet.com",
  "store.hp.com",
  "www.katespade.com"
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log("req-----------> ---------",req.body);

  console.log("url=========",req.body.url);
  console.log("indexOf---------",ursl.indexOf(req.body.url));
  const sf1 = {
    inputfield : '#edit-panes-uc-discounts-uc-discounts-codes',
    inputBtn : '#edit-panes-uc-discounts-uc-discounts-button',
    errorHideSelector : '.uc-discounts-messages',
    successFieldSelector : '.uc-discounts-messages',
    checkoutPage:'checkout',
    pageMethod:1
  };
  const sf2 = {
    inputfield : '#checkout_reduction_code',
    inputBtn : '.field__input-btn-wrapper button',
    errorSelector : '.order-summary__sections .field',
    errorClass : 'field--error',
    errorHideSelector : '#error-for-reduction_code',
    inputFieldAttribute : '.field__input-btn',
    inputFieldAttributeAction : 'disabled',
    inputBtnClass : 'button.field__input-btn',
    inputBtnClassActiion: 'btn--disabled',
    checkoutPage:'checkouts',
    pageMethod:2
  };
  
  const pegipegi = {
    inputfield : '#voucherCd',
    inputBtn : '.formDiskon button',
    errorHideSelector1 : '.formDiskon .errorMessage',
    errorHideSelector2 : '.fail.statusKuponIcon',
    errorHideClass : '.formDiskon',
    errorHideRemove : 'errorForm',
    successFieldSelector : '.formDiskon .errorMessage',
    checkoutPage:'uo',
    pageMethod:3
  };

  const fairprice = {
    inputfield : '#promoCode',
    inputBtn : '#WC_PromotionCodeDisplay_links_1',
    errorHideSelector : '.btn-coupon-code ~ .error',
    successFieldSelector : '#ErrorMessageText',
    failureHideBtn : ".CouponForm .mt2",
    successHideBtn : "#WC_PromotionCodeDisplay_links_1",
    couponHideBtn : "#clickableErrorMessageImg",
    checkoutPage:'OrderItemDisplay',
    pageMethod:4
  };

  const melia = {
    inputfield : '#mbe-coupon-input',
    inputBtn : '.mbe-button button',
    errorHideSelector : '.btn-coupon-code ~ .error',
    couponStartBtn:'.link-mbe-coupon a',
    successFieldSelector : '#main_error_txt',
    successHideBtn : ".mbe-button button",
    checkoutPage:'en',
    pageMethod:5
  };

  const myfave = {
    couponInitializeBtn='#buy_now',
    inputfield : '.left .field input',
    inputBtn : '.checkout .right a',
    successFieldSelector : '.right strong.black',
    successHideBtn : ".right .promo a",
    failureHideBtn : '.checkout .center a',
    checkoutPage:'',
    pageMethod:6
  };

  const sephora_sg = {
    inputfield : '#cart_coupon_code',
    inputBtn : '#coupon_code_submit',
    couponStartBtn:'#dc_placeholder button',
    successFieldSelector : '.codeLabel b',
    successHideBtn : "#yooxcoderemove",
    failureHideBtn : '#errorYooxCode',
    checkoutPage:'cart',
    pageMethod:7
  };

  const sephora = {
    inputfield : 'promoInput',
    inputBtn : 'button[data-at="apply_btn"]',
    successFieldSelector : '.css-10n46hy',
    successHideBtn : "button.css-1qlkeyl",
    checkoutPage:'basket',
    pageMethod:8
  };

  const trip = {
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
  };

  const vaniday = {
    couponInitializeBtn : "span:contains('Add a promo code/gift card')",
    inputfield : '#voucher',
    inputBtn : 'button',
    successFieldSelector : '#voucher-code ~ label',
    successHideBtn:'.vaniday-components-voucher__selector__option__remove-voucher',
    failureHideBtn : '.close',
    checkoutPage:'cart',
    pageMethod:10
  };

  const klook = {
    inputfield : '#promo_code',
    inputBtn : '#redeem_btn',
    beforeCouponStart:'.promo_drop_down',
    beforeCouponApply:'.j_dialog_ok',
    successFieldSelector : '.coupon_app .coupon .disc_code',
    checkoutPage:'shoppingcart_id',
    pageMethod:11
  };

  const expedia = {
    inputfield : '#couponId',
    inputBtn : '#apply_coupon_button',
    couponInitializeBtn:'#coupon-code',
    successFieldSelector : "span[data-price-update='total']",
    failureHideBtn:'#remove-coupon-link',
    checkoutPage:'Checkout',
    pageMethod:12
  };

  const smartbuyglasses = {
    inputfield : '#promo-code',
    inputBtn : '.update-total',
    couponInitializeBtn:'.radio-icon.left',
    successFieldSelector : '#promo-code',
    beforeProcessEnd:'.cart-error',
    checkoutPage:'',
    pageMethod:13
  };

  const abetterflorist = {
    inputfield : '#coupon_code',
    inputBtn : '#button_coupon_code',
    beforeProcessEnd:'#sociallogin-close1',
    couponInitializeBtn:'.rectangle-promo-code',
    successFieldSelector : '#discount',
    failureHideBtn:'.wrong-promo',
    successHideBtn:'#remove-coupon',
    checkoutPage:'checkout',
    pageMethod:14
  };

  const adidas = {
    inputfield : '#couponinput',
    inputBtn : '#dwfrm_cart_addCoupon',
    beforeProcessEnd:'.collapsed',
    successFieldSelector : '#couponinput',
    checkoutPage:'Cart-Show',
    pageMethod:15
  };
  
  const adidas = {
    inputfield : '.FormText-input',
    inputBtn : '.PromoCodeCardModal-actionBtn',
    beforeProcessEnd:'.Modal-closeBtn',
    couponInitializeBtn:'.Nav-cart',
    beforeCouponEnter:'.CartSummary-promoBtnIconWrapper',
    successFieldSelector : '#couponinput',
    checkoutPage:'aesop',
    pageMethod:16
  };

  const airasia = {
    inputfield : '#side-voucher-number-heatmap',
    inputBtn : '.waves-effect',
    beforeProcessEnd:'#cancel-partial-payment-VO-heatmap',
    couponInitializeBtn:'#apply-voucher-VO-heatmap',
    successFieldSelector : '#side-voucher-number-heatmap',
    checkoutPage:'payment',
    pageMethod:17
  };

  const airasiago = {
    inputfield : '#couponId',
    inputBtn : '#apply_coupon_button',
    couponInitializeBtn:'#coupon-code',
    successFieldSelector : '.coupon-discount',
    successHideBtn:'#remove-coupon-link',
    checkoutPage:'HotelCheckout',
    pageMethod:18
  };

  const allianztravel = {
    inputfield : '#promotionCode',
    inputBtn : '#promotionCode',
    successFieldSelector : '#promotionCode',
    checkoutPage:'get-a-quote',
    pageMethod:19
  };

  const banggood = {
    inputfield : '.code',
    inputBtn : '.apply',
    successFieldSelector : '.successbox b',
    failureHideBtn:'.tips',
    successHideBtn:'.cancelCoupon',
    checkoutPage:'shopping_cart',
    pageMethod:20
  };

  const chope = {
    inputfield : '#promo_code',
    inputBtn : '#applybutton',
    couponStartBtn:'.ues_pro',
    successFieldSelector : '#promo_code',
    failureHideBtn:'#pro_message',
    checkoutPage:'booking',
    pageMethod:21
  };

  const cottonon = {
    inputfield : '#promo-code',
    inputBtn : '#add-coupon',
    successFieldSelector : '.promo-code-item',
    failureHideBtn:'.error-message',
    successHideBtn:'.remove-promo-code',
    checkoutPage:'bag',
    pageMethod:22
  };

  const creative = {
    inputfield : '.md-input',
    inputBtn : '.md-button',
    couponStartBtn:'.text-right a',
    successFieldSelector : '.md-input',
    checkoutPage:'shoppingcart',
    pageMethod:23
  };

  const crocs = {
    inputfield : '#couponFld',
    inputBtn : '#addcoup',
    couponStartBtn:'promo-accordion-link',
    successFieldSelector : '#couponFld',
    successHideBtn:'.removecoup',
    failureHideBtn:'#couponErrorMsg',
    checkoutPage:'on',
    pageMethod:24
  };

  if (ursl.indexOf(req.body.url) != -1){
    console.log("sending sephora url----------235-",)
    res.send({'message':'Response from server ','storeData':storeData});
  } else {
    console.log("not sending sephora url-----------238")
  }
  // res.render('index', { title: 'Express' });
});

module.exports = router;
