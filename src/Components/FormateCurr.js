const CurrencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style:"currency"
})
 export const FormatCurr = (number) => {
    return CurrencyFormatter.format(number)
}