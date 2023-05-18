const CSV_FORMAT_YAMATO = [
  {
    segment: "products",
    key: "plain_products_line_id",
    label: "Item #",
    format: "number",
    colname: "Item",
  },
  {
    segment: "common",
    key: "order_number",
    label: "Order Number",
    format: "string",
    colname: "注文番号",
  },
  {
    segment: "common",
    key: "order_status",
    label: "Order Status",
    format: "string",
    colname: "ステータス",
  },
  {
    segment: "common",
    key: "plain_orders_order_date",
    label: "order_date",
    format: "string",
    colname: "Order Date",
  },
  {
    segment: "common",
    key: "order_date",
    label: "Order Date",
    format: "date",
    colname: "注文日時",
  },
  {
    segment: "billing",
    key: "billing_last_name",
    label: "Last Name (Billing)",
    format: "string",
    colname: "姓 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_first_name",
    label: "First Name (Billing)",
    format: "string",
    colname: "名 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_company",
    label: "Company (Billing)",
    format: "string",
    colname: "会社名 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_postcode",
    label: "Postcode (Billing)",
    format: "string",
    colname: "郵便番号 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_country",
    label: "Country Code (Billing)",
    format: "string",
    colname: "Country Code (Billing)",
  },
  {
    segment: "billing",
    key: "billing_state",
    label: "State Code (Billing)",
    format: "string",
    colname: "都道府県コード(請求先)",
  },
  {
    segment: "billing",
    key: "billing_city",
    label: "City (Billing)",
    format: "string",
    colname: "市区町村 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_address",
    label: "Address 1&2 (Billing)",
    format: "string",
    colname: "以下住所(請求先)",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "電話 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_email",
    label: "Email (Billing)",
    format: "string",
    colname: "Eメール (請求先)",
  },
  {
    segment: "shipping",
    key: "shipping_last_name",
    label: "Last Name (Shipping)",
    format: "string",
    colname: "姓(配送先)",
  },
  {
    segment: "shipping",
    key: "shipping_first_name",
    label: "First Name (Shipping)",
    format: "string",
    colname: "名(配送先)",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "郵便番号 (配送先)",
  },
  {
    segment: "shipping",
    key: "shipping_country",
    label: "Country Code (Shipping)",
    format: "string",
    colname: "Country Code (Shipping)",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "State Code (Shipping)",
    format: "string",
    colname: "都道府県コード (配送先)",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "City (Shipping)",
    format: "string",
    colname: "市区町村 (配送先)",
  },
  {
    segment: "shipping",
    key: "shipping_address",
    label: "Address 1&2 (Shipping)",
    format: "string",
    colname: "以下住所(配送先)",
  },
  {
    segment: "common",
    key: "customer_note",
    label: "Customer Note",
    format: "string",
    colname: "注文メモ",
  },
  {
    segment: "cart",
    key: "payment_method_title",
    label: "Payment Method Title",
    format: "string",
    colname: "支払方法",
  },
  {
    segment: "cart",
    key: "cart_discount",
    label: "Cart Discount Amount",
    format: "money",
    colname: "カート割引額",
  },
  {
    segment: "cart",
    key: "order_subtotal",
    label: "Order Subtotal Amount",
    format: "money",
    colname: "小計注文金額",
  },
  {
    segment: "ship_calc",
    key: "order_shipping",
    label: "Order Shipping Amount",
    format: "money",
    colname: "注文送料",
  },
  {
    segment: "totals",
    key: "order_total_tax",
    label: "Order Total Tax Amount",
    format: "money",
    colname: "合計税額",
  },
  {
    segment: "totals",
    key: "order_total",
    label: "Order Total Amount",
    format: "money",
    colname: "注文総額",
  },
  {
    segment: "ship_calc",
    key: "shipping_method_title",
    label: "Shipping Method Title",
    format: "string",
    colname: "配送方法",
  },
  {
    segment: "totals",
    key: "order_refund",
    label: "Order Refund Amount",
    format: "money",
    colname: "注文の払い戻し額",
  },
  {
    segment: "products",
    key: "plain_products_sku",
    label: "SKU",
    format: "string",
    colname: "SKU",
  },
  {
    segment: "products",
    key: "plain_products_name",
    label: "Item Name",
    format: "string",
    colname: "商品名",
  },
  {
    segment: "products",
    key: "plain_products_qty",
    label: "Quantity",
    format: "number",
    colname: "数量",
  },
  {
    segment: "products",
    key: "plain_products_item_price",
    label: "Item Cost",
    format: "money",
    colname: "金額",
  },
  {
    segment: "coupons",
    key: "coupons",
    colname: "Coupons",
    label: "Coupons",
    format: "undefined",
  },
  {
    segment: "coupons",
    key: "plain_coupons_code",
    label: "Coupon Code",
    format: "string",
    colname: "クーポンコード",
  },
  {
    segment: "coupons",
    key: "plain_coupons_discount_amount",
    label: "Discount Amount",
    format: "money",
    colname: "割引額",
  },
  {
    segment: "coupons",
    key: "plain_coupons_discount_amount_tax",
    label: "Discount Amount Tax",
    format: "money",
    colname: "割引額税",
  },
];

const CSV_FORMAT_EHIDEN = [
  {
    segment: "common",
    key: "address_book_code",
    label: "Address Book Code",
    format: "string",
    colname: "住所録コード",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "お届け先電話番号",
  },
  {
    segment: "billing",
    key: "billing_postcode",
    label: "Postcode (Billing)",
    format: "string",
    colname: "お届け先郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先住所１（必須）",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping Address 1 (required)",
    format: "string",
    colname: "お届け先住所２",
  },
  {
    segment: "shipping",
    key: "shipping_address",
    label: "Address 1&2 (Shipping)",
    format: "string",
    colname: "お届け先住所３",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名称１（必須）",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping city",
    format: "string",
    colname: "お届け先名称２",
  },
  {
    segment: "common",
    key: "customer_management_number",
    label: "Customer Management Number",
    format: "string",
    colname: "お客様管理ナンバー",
  },
  {
    segment: "common",
    key: "customer_code",
    label: "Customer Code",
    format: "string",
    colname: "お客様コード",
  },
  {
    segment: "common",
    key: "person_in_charge",
    label: "Person in charge",
    format: "string",
    colname: "部署・担当者",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "荷送人電話番号",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "ご依頼主電話番号",
  },
  {
    segment: "billing",
    key: "billing_postcode",
    label: "Postcode (Billing)",
    format: "string",
    colname: "ご依頼主郵便番号",
  },
  {
    segment: "billing",
    key: "billing_state",
    label: "State Code (Billing)",
    format: "string",
    colname: "ご依頼主住所１",
  },
  {
    segment: "billing",
    key: "billing_country",
    label: "Country Code (Billing)",
    format: "string",
    colname: "ご依頼主住所２",
  },
  {
    segment: "billing",
    key: "billing_last_name",
    label: "Last Name (Billing)",
    format: "string",
    colname: "ご依頼主名称１",
  },
  {
    segment: "billing",
    key: "billing_first_name",
    label: "First Name (Billing)",
    format: "string",
    colname: "ご依頼主名称２",
  },
  {
    segment: "products",
    key: "plain_products_sku",
    label: "SKU",
    format: "string",
    colname: "荷姿コード",
  },
  {
    segment: "products",
    key: "plain_products_name",
    label: "Item Name",
    format: "string",
    colname: "品名１",
  },
  {
    segment: "products",
    key: "plain_products_name2",
    label: "Item Name",
    format: "string",
    colname: "品名2",
  },
  {
    segment: "products",
    key: "plain_products_qty",
    label: "Quantity",
    format: "number",
    colname: "出荷個数",
  },
  {
    segment: "shipping",
    key: "flight_type",
    label: "Flight type by speed",
    format: "string",
    colname: "便種（スピードで選択）",
  },
  {
    segment: "shipping",
    key: "flight_type",
    label: "Flight type",
    format: "string",
    colname: "便種（商品）",
  },
  {
    segment: "billing",
    key: "billing_city",
    label: "City (Billing)",
    format: "string",
    colname: "市区町村 (請求先)",
  },
  {
    segment: "billing",
    key: "billing_address",
    label: "Address 1&2 (Billing)",
    format: "string",
    colname: "以下住所(請求先)",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-date",
    label: "wc4jp-delivery-date",
    format: "string",
    colname: "配達日",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-time-zone",
    label: "wc4jp-delivery-time-zone",
    format: "string",
    colname: "配達指定時間帯",
  },
  {
    segment: "shipping",
    key: "wc4jp_tracking_ship_date",
    label: "wc4jp_tracking_ship_date",
    format: "string",
    colname: "配達指定時間（時分）",
  },
  {
    segment: "cart",
    key: "order_subtotal",
    label: "Order Subtotal Amount",
    format: "money",
    colname: "代引金額",
  },
  {
    segment: "totals",
    key: "order_total_tax",
    label: "Order Total Tax Amount",
    format: "money",
    colname: "消費税",
  },
  {
    segment: "cart",
    key: "payment_method_title",
    label: "Payment Method Title",
    format: "string",
    colname: "決済種別",
  },
  {
    segment: "common",
    key: "insurance_money",
    label: "insurance money",
    format: "money",
    colname: "保険金額",
  },
  {
    segment: "common",
    key: "insurance_money_printing",
    label: "insurance_money_printing",
    format: "string",
    colname: "保険金額印字",
  },
  {
    segment: "common",
    key: "designated_sticker_1",
    label: "designated_sticker_1",
    format: "string",
    colname: "指定シール①",
  },
  {
    segment: "common",
    key: "designated_sticker_2",
    label: "designated_sticker_2",
    format: "string",
    colname: "指定シール②",
  },
  {
    segment: "common",
    key: "designated_sticker_3",
    label: "designated_sticker_3",
    format: "string",
    colname: "指定シール③",
  },
  {
    segment: "common",
    key: "branch_stop",
    label: "branch_stop",
    format: "string",
    colname: "営業店止め",
  },
  {
    segment: "common",
    key: "src_classification",
    label: "Src classification",
    format: "string",
    colname: "SRC区分",
  },
  {
    segment: "common",
    key: "sales_office_code",
    label: "Sales office code",
    format: "string",
    colname: "営業店コード",
  },
  {
    segment: "common",
    key: "first_arrival_classification",
    label: "first arrival classification",
    format: "string",
    colname: "元着区分",
  },
];

const CSV_FORMAT_DATATABLE = [
  {
    segment: "common",
    key: "id",
    label: "id",
    format: "number",
    colname: "番号",
  },
  {
    segment: "common",
    key: "order_date",
    label: "Order Date",
    format: "date",
    colname: "注文日時",
  },
  {
    segment: "shipping",
    key: "shipping_first_name",
    label: "First Name (Shipping)",
    format: "string",
    colname: "注文者(配送先名)",
  },
  {
    segment: "common",
    key: "order_number",
    label: "Order Number",
    format: "string",
    colname: "注文番号",
  },
  {
    segment: "cart",
    key: "payment_method_title",
    label: "Payment Method Title",
    format: "string",
    colname: "決済方法",
  },
  {
    segment: "cart",
    key: "order_subtotal",
    label: "Order Subtotal Amount",
    format: "money",
    colname: "金額(個別)",
  },
  {
    segment: "ship_calc",
    key: "order_shipping",
    label: "Order Shipping Amount",
    format: "money",
    colname: "注文送料",
  },
  {
    segment: "totals",
    key: "order_total_tax",
    label: "Order Total Tax Amount",
    format: "money",
    colname: "合計税額",
  },
  {
    segment: "totals",
    key: "order_total",
    label: "Order Total Amount",
    format: "money",
    colname: "注文総額",
  },
];

const CSV_FORMAT_POSTPAY = [
  {
    segment: "common",
    key: "order_date",
    label: "Order Date",
    format: "date",
    colname: "注文日",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_address",
    label: "Address 1&2 (Shipping)",
    format: "string",
    colname: "住所",
  },
  {
    segment: "shipping",
    key: "shipping_name",
    label: "Name (Shipping)",
    format: "string",
    colname: "氏名",
  },
  {
    segment: "shipping",
    key: "shipping_name",
    label: "Name kana (Shipping)",
    format: "string",
    colname: "氏名かな",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "電話番号",
  },
  {
    segment: "shipping",
    key: "shipping_email",
    label: "Email (shipping)",
    format: "string",
    colname: "メールアドレス",
  },
  {
    segment: "shipping",
    key: "shipping_job",
    label: "job (shipping)",
    format: "string",
    colname: "職業",
  },
  {
    segment: "shipping",
    key: "shipping_postcode2",
    label: "Other shipping address postcode",
    format: "string",
    colname: "別配送先郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_address2",
    label: "Other Address 1&2 (Shipping)",
    format: "string",
    colname: "別配送先住所",
  },
  {
    segment: "shipping",
    key: "shipping_name2",
    label: "Other Name (Shipping)",
    format: "string",
    colname: "別配送先氏名",
  },
  {
    segment: "shipping",
    key: "shipping_name2",
    label: "Other Name kana (Shipping)",
    format: "string",
    colname: "別配送先氏名かな",
  },
  {
    segment: "shipping",
    key: "shipping_phone2",
    label: "Shipping Phone 2",
    format: "string",
    colname: "別配送先電話番号",
  },
  {
    segment: "products",
    key: "plain_products_name",
    label: "Item Name",
    format: "string",
    colname: "購入品目",
  },
  {
    segment: "products",
    key: "plain_products_item_price",
    label: "Item Cost",
    format: "money",
    colname: "単価",
  },
  {
    segment: "products",
    key: "plain_products_qty",
    label: "Quantity",
    format: "number",
    colname: "数量",
  },
  {
    segment: "ship_calc",
    key: "order_shipping",
    label: "Order Shipping Amount",
    format: "money",
    colname: "送料",
  },
  {
    segment: "ship_calc",
    key: "_line_subtotal_tax",
    label: "Order Shipping Tax",
    format: "money",
    colname: "店舗手数料",
  },
  {
    segment: "totals",
    key: "order_total_tax",
    label: "Order Total Tax Amount",
    format: "money",
    colname: "請求金額合計",
  },
  {
    segment: "common",
    key: "reception_site",
    label: "Reception Site",
    format: "string",
    colname: "受付サイト",
  },
  {
    segment: "common",
    key: "order_number",
    label: "Order Number",
    format: "string",
    colname: "任意注文番号",
  },
  {
    segment: "common",
    key: "customer_note",
    label: "Customer Note",
    format: "string",
    colname: "備考",
  },
];

const CSV_FORMAT_NITTSU = [
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名称１",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping city",
    format: "string",
    colname: "お届け先名称２",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "お届け先郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先住所１",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping city (required)",
    format: "string",
    colname: "お届け先住所２",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "お届け先電話番号",
  },
  {
    segment: "shipping",
    key: "shipper_last_name",
    label: "Last Name (Shipping)",
    format: "string",
    colname: "荷送人名称１",
  },
  {
    segment: "shipping",
    key: "shipper_first_name",
    label: "First Name (Shipping)",
    format: "string",
    colname: "荷送人名称２",
  },
  {
    segment: "shipping",
    key: "shipper_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "荷送人電話番号",
  },
  {
    segment: "customer",
    key: "customer_id",
    label: "Customer specific number",
    format: "string",
    colname: "お客様専用番号",
  },
  {
    segment: "products",
    key: "plain_products_name",
    label: "Item Name",
    format: "string",
    colname: "品名１",
  },
  {
    segment: "products",
    key: "plain_products_name2",
    label: "Item Name",
    format: "string",
    colname: "品名2",
  },
  {
    segment: "products",
    key: "plain_products_name2",
    label: "Item Name",
    format: "string",
    colname: "品名3",
  },
  {
    segment: "common",
    key: "post_title",
    label: "Article 1",
    format: "string",
    colname: "記事１",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-date",
    label: "wc4jp-delivery-date",
    format: "string",
    colname: "お届け指定年月日",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-time-zone",
    label: "wc4jp-delivery-time-zone",
    format: "string",
    colname: "お届け指定時間帯",
  },
  {
    segment: "shipping",
    key: "invoice_type",
    label: "Invoice Type",
    format: "string",
    colname: "送り状種別",
  },
  {
    segment: "product",
    key: "product_cat",
    label: "Cool classification",
    format: "string",
    colname: "クール区分",
  },
  {
    segment: "product",
    key: "product_size",
    label: "Size classification",
    format: "string",
    colname: "サイズ区分",
  },
  {
    segment: "products",
    key: "plain_products_item_price",
    label: "Registered product price",
    format: "money",
    colname: "登録品代金",
  },
  {
    segment: "product_calc",
    key: "products_item_tax",
    label: "Product price tax",
    format: "money",
    colname: "登録品代金消費税",
  },
];

const CSV_FORMAT_KANGAROO = [
  {
    segment: "shipping",
    key: "shipper_code",
    label: "Shipper code",
    format: "string",
    colname: "荷送人コード",
  },
  {
    segment: "shipping_custom",
    key: "seino_store_code",
    label: "Seino departure store code",
    format: "string",
    colname: "西濃発店コード",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-date",
    label: "wc4jp-delivery-date",
    format: "string",
    colname: "出荷予定日",
  },
  {
    segment: "shipping_custom",
    key: "inquiry_number",
    label: "inquiry number",
    format: "string",
    colname: "お問合せ番号",
  },
  {
    segment: "shipping_custom",
    key: "control_number",
    label: "Control number",
    format: "string",
    colname: "管理番号",
  },
  {
    segment: "shipping_custom",
    key: "arrival_cass",
    label: "First arrival classification",
    format: "string",
    colname: "元着区分",
  },
  {
    segment: "shipping_custom",
    key: "invoice_classification",
    label: "Invoice classification",
    format: "string",
    colname: "原票区分",
  },
  {
    segment: "products",
    key: "plain_products_qty",
    label: "Quantity",
    format: "number",
    colname: "個数",
  },
  {
    segment: "products",
    key: "weight_class",
    label: "Weight Class",
    format: "string",
    colname: "重量区分",
  },
  {
    segment: "products",
    key: "weight",
    label: "Weight Kg",
    format: "weight",
    colname: "重量（Ｋ）",
  },
  {
    segment: "products",
    key: "weight",
    label: "Weight gram",
    format: "weight",
    colname: "重量（才）",
  },
  {
    segment: "shipping",
    key: "shipper_last_name",
    label: "Last Name (Shipping)",
    format: "string",
    colname: "荷送人名称",
  },
  {
    segment: "shipping",
    key: "shipping_address1",
    label: "Shipping Address 1",
    format: "string",
    colname: "荷送人住所１",
  },
  {
    segment: "shipping",
    key: "shipping_address1",
    label: "Shipping Address 2",
    format: "string",
    colname: "荷送人住所２",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "荷送人電話番号",
  },
  {
    segment: "shipping",
    key: "depart_code",
    label: "Department code",
    format: "string",
    colname: "部署コード",
  },
  {
    segment: "shipping",
    key: "depart_name",
    label: "Department name",
    format: "string",
    colname: "部署名",
  },
  {
    segment: "shipping",
    key: "weight_contract_class",
    label: "Weight contract class",
    format: "string",
    colname: "重量契約区分",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "お届け先郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名称１",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping city",
    format: "string",
    colname: "お届け先名称２",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先住所１",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping Address 1 (required)",
    format: "string",
    colname: "お届け先住所２",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "お届け先電話番号",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "お届け先コード",
  },
  {
    segment: "shipping",
    key: "shipping_JIS_code",
    label: "Delivery address JIS code",
    format: "string",
    colname: "お届け先JIS市町村コード",
  },
  {
    segment: "shipping",
    key: "arrival_code_class",
    label: "Arrival code class",
    format: "string",
    colname: "着店コード付け区分",
  },
  {
    segment: "shipping",
    key: "landing_code",
    label: "Landing code",
    format: "string",
    colname: "着地コード",
  },
  {
    segment: "shipping",
    key: "arrival_code",
    label: "Arrival code",
    format: "string",
    colname: "着店コード",
  },
  {
    segment: "common",
    key: "insurance_money",
    label: "insurance money",
    format: "money",
    colname: "保険金額",
  },
  {
    segment: "common",
    key: "transport_inst1",
    label: "Transport Instruction",
    format: "string",
    colname: "輸送指示１",
  },
  {
    segment: "common",
    key: "transport_inst2",
    label: "Transport Instruction",
    format: "string",
    colname: "輸送指示２",
  },
  {
    segment: "common",
    key: "post_title",
    label: "Article 1",
    format: "string",
    colname: "記事１",
  },
  {
    segment: "common",
    key: "post_title2",
    label: "Article 2",
    format: "string",
    colname: "記事２",
  },
  {
    segment: "common",
    key: "post_title3",
    label: "Article 3",
    format: "string",
    colname: "記事３",
  },
  {
    segment: "common",
    key: "post_title4",
    label: "Article 4",
    format: "string",
    colname: "記事４",
  },
  {
    segment: "common",
    key: "post_title5",
    label: "Article 5",
    format: "string",
    colname: "記事５",
  },
  {
    segment: "common",
    key: "transport_inst",
    label: "Transport Instructions",
    format: "string",
    colname: "輸送指示（配達指定日付）",
  },
  {
    segment: "common",
    key: "transport_inst_code1",
    label: "Transport Instruction Code1",
    format: "string",
    colname: "輸送指示コード１",
  },
  {
    segment: "common",
    key: "transport_inst_code2",
    label: "Transport Instruction Code2",
    format: "string",
    colname: "輸送指示コード2",
  },
  {
    segment: "common",
    key: "transport_inst_shop",
    label: "Transport instructions ( stop shop name )",
    format: "string",
    colname: "輸送指示（止め店所名）",
  },
  {
    segment: "common",
    key: "spare",
    label: "spare",
    format: "string",
    colname: "予備",
  },
  {
    segment: "products",
    key: "plain_products_item_price",
    label: "Item Cost",
    format: "money",
    colname: "品代金",
  },
  {
    segment: "totals",
    key: "order_total_tax",
    label: "Order Total Tax Amount",
    format: "money",
    colname: "消費税等",
  },
];

const CSV_FORMAT_YAMATO_part = [
  {
    segment: "shipping_custom",
    key: "control_number",
    label: "Control number",
    format: "string",
    colname: "お客様管理番号",
  },
  {
    segment: "shipping",
    key: "invoice_type",
    label: "Invoice Type",
    format: "string",
    colname: "送り状種別",
  },
  {
    segment: "product",
    key: "product_cat",
    label: "Cool classification",
    format: "string",
    colname: "クール区分",
  },
  {
    segment: "common",
    key: "invoice_number",
    label: "Invoice Number",
    format: "string",
    colname: "伝票番号",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-date",
    label: "wc4jp-delivery-date",
    format: "string",
    colname: "出荷予定日",
  },
  {
    segment: "shipping",
    key: "wc4jp_tracking_ship_date",
    label: "wc4jp_tracking_ship_date",
    format: "string",
    colname: "お届け予定（指定）日",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-time-zone",
    label: "wc4jp-delivery-time-zone",
    format: "string",
    colname: "配達時間帯",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "お届け先コード",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "お届け先電話番号",
  },
  {
    segment: "shipping",
    key: "shipping_phone",
    label: "Shipping Phone",
    format: "string",
    colname: "お届け先電話番号枝番",
  },
  {
    segment: "shipping",
    key: "shipping_postcode",
    label: "Postcode (Shipping)",
    format: "string",
    colname: "お届け先郵便番号",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先住所１",
  },
  {
    segment: "shipping",
    key: "shipping_city",
    label: "Shipping Address 1 (required)",
    format: "string",
    colname: "お届け先住所２",
  },
  {
    segment: "shipping",
    key: "shipping_company_name1",
    label: "Shipping Company name",
    format: "string",
    colname: "お届け先 会社・部門名１",
  },
  {
    segment: "shipping",
    key: "shipping_company_name2",
    label: "Shipping Company name2",
    format: "string",
    colname: "お届け先 会社・部門名２",
  },
  {
    segment: "shipping",
    key: "shipping_state",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名",
  },
  {
    segment: "shipping",
    key: "shipping_state_kana",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名略称カナ",
  },
  {
    segment: "shipping",
    key: "shipping_state_kana",
    label: "Shipping state (Shipping)",
    format: "string",
    colname: "お届け先名略称カナ",
  },

  // stopped
];

const CSV_FORMAT_GENERAL = [
  {
    segment: "common",
    key: "order_date",
    label: "Order Date",
    format: "date",
    colname: "日付",
  },
  {
    segment: "common",
    key: "order_number",
    label: "Order Number",
    format: "string",
    colname: "注文番号",
  },
  {
    segment: "common",
    key: "process_status",
    label: "process status",
    format: "string",
    colname: "処理状況",
  },
  {
    segment: "billing",
    key: "billing_name",
    label: "Name (Billing)",
    format: "string",
    colname: "注文者",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "注文者電話番号",
  },
  {
    segment: "billing",
    key: "billing_state",
    label: "Billing State (required)",
    format: "string",
    colname: "注文者の住所",
  },
  {
    segment: "common",
    key: "recipient_name",
    label: "Recipient Name",
    format: "string",
    colname: "受取人",
  },
  {
    segment: "common",
    key: "recipient_phone",
    label: "Recipient phone",
    format: "string",
    colname: "受取人の電話番号",
  },
  {
    segment: "billing",
    key: "billing_city",
    label: "Billing Address 1 (required)",
    format: "string",
    colname: "住所",
  },
  {
    segment: "products",
    key: "plain_products_name",
    label: "Item Name",
    format: "string",
    colname: "商品名",
  },
  {
    segment: "products",
    key: "plain_products_qty",
    label: "Quantity",
    format: "number",
    colname: "個数",
  },
  {
    segment: "products",
    key: "",
    label: "product event",
    format: "string",
    colname: "OPTION+商品別特殊表示",
  },
  {
    segment: "products",
    key: "plain_products_sku",
    label: "SKU",
    format: "string",
    colname: "独自商品コード",
  },
  {
    segment: "products",
    key: "plain_products_sku",
    label: "SKU",
    format: "string",
    colname: "オプション独自コード",
  },
  {
    segment: "products",
    key: "jan_code",
    label: "JAN Code",
    format: "string",
    colname: "JANコード",
  },
  {
    segment: "ship_calc",
    key: "order_shipping",
    label: "Order Shipping Amount",
    format: "money",
    colname: "送料",
  },
  {
    segment: "ship_calc",
    key: "shipping_method_title",
    label: "Shipping Method Title",
    format: "string",
    colname: "配送方法",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-date",
    label: "wc4jp-delivery-date",
    format: "string",
    colname: "配送希望日",
  },
  {
    segment: "shipping",
    key: "wc4jp_tracking_ship_date",
    label: "wc4jp_tracking_ship_date",
    format: "string",
    colname: "出荷予定日",
  },
  {
    segment: "shipping",
    key: "wc4jp-delivery-time-zone",
    label: "wc4jp-delivery-time-zone",
    format: "string",
    colname: "配送希望時間帯",
  },
  {
    segment: "common",
    key: "invoice_number",
    label: "Invoice Number",
    format: "string",
    colname: "伝票番号",
  },
  {
    segment: "common",
    key: "customer_note",
    label: "Customer Note",
    format: "string",
    colname: "メッセージ",
  },
  {
    segment: "common",
    key: "customer_note",
    label: "Customer Note",
    format: "string",
    colname: "メモ",
  },
];

const CSV_FORMAT_ADDRESS = [
  {
    segment: "common",
    key: "order_date",
    label: "Order Date",
    format: "date",
    colname: "注文日",
  },
  {
    segment: "customer",
    key: "customer_id",
    label: "Customer specific number",
    format: "string",
    colname: "会員ID",
  },
  {
    segment: "common",
    key: "order_number",
    label: "Order Number",
    format: "string",
    colname: "注文番号",
  },
  {
    segment: "common",
    key: "process_status",
    label: "process status",
    format: "string",
    colname: "処理状態",
  },
  {
    segment: "cart",
    key: "payment_method_title",
    label: "Payment Method Title",
    format: "string",
    colname: "決済状態",
  },
  {
    segment: "totals",
    key: "order_total",
    label: "Order Total Amount",
    format: "money",
    colname: "合計金額",
  },
  {
    segment: "ship_calc",
    key: "shipping_method_title",
    label: "Shipping Method Title",
    format: "string",
    colname: "配送方法",
  },
  {
    segment: "billing",
    key: "billing_name",
    label: "Name (Billing)",
    format: "string",
    colname: "注文者",
  },
  {
    segment: "billing",
    key: "billing_email",
    label: "Email (Billing)",
    format: "string",
    colname: "E-mail",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "電話番号(注文者)",
  },
  {
    segment: "common",
    key: "recipient_name",
    label: "Recipient Name",
    format: "string",
    colname: "受取人",
  },
  {
    segment: "common",
    key: "recipient_phone",
    label: "Recipient phone",
    format: "string",
    colname: "電話番号(受取人)",
  },
  {
    segment: "billing",
    key: "billing_phone",
    label: "Phone (Billing)",
    format: "string",
    colname: "非常電話番号",
  },
  {
    segment: "billing",
    key: "billing_postcode",
    label: "Postcode (Billing)",
    format: "string",
    colname: "郵便番号",
  },
  {
    segment: "billing",
    key: "billing_state",
    label: "State Code (Billing)",
    format: "string",
    colname: "都道府県",
  },
  {
    segment: "billing",
    key: "billing_address",
    label: "Address 1&2 (billing)",
    format: "string",
    colname: "住所",
  },
];

export {
  CSV_FORMAT_EHIDEN,
  CSV_FORMAT_DATATABLE,
  CSV_FORMAT_POSTPAY,
  CSV_FORMAT_NITTSU,
  CSV_FORMAT_KANGAROO,
  CSV_FORMAT_YAMATO,
  CSV_FORMAT_GENERAL,
  CSV_FORMAT_ADDRESS,
};
