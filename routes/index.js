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

  const danielwellington = {
    inputfield : '#js-checkout-coupon-input',
    inputBtn : '.coupon-toggle',
    couponStartBtn:'.coupon-toggle',
    successFieldSelector : '.a-right',
    successHideBtn:'.js-checkout-coupon-cancel',
    failureHideBtn:'#coupon-validation-advice',
    checkoutPage:'streamcheckout',
    pageMethod:25
  };

  const euyansang = {
    inputfield : '#dwfrm_cart_couponCode',
    inputBtn : '#add-coupon',
    successFieldSelector : '#dwfrm_cart_couponCode',
    checkoutPage:'en',
    pageMethod:26
  };

  const zilingo = {
    inputfield : '.m-offers-block__modal-input',
    inputBtn : '.m-offers-block__apply-coupon',
    beforeProcessEnd:'.m-offers-block__apply-cancel',
    couponStartBtn:'.m-offers-block__offer i',
    successFieldSelector : '.m-offers-block__selected-offer',
    successHideBtn:'.m-offers-block__remove-offer--coupon',
    checkoutPage:'checkout',
    pageMethod:27
  };

  const yoox = {
    inputfield : '#CouponId',
    inputBtn : '#yooxcodeapply',
    successFieldSelector : '.codeLabel b',
    successHideBtn:'#yooxcoderemove',
    failureHideBtn:'#errorYooxCode',
    checkoutPage:'Checkout',
    pageMethod:28
  };

  const tiqets = {
    inputfield : '.CouponForm div input',
    inputBtn : '.CouponForm div button',
    successFieldSelector : '.CouponForm__code',
    successHideBtn:'.TextButton',
    checkoutPage:'checkout',
    pageMethod:29
  };

  const pomelofashion = {
    inputfield : '#promo-code-reset',
    inputBtn : '.cart-discount__promo-wrapper button canvas',
    successFieldSelector : '.CouponForm__code',
    successHideBtn:'.TextButton',
    checkoutPage:'sg',
    pageMethod:30
  };

  const hotels = {
    inputfield : '#coupon-code-field',
    inputBtn : '#coupon-code-apply-btn',
    couponStartBtn:'#deals-and-discounts div button',
    successFieldSelector : '.CouponForm__code',
    successHideBtn:'.TextButton',
    checkoutPage:'sg',
    pageMethod:31
  };

  const modaoperandi = {
    inputfield : '.promo-code-option-link',
    inputBtn : '.apply-promo-btn',
    successFieldSelector : '.codeLabel b',
    checkoutPage:'shopping-bag',
    pageMethod:32
  };

  const golfgreedy = {
    inputfield : '.voucher_value',
    inputBtn : '#finalVoucher_btn',
    beforeProcessEnd:'#voucher-message',
    couponStartBtn:'.book-button',
    successFieldSelector : '.voucher-error',
    successHideBtn:'#finalVoucher_btn',
    checkoutPage:'sg',
    pageMethod:33
  };

  const tomtop = {
    inputfield : '#checkout_promo_input',
    inputBtn : '#checkout_promo_apply',
    couponStartBtn:'.have_code p',
    successFieldSelector : '.error_p',
    successHideBtn:'#checkout_promo_apply',
    checkoutPage:'sg',
    pageMethod:34
  };

  const coach = {
    inputfield : '#dwfrm_cart_couponCode',
    inputBtn : '#add-coupon',
    beforeProcessEnd:'.btn-coupon-code ~ .error',
    successFieldSelector : '.btn-coupon-code ~ .error',
    successHideBtn:'#add-coupon',
    checkoutPage:'checkout',
    pageMethod:35
  };

  const getyourguide = {
    inputfield : '#coupon_code',
    inputBtn : '.btn-redeem',
    beforeProcessEnd:'.coupon-redeem-error',
    couponStartBtn:'.coupon-redeem-open',
    successFieldSelector : '.coupon-redeem-error',
    successHideBtn:'.btn-redeem',
    checkoutPage:'cart',
    pageMethod:36
  };

  const dresslily = {
    inputfield : '#cart_summary_promotion_code',
    inputBtn : '#apply_cart_coupon',
    beforeProcessEnd:'.cart-summary-coupon-msg',
    successFieldSelector : '.cart-summary-coupon-msg',
    successHideBtn:'#apply_cart_coupon',
    checkoutPage:'cart',
    pageMethod:37
  };

  const newchic = {
    inputfield : '#coupon_val #couponText',
    inputBtn : '#apply_btn button',
    beforeProcessEnd:'.cart-summary-coupon-msg',
    successFieldSelector : '.coupon_used span',
    successHideBtn:'#apply_btn button',
    checkoutPage:'shopping_cart',
    pageMethod:38
  };

  const saksfifthavenue = {
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
  };

  const ishopchangi = {
    inputfield : '#bag-inputCoupon',
    inputBtn : '.bag-coupon__btn',
    beforeProcessEnd:'.bag-coupon__removed',
    successFieldSelector : '.bag-coupon__btn',
    successHideBtn:'.bag-coupon__btn',
    failureHideBtn:'.bag-coupon__invalid-text',
    checkoutPage:'bag',
    pageMethod:40
  };

  const hipvan = {
    inputfield : '.discount__input',
    inputBtn : '.discount__button',
    beforeCouponStart:".js-show-discount-code",
    successFieldSelector : '.discount-amount-section .code',
    successHideBtn:'.js-remove-discount-code',
    failureHideBtn:'.js-discount__remove',
    checkoutPage:'checkouts',
    pageMethod:41
  };

  const tangs = {
    inputfield : '#cphMain_txtPromoCode',
    inputBtn : '#cphMain_btnUsePromoCode',
    beforeProcessEnd:".woocommerce-notices-wrapper",
    beforeCouponResult:'.bootstrap-dialog-footer-buttons button',
    successFieldSelector : '#cphMain_spnpromocode',
    successHideBtn:'.js-remove-discount-code',
    failureHideBtn:'.js-discount__remove',
    checkoutPage:'cart',
    pageMethod:42
  };

  const contactsdaily = {
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
  };

  const partywholesale = {
    inputfield : '#coupon_field',
    inputBtn : '.ty-discount-coupon__control-group button',
    successFieldSelector : '#coupon_field',
    successHideBtn:'.remove-coupon a',
    checkoutPage:'checkout',
    pageMethod:44
  };

  const abercrombie = {
    inputfield : '.right-rail-promos input',
    inputBtn : '.right-rail-promos button',
    successFieldSelector : '.right-rail-promos p',
    checkoutPage:'OrderCheckoutDisplayView',
    pageMethod:45
  };

  const luisaviaroma = {
    inputfield : '.promo-input input',
    inputBtn : '.promo-input button',
    successFieldSelector : '.promo-button-icon span',
    failureHideBtn:'.msg-content__button a',
    checkoutPage:'myCart',
    pageMethod:46
  };

  const bloomingdales = {
    inputfield : '#promo-apply-input',
    inputBtn : '#promo-apply-button',
    successFieldSelector : '#promo-error-close-button',
    failureHideBtn:'#promo-error-close-button',
    checkoutPage:'my-bag',
    pageMethod:47
  };

  const cosmede = {
    inputfield : '#coupon-code',
    inputBtn : '.input-group-btn button',
    successFieldSelector : '.btn-coupon',
    successHideBtn:'.btn-coupon',
    checkoutPage:'checkout',
    pageMethod:48
  };

  const mdscollections = {
    inputfield : '#discount-coupon-field',
    inputBtn : '#discount-coupon-form a',
    processStart:'#couponapply',
    beforeProcessEnd:'.discount-result',
    successFieldSelector : '.discount-result h3',
    checkoutPage:'checkout1',
    pageMethod:49
  };

  const crystaljade = {
    inputfield : '#cphMain_txtVoucher',
    inputBtn : '#cphMain_btnApplyVoucher',
    beforeProcessEnd:'.uc-discounts-messages',
    successFieldSelector : '.bootstrap-dialog-message',
    beforeSuccess:'.bootstrap-dialog-close-button',
    checkoutPage:'checkout',
    pageMethod:50
  };

  const urbanoutfitters = {
    inputfield : '#promo-code',
    inputBtn : '.c-cart-add-promo__button',
    processStart:'.c-cart-add-promo__inner',
    beforeProcessEnd:'.c-cart-add-promo__error',
    successFieldSelector : '.c-cart-add-promo__error',
    checkoutPage:'checkout',
    pageMethod:51
  };

  const caterspot = {
    inputfield : '.cart-discount form fieldset input',
    inputBtn : '.cart-discount form fieldset button',
    beforeProcessEnd:'.btn-coupon-code ~ .error',
    successFieldSelector : '.cart-discount form fieldset div',
    successHideBtn:'.cart-discount form fieldset button',
    checkoutPage:'cart',
    pageMethod:52
  };

  const nordvpn = {
    inputfield : '#order_processout-form_coupon_field',
    inputBtn : '.TextField__button button',
    beforeProcessEnd:'.btn-coupon-code ~ .error',
    couponStartBtn:'.Link--underline span',
    successFieldSelector : '.status-message .vertical-middle span',
    checkoutPage:'order',
    pageMethod:53
  };

  const hotwire = {
    inputfield : '.promo-code__input-container input',
    inputBtn : '.promo-code__apply',
    beforeProcessEnd:'.btn-coupon-code ~ .error',
    couponStartBtn:'.promo-code__text',
    successFieldSelector : '.promo-code__error-message',
    checkoutPage:'checkout',
    pageMethod:54
  };

  const istockphoto = {
    inputfield : '#promo_code_form div input',
    inputBtn : '#promo_code_form div button',
    beforeProcessEnd:'#promo_code_error',
    couponStartBtn:'#apply_promo_code',
    successFieldSelector : '#promo_code_error',
    checkoutPage:'checkout',
    pageMethod:55
  };

  const fragrancehub = {
    inputfield : '#ec-cart-sidebar-discount-coupon-input',
    inputBtn : '.ec-cart-coupon__buttons div button',
    beforeProcessEnd:'.message-error div',
    couponStartBtn:'.ec-cart-coupon label a',
    successFieldSelector : '.form__msg--error',
    checkoutPage:'cart',
    pageMethod:56
  };

  const fragrancehub = {
    inputfield : '#coupon-code-right',
    inputBtn : '.ec-cart-coupon__buttons div button',
    beforeProcessEnd:'.message-error div',
    couponStartBtn:'.promo-code a',
    successFieldSelector : '.form__msg--error',
    checkoutPage:'checkout',
    pageMethod:57
  };

  const competitivecyclist = {
    inputfield : '#promo-code',
    inputBtn : '#redeem-code',
    beforeProcessEnd:'.qa-ui-dialog-title-coupon-container button',
    couponStartBtn:'#coupon-redemption-link',
    successFieldSelector : '.qa-ui-dialog-title-coupon-container',
    successFieldSelectorCss:'display',
    checkoutPage:'checkout',
    pageMethod:58
  };

  const reebonz = {
    inputfield : '.js-manual-coupon',
    inputBtn : '.js-apply-coupon',
    couponStartBtn:'.js-addPromoCode',
    successFieldSelector : '.js-remove-promo',
    successHideBtn:'.js-remove-promo',
    failureHideBtn1:'.js-alertClose',
    failureHideBtn2:'#couponsModal .iconClose',
    checkoutPage:'checkout',
    pageMethod:59
  };

  const vistaprint = {
    inputfield : '#promoCodeEntry',
    inputBtn : '.input-with-button-beside span',
    processStart:'.drawer-handle-center',
    beforeProcessEnd:'.promo-entry-error',
    couponClassRemover:'textbutton-disabled',
    successFieldSelector : '#promoCodeEntry',
    checkoutPage:'cart',
    pageMethod:59
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
