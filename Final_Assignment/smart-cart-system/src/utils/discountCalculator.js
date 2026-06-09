export default function calculateDiscounts(cart = []) {

    const safeNumber = (value) => {
        if (isNaN(value)) {
            return 0;
        }

        return Number(value);
    };

    const items = cart.map((item) => {

        let name = "";

        if (item.name) {
            name = item.name;
        } else if (item.title) {
            name = item.title;
        }

        let qty = Math.floor(safeNumber(item.qty));

        if (qty < 0) {
            qty = 0;
        }

        const unitPrice = safeNumber(item.price);
        const subtotal = unitPrice * qty;

        let productDiscount = 0;

        if (qty >= 3) {
            productDiscount = subtotal * 0.10;
        }

        const subtotalAfterProductDiscount =
            subtotal - productDiscount;

        return {
            id: item.id,
            name: name,
            qty: qty,
            unitPrice: Number(unitPrice.toFixed(2)),
            subtotal: Number(subtotal.toFixed(2)),
            productDiscount: Number(productDiscount.toFixed(2)),
            subtotalAfterProductDiscount: Number(
                subtotalAfterProductDiscount.toFixed(2)
            )
        };
    });

    let baseSubtotal = 0;

    items.forEach((item) => {
        baseSubtotal += item.subtotal;
    });

    baseSubtotal = Number(baseSubtotal.toFixed(2));

    let productDiscountTotal = 0;

    items.forEach((item) => {
        productDiscountTotal += item.productDiscount;
    });

    productDiscountTotal = Number(
        productDiscountTotal.toFixed(2)
    );

    const subtotalAfterProductDiscounts = Number(
        (baseSubtotal - productDiscountTotal).toFixed(2)
    );

    let cartDiscount = 0;

    if (subtotalAfterProductDiscounts > 5000) {
        cartDiscount = Number(
            (subtotalAfterProductDiscounts * 0.05).toFixed(2)
        );
    }

    const finalAmount = Number(
        (subtotalAfterProductDiscounts - cartDiscount).toFixed(2)
    );

    return {
        items,
        baseSubtotal,
        productDiscountTotal,
        subtotalAfterProductDiscounts,
        cartDiscount,
        finalAmount
    };
}