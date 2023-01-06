import { loadStripe } from "@stripe/stripe-js";
//  const publickey = "pk_test_51MKm8uSIgmHEPj1ZYvVpMHdmZIP36JgSY4ZKlNGcIL9lHJQb9SuMM0vRWO606twuf13FSqaOTA6fxqGhD3nPmNs900sPWMO0zM"

export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)