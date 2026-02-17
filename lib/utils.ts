export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
